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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="bjrrazc">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="9myo58-"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="yx6b6_5">
                    <div className="flex items-center justify-between mb-4" data-oid="cc73b8g">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="0xhlvn4"
                        >
                            <span className="text-lg" data-oid="w3kdzc1">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="gkyvh7f">
                            تسجيل الدخول
                        </h1>
                        <div className="w-10" data-oid="cg:2m7n"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="gqvsok3">
                        مرحباً بك مرة أخرى
                    </p>
                </div>
            </div>

            {/* Welcome Card */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6" data-oid="hmqiw4r">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center" data-oid="740a9kn">
                    <div className="text-4xl mb-3" data-oid="nq-j3fn">
                        👋
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="zl0:pmb">
                        أهلاً وسهلاً
                    </h2>
                    <p className="text-gray-600 text-sm" data-oid="z1f6kv2">
                        سجل دخولك للوصول إلى حسابك والاستمتاع بخدماتنا
                    </p>
                </div>
            </div>

            {/* Login Form */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="0sk4swd">
                <form onSubmit={handleSubmit} className="space-y-4" data-oid="-9g_q8i">
                    {/* Email Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid="ig5srdm"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="jo36ufz"
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
                            data-oid="vtmxd37"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1" data-oid="kyxc24g">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                        data-oid="h3fkjas"
                    >
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="9svso88"
                        >
                            كلمة المرور
                        </label>
                        <div className="relative" data-oid="xuhrwhn">
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
                                data-oid="4j06e7r"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                data-oid="81o3_yz"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1" data-oid="gj4nkj9">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between" data-oid="9-e0o1h">
                        <label
                            className="flex items-center space-x-2 space-x-reverse cursor-pointer"
                            data-oid="t4stlsi"
                        >
                            <input
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="c1ngr8x"
                            />

                            <span className="text-sm text-gray-700" data-oid="-mv81r4">
                                تذكرني
                            </span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                            data-oid="96tzek_"
                        >
                            نسيت كلمة المرور؟
                        </Link>
                    </div>

                    {/* Error Message */}
                    {errors.general && (
                        <div
                            className="bg-red-50 border border-red-200 rounded-2xl p-4"
                            data-oid="8ca15my"
                        >
                            <p className="text-red-600 text-sm" data-oid="61degot">
                                {errors.general}
                            </p>
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="bacc:2a"
                    >
                        {isLoading ? (
                            <div
                                className="flex items-center justify-center space-x-2 space-x-reverse"
                                data-oid=".t12gv9"
                            >
                                <div
                                    className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    data-oid="rg-k9uq"
                                ></div>
                                <span data-oid="0ihn63w">جاري تسجيل الدخول...</span>
                            </div>
                        ) : (
                            'تسجيل الدخول'
                        )}
                    </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center" data-oid="jpd4vlm">
                    <p className="text-gray-600 text-sm" data-oid="r5y5ysw">
                        ليس لديك حساب؟{' '}
                        <Link
                            href="/register"
                            className="text-blue-600 font-semibold"
                            data-oid="37.zx8w"
                        >
                            إنشاء حساب جديد
                        </Link>
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-6" data-oid="lkvm1vc">
                    <div className="relative" data-oid="9txe9zp">
                        <div className="absolute inset-0 flex items-center" data-oid="tyzop5t">
                            <div
                                className="w-full border-t border-gray-300"
                                data-oid="3-hk_zi"
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm" data-oid="weeo3-s">
                            <span className="px-2 bg-gray-50 text-gray-500" data-oid="eozz:z3">
                                أو
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3" data-oid="ryzfm:v">
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="l2vog.2"
                        >
                            <span className="text-xl" data-oid="w9c.far">
                                📱
                            </span>
                            <span data-oid="qnv33n8">الدخول باستخدام أبشر</span>
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                            data-oid="ek.zubg"
                        >
                            <span className="text-xl" data-oid="nb22u9-">
                                🍎
                            </span>
                            <span data-oid=".whesa7">الدخول باستخدام Apple</span>
                        </button>
                    </div>
                </div>

                {/* Quick Access */}
                <div className="mt-8 bg-blue-50 rounded-2xl p-4" data-oid="fgzzi7e">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center" data-oid="1o30bc.">
                        وصول سريع
                    </h3>
                    <div className="grid grid-cols-2 gap-3" data-oid="b:v0e0o">
                        <Link
                            href="/register?type=customer"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="38pe09z"
                        >
                            <div className="text-2xl mb-1" data-oid=".fo9kf0">
                                👤
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid="yej5u:4">
                                حساب عميل
                            </div>
                            <div className="text-xs text-gray-600" data-oid="zzxiz9e">
                                أطلب الخدمات
                            </div>
                        </Link>
                        <Link
                            href="/register?type=provider"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                            data-oid="86ds:wz"
                        >
                            <div className="text-2xl mb-1" data-oid="4m001dl">
                                🔧
                            </div>
                            <div className="text-sm font-semibold text-gray-800" data-oid=":qx0.le">
                                حساب مقدم خدمة
                            </div>
                            <div className="text-xs text-gray-600" data-oid="let_d96">
                                أقدم الخدمات
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
