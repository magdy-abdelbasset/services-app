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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="yxl-dx4">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                data-oid="gc-qppv"
            >
                <div className="max-w-sm mx-auto px-4 py-8" data-oid="a-s1y6k">
                    <div className="text-center" data-oid="ood7fko">
                        <div
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="on4u5b2"
                        >
                            <span className="text-4xl" data-oid="bjqry46">
                                ✅
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2" data-oid="4bx1xna">
                            تم تأكيد طلبك!
                        </h1>
                        <p className="text-white/90 text-sm" data-oid="90-tcrg">
                            رقم الطلب: #{orderDetails.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="bwkko-3">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="oezxo9g">
                    <div className="text-center mb-6" data-oid="p71-lv2">
                        <div
                            className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            data-oid="a3:.r4:"
                        >
                            <span
                                className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                data-oid="2i7q5.p"
                            ></span>
                            في انتظار موافقة مقدم الخدمة
                        </div>
                        <p className="text-gray-600 text-sm" data-oid="g6b80ul">
                            سيتم إشعارك فور موافقة مقدم الخدمة على طلبك
                        </p>
                    </div>

                    {/* Provider Info */}
                    <div
                        className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl mb-4"
                        data-oid="f46syqd"
                    >
                        <div className="text-3xl" data-oid="rr.67g1">
                            {orderDetails.providerAvatar}
                        </div>
                        <div className="flex-1" data-oid="92lxg5a">
                            <h3 className="font-semibold text-gray-800" data-oid="y7cmbwl">
                                {orderDetails.providerName}
                            </h3>
                            <p className="text-sm text-gray-600" data-oid="bxk4lzm">
                                {orderDetails.serviceName}
                            </p>
                        </div>
                        <div className="text-right" data-oid="ojd695u">
                            <p className="font-bold text-blue-600" data-oid="tu9imra">
                                {orderDetails.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="t37dzw5">
                                المبلغ المتوقع
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3" data-oid="aw80av.">
                        <Link
                            href={`/chat/${orderDetails.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="2enbbxl"
                        >
                            <span data-oid="v05o9xk">💬</span>
                            <span data-oid="s9r7ctc">تواصل</span>
                        </Link>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                            data-oid="zwr56vk"
                        >
                            <span data-oid="o5--s_e">📋</span>
                            <span data-oid="esqxz4b">التفاصيل</span>
                        </button>
                    </div>
                </div>

                {/* Order Details */}
                {showDetails && (
                    <div
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
                        data-oid="tg8fdsq"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="yrdqn3_">
                            تفاصيل الطلب
                        </h3>

                        <div className="space-y-3" data-oid="5yvepfd">
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="3bebxuc"
                            >
                                <span className="text-gray-600" data-oid="_wcbo_o">
                                    التاريخ:
                                </span>
                                <span className="font-semibold" data-oid="54m1okv">
                                    {orderDetails.scheduledDate}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="56bl5v0"
                            >
                                <span className="text-gray-600" data-oid="fqy1z0m">
                                    الوقت:
                                </span>
                                <span className="font-semibold" data-oid=".29p45l">
                                    {orderDetails.scheduledTime}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="z8.0eff"
                            >
                                <span className="text-gray-600" data-oid="lbjfx__">
                                    الوصول المتوقع:
                                </span>
                                <span className="font-semibold text-green-600" data-oid="w9:h39c">
                                    {orderDetails.estimatedArrival}
                                </span>
                            </div>
                            <div className="py-2 border-b border-gray-100" data-oid="4:h1k7f">
                                <span className="text-gray-600 block mb-2" data-oid="arfcyn0">
                                    العنوان:
                                </span>
                                <span
                                    className="text-sm bg-gray-50 p-3 rounded-lg block"
                                    data-oid="hfn:i0n"
                                >
                                    {orderDetails.address}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="e:9kohp"
                            >
                                <span className="text-gray-600" data-oid="l63wowl">
                                    رقم الهاتف:
                                </span>
                                <span className="font-semibold" data-oid="u17z791">
                                    {orderDetails.phoneNumber}
                                </span>
                            </div>
                            {orderDetails.notes && (
                                <div className="py-2" data-oid=".bkv9xe">
                                    <span className="text-gray-600 block mb-2" data-oid="vehubyi">
                                        ملاحظات:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="i55k8rd"
                                    >
                                        {orderDetails.notes}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6" data-oid=".jnmfle">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4" data-oid="7pn-t6v">
                        الخطوات التالية
                    </h3>
                    <div className="space-y-3" data-oid="6vj.4g-">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="0gwl0me"
                        >
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="xfo8o29"
                            >
                                1
                            </div>
                            <div data-oid="7s9z06o">
                                <p className="font-semibold text-blue-800" data-oid="ap4n9.m">
                                    انتظار الموافقة
                                </p>
                                <p className="text-sm text-blue-600" data-oid="tj0gd94">
                                    سيراجع مقدم الخدمة طلبك ويرد خلال دقائق
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="nwl77jb"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="3l1x8_l"
                            >
                                2
                            </div>
                            <div data-oid="r:5qdg7">
                                <p className="font-semibold text-gray-600" data-oid="ga8yla.">
                                    تأكيد الموعد
                                </p>
                                <p className="text-sm text-gray-500" data-oid="2xq2q8t">
                                    سيتم تأكيد الموعد والتفاصيل النهائية
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="9j49.2v"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="60uf9g4"
                            >
                                3
                            </div>
                            <div data-oid="-8afowo">
                                <p className="font-semibold text-gray-600" data-oid="4:0:5_j">
                                    تنفيذ الخدمة
                                </p>
                                <p className="text-sm text-gray-500" data-oid="4-igb1s">
                                    سيصل مقدم الخدمة في الموعد المحدد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6" data-oid="z-5h3bd">
                    <div
                        className="flex items-center space-x-2 space-x-reverse mb-3"
                        data-oid="8c74udd"
                    >
                        <span className="text-yellow-600" data-oid="f.uv1dm">
                            ⚠️
                        </span>
                        <h3 className="font-semibold text-yellow-800" data-oid="74keuyb">
                            ملاحظات مهمة
                        </h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-2" data-oid="wv8lc2a">
                        <li data-oid="90r92kt">
                            • يمكنك إلغاء الطلب مجاناً قبل موافقة مقدم الخدمة
                        </li>
                        <li data-oid="y9bhhc_">• ستتلقى إشعارات فورية عن حالة طلبك</li>
                        <li data-oid="4aqt61q">
                            • يمكنك التواصل مع مقدم الخدمة مباشرة عبر المحادثة
                        </li>
                        <li data-oid="u_64jbp">• الدفع يتم بعد إنجاز الخدمة بنجاح</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3" data-oid="2b8q49o">
                    <Link
                        href="/orders"
                        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-center block"
                        data-oid="mmgm-r3"
                    >
                        عرض جميع طلباتي
                    </Link>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-center block"
                        data-oid="ry0ktf7"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="201zzw-"></div>
        </div>
    );
}
