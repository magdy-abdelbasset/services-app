'use client';

import { useState } from 'react';
import Link from 'next/link';

interface LoginData {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface LoginErrors {
    email?: string;
    password?: string;
    general?: string;
}

export default function LoginPage() {
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [errors, setErrors] = useState<LoginErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: LoginErrors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: keyof LoginData, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Clear error when user starts typing
        if (errors[field as keyof LoginErrors]) {
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

            // Here you would typically make an API call to authenticate the user
            console.log('Login data:', formData);

            // Show success message and redirect
            alert('تم تسجيل الدخول بنجاح!');
            // In a real app, you would redirect to dashboard
            window.location.href = '/';
        } catch (error) {
            setErrors({
                general: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="rw6rx7p">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="9x_.hng"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid=".w3dx5j">
                    <div className="flex items-center justify-between mb-4" data-oid="nzeu9_f">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="ka7f964"
                        >
                            <span className="text-lg" data-oid="y8.t8bp">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="1958cyz">
                            تسجيل الدخول
                        </h1>
                        <div className="w-10" data-oid="y.0s9gq"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="macmex5">
                        مرحباً بك مرة أخرى
                    </p>
                </div>
            </div>

            {/* Welcome Card */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6" data-oid="2xh.i5f">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center" data-oid="87..r9-">
                    <div className="text-4xl mb-3" data-oid=".uysr6y">
                        👋
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="i76f-vp">
                        أهلاً وسهلاً
                    </h2>
                    <p className="text-gray-600 text-sm" data-oid=".jkq.r9">
                        سجل دخولك للوصول إلى حسابك والاستمتاع بخدماتنا
                    </p>
                </div>
            </div>

            {/* Login Form */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="tmqd4ko">
                <form onSubmit={handleSubmit} className="space-y-4" data-oid="wvne.j9">
                    {/* Email Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid=".u72oil"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="j5xdb36"
                        >
                            البريد الإلكتروني
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
                            data-oid="z-aq4wu"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1" data-oid="_a8znz.">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid="31e3ddk"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="3z3gbjz"
                        >
                            كلمة المرور
                        </label>
                        <div className="relative" data-oid="fl2ja7-">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                className={`w-full p-3 border rounded-xl outline-none transition-colors pr-12 ${
                                    errors.password
                                        ? 'border-red-500'
                                        : 'border-gray-300 focus:border-blue-500'
                                }`}
                                placeholder="أدخل كلمة المرور"
                                dir="ltr"
                                data-oid=":55.:qe"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                data-oid="8x1kp4v"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1" data-oid="rbgdb46">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between" data-oid="qt81dju">
                        <label
                            className="flex items-center space-x-2 space-x-reverse cursor-pointer"
                            data-oid="58pyqh2"
                        >
                            <input
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="kk8cys2"
                            />

                            <span className="text-sm text-gray-700" data-oid="o3sel_1">
                                تذكرني
                            </span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                            data-oid="oc1okp8"
                        >
                            نسيت كلمة المرور؟
                        </Link>
                    </div>

                    {/* Error Message */}
                    {errors.general && (
                        <div
                            className="bg-red-50 border border-red-200 rounded-2xl p-4"
                            data-oid="ftw:n98"
                        >
                            <p className="text-red-600 text-sm" data-oid="sf_uf6b">
                                {errors.general}
                            </p>
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="y.p04c6"
                    >
                        {isLoading ? (
                            <div
                                className="flex items-center justify-center space-x-2 space-x-reverse"
                                data-oid="plvw0kd"
                            >
                                <div
                                    className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    data-oid="druqyrq"
                                ></div>
                                <span data-oid="imfyu:b">جاري تسجيل الدخول...</span>
                            </div>
                        ) : (
                            'تسجيل الدخول'
                        )}
                    </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center" data-oid="ua8e-4x">
                    <p className="text-gray-600 text-sm" data-oid="_qgn09o">
                        ليس لديك حساب؟{' '}
                        <Link
                            href="/register"
                            className="text-blue-600 font-semibold"
                            data-oid="y_r1oe1"
                        >
                            إنشاء حساب جديد
                        </Link>
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-6" data-oid="y:_gaj9">
                    <div className="relative" data-oid="ihjz50k">
                        <div className="absolute inset-0 flex items-center" data-oid="amxoe-c">
                            <div
                                className="w-full border-t border-gray-300"
                                data-oid="-6pp2j7"
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm" data-oid="aw2l40-">
                            <span className="px-2 bg-gray-50 text-gray-500" data-oid="f7:b4wd">
                                أو
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3" data-oid="d6euk4c">
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="t7geta-"
                        >
                            <span className="text-xl" data-oid="d89sd5f">
                                📱
                            </span>
                            <span data-oid="y8sro4k">الدخول باستخدام أبشر</span>
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="mfyil49"
                        >
                            <span className="text-xl" data-oid="o2p9ugd">
                                🍎
                            </span>
                            <span data-oid="dkud:2.">الدخول باستخدام Apple</span>
                        </button>
                    </div>
                </div>

                {/* Quick Access */}
                <div className="mt-8 bg-blue-50 rounded-2xl p-4" data-oid="fy:k_:s">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center" data-oid=".o898g9">
                        وصول سريع
                    </h3>
                    <div className="grid grid-cols-2 gap-3" data-oid="j_rdmyd">
                        <Link
                            href="/register?type=customer"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="xocl43v"
                        >
                            <div className="text-2xl mb-1" data-oid="pg208.x">
                                👤
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid="2mjgl45">
                                حساب عميل
                            </div>
                            <div className="text-xs text-gray-600" data-oid=":cbra..">
                                أطلب الخدمات
                            </div>
                        </Link>
                        <Link
                            href="/register?type=provider"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="117lre0"
                        >
                            <div className="text-2xl mb-1" data-oid="rf368ku">
                                🔧
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid="hoe5jfi">
                                حساب مقدم خدمة
                            </div>
                            <div className="text-xs text-gray-600" data-oid="5aptce8">
                                أقدم الخدمات
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
