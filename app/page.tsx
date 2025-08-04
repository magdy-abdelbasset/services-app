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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="7yyknsz">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="rgkmwcu"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="wre86bv">
                    <div className="flex items-center justify-between mb-6" data-oid="-0tu..p">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="l6xe8y8"
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="j5amihc"
                            >
                                <span className="text-lg" data-oid="4:es_ob">
                                    👤
                                </span>
                            </div>
                            <div data-oid="nk1::ny">
                                <p className="text-sm opacity-90" data-oid="i3mo99n">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="i31v01g">
                                    أحمد محمد
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="vpojtor"
                        >
                            <span className="text-lg" data-oid="nyff552">
                                🔔
                            </span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-2" data-oid="e0abzle">
                        اطلب خدمتك الآن
                    </h1>
                    <p className="text-white/90 text-sm" data-oid="8z0a.a0">
                        خدمات موثوقة وسريعة في منطقتك
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="aib_j90">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="l3dpxya">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="wdf_1_n">
                        <span className="text-gray-400" data-oid="qej3tte">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="ابحث عن الخدمة التي تريدها..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="hq_n3jd"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="t8e2:2j">
                <div className="flex space-x-4 space-x-reverse" data-oid="fcrmsun">
                    <Link
                        href="/request-service?service=طلب سريع"
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="cfe7saj"
                    >
                        طلب سريع
                    </Link>
                    <Link
                        href="/orders"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="9r2w_lg"
                    >
                        طلباتي
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-sm mx-auto px-4" data-oid="j7iu3-j">
                <div className="flex items-center justify-between mb-4" data-oid="s-krqj.">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="bv9j33t">
                        التصنيفات الرئيسية
                    </h2>
                    <Link
                        href="/categories"
                        className="text-blue-600 text-sm font-semibold"
                        data-oid="cp3s4wn"
                    >
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="4iv2282">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="g_btnrw"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid="2sp0jw1"
                            >
                                <span className="text-2xl" data-oid="e-acah_">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center"
                                data-oid="uwu0t-l"
                            >
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Popular Services */}
                <div className="mb-6" data-oid="f6xnyht">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid=".t9gftp">
                        الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid="58z26jy">
                        {services.slice(0, 3).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse"
                                data-oid="yumxjey"
                            >
                                <div className="text-2xl" data-oid="v3qiplh">
                                    {service.icon}
                                </div>
                                <div className="flex-1" data-oid="yb:l2x-">
                                    <h4 className="font-semibold text-gray-800" data-oid="qbqmqe.">
                                        {service.name}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedService(service);
                                        handleRequestOffers();
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                    data-oid="qhqp86-"
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
                data-oid="4k_3itx"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="q65ce05">
                    <div className="flex justify-around" data-oid="l7jv9ec">
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="wjc0ejw"
                        >
                            <span className="text-xl" data-oid="2.r8st8">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="9e1_qkg">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="8_p4_:k"
                        >
                            <span className="text-xl" data-oid="1jeb521">
                                📂
                            </span>
                            <span className="text-xs" data-oid="uogpuq.">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="h6k:-up"
                        >
                            <span className="text-xl" data-oid="3:lt_0k">
                                📋
                            </span>
                            <span className="text-xs" data-oid="w0ag1d3">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400 relative"
                            data-oid="z8z-zqn"
                        >
                            <div className="relative" data-oid="92_l_hg">
                                <span className="text-xl" data-oid="7w-l7oj">
                                    💰
                                </span>
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                    data-oid="ajww6f-"
                                >
                                    2
                                </span>
                            </div>
                            <span className="text-xs" data-oid="h-8dt2y">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="j2ecagv"
                        >
                            <span className="text-xl" data-oid="eitf05x">
                                💬
                            </span>
                            <span className="text-xs" data-oid="vk9w5u.">
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
                    data-oid="kk6bh5j"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="qw-ss30"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="xkni.5y"
                        ></div>

                        <div className="text-center mb-6" data-oid="z1_1spb">
                            <div className="text-4xl mb-3" data-oid=".384ty9">
                                {selectedService.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="n-hr7y6">
                                {selectedService.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4" data-oid="5zy1g-d">
                                خدمة موثوقة ومضمونة
                            </p>

                            <div
                                className="flex items-center justify-center mb-6"
                                data-oid="4hzh_mu"
                            >
                                <div className="text-center" data-oid="tjq1r9z">
                                    <p
                                        className="text-2xl font-bold text-green-500"
                                        data-oid="0q-hn7g"
                                    >
                                        30
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="cw:r9ar">
                                        دقيقة
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3" data-oid="pq.g9.3">
                            <button
                                onClick={handleRequestOffers}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                data-oid="je2qt1i"
                            >
                                طلب عروض من مقدمي الخدمة
                            </button>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid=".i-5t9."
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
                    data-oid="x112_nl"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="jxsmd_y"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="81_68uk"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="2g8g4gi">
                            جاري البحث عن مقدمي الخدمة
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="qg8m42x">
                            يرجى الانتظار بينما نجمع أفضل العروض لك...
                        </p>
                    </div>
                </div>
            )}

            {/* Offers Modal */}
            {showOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="h-1phvw">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="erjn_6t"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="a7gb3xi">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="cx_:bc_"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="2jzl2f5">
                                <h3 className="text-xl font-bold text-gray-800" data-oid="sjejpg9">
                                    العروض المتاحة
                                </h3>
                                <button
                                    onClick={() => setShowOffers(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="xukcbdw"
                                >
                                    <span className="text-gray-600" data-oid="tap8bxq">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="27w6d7l">
                                اختر أفضل عرض يناسبك
                            </p>
                        </div>

                        {/* Offers List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-120px)] p-4"
                            data-oid="rtbykkj"
                        >
                            <div className="space-y-4" data-oid="b_qetoy">
                                {sampleOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                                        data-oid="v2ls08j"
                                    >
                                        {/* Provider Info */}
                                        <div
                                            className="flex items-start space-x-3 space-x-reverse mb-4"
                                            data-oid="7jqhtu1"
                                        >
                                            <div className="text-3xl" data-oid="9h9:w.j">
                                                {offer.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="ncmfntg">
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse mb-1"
                                                    data-oid="8yd-des"
                                                >
                                                    <h4
                                                        className="font-semibold text-gray-800"
                                                        data-oid="flc-y44"
                                                    >
                                                        {offer.providerName}
                                                    </h4>
                                                    {offer.verified && (
                                                        <span
                                                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                            data-oid="mfv_2jw"
                                                        >
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600"
                                                    data-oid="9fpynk-"
                                                >
                                                    <div
                                                        className="flex items-center space-x-1 space-x-reverse"
                                                        data-oid="f:6f86l"
                                                    >
                                                        <span
                                                            className="text-yellow-500"
                                                            data-oid="vjj.ts3"
                                                        >
                                                            ⭐
                                                        </span>
                                                        <span data-oid="yyj9s3g">
                                                            {offer.rating}
                                                        </span>
                                                    </div>
                                                    <span data-oid="k.ckkmi">
                                                        ({offer.completedJobs} خدمة مكتملة)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Offer Details */}
                                        <div
                                            className="bg-white rounded-xl p-3 mb-4"
                                            data-oid="o_xt574"
                                        >
                                            <div
                                                className="grid grid-cols-3 gap-4 text-center mb-3"
                                                data-oid="5326x8g"
                                            >
                                                <div data-oid="6oci6.1">
                                                    <p
                                                        className="text-lg font-bold text-blue-600"
                                                        data-oid="9f7u7jy"
                                                    >
                                                        {offer.price}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="ymlb5me"
                                                    >
                                                        السعر
                                                    </p>
                                                </div>
                                                <div data-oid="mgpi:fn">
                                                    <p
                                                        className="text-lg font-bold text-green-600"
                                                        data-oid="zbsw:qq"
                                                    >
                                                        {offer.estimatedTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="5a44bbt"
                                                    >
                                                        المدة المتوقعة
                                                    </p>
                                                </div>
                                                <div data-oid="sjmk-39">
                                                    <p
                                                        className="text-lg font-bold text-orange-600"
                                                        data-oid="cvuwgrs"
                                                    >
                                                        {offer.responseTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="m2fuf00"
                                                    >
                                                        وقت الاستجابة
                                                    </p>
                                                </div>
                                            </div>
                                            <p
                                                className="text-sm text-gray-700 text-center"
                                                data-oid="0s.2y4r"
                                            >
                                                {offer.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div
                                            className="flex space-x-3 space-x-reverse"
                                            data-oid="3ma6z6u"
                                        >
                                            <button
                                                onClick={() => handleSelectOffer(offer)}
                                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                                data-oid="ec9qad4"
                                            >
                                                اختيار هذا العرض
                                            </button>
                                            <Link
                                                href={`/chat/${offer.id}`}
                                                className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                data-oid="xvzbfz2"
                                            >
                                                💬
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Request More Offers */}
                            <div
                                className="mt-6 p-4 bg-blue-50 rounded-2xl text-center"
                                data-oid=":v0p3.7"
                            >
                                <p className="text-sm text-gray-600 mb-3" data-oid="0tiw-v3">
                                    لم تجد العرض المناسب؟
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
                                    data-oid="5q:t09-"
                                >
                                    طلب المزيد من العروض
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="kfx7090"></div>
        </div>
    );
}
