'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProviderDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [availabilityStatus, setAvailabilityStatus] = useState(true);

    // Sample data for provider
    const providerStats = {
        totalEarnings: '2,450',
        completedJobs: 156,
        rating: 4.9,
        responseTime: '5 دقائق',
        activeOrders: 3,
        pendingRequests: 7,
    };

    const newRequests = [
        {
            id: 1,
            service: 'تنظيف المنزل',
            customer: 'سارة أحمد',
            location: 'الرياض - حي النرجس',
            price: '45 ريال',
            time: 'منذ 5 دقائق',
            urgent: true,
            description: 'تنظيف شقة من غرفتين وصالة',
        },
        {
            id: 2,
            service: 'صيانة السباكة',
            customer: 'محمد علي',
            location: 'الرياض - حي الملز',
            price: '80 ريال',
            time: 'منذ 12 دقيقة',
            urgent: false,
            description: 'إصلاح تسريب في الحمام',
        },
        {
            id: 3,
            service: 'توصيل الطعام',
            customer: 'فاطمة محمد',
            location: 'الرياض - حي العليا',
            price: '25 ريال',
            time: 'منذ 18 دقيقة',
            urgent: true,
            description: 'توصيل طلب من مطعم البيك',
        },
    ];

    const activeOrders = [
        {
            id: 1,
            service: 'تنظيف المنزل',
            customer: 'أحمد سالم',
            status: 'في الطريق',
            estimatedTime: '15 دقيقة',
            price: '50 ريال',
        },
        {
            id: 2,
            service: 'صيانة الأجهزة',
            customer: 'نورا خالد',
            status: 'جاري العمل',
            estimatedTime: '30 دقيقة',
            price: '120 ريال',
        },
    ];

    const handleAcceptRequest = (requestId: number) => {
        alert(`تم قبول الطلب رقم ${requestId}`);
    };

    const handleRejectRequest = (requestId: number) => {
        alert(`تم رفض الطلب رقم ${requestId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="13gk2du">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="pgywq5f"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="b2xvqr_">
                    <div className="flex items-center justify-between mb-6" data-oid="zefm36m">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="m00pvzn"
                        >
                            <div
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="1iksji."
                            >
                                <span className="text-2xl" data-oid="3:xvxwf">
                                    👨‍💼
                                </span>
                            </div>
                            <div data-oid="i-t2xam">
                                <p className="text-sm opacity-90" data-oid="jlduhlk">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="jfg1.9e">
                                    أحمد محمد
                                </p>
                                <p className="text-xs opacity-75" data-oid="118lbdy">
                                    مقدم خدمة
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center space-x-2 space-x-reverse"
                            data-oid="sjdy.n7"
                        >
                            <Link
                                href="/provider/notifications"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                                data-oid="8kp33sf"
                            >
                                <span className="text-lg" data-oid="1bhz:l1">
                                    🔔
                                </span>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    data-oid="b2m1rxp"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Availability Toggle */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid="pumu.52">
                        <div className="flex items-center justify-between" data-oid=":1vojgv">
                            <div data-oid="89dutgj">
                                <h3 className="font-semibold" data-oid="fw5txac">
                                    حالة التوفر
                                </h3>
                                <p className="text-sm opacity-90" data-oid="5nw-ef-">
                                    {availabilityStatus
                                        ? 'متاح لاستقبال الطلبات'
                                        : 'غير متاح حالياً'}
                                </p>
                            </div>
                            <button
                                onClick={() => setAvailabilityStatus(!availabilityStatus)}
                                className={`w-14 h-8 rounded-full transition-colors ${
                                    availabilityStatus ? 'bg-green-500' : 'bg-gray-400'
                                } relative`}
                                data-oid="o1e3sj3"
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                        availabilityStatus ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                    data-oid="6g543p7"
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="6q_4868">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="th7uj8i">
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="j87tqve">
                        <div className="text-center" data-oid="q5cqs3f">
                            <p className="text-2xl font-bold text-green-600" data-oid="dlxifxy">
                                {providerStats.totalEarnings}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="f5l:af7">
                                إجمالي الأرباح (ريال)
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="xcpf7vf">
                        <div className="text-center" data-oid="sv-6bzd">
                            <p className="text-2xl font-bold text-blue-600" data-oid="zk3xsl:">
                                {providerStats.completedJobs}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="q4d1eo5">
                                خدمة مكتملة
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="rny05p:">
                        <div className="text-center" data-oid="j-pdhvb">
                            <div
                                className="flex items-center justify-center space-x-1 space-x-reverse"
                                data-oid="37mcyd3"
                            >
                                <span className="text-yellow-500" data-oid="vduz7g5">
                                    ⭐
                                </span>
                                <p
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="a:85rzs"
                                >
                                    {providerStats.rating}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600" data-oid="x3bttg6">
                                التقييم
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="8fm7k9g">
                        <div className="text-center" data-oid="ol5wp4f">
                            <p className="text-2xl font-bold text-purple-600" data-oid=":ocyjqh">
                                {providerStats.activeOrders}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="hx8of28">
                                طلبات نشطة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-sm mx-auto px-4" data-oid="7t3f3st">
                {/* New Requests Section */}
                <div className="mb-6" data-oid=".57cm85">
                    <div className="flex items-center justify-between mb-4" data-oid="urxh3w7">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="puphq22">
                            طلبات جديدة
                        </h2>
                        <span
                            className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                            data-oid=".1exl9a"
                        >
                            {newRequests.length}
                        </span>
                    </div>

                    <div className="space-y-4" data-oid=".mt3zps">
                        {newRequests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="_lmx1m9"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="30s05_d"
                                >
                                    <div className="flex-1" data-oid="i_h232y">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="hb-aevv"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="eus:n_k"
                                            >
                                                {request.service}
                                            </h3>
                                            {request.urgent && (
                                                <span
                                                    className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="-gl0dm7"
                                                >
                                                    عاجل
                                                </span>
                                            )}
                                        </div>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="nzz-vcb"
                                        >
                                            العميل: {request.customer}
                                        </p>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="v-robzn"
                                        >
                                            📍 {request.location}
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="s:te7dr">
                                            {request.description}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="k-pc9r9">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="phei82s"
                                        >
                                            {request.price}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="cw8x5rm">
                                            {request.time}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="qt1ymxl">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                        data-oid=":9mf-bb"
                                    >
                                        قبول
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                        data-oid="z0.jp6g"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                        data-oid="q0rvj5."
                                    >
                                        💬
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Orders Section */}
                <div className="mb-6" data-oid="4jlblsn">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="lp.zsfd">
                        الطلبات النشطة
                    </h2>

                    <div className="space-y-4" data-oid="8ps9jn4">
                        {activeOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid=":h_y.p5"
                            >
                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="8.dsijt"
                                >
                                    <div data-oid="w.tc0s6">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="e4m90wb"
                                        >
                                            {order.service}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="r74b8d5">
                                            العميل: {order.customer}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="236qz:7">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="me5u5f5"
                                        >
                                            {order.price}
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                order.status === 'في الطريق'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-orange-100 text-orange-600'
                                            }`}
                                            data-oid="pcaqne1"
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="f1ufsb_"
                                >
                                    <p className="text-sm text-gray-600" data-oid="9k9ef3e">
                                        الوقت المتبقي: {order.estimatedTime}
                                    </p>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="-srh.5x">
                                    <Link
                                        href={`/provider/order-details/${order.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="a54lwn7"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${order.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="dayb5h2"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="6zp0gjh"
                                    >
                                        📞
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-6" data-oid="gn4tk3i">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="dv2nj_t">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="fhdh5-x">
                        <Link
                            href="/provider/earnings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="92xyt7o"
                        >
                            <div className="text-3xl mb-2" data-oid="quez8ry">
                                💰
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="-yxz::5">
                                الأرباح
                            </p>
                        </Link>
                        <Link
                            href="/provider/schedule"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="_q474st"
                        >
                            <div className="text-3xl mb-2" data-oid="dly564m">
                                📅
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="824jgot">
                                الجدولة
                            </p>
                        </Link>
                        <Link
                            href="/provider/services"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="uygndrp"
                        >
                            <div className="text-3xl mb-2" data-oid="h-iucf3">
                                🛠️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="364dg.1">
                                خدماتي
                            </p>
                        </Link>
                        <Link
                            href="/provider/reviews"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="00wkdh9"
                        >
                            <div className="text-3xl mb-2" data-oid="17sqycu">
                                ⭐
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="cp8gsq0">
                                التقييمات
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Provider */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="bvpg1g2"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="_k8babs">
                    <div className="flex justify-around" data-oid="-nwnsvx">
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="8heoenw"
                        >
                            <span className="text-xl" data-oid="7tks5ck">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="ygmuxs.">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                            data-oid="c0mzh1q"
                        >
                            <span className="text-xl" data-oid="ck1m611">
                                📋
                            </span>
                            <span className="text-xs" data-oid="32kri22">
                                الطلبات
                            </span>
                            {providerStats.pendingRequests > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                                    data-oid="e6:28pf"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="yu6:oe-"
                        >
                            <span className="text-xl" data-oid="xl:6opn">
                                💰
                            </span>
                            <span className="text-xs" data-oid="ygb6o35">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="fiq9piu"
                        >
                            <span className="text-xl" data-oid="gxczhfb">
                                💬
                            </span>
                            <span className="text-xs" data-oid="pjla:en">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="sev3sx-"
                        >
                            <span className="text-xl" data-oid="ovqmlv0">
                                👤
                            </span>
                            <span className="text-xs" data-oid="u5_sf63">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="1d.0nvw"></div>
        </div>
    );
}
