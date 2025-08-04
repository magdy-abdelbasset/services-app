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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="8cx6ph-">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="d71bvia"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="adqj.lj">
                    <div className="flex items-center justify-between mb-4" data-oid="8-0x4c8">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="bj_:c.x"
                        >
                            <span className="text-lg" data-oid="0xeou3l">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="3cuui_h">
                            طلباتي
                        </h1>
                        <div className="w-10 h-10" data-oid="5ac35gr"></div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="4b4bw.8">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="8c8fo39">
                    <div className="flex" data-oid="9:a4e1_">
                        <button
                            onClick={() => setActiveTab('current')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                                activeTab === 'current'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="3x.73vj"
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
                            data-oid=".o-jtjd"
                        >
                            الطلبات المكتملة ({completedOrders.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="max-w-sm mx-auto px-4" data-oid="_ac47ve">
                {activeTab === 'current' && (
                    <div className="space-y-4" data-oid="dwad6eu">
                        {currentOrders.length > 0 ? (
                            currentOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid=":5iogat"
                                >
                                    <div
                                        className="flex items-start space-x-4 space-x-reverse"
                                        data-oid="wfdpcfr"
                                    >
                                        <div className="text-3xl" data-oid="r9ckj5m">
                                            {order.icon}
                                        </div>
                                        <div className="flex-1" data-oid="-qq:m.r">
                                            <div
                                                className="flex items-center justify-between mb-2"
                                                data-oid="eh_39ez"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800"
                                                    data-oid="k028qhe"
                                                >
                                                    {order.service}
                                                </h3>
                                                <span
                                                    className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                    data-oid="tkj:tf5"
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p
                                                className="text-gray-600 text-sm mb-1"
                                                data-oid="_s9gjrr"
                                            >
                                                مقدم الخدمة: {order.provider}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="tlcz-gt">
                                                {order.date} - {order.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex space-x-3 space-x-reverse mt-4"
                                        data-oid="klap.qe"
                                    >
                                        <button
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                            data-oid="lv.zyp_"
                                        >
                                            تتبع الطلب
                                        </button>
                                        <Link
                                            href={`/chat/${order.id}`}
                                            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold text-center"
                                            data-oid="vl7jo5d"
                                        >
                                            تواصل
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12" data-oid="3b0bpoo">
                                <div className="text-6xl mb-4" data-oid="u3lxy7t">
                                    📋
                                </div>
                                <h3
                                    className="text-lg font-semibold text-gray-800 mb-2"
                                    data-oid="oe7zlj-"
                                >
                                    لا توجد طلبات حالية
                                </h3>
                                <p className="text-gray-600 text-sm" data-oid="9gms6ai">
                                    اطلب خدمة جديدة لتظهر هنا
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="space-y-4" data-oid="9:g.g7u">
                        {completedOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="ddge3ko"
                            >
                                <div
                                    className="flex items-start space-x-4 space-x-reverse"
                                    data-oid="1mhuqgb"
                                >
                                    <div className="text-3xl" data-oid="239:lb7">
                                        {order.icon}
                                    </div>
                                    <div className="flex-1" data-oid="pbv0g.2">
                                        <div
                                            className="flex items-center justify-between mb-2"
                                            data-oid="g721jdz"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="v-0:c6r"
                                            >
                                                {order.service}
                                            </h3>
                                            <span
                                                className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                data-oid="c6s5bf6"
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                        <p
                                            className="text-gray-600 text-sm mb-1"
                                            data-oid="uvw1gx."
                                        >
                                            مقدم الخدمة: {order.provider}
                                        </p>
                                        <p className="text-gray-500 text-xs" data-oid="ay01:0r">
                                            {order.date} - {order.time}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex space-x-3 space-x-reverse mt-4"
                                    data-oid="qyglk6u"
                                >
                                    <button
                                        className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="y6yf33g"
                                    >
                                        تقييم الخدمة
                                    </button>
                                    <button
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="rr73mgm"
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
                data-oid="1x_rm_e"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="m9frblg">
                    <div className="flex justify-around" data-oid="hct5zfr">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9prv5ml"
                        >
                            <span className="text-xl" data-oid="_a5cn-0">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="qlrf-jz">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="-g5zwp8"
                        >
                            <span className="text-xl" data-oid="iksbd_6">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="p9tb3l3">
                                طلباتي
                            </span>
                        </button>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="7v5qaty"
                        >
                            <span className="text-xl" data-oid="374i0v2">
                                💬
                            </span>
                            <span className="text-xs" data-oid="4333w3v">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="2gf781-"
                        >
                            <span className="text-xl" data-oid="dp9v:5k">
                                👤
                            </span>
                            <span className="text-xs" data-oid="4xgh2eu">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="ahfw:ly"></div>
        </div>
    );
}
