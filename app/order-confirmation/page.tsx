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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="hukll74">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                data-oid="f5a0y53"
            >
                <div className="max-w-sm mx-auto px-4 py-8" data-oid=".r1.n87">
                    <div className="text-center" data-oid="f7.5f_z">
                        <div
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="9p7sjqh"
                        >
                            <span className="text-4xl" data-oid="e34lk8z">
                                ✅
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2" data-oid="me:hdte">
                            تم تأكيد طلبك!
                        </h1>
                        <p className="text-white/90 text-sm" data-oid="rdjv8i-">
                            رقم الطلب: #{orderDetails.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="op5924.">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="ibhvyzk">
                    <div className="text-center mb-6" data-oid="u828fuk">
                        <div
                            className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            data-oid="cyxiqhb"
                        >
                            <span
                                className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                data-oid="ko5nb2g"
                            ></span>
                            في انتظار موافقة مقدم الخدمة
                        </div>
                        <p className="text-gray-600 text-sm" data-oid="mcj_x19">
                            سيتم إشعارك فور موافقة مقدم الخدمة على طلبك
                        </p>
                    </div>

                    {/* Provider Info */}
                    <div
                        className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl mb-4"
                        data-oid="k45:.o4"
                    >
                        <div className="text-3xl" data-oid="biker5a">
                            {orderDetails.providerAvatar}
                        </div>
                        <div className="flex-1" data-oid="75lkggg">
                            <h3 className="font-semibold text-gray-800" data-oid="2o-18e_">
                                {orderDetails.providerName}
                            </h3>
                            <p className="text-sm text-gray-600" data-oid="3kv34u2">
                                {orderDetails.serviceName}
                            </p>
                        </div>
                        <div className="text-right" data-oid="st:koih">
                            <p className="font-bold text-blue-600" data-oid="8hoctpl">
                                {orderDetails.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="-.94yp8">
                                المبلغ المتوقع
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3" data-oid="5devrpu">
                        <Link
                            href={`/chat/${orderDetails.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="l8vwvom"
                        >
                            <span data-oid="qbzuesr">💬</span>
                            <span data-oid="npkufej">تواصل</span>
                        </Link>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                            data-oid="0vh.9xv"
                        >
                            <span data-oid="1d_daeq">📋</span>
                            <span data-oid="_3x1tu3">التفاصيل</span>
                        </button>
                    </div>
                </div>

                {/* Order Details */}
                {showDetails && (
                    <div
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
                        data-oid="_x97o6q"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="e0zp.hw">
                            تفاصيل الطلب
                        </h3>

                        <div className="space-y-3" data-oid="_84vle3">
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="5bz3e_j"
                            >
                                <span className="text-gray-600" data-oid="ql52jgj">
                                    التاريخ:
                                </span>
                                <span className="font-semibold" data-oid="ioc-ck7">
                                    {orderDetails.scheduledDate}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="yicr2c6"
                            >
                                <span className="text-gray-600" data-oid=".bl-g5:">
                                    الوقت:
                                </span>
                                <span className="font-semibold" data-oid="g:mhb-8">
                                    {orderDetails.scheduledTime}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="7v:m958"
                            >
                                <span className="text-gray-600" data-oid="wc8lmo8">
                                    الوصول المتوقع:
                                </span>
                                <span className="font-semibold text-green-600" data-oid="2s4ei3y">
                                    {orderDetails.estimatedArrival}
                                </span>
                            </div>
                            <div className="py-2 border-b border-gray-100" data-oid="7okg5r-">
                                <span className="text-gray-600 block mb-2" data-oid="ojdjn55">
                                    العنوان:
                                </span>
                                <span
                                    className="text-sm bg-gray-50 p-3 rounded-lg block"
                                    data-oid="yd48k40"
                                >
                                    {orderDetails.address}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="0iqe736"
                            >
                                <span className="text-gray-600" data-oid="q01c9-n">
                                    رقم الهاتف:
                                </span>
                                <span className="font-semibold" data-oid="awr4dub">
                                    {orderDetails.phoneNumber}
                                </span>
                            </div>
                            {orderDetails.notes && (
                                <div className="py-2" data-oid="f.9vpah">
                                    <span className="text-gray-600 block mb-2" data-oid="o1et.5.">
                                        ملاحظات:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="ue7ing_"
                                    >
                                        {orderDetails.notes}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6" data-oid="r.60cou">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4" data-oid="jd:r1fi">
                        الخطوات التالية
                    </h3>
                    <div className="space-y-3" data-oid="j2ty76v">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="ucto.l0"
                        >
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="vy1hdy:"
                            >
                                1
                            </div>
                            <div data-oid="mz3hinw">
                                <p className="font-semibold text-blue-800" data-oid="s5mvmy-">
                                    انتظار الموافقة
                                </p>
                                <p className="text-sm text-blue-600" data-oid="1jpov.6">
                                    سيراجع مقدم الخدمة طلبك ويرد خلال دقائق
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="a7juejp"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="d0:napj"
                            >
                                2
                            </div>
                            <div data-oid="cbi8bv4">
                                <p className="font-semibold text-gray-600" data-oid="tghitf:">
                                    تأكيد الموعد
                                </p>
                                <p className="text-sm text-gray-500" data-oid="jhs4bqj">
                                    سيتم تأكيد الموعد والتفاصيل النهائية
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="818ssla"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="3aaexg5"
                            >
                                3
                            </div>
                            <div data-oid="1gayi9q">
                                <p className="font-semibold text-gray-600" data-oid="1:tlb.j">
                                    تنفيذ الخدمة
                                </p>
                                <p className="text-sm text-gray-500" data-oid="bkun:bw">
                                    سيصل مقدم الخدمة في الموعد المحدد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6" data-oid="v.dblv7">
                    <div
                        className="flex items-center space-x-2 space-x-reverse mb-3"
                        data-oid="cclxomk"
                    >
                        <span className="text-yellow-600" data-oid="97rgyj-">
                            ⚠️
                        </span>
                        <h3 className="font-semibold text-yellow-800" data-oid="8g7o92n">
                            ملاحظات مهمة
                        </h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-2" data-oid="-6kdola">
                        <li data-oid="451_v_f">
                            • يمكنك إلغاء الطلب مجاناً قبل موافقة مقدم الخدمة
                        </li>
                        <li data-oid="x9r1mr_">• ستتلقى إشعارات فورية عن حالة طلبك</li>
                        <li data-oid="qz98.b4">
                            • يمكنك التواصل مع مقدم الخدمة مباشرة عبر المحادثة
                        </li>
                        <li data-oid="or86sx1">• الدفع يتم بعد إنجاز الخدمة بنجاح</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3" data-oid="g-bk80e">
                    <Link
                        href="/orders"
                        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-center block"
                        data-oid=":ile_4u"
                    >
                        عرض جميع طلباتي
                    </Link>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-center block"
                        data-oid="-t4n9sl"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="i0vjjc-"></div>
        </div>
    );
}
