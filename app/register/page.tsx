'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    userType: 'customer' | 'provider';
    agreeToTerms: boolean;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
    agreeToTerms?: string;
    general?: string;
}

export default function RegisterPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        userType: 'customer',
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [phoneVerificationCode, setPhoneVerificationCode] = useState('');
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [showPhoneVerification, setShowPhoneVerification] = useState(false);
    const [verificationTimer, setVerificationTimer] = useState(0);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // First name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'الاسم الأول مطلوب';
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = 'الاسم الأول يجب أن يكون أكثر من حرف واحد';
        }

        // Last name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'اسم العائلة مطلوب';
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = 'اسم العائلة يجب أن يكون أكثر من حرف واحد';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }

        // Phone validation (Enhanced)
        const phoneRegex = /^(05|5)[0-9]{8}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'رقم الجوال مطلوب - هذا الحقل إجباري للتسجيل';
        } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'رقم الجوال غير صحيح (يجب أن يبدأ بـ 05 ويتكون من 10 أرقام)';
        } else if (!isPhoneVerified) {
            newErrors.phone = 'يجب تأكيد رقم الجوال أولاً';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        } else if (formData.password.length < 8) {
            newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'كلمة المرور يجب أن تحتوي على حروف كبيرة وصغيرة وأرقام';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
        }

        // Terms agreement validation
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'يجب الموافقة على الشروط والأحكام';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendVerificationCode = async () => {
        const phoneRegex = /^(05|5)[0-9]{8}$/;
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            setErrors({ phone: 'يرجى إدخال رقم جوال صحيح أولاً' });
            return;
        }

        setShowPhoneVerification(true);
        setVerificationTimer(60);

        // Start countdown timer
        const timer = setInterval(() => {
            setVerificationTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Show notification
        if (typeof window !== 'undefined' && (window as any).showNotification) {
            (window as any).showNotification({
                type: 'success',
                title: 'تم إرسال رمز التحقق',
                message: `تم إرسال رمز التحقق إلى ${formData.phone}`,
                duration: 4000,
            });
        }
    };

    const verifyPhoneCode = async () => {
        if (phoneVerificationCode.length !== 4) {
            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'error',
                    title: 'رمز التحقق غير صحيح',
                    message: 'يرجى إدخال رمز التحقق المكون من 4 أرقام',
                    duration: 4000,
                });
            }
            return;
        }

        // Simulate verification (in real app, verify with backend)
        if (phoneVerificationCode === '1234') {
            setIsPhoneVerified(true);
            setShowPhoneVerification(false);

            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'success',
                    title: 'تم تأكيد رقم الجوال',
                    message: 'تم تأكيد رقم الجوال بنجاح',
                    duration: 4000,
                });
            }
        } else {
            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'error',
                    title: 'رمز التحقق خاطئ',
                    message: 'رمز التحقق المدخل غير صحيح، يرجى المحاولة مرة أخرى',
                    duration: 4000,
                });
            }
        }
    };

    const handleInputChange = (field: keyof FormData, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Clear error when user starts typing
        if (errors[field as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [field]: undefined,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Here you would typically make an API call to register the user
            console.log('Registration data:', formData);

            // Show success message and redirect
            alert('تم إنشاء الحساب بنجاح! سيتم توجيهك لتسجيل الدخول');
            // In a real app, you would redirect to login or dashboard
            window.location.href = '/login';
        } catch (error) {
            setErrors({
                general: 'حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const nextStep = () => {
        if (currentStep === 1) {
            // Validate first step
            const stepErrors: FormErrors = {};
            if (!formData.firstName.trim()) stepErrors.firstName = 'الاسم الأول مطلوب';
            if (!formData.lastName.trim()) stepErrors.lastName = 'اسم العائلة مطلوب';
            if (!formData.email.trim()) stepErrors.email = 'البريد الإلكتروني مطلوب';
            if (!formData.phone.trim()) stepErrors.phone = 'رقم الجوال مطلوب';

            if (Object.keys(stepErrors).length > 0) {
                setErrors(stepErrors);
                return;
            }
        }
        setCurrentStep(2);
    };

    const prevStep = () => {
        setCurrentStep(1);
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="nh4-7bl">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="f75ok1:"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="fuaf_8m">
                    <div className="flex items-center justify-between mb-4" data-oid="5k_bqdq">
                        <Link
                            href="/login"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="h-xe98m"
                        >
                            <span className="text-lg" data-oid="u68rei4">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="8a66eh8">
                            إنشاء حساب جديد
                        </h1>
                        <div className="w-10" data-oid="f46a1zy"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="fuo-_lh">
                        انضم إلينا واحصل على أفضل الخدمات
                    </p>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6" data-oid="osc5ljl">
                <div className="bg-white rounded-2xl shadow-lg p-4" data-oid="ggm.is8">
                    <div className="flex items-center justify-between mb-2" data-oid="k-8tnis">
                        <span className="text-sm text-gray-600" data-oid="b.o6y2q">
                            الخطوة {currentStep} من 2
                        </span>
                        <span className="text-sm text-gray-600" data-oid="vsakq0-">
                            {currentStep === 1 ? 'المعلومات الأساسية' : 'كلمة المرور والتفضيلات'}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2" data-oid="j68kmgj">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / 2) * 100}%` }}
                            data-oid="rhgb2vs"
                        ></div>
                    </div>
                </div>
            </div>

            {/* Registration Form */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="hey5l4d">
                <form onSubmit={handleSubmit} className="space-y-6" data-oid="f9o4s3r">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                        <div className="space-y-4" data-oid="ns9mr88">
                            {/* User Type Selection */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="69vwpg9"
                            >
                                <h3 className="font-semibold text-gray-800 mb-3" data-oid="qnxvqs1">
                                    نوع الحساب
                                </h3>
                                <div className="grid grid-cols-2 gap-3" data-oid="1.4yjv9">
                                    <button
                                        type="button"
                                        onClick={() => handleInputChange('userType', 'customer')}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                            formData.userType === 'customer'
                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                : 'border-gray-200 bg-white text-gray-700'
                                        }`}
                                        data-oid="cs17net"
                                    >
                                        <div className="text-2xl mb-2" data-oid="pkqo9vq">
                                            👤
                                        </div>
                                        <div className="font-semibold text-sm" data-oid="ef.7bo9">
                                            عميل
                                        </div>
                                        <div className="text-xs text-gray-600" data-oid="3uholko">
                                            أطلب الخدمات
                                        </div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleInputChange('userType', 'provider')}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                            formData.userType === 'provider'
                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                : 'border-gray-200 bg-white text-gray-700'
                                        }`}
                                        data-oid=".1r3g8y"
                                    >
                                        <div className="text-2xl mb-2" data-oid="m6-3ltn">
                                            🔧
                                        </div>
                                        <div className="font-semibold text-sm" data-oid="3stvy92">
                                            مقدم خدمة
                                        </div>
                                        <div className="text-xs text-gray-600" data-oid="1j:.ix3">
                                            أقدم الخدمات
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Name Fields */}
                            <div className="grid grid-cols-2 gap-3" data-oid="43mj4mf">
                                <div
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="fv4t-kz"
                                >
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="qcxum1s"
                                    >
                                        الاسم الأول *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) =>
                                            handleInputChange('firstName', e.target.value)
                                        }
                                        className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                            errors.firstName
                                                ? 'border-red-500'
                                                : 'border-gray-300 focus:border-blue-500'
                                        }`}
                                        placeholder="أدخل اسمك الأول"
                                        data-oid="9qf3k5j"
                                    />

                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1" data-oid="q2s4m5t">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>

                                <div
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="buuq457"
                                >
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="42nghhh"
                                    >
                                        اسم العائلة *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) =>
                                            handleInputChange('lastName', e.target.value)
                                        }
                                        className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                            errors.lastName
                                                ? 'border-red-500'
                                                : 'border-gray-300 focus:border-blue-500'
                                        }`}
                                        placeholder="أدخل اسم العائلة"
                                        data-oid="3carnu5"
                                    />

                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1" data-oid="x1p8-fs">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="6wvnhko"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="die7d-e"
                                >
                                    البريد الإلكتروني *
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                        errors.email
                                            ? 'border-red-500'
                                            : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                    placeholder="example@email.com"
                                    dir="ltr"
                                    data-oid="t7kkqp-"
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="8v6h.cd">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Phone Field - Enhanced */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border-2 border-blue-200"
                                data-oid="4od1y6o"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="1.oltgq"
                                >
                                    رقم الجوال *
                                    <span className="text-blue-600 text-xs mr-1" data-oid=":cbsbpm">
                                        (مطلوب للتحقق)
                                    </span>
                                </label>
                                <div className="flex space-x-2 space-x-reverse" data-oid="f:hj4vj">
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            handleInputChange('phone', e.target.value);
                                            setIsPhoneVerified(false);
                                        }}
                                        className={`flex-1 p-3 border rounded-xl outline-none transition-colors ${
                                            errors.phone
                                                ? 'border-red-500'
                                                : isPhoneVerified
                                                  ? 'border-green-500 bg-green-50'
                                                  : 'border-gray-300 focus:border-blue-500'
                                        }`}
                                        placeholder="05xxxxxxxx"
                                        dir="ltr"
                                        data-oid="z6f7oqf"
                                    />

                                    <button
                                        type="button"
                                        onClick={sendVerificationCode}
                                        disabled={!formData.phone || isPhoneVerified}
                                        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                                            isPhoneVerified
                                                ? 'bg-green-500 text-white'
                                                : formData.phone
                                                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                                                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                        data-oid="y19jqd2"
                                    >
                                        {isPhoneVerified ? '✓ مؤكد' : 'تحقق'}
                                    </button>
                                </div>

                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="zm6pnhv">
                                        {errors.phone}
                                    </p>
                                )}

                                {isPhoneVerified && (
                                    <p
                                        className="text-green-600 text-xs mt-1 flex items-center"
                                        data-oid="towsm:s"
                                    >
                                        <span className="mr-1" data-oid="oc9w5zv">
                                            ✓
                                        </span>
                                        تم تأكيد رقم الجوال بنجاح
                                    </p>
                                )}

                                <div className="mt-2 text-xs text-gray-600" data-oid="5m0u5fz">
                                    <p data-oid="9qs6izi">
                                        • سيتم إرسال رمز تحقق عبر الرسائل النصية
                                    </p>
                                    <p data-oid="3_7i027">
                                        • رقم الجوال مطلوب لتأمين حسابك وإرسال الإشعارات
                                    </p>
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors"
                                data-oid="67q28zt"
                            >
                                التالي
                            </button>
                        </div>
                    )}

                    {/* Step 2: Password and Preferences */}
                    {currentStep === 2 && (
                        <div className="space-y-4" data-oid="au.1r.b">
                            {/* Password Field */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="_0z8s5q"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid=":3e6_mi"
                                >
                                    كلمة المرور *
                                </label>
                                <div className="relative" data-oid="7ttbgwu">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) =>
                                            handleInputChange('password', e.target.value)
                                        }
                                        className={`w-full p-3 border rounded-xl outline-none transition-colors pr-12 ${
                                            errors.password
                                                ? 'border-red-500'
                                                : 'border-gray-300 focus:border-blue-500'
                                        }`}
                                        placeholder="أدخل كلمة مرور قوية"
                                        dir="ltr"
                                        data-oid="s7016k4"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="p-9vt.c"
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="ydd3b-n">
                                        {errors.password}
                                    </p>
                                )}
                                <div className="mt-2 text-xs text-gray-600" data-oid="f4gaw11">
                                    <p data-oid="hy7e1w0">كلمة المرور يجب أن تحتوي على:</p>
                                    <ul
                                        className="list-disc list-inside mt-1 space-y-1"
                                        data-oid="1z1e1ba"
                                    >
                                        <li data-oid="-5o7f6t">8 أحرف على الأقل</li>
                                        <li data-oid="dv0m:e9">حروف كبيرة وصغيرة</li>
                                        <li data-oid="he78myo">أرقام</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="r4yv1uv"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="c6le8:c"
                                >
                                    تأكيد كلمة المرور *
                                </label>
                                <div className="relative" data-oid="bpr-87i">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={formData.confirmPassword}
                                        onChange={(e) =>
                                            handleInputChange('confirmPassword', e.target.value)
                                        }
                                        className={`w-full p-3 border rounded-xl outline-none transition-colors pr-12 ${
                                            errors.confirmPassword
                                                ? 'border-red-500'
                                                : 'border-gray-300 focus:border-blue-500'
                                        }`}
                                        placeholder="أعد إدخال كلمة المرور"
                                        dir="ltr"
                                        data-oid="2pm.z3j"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="igknhrx"
                                    >
                                        {showConfirmPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="eqy1nfv">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Terms Agreement */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="0n72e3p"
                            >
                                <label
                                    className="flex items-start space-x-3 space-x-reverse cursor-pointer"
                                    data-oid="f05epby"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) =>
                                            handleInputChange('agreeToTerms', e.target.checked)
                                        }
                                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        data-oid="jyi1_.i"
                                    />

                                    <div className="text-sm text-gray-700" data-oid="mdms070">
                                        <span data-oid="9h_1pww">أوافق على </span>
                                        <Link
                                            href="/terms"
                                            className="text-blue-600 underline"
                                            data-oid="lgkvo0n"
                                        >
                                            الشروط والأحكام
                                        </Link>
                                        <span data-oid="4vrd.w:"> و </span>
                                        <Link
                                            href="/privacy"
                                            className="text-blue-600 underline"
                                            data-oid="h0i0eif"
                                        >
                                            سياسة الخصوصية
                                        </Link>
                                    </div>
                                </label>
                                {errors.agreeToTerms && (
                                    <p className="text-red-500 text-xs mt-1" data-oid=":vq_0e_">
                                        {errors.agreeToTerms}
                                    </p>
                                )}
                            </div>

                            {/* Error Message */}
                            {errors.general && (
                                <div
                                    className="bg-red-50 border border-red-200 rounded-2xl p-4"
                                    data-oid="xy_z-co"
                                >
                                    <p className="text-red-600 text-sm" data-oid="oip35ew">
                                        {errors.general}
                                    </p>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex space-x-3 space-x-reverse" data-oid="l8luxk.">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                    data-oid="7pr1cho"
                                >
                                    السابق
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    data-oid="jksgioe"
                                >
                                    {isLoading ? (
                                        <div
                                            className="flex items-center justify-center space-x-2 space-x-reverse"
                                            data-oid="-xy.4s."
                                        >
                                            <div
                                                className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                data-oid="5umngx2"
                                            ></div>
                                            <span data-oid="47zjr:a">جاري إنشاء الحساب...</span>
                                        </div>
                                    ) : (
                                        'إنشاء الحساب'
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center" data-oid="p_2k8yd">
                    <p className="text-gray-600 text-sm" data-oid="3lgond2">
                        لديك حساب بالفعل؟{' '}
                        <Link
                            href="/login"
                            className="text-blue-600 font-semibold"
                            data-oid="useg3xv"
                        >
                            تسجيل الدخول
                        </Link>
                    </p>
                </div>

                {/* Social Registration */}
                <div className="mt-6" data-oid="wo3ni3w">
                    <div className="relative" data-oid="7cy3-ys">
                        <div className="absolute inset-0 flex items-center" data-oid="4:r7gpk">
                            <div
                                className="w-full border-t border-gray-300"
                                data-oid="2fe6g.."
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm" data-oid="77z-1zo">
                            <span className="px-2 bg-gray-50 text-gray-500" data-oid="x75q9j6">
                                أو
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3" data-oid="ug-k-f4">
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="1cpauc3"
                        >
                            <span className="text-xl" data-oid="k4hoq4.">
                                📱
                            </span>
                            <span data-oid="lipuzwh">التسجيل باستخدام أبشر</span>
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="e48sk8c"
                        >
                            <span className="text-xl" data-oid="apzb_x1">
                                🍎
                            </span>
                            <span data-oid="v5ow6v7">التسجيل باستخدام Apple</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
