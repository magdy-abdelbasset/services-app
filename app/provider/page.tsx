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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="bqn9y:t">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="c:yj.ht"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="jt78l1n">
                    <div className="flex items-center justify-between mb-6" data-oid="u6l6omq">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="a-53pbx"
                        >
                            <div
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="hc7da-q"
                            >
                                <span className="text-2xl" data-oid="b32ymqd">
                                    👨‍💼
                                </span>
                            </div>
                            <div data-oid="x:.16xk">
                                <p className="text-sm opacity-90" data-oid="b0-5tso">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="wcd..-c">
                                    أحمد محمد
                                </p>
                                <p className="text-xs opacity-75" data-oid="j2c91jp">
                                    مقدم خدمة
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center space-x-2 space-x-reverse"
                            data-oid="l9.h9:h"
                        >
                            <Link
                                href="/provider/notifications"
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                                data-oid="-s1rhmf"
                            >
                                <span className="text-lg" data-oid="_y43_.x">
                                    🔔
                                </span>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    data-oid="xyp35lz"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Availability Toggle */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid="_tn:522">
                        <div className="flex items-center justify-between" data-oid="8899mna">
                            <div data-oid="3oruuvm">
                                <h3 className="font-semibold" data-oid="0d_55g_">
                                    حالة التوفر
                                </h3>
                                <p className="text-sm opacity-90" data-oid="h4.yz54">
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
                                data-oid="ipel-0m"
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                        availabilityStatus ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                    data-oid="04l7zwi"
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="72aoky:">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="2ija1wm">
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="q9rag6d">
                        <div className="text-center" data-oid="87lasix">
                            <p className="text-2xl font-bold text-green-600" data-oid="ji2fo1w">
                                {providerStats.totalEarnings}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="b:ts5c5">
                                إجمالي الأرباح (ريال)
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="s7ddut0">
                        <div className="text-center" data-oid="47u8k4b">
                            <p className="text-2xl font-bold text-blue-600" data-oid="0um_p8-">
                                {providerStats.completedJobs}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="tj2r23l">
                                خدمة مكتملة
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="u4.uvjn">
                        <div className="text-center" data-oid=":lj4gz6">
                            <div
                                className="flex items-center justify-center space-x-1 space-x-reverse"
                                data-oid="_cd1kv8"
                            >
                                <span className="text-yellow-500" data-oid=":ara.wx">
                                    ⭐
                                </span>
                                <p
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="c1jz-qb"
                                >
                                    {providerStats.rating}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600" data-oid="m8dfb8a">
                                التقييم
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg" data-oid="pmym1d_">
                        <div className="text-center" data-oid=":im1.1d">
                            <p className="text-2xl font-bold text-purple-600" data-oid="0.977mi">
                                {providerStats.activeOrders}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="0hik3i7">
                                طلبات نشطة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-sm mx-auto px-4" data-oid="wd91-av">
                {/* New Requests Section */}
                <div className="mb-6" data-oid=":xg.rx-">
                    <div className="flex items-center justify-between mb-4" data-oid="qiyd55g">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="zoinkey">
                            طلبات جديدة
                        </h2>
                        <span
                            className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                            data-oid="0e0hg16"
                        >
                            {newRequests.length}
                        </span>
                    </div>

                    <div className="space-y-4" data-oid="5vo7krx">
                        {newRequests.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="6ixq_ej"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="c985738"
                                >
                                    <div className="flex-1" data-oid="ni66fp6">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="e__0joy"
                                        >
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="n2_aley"
                                            >
                                                {request.service}
                                            </h3>
                                            {request.urgent && (
                                                <span
                                                    className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="s4a8x2b"
                                                >
                                                    عاجل
                                                </span>
                                            )}
                                        </div>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="oyo3aiq"
                                        >
                                            العميل: {request.customer}
                                        </p>
                                        <p
                                            className="text-sm text-gray-600 mb-1"
                                            data-oid="cia6dda"
                                        >
                                            📍 {request.location}
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="mykp3j5">
                                            {request.description}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="5qg5yj9">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="ajutp.x"
                                        >
                                            {request.price}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="53w:s.i">
                                            {request.time}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="xmcainm">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                        data-oid="xz8d2z:"
                                    >
                                        قبول
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                        data-oid="q.vy5ws"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                        data-oid="26lvwu3"
                                    >
                                        💬
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Orders Section */}
                <div className="mb-6" data-oid="7yyhrnb">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="wc8wa43">
                        الطلبات النشطة
                    </h2>

                    <div className="space-y-4" data-oid=":m_to.6">
                        {activeOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="3jti2wj"
                            >
                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="4.zbrwm"
                                >
                                    <div data-oid="y4xcgyn">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="7yix09z"
                                        >
                                            {order.service}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="oili4mz">
                                            العميل: {order.customer}
                                        </p>
                                    </div>
                                    <div className="text-left" data-oid="ujcnhc5">
                                        <p
                                            className="text-lg font-bold text-green-600"
                                            data-oid="lv1o9uf"
                                        >
                                            {order.price}
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                order.status === 'في الطريق'
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'bg-orange-100 text-orange-600'
                                            }`}
                                            data-oid="v:5yt70"
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-between mb-3"
                                    data-oid="h5r8bb4"
                                >
                                    <p className="text-sm text-gray-600" data-oid="-cd5k48">
                                        الوقت المتبقي: {order.estimatedTime}
                                    </p>
                                </div>

                                <div className="flex space-x-3 space-x-reverse" data-oid="zhf1u5u">
                                    <Link
                                        href={`/provider/order-details/${order.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="a.b7naf"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${order.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="hwb2b2t"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="x3s12tm"
                                    >
                                        📞
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-6" data-oid=".9_hjg9">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="c3i:0rj">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="y.nl9rz">
                        <Link
                            href="/provider/earnings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="4dg-mow"
                        >
                            <div className="text-3xl mb-2" data-oid="a9uqp_n">
                                💰
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="a92uf6m">
                                الأرباح
                            </p>
                        </Link>
                        <Link
                            href="/provider/schedule"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="5hy7qnp"
                        >
                            <div className="text-3xl mb-2" data-oid="vxq2q57">
                                📅
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="gjxieqk">
                                الجدولة
                            </p>
                        </Link>
                        <Link
                            href="/provider/services"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="zw5vsol"
                        >
                            <div className="text-3xl mb-2" data-oid="hzdnpy:">
                                🛠️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="r-x85nb">
                                خدماتي
                            </p>
                        </Link>
                        <Link
                            href="/provider/reviews"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="6vfwx22"
                        >
                            <div className="text-3xl mb-2" data-oid="pna6lhx">
                                ⭐
                            </div>
                            <p className="font-semibold text-gray-800" data-oid=":ysn3:7">
                                التقييمات
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Provider */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="ikd60-v"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="_38fxhf">
                    <div className="flex justify-around" data-oid="a1_p3-e">
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="-5e1nq2"
                        >
                            <span className="text-xl" data-oid="e16bwyy">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="hfl5jre">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                            data-oid="sowm_7i"
                        >
                            <span className="text-xl" data-oid="6c6f8vc">
                                📋
                            </span>
                            <span className="text-xs" data-oid="lxnwpqe">
                                الطلبات
                            </span>
                            {providerStats.pendingRequests > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                                    data-oid="6r16fzw"
                                >
                                    {providerStats.pendingRequests}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hoca:kt"
                        >
                            <span className="text-xl" data-oid="xto5tx_">
                                💰
                            </span>
                            <span className="text-xs" data-oid="k7kn99l">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="3.b1:ja"
                        >
                            <span className="text-xl" data-oid="bqg.p4e">
                                💬
                            </span>
                            <span className="text-xs" data-oid="0m55j31">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="154z8so"
                        >
                            <span className="text-xl" data-oid="sp83nnk">
                                👤
                            </span>
                            <span className="text-xs" data-oid="tc_i9dp">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="ht_4h73"></div>
        </div>
    );
}
