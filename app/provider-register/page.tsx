'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProviderFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    businessName: string;
    businessType: string;
    serviceCategories: string[];
    experience: string;
    workingHours: {
        start: string;
        end: string;
    };
    serviceAreas: string[];
    nationalId: string;
    commercialRegister: string;
    bankAccount: string;
    agreeToTerms: boolean;
    agreeToProviderTerms: boolean;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
    businessName?: string;
    businessType?: string;
    serviceCategories?: string;
    experience?: string;
    workingHours?: string;
    serviceAreas?: string;
    nationalId?: string;
    commercialRegister?: string;
    bankAccount?: string;
    agreeToTerms?: string;
    agreeToProviderTerms?: string;
    general?: string;
}

export default function ProviderRegisterPage() {
    const [formData, setFormData] = useState<ProviderFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        businessType: 'individual',
        serviceCategories: [],
        experience: '',
        workingHours: {
            start: '08:00',
            end: '18:00',
        },
        serviceAreas: [],
        nationalId: '',
        commercialRegister: '',
        bankAccount: '',
        agreeToTerms: false,
        agreeToProviderTerms: false,
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

    const serviceCategories = [
        { id: 'cleaning', name: 'تنظيف المنازل', icon: '🧹' },
        { id: 'plumbing', name: 'السباكة', icon: '🔧' },
        { id: 'electrical', name: 'الكهرباء', icon: '⚡' },
        { id: 'carpentry', name: 'النجارة', icon: '🔨' },
        { id: 'painting', name: 'الدهان', icon: '🎨' },
        { id: 'gardening', name: 'البستنة', icon: '🌱' },
        { id: 'delivery', name: 'التوصيل', icon: '🚚' },
        { id: 'tutoring', name: 'التدريس', icon: '📚' },
        { id: 'beauty', name: 'التجميل', icon: '💄' },
        { id: 'fitness', name: 'اللياقة البدنية', icon: '💪' },
        { id: 'photography', name: 'التصوير', icon: '📸' },
        { id: 'catering', name: 'الطعام والضيافة', icon: '🍽️' },
    ];

    const serviceAreas = [
        'الرياض - حي النرجس',
        'الرياض - حي الملز',
        'الرياض - حي العليا',
        'الرياض - حي الملقا',
        'الرياض - حي السليمانية',
        'الرياض - حي الروضة',
        'الرياض - حي المروج',
        'الرياض - حي الياسمين',
        'جدة - حي الزهراء',
        'جدة - حي الروضة',
        'الدمام - حي الفيصلية',
        'الدمام - حي الشاطئ',
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Basic information validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'الاسم الأول مطلوب';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'اسم العائلة مطلوب';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }

        const phoneRegex = /^(05|5)[0-9]{8}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'رقم الجوال مطلوب';
        } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'رقم الجوال غير صحيح';
        } else if (!isPhoneVerified) {
            newErrors.phone = 'يجب تأكيد رقم الجوال أولاً';
        }

        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        } else if (formData.password.length < 8) {
            newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
        }

        // Business information validation
        if (!formData.businessName.trim()) {
            newErrors.businessName = 'اسم النشاط التجاري مطلوب';
        }

        if (formData.serviceCategories.length === 0) {
            newErrors.serviceCategories = 'يجب اختيار فئة خدمة واحدة على الأقل';
        }

        if (!formData.experience) {
            newErrors.experience = 'سنوات الخبرة مطلوبة';
        }

        if (formData.serviceAreas.length === 0) {
            newErrors.serviceAreas = 'يجب اختيار منطقة خدمة واحدة على الأقل';
        }

        if (!formData.nationalId.trim()) {
            newErrors.nationalId = 'رقم الهوية الوطنية مطلوب';
        } else if (!/^[0-9]{10}$/.test(formData.nationalId)) {
            newErrors.nationalId = 'رقم الهوية يجب أن يكون 10 أرقام';
        }

        if (formData.businessType === 'company' && !formData.commercialRegister.trim()) {
            newErrors.commercialRegister = 'السجل التجاري مطلوب للشركات';
        }

        if (!formData.bankAccount.trim()) {
            newErrors.bankAccount = 'رقم الحساب البنكي مطلوب';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'يجب الموافقة على الشروط والأحكام';
        }

        if (!formData.agreeToProviderTerms) {
            newErrors.agreeToProviderTerms = 'يجب الموافقة على شروط مقدمي الخدمة';
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

        const timer = setInterval(() => {
            setVerificationTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

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

    const handleInputChange = (field: keyof ProviderFormData, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        if (errors[field as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [field]: undefined,
            }));
        }
    };

    const handleServiceCategoryToggle = (categoryId: string) => {
        const updatedCategories = formData.serviceCategories.includes(categoryId)
            ? formData.serviceCategories.filter((id) => id !== categoryId)
            : [...formData.serviceCategories, categoryId];

        handleInputChange('serviceCategories', updatedCategories);
    };

    const handleServiceAreaToggle = (area: string) => {
        const updatedAreas = formData.serviceAreas.includes(area)
            ? formData.serviceAreas.filter((a) => a !== area)
            : [...formData.serviceAreas, area];

        handleInputChange('serviceAreas', updatedAreas);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log('Provider registration data:', formData);

            alert('تم إنشاء حساب مقدم الخدمة بنجاح! سيتم مراجعة طلبك خلال 24 ساعة');
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
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const getStepTitle = () => {
        switch (currentStep) {
            case 1:
                return 'المعلومات الشخصية';
            case 2:
                return 'معلومات النشاط التجاري';
            case 3:
                return 'الخدمات ومناطق العمل';
            case 4:
                return 'التحقق والموافقة';
            default:
                return '';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link
                            href="/register"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            <span className="text-lg">←</span>
                        </Link>
                        <h1 className="text-xl font-bold">تسجيل مقدم خدمة</h1>
                        <div className="w-10"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center">
                        انضم إلى شبكة مقدمي الخدمات واحصل على دخل إضافي
                    </p>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6">
                <div className="bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">الخطوة {currentStep} من 4</span>
                        <span className="text-sm text-gray-600">{getStepTitle()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / 4) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Phone Verification Modal */}
            {showPhoneVerification && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
                        <h3 className="text-lg font-bold text-center mb-4">تحقق من رقم الجوال</h3>
                        <p className="text-sm text-gray-600 text-center mb-4">
                            تم إرسال رمز التحقق إلى {formData.phone}
                        </p>
                        <input
                            type="text"
                            value={phoneVerificationCode}
                            onChange={(e) => setPhoneVerificationCode(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-xl text-center text-lg font-bold mb-4"
                            placeholder="0000"
                            maxLength={4}
                            dir="ltr"
                        />

                        <div className="flex space-x-3 space-x-reverse">
                            <button
                                onClick={() => setShowPhoneVerification(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
                            >
                                إلغاء
                            </button>
                            <button
                                onClick={verifyPhoneCode}
                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            >
                                تحقق
                            </button>
                        </div>
                        {verificationTimer > 0 && (
                            <p className="text-center text-sm text-gray-500 mt-3">
                                إعادة الإرسال خلال {verificationTimer} ثانية
                            </p>
                        )}
                    </div>
                </div>
            )}

            {/* Registration Form */}
            <div className="max-w-sm mx-auto px-4 pb-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                        <div className="space-y-4">
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

                            {/* Phone Field */}
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
                            </div>

                            {/* Password Fields */}
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
                            </div>

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

                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-colors"
                            >
                                التالي
                            </button>
                        </div>
                    )}

                    {/* Step 2: Business Information */}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            {/* Business Name */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    اسم النشاط التجاري *
                                </label>
                                <input
                                    type="text"
                                    value={formData.businessName}
                                    onChange={(e) =>
                                        handleInputChange('businessName', e.target.value)
                                    }
                                    className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                        errors.businessName
                                            ? 'border-red-500'
                                            : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                    placeholder="مثال: شركة الخدمات المتميزة"
                                />

                                {errors.businessName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.businessName}
                                    </p>
                                )}
                            </div>

                            {/* Business Type */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    نوع النشاط التجاري *
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleInputChange('businessType', 'individual')
                                        }
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                            formData.businessType === 'individual'
                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                : 'border-gray-200 bg-white text-gray-700'
                                        }`}
                                    >
                                        <div className="text-2xl mb-2">👤</div>
                                        <div className="font-semibold text-sm">فردي</div>
                                        <div className="text-xs text-gray-600">عمل حر</div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleInputChange('businessType', 'company')}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                            formData.businessType === 'company'
                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                : 'border-gray-200 bg-white text-gray-700'
                                        }`}
                                    >
                                        <div className="text-2xl mb-2">🏢</div>
                                        <div className="font-semibold text-sm">شركة</div>
                                        <div className="text-xs text-gray-600">مؤسسة تجارية</div>
                                    </button>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    سنوات الخبرة *
                                </label>
                                <select
                                    value={formData.experience}
                                    onChange={(e) =>
                                        handleInputChange('experience', e.target.value)
                                    }
                                    className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                        errors.experience
                                            ? 'border-red-500'
                                            : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                >
                                    <option value="">اختر سنوات الخبرة</option>
                                    <option value="less-than-1">أقل من سنة</option>
                                    <option value="1-2">1-2 سنة</option>
                                    <option value="3-5">3-5 سنوات</option>
                                    <option value="6-10">6-10 سنوات</option>
                                    <option value="more-than-10">أكثر من 10 سنوات</option>
                                </select>
                                {errors.experience && (
                                    <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
                                )}
                            </div>

                            {/* Working Hours */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    ساعات العمل
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs text-gray-600 mb-1">
                                            من
                                        </label>
                                        <input
                                            type="time"
                                            value={formData.workingHours.start}
                                            onChange={(e) =>
                                                handleInputChange('workingHours', {
                                                    ...formData.workingHours,
                                                    start: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-600 mb-1">
                                            إلى
                                        </label>
                                        <input
                                            type="time"
                                            value={formData.workingHours.end}
                                            onChange={(e) =>
                                                handleInputChange('workingHours', {
                                                    ...formData.workingHours,
                                                    end: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-3 space-x-reverse">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    السابق
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-colors"
                                >
                                    التالي
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Services and Areas */}
                    {currentStep === 3 && (
                        <div className="space-y-4">
                            {/* Service Categories */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    فئات الخدمات * (يمكن اختيار أكثر من فئة)
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {serviceCategories.map((category) => (
                                        <button
                                            key={category.id}
                                            type="button"
                                            onClick={() => handleServiceCategoryToggle(category.id)}
                                            className={`p-3 rounded-xl border-2 transition-all text-center ${
                                                formData.serviceCategories.includes(category.id)
                                                    ? 'border-green-500 bg-green-50 text-green-700'
                                                    : 'border-gray-200 bg-white text-gray-700'
                                            }`}
                                        >
                                            <div className="text-xl mb-1">{category.icon}</div>
                                            <div className="text-xs font-semibold">
                                                {category.name}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                {errors.serviceCategories && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.serviceCategories}
                                    </p>
                                )}
                            </div>

                            {/* Service Areas */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    مناطق الخدمة * (يمكن اختيار أكثر من منطقة)
                                </label>
                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                    {serviceAreas.map((area) => (
                                        <label
                                            key={area}
                                            className="flex items-center space-x-3 space-x-reverse cursor-pointer p-2 rounded-lg hover:bg-gray-50"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.serviceAreas.includes(area)}
                                                onChange={() => handleServiceAreaToggle(area)}
                                                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                            />

                                            <span className="text-sm text-gray-700">{area}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.serviceAreas && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.serviceAreas}
                                    </p>
                                )}
                            </div>

                            <div className="flex space-x-3 space-x-reverse">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    السابق
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-colors"
                                >
                                    التالي
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Verification and Agreement */}
                    {currentStep === 4 && (
                        <div className="space-y-4">
                            {/* National ID */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    رقم الهوية الوطنية *
                                </label>
                                <input
                                    type="text"
                                    value={formData.nationalId}
                                    onChange={(e) =>
                                        handleInputChange('nationalId', e.target.value)
                                    }
                                    className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                        errors.nationalId
                                            ? 'border-red-500'
                                            : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                    placeholder="1234567890"
                                    maxLength={10}
                                    dir="ltr"
                                />

                                {errors.nationalId && (
                                    <p className="text-red-500 text-xs mt-1">{errors.nationalId}</p>
                                )}
                            </div>

                            {/* Commercial Register (if company) */}
                            {formData.businessType === 'company' && (
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        رقم السجل التجاري *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.commercialRegister}
                                        onChange={(e) =>
                                            handleInputChange('commercialRegister', e.target.value)
                                        }
                                        className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                            errors.commercialRegister
                                                ? 'border-red-500'
                                                : 'border-gray-300 focus:border-blue-500'
                                        }`}
                                        placeholder="1010123456"
                                        dir="ltr"
                                    />

                                    {errors.commercialRegister && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.commercialRegister}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Bank Account */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    رقم الحساب البنكي (IBAN) *
                                </label>
                                <input
                                    type="text"
                                    value={formData.bankAccount}
                                    onChange={(e) =>
                                        handleInputChange('bankAccount', e.target.value)
                                    }
                                    className={`w-full p-3 border rounded-xl outline-none transition-colors ${
                                        errors.bankAccount
                                            ? 'border-red-500'
                                            : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                    placeholder="SA1234567890123456789012"
                                    dir="ltr"
                                />

                                {errors.bankAccount && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.bankAccount}
                                    </p>
                                )}
                                <p className="text-xs text-gray-600 mt-1">
                                    سيتم تحويل أرباحك إلى هذا الحساب
                                </p>
                            </div>

                            {/* Terms Agreement */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                <label className="flex items-start space-x-3 space-x-reverse cursor-pointer mb-3">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) =>
                                            handleInputChange('agreeToTerms', e.target.checked)
                                        }
                                        className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                    />

                                    <div className="text-sm text-gray-700">
                                        <span>أوافق على </span>
                                        <Link href="/terms" className="text-blue-600 underline">
                                            الشروط والأحكام العامة
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

                                <label className="flex items-start space-x-3 space-x-reverse cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeToProviderTerms}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'agreeToProviderTerms',
                                                e.target.checked,
                                            )
                                        }
                                        className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                    />

                                    <div className="text-sm text-gray-700">
                                        <span>أوافق على </span>
                                        <Link
                                            href="/provider-terms"
                                            className="text-blue-600 underline"
                                        >
                                            شروط وأحكام مقدمي الخدمة
                                        </Link>
                                        <span> وسياسة العمولة</span>
                                    </div>
                                </label>
                                {errors.agreeToProviderTerms && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.agreeToProviderTerms}
                                    </p>
                                )}
                            </div>

                            {/* Important Notice */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <span className="text-yellow-600 text-xl">⚠️</span>
                                    <div className="text-sm text-yellow-800">
                                        <p className="font-semibold mb-1">ملاحظة مهمة:</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>سيتم مراجعة طلبك خلال 24-48 ساعة</li>
                                            <li>قد نطلب وثائق إضافية للتحقق</li>
                                            <li>
                                                ستتلقى إشعار بالموافقة أو الرفض عبر البريد
                                                الإلكتروني
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Error Message */}
                            {errors.general && (
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                                    <p className="text-red-600 text-sm">{errors.general}</p>
                                </div>
                            )}

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
                                    className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center space-x-2 space-x-reverse">
                                            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                            <span>جاري إنشاء الحساب...</span>
                                        </div>
                                    ) : (
                                        'إنشاء حساب مقدم الخدمة'
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
                        <Link href="/login" className="text-green-600 font-semibold">
                            تسجيل الدخول
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
