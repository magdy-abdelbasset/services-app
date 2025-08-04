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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="99l7h-0">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                data-oid="5u20odr"
            >
                <div className="max-w-sm mx-auto px-4 py-8" data-oid="57qxp0g">
                    <div className="text-center" data-oid="puuskko">
                        <div
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="s:.2bb2"
                        >
                            <span className="text-4xl" data-oid="fjbayip">
                                ✅
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2" data-oid="kfwoe4t">
                            تم تأكيد طلبك!
                        </h1>
                        <p className="text-white/90 text-sm" data-oid="7vep2fk">
                            رقم الطلب: #{orderDetails.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="c7g6-2w">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="pidhaau">
                    <div className="text-center mb-6" data-oid="4em0qp1">
                        <div
                            className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            data-oid="dal-.nx"
                        >
                            <span
                                className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                data-oid="87gn1ru"
                            ></span>
                            في انتظار موافقة مقدم الخدمة
                        </div>
                        <p className="text-gray-600 text-sm" data-oid=".wyoa28">
                            سيتم إشعارك فور موافقة مقدم الخدمة على طلبك
                        </p>
                    </div>

                    {/* Provider Info */}
                    <div
                        className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl mb-4"
                        data-oid="c2i3_xv"
                    >
                        <div className="text-3xl" data-oid="6fgyr7z">
                            {orderDetails.providerAvatar}
                        </div>
                        <div className="flex-1" data-oid="vuzjigt">
                            <h3 className="font-semibold text-gray-800" data-oid="9tyfzeg">
                                {orderDetails.providerName}
                            </h3>
                            <p className="text-sm text-gray-600" data-oid="4frwlx1">
                                {orderDetails.serviceName}
                            </p>
                        </div>
                        <div className="text-right" data-oid="ouf-v-o">
                            <p className="font-bold text-blue-600" data-oid="lf_rget">
                                {orderDetails.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="3kfv4zl">
                                المبلغ المتوقع
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3" data-oid="32.ojje">
                        <Link
                            href={`/chat/${orderDetails.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="v6j2xq1"
                        >
                            <span data-oid="sswujdm">💬</span>
                            <span data-oid="yplot6p">تواصل</span>
                        </Link>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                            data-oid="bn5uttf"
                        >
                            <span data-oid="vupnkbx">📋</span>
                            <span data-oid="cmyo469">التفاصيل</span>
                        </button>
                    </div>
                </div>

                {/* Order Details */}
                {showDetails && (
                    <div
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
                        data-oid="_6-qo9j"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="9loesgv">
                            تفاصيل الطلب
                        </h3>

                        <div className="space-y-3" data-oid="v6pjkuw">
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="e535b39"
                            >
                                <span className="text-gray-600" data-oid="2b5-dk0">
                                    التاريخ:
                                </span>
                                <span className="font-semibold" data-oid="zmsa3rd">
                                    {orderDetails.scheduledDate}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="a4-2pfo"
                            >
                                <span className="text-gray-600" data-oid="v-k:rt3">
                                    الوقت:
                                </span>
                                <span className="font-semibold" data-oid="qh72dd4">
                                    {orderDetails.scheduledTime}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="w7jjozn"
                            >
                                <span className="text-gray-600" data-oid="4_bshho">
                                    الوصول المتوقع:
                                </span>
                                <span className="font-semibold text-green-600" data-oid="ov1ddec">
                                    {orderDetails.estimatedArrival}
                                </span>
                            </div>
                            <div className="py-2 border-b border-gray-100" data-oid="99_x:4z">
                                <span className="text-gray-600 block mb-2" data-oid="nj0g-pk">
                                    العنوان:
                                </span>
                                <span
                                    className="text-sm bg-gray-50 p-3 rounded-lg block"
                                    data-oid="xe.aynu"
                                >
                                    {orderDetails.address}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="yhzs577"
                            >
                                <span className="text-gray-600" data-oid="6m2t1.9">
                                    رقم الهاتف:
                                </span>
                                <span className="font-semibold" data-oid="v66y9l8">
                                    {orderDetails.phoneNumber}
                                </span>
                            </div>
                            {orderDetails.notes && (
                                <div className="py-2" data-oid="55:c9j4">
                                    <span className="text-gray-600 block mb-2" data-oid="w1efcba">
                                        ملاحظات:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid=":oj1jv1"
                                    >
                                        {orderDetails.notes}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6" data-oid="bayrpdg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4" data-oid="vhktxgs">
                        الخطوات التالية
                    </h3>
                    <div className="space-y-3" data-oid="yja3lh-">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="4nu3:b."
                        >
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="8w:pvs7"
                            >
                                1
                            </div>
                            <div data-oid="w7thyc_">
                                <p className="font-semibold text-blue-800" data-oid="uccityn">
                                    انتظار الموافقة
                                </p>
                                <p className="text-sm text-blue-600" data-oid="c1wk-cq">
                                    سيراجع مقدم الخدمة طلبك ويرد خلال دقائق
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="j50_qjw"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="lzlwjzo"
                            >
                                2
                            </div>
                            <div data-oid="7-i:5ub">
                                <p className="font-semibold text-gray-600" data-oid=".v0xvrp">
                                    تأكيد الموعد
                                </p>
                                <p className="text-sm text-gray-500" data-oid="e:w57er">
                                    سيتم تأكيد الموعد والتفاصيل النهائية
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid=".-.5ez6"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="-jg2-g."
                            >
                                3
                            </div>
                            <div data-oid="ov.helk">
                                <p className="font-semibold text-gray-600" data-oid="0d8_512">
                                    تنفيذ الخدمة
                                </p>
                                <p className="text-sm text-gray-500" data-oid="l2k4rfy">
                                    سيصل مقدم الخدمة في الموعد المحدد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6" data-oid="t3g20kg">
                    <div
                        className="flex items-center space-x-2 space-x-reverse mb-3"
                        data-oid="e7vc0l."
                    >
                        <span className="text-yellow-600" data-oid="vyerabc">
                            ⚠️
                        </span>
                        <h3 className="font-semibold text-yellow-800" data-oid="0whw7es">
                            ملاحظات مهمة
                        </h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-2" data-oid="y0n-x8n">
                        <li data-oid="uwc_lo4">
                            • يمكنك إلغاء الطلب مجاناً قبل موافقة مقدم الخدمة
                        </li>
                        <li data-oid="0m57aa3">• ستتلقى إشعارات فورية عن حالة طلبك</li>
                        <li data-oid="shr18g3">
                            • يمكنك التواصل مع مقدم الخدمة مباشرة عبر المحادثة
                        </li>
                        <li data-oid="eczl:su">• الدفع يتم بعد إنجاز الخدمة بنجاح</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3" data-oid="-e1iq4k">
                    <Link
                        href="/orders"
                        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-center block"
                        data-oid="8b4gtuu"
                    >
                        عرض جميع طلباتي
                    </Link>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-center block"
                        data-oid="t52up65"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="zg_b42h"></div>
        </div>
    );
}
