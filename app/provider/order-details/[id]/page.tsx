'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { OrderStatus } from '../../../../components/OrderStatus';

interface OrderDetails {
    id: number;
    service: string;
    customer: {
        name: string;
        phone: string;
        rating: number;
        avatar: string;
    };
    location: {
        address: string;
        coordinates: string;
        distance: string;
    };
    price: string;
    description: string;
    status: 'pending' | 'accepted' | 'in_progress' | 'on_way' | 'completed' | 'cancelled';
    createdAt: string;
    scheduledTime: string;
    estimatedDuration: string;
    urgent: boolean;
    notes?: string;
    images?: string[];
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
    const [order, setOrder] = useState<OrderDetails | null>(null);
    const [loading, setLoading] = useState(true);

    // Mock data - في التطبيق الحقيقي، ستأتي من API
    useEffect(() => {
        const mockOrder: OrderDetails = {
            id: parseInt(params.id),
            service: 'تنظيف المنزل',
            customer: {
                name: 'سارة أحمد',
                phone: '+966501234567',
                rating: 4.8,
                avatar: '👩‍💼',
            },
            location: {
                address:
                    'الرياض - حي النرجس، شارع الأمير محمد بن عبدالعزيز، مجمع النرجس السكني، البرج الثاني، الدور الخامس، شقة 502',
                coordinates: '24.7136° N, 46.6753° E',
                distance: '2.5 كم',
            },
            price: '45 ريال',
            description:
                'تنظيف شقة من غرفتين وصالة وحمامين ومطبخ. يشمل التنظيف العام للأرضيات والنوافذ والحمامات والمطبخ.',
            status: 'accepted',
            createdAt: '2024-01-15 14:30',
            scheduledTime: '2024-01-15 16:00',
            estimatedDuration: '3 ساعات',
            urgent: true,
            notes: 'يرجى إحضار مواد التنظيف الخاصة. يوجد حيوان أليف في المنزل (قطة).',
            images: ['🏠', '🧹', '🧽'],
        };

        setTimeout(() => {
            setOrder(mockOrder);
            setLoading(false);
        }, 500);
    }, [params.id]);

    const handleStatusUpdate = (newStatus: OrderDetails['status']) => {
        if (order) {
            setOrder({ ...order, status: newStatus });
        }
    };

    const handleCallCustomer = () => {
        if (order) {
            window.location.href = `tel:${order.customer.phone}`;
        }
    };

    const handleOpenMaps = () => {
        if (order) {
            const encodedAddress = encodeURIComponent(order.location.address);
            window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">جاري تحميل تفاصيل الطلب...</p>
                </div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
                <div className="text-center">
                    <div className="text-6xl mb-4">❌</div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">الطلب غير موجود</h2>
                    <p className="text-gray-600 mb-4">لم يتم العثور على الطلب المطلوب</p>
                    <Link
                        href="/provider/requests"
                        className="bg-blue-500 text-white px-6 py-2 rounded-xl"
                    >
                        العودة للطلبات
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/provider/requests" className="text-white">
                            <span className="text-2xl">←</span>
                        </Link>
                        <h1 className="text-xl font-bold">تفاصيل الطلب #{order.id}</h1>
                        <div className="w-8"></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <OrderStatus status={order.status} />
                        {order.urgent && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                عاجل
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10">
                {/* Service Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                {order.service}
                            </h2>
                            <p className="text-sm text-gray-600 mb-2">
                                تم الطلب: {order.createdAt}
                            </p>
                            <p className="text-sm text-gray-600">
                                الموعد المحدد: {order.scheduledTime}
                            </p>
                        </div>
                        <div className="text-left">
                            <p className="text-2xl font-bold text-green-600">{order.price}</p>
                            <p className="text-xs text-gray-500">
                                المدة المتوقعة: {order.estimatedDuration}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">وصف الخدمة:</h3>
                        <p className="text-sm text-gray-700">{order.description}</p>
                    </div>

                    {order.notes && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
                            <h3 className="font-semibold text-yellow-800 mb-2">ملاحظات مهمة:</h3>
                            <p className="text-sm text-yellow-700">{order.notes}</p>
                        </div>
                    )}
                </div>

                {/* Customer Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="font-bold text-gray-800 mb-4">معلومات العميل</h3>
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="text-4xl">{order.customer.avatar}</div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{order.customer.name}</h4>
                            <div className="flex items-center space-x-2 space-x-reverse mt-1">
                                <span className="text-yellow-500">⭐</span>
                                <span className="text-sm text-gray-600">
                                    {order.customer.rating}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{order.customer.phone}</p>
                        </div>
                        <button
                            onClick={handleCallCustomer}
                            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                        >
                            📞
                        </button>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="font-bold text-gray-800 mb-4">موقع الخدمة</h3>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3 space-x-reverse">
                            <span className="text-xl mt-1">📍</span>
                            <div className="flex-1">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {order.location.address}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>📏 المسافة: {order.location.distance}</span>
                            <span>🌍 {order.location.coordinates}</span>
                        </div>
                        <button
                            onClick={handleOpenMaps}
                            className="w-full bg-blue-100 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-200 transition-colors"
                        >
                            فتح في الخرائط 🗺️
                        </button>
                    </div>
                </div>

                {/* Progress Timeline */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="font-bold text-gray-800 mb-4">مراحل الطلب</h3>
                    <div className="space-y-4">
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['accepted', 'in_progress', 'on_way', 'completed'].includes(
                                    order.status,
                                )
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['accepted', 'in_progress', 'on_way', 'completed'].includes(
                                        order.status,
                                    )
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                            ></div>
                            <span className="text-sm">تم قبول الطلب</span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['in_progress', 'on_way', 'completed'].includes(order.status)
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['in_progress', 'on_way', 'completed'].includes(order.status)
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                            ></div>
                            <span className="text-sm">بدء تنفيذ الخدمة</span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['on_way', 'completed'].includes(order.status)
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['on_way', 'completed'].includes(order.status)
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                            ></div>
                            <span className="text-sm">في الطريق للموقع</span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                order.status === 'completed' ? 'text-green-600' : 'text-gray-400'
                            }`}
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    order.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                            ></div>
                            <span className="text-sm">اكتمال الخدمة</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-20">
                    <h3 className="font-bold text-gray-800 mb-4">إجراءات</h3>

                    {order.status === 'accepted' && (
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStatusUpdate('in_progress')}
                                className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                            >
                                بدء تنفيذ الخدمة 🚀
                            </button>
                            <div className="flex space-x-3 space-x-reverse">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'in_progress' && (
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStatusUpdate('on_way')}
                                className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                            >
                                في الطريق للموقع 🚗
                            </button>
                            <div className="flex space-x-3 space-x-reverse">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'on_way' && (
                        <div className="space-y-3">
                            <button
                                onClick={() => handleStatusUpdate('completed')}
                                className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                            >
                                إنهاء الخدمة ✅
                            </button>
                            <div className="flex space-x-3 space-x-reverse">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'completed' && (
                        <div className="text-center py-4">
                            <div className="text-6xl mb-4">🎉</div>
                            <h4 className="text-lg font-bold text-green-600 mb-2">
                                تم إنجاز الخدمة بنجاح!
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                شكراً لك على تقديم خدمة ممتازة
                            </p>
                            <Link
                                href="/provider/earnings"
                                className="bg-green-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                            >
                                عرض الأرباح 💰
                            </Link>
                        </div>
                    )}

                    {order.status === 'cancelled' && (
                        <div className="text-center py-4">
                            <div className="text-6xl mb-4">❌</div>
                            <h4 className="text-lg font-bold text-red-600 mb-2">تم إلغاء الطلب</h4>
                            <p className="text-sm text-gray-600">هذا الطلب لم يعد متاحاً</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="max-w-sm mx-auto px-4 py-3">
                    <div className="flex justify-around">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">🏠</span>
                            <span className="text-xs">الرئيسية</span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-green-600"
                        >
                            <span className="text-xl">📋</span>
                            <span className="text-xs font-semibold">الطلبات</span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💰</span>
                            <span className="text-xs">الأرباح</span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💬</span>
                            <span className="text-xs">الرسائل</span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">👤</span>
                            <span className="text-xs">الملف الشخصي</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
