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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="oh.alp5">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="45gdzaw"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="l3-q3:5">
                    <div className="flex items-center justify-between mb-4" data-oid="bveampv">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="xwz8p5q"
                        >
                            <span className="text-lg" data-oid="na8cd96">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="qnxjrsg">
                            الرسائل
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="62pod4:"
                        >
                            <span className="text-lg" data-oid="o4bvc3z">
                                ✏️
                            </span>
                        </button>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="u.bw-wl">
                        تواصل مع مقدمي الخدمات
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="vgdia1s">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid="iqbnn1n"
                >
                    <div className="flex" data-oid="0is8k8n">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="dv206yx"
                        >
                            جميع المحادثات
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors relative ${
                                activeTab === 'unread' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="1bv8cm6"
                        >
                            غير المقروءة
                            {totalUnreadCount > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                    data-oid="1szsgz8"
                                >
                                    {totalUnreadCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Conversations List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="0qf.ljw">
                {filteredConversations.length > 0 ? (
                    <div className="space-y-3" data-oid="2d:hdtl">
                        {filteredConversations.map((conversation) => (
                            <Link
                                key={conversation.id}
                                href={`/chat/${conversation.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="pu:qh.q"
                            >
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="hcidpk7"
                                >
                                    {/* Avatar with online status */}
                                    <div className="relative" data-oid="ol44x.t">
                                        <div className="text-3xl" data-oid="du7lcg9">
                                            {conversation.otherUser.avatar}
                                        </div>
                                        {conversation.otherUser.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="wgk53r9"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Conversation Info */}
                                    <div className="flex-1 min-w-0" data-oid="3w3p9-c">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="ejzmd5w"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid=":-4jh1z"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="3zoco7f"
                                                >
                                                    {conversation.otherUser.name}
                                                </h3>
                                                {conversation.otherUser.isServiceProvider && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="jn0w0mf"
                                                    >
                                                        مقدم خدمة
                                                    </span>
                                                )}
                                            </div>
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid=":23isah"
                                            >
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="woc6s5n"
                                                >
                                                    {conversation.lastMessage.timestamp}
                                                </span>
                                                {conversation.unreadCount > 0 && (
                                                    <span
                                                        className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                                        data-oid="z98zaqo"
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
                                                data-oid="traihpo"
                                            >
                                                <span className="text-sm" data-oid="6zxcrnu">
                                                    {conversation.serviceInfo.icon}
                                                </span>
                                                <span
                                                    className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                                                    data-oid="u4rf1rc"
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
                                            data-oid="l15z3kc"
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
                    <div className="text-center py-12" data-oid="uk8v1hv">
                        <div className="text-6xl mb-4" data-oid="24k.xqa">
                            💬
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="es2ycv2">
                            {activeTab === 'unread'
                                ? 'لا توجد رسائل غير مقروءة'
                                : 'لا توجد محادثات'}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="bwnx5-p">
                            {activeTab === 'unread'
                                ? 'جميع رسائلك مقروءة'
                                : 'ابدأ محادثة مع مقدمي الخدمات من خلال العروض'}
                        </p>
                        {activeTab !== 'unread' && (
                            <Link
                                href="/offers"
                                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                                data-oid=".gt9gnc"
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
                data-oid="7sq25_-"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="vht82x_">
                    <div className="flex justify-around" data-oid="7vbw4.q">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="f0fz2d7"
                        >
                            <span className="text-xl" data-oid="erv87e5">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="v7.ba1v">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="bp9b.n-"
                        >
                            <span className="text-xl" data-oid="4k:b3ud">
                                📋
                            </span>
                            <span className="text-xs" data-oid="q44s8gm">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="xfu77e:"
                        >
                            <span className="text-xl" data-oid="wpcy3mx">
                                💰
                            </span>
                            <span className="text-xs" data-oid="f204.or">
                                العروض
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="m63gchn"
                        >
                            <div className="relative" data-oid="zcdl:80">
                                <span className="text-xl" data-oid="jztaqqi">
                                    💬
                                </span>
                                {totalUnreadCount > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                        data-oid="koo4vnw"
                                    >
                                        {totalUnreadCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-semibold" data-oid="k1tgxmc">
                                الرسائل
                            </span>
                        </button>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="o4:9tar"
                        >
                            <span className="text-xl" data-oid="iu1eij5">
                                👤
                            </span>
                            <span className="text-xs" data-oid="wdsvwv4">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="w5mgier"></div>
        </div>
    );
}
