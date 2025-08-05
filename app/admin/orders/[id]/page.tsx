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
            <div className="p-6" data-oid="7v7q6s8">
                <div className="animate-pulse" data-oid="vh68pvs">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4" data-oid=":30ryqe"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" data-oid="hceh:xg"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="6rtnh5y">
                        <div className="lg:col-span-2 space-y-6" data-oid="0oyzta8">
                            <div className="bg-white rounded-lg shadow p-6" data-oid="ykru.hc">
                                <div
                                    className="h-6 bg-gray-200 rounded w-1/3 mb-4"
                                    data-oid="77.2l6e"
                                ></div>
                                <div className="space-y-3" data-oid="3.:i1em">
                                    <div
                                        className="h-4 bg-gray-200 rounded"
                                        data-oid="57a7_to"
                                    ></div>
                                    <div
                                        className="h-4 bg-gray-200 rounded w-3/4"
                                        data-oid="_y.i8on"
                                    ></div>
                                    <div
                                        className="h-4 bg-gray-200 rounded w-1/2"
                                        data-oid="vl-y1ez"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6" data-oid="io7pz9s">
                            <div className="bg-white rounded-lg shadow p-6" data-oid="22vbbar">
                                <div
                                    className="h-6 bg-gray-200 rounded w-1/2 mb-4"
                                    data-oid="_8cpgx8"
                                ></div>
                                <div className="space-y-3" data-oid="e39p_9f">
                                    <div
                                        className="h-4 bg-gray-200 rounded"
                                        data-oid="t9diaef"
                                    ></div>
                                    <div
                                        className="h-4 bg-gray-200 rounded w-2/3"
                                        data-oid="noun3_e"
                                    ></div>
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
            <div className="p-6" data-oid="zptzq28">
                <div className="text-center py-12" data-oid="6l8kf54">
                    <div className="text-6xl mb-4" data-oid="2obmbsi">
                        ❌
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2" data-oid="-nutfpy">
                        الطلب غير موجود
                    </h2>
                    <p className="text-gray-600 mb-6" data-oid="ypeesu0">
                        لم يتم العثور على الطلب المطلوب
                    </p>
                    <Link
                        href="/admin/orders"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        data-oid="x9gx4de"
                    >
                        العودة إلى قائمة الطلبات
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6" data-oid="0zlajvf">
            {/* Header */}
            <div className="mb-6" data-oid="r__ktw:">
                <div className="flex items-center justify-between mb-4" data-oid="0vm1ff6">
                    <div data-oid="o6xqe60">
                        <h1 className="text-2xl font-bold text-gray-900" data-oid="qxqyqx8">
                            تفاصيل الطلب #{order.id}
                        </h1>
                        <p className="text-gray-600" data-oid="t_typ8_">
                            تم الإنشاء في {formatDateTime(order.createdAt)}
                        </p>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="zzaprj2">
                        <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}
                            data-oid="yhhb974"
                        >
                            <span className="ml-2" data-oid="uojhnm0">
                                {getStatusIcon(order.status)}
                            </span>
                            {order.status}
                        </div>
                        <Link
                            href="/admin/orders"
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                            data-oid="5gs8:yg"
                        >
                            العودة
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="s.b6zwf">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6" data-oid="wg:z_g4">
                    {/* Service Details */}
                    <div className="bg-white rounded-lg shadow p-6" data-oid="zheejru">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="ucqeqp8">
                            تفاصيل الخدمة
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="kwn121p">
                            <div data-oid="y4e1b7a">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="izgqzha"
                                >
                                    اسم الخدمة
                                </label>
                                <p className="text-gray-900" data-oid="i0h-mlg">
                                    {order.service.name}
                                </p>
                            </div>
                            <div data-oid="u-zknwu">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="e-viad6"
                                >
                                    الفئة
                                </label>
                                <p className="text-gray-900" data-oid="-:5e0f3">
                                    {order.service.category}
                                </p>
                            </div>
                            <div className="md:col-span-2" data-oid="f_ugzfi">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="c46i86t"
                                >
                                    الوصف
                                </label>
                                <p className="text-gray-900" data-oid="9j0q3xt">
                                    {order.service.description}
                                </p>
                            </div>
                            <div data-oid=".db68sr">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="mdznw.r"
                                >
                                    السعر
                                </label>
                                <p className="text-gray-900 font-semibold" data-oid="r14xx3f">
                                    {order.service.price} ريال
                                </p>
                            </div>
                            <div data-oid="38y00dn">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="9eeqy7x"
                                >
                                    المبلغ الإجمالي
                                </label>
                                <p className="text-gray-900 font-semibold" data-oid=".uwp41i">
                                    {order.amount} ريال
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Customer & Provider Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="h_78jvj">
                        {/* Customer */}
                        <div className="bg-white rounded-lg shadow p-6" data-oid="flbkpe.">
                            <h3
                                className="text-lg font-semibold text-gray-900 mb-4"
                                data-oid="-1a9oly"
                            >
                                معلومات العميل
                            </h3>
                            <div className="space-y-3" data-oid="oo4syrd">
                                <div className="flex items-center" data-oid="ecye2v4">
                                    <div
                                        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-3"
                                        data-oid="uwi-0nu"
                                    >
                                        <span
                                            className="text-white font-semibold"
                                            data-oid="bvaxgte"
                                        >
                                            {order.customer.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="m6i_1-x">
                                        <p className="font-medium text-gray-900" data-oid="rfza04f">
                                            {order.customer.name}
                                        </p>
                                        <p className="text-sm text-gray-600" data-oid="ra0c842">
                                            عميل
                                        </p>
                                    </div>
                                </div>
                                <div data-oid="mp7rvjb">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                        data-oid="o9ho3a4"
                                    >
                                        رقم الهاتف
                                    </label>
                                    <p className="text-gray-900" data-oid="4en:gex">
                                        {order.customer.phone}
                                    </p>
                                </div>
                                <div data-oid="kw:cp7l">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                        data-oid=".y-unm8"
                                    >
                                        البريد الإلكتروني
                                    </label>
                                    <p className="text-gray-900" data-oid="k2yangk">
                                        {order.customer.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Provider */}
                        <div className="bg-white rounded-lg shadow p-6" data-oid="p0.oaiy">
                            <h3
                                className="text-lg font-semibold text-gray-900 mb-4"
                                data-oid="hl9qjac"
                            >
                                معلومات مقدم الخدمة
                            </h3>
                            <div className="space-y-3" data-oid="tlp60f1">
                                <div className="flex items-center" data-oid="0b.0d-y">
                                    <div
                                        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center ml-3"
                                        data-oid="6:bn6cp"
                                    >
                                        <span
                                            className="text-white font-semibold"
                                            data-oid="0jugnvf"
                                        >
                                            {order.provider.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="p3w4.j1">
                                        <p className="font-medium text-gray-900" data-oid="nqmfz:e">
                                            {order.provider.name}
                                        </p>
                                        <div className="flex items-center" data-oid=":mjevuj">
                                            <span
                                                className="text-yellow-500 ml-1"
                                                data-oid="8p43x1l"
                                            >
                                                ⭐
                                            </span>
                                            <span
                                                className="text-sm text-gray-600"
                                                data-oid="w0luw7."
                                            >
                                                {order.provider.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div data-oid="to41iwi">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                        data-oid="jhy4rpz"
                                    >
                                        رقم الهاتف
                                    </label>
                                    <p className="text-gray-900" data-oid="zltrslk">
                                        {order.provider.phone}
                                    </p>
                                </div>
                                <div data-oid="mufgczb">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                        data-oid="xg3.sgz"
                                    >
                                        البريد الإلكتروني
                                    </label>
                                    <p className="text-gray-900" data-oid="rmpl4jw">
                                        {order.provider.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location & Schedule */}
                    <div className="bg-white rounded-lg shadow p-6" data-oid="cvsia9g">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid=":i2g__2">
                            الموقع والموعد
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="d_fuh-g">
                            <div data-oid="_xgj-.a">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid=":r2tqup"
                                >
                                    العنوان
                                </label>
                                <p className="text-gray-900" data-oid="k829all">
                                    {order.location.address}
                                </p>
                            </div>
                            <div data-oid="4xz50xf">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="ejw63r0"
                                >
                                    المدينة
                                </label>
                                <p className="text-gray-900" data-oid="-:0t5b4">
                                    {order.location.city}
                                </p>
                            </div>
                            <div data-oid="vew6z5k">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="mav6y9g"
                                >
                                    التاريخ
                                </label>
                                <p className="text-gray-900" data-oid="bnt_kva">
                                    {order.date}
                                </p>
                            </div>
                            <div data-oid="jti9z0y">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="l-u:lkm"
                                >
                                    الوقت
                                </label>
                                <p className="text-gray-900" data-oid="uk3._y_">
                                    {order.time}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    {order.notes && (
                        <div className="bg-white rounded-lg shadow p-6" data-oid="5znqfxp">
                            <h3
                                className="text-lg font-semibold text-gray-900 mb-4"
                                data-oid="a7876j7"
                            >
                                ملاحظات إضافية
                            </h3>
                            <p className="text-gray-900" data-oid="1filgi1">
                                {order.notes}
                            </p>
                        </div>
                    )}

                    {/* Review & Rating */}
                    {order.rating && (
                        <div className="bg-white rounded-lg shadow p-6" data-oid="i5zjzua">
                            <h3
                                className="text-lg font-semibold text-gray-900 mb-4"
                                data-oid="roxwg--"
                            >
                                التقييم والمراجعة
                            </h3>
                            <div className="flex items-center mb-3" data-oid="6rcu3g.">
                                <div className="flex items-center ml-3" data-oid="cq2.6tw">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-lg ${
                                                i < order.rating!
                                                    ? 'text-yellow-500'
                                                    : 'text-gray-300'
                                            }`}
                                            data-oid="ggkgc0z"
                                        >
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600" data-oid=".7kuhtk">
                                    ({order.rating} من 5)
                                </span>
                            </div>
                            {order.review && (
                                <p
                                    className="text-gray-900 bg-gray-50 p-3 rounded-md"
                                    data-oid="-8bj0ui"
                                >
                                    {order.review}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6" data-oid="i2tvnw2">
                    {/* Payment Info */}
                    <div className="bg-white rounded-lg shadow p-6" data-oid="1smho_7">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="xjq:g-i">
                            معلومات الدفع
                        </h3>
                        <div className="space-y-3" data-oid="0bi4moj">
                            <div data-oid="muph46.">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="mqx.n3t"
                                >
                                    طريقة الدفع
                                </label>
                                <p className="text-gray-900" data-oid="kes37u4">
                                    {order.paymentMethod}
                                </p>
                            </div>
                            <div data-oid="0qs1nx7">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="47bwt.n"
                                >
                                    حالة الدفع
                                </label>
                                <span
                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        order.paymentStatus === 'مدفوع'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}
                                    data-oid="w5hz4uf"
                                >
                                    {order.paymentStatus}
                                </span>
                            </div>
                            <div data-oid="q_qtu8.">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="7qf.o2-"
                                >
                                    المبلغ الإجمالي
                                </label>
                                <p className="text-xl font-bold text-gray-900" data-oid="bt9.urg">
                                    {order.amount} ريال
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white rounded-lg shadow p-6" data-oid="8on8gv.">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="j3rzpu8">
                            تتبع الطلب
                        </h3>
                        <div className="space-y-4" data-oid="4kto0t5">
                            {order.timeline.map((event, index) => (
                                <div key={index} className="flex items-start" data-oid="8tji0sa">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ml-3"
                                        data-oid="0.1wz:."
                                    >
                                        <span
                                            className="text-white text-xs font-semibold"
                                            data-oid="vi3rj0q"
                                        >
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="flex-1" data-oid="sqv27q.">
                                        <p className="font-medium text-gray-900" data-oid="rr19xzt">
                                            {event.status}
                                        </p>
                                        <p className="text-sm text-gray-600" data-oid="mms7jc7">
                                            {event.description}
                                        </p>
                                        <p
                                            className="text-xs text-gray-500 mt-1"
                                            data-oid="njoot6w"
                                        >
                                            {formatDateTime(event.timestamp)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-white rounded-lg shadow p-6" data-oid="si9qehc">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="4e4514x">
                            الإجراءات
                        </h3>
                        <div className="space-y-3" data-oid="f8jmnz1">
                            <Link
                                href={`/admin/orders/${order.id}/edit`}
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-center block"
                                data-oid="98tp4vf"
                            >
                                تعديل الطلب
                            </Link>
                            <button
                                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                                data-oid="uwy:hye"
                            >
                                إرسال رسالة
                            </button>
                            {order.status !== 'ملغي' && order.status !== 'مكتمل' && (
                                <button
                                    className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                                    data-oid="0wv7tos"
                                >
                                    إلغاء الطلب
                                </button>
                            )}
                            <button
                                className="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                                data-oid="hl5fmx-"
                            >
                                طباعة التفاصيل
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
