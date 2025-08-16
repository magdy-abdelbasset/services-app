'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Notification {
    id: number;
    type: 'order_update' | 'new_offer' | 'message' | 'payment' | 'promotion' | 'system';
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    actionUrl?: string;
    icon: string;
    color: string;
}

export default function NotificationsPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: 1,
            type: 'order_update',
            title: 'تحديث حالة الطلب',
            message: 'مقدم الخدمة أحمد علي في الطريق إليك. الوصول المتوقع خلال 15 دقيقة',
            timestamp: 'منذ 5 دقائق',
            isRead: false,
            actionUrl: '/orders',
            icon: '🚗',
            color: 'bg-blue-500',
        },
        {
            id: 2,
            type: 'new_offer',
            title: 'عرض جديد متاح',
            message: 'تلقيت عرضاً جديداً لخدمة تنظيف المنزل من فاطمة محمد بسعر 45 ريال',
            timestamp: 'منذ 10 دقائق',
            isRead: false,
            actionUrl: '/offers',
            icon: '💰',
            color: 'bg-green-500',
        },
        {
            id: 3,
            type: 'message',
            title: 'رسالة جديدة',
            message: 'أرسل لك محمد حسن رسالة جديدة بخصوص طلب الصيانة',
            timestamp: 'منذ 30 دقيقة',
            isRead: true,
            actionUrl: '/chat/3',
            icon: '💬',
            color: 'bg-purple-500',
        },
        {
            id: 4,
            type: 'order_update',
            title: 'تم قبول طلبك',
            message: 'تم قبول طلب خدمة التنظيف من قبل أحمد علي. سيتم التواصل معك قريباً',
            timestamp: 'منذ ساعة',
            isRead: true,
            actionUrl: '/orders',
            icon: '✅',
            color: 'bg-green-500',
        },
        {
            id: 5,
            type: 'payment',
            title: 'تم الدفع بنجاح',
            message: 'تم دفع مبلغ 45 ريال لخدمة تنظيف المنزل. شكراً لاستخدام خدماتنا',
            timestamp: 'منذ ساعتين',
            isRead: true,
            actionUrl: '/orders',
            icon: '💳',
            color: 'bg-blue-500',
        },
        {
            id: 6,
            type: 'promotion',
            title: 'عرض خاص لك!',
            message: 'احصل على خصم 20% على خدمات التنظيف هذا الأسبوع. استخدم الكود: CLEAN20',
            timestamp: 'منذ 3 ساعات',
            isRead: false,
            actionUrl: '/categories',
            icon: '🎉',
            color: 'bg-orange-500',
        },
        {
            id: 7,
            type: 'system',
            title: 'تحديث التطبيق',
            message:
                'تم إضافة ميزات جديدة للتطبيق. قم بتحديث التطبيق للاستفادة من المميزات الجديدة',
            timestamp: 'منذ يوم',
            isRead: true,
            actionUrl: '',
            icon: '🔄',
            color: 'bg-gray-500',
        },
    ]);

    const filteredNotifications =
        activeTab === 'unread' ? notifications.filter((n) => !n.isRead) : notifications;

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    const markAsRead = (id: number) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification,
            ),
        );
    };

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((notification) => ({ ...notification, isRead: true })));
    };

    const deleteNotification = (id: number) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    const handleNotificationClick = (notification: Notification) => {
        if (!notification.isRead) {
            markAsRead(notification.id);
        }
        if (notification.actionUrl) {
            window.location.href = notification.actionUrl;
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
                        <h1 className="text-xl font-bold">الإشعارات</h1>
                        {unreadCount > 0 && (
                            <button
                                onClick={markAllAsRead}
                                className="text-sm bg-white/20 px-3 py-1 rounded-full"
                            >
                                قراءة الكل
                            </button>
                        )}
                    </div>
                    <p className="text-white/90 text-sm text-center">
                        {unreadCount > 0
                            ? `لديك ${unreadCount} إشعار غير مقروء`
                            : 'جميع الإشعارات مقروءة'}
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 py-4">
                <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                        >
                            جميع الإشعارات ({notifications.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors relative ${
                                activeTab === 'unread' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                        >
                            غير المقروءة ({unreadCount})
                            {unreadCount > 0 && activeTab !== 'unread' && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {unreadCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Notifications List */}
            <div className="max-w-sm mx-auto px-4 pb-6">
                {filteredNotifications.length > 0 ? (
                    <div className="space-y-3">
                        {filteredNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                onClick={() => handleNotificationClick(notification)}
                                className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow ${
                                    !notification.isRead ? 'border-l-4 border-l-blue-500' : ''
                                }`}
                            >
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 ${notification.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                                    >
                                        <span className="text-2xl">{notification.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between mb-1">
                                            <h3
                                                className={`font-semibold text-gray-800 ${!notification.isRead ? 'text-blue-800' : ''}`}
                                            >
                                                {notification.title}
                                            </h3>
                                            <div className="flex items-center space-x-2 space-x-reverse">
                                                {!notification.isRead && (
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                )}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteNotification(notification.id);
                                                    }}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <span className="text-sm">🗑️</span>
                                                </button>
                                            </div>
                                        </div>
                                        <p
                                            className={`text-sm mb-2 ${!notification.isRead ? 'text-gray-800' : 'text-gray-600'}`}
                                        >
                                            {notification.message}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">
                                                {notification.timestamp}
                                            </span>
                                            {notification.actionUrl && (
                                                <span className="text-xs text-blue-600 font-semibold">
                                                    اضغط للعرض ←
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔔</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {activeTab === 'unread'
                                ? 'لا توجد إشعارات غير مقروءة'
                                : 'لا توجد إشعارات'}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6">
                            {activeTab === 'unread'
                                ? 'جميع إشعاراتك مقروءة'
                                : 'ستظهر الإشعارات هنا عند وصولها'}
                        </p>
                        {activeTab !== 'unread' && (
                            <Link
                                href="/"
                                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            >
                                العودة للرئيسية
                            </Link>
                        )}
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
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">📂</span>
                            <span className="text-xs">التصنيفات</span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">📋</span>
                            <span className="text-xs">طلباتي</span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💰</span>
                            <span className="text-xs">العروض</span>
                        </Link>
                        <button className="flex flex-col items-center space-y-1 text-blue-600">
                            <div className="relative">
                                <span className="text-xl">🔔</span>
                                {unreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                        {unreadCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-semibold">الإشعارات</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
