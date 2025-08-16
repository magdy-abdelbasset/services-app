'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface OrderDetail {
    id: number;
    customer: {
        name: string;
        phone: string;
        email: string;
        avatar?: string;
    };
    provider: {
        name: string;
        phone: string;
        email: string;
        avatar?: string;
        rating: number;
    };
    service: {
        name: string;
        category: string;
        description: string;
        price: number;
    };
    status: string;
    amount: number;
    date: string;
    time: string;
    location: {
        address: string;
        city: string;
        coordinates?: { lat: number; lng: number };
    };
    rating?: number;
    review?: string;
    paymentMethod: string;
    paymentStatus: string;
    createdAt: string;
    updatedAt: string;
    notes?: string;
    images?: string[];
    timeline: {
        status: string;
        timestamp: string;
        description: string;
    }[];
}

export default function OrderDetailPage() {
    const params = useParams();
    const router = useRouter();
    const orderId = params.id as string;

    // Mock data - في التطبيق الحقيقي، ستأتي من API
    const [order, setOrder] = useState<OrderDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // محاكاة تحميل البيانات من API
        const mockOrder: OrderDetail = {
            id: parseInt(orderId),
            customer: {
                name: 'أحمد محمد علي',
                phone: '+966501234567',
                email: 'ahmed@example.com',
                avatar: '/avatars/customer1.jpg',
            },
            provider: {
                name: 'فاطمة علي حسن',
                phone: '+966509876543',
                email: 'fatima@example.com',
                avatar: '/avatars/provider1.jpg',
                rating: 4.8,
            },
            service: {
                name: 'تنظيف المنزل الشامل',
                category: 'خدمات التنظيف',
                description: 'تنظيف شامل للمنزل يشمل جميع الغرف والحمامات والمطبخ',
                price: 150,
            },
            status: 'مكتمل',
            amount: 150,
            date: '2024-02-20',
            time: '14:30',
            location: {
                address: 'شارع الملك فهد، حي النخيل',
                city: 'الرياض',
                coordinates: { lat: 24.7136, lng: 46.6753 },
            },
            rating: 5,
            review: 'خدمة ممتازة، تم التنظيف بشكل مثالي وفي الوقت المحدد. أنصح بالتعامل مع هذا المقدم.',
            paymentMethod: 'بطاقة ائتمان',
            paymentStatus: 'مدفوع',
            createdAt: '2024-02-20T10:00:00Z',
            updatedAt: '2024-02-20T16:30:00Z',
            notes: 'يرجى التركيز على تنظيف المطبخ والحمامات',
            images: ['/orders/before1.jpg', '/orders/after1.jpg', '/orders/after2.jpg'],
            timeline: [
                {
                    status: 'تم إنشاء الطلب',
                    timestamp: '2024-02-20T10:00:00Z',
                    description: 'تم إنشاء الطلب من قبل العميل',
                },
                {
                    status: 'تم قبول الطلب',
                    timestamp: '2024-02-20T10:15:00Z',
                    description: 'تم قبول الطلب من قبل مقدم الخدمة',
                },
                {
                    status: 'في الطريق',
                    timestamp: '2024-02-20T14:00:00Z',
                    description: 'مقدم الخدمة في الطريق إلى الموقع',
                },
                {
                    status: 'بدء الخدمة',
                    timestamp: '2024-02-20T14:30:00Z',
                    description: 'تم بدء تقديم الخدمة',
                },
                {
                    status: 'مكتمل',
                    timestamp: '2024-02-20T16:30:00Z',
                    description: 'تم إكمال الخدمة بنجاح',
                },
            ],
        };

        setTimeout(() => {
            setOrder(mockOrder);
            setLoading(false);
        }, 1000);
    }, [orderId]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'مكتمل':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'جاري التنفيذ':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'في الانتظار':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'مؤكد':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'ملغي':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'مكتمل':
                return '✅';
            case 'جاري التنفيذ':
                return '🔄';
            case 'في الانتظار':
                return '⏳';
            case 'مؤكد':
                return '✔️';
            case 'ملغي':
                return '❌';
            default:
                return '❓';
        }
    };

    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    if (loading) {
        return (
            <div className="p-6">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="p-6">
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">❌</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">الطلب غير موجود</h2>
                    <p className="text-gray-600 mb-6">لم يتم العثور على الطلب المطلوب</p>
                    <Link
                        href="/admin/orders"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        العودة إلى قائمة الطلبات
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            تفاصيل الطلب #{order.id}
                        </h1>
                        <p className="text-gray-600">
                            تم الإنشاء في {formatDateTime(order.createdAt)}
                        </p>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}
                        >
                            <span className="ml-2">{getStatusIcon(order.status)}</span>
                            {order.status}
                        </div>
                        <Link
                            href="/admin/orders"
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                        >
                            العودة
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Service Details */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">تفاصيل الخدمة</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    اسم الخدمة
                                </label>
                                <p className="text-gray-900">{order.service.name}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    الفئة
                                </label>
                                <p className="text-gray-900">{order.service.category}</p>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    الوصف
                                </label>
                                <p className="text-gray-900">{order.service.description}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    السعر
                                </label>
                                <p className="text-gray-900 font-semibold">
                                    {order.service.price} ريال
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    المبلغ الإجمالي
                                </label>
                                <p className="text-gray-900 font-semibold">{order.amount} ريال</p>
                            </div>
                        </div>
                    </div>

                    {/* Customer & Provider Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Customer */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                معلومات العميل
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-3">
                                        <span className="text-white font-semibold">
                                            {order.customer.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {order.customer.name}
                                        </p>
                                        <p className="text-sm text-gray-600">عميل</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        رقم الهاتف
                                    </label>
                                    <p className="text-gray-900">{order.customer.phone}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        البريد الإلكتروني
                                    </label>
                                    <p className="text-gray-900">{order.customer.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Provider */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                معلومات مقدم الخدمة
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center ml-3">
                                        <span className="text-white font-semibold">
                                            {order.provider.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {order.provider.name}
                                        </p>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500 ml-1">⭐</span>
                                            <span className="text-sm text-gray-600">
                                                {order.provider.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        رقم الهاتف
                                    </label>
                                    <p className="text-gray-900">{order.provider.phone}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        البريد الإلكتروني
                                    </label>
                                    <p className="text-gray-900">{order.provider.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location & Schedule */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">الموقع والموعد</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    العنوان
                                </label>
                                <p className="text-gray-900">{order.location.address}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    المدينة
                                </label>
                                <p className="text-gray-900">{order.location.city}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    التاريخ
                                </label>
                                <p className="text-gray-900">{order.date}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    الوقت
                                </label>
                                <p className="text-gray-900">{order.time}</p>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    {order.notes && (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                ملاحظات إضافية
                            </h3>
                            <p className="text-gray-900">{order.notes}</p>
                        </div>
                    )}

                    {/* Review & Rating */}
                    {order.rating && (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                التقييم والمراجعة
                            </h3>
                            <div className="flex items-center mb-3">
                                <div className="flex items-center ml-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-lg ${
                                                i < order.rating!
                                                    ? 'text-yellow-500'
                                                    : 'text-gray-300'
                                            }`}
                                        >
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">({order.rating} من 5)</span>
                            </div>
                            {order.review && (
                                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">
                                    {order.review}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Payment Info */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">معلومات الدفع</h3>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    طريقة الدفع
                                </label>
                                <p className="text-gray-900">{order.paymentMethod}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    حالة الدفع
                                </label>
                                <span
                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        order.paymentStatus === 'مدفوع'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}
                                >
                                    {order.paymentStatus}
                                </span>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    المبلغ الإجمالي
                                </label>
                                <p className="text-xl font-bold text-gray-900">
                                    {order.amount} ريال
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">تتبع الطلب</h3>
                        <div className="space-y-4">
                            {order.timeline.map((event, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ml-3">
                                        <span className="text-white text-xs font-semibold">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">{event.status}</p>
                                        <p className="text-sm text-gray-600">{event.description}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {formatDateTime(event.timestamp)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">الإجراءات</h3>
                        <div className="space-y-3">
                            <Link
                                href={`/admin/orders/${order.id}/edit`}
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-center block"
                            >
                                تعديل الطلب
                            </Link>
                            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                                إرسال رسالة
                            </button>
                            {order.status !== 'ملغي' && order.status !== 'مكتمل' && (
                                <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                                    إلغاء الطلب
                                </button>
                            )}
                            <button className="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors">
                                طباعة التفاصيل
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
