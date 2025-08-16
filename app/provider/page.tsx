'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProviderDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [availabilityStatus, setAvailabilityStatus] = useState(true);

    // Sample data for provider
    const providerStats = {
        totalEarnings: '2,450',
        completedJobs: 156,
        rating: 4.9,
        responseTime: '5 دقائق',
        activeOrders: 3,
        pendingRequests: 7,
    };

    const newRequests = [
        {
            id: 1,
            service: 'تنظيف المنزل',
            customer: 'سارة أحمد',
            location: 'الرياض - حي النرجس',
            price: '45 ريال',
            time: 'منذ 5 دقائق',
            urgent: true,
            description: 'تنظيف شقة من غرفتين وصالة',
        },
        {
            id: 2,
            service: 'صيانة السباكة',
            customer: 'محمد علي',
            location: 'الرياض - حي الملز',
            price: '80 ريال',
            time: 'منذ 12 دقيقة',
            urgent: false,
            description: 'إصلاح تسريب في الحمام',
        },
        {
            id: 3,
            service: 'توصيل الطعام',
            customer: 'فاطمة محمد',
            location: 'الرياض - حي العليا',
            price: '25 ريال',
            time: 'منذ 18 دقيقة',
            urgent: true,
            description: 'توصيل طلب من مطعم البيك',
        },
    ];

    const activeOrders = [
        {
            id: 1,
            service: 'تنظيف المنزل',
            customer: 'أحمد سالم',
            status: 'في الطريق',
            estimatedTime: '15 دقيقة',
            price: '50 ريال',
        },
        {
            id: 2,
            service: 'صيانة الأجهزة',
            customer: 'نورا خالد',
            status: 'جاري العمل',
            estimatedTime: '30 دقيقة',
            price: '120 ريال',
        },
    ];

    const handleAcceptRequest = (requestId: number) => {
        alert(`تم قبول الطلب رقم ${requestId}`);
    };

    const handleRejectRequest = (requestId: number) => {
        alert(`تم رفض الطلب رقم ${requestId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">👨‍💼</span>
                            </div>
                            <div>
                                <p className="text-sm opacity-90">مرحباً</p>
                                <p className="font-semibold">أحمد محمد</p>
                                <p className="text-xs opacity-75">مقدم خدمة</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <Link
                                href="/provider/notifications"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                            >
                                <span className="text-lg">🔔</span>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                    {providerStats.pendingRequests}
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Availability Toggle */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">حالة التوفر</h3>
                                <p className="text-sm opacity-90">
                                    {availabilityStatus
                                        ? 'متاح لاستقبال الطلبات'
                                        : 'غير متاح حالياً'}
                                </p>
                            </div>
                            <button
                                onClick={() => setAvailabilityStatus(!availabilityStatus)}
                                className={`w-14 h-8 rounded-full transition-colors ${
                                    availabilityStatus ? 'bg-green-500' : 'bg-gray-400'
                                } relative`}
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                        availabilityStatus ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-green-600">
                                {providerStats.totalEarnings}
                            </p>
                            <p className="text-sm text-gray-600">إجمالي الأرباح (ريال)</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-blue-600">
                                {providerStats.completedJobs}
                            </p>
                            <p className="text-sm text-gray-600">خدمة مكتملة</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 space-x-reverse">
                                <span className="text-yellow-500">⭐</span>
                                <p className="text-2xl font-bold text-orange-600">
                                    {providerStats.rating}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600">التقييم</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-purple-600">
                                {providerStats.activeOrders}
                            </p>
                            <p className="text-sm text-gray-600">طلبات نشطة</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-sm mx-auto px-4">
                {/* New Requests Section */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800">طلبات جديدة</h2>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {newRequests.length}
                        </span>
                    </div>

                    <div className="space-y-4">
                        {newRequests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 space-x-reverse mb-1">
                                            <h3 className="font-semibold text-gray-800">
                                                {request.service}
                                            </h3>
                                            {request.urgent && (
                                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                                    عاجل
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            العميل: {request.customer}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-1">
                                            📍 {request.location}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {request.description}
                                        </p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-lg font-bold text-green-600">
                                            {request.price}
                                        </p>
                                        <p className="text-xs text-gray-500">{request.time}</p>
                                    </div>
                                </div>

                                <div className="flex space-x-3 space-x-reverse">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                    >
                                        قبول
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                    >
                                        💬
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Orders Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">الطلبات النشطة</h2>

                    <div className="space-y-4">
                        {activeOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {order.service}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            العميل: {order.customer}
                                        </p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-lg font-bold text-green-600">
                                            {order.price}
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                order.status === 'في الطريق'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-orange-100 text-orange-600'
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-sm text-gray-600">
                                        الوقت المتبقي: {order.estimatedTime}
                                    </p>
                                </div>

                                <div className="flex space-x-3 space-x-reverse">
                                    <Link
                                        href={`/provider/order-details/${order.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${order.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                    >
                                        💬
                                    </Link>
                                    <button className="px-4 py-2 bg-green-100 text-green-600 rounded-xl">
                                        📞
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">إجراءات سريعة</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/provider/earnings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        >
                            <div className="text-3xl mb-2">💰</div>
                            <p className="font-semibold text-gray-800">الأرباح</p>
                        </Link>
                        <Link
                            href="/provider/schedule"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        >
                            <div className="text-3xl mb-2">📅</div>
                            <p className="font-semibold text-gray-800">الجدولة</p>
                        </Link>
                        <Link
                            href="/provider/services"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        >
                            <div className="text-3xl mb-2">🛠️</div>
                            <p className="font-semibold text-gray-800">خدماتي</p>
                        </Link>
                        <Link
                            href="/provider/reviews"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        >
                            <div className="text-3xl mb-2">⭐</div>
                            <p className="font-semibold text-gray-800">التقييمات</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Provider */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="max-w-sm mx-auto px-4 py-3">
                    <div className="flex justify-around">
                        <button className="flex flex-col items-center space-y-1 text-green-600">
                            <span className="text-xl">🏠</span>
                            <span className="text-xs font-semibold">الرئيسية</span>
                        </button>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                        >
                            <span className="text-xl">📋</span>
                            <span className="text-xs">الطلبات</span>
                            {providerStats.pendingRequests > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    {providerStats.pendingRequests}
                                </span>
                            )}
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
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">👤</span>
                            <span className="text-xs">الملف الشخصي</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
