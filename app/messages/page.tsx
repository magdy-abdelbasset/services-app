'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Conversation {
    id: string;
    otherUser: {
        id: string;
        name: string;
        avatar: string;
        isServiceProvider: boolean;
        isOnline: boolean;
    };
    lastMessage: {
        content: string;
        timestamp: string;
        senderId: string;
        isRead: boolean;
    };
    unreadCount: number;
    serviceInfo?: {
        name: string;
        icon: string;
    };
}

export default function MessagesPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');

    const conversations: Conversation[] = [
        {
            id: '1',
            otherUser: {
                id: 'provider1',
                name: 'أحمد علي',
                avatar: '👨‍💼',
                isServiceProvider: true,
                isOnline: true,
            },
            lastMessage: {
                content: 'ممتاز! سأكون هناك في الساعة 2:00 م',
                timestamp: '10:35 ص',
                senderId: 'provider1',
                isRead: true,
            },
            unreadCount: 0,
            serviceInfo: {
                name: 'تنظيف المنزل',
                icon: '🏠',
            },
        },
        {
            id: '2',
            otherUser: {
                id: 'provider2',
                name: 'فاطمة محمد',
                avatar: '👩‍💼',
                isServiceProvider: true,
                isOnline: false,
            },
            lastMessage: {
                content: 'هل يمكنني الحضور غداً بدلاً من اليوم؟',
                timestamp: 'أمس',
                senderId: 'provider2',
                isRead: false,
            },
            unreadCount: 2,
            serviceInfo: {
                name: 'تنظيف المنزل',
                icon: '🏠',
            },
        },
        {
            id: '3',
            otherUser: {
                id: 'provider3',
                name: 'محمد حسن',
                avatar: '👨‍🔧',
                isServiceProvider: true,
                isOnline: true,
            },
            lastMessage: {
                content: 'تم إصلاح المشكلة بنجاح، شكراً لك',
                timestamp: 'الأحد',
                senderId: 'user1',
                isRead: true,
            },
            unreadCount: 0,
            serviceInfo: {
                name: 'صيانة السباكة',
                icon: '🔧',
            },
        },
        {
            id: '4',
            otherUser: {
                id: 'provider4',
                name: 'سارة أحمد',
                avatar: '👩‍🎨',
                isServiceProvider: true,
                isOnline: false,
            },
            lastMessage: {
                content: 'سأرسل لك صور النتائج قريباً',
                timestamp: 'السبت',
                senderId: 'provider4',
                isRead: false,
            },
            unreadCount: 1,
            serviceInfo: {
                name: 'خدمات التجميل',
                icon: '💄',
            },
        },
    ];

    const filteredConversations =
        activeTab === 'unread'
            ? conversations.filter((conv) => conv.unreadCount > 0)
            : conversations;

    const totalUnreadCount = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0);

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
                        <h1 className="text-xl font-bold">الرسائل</h1>
                        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-lg">✏️</span>
                        </button>
                    </div>
                    <p className="text-white/90 text-sm text-center">تواصل مع مقدمي الخدمات</p>
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
                            جميع المحادثات
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors relative ${
                                activeTab === 'unread' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                        >
                            غير المقروءة
                            {totalUnreadCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalUnreadCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Conversations List */}
            <div className="max-w-sm mx-auto px-4 pb-6">
                {filteredConversations.length > 0 ? (
                    <div className="space-y-3">
                        {filteredConversations.map((conversation) => (
                            <Link
                                key={conversation.id}
                                href={`/chat/${conversation.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    {/* Avatar with online status */}
                                    <div className="relative">
                                        <div className="text-3xl">
                                            {conversation.otherUser.avatar}
                                        </div>
                                        {conversation.otherUser.isOnline && (
                                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        )}
                                    </div>

                                    {/* Conversation Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center space-x-2 space-x-reverse">
                                                <h3 className="font-semibold text-gray-800 truncate">
                                                    {conversation.otherUser.name}
                                                </h3>
                                                {conversation.otherUser.isServiceProvider && (
                                                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                                        مقدم خدمة
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center space-x-2 space-x-reverse">
                                                <span className="text-xs text-gray-500">
                                                    {conversation.lastMessage.timestamp}
                                                </span>
                                                {conversation.unreadCount > 0 && (
                                                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                        {conversation.unreadCount}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Service Info */}
                                        {conversation.serviceInfo && (
                                            <div className="flex items-center space-x-2 space-x-reverse mb-2">
                                                <span className="text-sm">
                                                    {conversation.serviceInfo.icon}
                                                </span>
                                                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                                    {conversation.serviceInfo.name}
                                                </span>
                                            </div>
                                        )}

                                        {/* Last Message */}
                                        <p
                                            className={`text-sm truncate ${
                                                conversation.unreadCount > 0
                                                    ? 'font-semibold text-gray-800'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {conversation.lastMessage.senderId === 'user1' &&
                                                'أنت: '}
                                            {conversation.lastMessage.content}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">💬</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {activeTab === 'unread'
                                ? 'لا توجد رسائل غير مقروءة'
                                : 'لا توجد محادثات'}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6">
                            {activeTab === 'unread'
                                ? 'جميع رسائلك مقروءة'
                                : 'ابدأ محادثة مع مقدمي الخدمات من خلال العروض'}
                        </p>
                        {activeTab !== 'unread' && (
                            <Link
                                href="/offers"
                                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            >
                                عرض العروض المتاحة
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
                                <span className="text-xl">💬</span>
                                {totalUnreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                        {totalUnreadCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-semibold">الرسائل</span>
                        </button>
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
