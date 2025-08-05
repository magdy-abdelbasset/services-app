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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="1fyxev4">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="t7:fin0"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="ze-d626">
                    <div className="flex items-center justify-between mb-4" data-oid="be.ngu6">
                        <Link
                            href="/register"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="pi0o.ag"
                        >
                            <span className="text-lg" data-oid="52fe:gm">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="f_:pfbb">
                            تسجيل مقدم خدمة
                        </h1>
                        <div className="w-10" data-oid="r44i2pb"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="9a258ok">
                        انضم إلى شبكة مقدمي الخدمات واحصل على دخل إضافي
                    </p>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6" data-oid="r-pq1fv">
                <div className="bg-white rounded-2xl shadow-lg p-4" data-oid="sav4ww1">
                    <div className="flex items-center justify-between mb-2" data-oid="y56eg94">
                        <span className="text-sm text-gray-600" data-oid="4ad_m9e">
                            الخطوة {currentStep} من 4
                        </span>
                        <span className="text-sm text-gray-600" data-oid="p65:855">
                            {getStepTitle()}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2" data-oid="gnu3k.4">
                        <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / 4) * 100}%` }}
                            data-oid="4m1sx3m"
                        ></div>
                    </div>
                </div>
            </div>

            {/* Phone Verification Modal */}
            {showPhoneVerification && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="e2hwvuh"
                >
                    <div className="bg-white rounded-2xl p-6 w-full max-w-sm" data-oid="fi35a8t">
                        <h3 className="text-lg font-bold text-center mb-4" data-oid="7lffv2p">
                            تحقق من رقم الجوال
                        </h3>
                        <p className="text-sm text-gray-600 text-center mb-4" data-oid="dymqihp">
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
                            data-oid="318zr0t"
                        />

                        <div className="flex space-x-3 space-x-reverse" data-oid="57dow3b">
                            <button
                                onClick={() => setShowPhoneVerification(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
                                data-oid="__t-k-:"
                            >
                                إلغاء
                            </button>
                            <button
                                onClick={verifyPhoneCode}
                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                data-oid="5y-_dol"
                            >
                                تحقق
                            </button>
                        </div>
                        {verificationTimer > 0 && (
                            <p
                                className="text-center text-sm text-gray-500 mt-3"
                                data-oid="mf9rnya"
                            >
                                إعادة الإرسال خلال {verificationTimer} ثانية
                            </p>
                        )}
                    </div>
                </div>
            )}

            {/* Registration Form */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="wnu-7x9">
                <form onSubmit={handleSubmit} className="space-y-6" data-oid="qfzy12z">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                        <div className="space-y-4" data-oid="aewdqwf">
                            {/* Name Fields */}
                            <div className="grid grid-cols-2 gap-3" data-oid="18-.1rl">
                                <div
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="cvsq-yg"
                                >
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="4urhkur"
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
                                        data-oid="h_unj2p"
                                    />

                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1" data-oid="1v10zm-">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>

                                <div
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="ah1lwzz"
                                >
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="5z1tkhz"
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
                                        data-oid="o2m9wwf"
                                    />

                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1" data-oid="qur5zkp">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="v-u1adj"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="upfuyan"
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
                                    data-oid="5xwi-6s"
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="efmk2q5">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Phone Field */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border-2 border-blue-200"
                                data-oid="g4v:t1u"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="tvaxj5u"
                                >
                                    رقم الجوال *
                                    <span className="text-blue-600 text-xs mr-1" data-oid="5l..oev">
                                        (مطلوب للتحقق)
                                    </span>
                                </label>
                                <div className="flex space-x-2 space-x-reverse" data-oid="cyc2tnk">
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
                                        data-oid="thy-zcp"
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
                                        data-oid=":mbkwoy"
                                    >
                                        {isPhoneVerified ? '✓ مؤكد' : 'تحقق'}
                                    </button>
                                </div>
                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="cxktwmg">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Password Fields */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="rf:uh:s"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="ha3kevj"
                                >
                                    كلمة المرور *
                                </label>
                                <div className="relative" data-oid="r4me4ok">
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
                                        data-oid="bhnjzsw"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="rtcgo31"
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="00lnzww">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="6rd_1as"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="bjyax4a"
                                >
                                    تأكيد كلمة المرور *
                                </label>
                                <div className="relative" data-oid="3o4sfs_">
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
                                        data-oid="3m4shfi"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="zgqk:54"
                                    >
                                        {showConfirmPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1" data-oid=".h6uqxa">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-colors"
                                data-oid="8bqrp5l"
                            >
                                التالي
                            </button>
                        </div>
                    )}

                    {/* Step 2: Business Information */}
                    {currentStep === 2 && (
                        <div className="space-y-4" data-oid="u2iv4xo">
                            {/* Business Name */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="7v9bfhn"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="1swp:.o"
                                >
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
                                    data-oid="dri7n3i"
                                />

                                {errors.businessName && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="q-ddmp_">
                                        {errors.businessName}
                                    </p>
                                )}
                            </div>

                            {/* Business Type */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="b0r69cg"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-3"
                                    data-oid="7szzx4m"
                                >
                                    نوع النشاط التجاري *
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="g7nd90m">
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
                                        data-oid="j4t41zy"
                                    >
                                        <div className="text-2xl mb-2" data-oid="xw31k:d">
                                            👤
                                        </div>
                                        <div className="font-semibold text-sm" data-oid="6dsbhjc">
                                            فردي
                                        </div>
                                        <div className="text-xs text-gray-600" data-oid="q22:86m">
                                            عمل حر
                                        </div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleInputChange('businessType', 'company')}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                            formData.businessType === 'company'
                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                : 'border-gray-200 bg-white text-gray-700'
                                        }`}
                                        data-oid="-aiyuxa"
                                    >
                                        <div className="text-2xl mb-2" data-oid="temc3oi">
                                            🏢
                                        </div>
                                        <div className="font-semibold text-sm" data-oid="365:w.5">
                                            شركة
                                        </div>
                                        <div className="text-xs text-gray-600" data-oid="nt84ayk">
                                            مؤسسة تجارية
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Experience */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="5dnxith"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="j1n_07w"
                                >
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
                                    data-oid="mjwe9q5"
                                >
                                    <option value="" data-oid="5a8sjal">
                                        اختر سنوات الخبرة
                                    </option>
                                    <option value="less-than-1" data-oid="rflc2kt">
                                        أقل من سنة
                                    </option>
                                    <option value="1-2" data-oid="7h655e:">
                                        1-2 سنة
                                    </option>
                                    <option value="3-5" data-oid="irp1len">
                                        3-5 سنوات
                                    </option>
                                    <option value="6-10" data-oid="6gyen16">
                                        6-10 سنوات
                                    </option>
                                    <option value="more-than-10" data-oid="zr49pcs">
                                        أكثر من 10 سنوات
                                    </option>
                                </select>
                                {errors.experience && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="ylqko5f">
                                        {errors.experience}
                                    </p>
                                )}
                            </div>

                            {/* Working Hours */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="byjjo-d"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-3"
                                    data-oid="fe7le81"
                                >
                                    ساعات العمل
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="_q8d:0.">
                                    <div data-oid="53xm_s9">
                                        <label
                                            className="block text-xs text-gray-600 mb-1"
                                            data-oid="za_g457"
                                        >
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
                                            data-oid="mvh4ob2"
                                        />
                                    </div>
                                    <div data-oid="s8xn41x">
                                        <label
                                            className="block text-xs text-gray-600 mb-1"
                                            data-oid="q0xg0ex"
                                        >
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
                                            data-oid="q9ojncq"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-3 space-x-reverse" data-oid="hj0izx6">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                    data-oid="41q1ftj"
                                >
                                    السابق
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-colors"
                                    data-oid="-gmxbxs"
                                >
                                    التالي
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Services and Areas */}
                    {currentStep === 3 && (
                        <div className="space-y-4" data-oid="xek0ywk">
                            {/* Service Categories */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="tp6-3d6"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-3"
                                    data-oid="8ybwwlb"
                                >
                                    فئات الخدمات * (يمكن اختيار أكثر من فئة)
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="_8uz0fn">
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
                                            data-oid="sbw6i8y"
                                        >
                                            <div className="text-xl mb-1" data-oid="kblklws">
                                                {category.icon}
                                            </div>
                                            <div
                                                className="text-xs font-semibold"
                                                data-oid="wg5cmdi"
                                            >
                                                {category.name}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                {errors.serviceCategories && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="qzeiznr">
                                        {errors.serviceCategories}
                                    </p>
                                )}
                            </div>

                            {/* Service Areas */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="1f0z2q7"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-3"
                                    data-oid="siattt-"
                                >
                                    مناطق الخدمة * (يمكن اختيار أكثر من منطقة)
                                </label>
                                <div
                                    className="space-y-2 max-h-48 overflow-y-auto"
                                    data-oid="jx43zc6"
                                >
                                    {serviceAreas.map((area) => (
                                        <label
                                            key={area}
                                            className="flex items-center space-x-3 space-x-reverse cursor-pointer p-2 rounded-lg hover:bg-gray-50"
                                            data-oid="6-z.wou"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.serviceAreas.includes(area)}
                                                onChange={() => handleServiceAreaToggle(area)}
                                                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                                data-oid="5103-jo"
                                            />

                                            <span
                                                className="text-sm text-gray-700"
                                                data-oid="456vkql"
                                            >
                                                {area}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                {errors.serviceAreas && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="52kn5ms">
                                        {errors.serviceAreas}
                                    </p>
                                )}
                            </div>

                            <div className="flex space-x-3 space-x-reverse" data-oid="3ov8jdl">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                    data-oid="61v3gpq"
                                >
                                    السابق
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-colors"
                                    data-oid="putqn2q"
                                >
                                    التالي
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Verification and Agreement */}
                    {currentStep === 4 && (
                        <div className="space-y-4" data-oid="8nnlv8i">
                            {/* National ID */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="8p-63ok"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="jflktk3"
                                >
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
                                    data-oid="xw1ddbp"
                                />

                                {errors.nationalId && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="ruwczp9">
                                        {errors.nationalId}
                                    </p>
                                )}
                            </div>

                            {/* Commercial Register (if company) */}
                            {formData.businessType === 'company' && (
                                <div
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="m.0axa5"
                                >
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="uw55hf5"
                                    >
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
                                        data-oid="644o8.d"
                                    />

                                    {errors.commercialRegister && (
                                        <p className="text-red-500 text-xs mt-1" data-oid="3:-sji-">
                                            {errors.commercialRegister}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Bank Account */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="o_gq3pp"
                            >
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="b:5gisn"
                                >
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
                                    data-oid="q5g7zwy"
                                />

                                {errors.bankAccount && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="1-zxrub">
                                        {errors.bankAccount}
                                    </p>
                                )}
                                <p className="text-xs text-gray-600 mt-1" data-oid="9o02.vz">
                                    سيتم تحويل أرباحك إلى هذا الحساب
                                </p>
                            </div>

                            {/* Terms Agreement */}
                            <div
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="y8hp255"
                            >
                                <label
                                    className="flex items-start space-x-3 space-x-reverse cursor-pointer mb-3"
                                    data-oid="4hh07wj"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) =>
                                            handleInputChange('agreeToTerms', e.target.checked)
                                        }
                                        className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        data-oid="f:gocpc"
                                    />

                                    <div className="text-sm text-gray-700" data-oid="yjbklo.">
                                        <span data-oid="rbuaei5">أوافق على </span>
                                        <Link
                                            href="/terms"
                                            className="text-blue-600 underline"
                                            data-oid="vv2oqk3"
                                        >
                                            الشروط والأحكام العامة
                                        </Link>
                                        <span data-oid="2a9_gj5"> و </span>
                                        <Link
                                            href="/privacy"
                                            className="text-blue-600 underline"
                                            data-oid="hi4k3_k"
                                        >
                                            سياسة الخصوصية
                                        </Link>
                                    </div>
                                </label>
                                {errors.agreeToTerms && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="dw61qsv">
                                        {errors.agreeToTerms}
                                    </p>
                                )}

                                <label
                                    className="flex items-start space-x-3 space-x-reverse cursor-pointer"
                                    data-oid="d:zpiq."
                                >
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
                                        data-oid="9pocpxc"
                                    />

                                    <div className="text-sm text-gray-700" data-oid="l:lbm4-">
                                        <span data-oid=":ys0ksw">أوافق على </span>
                                        <Link
                                            href="/provider-terms"
                                            className="text-blue-600 underline"
                                            data-oid="njkui2f"
                                        >
                                            شروط وأحكام مقدمي الخدمة
                                        </Link>
                                        <span data-oid="4rnxrxb"> وسياسة العمولة</span>
                                    </div>
                                </label>
                                {errors.agreeToProviderTerms && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="ps:-ofz">
                                        {errors.agreeToProviderTerms}
                                    </p>
                                )}
                            </div>

                            {/* Important Notice */}
                            <div
                                className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4"
                                data-oid="7xnmesn"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse"
                                    data-oid="9k34yc5"
                                >
                                    <span className="text-yellow-600 text-xl" data-oid="cawrols">
                                        ⚠️
                                    </span>
                                    <div className="text-sm text-yellow-800" data-oid="7hn.2xm">
                                        <p className="font-semibold mb-1" data-oid="47bffe:">
                                            ملاحظة مهمة:
                                        </p>
                                        <ul
                                            className="list-disc list-inside space-y-1"
                                            data-oid="7d-bx6t"
                                        >
                                            <li data-oid="lgmk.as">
                                                سيتم مراجعة طلبك خلال 24-48 ساعة
                                            </li>
                                            <li data-oid="c5fle01">قد نطلب وثائق إضافية للتحقق</li>
                                            <li data-oid="r.u3ak7">
                                                ستتلقى إشعار بالموافقة أو الرفض عبر البريد
                                                الإلكتروني
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Error Message */}
                            {errors.general && (
                                <div
                                    className="bg-red-50 border border-red-200 rounded-2xl p-4"
                                    data-oid="s9p9wwu"
                                >
                                    <p className="text-red-600 text-sm" data-oid="srdg8id">
                                        {errors.general}
                                    </p>
                                </div>
                            )}

                            <div className="flex space-x-3 space-x-reverse" data-oid="s-vo1ov">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                    data-oid="tcmwmdb"
                                >
                                    السابق
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    data-oid="9m-7ujv"
                                >
                                    {isLoading ? (
                                        <div
                                            className="flex items-center justify-center space-x-2 space-x-reverse"
                                            data-oid="owwyewz"
                                        >
                                            <div
                                                className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                data-oid="xufzi.l"
                                            ></div>
                                            <span data-oid="rkv3s_n">جاري إنشاء الحساب...</span>
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
                <div className="mt-6 text-center" data-oid="z8w0ave">
                    <p className="text-gray-600 text-sm" data-oid="9t7scq3">
                        لديك حساب بالفعل؟{' '}
                        <Link
                            href="/login"
                            className="text-green-600 font-semibold"
                            data-oid="fl:fvdk"
                        >
                            تسجيل الدخول
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
