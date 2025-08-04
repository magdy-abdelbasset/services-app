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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="buksyvl">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="hdzrz8e"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="xvy::b9">
                    <div className="flex items-center justify-between mb-4" data-oid="dstiz-z">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="l2xj0pk"
                        >
                            <span className="text-lg" data-oid="n8mohzg">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="0:5x-0g">
                            تسجيل الدخول
                        </h1>
                        <div className="w-10" data-oid="vipetrb"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="2-q-wog">
                        مرحباً بك مرة أخرى
                    </p>
                </div>
            </div>

            {/* Welcome Card */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6" data-oid="kxdf847">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center" data-oid="x.2dw7p">
                    <div className="text-4xl mb-3" data-oid="v0-m7lz">
                        👋
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="wv35.1k">
                        أهلاً وسهلاً
                    </h2>
                    <p className="text-gray-600 text-sm" data-oid="-okb52x">
                        سجل دخولك للوصول إلى حسابك والاستمتاع بخدماتنا
                    </p>
                </div>
            </div>

            {/* Login Form */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="1puc44z">
                <form onSubmit={handleSubmit} className="space-y-4" data-oid="j87h39j">
                    {/* Email Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid="7trc.nh"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="e0.l46h"
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
                            data-oid="ma4-hcb"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1" data-oid="v72eues">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid="cb_4qqy"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="0.xcj0i"
                        >
                            كلمة المرور
                        </label>
                        <div className="relative" data-oid="ngenxu-">
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
                                data-oid="hgq08my"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                data-oid="thzrnua"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1" data-oid="-4qfd3t">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between" data-oid="54m2-xh">
                        <label
                            className="flex items-center space-x-2 space-x-reverse cursor-pointer"
                            data-oid="1mx1ysc"
                        >
                            <input
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="l_i6uok"
                            />

                            <span className="text-sm text-gray-700" data-oid="9k_fmq2">
                                تذكرني
                            </span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                            data-oid="b4q3u8e"
                        >
                            نسيت كلمة المرور؟
                        </Link>
                    </div>

                    {/* Error Message */}
                    {errors.general && (
                        <div
                            className="bg-red-50 border border-red-200 rounded-2xl p-4"
                            data-oid="80h6kqf"
                        >
                            <p className="text-red-600 text-sm" data-oid="x9yxw_3">
                                {errors.general}
                            </p>
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="mzjia51"
                    >
                        {isLoading ? (
                            <div
                                className="flex items-center justify-center space-x-2 space-x-reverse"
                                data-oid="nv68mqq"
                            >
                                <div
                                    className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    data-oid="5oraof7"
                                ></div>
                                <span data-oid="yagjj:v">جاري تسجيل الدخول...</span>
                            </div>
                        ) : (
                            'تسجيل الدخول'
                        )}
                    </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center" data-oid="a87re8v">
                    <p className="text-gray-600 text-sm" data-oid="9o3utai">
                        ليس لديك حساب؟{' '}
                        <Link
                            href="/register"
                            className="text-blue-600 font-semibold"
                            data-oid="8ff3026"
                        >
                            إنشاء حساب جديد
                        </Link>
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-6" data-oid="lx1g571">
                    <div className="relative" data-oid="cvbl3dy">
                        <div className="absolute inset-0 flex items-center" data-oid="drz8ck.">
                            <div
                                className="w-full border-t border-gray-300"
                                data-oid="5l_fzg3"
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm" data-oid="7hu._w:">
                            <span className="px-2 bg-gray-50 text-gray-500" data-oid="h-.lf.w">
                                أو
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3" data-oid="a3v7.o6">
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="q4lvce1"
                        >
                            <span className="text-xl" data-oid="0r7p8in">
                                📱
                            </span>
                            <span data-oid="jarfawk">الدخول باستخدام أبشر</span>
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="a7-q2x:"
                        >
                            <span className="text-xl" data-oid="erfb3g_">
                                🍎
                            </span>
                            <span data-oid="z6a-43o">الدخول باستخدام Apple</span>
                        </button>
                    </div>
                </div>

                {/* Quick Access */}
                <div className="mt-8 bg-blue-50 rounded-2xl p-4" data-oid="_c07ac9">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center" data-oid="jyrvqws">
                        وصول سريع
                    </h3>
                    <div className="grid grid-cols-2 gap-3" data-oid="9c.z3v_">
                        <Link
                            href="/register?type=customer"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="ild5vra"
                        >
                            <div className="text-2xl mb-1" data-oid="og97z7.">
                                👤
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid=":3h4rms">
                                حساب عميل
                            </div>
                            <div className="text-xs text-gray-600" data-oid=".v383oz">
                                أطلب الخدمات
                            </div>
                        </Link>
                        <Link
                            href="/register?type=provider"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="b:ijcfb"
                        >
                            <div className="text-2xl mb-1" data-oid="y9oet3t">
                                🔧
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid="wiq1k1u">
                                حساب مقدم خدمة
                            </div>
                            <div className="text-xs text-gray-600" data-oid="74nfcxx">
                                أقدم الخدمات
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
