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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="04jabo8">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="4y9y_lr"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="phs6ifu">
                    <div className="flex items-center justify-between mb-6" data-oid="62y8it0">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="z3822q7"
                        >
                            <div
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="mys9qma"
                            >
                                <span className="text-2xl" data-oid=":i60-8z">
                                    👨‍💼
                                </span>
                            </div>
                            <div data-oid="iwx1nv2">
                                <p className="text-sm opacity-90" data-oid="oo_2n9a">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="4deyk.5">
                                    أحمد محمد
                                </p>
                                <p className="text-xs opacity-75" data-oid="h435_sr">
                                    مقدم خدمة
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center space-x-2 space-x-reverse"
                            data-oid="4ocnpky"
                        >
                            <Link
                                href="/provider-notifications"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                                data-oid="y6kkv1."
                            >
                                <span className="text-lg" data-oid="3dd3:j-">
                                    🔔
                                </span>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    data-oid=":7046zm"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Availability Toggle */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid="v-x8xn_">
                        <div className="flex items-center justify-between" data-oid="avlghux">
                            <div data-oid="j.9cu4o">
                                <h3 className="font-semibold" data-oid=".f0yx6_">
                                    حالة التوفر
                                </h3>
                                <p className="text-sm opacity-90" data-oid="s80j:nj">
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
                                data-oid="-53n:wy"
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                        availabilityStatus ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                    data-oid="v1tk4wx"
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="64k._i-">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="ubrx:hy">
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="_dfmv9c">
                        <div className="text-center" data-oid="ce7xnm7">
                            <p className="text-2xl font-bold text-green-600" data-oid=":nu6p2u">
                                {providerStats.totalEarnings}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="yz9.06_">
                                إجمالي الأرباح (ريال)
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="zp-:bs6">
                        <div className="text-center" data-oid="ebps.h.">
                            <p className="text-2xl font-bold text-blue-600" data-oid="598mqcb">
                                {providerStats.completedJobs}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="luf:pn8">
                                خدمة مكتملة
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="q1m5krd">
                        <div className="text-center" data-oid="m110cj3">
                            <div
                                className="flex items-center justify-center space-x-1 space-x-reverse"
                                data-oid="_1t16f1"
                            >
                                <span className="text-yellow-500" data-oid="1c5p1s4">
                                    ⭐
                                </span>
                                <p
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="_4zcr_y"
                                >
                                    {providerStats.rating}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600" data-oid="z.ukamj">
                                التقييم
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="mkpid-m">
                        <div className="text-center" data-oid=":yldqgv">
                            <p className="text-2xl font-bold text-purple-600" data-oid="1r2.-np">
                                {providerStats.activeOrders}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="vzutjod">
                                طلبات نشطة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-sm mx-auto px-4" data-oid="uus9jop">
                {/* New Requests Section */}
                <div className="mb-6" data-oid="0v92buy">
                    <div className="flex items-center justify-between mb-4" data-oid=".9q3k32">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="2jq_g0s">
                            طلبات جديدة
                        </h2>
                        <span
                            className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                            data-oid="qpch:5w"
                        >
                            {newRequests.length}
                        </span>
                    </div>

                    <div className="space-y-4" data-oid="ll8keu8">
                        {newRequests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="30mw1eb"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="4xh2g9g"
                                >
                                    <div className="flex-1" data-oid="mr3ie3u">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="u3koz47"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="_r4ndr3"
                                            >
                                                {request.service}
                                            </h3>
                                            {request.urgent && (
                                                <span
                                                    className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="2:irtu7"
                                                >
                                                    عاجل
                                                </span>
                                            )}
                                        </div>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="wlfv5gv"
                                        >
                                            العميل: {request.customer}
                                        </p>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="6.toj1l"
                                        >
                                            📍 {request.location}
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="pqkbpt-">
                                            {request.description}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="m9z:57e">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="r05.5nw"
                                        >
                                            {request.price}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="i:6a964">
                                            {request.time}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="qwgj6:o">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                        data-oid="c9dmq.q"
                                    >
                                        قبول
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                        data-oid="-js3ac:"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider-chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                        data-oid="c6g53_l"
                                    >
                                        💬
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Orders Section */}
                <div className="mb-6" data-oid="oaka6bd">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid=".i.i.4m">
                        الطلبات النشطة
                    </h2>

                    <div className="space-y-4" data-oid="inhglvg">
                        {activeOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="273:_de"
                            >
                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="pmtwk8-"
                                >
                                    <div data-oid="usait1k">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="q.4wx6u"
                                        >
                                            {order.service}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="0x_c2py">
                                            العميل: {order.customer}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="_nn8mb4">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="ox:gjo:"
                                        >
                                            {order.price}
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                order.status === 'في الطريق'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-orange-100 text-orange-600'
                                            }`}
                                            data-oid="1ng_cih"
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="evwre6q"
                                >
                                    <p className="text-sm text-gray-600" data-oid="9:j6:rp">
                                        الوقت المتبقي: {order.estimatedTime}
                                    </p>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="6e7papq">
                                    <Link
                                        href={`/provider-order-details/${order.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="91zvei9"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider-chat/${order.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="_z-czgq"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="kg.wh:-"
                                    >
                                        📞
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-6" data-oid="qwcpjkr">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="ujv3n5r">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="bp4yp1q">
                        <Link
                            href="/provider-earnings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="xqi0ku0"
                        >
                            <div className="text-3xl mb-2" data-oid="e1e4ta7">
                                💰
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="jwfo-65">
                                الأرباح
                            </p>
                        </Link>
                        <Link
                            href="/provider-schedule"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="5zin_7h"
                        >
                            <div className="text-3xl mb-2" data-oid="m0jcr63">
                                📅
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="jy:eyr9">
                                الجدولة
                            </p>
                        </Link>
                        <Link
                            href="/provider-services"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="jd4.yv6"
                        >
                            <div className="text-3xl mb-2" data-oid="m5ridtz">
                                🛠️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="q37l.d0">
                                خدماتي
                            </p>
                        </Link>
                        <Link
                            href="/provider-reviews"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="fiwuqrv"
                        >
                            <div className="text-3xl mb-2" data-oid="sla00ka">
                                ⭐
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="3efnqkz">
                                التقييمات
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Provider */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="5skmsa3"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="4zh0ut_">
                    <div className="flex justify-around" data-oid="csftc4v">
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="h096xk8"
                        >
                            <span className="text-xl" data-oid=":n7_u.w">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="epjgb2j">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/provider-requests"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                            data-oid="x2zoh88"
                        >
                            <span className="text-xl" data-oid="c1fsohl">
                                📋
                            </span>
                            <span className="text-xs" data-oid="j23di5b">
                                الطلبات
                            </span>
                            {providerStats.pendingRequests > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                                    data-oid="gr8lkp-"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/provider-earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=".x1.eon"
                        >
                            <span className="text-xl" data-oid="g5dwd6:">
                                💰
                            </span>
                            <span className="text-xs" data-oid="2t_3454">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider-messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=".3-y68x"
                        >
                            <span className="text-xl" data-oid="j3k0rnd">
                                💬
                            </span>
                            <span className="text-xs" data-oid="y91ipuu">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider-profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="x_b3xro"
                        >
                            <span className="text-xl" data-oid="4:7-l1y">
                                👤
                            </span>
                            <span className="text-xs" data-oid="s6vhgpf">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="o-f1e3_"></div>
        </div>
    );
}
