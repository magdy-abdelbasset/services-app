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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="olv2-4s">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="swqwq2:"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="p.cs200">
                    <div className="flex items-center justify-between mb-6" data-oid="phuotzr">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="ebpu9bd"
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="zs3e60e"
                            >
                                <span className="text-lg" data-oid=":bqcw9f">
                                    👤
                                </span>
                            </div>
                            <div data-oid="hv7mvsa">
                                <p className="text-sm opacity-90" data-oid="e54mr_0">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="hxr6rr8">
                                    أحمد محمد
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/notifications"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                            data-oid="folttdu"
                        >
                            <span className="text-lg" data-oid="5fspz0g">
                                🔔
                            </span>
                            <span
                                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                data-oid="615x1qy"
                            >
                                3
                            </span>
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold mb-2" data-oid="yqlt31e">
                        اطلب خدمتك الآن
                    </h1>
                    <p className="text-white/90 text-sm" data-oid="ghkztv6">
                        خدمات موثوقة وسريعة في منطقتك
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="-_:8jou">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="3uz7mkg">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="nu:bz22">
                        <span className="text-gray-400" data-oid="oi6xtdi">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="ابحث عن الخدمة التي تريدها..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="vmqcaih"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="awth5.1">
                <div className="flex space-x-4 space-x-reverse" data-oid="hut-i6b">
                    <Link
                        href="/request-service?service=طلب سريع"
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="gtybppt"
                    >
                        طلب سريع
                    </Link>
                    <Link
                        href="/orders"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="gsxgm-q"
                    >
                        طلباتي
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-sm mx-auto px-4" data-oid="q_qqwwa">
                <div className="flex items-center justify-between mb-4" data-oid="t539i72">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="0.rs773">
                        التصنيفات الرئيسية
                    </h2>
                    <Link
                        href="/categories"
                        className="text-blue-600 text-sm font-semibold"
                        data-oid="nye:yt4"
                    >
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="4ncxva4">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="zdzvrub"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid=".mu.dg6"
                            >
                                <span className="text-2xl" data-oid="xtre6:g">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center"
                                data-oid="yb__c15"
                            >
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Popular Services */}
                <div className="mb-6" data-oid="0rhc01y">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid="6r-ioej">
                        الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid="za9z7qb">
                        {services.slice(0, 3).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse"
                                data-oid="2ni8ekf"
                            >
                                <div className="text-2xl" data-oid="1shgrep">
                                    {service.icon}
                                </div>
                                <div className="flex-1" data-oid="h_3kvlt">
                                    <h4 className="font-semibold text-gray-800" data-oid="30weqq4">
                                        {service.name}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedService(service);
                                        handleRequestOffers();
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                    data-oid="b6ugx-8"
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
                data-oid="-uzphza"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="sg0nwvn">
                    <div className="flex justify-around" data-oid="8c4gbk3">
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="m90zc3p"
                        >
                            <span className="text-xl" data-oid="1um8-:s">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="spwt7em">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="oahdz09"
                        >
                            <span className="text-xl" data-oid=":1fxzua">
                                📂
                            </span>
                            <span className="text-xs" data-oid="3z_7cze">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=".0xp7n3"
                        >
                            <span className="text-xl" data-oid="mugexo3">
                                📋
                            </span>
                            <span className="text-xs" data-oid="b7b3l06">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/wallet"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9gq4ql0"
                        >
                            <span className="text-xl" data-oid="j--6tug">
                                💰
                            </span>
                            <span className="text-xs" data-oid="2l7n9o1">
                                المحفظة
                            </span>
                        </Link>
                        <Link
                            href="/settings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="239t6a1"
                        >
                            <span className="text-xl" data-oid="pqxhgcx">
                                ⚙️
                            </span>
                            <span className="text-xs" data-oid="qj60c05">
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
                    data-oid="mtzonds"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="z-299es"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="tlthpg4"
                        ></div>

                        <div className="text-center mb-6" data-oid="8lebe8s">
                            <div className="text-4xl mb-3" data-oid=":ygq5:n">
                                {selectedService.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="8l.mhhp">
                                {selectedService.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4" data-oid="h0ov2bv">
                                خدمة موثوقة ومضمونة
                            </p>

                            <div
                                className="flex items-center justify-center mb-6"
                                data-oid="0lj6:s0"
                            >
                                <div className="text-center" data-oid=":chb:49">
                                    <p
                                        className="text-2xl font-bold text-green-500"
                                        data-oid="5x-k9-n"
                                    >
                                        30
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="k2wyhoi">
                                        دقيقة
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3" data-oid="fov6hdb">
                            <button
                                onClick={handleRequestOffers}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                data-oid="cpz..os"
                            >
                                طلب عروض من مقدمي الخدمة
                            </button>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="qoos:g5"
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
                    data-oid="bjmgt.w"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="k7d.qz_"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="bh8m6um"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="oszjf3-">
                            جاري البحث عن مقدمي الخدمة
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid=":j00z2d">
                            يرجى الانتظار بينما نجمع أفضل العروض لك...
                        </p>
                    </div>
                </div>
            )}

            {/* Offers Modal */}
            {showOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="svho42z">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="vnaklrr"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="94yvm9t">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="77:lg9q"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="c.fly_.">
                                <h3 className="text-xl font-bold text-gray-800" data-oid="z:in4nu">
                                    العروض المتاحة
                                </h3>
                                <button
                                    onClick={() => setShowOffers(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="qfrx2ge"
                                >
                                    <span className="text-gray-600" data-oid="rsk3w1g">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="xn7jawo">
                                اختر أفضل عرض يناسبك
                            </p>
                        </div>

                        {/* Offers List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-120px)] p-4"
                            data-oid="ov2vvnn"
                        >
                            <div className="space-y-4" data-oid="h1kvy0g">
                                {sampleOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                                        data-oid="-86ixgl"
                                    >
                                        {/* Provider Info */}
                                        <div
                                            className="flex items-start space-x-3 space-x-reverse mb-4"
                                            data-oid="3gw81gx"
                                        >
                                            <div className="text-3xl" data-oid="87n9fjl">
                                                {offer.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="lrrjv6p">
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse mb-1"
                                                    data-oid="2g97-xd"
                                                >
                                                    <h4
                                                        className="font-semibold text-gray-800"
                                                        data-oid="xbrqqdk"
                                                    >
                                                        {offer.providerName}
                                                    </h4>
                                                    {offer.verified && (
                                                        <span
                                                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                            data-oid="ch9r:bh"
                                                        >
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600"
                                                    data-oid="jw8_ot7"
                                                >
                                                    <div
                                                        className="flex items-center space-x-1 space-x-reverse"
                                                        data-oid="95:z6yp"
                                                    >
                                                        <span
                                                            className="text-yellow-500"
                                                            data-oid="49gx7n-"
                                                        >
                                                            ⭐
                                                        </span>
                                                        <span data-oid="uj5k3-c">
                                                            {offer.rating}
                                                        </span>
                                                    </div>
                                                    <span data-oid="7alt-93">
                                                        ({offer.completedJobs} خدمة مكتملة)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Offer Details */}
                                        <div
                                            className="bg-white rounded-xl p-3 mb-4"
                                            data-oid="bxgn7lu"
                                        >
                                            <div
                                                className="grid grid-cols-3 gap-4 text-center mb-3"
                                                data-oid="17mk2tx"
                                            >
                                                <div data-oid="4.univw">
                                                    <p
                                                        className="text-lg font-bold text-blue-600"
                                                        data-oid="i80m41h"
                                                    >
                                                        {offer.price}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="qk.wie:"
                                                    >
                                                        السعر
                                                    </p>
                                                </div>
                                                <div data-oid="kch62uk">
                                                    <p
                                                        className="text-lg font-bold text-green-600"
                                                        data-oid="rsq9szs"
                                                    >
                                                        {offer.estimatedTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="g1a9a4-"
                                                    >
                                                        المدة المتوقعة
                                                    </p>
                                                </div>
                                                <div data-oid="rhg6xar">
                                                    <p
                                                        className="text-lg font-bold text-orange-600"
                                                        data-oid="364x_05"
                                                    >
                                                        {offer.responseTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="m1poxeq"
                                                    >
                                                        وقت الاستجابة
                                                    </p>
                                                </div>
                                            </div>
                                            <p
                                                className="text-sm text-gray-700 text-center"
                                                data-oid="6l:dzdw"
                                            >
                                                {offer.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div
                                            className="flex space-x-3 space-x-reverse"
                                            data-oid="doakd2-"
                                        >
                                            <button
                                                onClick={() => handleSelectOffer(offer)}
                                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                                data-oid="lt_maka"
                                            >
                                                اختيار هذا العرض
                                            </button>
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="r_m-7sa"
                                            >
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="qx0k7-n"
                                                >
                                                    💬
                                                </Link>
                                                <Link
                                                    href={`/provider-profile/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="3g.zyoe"
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
                                data-oid="4eh2a_y"
                            >
                                <p className="text-sm text-gray-600 mb-3" data-oid="du-pf3e">
                                    لم تجد العرض المناسب؟
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
                                    data-oid="68u06l7"
                                >
                                    طلب المزيد من العروض
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="j1mlqci"></div>
        </div>
    );
}
