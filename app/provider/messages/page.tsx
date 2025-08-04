'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProviderMessages() {
    const [activeTab, setActiveTab] = useState('all');

    const conversations = [
        {
            id: 1,
            customer: 'سارة أحمد',
            lastMessage: 'شكراً لك، الخدمة كانت ممتازة',
            time: 'منذ 5 دقائق',
            unread: 0,
            status: 'completed',
            service: 'تنظيف المنزل',
            avatar: '👩',
        },
        {
            id: 2,
            customer: 'محمد علي',
            lastMessage: 'متى ستصل؟',
            time: 'منذ 12 دقيقة',
            unread: 2,
            status: 'active',
            service: 'صيانة السباكة',
            avatar: '👨',
        },
        {
            id: 3,
            customer: 'فاطمة محمد',
            lastMessage: 'هل يمكنك القدوم اليوم؟',
            time: 'منذ 30 دقيقة',
            unread: 1,
            status: 'pending',
            service: 'توصيل الطعام',
            avatar: '👩‍🦱',
        },
        {
            id: 4,
            customer: 'خالد سالم',
            lastMessage: 'تم إنجاز العمل بنجاح',
            time: 'منذ ساعة',
            unread: 0,
            status: 'completed',
            service: 'تصليح الأجهزة',
            avatar: '👨‍💼',
        },
        {
            id: 5,
            customer: 'نورا خالد',
            lastMessage: 'أحتاج تفاصيل أكثر عن الخدمة',
            time: 'منذ ساعتين',
            unread: 3,
            status: 'inquiry',
            service: 'استشارة',
            avatar: '👩‍💻',
        },
    ];

    const filteredConversations = conversations.filter((conv) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'unread') return conv.unread > 0;
        if (activeTab === 'active') return conv.status === 'active';
        return true;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-600';
            case 'pending':
                return 'bg-yellow-100 text-yellow-600';
            case 'completed':
                return 'bg-blue-100 text-blue-600';
            case 'inquiry':
                return 'bg-purple-100 text-purple-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'active':
                return 'نشط';
            case 'pending':
                return 'في الانتظار';
            case 'completed':
                return 'مكتمل';
            case 'inquiry':
                return 'استفسار';
            default:
                return 'غير محدد';
        }
    };

    const totalUnread = conversations.reduce((sum, conv) => sum + conv.unread, 0);

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="4g54yix">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="9vtx5t7"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="s7saw:p">
                    <div className="flex items-center justify-between mb-4" data-oid="2c4o2vu">
                        <Link href="/provider" className="text-white" data-oid="i27vjvz">
                            <span className="text-2xl" data-oid="e0q2pvt">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="t26oyno">
                            الرسائل
                        </h1>
                        <button className="text-white" data-oid=".yyo3w9">
                            <span className="text-xl" data-oid="j3qzlw9">
                                🔍
                            </span>
                        </button>
                    </div>

                    <p className="text-white/90 text-sm" data-oid="fwbk8kv">
                        تواصل مع عملائك بسهولة
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="u4lohk:">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="kgj5yan">
                    <div className="flex space-x-2 space-x-reverse" data-oid="-w02b4c">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="2wp329h"
                        >
                            الكل ({conversations.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors relative ${
                                activeTab === 'unread'
                                    ? 'bg-red-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="teily0j"
                        >
                            غير مقروءة ({conversations.filter((c) => c.unread > 0).length})
                            {totalUnread > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                    data-oid="1_527i9"
                                >
                                    {totalUnread}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'active'
                                    ? 'bg-green-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="ru3-:um"
                        >
                            نشطة ({conversations.filter((c) => c.status === 'active').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Conversations List */}
            <div className="max-w-sm mx-auto px-4" data-oid="iz54tg_">
                <div className="space-y-3 mb-20" data-oid="kwtgivg">
                    {filteredConversations.map((conversation) => (
                        <Link
                            key={conversation.id}
                            href={`/provider/chat/${conversation.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 block hover:shadow-md transition-shadow"
                            data-oid="ksdjam8"
                        >
                            <div
                                className="flex items-start space-x-3 space-x-reverse"
                                data-oid="vti5x1h"
                            >
                                {/* Avatar */}
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0"
                                    data-oid="s6_nn8w"
                                >
                                    <span className="text-2xl text-white" data-oid="ui-2p_i">
                                        {conversation.avatar}
                                    </span>
                                </div>

                                {/* Conversation Info */}
                                <div className="flex-1 min-w-0" data-oid="rzo47hp">
                                    <div
                                        className="flex items-center justify-between mb-1"
                                        data-oid="0in3fxh"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800 truncate"
                                            data-oid="5pi2.gf"
                                        >
                                            {conversation.customer}
                                        </h3>
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse"
                                            data-oid="4r8rpoc"
                                        >
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full ${getStatusColor(conversation.status)}`}
                                                data-oid="a_3azfe"
                                            >
                                                {getStatusText(conversation.status)}
                                            </span>
                                            {conversation.unread > 0 && (
                                                <span
                                                    className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                                    data-oid="slv6owz"
                                                >
                                                    {conversation.unread}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-1" data-oid=".0_9n6z">
                                        {conversation.service}
                                    </p>

                                    <p
                                        className={`text-sm truncate ${
                                            conversation.unread > 0
                                                ? 'font-semibold text-gray-800'
                                                : 'text-gray-500'
                                        }`}
                                        data-oid="s4va2ns"
                                    >
                                        {conversation.lastMessage}
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1" data-oid="xqm4qrf">
                                        {conversation.time}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="text-gray-400 flex-shrink-0" data-oid="f09jb_5">
                                    <span className="text-lg" data-oid="j:v-qcf">
                                        ←
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {filteredConversations.length === 0 && (
                        <div className="text-center py-12" data-oid=".bdmu0q">
                            <div className="text-6xl mb-4" data-oid="trg-1tx">
                                💬
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="wvsxh81"
                            >
                                لا توجد رسائل
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="qlq.-r3">
                                {activeTab === 'all' && 'لم تستلم أي رسائل بعد'}
                                {activeTab === 'unread' && 'جميع الرسائل مقروءة'}
                                {activeTab === 'active' && 'لا توجد محادثات نشطة'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions Floating Button */}
            <div className="fixed bottom-24 left-4 z-50" data-oid="0foqbz-">
                <button
                    className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
                    data-oid="5p0-nir"
                >
                    <span className="text-2xl" data-oid="i.crtiy">
                        ✏️
                    </span>
                </button>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="sgnsi__"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid=".fpyk84">
                    <div className="flex justify-around" data-oid="rws0.qr">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="45fm174"
                        >
                            <span className="text-xl" data-oid="zdemy8b">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="hd.a280">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="wk7.9bo"
                        >
                            <span className="text-xl" data-oid="k103z3g">
                                📋
                            </span>
                            <span className="text-xs" data-oid="4z2ifg1">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="7462x4o"
                        >
                            <span className="text-xl" data-oid="5oncbv.">
                                💰
                            </span>
                            <span className="text-xs" data-oid="ihblzin">
                                الأرباح
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600 relative"
                            data-oid="or:k54v"
                        >
                            <span className="text-xl" data-oid="6kxp0jb">
                                💬
                            </span>
                            <span className="text-xs font-semibold" data-oid="azcmoh5">
                                الرسائل
                            </span>
                            {totalUnread > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                                    data-oid="9krmo0g"
                                >
                                    {totalUnread}
                                </span>
                            )}
                        </button>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="z15xe3s"
                        >
                            <span className="text-xl" data-oid="j9gjfa6">
                                👤
                            </span>
                            <span className="text-xs" data-oid="zpwv6oh">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
