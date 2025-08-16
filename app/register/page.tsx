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
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link
                            href="/login"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            <span className="text-lg">←</span>
                        </Link>
                        <h1 className="text-xl font-bold">إنشاء حساب جديد</h1>
                        <div className="w-10"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center">
                        انضم إلينا واحصل على أفضل الخدمات
                    </p>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6">
                <div className="bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">الخطوة {currentStep} من 2</span>
                        <span className="text-sm text-gray-600">
                            {currentStep === 1 ? 'المعلومات الأساسية' : 'كلمة المرور والتفضيلات'}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / 2) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Registration Form */}
            <div className="max-w-sm mx-auto px-4 pb-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            {/* User Type Selection */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <h3 className="font-semibold text-gray-800 mb-3">نوع الحساب</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => handleInputChange('userType', 'customer')}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                            formData.userType === 'customer'
                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                : 'border-gray-200 bg-white text-gray-700'
                                        }`}
                                    >
                                        <div className="text-2xl mb-2">👤</div>
                                        <div className="font-semibold text-sm">عميل</div>
                                        <div className="text-xs text-gray-600">أطلب الخدمات</div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleInputChange('userType', 'provider')}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                            formData.userType === 'provider'
                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                : 'border-gray-200 bg-white text-gray-700'
                                        }`}
                                    >
                                        <div className="text-2xl mb-2">🔧</div>
                                        <div className="font-semibold text-sm">مقدم خدمة</div>
                                        <div className="text-xs text-gray-600">أقدم الخدمات</div>
                                    </button>
                                </div>
                            </div>

                            {/* Name Fields */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                                    />

                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>

                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                                    />

                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone Field - Enhanced */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-blue-200">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    رقم الجوال *
                                    <span className="text-blue-600 text-xs mr-1">
                                        (مطلوب للتحقق)
                                    </span>
                                </label>
                                <div className="flex space-x-2 space-x-reverse">
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
                                    >
                                        {isPhoneVerified ? '✓ مؤكد' : 'تحقق'}
                                    </button>
                                </div>

                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                )}

                                {isPhoneVerified && (
                                    <p className="text-green-600 text-xs mt-1 flex items-center">
                                        <span className="mr-1">✓</span>
                                        تم تأكيد رقم الجوال بنجاح
                                    </p>
                                )}

                                <div className="mt-2 text-xs text-gray-600">
                                    <p>• سيتم إرسال رمز تحقق عبر الرسائل النصية</p>
                                    <p>• رقم الجوال مطلوب لتأمين حسابك وإرسال الإشعارات</p>
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors"
                            >
                                التالي
                            </button>
                        </div>
                    )}

                    {/* Step 2: Password and Preferences */}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            {/* Password Field */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    كلمة المرور *
                                </label>
                                <div className="relative">
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
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                                <div className="mt-2 text-xs text-gray-600">
                                    <p>كلمة المرور يجب أن تحتوي على:</p>
                                    <ul className="list-disc list-inside mt-1 space-y-1">
                                        <li>8 أحرف على الأقل</li>
                                        <li>حروف كبيرة وصغيرة</li>
                                        <li>أرقام</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    تأكيد كلمة المرور *
                                </label>
                                <div className="relative">
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
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    >
                                        {showConfirmPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Terms Agreement */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="flex items-start space-x-3 space-x-reverse cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) =>
                                            handleInputChange('agreeToTerms', e.target.checked)
                                        }
                                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />

                                    <div className="text-sm text-gray-700">
                                        <span>أوافق على </span>
                                        <Link href="/terms" className="text-blue-600 underline">
                                            الشروط والأحكام
                                        </Link>
                                        <span> و </span>
                                        <Link href="/privacy" className="text-blue-600 underline">
                                            سياسة الخصوصية
                                        </Link>
                                    </div>
                                </label>
                                {errors.agreeToTerms && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.agreeToTerms}
                                    </p>
                                )}
                            </div>

                            {/* Error Message */}
                            {errors.general && (
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                                    <p className="text-red-600 text-sm">{errors.general}</p>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex space-x-3 space-x-reverse">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    السابق
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center space-x-2 space-x-reverse">
                                            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                            <span>جاري إنشاء الحساب...</span>
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
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        لديك حساب بالفعل؟{' '}
                        <Link href="/login" className="text-blue-600 font-semibold">
                            تسجيل الدخول
                        </Link>
                    </p>
                </div>

                {/* Social Registration */}
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-50 text-gray-500">أو</span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-xl">📱</span>
                            <span>التسجيل باستخدام أبشر</span>
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-xl">🍎</span>
                            <span>التسجيل باستخدام Apple</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
