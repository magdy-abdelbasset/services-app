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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="zgk6b8s">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="r1hp177"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="oapxkkk">
                    <div className="flex items-center justify-between mb-4" data-oid="7jq7fhg">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="natdda9"
                        >
                            <span className="text-lg" data-oid="g1momun">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="d_-or76">
                            الرسائل
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="kz790cm"
                        >
                            <span className="text-lg" data-oid="4pu7a91">
                                ✏️
                            </span>
                        </button>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="vdcxonb">
                        تواصل مع مقدمي الخدمات
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="1s0mbck">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid="xky3d.i"
                >
                    <div className="flex" data-oid="5t.29ek">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="3:p.g5_"
                        >
                            جميع المحادثات
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors relative ${
                                activeTab === 'unread' ? 'bg-blue-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="hmijgkb"
                        >
                            غير المقروءة
                            {totalUnreadCount > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                    data-oid="ovufd7i"
                                >
                                    {totalUnreadCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Conversations List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="mj8284g">
                {filteredConversations.length > 0 ? (
                    <div className="space-y-3" data-oid="1mhoy0y">
                        {filteredConversations.map((conversation) => (
                            <Link
                                key={conversation.id}
                                href={`/chat/${conversation.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="e4u:j:x"
                            >
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="1h5a1uh"
                                >
                                    {/* Avatar with online status */}
                                    <div className="relative" data-oid="z7cs.dv">
                                        <div className="text-3xl" data-oid="y9-hy-5">
                                            {conversation.otherUser.avatar}
                                        </div>
                                        {conversation.otherUser.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="3xnd0j3"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Conversation Info */}
                                    <div className="flex-1 min-w-0" data-oid="y1cq1ui">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="ypj9:9s"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="samjn:e"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="cjiquum"
                                                >
                                                    {conversation.otherUser.name}
                                                </h3>
                                                {conversation.otherUser.isServiceProvider && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="2obul_0"
                                                    >
                                                        مقدم خدمة
                                                    </span>
                                                )}
                                            </div>
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="oiw8ke8"
                                            >
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="g.4fll0"
                                                >
                                                    {conversation.lastMessage.timestamp}
                                                </span>
                                                {conversation.unreadCount > 0 && (
                                                    <span
                                                        className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                                        data-oid="pxbr09g"
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
                                                data-oid=":0nn:9q"
                                            >
                                                <span className="text-sm" data-oid="-eq_jd_">
                                                    {conversation.serviceInfo.icon}
                                                </span>
                                                <span
                                                    className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                                                    data-oid="a.ii.bk"
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
                                            data-oid="u_x_w3:"
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
                    <div className="text-center py-12" data-oid="ay3h1.y">
                        <div className="text-6xl mb-4" data-oid="-o._9g-">
                            💬
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="eq43aw0">
                            {activeTab === 'unread'
                                ? 'لا توجد رسائل غير مقروءة'
                                : 'لا توجد محادثات'}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid=":popjp.">
                            {activeTab === 'unread'
                                ? 'جميع رسائلك مقروءة'
                                : 'ابدأ محادثة مع مقدمي الخدمات من خلال العروض'}
                        </p>
                        {activeTab !== 'unread' && (
                            <Link
                                href="/offers"
                                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                                data-oid="dw-zhgu"
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
                data-oid="xf:x8j0"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="mclp:9.">
                    <div className="flex justify-around" data-oid="4fg:jgy">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="h.s1m2m"
                        >
                            <span className="text-xl" data-oid="q9yw_yz">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="h9sfldc">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="zf0n2xz"
                        >
                            <span className="text-xl" data-oid="t::_bay">
                                📋
                            </span>
                            <span className="text-xs" data-oid="10c-inv">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="5g0r.8h"
                        >
                            <span className="text-xl" data-oid="7shscoj">
                                💰
                            </span>
                            <span className="text-xs" data-oid="sjdkxgm">
                                العروض
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="in6qw2p"
                        >
                            <div className="relative" data-oid="r:3_k5q">
                                <span className="text-xl" data-oid="vf186_u">
                                    💬
                                </span>
                                {totalUnreadCount > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                        data-oid="tn1g6se"
                                    >
                                        {totalUnreadCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs font-semibold" data-oid="-3qqteu">
                                الرسائل
                            </span>
                        </button>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=".gx5eam"
                        >
                            <span className="text-xl" data-oid="f.sg6_n">
                                👤
                            </span>
                            <span className="text-xs" data-oid="oqgn3rl">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="7g9jux1"></div>
        </div>
    );
}
