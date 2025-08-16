'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState('current');

    const currentOrders = [
        {
            id: 1,
            service: 'تنظيف المنزل',
            icon: '🏠',
            status: 'في انتظار الموافقة',
            provider: 'أحمد علي',
            time: '2:00 م',
            date: 'اليوم',
            statusColor: 'bg-yellow-500',
        },
        {
            id: 2,
            service: 'تنظيف المنزل',
            icon: '🏠',
            status: 'جاري التنفيذ',
            provider: 'فاطمة محمد',
            time: '10:30 ص',
            date: 'اليوم',
            statusColor: 'bg-blue-500',
        },
        {
            id: 3,
            service: 'صيانة السباكة',
            icon: '🔧',
            status: 'في الطريق',
            provider: 'محمد حسن',
            time: '2:00 م',
            date: 'غداً',
            statusColor: 'bg-orange-500',
        },
    ];

    const completedOrders = [
        {
            id: 3,
            service: 'توصيل الطعام',
            icon: '🍕',
            status: 'مكتمل',
            provider: 'سارة أحمد',
            time: '8:30 م',
            date: 'أمس',
            statusColor: 'bg-green-500',
        },
        {
            id: 4,
            service: 'خدمات التجميل',
            icon: '💄',
            status: 'مكتمل',
            provider: 'فاطمة محمد',
            time: '3:00 م',
            date: '15 يناير',
            statusColor: 'bg-green-500',
        },
        {
            id: 5,
            service: 'تصليح الأجهزة',
            icon: '📱',
            status: 'مكتمل',
            provider: 'عبدالله خالد',
            time: '11:00 ص',
            date: '12 يناير',
            statusColor: 'bg-green-500',
        },
    ];

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
                        <h1 className="text-xl font-bold">طلباتي</h1>
                        <div className="w-10 h-10"></div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('current')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                                activeTab === 'current'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            الطلبات الحالية ({currentOrders.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('completed')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                                activeTab === 'completed'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            الطلبات المكتملة ({completedOrders.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="max-w-sm mx-auto px-4">
                {activeTab === 'current' && (
                    <div className="space-y-4">
                        {currentOrders.length > 0 ? (
                            currentOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                >
                                    <div className="flex items-start space-x-4 space-x-reverse">
                                        <div className="text-3xl">{order.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-semibold text-gray-800">
                                                    {order.service}
                                                </h3>
                                                <span
                                                    className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-1">
                                                مقدم الخدمة: {order.provider}
                                            </p>
                                            <p className="text-gray-500 text-xs">
                                                {order.date} - {order.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 space-x-reverse mt-4">
                                        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold">
                                            تتبع الطلب
                                        </button>
                                        <Link
                                            href={`/chat/${order.id}`}
                                            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold text-center"
                                        >
                                            تواصل
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📋</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    لا توجد طلبات حالية
                                </h3>
                                <p className="text-gray-600 text-sm">اطلب خدمة جديدة لتظهر هنا</p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="space-y-4">
                        {completedOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-start space-x-4 space-x-reverse">
                                    <div className="text-3xl">{order.icon}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-gray-800">
                                                {order.service}
                                            </h3>
                                            <span
                                                className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-1">
                                            مقدم الخدمة: {order.provider}
                                        </p>
                                        <p className="text-gray-500 text-xs">
                                            {order.date} - {order.time}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-3 space-x-reverse mt-4">
                                    <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold">
                                        تقييم الخدمة
                                    </button>
                                    <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold">
                                        إعادة الطلب
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="max-w-sm mx-auto px-4 py-3">
                    <div className="flex justify-around">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">🏠</span>
                            <span className="text-xs">الرئيسية</span>
                        </Link>
                        <button className="flex flex-col items-center space-y-1 text-blue-600">
                            <span className="text-xl">📋</span>
                            <span className="text-xs font-semibold">طلباتي</span>
                        </button>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💬</span>
                            <span className="text-xs">الرسائل</span>
                        </Link>
                        <button className="flex flex-col items-center space-y-1 text-gray-400">
                            <span className="text-xl">👤</span>
                            <span className="text-xs">الملف الشخصي</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
