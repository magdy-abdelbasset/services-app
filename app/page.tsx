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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="j98i.94">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="137bx40"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="gg:cc6s">
                    <div className="flex items-center justify-between mb-6" data-oid="u:8bej7">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="m2aeqhj"
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="-ex8.jo"
                            >
                                <span className="text-lg" data-oid="bp4c_e:">
                                    👤
                                </span>
                            </div>
                            <div data-oid="yx89s-f">
                                <p className="text-sm opacity-90" data-oid="a.d95o5">
                                    مرحباً
                                </p>
                                <p className="font-semibold" data-oid="m6vxj_2">
                                    أحمد محمد
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/notifications"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                            data-oid="dp.3u9k"
                        >
                            <span className="text-lg" data-oid="56qf0-m">
                                🔔
                            </span>
                            <span
                                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                                data-oid="5:.70gq"
                            >
                                3
                            </span>
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold mb-2" data-oid="_yvb9ju">
                        اطلب خدمتك الآن
                    </h1>
                    <p className="text-white/90 text-sm" data-oid="e4.pqb3">
                        خدمات موثوقة وسريعة في منطقتك
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="zryize1">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="e0aadsq">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="f7rb6qa">
                        <span className="text-gray-400" data-oid="4_k2qyd">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="ابحث عن الخدمة التي تريدها..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="j222yrv"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="sv25eyy">
                <div className="flex space-x-4 space-x-reverse" data-oid="e6c_ia1">
                    <Link
                        href="/request-service?service=طلب سريع"
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="g6_i.20"
                    >
                        طلب سريع
                    </Link>
                    <Link
                        href="/orders"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                        data-oid="agcs08d"
                    >
                        طلباتي
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-sm mx-auto px-4" data-oid="t1v.-9u">
                <div className="flex items-center justify-between mb-4" data-oid="r2_.qcl">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="o3sj4gu">
                        التصنيفات الرئيسية
                    </h2>
                    <Link
                        href="/categories"
                        className="text-blue-600 text-sm font-semibold"
                        data-oid="bma170g"
                    >
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="8szs_3u">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="-a3ho15"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid="e-zyvmf"
                            >
                                <span className="text-2xl" data-oid="osl9js8">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center"
                                data-oid="9nq0330"
                            >
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Popular Services */}
                <div className="mb-6" data-oid="a4rl-dg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid=":8fcwrn">
                        الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid=".r7.20c">
                        {services.slice(0, 3).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse"
                                data-oid="imdbey."
                            >
                                <div className="text-2xl" data-oid="0.e245j">
                                    {service.icon}
                                </div>
                                <div className="flex-1" data-oid="g_qs::f">
                                    <h4 className="font-semibold text-gray-800" data-oid="k0p97cu">
                                        {service.name}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedService(service);
                                        handleRequestOffers();
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                    data-oid="phkmg1d"
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
                data-oid="mxxodgj"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="vsbh4mz">
                    <div className="flex justify-around" data-oid="ihg:oqe">
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="-h7dm-."
                        >
                            <span className="text-xl" data-oid="5zrlyo1">
                                🏠
                            </span>
                            <span className="text-xs font-semibold" data-oid="w.q_a52">
                                الرئيسية
                            </span>
                        </button>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hxyus:9"
                        >
                            <span className="text-xl" data-oid="49:3evg">
                                📂
                            </span>
                            <span className="text-xs" data-oid="xj.xgs3">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ubrxv5u"
                        >
                            <span className="text-xl" data-oid="ukmilsx">
                                📋
                            </span>
                            <span className="text-xs" data-oid="0cf_3pf">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/wallet"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="fyfk0sp"
                        >
                            <span className="text-xl" data-oid="a8enne5">
                                💰
                            </span>
                            <span className="text-xs" data-oid="rpl7x5g">
                                المحفظة
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hmjyg1-"
                        >
                            <span className="text-xl" data-oid="-ax2gyk">
                                💬
                            </span>
                            <span className="text-xs" data-oid="vrb8cd.">
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
                    data-oid="mz4by1s"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="4qooztb"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="yeld2lo"
                        ></div>

                        <div className="text-center mb-6" data-oid="9ilxs6o">
                            <div className="text-4xl mb-3" data-oid="9o7r0sv">
                                {selectedService.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="_i2kvk4">
                                {selectedService.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4" data-oid="2op7ouj">
                                خدمة موثوقة ومضمونة
                            </p>

                            <div
                                className="flex items-center justify-center mb-6"
                                data-oid="8_bi45z"
                            >
                                <div className="text-center" data-oid="gsrwyij">
                                    <p
                                        className="text-2xl font-bold text-green-500"
                                        data-oid="n-sijbk"
                                    >
                                        30
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="8tb3j4a">
                                        دقيقة
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3" data-oid="ocf6n-n">
                            <button
                                onClick={handleRequestOffers}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                data-oid="9:fsyk."
                            >
                                طلب عروض من مقدمي الخدمة
                            </button>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="ozohnb4"
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
                    data-oid="p24rsoc"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="1lf58e0"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="rm7h5_o"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="gfjr--_">
                            جاري البحث عن مقدمي الخدمة
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="2pwjv20">
                            يرجى الانتظار بينما نجمع أفضل العروض لك...
                        </p>
                    </div>
                </div>
            )}

            {/* Offers Modal */}
            {showOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="aubgwly">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="7ftz2sz"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="sn..egs">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="y9:17oa"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="xw9_omo">
                                <h3 className="text-xl font-bold text-gray-800" data-oid="2y_-05l">
                                    العروض المتاحة
                                </h3>
                                <button
                                    onClick={() => setShowOffers(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="tt3vfpy"
                                >
                                    <span className="text-gray-600" data-oid="gbagj4n">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="lbqrcfs">
                                اختر أفضل عرض يناسبك
                            </p>
                        </div>

                        {/* Offers List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-120px)] p-4"
                            data-oid="ow5p7m8"
                        >
                            <div className="space-y-4" data-oid="2aulqz-">
                                {sampleOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                                        data-oid="deqg097"
                                    >
                                        {/* Provider Info */}
                                        <div
                                            className="flex items-start space-x-3 space-x-reverse mb-4"
                                            data-oid="l4y_fpn"
                                        >
                                            <div className="text-3xl" data-oid="n3p9jws">
                                                {offer.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="6ldrv4t">
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse mb-1"
                                                    data-oid="h1k4j_a"
                                                >
                                                    <h4
                                                        className="font-semibold text-gray-800"
                                                        data-oid="hbwtl77"
                                                    >
                                                        {offer.providerName}
                                                    </h4>
                                                    {offer.verified && (
                                                        <span
                                                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                            data-oid="_6u.gxq"
                                                        >
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600"
                                                    data-oid="1w50eqo"
                                                >
                                                    <div
                                                        className="flex items-center space-x-1 space-x-reverse"
                                                        data-oid="a83v:j1"
                                                    >
                                                        <span
                                                            className="text-yellow-500"
                                                            data-oid="6ktglmf"
                                                        >
                                                            ⭐
                                                        </span>
                                                        <span data-oid="j-8w7nw">
                                                            {offer.rating}
                                                        </span>
                                                    </div>
                                                    <span data-oid="s.c_:z3">
                                                        ({offer.completedJobs} خدمة مكتملة)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Offer Details */}
                                        <div
                                            className="bg-white rounded-xl p-3 mb-4"
                                            data-oid="uv-in2r"
                                        >
                                            <div
                                                className="grid grid-cols-3 gap-4 text-center mb-3"
                                                data-oid=".vay2:2"
                                            >
                                                <div data-oid="odmtvbo">
                                                    <p
                                                        className="text-lg font-bold text-blue-600"
                                                        data-oid="q82u4ct"
                                                    >
                                                        {offer.price}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="uqgy1gr"
                                                    >
                                                        السعر
                                                    </p>
                                                </div>
                                                <div data-oid="9npb970">
                                                    <p
                                                        className="text-lg font-bold text-green-600"
                                                        data-oid="s-jx_pf"
                                                    >
                                                        {offer.estimatedTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid=":k5cxdv"
                                                    >
                                                        المدة المتوقعة
                                                    </p>
                                                </div>
                                                <div data-oid="-8-q3ey">
                                                    <p
                                                        className="text-lg font-bold text-orange-600"
                                                        data-oid="64l5q3u"
                                                    >
                                                        {offer.responseTime}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="nkzcmq:"
                                                    >
                                                        وقت الاستجابة
                                                    </p>
                                                </div>
                                            </div>
                                            <p
                                                className="text-sm text-gray-700 text-center"
                                                data-oid="pr8xblm"
                                            >
                                                {offer.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div
                                            className="flex space-x-3 space-x-reverse"
                                            data-oid="giz3ofs"
                                        >
                                            <button
                                                onClick={() => handleSelectOffer(offer)}
                                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                                data-oid="00rf7an"
                                            >
                                                اختيار هذا العرض
                                            </button>
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="ex6vh1t"
                                            >
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="xjusab:"
                                                >
                                                    💬
                                                </Link>
                                                <Link
                                                    href={`/provider-profile/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                    data-oid="qubd5qa"
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
                                data-oid=":ul71_8"
                            >
                                <p className="text-sm text-gray-600 mb-3" data-oid="hczubca">
                                    لم تجد العرض المناسب؟
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
                                    data-oid="or51nzj"
                                >
                                    طلب المزيد من العروض
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="yuhyn5y"></div>
        </div>
    );
}
