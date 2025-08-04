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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="ujehc3o">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid=".5iidxb"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="z5lcy_x">
                    <div className="flex items-center justify-between mb-4" data-oid="sasju92">
                        <Link href="/provider" className="text-white" data-oid="4tav2or">
                            <span className="text-2xl" data-oid="uze4v5g">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="byr1449">
                            الرسائل
                        </h1>
                        <button className="text-white" data-oid="j5_p2ne">
                            <span className="text-xl" data-oid="4hqz96g">
                                🔍
                            </span>
                        </button>
                    </div>

                    <p className="text-white/90 text-sm" data-oid="1mb8x1g">
                        تواصل مع عملائك بسهولة
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid=".354qxi">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="dulyknd">
                    <div className="flex space-x-2 space-x-reverse" data-oid="5hf7mf8">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid=":5xd6qp"
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
                            data-oid="m87-i.3"
                        >
                            غير مقروءة ({conversations.filter((c) => c.unread > 0).length})
                            {totalUnread > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                    data-oid="jfoa35n"
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
                            data-oid="bnt17a5"
                        >
                            نشطة ({conversations.filter((c) => c.status === 'active').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Conversations List */}
            <div className="max-w-sm mx-auto px-4" data-oid="phg2ghq">
                <div className="space-y-3 mb-20" data-oid="d.9pj7n">
                    {filteredConversations.map((conversation) => (
                        <Link
                            key={conversation.id}
                            href={`/provider/chat/${conversation.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 block hover:shadow-md transition-shadow"
                            data-oid="yx437oy"
                        >
                            <div
                                className="flex items-start space-x-3 space-x-reverse"
                                data-oid="pjkuskq"
                            >
                                {/* Avatar */}
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0"
                                    data-oid="-lzioxw"
                                >
                                    <span className="text-2xl text-white" data-oid="75in0so">
                                        {conversation.avatar}
                                    </span>
                                </div>

                                {/* Conversation Info */}
                                <div className="flex-1 min-w-0" data-oid="3km0fxa">
                                    <div
                                        className="flex items-center justify-between mb-1"
                                        data-oid="28tml5l"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800 truncate"
                                            data-oid="zyaxugg"
                                        >
                                            {conversation.customer}
                                        </h3>
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse"
                                            data-oid="ny4ha03"
                                        >
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full ${getStatusColor(conversation.status)}`}
                                                data-oid="wo6l7k:"
                                            >
                                                {getStatusText(conversation.status)}
                                            </span>
                                            {conversation.unread > 0 && (
                                                <span
                                                    className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                                    data-oid="gueieei"
                                                >
                                                    {conversation.unread}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-1" data-oid="87-r2-u">
                                        {conversation.service}
                                    </p>

                                    <p
                                        className={`text-sm truncate ${
                                            conversation.unread > 0
                                                ? 'font-semibold text-gray-800'
                                                : 'text-gray-500'
                                        }`}
                                        data-oid="lb8:3em"
                                    >
                                        {conversation.lastMessage}
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1" data-oid=".s:chkb">
                                        {conversation.time}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="text-gray-400 flex-shrink-0" data-oid="xmq4dna">
                                    <span className="text-lg" data-oid="ga.hokq">
                                        ←
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {filteredConversations.length === 0 && (
                        <div className="text-center py-12" data-oid="dzf7--s">
                            <div className="text-6xl mb-4" data-oid="jmee26_">
                                💬
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="f8hd3le"
                            >
                                لا توجد رسائل
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="sbllel7">
                                {activeTab === 'all' && 'لم تستلم أي رسائل بعد'}
                                {activeTab === 'unread' && 'جميع الرسائل مقروءة'}
                                {activeTab === 'active' && 'لا توجد محادثات نشطة'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions Floating Button */}
            <div className="fixed bottom-24 left-4 z-50" data-oid="cfgsxlb">
                <button
                    className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
                    data-oid="imdxfv_"
                >
                    <span className="text-2xl" data-oid="3gqel8j">
                        ✏️
                    </span>
                </button>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="ny_1.87"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="6lz88d_">
                    <div className="flex justify-around" data-oid="9furwhs">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="3kzc.o1"
                        >
                            <span className="text-xl" data-oid="7f4wb45">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="ytlt984">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="m-_vdqn"
                        >
                            <span className="text-xl" data-oid="k_im.ub">
                                📋
                            </span>
                            <span className="text-xs" data-oid="pyxpt3m">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="wmeigto"
                        >
                            <span className="text-xl" data-oid="wv.q-1p">
                                💰
                            </span>
                            <span className="text-xs" data-oid="ac_.9c_">
                                الأرباح
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600 relative"
                            data-oid="uifdqlz"
                        >
                            <span className="text-xl" data-oid=".y6h9dv">
                                💬
                            </span>
                            <span className="text-xs font-semibold" data-oid="_14i0pr">
                                الرسائل
                            </span>
                            {totalUnread > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                                    data-oid="o9w_gnl"
                                >
                                    {totalUnread}
                                </span>
                            )}
                        </button>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="z1b_z5."
                        >
                            <span className="text-xl" data-oid="7.tx79t">
                                👤
                            </span>
                            <span className="text-xs" data-oid="m-vj6dl">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
