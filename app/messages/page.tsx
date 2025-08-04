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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="asw6g0s">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="0mmkamo"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="6fl02e5">
                    <div className="flex items-center justify-between mb-4" data-oid="kjb8ur.">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="4q1d-q2"
                        >
                            <span className="text-lg" data-oid="az3sz6a">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="n_0jgee">
                            الرسائل
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="9iwqr6r"
                        >
                            <span className="text-lg" data-oid="n3xdyqo">
                                ✏️
                            </span>
                        </button>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="711:3bh">
                        تواصل مع مقدمي الخدمات
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="6-nrlpr">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid=".vm8t4."
                >
                    <div className="flex" data-oid="m_kjkfi">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="6o3ajfr"
                        >
                            جميع المحادثات
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors relative ${
                                activeTab === 'unread' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="3kxj4qw"
                        >
                            غير المقروءة
                            {totalUnreadCount > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                    data-oid="hs0molr"
                                >
                                    {totalUnreadCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Conversations List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="c67c10n">
                {filteredConversations.length > 0 ? (
                    <div className="space-y-3" data-oid="qk5v:79">
                        {filteredConversations.map((conversation) => (
                            <Link
                                key={conversation.id}
                                href={`/chat/${conversation.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="q7bqnd5"
                            >
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="dvzv0lr"
                                >
                                    {/* Avatar with online status */}
                                    <div className="relative" data-oid="kq_6nqu">
                                        <div className="text-3xl" data-oid="z.8va40">
                                            {conversation.otherUser.avatar}
                                        </div>
                                        {conversation.otherUser.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="ll3_usw"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Conversation Info */}
                                    <div className="flex-1 min-w-0" data-oid="c1v4xex">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="f4d9.iy"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="aprgtm5"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="11jfpvm"
                                                >
                                                    {conversation.otherUser.name}
                                                </h3>
                                                {conversation.otherUser.isServiceProvider && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="sce:ftd"
                                                    >
                                                        مقدم خدمة
                                                    </span>
                                                )}
                                            </div>
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="9k63t.h"
                                            >
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="-wn6o4y"
                                                >
                                                    {conversation.lastMessage.timestamp}
                                                </span>
                                                {conversation.unreadCount > 0 && (
                                                    <span
                                                        className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                                        data-oid=".cosv6j"
                                                    >
                                                        {conversation.unreadCount}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Service Info */}
                                        {conversation.serviceInfo && (
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse mb-2"
                                                data-oid="khifo_n"
                                            >
                                                <span className="text-sm" data-oid="tfmwao8">
                                                    {conversation.serviceInfo.icon}
                                                </span>
                                                <span
                                                    className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                                                    data-oid="qzhd_x4"
                                                >
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
                                            data-oid="04k8:x4"
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
                    <div className="text-center py-12" data-oid="igr__l6">
                        <div className="text-6xl mb-4" data-oid=".pzvor6">
                            💬
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="7iz0vvp">
                            {activeTab === 'unread'
                                ? 'لا توجد رسائل غير مقروءة'
                                : 'لا توجد محادثات'}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="l4v_dmq">
                            {activeTab === 'unread'
                                ? 'جميع رسائلك مقروءة'
                                : 'ابدأ محادثة مع مقدمي الخدمات من خلال العروض'}
                        </p>
                        {activeTab !== 'unread' && (
                            <Link
                                href="/offers"
                                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                                data-oid="a_e9lzm"
                            >
                                عرض العروض المتاحة
                            </Link>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid=":tws30w"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="06s5pcr">
                    <div className="flex justify-around" data-oid="hg65kx_">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="l5:2h-."
                        >
                            <span className="text-xl" data-oid="qkw7:qw">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="owuf8v-">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="24ztox5"
                        >
                            <span className="text-xl" data-oid="1tdl3.6">
                                📋
                            </span>
                            <span className="text-xs" data-oid="p.n9bqu">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9ghapk0"
                        >
                            <span className="text-xl" data-oid="nmf_nu7">
                                💰
                            </span>
                            <span className="text-xs" data-oid="mudeic9">
                                العروض
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="kfr6r-l"
                        >
                            <div className="relative" data-oid="0tkq3-t">
                                <span className="text-xl" data-oid="6b845:y">
                                    💬
                                </span>
                                {totalUnreadCount > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                        data-oid="yxk68h:"
                                    >
                                        {totalUnreadCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-semibold" data-oid="b1fskql">
                                الرسائل
                            </span>
                        </button>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="igysxat"
                        >
                            <span className="text-xl" data-oid="2cw2mu2">
                                👤
                            </span>
                            <span className="text-xs" data-oid="ydle_b6">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="cxnwngo"></div>
        </div>
    );
}
