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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="5xg-wql">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="5c5ayi8"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="iv73bfy">
                    <div className="flex items-center justify-between mb-6" data-oid="6bk-2sb">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="xrycanl"
                        >
                            <div
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="hgpmkwd"
                            >
                                <span className="text-2xl" data-oid="ug88mf:">
                                    👨‍💼
                                </span>
                            </div>
                            <div data-oid="vt562r5">
                                <p className="text-sm opacity-90" data-oid="j1o5t0j">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="1gydbs9">
                                    أحمد محمد
                                </p>
                                <p className="text-xs opacity-75" data-oid="q3s7lqj">
                                    مقدم خدمة
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center space-x-2 space-x-reverse"
                            data-oid="km5x4gr"
                        >
                            <Link
                                href="/provider/notifications"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                                data-oid="0w19ab1"
                            >
                                <span className="text-lg" data-oid="wxls.f0">
                                    🔔
                                </span>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    data-oid="b8h.:p_"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Availability Toggle */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid="f3_.3f6">
                        <div className="flex items-center justify-between" data-oid="56oz1ae">
                            <div data-oid=".v8zrq:">
                                <h3 className="font-semibold" data-oid="tlxd69o">
                                    حالة التوفر
                                </h3>
                                <p className="text-sm opacity-90" data-oid="d_mv:tg">
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
                                data-oid=".p03o2-"
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                        availabilityStatus ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                    data-oid="vjn8mpy"
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="84kn_o.">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid=".-unw4z">
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="x6l85u6">
                        <div className="text-center" data-oid="faobm21">
                            <p className="text-2xl font-bold text-green-600" data-oid="8n:21mu">
                                {providerStats.totalEarnings}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="2lb9-ey">
                                إجمالي الأرباح (ريال)
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="r5iyosi">
                        <div className="text-center" data-oid="9zy3nub">
                            <p className="text-2xl font-bold text-blue-600" data-oid="bycdf3q">
                                {providerStats.completedJobs}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="apvbaum">
                                خدمة مكتملة
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="ckswfes">
                        <div className="text-center" data-oid="uwqdnn_">
                            <div
                                className="flex items-center justify-center space-x-1 space-x-reverse"
                                data-oid="3o5tciu"
                            >
                                <span className="text-yellow-500" data-oid="2do4n68">
                                    ⭐
                                </span>
                                <p
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="198xqk1"
                                >
                                    {providerStats.rating}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600" data-oid="fm0f3.h">
                                التقييم
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="6vlku28">
                        <div className="text-center" data-oid="-f:_4j_">
                            <p className="text-2xl font-bold text-purple-600" data-oid="dl9vg6z">
                                {providerStats.activeOrders}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="ai1oszw">
                                طلبات نشطة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-sm mx-auto px-4" data-oid="aylta49">
                {/* New Requests Section */}
                <div className="mb-6" data-oid="_p4-a_8">
                    <div className="flex items-center justify-between mb-4" data-oid=":sr2e0.">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="-hmy5_e">
                            طلبات جديدة
                        </h2>
                        <span
                            className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                            data-oid="9rdytxb"
                        >
                            {newRequests.length}
                        </span>
                    </div>

                    <div className="space-y-4" data-oid="s611:iq">
                        {newRequests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="nqh3m.r"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="g8chlt9"
                                >
                                    <div className="flex-1" data-oid="e9m:yz3">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="nbcq0eo"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="x:fxm51"
                                            >
                                                {request.service}
                                            </h3>
                                            {request.urgent && (
                                                <span
                                                    className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="f.gz6ik"
                                                >
                                                    عاجل
                                                </span>
                                            )}
                                        </div>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="e7kypm9"
                                        >
                                            العميل: {request.customer}
                                        </p>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="ezypfs2"
                                        >
                                            📍 {request.location}
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="4dzrzwt">
                                            {request.description}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="6t-:ool">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="fcg.n4."
                                        >
                                            {request.price}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="3qi-8pv">
                                            {request.time}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="uzpw-qg">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                        data-oid="mspo8:s"
                                    >
                                        قبول
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                        data-oid="8.j4zw5"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                        data-oid="wod743t"
                                    >
                                        💬
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Orders Section */}
                <div className="mb-6" data-oid="sofrr4k">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="aqaquq0">
                        الطلبات النشطة
                    </h2>

                    <div className="space-y-4" data-oid="hca77dg">
                        {activeOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="cjnn-o4"
                            >
                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid=".oc7hk8"
                                >
                                    <div data-oid="dad7mc3">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="6i0a6cy"
                                        >
                                            {order.service}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="7v2zam6">
                                            العميل: {order.customer}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="jj-f1gq">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="m4ajjv4"
                                        >
                                            {order.price}
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                order.status === 'في الطريق'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-orange-100 text-orange-600'
                                            }`}
                                            data-oid="xos9qkk"
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="6n3iz9i"
                                >
                                    <p className="text-sm text-gray-600" data-oid="-gd5.r9">
                                        الوقت المتبقي: {order.estimatedTime}
                                    </p>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="z1bqqs6">
                                    <Link
                                        href={`/provider/order-details/${order.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="x3-lxqn"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${order.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="-1_52rb"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid=".vycmba"
                                    >
                                        📞
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-6" data-oid="6-55u4t">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="zkiyc8g">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="1zf.o4q">
                        <Link
                            href="/provider/earnings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="v:w_o9."
                        >
                            <div className="text-3xl mb-2" data-oid="h6qvq9j">
                                💰
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="t71k0fa">
                                الأرباح
                            </p>
                        </Link>
                        <Link
                            href="/provider/schedule"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="0tai5pd"
                        >
                            <div className="text-3xl mb-2" data-oid=":1yuh10">
                                📅
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="2a_y-2:">
                                الجدولة
                            </p>
                        </Link>
                        <Link
                            href="/provider/services"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="eb2-4xv"
                        >
                            <div className="text-3xl mb-2" data-oid="lj3a1l.">
                                🛠️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="yx703q3">
                                خدماتي
                            </p>
                        </Link>
                        <Link
                            href="/provider/reviews"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="xxa86u8"
                        >
                            <div className="text-3xl mb-2" data-oid="6n5_7y5">
                                ⭐
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="2_tprrm">
                                التقييمات
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Provider */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="87ir._u"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="n9yvyii">
                    <div className="flex justify-around" data-oid="7zpvx-q">
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="bhuqjo0"
                        >
                            <span className="text-xl" data-oid="1arxtsl">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="uvxqhed">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                            data-oid="cxe87u8"
                        >
                            <span className="text-xl" data-oid=".113wfi">
                                📋
                            </span>
                            <span className="text-xs" data-oid="txe9-hk">
                                الطلبات
                            </span>
                            {providerStats.pendingRequests > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                                    data-oid="df.lcft"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="x94fy.j"
                        >
                            <span className="text-xl" data-oid="6a:k-_g">
                                💰
                            </span>
                            <span className="text-xs" data-oid="nj7s7k8">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="4qltpmb"
                        >
                            <span className="text-xl" data-oid="m0mr.mf">
                                💬
                            </span>
                            <span className="text-xs" data-oid="qlpl8fa">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ar6bdma"
                        >
                            <span className="text-xl" data-oid="ke51k.w">
                                👤
                            </span>
                            <span className="text-xs" data-oid="8v4-11g">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="m7lvxcs"></div>
        </div>
    );
}
