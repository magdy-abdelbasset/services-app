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
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            <span className="text-lg">←</span>
                        </Link>
                        <h1 className="text-xl font-bold">تسجيل الدخول</h1>
                        <div className="w-10"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center">مرحباً بك مرة أخرى</p>
                </div>
            </div>

            {/* Welcome Card */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10 mb-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <div className="text-4xl mb-3">👋</div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">أهلاً وسهلاً</h2>
                    <p className="text-gray-600 text-sm">
                        سجل دخولك للوصول إلى حسابك والاستمتاع بخدماتنا
                    </p>
                </div>
            </div>

            {/* Login Form */}
            <div className="max-w-sm mx-auto px-4 pb-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                        />

                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            كلمة المرور
                        </label>
                        <div className="relative">
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

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />

                            <span className="text-sm text-gray-700">تذكرني</span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            نسيت كلمة المرور؟
                        </Link>
                    </div>

                    {/* Error Message */}
                    {errors.general && (
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                            <p className="text-red-600 text-sm">{errors.general}</p>
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center space-x-2 space-x-reverse">
                                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                <span>جاري تسجيل الدخول...</span>
                            </div>
                        ) : (
                            'تسجيل الدخول'
                        )}
                    </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        ليس لديك حساب؟{' '}
                        <Link href="/register" className="text-blue-600 font-semibold">
                            إنشاء حساب جديد
                        </Link>
                    </p>
                </div>

                {/* Social Login */}
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
                            <span>الدخول باستخدام أبشر</span>
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 space-x-reverse hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-xl">🍎</span>
                            <span>الدخول باستخدام Apple</span>
                        </button>
                    </div>
                </div>

                {/* Quick Access */}
                <div className="mt-8 bg-blue-50 rounded-2xl p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 text-center">وصول سريع</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href="/register?type=customer"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-2xl mb-1">👤</div>
                            <div className="text-sm font-semibold text-gray-800">حساب عميل</div>
                            <div className="text-xs text-gray-600">أطلب الخدمات</div>
                        </Link>
                        <Link
                            href="/register?type=provider"
                            className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-2xl mb-1">🔧</div>
                            <div className="text-sm font-semibold text-gray-800">
                                حساب مقدم خدمة
                            </div>
                            <div className="text-xs text-gray-600">أقدم الخدمات</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
