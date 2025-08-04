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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="bl.zecy">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                data-oid=":0.yty1"
            >
                <div className="max-w-sm mx-auto px-4 py-8" data-oid="brifa5g">
                    <div className="text-center" data-oid="7ss96ou">
                        <div
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="1k3mxwz"
                        >
                            <span className="text-4xl" data-oid="pwj0-9x">
                                ✅
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2" data-oid="s0ofh7o">
                            تم تأكيد طلبك!
                        </h1>
                        <p className="text-white/90 text-sm" data-oid="le9.n:i">
                            رقم الطلب: #{orderDetails.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="hlt6vut">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="dvs8h2a">
                    <div className="text-center mb-6" data-oid="ixgu4m9">
                        <div
                            className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            data-oid="_fjq-lh"
                        >
                            <span
                                className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                data-oid="dy5ec:l"
                            ></span>
                            في انتظار موافقة مقدم الخدمة
                        </div>
                        <p className="text-gray-600 text-sm" data-oid=":t31riw">
                            سيتم إشعارك فور موافقة مقدم الخدمة على طلبك
                        </p>
                    </div>

                    {/* Provider Info */}
                    <div
                        className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl mb-4"
                        data-oid="c8glrm_"
                    >
                        <div className="text-3xl" data-oid="be8yrl1">
                            {orderDetails.providerAvatar}
                        </div>
                        <div className="flex-1" data-oid="qugus05">
                            <h3 className="font-semibold text-gray-800" data-oid="xylot4c">
                                {orderDetails.providerName}
                            </h3>
                            <p className="text-sm text-gray-600" data-oid="n1a44vp">
                                {orderDetails.serviceName}
                            </p>
                        </div>
                        <div className="text-right" data-oid="2t-hixa">
                            <p className="font-bold text-blue-600" data-oid="cxr.lx1">
                                {orderDetails.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="hc4tdo9">
                                المبلغ المتوقع
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3" data-oid="v22s:_h">
                        <Link
                            href={`/chat/${orderDetails.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="ouj3dce"
                        >
                            <span data-oid="3t3q-f6">💬</span>
                            <span data-oid=":yonk_m">تواصل</span>
                        </Link>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                            data-oid="c:fcuvk"
                        >
                            <span data-oid="w5qqhn-">📋</span>
                            <span data-oid="_p9f7tm">التفاصيل</span>
                        </button>
                    </div>
                </div>

                {/* Order Details */}
                {showDetails && (
                    <div
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
                        data-oid=":o5z1-4"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="gdtswz.">
                            تفاصيل الطلب
                        </h3>

                        <div className="space-y-3" data-oid="cxys9n1">
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="pnnw8s3"
                            >
                                <span className="text-gray-600" data-oid="z0o81xu">
                                    التاريخ:
                                </span>
                                <span className="font-semibold" data-oid="8vro796">
                                    {orderDetails.scheduledDate}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="cdl6z1q"
                            >
                                <span className="text-gray-600" data-oid="-14w08w">
                                    الوقت:
                                </span>
                                <span className="font-semibold" data-oid="cbp0qq6">
                                    {orderDetails.scheduledTime}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="8yms3ea"
                            >
                                <span className="text-gray-600" data-oid="2n8s0sh">
                                    الوصول المتوقع:
                                </span>
                                <span className="font-semibold text-green-600" data-oid="gizk2-1">
                                    {orderDetails.estimatedArrival}
                                </span>
                            </div>
                            <div className="py-2 border-b border-gray-100" data-oid="_w9jjy3">
                                <span className="text-gray-600 block mb-2" data-oid="ealif9l">
                                    العنوان:
                                </span>
                                <span
                                    className="text-sm bg-gray-50 p-3 rounded-lg block"
                                    data-oid="4epp8bn"
                                >
                                    {orderDetails.address}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="ej8p-3h"
                            >
                                <span className="text-gray-600" data-oid="bzy:8:g">
                                    رقم الهاتف:
                                </span>
                                <span className="font-semibold" data-oid="ha_6aao">
                                    {orderDetails.phoneNumber}
                                </span>
                            </div>
                            {orderDetails.notes && (
                                <div className="py-2" data-oid="zbts4lk">
                                    <span className="text-gray-600 block mb-2" data-oid="se8a8ci">
                                        ملاحظات:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="qgpgji7"
                                    >
                                        {orderDetails.notes}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6" data-oid="rs3dren">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4" data-oid="2weopy2">
                        الخطوات التالية
                    </h3>
                    <div className="space-y-3" data-oid="b.eyj2w">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="teiq3e."
                        >
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="eo:hgw8"
                            >
                                1
                            </div>
                            <div data-oid="ytyc0fx">
                                <p className="font-semibold text-blue-800" data-oid="lxs_2iu">
                                    انتظار الموافقة
                                </p>
                                <p className="text-sm text-blue-600" data-oid="8ha67rx">
                                    سيراجع مقدم الخدمة طلبك ويرد خلال دقائق
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="k6_f1o7"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="bi_ghot"
                            >
                                2
                            </div>
                            <div data-oid="8zf-cbj">
                                <p className="font-semibold text-gray-600" data-oid="sfz3qnx">
                                    تأكيد الموعد
                                </p>
                                <p className="text-sm text-gray-500" data-oid="gwk0995">
                                    سيتم تأكيد الموعد والتفاصيل النهائية
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="ft8wnt-"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="sliwsuz"
                            >
                                3
                            </div>
                            <div data-oid="bjl_a94">
                                <p className="font-semibold text-gray-600" data-oid="e447s0n">
                                    تنفيذ الخدمة
                                </p>
                                <p className="text-sm text-gray-500" data-oid="52llpl6">
                                    سيصل مقدم الخدمة في الموعد المحدد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6" data-oid="c--6dbu">
                    <div
                        className="flex items-center space-x-2 space-x-reverse mb-3"
                        data-oid="ad9v1.9"
                    >
                        <span className="text-yellow-600" data-oid="547e0mc">
                            ⚠️
                        </span>
                        <h3 className="font-semibold text-yellow-800" data-oid="q6.o8w4">
                            ملاحظات مهمة
                        </h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-2" data-oid="dh5enx_">
                        <li data-oid="u-wugg.">
                            • يمكنك إلغاء الطلب مجاناً قبل موافقة مقدم الخدمة
                        </li>
                        <li data-oid="f_f1sa4">• ستتلقى إشعارات فورية عن حالة طلبك</li>
                        <li data-oid="a2r8wp-">
                            • يمكنك التواصل مع مقدم الخدمة مباشرة عبر المحادثة
                        </li>
                        <li data-oid="5z_cff.">• الدفع يتم بعد إنجاز الخدمة بنجاح</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3" data-oid="z_whyyr">
                    <Link
                        href="/orders"
                        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-center block"
                        data-oid="s0y53n:"
                    >
                        عرض جميع طلباتي
                    </Link>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-center block"
                        data-oid="a:ju1wh"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="spi7ily"></div>
        </div>
    );
}
