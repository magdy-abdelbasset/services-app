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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="mn_2.43">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="r6xy-v-"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="yrg28s9">
                    <div className="flex items-center justify-between mb-4" data-oid="31a8s4y">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="s:_b0lv"
                        >
                            <span className="text-lg" data-oid="u0w6zhl">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="wx_88.d">
                            طلباتي
                        </h1>
                        <div className="w-10 h-10" data-oid="f9adoc4"></div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="28y:k_2">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="vm7k6my">
                    <div className="flex" data-oid="s44mvqd">
                        <button
                            onClick={() => setActiveTab('current')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                                activeTab === 'current'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="whixm7m"
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
                            data-oid="0lxjre6"
                        >
                            الطلبات المكتملة ({completedOrders.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="max-w-sm mx-auto px-4" data-oid="s-c0r1_">
                {activeTab === 'current' && (
                    <div className="space-y-4" data-oid="i8sxx-t">
                        {currentOrders.length > 0 ? (
                            currentOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="0wcd8r-"
                                >
                                    <div
                                        className="flex items-start space-x-4 space-x-reverse"
                                        data-oid="3c.wih:"
                                    >
                                        <div className="text-3xl" data-oid="0lh9evs">
                                            {order.icon}
                                        </div>
                                        <div className="flex-1" data-oid="19.s.ho">
                                            <div
                                                className="flex items-center justify-between mb-2"
                                                data-oid="jahcgwk"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800"
                                                    data-oid="t2u_mo8"
                                                >
                                                    {order.service}
                                                </h3>
                                                <span
                                                    className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                    data-oid="0qz77_s"
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p
                                                className="text-gray-600 text-sm mb-1"
                                                data-oid="bpmamtt"
                                            >
                                                مقدم الخدمة: {order.provider}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="r0p6.rj">
                                                {order.date} - {order.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex space-x-3 space-x-reverse mt-4"
                                        data-oid="8ea2gul"
                                    >
                                        <button
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                            data-oid="lcwt-lk"
                                        >
                                            تتبع الطلب
                                        </button>
                                        <Link
                                            href={`/chat/${order.id}`}
                                            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold text-center"
                                            data-oid="as5cssx"
                                        >
                                            تواصل
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12" data-oid="1t-wfbc">
                                <div className="text-6xl mb-4" data-oid="3k-f6kk">
                                    📋
                                </div>
                                <h3
                                    className="text-lg font-semibold text-gray-800 mb-2"
                                    data-oid="50b9mib"
                                >
                                    لا توجد طلبات حالية
                                </h3>
                                <p className="text-gray-600 text-sm" data-oid="bnep76w">
                                    اطلب خدمة جديدة لتظهر هنا
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="space-y-4" data-oid="zjas6cv">
                        {completedOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="o4rvp69"
                            >
                                <div
                                    className="flex items-start space-x-4 space-x-reverse"
                                    data-oid="kkfi.r9"
                                >
                                    <div className="text-3xl" data-oid="dv7skr-">
                                        {order.icon}
                                    </div>
                                    <div className="flex-1" data-oid="_5_-78q">
                                        <div
                                            className="flex items-center justify-between mb-2"
                                            data-oid="lf1j:v9"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="e_8t4ba"
                                            >
                                                {order.service}
                                            </h3>
                                            <span
                                                className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                data-oid="9pw7j5h"
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                        <p
                                            className="text-gray-600 text-sm mb-1"
                                            data-oid="5btkfaj"
                                        >
                                            مقدم الخدمة: {order.provider}
                                        </p>
                                        <p className="text-gray-500 text-xs" data-oid="5nxxaa7">
                                            {order.date} - {order.time}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex space-x-3 space-x-reverse mt-4"
                                    data-oid="8wzkl73"
                                >
                                    <button
                                        className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="qcjragy"
                                    >
                                        تقييم الخدمة
                                    </button>
                                    <button
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="7kk_u0p"
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
                data-oid="02y6.hg"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="5kyo97q">
                    <div className="flex justify-around" data-oid="g.pil1m">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="z913pmo"
                        >
                            <span className="text-xl" data-oid="vzkqtqq">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="8:fxp8:">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="po.mpo9"
                        >
                            <span className="text-xl" data-oid="-glnjht">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="02txq1r">
                                طلباتي
                            </span>
                        </button>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ydohgn3"
                        >
                            <span className="text-xl" data-oid="9onfotl">
                                💬
                            </span>
                            <span className="text-xs" data-oid="jar60:q">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="vsx0tnt"
                        >
                            <span className="text-xl" data-oid="ctfn:fi">
                                👤
                            </span>
                            <span className="text-xs" data-oid="9il_ma9">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="fduck1a"></div>
        </div>
    );
}
