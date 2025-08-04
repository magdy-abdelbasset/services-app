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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="_t-sl_t">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                data-oid="q9c:38q"
            >
                <div className="max-w-sm mx-auto px-4 py-8" data-oid="_cq-9et">
                    <div className="text-center" data-oid="5ukrmc_">
                        <div
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="yc6hleg"
                        >
                            <span className="text-4xl" data-oid="bhi3hkc">
                                ✅
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2" data-oid="_pg2--4">
                            تم تأكيد طلبك!
                        </h1>
                        <p className="text-white/90 text-sm" data-oid="uq5lbu8">
                            رقم الطلب: #{orderDetails.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="161fx6y">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="s4tpgku">
                    <div className="text-center mb-6" data-oid=":hm_6tx">
                        <div
                            className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            data-oid="_yf78hq"
                        >
                            <span
                                className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                data-oid="9kg10uw"
                            ></span>
                            في انتظار موافقة مقدم الخدمة
                        </div>
                        <p className="text-gray-600 text-sm" data-oid="7eg43ts">
                            سيتم إشعارك فور موافقة مقدم الخدمة على طلبك
                        </p>
                    </div>

                    {/* Provider Info */}
                    <div
                        className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl mb-4"
                        data-oid="3kg7y6f"
                    >
                        <div className="text-3xl" data-oid="ov3q.av">
                            {orderDetails.providerAvatar}
                        </div>
                        <div className="flex-1" data-oid="sinffee">
                            <h3 className="font-semibold text-gray-800" data-oid="x-lcmag">
                                {orderDetails.providerName}
                            </h3>
                            <p className="text-sm text-gray-600" data-oid="u0kpw7p">
                                {orderDetails.serviceName}
                            </p>
                        </div>
                        <div className="text-right" data-oid="84_3uaz">
                            <p className="font-bold text-blue-600" data-oid="p40zqny">
                                {orderDetails.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="kfyv0ge">
                                المبلغ المتوقع
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3" data-oid="p8z0h--">
                        <Link
                            href={`/chat/${orderDetails.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="_2b-o_f"
                        >
                            <span data-oid="8q0eeab">💬</span>
                            <span data-oid="aver4ue">تواصل</span>
                        </Link>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                            data-oid="2gx5a6b"
                        >
                            <span data-oid="c5y-xg:">📋</span>
                            <span data-oid="ngvqhed">التفاصيل</span>
                        </button>
                    </div>
                </div>

                {/* Order Details */}
                {showDetails && (
                    <div
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
                        data-oid="wm260d4"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="j..b9di">
                            تفاصيل الطلب
                        </h3>

                        <div className="space-y-3" data-oid="rqpceo1">
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="n:9.gd7"
                            >
                                <span className="text-gray-600" data-oid="xb1pqy4">
                                    التاريخ:
                                </span>
                                <span className="font-semibold" data-oid="lxz50g7">
                                    {orderDetails.scheduledDate}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="korb6k:"
                            >
                                <span className="text-gray-600" data-oid="3qkuu_m">
                                    الوقت:
                                </span>
                                <span className="font-semibold" data-oid="2rgq841">
                                    {orderDetails.scheduledTime}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="xdczcbd"
                            >
                                <span className="text-gray-600" data-oid=":2oa-7c">
                                    الوصول المتوقع:
                                </span>
                                <span className="font-semibold text-green-600" data-oid="ct:vnmk">
                                    {orderDetails.estimatedArrival}
                                </span>
                            </div>
                            <div className="py-2 border-b border-gray-100" data-oid="p.algri">
                                <span className="text-gray-600 block mb-2" data-oid="r-btr.g">
                                    العنوان:
                                </span>
                                <span
                                    className="text-sm bg-gray-50 p-3 rounded-lg block"
                                    data-oid=".kvizsc"
                                >
                                    {orderDetails.address}
                                </span>
                            </div>
                            <div
                                className="flex justify-between items-center py-2 border-b border-gray-100"
                                data-oid="q56zeyn"
                            >
                                <span className="text-gray-600" data-oid=":o0kk2l">
                                    رقم الهاتف:
                                </span>
                                <span className="font-semibold" data-oid="y4jtett">
                                    {orderDetails.phoneNumber}
                                </span>
                            </div>
                            {orderDetails.notes && (
                                <div className="py-2" data-oid="u21x6w9">
                                    <span className="text-gray-600 block mb-2" data-oid="_o3h5xv">
                                        ملاحظات:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="p2ty.rs"
                                    >
                                        {orderDetails.notes}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6" data-oid="clyflvv">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4" data-oid="e5uy2:d">
                        الخطوات التالية
                    </h3>
                    <div className="space-y-3" data-oid="60owdr8">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="2kppu_t"
                        >
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="pc:qu4c"
                            >
                                1
                            </div>
                            <div data-oid="xlv2efa">
                                <p className="font-semibold text-blue-800" data-oid="t5lct35">
                                    انتظار الموافقة
                                </p>
                                <p className="text-sm text-blue-600" data-oid="9d3gw3:">
                                    سيراجع مقدم الخدمة طلبك ويرد خلال دقائق
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="wigwkd6"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid="zfqh7vi"
                            >
                                2
                            </div>
                            <div data-oid="csgtue9">
                                <p className="font-semibold text-gray-600" data-oid="d6oneba">
                                    تأكيد الموعد
                                </p>
                                <p className="text-sm text-gray-500" data-oid="l4akdwi">
                                    سيتم تأكيد الموعد والتفاصيل النهائية
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="xza26bf"
                        >
                            <div
                                className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold"
                                data-oid=".y7x3h-"
                            >
                                3
                            </div>
                            <div data-oid="-v1nyum">
                                <p className="font-semibold text-gray-600" data-oid="vlm6yrn">
                                    تنفيذ الخدمة
                                </p>
                                <p className="text-sm text-gray-500" data-oid="dxe1grh">
                                    سيصل مقدم الخدمة في الموعد المحدد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6" data-oid=":6qx--9">
                    <div
                        className="flex items-center space-x-2 space-x-reverse mb-3"
                        data-oid="fepbto8"
                    >
                        <span className="text-yellow-600" data-oid="mpwuwpe">
                            ⚠️
                        </span>
                        <h3 className="font-semibold text-yellow-800" data-oid="k2_hk8x">
                            ملاحظات مهمة
                        </h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-2" data-oid="yz6ei:u">
                        <li data-oid="3wp4_e.">
                            • يمكنك إلغاء الطلب مجاناً قبل موافقة مقدم الخدمة
                        </li>
                        <li data-oid="4.2m87o">• ستتلقى إشعارات فورية عن حالة طلبك</li>
                        <li data-oid="rfrz16t">
                            • يمكنك التواصل مع مقدم الخدمة مباشرة عبر المحادثة
                        </li>
                        <li data-oid="7mcu5:f">• الدفع يتم بعد إنجاز الخدمة بنجاح</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3" data-oid="rp.njxc">
                    <Link
                        href="/orders"
                        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-center block"
                        data-oid="24-txxp"
                    >
                        عرض جميع طلباتي
                    </Link>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-center block"
                        data-oid="2jspzid"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="cacybow"></div>
        </div>
    );
}
