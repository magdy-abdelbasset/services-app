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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="4agn2.e">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="ojrv-eh"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="t5m6azy">
                    <div className="flex items-center justify-between mb-4" data-oid="w:h1ujj">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="p71a4pj"
                        >
                            <span className="text-lg" data-oid="lfhe8jf">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="zcapvb-">
                            طلباتي
                        </h1>
                        <div className="w-10 h-10" data-oid="oizz3oh"></div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="qwifs65">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="y6-o95o">
                    <div className="flex" data-oid="etragvl">
                        <button
                            onClick={() => setActiveTab('current')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                                activeTab === 'current'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid=".q2l80."
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
                            data-oid="pxailk0"
                        >
                            الطلبات المكتملة ({completedOrders.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="max-w-sm mx-auto px-4" data-oid=":.2gizf">
                {activeTab === 'current' && (
                    <div className="space-y-4" data-oid="8m5u9md">
                        {currentOrders.length > 0 ? (
                            currentOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="cb02-s7"
                                >
                                    <div
                                        className="flex items-start space-x-4 space-x-reverse"
                                        data-oid="ghes4fo"
                                    >
                                        <div className="text-3xl" data-oid="ro436vn">
                                            {order.icon}
                                        </div>
                                        <div className="flex-1" data-oid="l7_wxq9">
                                            <div
                                                className="flex items-center justify-between mb-2"
                                                data-oid="saa_a4l"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800"
                                                    data-oid="nm5s3kh"
                                                >
                                                    {order.service}
                                                </h3>
                                                <span
                                                    className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                    data-oid="ir33bk2"
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p
                                                className="text-gray-600 text-sm mb-1"
                                                data-oid="g::nfn6"
                                            >
                                                مقدم الخدمة: {order.provider}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="j.9tqr.">
                                                {order.date} - {order.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex space-x-3 space-x-reverse mt-4"
                                        data-oid="c_is08t"
                                    >
                                        <button
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                            data-oid="xobg-3-"
                                        >
                                            تتبع الطلب
                                        </button>
                                        <Link
                                            href={`/chat/${order.id}`}
                                            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold text-center"
                                            data-oid="lu..5oo"
                                        >
                                            تواصل
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12" data-oid="fytt65h">
                                <div className="text-6xl mb-4" data-oid="37-r4v1">
                                    📋
                                </div>
                                <h3
                                    className="text-lg font-semibold text-gray-800 mb-2"
                                    data-oid="7mprgru"
                                >
                                    لا توجد طلبات حالية
                                </h3>
                                <p className="text-gray-600 text-sm" data-oid="bi4t7kz">
                                    اطلب خدمة جديدة لتظهر هنا
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="space-y-4" data-oid="yit3gt3">
                        {completedOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="r0o48lt"
                            >
                                <div
                                    className="flex items-start space-x-4 space-x-reverse"
                                    data-oid="q5gf5:j"
                                >
                                    <div className="text-3xl" data-oid="r-bw2zl">
                                        {order.icon}
                                    </div>
                                    <div className="flex-1" data-oid="brkbm:c">
                                        <div
                                            className="flex items-center justify-between mb-2"
                                            data-oid="ltxnkeq"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="sup_6_-"
                                            >
                                                {order.service}
                                            </h3>
                                            <span
                                                className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                data-oid="gsm3l5_"
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                        <p
                                            className="text-gray-600 text-sm mb-1"
                                            data-oid="_oqd4kp"
                                        >
                                            مقدم الخدمة: {order.provider}
                                        </p>
                                        <p className="text-gray-500 text-xs" data-oid="l0jntue">
                                            {order.date} - {order.time}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex space-x-3 space-x-reverse mt-4"
                                    data-oid="72m:b16"
                                >
                                    <button
                                        className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="gz.74vq"
                                    >
                                        تقييم الخدمة
                                    </button>
                                    <button
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="bgewq1u"
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
                data-oid="_x77:c9"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="vjz-z0n">
                    <div className="flex justify-around" data-oid="mgbcuz6">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="tcn3z-e"
                        >
                            <span className="text-xl" data-oid="y60vcpe">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="mpfgnel">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="w-2wbov"
                        >
                            <span className="text-xl" data-oid="u39b5fu">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="71v9p4i">
                                طلباتي
                            </span>
                        </button>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="yche71e"
                        >
                            <span className="text-xl" data-oid="vass8gw">
                                💬
                            </span>
                            <span className="text-xs" data-oid="675:wg7">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="4_pwamw"
                        >
                            <span className="text-xl" data-oid="e4wb3o:">
                                👤
                            </span>
                            <span className="text-xs" data-oid="e1c48th">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="hhju-3g"></div>
        </div>
    );
}
