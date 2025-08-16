'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProviderProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'أحمد محمد',
        phone: '+966501234567',
        email: 'ahmed@example.com',
        location: 'الرياض - حي النرجس',
        bio: 'مقدم خدمة محترف مع خبرة 5 سنوات في مجال التنظيف والصيانة',
        services: ['تنظيف المنزل', 'صيانة السباكة', 'تصليح الأجهزة'],
        workingHours: 'من 8 صباحاً إلى 8 مساءً',
        languages: ['العربية', 'الإنجليزية'],
    });

    const stats = {
        rating: 4.9,
        totalJobs: 156,
        responseTime: '5 دقائق',
        completionRate: '98%',
        customerSatisfaction: '96%',
        yearsOfExperience: 5,
    };

    const recentReviews = [
        {
            id: 1,
            customer: 'سارة أحمد',
            rating: 5,
            comment: 'خدمة ممتازة وسريعة، أنصح بالتعامل معه',
            date: 'منذ يومين',
            service: 'تنظيف المنزل',
        },
        {
            id: 2,
            customer: 'محمد علي',
            rating: 5,
            comment: 'محترف جداً وأسعاره معقولة',
            date: 'منذ 3 أيام',
            service: 'صيانة السباكة',
        },
        {
            id: 3,
            customer: 'فاطمة محمد',
            rating: 4,
            comment: 'خدمة جيدة ولكن تأخر قليلاً',
            date: 'منذ أسبوع',
            service: 'تصليح الأجهزة',
        },
    ];

    const handleSaveProfile = () => {
        setIsEditing(false);
        alert('تم حفظ التغييرات بنجاح');
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/provider" className="text-white">
                            <span className="text-2xl">←</span>
                        </Link>
                        <h1 className="text-xl font-bold">الملف الشخصي</h1>
                        <button onClick={() => setIsEditing(!isEditing)} className="text-white">
                            <span className="text-xl">{isEditing ? '💾' : '✏️'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div className="text-center mb-6">
                        <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl text-white">👨‍💼</span>
                        </div>

                        {isEditing ? (
                            <input
                                type="text"
                                value={profileData.name}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, name: e.target.value })
                                }
                                className="text-2xl font-bold text-gray-800 text-center border-b border-gray-300 bg-transparent outline-none"
                            />
                        ) : (
                            <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
                        )}

                        <p className="text-gray-600 text-sm">مقدم خدمة محترف</p>

                        <div className="flex items-center justify-center space-x-4 space-x-reverse mt-4">
                            <div className="flex items-center space-x-1 space-x-reverse">
                                <span className="text-yellow-500">⭐</span>
                                <span className="font-semibold">{stats.rating}</span>
                            </div>
                            <div className="text-gray-400">•</div>
                            <span className="text-gray-600">{stats.totalJobs} خدمة مكتملة</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <span className="text-xl">📱</span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.phone}
                                    onChange={(e) =>
                                        setProfileData({ ...profileData, phone: e.target.value })
                                    }
                                    className="flex-1 border-b border-gray-300 bg-transparent outline-none"
                                />
                            ) : (
                                <span className="text-gray-700">{profileData.phone}</span>
                            )}
                        </div>

                        <div className="flex items-center space-x-3 space-x-reverse">
                            <span className="text-xl">📧</span>
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={profileData.email}
                                    onChange={(e) =>
                                        setProfileData({ ...profileData, email: e.target.value })
                                    }
                                    className="flex-1 border-b border-gray-300 bg-transparent outline-none"
                                />
                            ) : (
                                <span className="text-gray-700">{profileData.email}</span>
                            )}
                        </div>

                        <div className="flex items-center space-x-3 space-x-reverse">
                            <span className="text-xl">📍</span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.location}
                                    onChange={(e) =>
                                        setProfileData({ ...profileData, location: e.target.value })
                                    }
                                    className="flex-1 border-b border-gray-300 bg-transparent outline-none"
                                />
                            ) : (
                                <span className="text-gray-700">{profileData.location}</span>
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 flex space-x-3 space-x-reverse">
                            <button
                                onClick={handleSaveProfile}
                                className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                            >
                                إلغاء
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-sm mx-auto px-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                        <p className="text-2xl font-bold text-blue-600">{stats.responseTime}</p>
                        <p className="text-sm text-gray-600">متوسط وقت الاستجابة</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                        <p className="text-2xl font-bold text-green-600">{stats.completionRate}</p>
                        <p className="text-sm text-gray-600">معدل إتمام الطلبات</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                        <p className="text-2xl font-bold text-purple-600">
                            {stats.customerSatisfaction}
                        </p>
                        <p className="text-sm text-gray-600">رضا العملاء</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                        <p className="text-2xl font-bold text-orange-600">
                            {stats.yearsOfExperience}
                        </p>
                        <p className="text-sm text-gray-600">سنوات الخبرة</p>
                    </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">الخدمات المقدمة</h3>
                    <div className="flex flex-wrap gap-2">
                        {profileData.services.map((service, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>ساعات العمل:</span>
                            <span>{profileData.workingHours}</span>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-800">آخر التقييمات</h3>
                        <Link
                            href="/provider/reviews"
                            className="text-blue-600 text-sm font-semibold"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {recentReviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-b border-gray-100 pb-4 last:border-b-0"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {review.customer}
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            {review.service} • {review.date}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-1 space-x-reverse">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-sm ${
                                                    i < review.rating
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings & Actions */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">الإعدادات والخيارات</h3>

                    <div className="space-y-3">
                        <Link
                            href="/provider/services-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-3 space-x-reverse">
                                <span className="text-2xl">🛠️</span>
                                <span className="font-semibold text-gray-800">إدارة الخدمات</span>
                            </div>
                            <span className="text-gray-400">←</span>
                        </Link>

                        <Link
                            href="/provider/availability"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-3 space-x-reverse">
                                <span className="text-2xl">📅</span>
                                <span className="font-semibold text-gray-800">أوقات التوفر</span>
                            </div>
                            <span className="text-gray-400">←</span>
                        </Link>

                        <Link
                            href="/provider/documents"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-3 space-x-reverse">
                                <span className="text-2xl">📄</span>
                                <span className="font-semibold text-gray-800">
                                    الوثائق والتراخيص
                                </span>
                            </div>
                            <span className="text-gray-400">←</span>
                        </Link>

                        <Link
                            href="/provider/notifications-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-3 space-x-reverse">
                                <span className="text-2xl">🔔</span>
                                <span className="font-semibold text-gray-800">
                                    إعدادات الإشعارات
                                </span>
                            </div>
                            <span className="text-gray-400">←</span>
                        </Link>

                        <button className="w-full bg-red-50 rounded-2xl p-4 shadow-sm border border-red-100 flex items-center justify-between">
                            <div className="flex items-center space-x-3 space-x-reverse">
                                <span className="text-2xl">🚪</span>
                                <span className="font-semibold text-red-600">تسجيل الخروج</span>
                            </div>
                            <span className="text-red-400">←</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="max-w-sm mx-auto px-4 py-3">
                    <div className="flex justify-around">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">🏠</span>
                            <span className="text-xs">الرئيسية</span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">📋</span>
                            <span className="text-xs">الطلبات</span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💰</span>
                            <span className="text-xs">الأرباح</span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💬</span>
                            <span className="text-xs">الرسائل</span>
                        </Link>
                        <button className="flex flex-col items-center space-y-1 text-green-600">
                            <span className="text-xl">👤</span>
                            <span className="text-xs font-semibold">الملف الشخصي</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
