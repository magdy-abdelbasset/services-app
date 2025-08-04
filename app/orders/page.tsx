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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="qi6y6s5">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="9g6hd5-"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="mg0oawa">
                    <div className="flex items-center justify-between mb-4" data-oid="btwp49u">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="ysa7r8s"
                        >
                            <span className="text-lg" data-oid="n9r8_0k">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="2i4:j0y">
                            طلباتي
                        </h1>
                        <div className="w-10 h-10" data-oid="h-d8ryx"></div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="5.kj5sh">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="dll1p21">
                    <div className="flex" data-oid="_cqgwtk">
                        <button
                            onClick={() => setActiveTab('current')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                                activeTab === 'current'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="5nmu4ux"
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
                            data-oid="wc-q7gw"
                        >
                            الطلبات المكتملة ({completedOrders.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="max-w-sm mx-auto px-4" data-oid="22i5zj0">
                {activeTab === 'current' && (
                    <div className="space-y-4" data-oid="iu5w4dv">
                        {currentOrders.length > 0 ? (
                            currentOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="fj4qp5g"
                                >
                                    <div
                                        className="flex items-start space-x-4 space-x-reverse"
                                        data-oid="gp.4:aa"
                                    >
                                        <div className="text-3xl" data-oid="okjj6y0">
                                            {order.icon}
                                        </div>
                                        <div className="flex-1" data-oid="y15cn5h">
                                            <div
                                                className="flex items-center justify-between mb-2"
                                                data-oid="mgjvevb"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800"
                                                    data-oid="4pa0wj8"
                                                >
                                                    {order.service}
                                                </h3>
                                                <span
                                                    className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                    data-oid="yeqft3o"
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p
                                                className="text-gray-600 text-sm mb-1"
                                                data-oid="4mtdagt"
                                            >
                                                مقدم الخدمة: {order.provider}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="g1er07u">
                                                {order.date} - {order.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex space-x-3 space-x-reverse mt-4"
                                        data-oid="a8-5i:q"
                                    >
                                        <button
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                            data-oid="9qb8fob"
                                        >
                                            تتبع الطلب
                                        </button>
                                        <Link
                                            href={`/chat/${order.id}`}
                                            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold text-center"
                                            data-oid=".ex0nye"
                                        >
                                            تواصل
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12" data-oid="cq:k_:i">
                                <div className="text-6xl mb-4" data-oid="dsbrzt6">
                                    📋
                                </div>
                                <h3
                                    className="text-lg font-semibold text-gray-800 mb-2"
                                    data-oid="hm-_o06"
                                >
                                    لا توجد طلبات حالية
                                </h3>
                                <p className="text-gray-600 text-sm" data-oid="nimo8oh">
                                    اطلب خدمة جديدة لتظهر هنا
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'completed' && (
                    <div className="space-y-4" data-oid="o6ou4s8">
                        {completedOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="sr5s:gs"
                            >
                                <div
                                    className="flex items-start space-x-4 space-x-reverse"
                                    data-oid="8y0pz-w"
                                >
                                    <div className="text-3xl" data-oid="22a525o">
                                        {order.icon}
                                    </div>
                                    <div className="flex-1" data-oid="vt:e.-6">
                                        <div
                                            className="flex items-center justify-between mb-2"
                                            data-oid="0ppq2j2"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="ivk94l2"
                                            >
                                                {order.service}
                                            </h3>
                                            <span
                                                className={`${order.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                                                data-oid="0r9s_tc"
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                        <p
                                            className="text-gray-600 text-sm mb-1"
                                            data-oid="6e:tgf4"
                                        >
                                            مقدم الخدمة: {order.provider}
                                        </p>
                                        <p className="text-gray-500 text-xs" data-oid="lwo_rkf">
                                            {order.date} - {order.time}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex space-x-3 space-x-reverse mt-4"
                                    data-oid="57zm1b-"
                                >
                                    <button
                                        className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="84e90k6"
                                    >
                                        تقييم الخدمة
                                    </button>
                                    <button
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                        data-oid="n7zjqky"
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
                data-oid="y66:x3."
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="fu096l8">
                    <div className="flex justify-around" data-oid="p_cr0o3">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="78o4mau"
                        >
                            <span className="text-xl" data-oid="lxjf0.w">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="-.ae5x5">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="lx9n3::"
                        >
                            <span className="text-xl" data-oid="18rf_5.">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="1ekjvb4">
                                طلباتي
                            </span>
                        </button>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9myp4-q"
                        >
                            <span className="text-xl" data-oid="yopp18-">
                                💬
                            </span>
                            <span className="text-xs" data-oid="l3ufl_n">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="t_bjqsi"
                        >
                            <span className="text-xl" data-oid="netpvwq">
                                👤
                            </span>
                            <span className="text-xs" data-oid="r9.esa0">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="3u:g0g4"></div>
        </div>
    );
}
