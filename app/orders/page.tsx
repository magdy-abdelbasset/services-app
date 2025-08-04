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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="p8.hmm9">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="rm5tnjp"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="nt8.sro">
                    <div className="flex items-center justify-between mb-4" data-oid="tkh001v">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="m2-kz6t"
                        >
                            <span className="text-lg" data-oid="htp0glm">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="ee7dsqj">
                            طلباتي
                        </h1>
                        <div className="w-10 h-10" data-oid="b-7tbwx"></div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="x1dha49">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="k97:3df">
                    <div className="flex" data-oid="ncv6a3.">
                        <button
                            onClick={() => setActiveTab('current')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                                activeTab === 'current'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="_.ln5e_"
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
                            data-oid="ijvb:ub"
                        >
                            الطلبات المكتملة ({completedOrders.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="max-w-sm mx-auto px-4" data-oid="h4tlxt_">
                {activeTab === 'current' && (
                    <div className="space-y-4" data-oid="kbk:8dm">
                        {currentOrders.length > 0 ? (
                            currentOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="vwbvzav"
                                >
                                    <div
                                        className="flex items-start space-x-4 space-x-reverse"
                                        data-oid="xfc7_im"
                                    >
                                        <div className="text-3xl" data-oid="9ep3jet">
                                            {order.icon}
                                        </div>
                                        <div className="flex-1" data-oid="3iexk2c">
                                            <div
                                                className="flex items-center justify-between mb-2"
                                                data-oid="2ok6ni1"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800"
                                                    data-oid="klzvsls"
                                                >
                                                    {order.service}
                                                </h3>
                                                <span
                                                    className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                    data-oid="i7b5p7x"
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p
                                                className="text-gray-600 text-sm mb-1"
                                                data-oid="u20r3ez"
                                            >
                                                مقدم الخدمة: {order.provider}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="y51ipzj">
                                                {order.date} - {order.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex space-x-3 space-x-reverse mt-4"
                                        data-oid="fis2s6w"
                                    >
                                        <button
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                            data-oid="36c3kaw"
                                        >
                                            تتبع الطلب
                                        </button>
                                        <Link
                                            href={`/chat/${order.id}`}
                                            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold text-center"
                                            data-oid="jgdb:fs"
                                        >
                                            تواصل
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12" data-oid="k799ay6">
                                <div className="text-6xl mb-4" data-oid="mgfijnp">
                                    📋
                                </div>
                                <h3
                                    className="text-lg font-semibold text-gray-800 mb-2"
                                    data-oid="4biat_e"
                                >
                                    لا توجد طلبات حالية
                                </h3>
                                <p className="text-gray-600 text-sm" data-oid="y4nc4nx">
                                    اطلب خدمة جديدة لتظهر هنا
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="space-y-4" data-oid="yd8nmpk">
                        {completedOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="6yvlb8z"
                            >
                                <div
                                    className="flex items-start space-x-4 space-x-reverse"
                                    data-oid="y0-36nn"
                                >
                                    <div className="text-3xl" data-oid="u_mxs3w">
                                        {order.icon}
                                    </div>
                                    <div className="flex-1" data-oid="4e7a1hw">
                                        <div
                                            className="flex items-center justify-between mb-2"
                                            data-oid="4p3a.mq"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="g72p0ni"
                                            >
                                                {order.service}
                                            </h3>
                                            <span
                                                className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                data-oid="8r62obe"
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                        <p
                                            className="text-gray-600 text-sm mb-1"
                                            data-oid="vp5.2e9"
                                        >
                                            مقدم الخدمة: {order.provider}
                                        </p>
                                        <p className="text-gray-500 text-xs" data-oid="ux0g5gd">
                                            {order.date} - {order.time}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex space-x-3 space-x-reverse mt-4"
                                    data-oid="qpb5nh3"
                                >
                                    <button
                                        className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="-04vgev"
                                    >
                                        تقييم الخدمة
                                    </button>
                                    <button
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="v5zev05"
                                    >
                                        إعادة الطلب
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="n10rg4n"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="h4uxaw.">
                    <div className="flex justify-around" data-oid="01u0zgo">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="w-ivshf"
                        >
                            <span className="text-xl" data-oid="9cm37s:">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="6o::lg_">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="d_.4j4h"
                        >
                            <span className="text-xl" data-oid="e1ddbrx">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="vdfr50w">
                                طلباتي
                            </span>
                        </button>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="yqi58n2"
                        >
                            <span className="text-xl" data-oid="j_5l1:4">
                                💬
                            </span>
                            <span className="text-xs" data-oid="8-pr9hw">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="458e_7j"
                        >
                            <span className="text-xl" data-oid="1bxrjyw">
                                👤
                            </span>
                            <span className="text-xs" data-oid="rj97qaj">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="3:5wsyo"></div>
        </div>
    );
}
