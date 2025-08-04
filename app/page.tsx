'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [selectedService, setSelectedService] = useState(null);
    const [showOffers, setShowOffers] = useState(false);
    const [requestingOffers, setRequestingOffers] = useState(false);

    const mainCategories = [
        { id: 1, name: 'خدمات المنزل', icon: '🏠', color: 'bg-blue-500' },
        { id: 2, name: 'الصيانة والإصلاح', icon: '🔧', color: 'bg-orange-500' },
        { id: 3, name: 'التوصيل والنقل', icon: '🚚', color: 'bg-green-500' },
        { id: 4, name: 'الجمال والعناية', icon: '💄', color: 'bg-pink-500' },
        { id: 5, name: 'البستنة والحدائق', icon: '🌱', color: 'bg-emerald-500' },
        { id: 6, name: 'التعليم والتدريب', icon: '📚', color: 'bg-purple-500' },
    ];

    const services = [
        { id: 1, name: 'تنظيف المنزل', icon: '🏠' },
        { id: 2, name: 'صيانة السباكة', icon: '🔧' },
        { id: 3, name: 'توصيل الطعام', icon: '🍕' },
        { id: 4, name: 'خدمات التجميل', icon: '💄' },
        { id: 5, name: 'تصليح الأجهزة', icon: '📱' },
        { id: 6, name: 'خدمات البستنة', icon: '🌱' },
    ];

    // Sample offers data
    const sampleOffers = [
        {
            id: 1,
            providerName: 'أحمد علي',
            rating: 4.9,
            completedJobs: 156,
            price: '45 ريال',
            estimatedTime: '25 دقيقة',
            description: 'خبرة 5 سنوات في تنظيف المنازل، أستخدم مواد تنظيف صديقة للبيئة',
            avatar: '👨‍💼',
            verified: true,
            responseTime: '5 دقائق',
        },
        {
            id: 2,
            providerName: 'فاطمة محمد',
            rating: 4.8,
            completedJobs: 203,
            price: '50 ريال',
            estimatedTime: '30 دقيقة',
            description: 'متخصصة في التنظيف العميق، خدمة سريعة ومضمونة',
            avatar: '👩‍💼',
            verified: true,
            responseTime: '3 دقائق',
        },
        {
            id: 3,
            providerName: 'محمد حسن',
            rating: 4.7,
            completedJobs: 89,
            price: '40 ريال',
            estimatedTime: '35 دقيقة',
            description: 'خدمة تنظيف شاملة بأسعار منافسة',
            avatar: '👨‍🔧',
            verified: false,
            responseTime: '10 دقائق',
        },
    ];

    const handleRequestOffers = () => {
        setRequestingOffers(true);
        // Simulate API call
        setTimeout(() => {
            setRequestingOffers(false);
            setShowOffers(true);
            setSelectedService(null);
        }, 2000);
    };

    const handleSelectOffer = (offer) => {
        alert(`تم اختيار العرض من ${offer.providerName} بسعر ${offer.price}`);
        setShowOffers(false);
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="-9wb3qw">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="8:8pl6f"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="xu7ydwq">
                    <div className="flex items-center justify-between mb-6" data-oid="60-oj1t">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="4y7ri9z"
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="w.jfrqd"
                            >
                                <span className="text-lg" data-oid=":_onymu">
                                    👤
                                </span>
                            </div>
                            <div data-oid="rok3wc9">
                                <p className="text-sm opacity-90" data-oid="9nij7mk">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="7g.zg8u">
                                    أحمد محمد
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/notifications"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                            data-oid="4x7be2l"
                        >
                            <span className="text-lg" data-oid="74vbnqo">
                                🔔
                            </span>
                            <span
                                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                data-oid="h9-e93x"
                            >
                                3
                            </span>
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold mb-2" data-oid="65q6wp-">
                        اطلب خدمتك الآن
                    </h1>
                    <p className="text-white/90 text-sm" data-oid="4rvyv1b">
                        خدمات موثوقة وسريعة في منطقتك
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="xnw-i.u">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="qf73mzc">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid=".lr2ysa">
                        <span className="text-gray-400" data-oid="0maewco">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="ابحث عن الخدمة التي تريدها..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="tmbp3_7"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="cjjlikg">
                <div className="flex space-x-4 space-x-reverse" data-oid="b4xyt14">
                    <Link
                        href="/request-service?service=طلب سريع"
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="l3-h60u"
                    >
                        طلب سريع
                    </Link>
                    <Link
                        href="/orders"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="myuk3ln"
                    >
                        طلباتي
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-sm mx-auto px-4" data-oid="8sksrr.">
                <div className="flex items-center justify-between mb-4" data-oid="0g1lld-">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="efa9v:j">
                        التصنيفات الرئيسية
                    </h2>
                    <Link
                        href="/categories"
                        className="text-blue-600 text-sm font-semibold"
                        data-oid="h30tu9t"
                    >
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="ycc5avf">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="9mhqssk"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid="a__de65"
                            >
                                <span className="text-2xl" data-oid="2-.n32w">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center"
                                data-oid="7tq149j"
                            >
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Popular Services */}
                <div className="mb-6" data-oid="hcjrx7c">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid="q1:ae84">
                        الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid="k-g446:">
                        {services.slice(0, 3).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse"
                                data-oid="z_:gk8:"
                            >
                                <div className="text-2xl" data-oid="1.ocd2.">
                                    {service.icon}
                                </div>
                                <div className="flex-1" data-oid="rxexw3w">
                                    <h4 className="font-semibold text-gray-800" data-oid="i4t69_q">
                                        {service.name}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedService(service);
                                        handleRequestOffers();
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                    data-oid="tpmio1."
                                >
                                    اطلب
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid=".fknw5z"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="ast21b5">
                    <div className="flex justify-around" data-oid="aix7_.e">
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="j5:ph2q"
                        >
                            <span className="text-xl" data-oid="0zsh0x9">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid=".cox:rd">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="btnmq3b"
                        >
                            <span className="text-xl" data-oid="ho-3g5x">
                                📂
                            </span>
                            <span className="text-xs" data-oid=".hmg-tu">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="mdan4gq"
                        >
                            <span className="text-xl" data-oid="7.a_0-7">
                                📋
                            </span>
                            <span className="text-xs" data-oid="bg0yqoa">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/wallet"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9-fgh6u"
                        >
                            <span className="text-xl" data-oid="5c3f0tz">
                                💰
                            </span>
                            <span className="text-xs" data-oid="6ls:w3m">
                                المحفظة
                            </span>
                        </Link>
                        <Link
                            href="/settings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="3mk-u7x"
                        >
                            <span className="text-xl" data-oid="ofdzz3c">
                                ⚙️
                            </span>
                            <span className="text-xs" data-oid="tuph-in">
                                الإعدادات
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Service Modal */}
            {selectedService && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-end z-50"
                    onClick={() => setSelectedService(null)}
                    data-oid="5st3ngk"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="c0i24_0"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="qdu-rpo"
                        ></div>

                        <div className="text-center mb-6" data-oid="w-_5fh-">
                            <div className="text-4xl mb-3" data-oid="7etx72e">
                                {selectedService.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="iec_8y3">
                                {selectedService.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4" data-oid="3spg9:u">
                                خدمة موثوقة ومضمونة
                            </p>

                            <div
                                className="flex items-center justify-center mb-6"
                                data-oid="dwt66ou"
                            >
                                <div className="text-center" data-oid="ct0x.12">
                                    <p
                                        className="text-2xl font-bold text-green-500"
                                        data-oid="kq_rjut"
                                    >
                                        30
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid=":.313..">
                                        دقيقة
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3" data-oid="qe4uz5p">
                            <button
                                onClick={handleRequestOffers}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                data-oid="uf92oe:"
                            >
                                طلب عروض من مقدمي الخدمة
                            </button>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="4h-br9f"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Requesting Offers Modal */}
            {requestingOffers && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    data-oid="f:r60yc"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="3t-18bt"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="dk.s:bo"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="m5774ic">
                            جاري البحث عن مقدمي الخدمة
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="ct188z-">
                            يرجى الانتظار بينما نجمع أفضل العروض لك...
                        </p>
                    </div>
                </div>
            )}

            {/* Offers Modal */}
            {showOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="gwpr.he">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="s0_oyfj"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="w4ro_z-">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="03:-etu"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="nozpft6">
                                <h3 className="text-xl font-bold text-gray-800" data-oid=":49-zhf">
                                    العروض المتاحة
                                </h3>
                                <button
                                    onClick={() => setShowOffers(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="8age-1o"
                                >
                                    <span className="text-gray-600" data-oid="ii7wu:e">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="3w9a_7f">
                                اختر أفضل عرض يناسبك
                            </p>
                        </div>

                        {/* Offers List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-120px)] p-4"
                            data-oid="sa-696k"
                        >
                            <div className="space-y-4" data-oid="ft31td1">
                                {sampleOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                                        data-oid="yjyga.h"
                                    >
                                        {/* Provider Info */}
                                        <div
                                            className="flex items-start space-x-3 space-x-reverse mb-4"
                                            data-oid="a44t_vj"
                                        >
                                            <div className="text-3xl" data-oid="kv4ff7t">
                                                {offer.avatar}
                                            </div>
                                            <div className="flex-1" data-oid=".o13fic">
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse mb-1"
                                                    data-oid="rqhjhk5"
                                                >
                                                    <h4
                                                        className="font-semibold text-gray-800"
                                                        data-oid="njvlw:b"
                                                    >
                                                        {offer.providerName}
                                                    </h4>
                                                    {offer.verified && (
                                                        <span
                                                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                            data-oid=":x_5ao7"
                                                        >
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600"
                                                    data-oid="z::3tw9"
                                                >
                                                    <div
                                                        className="flex items-center space-x-1 space-x-reverse"
                                                        data-oid="5iv:g61"
                                                    >
                                                        <span
                                                            className="text-yellow-500"
                                                            data-oid="t_p3caq"
                                                        >
                                                            ⭐
                                                        </span>
                                                        <span data-oid="3pm4wr.">
                                                            {offer.rating}
                                                        </span>
                                                    </div>
                                                    <span data-oid="45v82cn">
                                                        ({offer.completedJobs} خدمة مكتملة)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Offer Details */}
                                        <div
                                            className="bg-white rounded-xl p-3 mb-4"
                                            data-oid="jlxg5dl"
                                        >
                                            <div
                                                className="grid grid-cols-3 gap-4 text-center mb-3"
                                                data-oid="g8sue07"
                                            >
                                                <div data-oid="1roi6-.">
                                                    <p
                                                        className="text-lg font-bold text-blue-600"
                                                        data-oid="8i87q:i"
                                                    >
                                                        {offer.price}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="tau.xyy"
                                                    >
                                                        السعر
                                                    </p>
                                                </div>
                                                <div data-oid="3jm181r">
                                                    <p
                                                        className="text-lg font-bold text-green-600"
                                                        data-oid="1ltjomm"
                                                    >
                                                        {offer.estimatedTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="xv-8iod"
                                                    >
                                                        المدة المتوقعة
                                                    </p>
                                                </div>
                                                <div data-oid="zfbr643">
                                                    <p
                                                        className="text-lg font-bold text-orange-600"
                                                        data-oid="fgusb16"
                                                    >
                                                        {offer.responseTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="mmj6rla"
                                                    >
                                                        وقت الاستجابة
                                                    </p>
                                                </div>
                                            </div>
                                            <p
                                                className="text-sm text-gray-700 text-center"
                                                data-oid="k4hn8.k"
                                            >
                                                {offer.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div
                                            className="flex space-x-3 space-x-reverse"
                                            data-oid="lj-eb-q"
                                        >
                                            <button
                                                onClick={() => handleSelectOffer(offer)}
                                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                                data-oid=":7_3d08"
                                            >
                                                اختيار هذا العرض
                                            </button>
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="l3uuei7"
                                            >
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="o.:bfqo"
                                                >
                                                    💬
                                                </Link>
                                                <Link
                                                    href={`/provider-profile/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="lxjlt67"
                                                >
                                                    👁️
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Request More Offers */}
                            <div
                                className="mt-6 p-4 bg-blue-50 rounded-2xl text-center"
                                data-oid="4q73t8b"
                            >
                                <p className="text-sm text-gray-600 mb-3" data-oid="k9ge-kn">
                                    لم تجد العرض المناسب؟
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
                                    data-oid="wm4i-u."
                                >
                                    طلب المزيد من العروض
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="qmuftr6"></div>
        </div>
    );
}
