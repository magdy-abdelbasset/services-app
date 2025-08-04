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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="eg:1v6x">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="-y.-ss3"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="7hp.1uw">
                    <div className="flex items-center justify-between mb-4" data-oid="_fdswjv">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="42z4vrm"
                        >
                            <span className="text-lg" data-oid="cb3wpdq">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="s42721u">
                            الرسائل
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="4yf4_25"
                        >
                            <span className="text-lg" data-oid="jqj::d1">
                                ✏️
                            </span>
                        </button>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="6202j_6">
                        تواصل مع مقدمي الخدمات
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="hn7:42y">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid="gvpweuz"
                >
                    <div className="flex" data-oid="5lbmxc0">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="s:3fxm5"
                        >
                            جميع المحادثات
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors relative ${
                                activeTab === 'unread' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="mfhnnae"
                        >
                            غير المقروءة
                            {totalUnreadCount > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                    data-oid="o8qypm2"
                                >
                                    {totalUnreadCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Conversations List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="19eo7yi">
                {filteredConversations.length > 0 ? (
                    <div className="space-y-3" data-oid=":5agx7m">
                        {filteredConversations.map((conversation) => (
                            <Link
                                key={conversation.id}
                                href={`/chat/${conversation.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="fwi-vce"
                            >
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="v5z7zri"
                                >
                                    {/* Avatar with online status */}
                                    <div className="relative" data-oid="o7-i8lc">
                                        <div className="text-3xl" data-oid="sdext0a">
                                            {conversation.otherUser.avatar}
                                        </div>
                                        {conversation.otherUser.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="r-iwbsl"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Conversation Info */}
                                    <div className="flex-1 min-w-0" data-oid="s4i.tr5">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="6g:4v7z"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="sthtt4e"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="8:i9n.g"
                                                >
                                                    {conversation.otherUser.name}
                                                </h3>
                                                {conversation.otherUser.isServiceProvider && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="8.vsum8"
                                                    >
                                                        مقدم خدمة
                                                    </span>
                                                )}
                                            </div>
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="1.t8h8o"
                                            >
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="__7b0sm"
                                                >
                                                    {conversation.lastMessage.timestamp}
                                                </span>
                                                {conversation.unreadCount > 0 && (
                                                    <span
                                                        className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                                        data-oid="s14aaac"
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
                                                data-oid="jb.k03y"
                                            >
                                                <span className="text-sm" data-oid="ovfd5-7">
                                                    {conversation.serviceInfo.icon}
                                                </span>
                                                <span
                                                    className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                                                    data-oid="5ase8lb"
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
                                            data-oid="dgsgkrn"
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
                    <div className="text-center py-12" data-oid="g85v_6n">
                        <div className="text-6xl mb-4" data-oid="gzr67ck">
                            💬
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="gcxux4l">
                            {activeTab === 'unread'
                                ? 'لا توجد رسائل غير مقروءة'
                                : 'لا توجد محادثات'}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="coieese">
                            {activeTab === 'unread'
                                ? 'جميع رسائلك مقروءة'
                                : 'ابدأ محادثة مع مقدمي الخدمات من خلال العروض'}
                        </p>
                        {activeTab !== 'unread' && (
                            <Link
                                href="/offers"
                                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                                data-oid="7lqsjb7"
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
                data-oid="4cz7nan"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="b2l01ag">
                    <div className="flex justify-around" data-oid="3zh7ey5">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="y_39d:y"
                        >
                            <span className="text-xl" data-oid="_te5ux5">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="p0jb5rg">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="51p.tkp"
                        >
                            <span className="text-xl" data-oid="s89cxob">
                                📋
                            </span>
                            <span className="text-xs" data-oid="rh3m60x">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="zd0.a8e"
                        >
                            <span className="text-xl" data-oid="mp0ci93">
                                💰
                            </span>
                            <span className="text-xs" data-oid="ojjei56">
                                العروض
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="8y329lh"
                        >
                            <div className="relative" data-oid="mi5::tx">
                                <span className="text-xl" data-oid="ow2kc_h">
                                    💬
                                </span>
                                {totalUnreadCount > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                        data-oid="tdn:s1j"
                                    >
                                        {totalUnreadCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-semibold" data-oid="uv.wa8g">
                                الرسائل
                            </span>
                        </button>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="4iysnwp"
                        >
                            <span className="text-xl" data-oid="00fwzml">
                                👤
                            </span>
                            <span className="text-xs" data-oid="7uikmsv">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="dsr90.f"></div>
        </div>
    );
}
