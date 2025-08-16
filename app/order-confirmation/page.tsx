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
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-8">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl">✅</span>
                        </div>
                        <h1 className="text-2xl font-bold mb-2">تم تأكيد طلبك!</h1>
                        <p className="text-white/90 text-sm">رقم الطلب: #{orderDetails.id}</p>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                            في انتظار موافقة مقدم الخدمة
                        </div>
                        <p className="text-gray-600 text-sm">
                            سيتم إشعارك فور موافقة مقدم الخدمة على طلبك
                        </p>
                    </div>

                    {/* Provider Info */}
                    <div className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl mb-4">
                        <div className="text-3xl">{orderDetails.providerAvatar}</div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">
                                {orderDetails.providerName}
                            </h3>
                            <p className="text-sm text-gray-600">{orderDetails.serviceName}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-blue-600">{orderDetails.price}</p>
                            <p className="text-xs text-gray-500">المبلغ المتوقع</p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href={`/chat/${orderDetails.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                        >
                            <span>💬</span>
                            <span>تواصل</span>
                        </Link>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                        >
                            <span>📋</span>
                            <span>التفاصيل</span>
                        </button>
                    </div>
                </div>

                {/* Order Details */}
                {showDetails && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">تفاصيل الطلب</h3>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">التاريخ:</span>
                                <span className="font-semibold">{orderDetails.scheduledDate}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">الوقت:</span>
                                <span className="font-semibold">{orderDetails.scheduledTime}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">الوصول المتوقع:</span>
                                <span className="font-semibold text-green-600">
                                    {orderDetails.estimatedArrival}
                                </span>
                            </div>
                            <div className="py-2 border-b border-gray-100">
                                <span className="text-gray-600 block mb-2">العنوان:</span>
                                <span className="text-sm bg-gray-50 p-3 rounded-lg block">
                                    {orderDetails.address}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">رقم الهاتف:</span>
                                <span className="font-semibold">{orderDetails.phoneNumber}</span>
                            </div>
                            {orderDetails.notes && (
                                <div className="py-2">
                                    <span className="text-gray-600 block mb-2">ملاحظات:</span>
                                    <span className="text-sm bg-gray-50 p-3 rounded-lg block">
                                        {orderDetails.notes}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">الخطوات التالية</h3>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3 space-x-reverse">
                            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                1
                            </div>
                            <div>
                                <p className="font-semibold text-blue-800">انتظار الموافقة</p>
                                <p className="text-sm text-blue-600">
                                    سيراجع مقدم الخدمة طلبك ويرد خلال دقائق
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 space-x-reverse">
                            <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                2
                            </div>
                            <div>
                                <p className="font-semibold text-gray-600">تأكيد الموعد</p>
                                <p className="text-sm text-gray-500">
                                    سيتم تأكيد الموعد والتفاصيل النهائية
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 space-x-reverse">
                            <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                3
                            </div>
                            <div>
                                <p className="font-semibold text-gray-600">تنفيذ الخدمة</p>
                                <p className="text-sm text-gray-500">
                                    سيصل مقدم الخدمة في الموعد المحدد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-center space-x-2 space-x-reverse mb-3">
                        <span className="text-yellow-600">⚠️</span>
                        <h3 className="font-semibold text-yellow-800">ملاحظات مهمة</h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-2">
                        <li>• يمكنك إلغاء الطلب مجاناً قبل موافقة مقدم الخدمة</li>
                        <li>• ستتلقى إشعارات فورية عن حالة طلبك</li>
                        <li>• يمكنك التواصل مع مقدم الخدمة مباشرة عبر المحادثة</li>
                        <li>• الدفع يتم بعد إنجاز الخدمة بنجاح</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <Link
                        href="/orders"
                        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold text-center block"
                    >
                        عرض جميع طلباتي
                    </Link>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold text-center block"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
