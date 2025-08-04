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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="qyejige">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="ntmjoy2"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="6uls7n2">
                    <div className="flex items-center justify-between mb-6" data-oid="dpwgc.e">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="ia9t2dk"
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="krlpsx9"
                            >
                                <span className="text-lg" data-oid="ofsct8.">
                                    👤
                                </span>
                            </div>
                            <div data-oid="ii9nz2r">
                                <p className="text-sm opacity-90" data-oid="a:iaqse">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="picxoml">
                                    أحمد محمد
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/notifications"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                            data-oid="9yj6m50"
                        >
                            <span className="text-lg" data-oid="1cfywbf">
                                🔔
                            </span>
                            <span
                                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                data-oid="1se14bx"
                            >
                                3
                            </span>
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold mb-2" data-oid="h9etkdo">
                        اطلب خدمتك الآن
                    </h1>
                    <p className="text-white/90 text-sm" data-oid="xlhiwe5">
                        خدمات موثوقة وسريعة في منطقتك
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="s.9:joe">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="5lh441.">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="dpr62mz">
                        <span className="text-gray-400" data-oid="udwm40t">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="ابحث عن الخدمة التي تريدها..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="064rwg4"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="gbcoe90">
                <div className="flex space-x-4 space-x-reverse" data-oid="vy:krqu">
                    <Link
                        href="/request-service?service=طلب سريع"
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="12h-fjx"
                    >
                        طلب سريع
                    </Link>
                    <Link
                        href="/orders"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="0ixonh7"
                    >
                        طلباتي
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-sm mx-auto px-4" data-oid="x67aji1">
                <div className="flex items-center justify-between mb-4" data-oid=":s3v718">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="-s93d1_">
                        التصنيفات الرئيسية
                    </h2>
                    <Link
                        href="/categories"
                        className="text-blue-600 text-sm font-semibold"
                        data-oid="eedoxrl"
                    >
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="e6olqng">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="c8:7gu4"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid="5dzk18w"
                            >
                                <span className="text-2xl" data-oid="udfzj4i">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center"
                                data-oid="5azm5di"
                            >
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Popular Services */}
                <div className="mb-6" data-oid="ncdw:og">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid="s045_p-">
                        الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid=".b7i0cg">
                        {services.slice(0, 3).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse"
                                data-oid="ngh.s6p"
                            >
                                <div className="text-2xl" data-oid="y1ab3vr">
                                    {service.icon}
                                </div>
                                <div className="flex-1" data-oid="qa2877o">
                                    <h4 className="font-semibold text-gray-800" data-oid="abrp-ek">
                                        {service.name}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedService(service);
                                        handleRequestOffers();
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                    data-oid=".1how_1"
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
                data-oid="626ayo7"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid=".0d1sx5">
                    <div className="flex justify-around" data-oid="febiwuy">
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="_9x3uqd"
                        >
                            <span className="text-xl" data-oid=".5a1_uz">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="ee4579n">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="yhksbcd"
                        >
                            <span className="text-xl" data-oid="sofz4cu">
                                📂
                            </span>
                            <span className="text-xs" data-oid="dcvt-zl">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="mt:nxiq"
                        >
                            <span className="text-xl" data-oid="9u3sj-_">
                                📋
                            </span>
                            <span className="text-xs" data-oid="p3xjk72">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/wallet"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="77xy:kl"
                        >
                            <span className="text-xl" data-oid="e-y-hgu">
                                💰
                            </span>
                            <span className="text-xs" data-oid="7flarta">
                                المحفظة
                            </span>
                        </Link>
                        <Link
                            href="/settings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="5hpyxkv"
                        >
                            <span className="text-xl" data-oid="cmz98ng">
                                ⚙️
                            </span>
                            <span className="text-xs" data-oid="7vqsaqe">
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
                    data-oid="wjf.o9h"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="-nx58on"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="0_x9.-3"
                        ></div>

                        <div className="text-center mb-6" data-oid="glie6wb">
                            <div className="text-4xl mb-3" data-oid="6f:hcqc">
                                {selectedService.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="dv1mzr2">
                                {selectedService.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4" data-oid="qv22v00">
                                خدمة موثوقة ومضمونة
                            </p>

                            <div
                                className="flex items-center justify-center mb-6"
                                data-oid="jp38fsp"
                            >
                                <div className="text-center" data-oid="7kx.14p">
                                    <p
                                        className="text-2xl font-bold text-green-500"
                                        data-oid="si6k0ko"
                                    >
                                        30
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="7ok.wyv">
                                        دقيقة
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3" data-oid="fb3ydi4">
                            <button
                                onClick={handleRequestOffers}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                data-oid="v4a2yp3"
                            >
                                طلب عروض من مقدمي الخدمة
                            </button>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="7oq-oth"
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
                    data-oid="369m5_b"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="ldoz7zq"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="ra_iee4"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="87gtv:a">
                            جاري البحث عن مقدمي الخدمة
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="9dl_iv.">
                            يرجى الانتظار بينما نجمع أفضل العروض لك...
                        </p>
                    </div>
                </div>
            )}

            {/* Offers Modal */}
            {showOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="9:v7xk3">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="cyam1xs"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="jedd74k">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="5.t9szh"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="50g.5x-">
                                <h3 className="text-xl font-bold text-gray-800" data-oid="lri_816">
                                    العروض المتاحة
                                </h3>
                                <button
                                    onClick={() => setShowOffers(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="mq.jhbz"
                                >
                                    <span className="text-gray-600" data-oid="y1yltg8">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="no.iszb">
                                اختر أفضل عرض يناسبك
                            </p>
                        </div>

                        {/* Offers List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-120px)] p-4"
                            data-oid="ck6k211"
                        >
                            <div className="space-y-4" data-oid="vs2_sx0">
                                {sampleOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                                        data-oid="3i6zqbk"
                                    >
                                        {/* Provider Info */}
                                        <div
                                            className="flex items-start space-x-3 space-x-reverse mb-4"
                                            data-oid="m3y:7ph"
                                        >
                                            <div className="text-3xl" data-oid="w8xzefw">
                                                {offer.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="fls4d9t">
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse mb-1"
                                                    data-oid=".b.mo:z"
                                                >
                                                    <h4
                                                        className="font-semibold text-gray-800"
                                                        data-oid="wg.-qp4"
                                                    >
                                                        {offer.providerName}
                                                    </h4>
                                                    {offer.verified && (
                                                        <span
                                                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                            data-oid="5ggkeau"
                                                        >
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600"
                                                    data-oid=":16_b7_"
                                                >
                                                    <div
                                                        className="flex items-center space-x-1 space-x-reverse"
                                                        data-oid="-fqgfx4"
                                                    >
                                                        <span
                                                            className="text-yellow-500"
                                                            data-oid="9iusz5g"
                                                        >
                                                            ⭐
                                                        </span>
                                                        <span data-oid="v69e:jg">
                                                            {offer.rating}
                                                        </span>
                                                    </div>
                                                    <span data-oid="s7a:rym">
                                                        ({offer.completedJobs} خدمة مكتملة)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Offer Details */}
                                        <div
                                            className="bg-white rounded-xl p-3 mb-4"
                                            data-oid="4t_4o._"
                                        >
                                            <div
                                                className="grid grid-cols-3 gap-4 text-center mb-3"
                                                data-oid="qpohe36"
                                            >
                                                <div data-oid="l63l_ym">
                                                    <p
                                                        className="text-lg font-bold text-blue-600"
                                                        data-oid="oiz.p:e"
                                                    >
                                                        {offer.price}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="niwulle"
                                                    >
                                                        السعر
                                                    </p>
                                                </div>
                                                <div data-oid="iotoh:k">
                                                    <p
                                                        className="text-lg font-bold text-green-600"
                                                        data-oid="1_6629x"
                                                    >
                                                        {offer.estimatedTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="6wjq3es"
                                                    >
                                                        المدة المتوقعة
                                                    </p>
                                                </div>
                                                <div data-oid="l4a5sa-">
                                                    <p
                                                        className="text-lg font-bold text-orange-600"
                                                        data-oid="06mhdqg"
                                                    >
                                                        {offer.responseTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="blgs:15"
                                                    >
                                                        وقت الاستجابة
                                                    </p>
                                                </div>
                                            </div>
                                            <p
                                                className="text-sm text-gray-700 text-center"
                                                data-oid=":bhxtb7"
                                            >
                                                {offer.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div
                                            className="flex space-x-3 space-x-reverse"
                                            data-oid="dhx85wg"
                                        >
                                            <button
                                                onClick={() => handleSelectOffer(offer)}
                                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                                data-oid="swntec1"
                                            >
                                                اختيار هذا العرض
                                            </button>
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="zmzy7:f"
                                            >
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="cvy63o-"
                                                >
                                                    💬
                                                </Link>
                                                <Link
                                                    href={`/provider-profile/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="_jc6xmx"
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
                                data-oid="cd7ne5f"
                            >
                                <p className="text-sm text-gray-600 mb-3" data-oid="kx49bh-">
                                    لم تجد العرض المناسب؟
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
                                    data-oid="gj95_y7"
                                >
                                    طلب المزيد من العروض
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="-ebsexz"></div>
        </div>
    );
}
