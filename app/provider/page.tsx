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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="4xzwp3e">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="l2qrrds"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="l8p8rp8">
                    <div className="flex items-center justify-between mb-6" data-oid="x3tds7_">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="jbntru8"
                        >
                            <div
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="p_.9voz"
                            >
                                <span className="text-2xl" data-oid="p7a3idx">
                                    👨‍💼
                                </span>
                            </div>
                            <div data-oid="zbtkb0r">
                                <p className="text-sm opacity-90" data-oid="7k4u3ph">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="q5.yrga">
                                    أحمد محمد
                                </p>
                                <p className="text-xs opacity-75" data-oid="ucth:pt">
                                    مقدم خدمة
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center space-x-2 space-x-reverse"
                            data-oid="2jjrkzp"
                        >
                            <Link
                                href="/provider/notifications"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                                data-oid="zton1dl"
                            >
                                <span className="text-lg" data-oid="l7lflrx">
                                    🔔
                                </span>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    data-oid="xny0n9-"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Availability Toggle */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid="e3:rkb9">
                        <div className="flex items-center justify-between" data-oid="nwg0hnv">
                            <div data-oid=":wpkwtw">
                                <h3 className="font-semibold" data-oid="_krxqzn">
                                    حالة التوفر
                                </h3>
                                <p className="text-sm opacity-90" data-oid="y8:fa3v">
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
                                data-oid="l8ohf6b"
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                        availabilityStatus ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                    data-oid=".btlrjq"
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="hq6a02u">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="wjye1ze">
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="n1xc7pc">
                        <div className="text-center" data-oid="jr0rnyc">
                            <p className="text-2xl font-bold text-green-600" data-oid="z7:6t2-">
                                {providerStats.totalEarnings}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="fawco1e">
                                إجمالي الأرباح (ريال)
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="urohdjp">
                        <div className="text-center" data-oid="6gx8::3">
                            <p className="text-2xl font-bold text-blue-600" data-oid="m6prq9l">
                                {providerStats.completedJobs}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="6f.h38h">
                                خدمة مكتملة
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="r_82jtv">
                        <div className="text-center" data-oid="b5g-mvk">
                            <div
                                className="flex items-center justify-center space-x-1 space-x-reverse"
                                data-oid="j4i8-o_"
                            >
                                <span className="text-yellow-500" data-oid="5n6e18g">
                                    ⭐
                                </span>
                                <p
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="i:bb6:w"
                                >
                                    {providerStats.rating}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600" data-oid="9d0dhy.">
                                التقييم
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="1e08mjb">
                        <div className="text-center" data-oid="5gd1pxq">
                            <p className="text-2xl font-bold text-purple-600" data-oid="o0q.yfw">
                                {providerStats.activeOrders}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="z7oc0q.">
                                طلبات نشطة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-sm mx-auto px-4" data-oid="09aix.t">
                {/* New Requests Section */}
                <div className="mb-6" data-oid="gqh3x4w">
                    <div className="flex items-center justify-between mb-4" data-oid="bitf40r">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="ed.kara">
                            طلبات جديدة
                        </h2>
                        <span
                            className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                            data-oid="j6wan3r"
                        >
                            {newRequests.length}
                        </span>
                    </div>

                    <div className="space-y-4" data-oid="r_.w.ds">
                        {newRequests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="313dglz"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="1pbuo-l"
                                >
                                    <div className="flex-1" data-oid="qtu7yzo">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="b.6hgn9"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="h3j:gyp"
                                            >
                                                {request.service}
                                            </h3>
                                            {request.urgent && (
                                                <span
                                                    className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="urd6s6b"
                                                >
                                                    عاجل
                                                </span>
                                            )}
                                        </div>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="nkrrk4j"
                                        >
                                            العميل: {request.customer}
                                        </p>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="_9a:qf-"
                                        >
                                            📍 {request.location}
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="6sywf5w">
                                            {request.description}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid=".i96rxx">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="pjzr_dc"
                                        >
                                            {request.price}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="is:mcm-">
                                            {request.time}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="-n88n:e">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                        data-oid="4ppzw4:"
                                    >
                                        قبول
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                        data-oid="6kobdw4"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                        data-oid="s3cle:9"
                                    >
                                        💬
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Orders Section */}
                <div className="mb-6" data-oid="-8y7d9-">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="9j-3u0_">
                        الطلبات النشطة
                    </h2>

                    <div className="space-y-4" data-oid="1tjr6zr">
                        {activeOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid=".urz4_y"
                            >
                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="h:p.04y"
                                >
                                    <div data-oid="5nigja9">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="80fn3z8"
                                        >
                                            {order.service}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="nrkwc..">
                                            العميل: {order.customer}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="zu2m.e4">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="pmsr37b"
                                        >
                                            {order.price}
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                order.status === 'في الطريق'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-orange-100 text-orange-600'
                                            }`}
                                            data-oid="a9psopw"
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="l-:zhlg"
                                >
                                    <p className="text-sm text-gray-600" data-oid="eeb6ywu">
                                        الوقت المتبقي: {order.estimatedTime}
                                    </p>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="t7hd4:h">
                                    <Link
                                        href={`/provider/order-details/${order.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid=".lqhd.:"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${order.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="tsscvhg"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="_13jvzl"
                                    >
                                        📞
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-6" data-oid="n3s:cdo">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="ckhlo.h">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="bd5hygy">
                        <Link
                            href="/provider/earnings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="cm39q.-"
                        >
                            <div className="text-3xl mb-2" data-oid="ov.20zy">
                                💰
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="yft9rs0">
                                الأرباح
                            </p>
                        </Link>
                        <Link
                            href="/provider/schedule"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="ue3cchc"
                        >
                            <div className="text-3xl mb-2" data-oid="kt4aeis">
                                📅
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="lydvg39">
                                الجدولة
                            </p>
                        </Link>
                        <Link
                            href="/provider/services"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="cqr0-og"
                        >
                            <div className="text-3xl mb-2" data-oid="_48uzi1">
                                🛠️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="99jfewe">
                                خدماتي
                            </p>
                        </Link>
                        <Link
                            href="/provider/reviews"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="kjyxx:y"
                        >
                            <div className="text-3xl mb-2" data-oid=".8fk.ss">
                                ⭐
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="tnop9a_">
                                التقييمات
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Provider */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid=":bg1eka"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="qji62s8">
                    <div className="flex justify-around" data-oid="ncw_6c6">
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="cqt9it2"
                        >
                            <span className="text-xl" data-oid="6gwmu1k">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="169bm-m">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                            data-oid="f86kmg0"
                        >
                            <span className="text-xl" data-oid="80pmnvf">
                                📋
                            </span>
                            <span className="text-xs" data-oid="imr7z3o">
                                الطلبات
                            </span>
                            {providerStats.pendingRequests > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                                    data-oid="y0po.03"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="8nf0eda"
                        >
                            <span className="text-xl" data-oid="3kqf_jq">
                                💰
                            </span>
                            <span className="text-xs" data-oid="o7cpsn9">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="onrkjoo"
                        >
                            <span className="text-xl" data-oid="w5328bt">
                                💬
                            </span>
                            <span className="text-xs" data-oid="e84jonl">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="k09:m8d"
                        >
                            <span className="text-xl" data-oid="-h3o_q:">
                                👤
                            </span>
                            <span className="text-xs" data-oid="cpvqs24">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="5wb6-k6"></div>
        </div>
    );
}
