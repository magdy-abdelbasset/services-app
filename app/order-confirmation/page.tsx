'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function OrderConfirmationPage() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId') || '12345';

    const [showDetails, setShowDetails] = useState(false);

    const orderDetails = {
        id: orderId,
        serviceName: 'تنظيف عام',
        providerName: 'أحمد علي',
        providerAvatar: '👨‍💼',
        price: '45 ريال',
        scheduledDate: '2024-01-20',
        scheduledTime: '14:00',
        address: 'الرياض، حي النرجس، شارع الأمير محمد بن عبدالعزيز',
        phoneNumber: '0501234567',
        status: 'pending',
        estimatedArrival: '13:45',
        notes: 'يرجى التنظيف العميق للمطبخ والحمامات',
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="d0t8r.4">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                data-oid="65bah9_"
            >
                <div className="max-w-sm mx-auto px-4 py-8" data-oid="t-5c9g0">
                    <div className="text-center" data-oid="7f8nbbr">
                        <div
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="ydk.ckg"
                        >
                            <span className="text-4xl" data-oid="v7vqfm.">
                                ✅
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2" data-oid=".y0-nsr">
                            تم تأكيد طلبك!
                        </h1>
                        <p className="text-white/90 text-sm" data-oid="-6-o18s">
                            رقم الطلب: #{orderDetails.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid=":gmy0cl">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="61:znng">
                    <div className="text-center mb-6" data-oid="gy7t.3v">
                        <div
                            className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            data-oid="8wb0o85"
                        >
                            <span
                                className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                data-oid="_voxrgo"
                            ></span>
                            في انتظار موافقة مقدم الخدمة
                        </div>
                        <p className="text-gray-600 text-sm" data-oid="vu5nxwa">
                            سيتم إشعارك فور موافقة مقدم الخدمة على طلبك
                        </p>
                    </div>

                    {/* Provider Info */}
                    <div
                        className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl mb-4"
                        data-oid="-:b1ho4"
                    >
                        <div className="text-3xl" data-oid="doi0_8z">
                            {orderDetails.providerAvatar}
                        </div>
                        <div className="flex-1" data-oid="l06zaio">
                            <h3 className="font-semibold text-gray-800" data-oid="4maakac">
                                {orderDetails.providerName}
                            </h3>
                            <p className="text-sm text-gray-600" data-oid="xisyhkn">
                                {orderDetails.serviceName}
                            </p>
                        </div>
                        <div className="text-right" data-oid="yvol4by">
                            <p className="font-bold text-blue-600" data-oid="wv-ohn0">
                                {orderDetails.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="fxy7ib:">
                                المبلغ المتوقع
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3" data-oid="fwqdg.2">
                        <Link
                            href={`/chat/${orderDetails.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="bb_ia7:"
                        >
                            <span data-oid="ufsdd6s">💬</span>
                            <span data-oid="y-7se:t">تواصل</span>
                        </Link>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                            data-oid="z13v9:l"
                        >
                            <span data-oid="d787wm9">📋</span>
                            <span data-oid="_zzhpa8">التفاصيل</span>
                        </button>
                    </div>
                </div>

                {/* Order Details */}
                {showDetails && (
                    <div
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
                        data-oid="m8aad7:"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="xw38w7z">
                            تفاصيل الطلب
                        </h3>

                        <div className="space-y-3" data-oid="k_i01hn">
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="b6eg4w8"
                            >
                                <span className="text-gray-600" data-oid="w_ruo5v">
                                    التاريخ:
                                </span>
                                <span className="font-semibold" data-oid="j.hhu8h">
                                    {orderDetails.scheduledDate}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="xjep4bc"
                            >
                                <span className="text-gray-600" data-oid="j.qfegi">
                                    الوقت:
                                </span>
                                <span className="font-semibold" data-oid="t86bvcg">
                                    {orderDetails.scheduledTime}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="2pveipy"
                            >
                                <span className="text-gray-600" data-oid="_-lwb80">
                                    الوصول المتوقع:
                                </span>
                                <span className="font-semibold text-green-600" data-oid="nr06512">
                                    {orderDetails.estimatedArrival}
                                </span>
                            </div>
                            <div className="py-2 border-b border-gray-100" data-oid="xs3k0p-">
                                <span className="text-gray-600 block mb-2" data-oid="ki6mnqz">
                                    العنوان:
                                </span>
                                <span
                                    className="text-sm bg-gray-50 p-3 rounded-lg block"
                                    data-oid="ic1uihl"
                                >
                                    {orderDetails.address}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="8av_:h2"
                            >
                                <span className="text-gray-600" data-oid=".lwr.jx">
                                    رقم الهاتف:
                                </span>
                                <span className="font-semibold" data-oid="zueqejk">
                                    {orderDetails.phoneNumber}
                                </span>
                            </div>
                            {orderDetails.notes && (
                                <div className="py-2" data-oid="rvx8o00">
                                    <span className="text-gray-600 block mb-2" data-oid="lhl:ei_">
                                        ملاحظات:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="bsfvwu7"
                                    >
                                        {orderDetails.notes}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6" data-oid="25ya0mx">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4" data-oid="3qq5s26">
                        الخطوات التالية
                    </h3>
                    <div className="space-y-3" data-oid="13tqcv2">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="-_.oys8"
                        >
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="olhylrd"
                            >
                                1
                            </div>
                            <div data-oid="qrjc:ih">
                                <p className="font-semibold text-blue-800" data-oid="wzhuq1q">
                                    انتظار الموافقة
                                </p>
                                <p className="text-sm text-blue-600" data-oid="oy2i-9g">
                                    سيراجع مقدم الخدمة طلبك ويرد خلال دقائق
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="ov_w9hc"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="jaxudds"
                            >
                                2
                            </div>
                            <div data-oid="txzc26x">
                                <p className="font-semibold text-gray-600" data-oid="jd2r463">
                                    تأكيد الموعد
                                </p>
                                <p className="text-sm text-gray-500" data-oid="a.na5p_">
                                    سيتم تأكيد الموعد والتفاصيل النهائية
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="viy4eqj"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="7lcs1dj"
                            >
                                3
                            </div>
                            <div data-oid="c4ohw-c">
                                <p className="font-semibold text-gray-600" data-oid="d4uk1iz">
                                    تنفيذ الخدمة
                                </p>
                                <p className="text-sm text-gray-500" data-oid="z.meyuh">
                                    سيصل مقدم الخدمة في الموعد المحدد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6" data-oid="1h2sera">
                    <div
                        className="flex items-center space-x-2 space-x-reverse mb-3"
                        data-oid="lprm6-n"
                    >
                        <span className="text-yellow-600" data-oid="h8wc__d">
                            ⚠️
                        </span>
                        <h3 className="font-semibold text-yellow-800" data-oid=":52x0xf">
                            ملاحظات مهمة
                        </h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-2" data-oid="wax2_d8">
                        <li data-oid="26bbu2k">
                            • يمكنك إلغاء الطلب مجاناً قبل موافقة مقدم الخدمة
                        </li>
                        <li data-oid="3qvwwoy">• ستتلقى إشعارات فورية عن حالة طلبك</li>
                        <li data-oid="2b8fkq9">
                            • يمكنك التواصل مع مقدم الخدمة مباشرة عبر المحادثة
                        </li>
                        <li data-oid="ojgn3vi">• الدفع يتم بعد إنجاز الخدمة بنجاح</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3" data-oid="ib2c3xa">
                    <Link
                        href="/orders"
                        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-center block"
                        data-oid="82uotcd"
                    >
                        عرض جميع طلباتي
                    </Link>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-center block"
                        data-oid="kpachmb"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="k7bk8d6"></div>
        </div>
    );
}
