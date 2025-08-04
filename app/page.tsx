'use client';

import { useState } from 'react';

export default function Page() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        { id: 1, name: 'تنظيف المنزل', icon: '🏠', price: '50 ريال', rating: 4.8 },
        { id: 2, name: 'صيانة السباكة', icon: '🔧', price: '80 ريال', rating: 4.9 },
        { id: 3, name: 'توصيل الطعام', icon: '🍕', price: '15 ريال', rating: 4.7 },
        { id: 4, name: 'خدمات التجميل', icon: '💄', price: '120 ريال', rating: 4.6 },
        { id: 5, name: 'تصليح الأجهزة', icon: '📱', price: '100 ريال', rating: 4.8 },
        { id: 6, name: 'خدمات البستنة', icon: '🌱', price: '60 ريال', rating: 4.5 },
    ];

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
                    <button
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold"
                        data-oid="cfe7saj"
                    >
                        طلب سريع
                    </button>
                    <button
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold"
                        data-oid="9r2w_lg"
                    >
                        طلباتي
                    </button>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-sm mx-auto px-4" data-oid="j7iu3-j">
                <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="bv9j33t">
                    الخدمات المتاحة
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="4iv2282">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="g_btnrw"
                        >
                            <div className="text-3xl mb-3 text-center" data-oid="v05.9vt">
                                {service.icon}
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm mb-2 text-center"
                                data-oid="uwu0t-l"
                            >
                                {service.name}
                            </h3>
                            <div
                                className="flex items-center justify-between text-xs"
                                data-oid="9louc2y"
                            >
                                <span className="text-blue-600 font-semibold" data-oid="3gqy45k">
                                    {service.price}
                                </span>
                                <div
                                    className="flex items-center space-x-1 space-x-reverse"
                                    data-oid=".j:-d--"
                                >
                                    <span className="text-yellow-500" data-oid="c8qtcxp">
                                        ⭐
                                    </span>
                                    <span className="text-gray-600" data-oid="-bniasb">
                                        {service.rating}
                                    </span>
                                </div>
                            </div>
                        </div>
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
                                    <div
                                        className="flex items-center justify-between mt-1"
                                        data-oid="ajr21sf"
                                    >
                                        <span
                                            className="text-blue-600 font-semibold text-sm"
                                            data-oid="xvatxmb"
                                        >
                                            {service.price}
                                        </span>
                                        <div
                                            className="flex items-center space-x-1 space-x-reverse"
                                            data-oid="8ennn_o"
                                        >
                                            <span
                                                className="text-yellow-500 text-sm"
                                                data-oid="tgn:qgp"
                                            >
                                                ⭐
                                            </span>
                                            <span
                                                className="text-gray-600 text-sm"
                                                data-oid="igabn.1"
                                            >
                                                {service.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
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
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="8_p4_:k"
                        >
                            <span className="text-xl" data-oid="1jeb521">
                                📋
                            </span>
                            <span className="text-xs" data-oid="uogpuq.">
                                طلباتي
                            </span>
                        </button>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="h6k:-up"
                        >
                            <span className="text-xl" data-oid="3:lt_0k">
                                💬
                            </span>
                            <span className="text-xs" data-oid="w0ag1d3">
                                الرسائل
                            </span>
                        </button>
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="z8z-zqn"
                        >
                            <span className="text-xl" data-oid="7w-l7oj">
                                👤
                            </span>
                            <span className="text-xs" data-oid="h-8dt2y">
                                الملف الشخصي
                            </span>
                        </button>
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
                                className="flex items-center justify-center space-x-4 space-x-reverse mb-6"
                                data-oid="4hzh_mu"
                            >
                                <div className="text-center" data-oid="z9nzarm">
                                    <p
                                        className="text-2xl font-bold text-blue-600"
                                        data-oid="551glsx"
                                    >
                                        {selectedService.price}
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="6q8403q">
                                        السعر
                                    </p>
                                </div>
                                <div className="text-center" data-oid="4rw0tei">
                                    <p
                                        className="text-2xl font-bold text-yellow-500"
                                        data-oid="-fp367v"
                                    >
                                        {selectedService.rating}
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="s1-2mfd">
                                        التقييم
                                    </p>
                                </div>
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
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                data-oid="je2qt1i"
                            >
                                احجز الآن
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

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="kfx7090"></div>
        </div>
    );
}
