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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="5ejp5u8">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="8tf27nu"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid=".5ejzuz">
                    <div className="flex items-center justify-between mb-4" data-oid="837_h6o">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="2tpx03p"
                        >
                            <span className="text-lg" data-oid="xd0e1.k">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="csxvmr5">
                            تسجيل الدخول
                        </h1>
                        <div className="w-10" data-oid="1vfse.s"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="it1a_s6">
                        مرحباً بك مرة أخرى
                    </p>
                </div>
            </div>

            {/* Welcome Card */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6" data-oid="971q.7f">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center" data-oid="9j.2mig">
                    <div className="text-4xl mb-3" data-oid="9tc7dq5">
                        👋
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="n65b5ac">
                        أهلاً وسهلاً
                    </h2>
                    <p className="text-gray-600 text-sm" data-oid="kf0nq94">
                        سجل دخولك للوصول إلى حسابك والاستمتاع بخدماتنا
                    </p>
                </div>
            </div>

            {/* Login Form */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="rfldxn8">
                <form onSubmit={handleSubmit} className="space-y-4" data-oid="m:.vv0d">
                    {/* Email Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid="dvbqijq"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="b7qvcrz"
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
                            data-oid="w_l0rd."
                        />

                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1" data-oid="o17vey2">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid="z.vtdhs"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="cxfeq2s"
                        >
                            كلمة المرور
                        </label>
                        <div className="relative" data-oid="1bau-z0">
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
                                data-oid="_7he6en"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                data-oid="s9rl55c"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1" data-oid="r_pw6q.">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between" data-oid="dq2njmz">
                        <label
                            className="flex items-center space-x-2 space-x-reverse cursor-pointer"
                            data-oid="zo3v7xo"
                        >
                            <input
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="5bdf5oq"
                            />

                            <span className="text-sm text-gray-700" data-oid="0te0zum">
                                تذكرني
                            </span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                            data-oid=":3s3itx"
                        >
                            نسيت كلمة المرور؟
                        </Link>
                    </div>

                    {/* Error Message */}
                    {errors.general && (
                        <div
                            className="bg-red-50 border border-red-200 rounded-2xl p-4"
                            data-oid="5u-t5vs"
                        >
                            <p className="text-red-600 text-sm" data-oid="lv.h6zg">
                                {errors.general}
                            </p>
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="kpn8occ"
                    >
                        {isLoading ? (
                            <div
                                className="flex items-center justify-center space-x-2 space-x-reverse"
                                data-oid="1.1a81n"
                            >
                                <div
                                    className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    data-oid="nd51-ee"
                                ></div>
                                <span data-oid="1eyyau3">جاري تسجيل الدخول...</span>
                            </div>
                        ) : (
                            'تسجيل الدخول'
                        )}
                    </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center" data-oid="yupzm16">
                    <p className="text-gray-600 text-sm" data-oid=".-1b2-.">
                        ليس لديك حساب؟{' '}
                        <Link
                            href="/register"
                            className="text-blue-600 font-semibold"
                            data-oid="pjojx06"
                        >
                            إنشاء حساب جديد
                        </Link>
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-6" data-oid="pgndur5">
                    <div className="relative" data-oid="36_b94j">
                        <div className="absolute inset-0 flex items-center" data-oid="8o17k6r">
                            <div
                                className="w-full border-t border-gray-300"
                                data-oid="iwh_:tt"
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm" data-oid="oxebhgn">
                            <span className="px-2 bg-gray-50 text-gray-500" data-oid="sm6_nja">
                                أو
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3" data-oid="m_4fqr4">
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="qurv5h-"
                        >
                            <span className="text-xl" data-oid="mwl1ewc">
                                📱
                            </span>
                            <span data-oid="m1pop-7">الدخول باستخدام أبشر</span>
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="y42m1_y"
                        >
                            <span className="text-xl" data-oid="4iszz0q">
                                🍎
                            </span>
                            <span data-oid="f1ndph2">الدخول باستخدام Apple</span>
                        </button>
                    </div>
                </div>

                {/* Quick Access */}
                <div className="mt-8 bg-blue-50 rounded-2xl p-4" data-oid="c_r2z34">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center" data-oid="4azltdq">
                        وصول سريع
                    </h3>
                    <div className="grid grid-cols-2 gap-3" data-oid="gw.lql.">
                        <Link
                            href="/register?type=customer"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="yyxg1c-"
                        >
                            <div className="text-2xl mb-1" data-oid="m2rv8t-">
                                👤
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid="8fgmrwp">
                                حساب عميل
                            </div>
                            <div className="text-xs text-gray-600" data-oid="0x-flz2">
                                أطلب الخدمات
                            </div>
                        </Link>
                        <Link
                            href="/register?type=provider"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="2xoe:ek"
                        >
                            <div className="text-2xl mb-1" data-oid="6e.o..7">
                                🔧
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid="uyy1xow">
                                حساب مقدم خدمة
                            </div>
                            <div className="text-xs text-gray-600" data-oid="pgzfc80">
                                أقدم الخدمات
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
