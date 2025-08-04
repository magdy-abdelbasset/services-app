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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="r8wp_iu">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="mtw54ay"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="_b.gs6-">
                    <div className="flex items-center justify-between mb-6" data-oid="jzl31zj">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="-xh23b2"
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="d_7urjz"
                            >
                                <span className="text-lg" data-oid="3qwtqf5">
                                    👤
                                </span>
                            </div>
                            <div data-oid="rktdfxv">
                                <p className="text-sm opacity-90" data-oid="jcydg1:">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="gbvwhki">
                                    أحمد محمد
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/notifications"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                            data-oid="-7cy752"
                        >
                            <span className="text-lg" data-oid="0:56.rf">
                                🔔
                            </span>
                            <span
                                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                data-oid="jhqjnz1"
                            >
                                3
                            </span>
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold mb-2" data-oid="c.3k_no">
                        اطلب خدمتك الآن
                    </h1>
                    <p className="text-white/90 text-sm" data-oid="8qjyylx">
                        خدمات موثوقة وسريعة في منطقتك
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="a-p86:s">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="evqqr9u">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="9kljf0u">
                        <span className="text-gray-400" data-oid="se0ih:u">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="ابحث عن الخدمة التي تريدها..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="c4svj_8"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="m07xb1.">
                <div className="flex space-x-4 space-x-reverse" data-oid="08wfb5h">
                    <Link
                        href="/request-service?service=طلب سريع"
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="qwhya__"
                    >
                        طلب سريع
                    </Link>
                    <Link
                        href="/orders"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="ez-r3um"
                    >
                        طلباتي
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-sm mx-auto px-4" data-oid="yg1:g_0">
                <div className="flex items-center justify-between mb-4" data-oid="gk1.tsj">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="paayrgf">
                        التصنيفات الرئيسية
                    </h2>
                    <Link
                        href="/categories"
                        className="text-blue-600 text-sm font-semibold"
                        data-oid="x5x3cro"
                    >
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="rocppfq">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="5ph3on."
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid="r2uwo2f"
                            >
                                <span className="text-2xl" data-oid=".k7z65t">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center"
                                data-oid="7ovic7i"
                            >
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Popular Services */}
                <div className="mb-6" data-oid="v4i4e7o">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid="o0:d4qy">
                        الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid="fgbufbm">
                        {services.slice(0, 3).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse"
                                data-oid="7vo5y7x"
                            >
                                <div className="text-2xl" data-oid="-b7rssu">
                                    {service.icon}
                                </div>
                                <div className="flex-1" data-oid="5m902ti">
                                    <h4 className="font-semibold text-gray-800" data-oid="oyirc36">
                                        {service.name}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedService(service);
                                        handleRequestOffers();
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                    data-oid="5ktr8c."
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
                data-oid=":.ql3:6"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="z65c-x8">
                    <div className="flex justify-around" data-oid="o62rtvf">
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="jp.52id"
                        >
                            <span className="text-xl" data-oid="s-k0a4i">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="v.vudnn">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="_7_f4em"
                        >
                            <span className="text-xl" data-oid="mcwio3g">
                                📂
                            </span>
                            <span className="text-xs" data-oid="9tx48wz">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="jxfyg3h"
                        >
                            <span className="text-xl" data-oid="tqgiwq8">
                                📋
                            </span>
                            <span className="text-xs" data-oid="18f62.m">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                            data-oid="h:ljuij"
                        >
                            <div className="relative" data-oid="q:jfnb0">
                                <span className="text-xl" data-oid="qxbs40s">
                                    💰
                                </span>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    data-oid="8ull5r:"
                                >
                                    2
                                </span>
                            </div>
                            <span className="text-xs" data-oid="f2.dd4z">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="el3_m9v"
                        >
                            <span className="text-xl" data-oid="gqu10_y">
                                💬
                            </span>
                            <span className="text-xs" data-oid="-6wscrb">
                                الرسائل
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
                    data-oid="b80..sw"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="a.xbvbb"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="55wnse."
                        ></div>

                        <div className="text-center mb-6" data-oid="7lbcf90">
                            <div className="text-4xl mb-3" data-oid="v80byzj">
                                {selectedService.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="5cs-4pv">
                                {selectedService.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4" data-oid="bbfcmks">
                                خدمة موثوقة ومضمونة
                            </p>

                            <div
                                className="flex items-center justify-center mb-6"
                                data-oid="pd_flm3"
                            >
                                <div className="text-center" data-oid="h67i0cg">
                                    <p
                                        className="text-2xl font-bold text-green-500"
                                        data-oid="13-bbe5"
                                    >
                                        30
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="_8-unz-">
                                        دقيقة
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3" data-oid="lizzdxo">
                            <button
                                onClick={handleRequestOffers}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                data-oid="9.bceez"
                            >
                                طلب عروض من مقدمي الخدمة
                            </button>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="bq24hf5"
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
                    data-oid="9-b_9hq"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="kx0o0p7"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="12x_h5t"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="m.qo.k6">
                            جاري البحث عن مقدمي الخدمة
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="_7:q.1f">
                            يرجى الانتظار بينما نجمع أفضل العروض لك...
                        </p>
                    </div>
                </div>
            )}

            {/* Offers Modal */}
            {showOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="4o1-5vw">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="7mx_map"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="e_-41t4">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="nb9vrrw"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="_.3p_x_">
                                <h3 className="text-xl font-bold text-gray-800" data-oid="b3f4hkc">
                                    العروض المتاحة
                                </h3>
                                <button
                                    onClick={() => setShowOffers(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="m4cny0i"
                                >
                                    <span className="text-gray-600" data-oid="uud1bi:">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="xq4p7q:">
                                اختر أفضل عرض يناسبك
                            </p>
                        </div>

                        {/* Offers List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-120px)] p-4"
                            data-oid="8bbx794"
                        >
                            <div className="space-y-4" data-oid="5ecj.qb">
                                {sampleOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                                        data-oid="1knkg8m"
                                    >
                                        {/* Provider Info */}
                                        <div
                                            className="flex items-start space-x-3 space-x-reverse mb-4"
                                            data-oid="4aal8qs"
                                        >
                                            <div className="text-3xl" data-oid="sq-1e7w">
                                                {offer.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="so.5pfm">
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse mb-1"
                                                    data-oid=":--__56"
                                                >
                                                    <h4
                                                        className="font-semibold text-gray-800"
                                                        data-oid="srqwkt6"
                                                    >
                                                        {offer.providerName}
                                                    </h4>
                                                    {offer.verified && (
                                                        <span
                                                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                            data-oid="oqt38j5"
                                                        >
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600"
                                                    data-oid="s8enphf"
                                                >
                                                    <div
                                                        className="flex items-center space-x-1 space-x-reverse"
                                                        data-oid="ibc8jr8"
                                                    >
                                                        <span
                                                            className="text-yellow-500"
                                                            data-oid="7mnt7a4"
                                                        >
                                                            ⭐
                                                        </span>
                                                        <span data-oid="dmcc4dr">
                                                            {offer.rating}
                                                        </span>
                                                    </div>
                                                    <span data-oid="ryvp39l">
                                                        ({offer.completedJobs} خدمة مكتملة)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Offer Details */}
                                        <div
                                            className="bg-white rounded-xl p-3 mb-4"
                                            data-oid="1v1q:oh"
                                        >
                                            <div
                                                className="grid grid-cols-3 gap-4 text-center mb-3"
                                                data-oid="cw1vpvt"
                                            >
                                                <div data-oid="w7x0s5e">
                                                    <p
                                                        className="text-lg font-bold text-blue-600"
                                                        data-oid="yst-eu."
                                                    >
                                                        {offer.price}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="gcrrn4."
                                                    >
                                                        السعر
                                                    </p>
                                                </div>
                                                <div data-oid="fyg1p22">
                                                    <p
                                                        className="text-lg font-bold text-green-600"
                                                        data-oid="jf2m-fs"
                                                    >
                                                        {offer.estimatedTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="g_bihk0"
                                                    >
                                                        المدة المتوقعة
                                                    </p>
                                                </div>
                                                <div data-oid="qsfk4ij">
                                                    <p
                                                        className="text-lg font-bold text-orange-600"
                                                        data-oid="2nos37y"
                                                    >
                                                        {offer.responseTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="wws368b"
                                                    >
                                                        وقت الاستجابة
                                                    </p>
                                                </div>
                                            </div>
                                            <p
                                                className="text-sm text-gray-700 text-center"
                                                data-oid=".9j:2dh"
                                            >
                                                {offer.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div
                                            className="flex space-x-3 space-x-reverse"
                                            data-oid=".wy6_9b"
                                        >
                                            <button
                                                onClick={() => handleSelectOffer(offer)}
                                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                                data-oid="17zxq2."
                                            >
                                                اختيار هذا العرض
                                            </button>
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="tu1iq-d"
                                            >
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid=":5ynswf"
                                                >
                                                    💬
                                                </Link>
                                                <Link
                                                    href={`/provider-profile/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="wpkiu:u"
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
                                data-oid=":d5q-b7"
                            >
                                <p className="text-sm text-gray-600 mb-3" data-oid="o2fkkma">
                                    لم تجد العرض المناسب؟
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
                                    data-oid=":7ev2ku"
                                >
                                    طلب المزيد من العروض
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="u4f9fcd"></div>
        </div>
    );
}
