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
            <div
                className="min-h-screen bg-gray-50 flex items-center justify-center"
                dir="rtl"
                data-oid="y3hpvpy"
            >
                <div className="text-center" data-oid="40iww9d">
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
                        data-oid="r4kko1:"
                    ></div>
                    <p className="text-gray-600" data-oid="l7zbsfi">
                        جاري تحميل تفاصيل الطلب...
                    </p>
                </div>
            </div>
        );
    }

    if (!order) {
        return (
            <div
                className="min-h-screen bg-gray-50 flex items-center justify-center"
                dir="rtl"
                data-oid="-jfr_xr"
            >
                <div className="text-center" data-oid="mmg60la">
                    <div className="text-6xl mb-4" data-oid="k4kkq33">
                        ❌
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="a3u15:s">
                        الطلب غير موجود
                    </h2>
                    <p className="text-gray-600 mb-4" data-oid="_vw:8m.">
                        لم يتم العثور على الطلب المطلوب
                    </p>
                    <Link
                        href="/provider/requests"
                        className="bg-blue-500 text-white px-6 py-2 rounded-xl"
                        data-oid=":v89oqu"
                    >
                        العودة للطلبات
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="3yo-:2c">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="zske6mz"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="gilyk_m">
                    <div className="flex items-center justify-between mb-4" data-oid="4f51uo2">
                        <Link href="/provider/requests" className="text-white" data-oid="_fa9p:b">
                            <span className="text-2xl" data-oid="6nk:0d1">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="23q7pi9">
                            تفاصيل الطلب #{order.id}
                        </h1>
                        <div className="w-8" data-oid="bpl0.3x"></div>
                    </div>
                    <div className="flex items-center justify-between" data-oid="e6i:2fr">
                        <OrderStatus status={order.status} data-oid="7mr9km9" />
                        {order.urgent && (
                            <span
                                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                data-oid="bnmvwiz"
                            >
                                عاجل
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="-1pn7d9">
                {/* Service Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid="73-rsc_">
                    <div className="flex items-start justify-between mb-4" data-oid="v1jxjs-">
                        <div className="flex-1" data-oid="gemp5t2">
                            <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="akpeztg">
                                {order.service}
                            </h2>
                            <p className="text-sm text-gray-600 mb-2" data-oid="nhim:pt">
                                تم الطلب: {order.createdAt}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="rh5o48d">
                                الموعد المحدد: {order.scheduledTime}
                            </p>
                        </div>
                        <div className="text-left" data-oid="-5wk7u8">
                            <p className="text-2xl font-bold text-green-600" data-oid="8x9348z">
                                {order.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="r2y46yt">
                                المدة المتوقعة: {order.estimatedDuration}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4" data-oid="2oj5:mt">
                        <h3 className="font-semibold text-gray-800 mb-2" data-oid="6rmw7ud">
                            وصف الخدمة:
                        </h3>
                        <p className="text-sm text-gray-700" data-oid="uqyxgdy">
                            {order.description}
                        </p>
                    </div>

                    {order.notes && (
                        <div
                            className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4"
                            data-oid="59-7elb"
                        >
                            <h3 className="font-semibold text-yellow-800 mb-2" data-oid="mb4q18v">
                                ملاحظات مهمة:
                            </h3>
                            <p className="text-sm text-yellow-700" data-oid="x4h-24y">
                                {order.notes}
                            </p>
                        </div>
                    )}
                </div>

                {/* Customer Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid="c15prgq">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="j:yubrv">
                        معلومات العميل
                    </h3>
                    <div className="flex items-center space-x-4 space-x-reverse" data-oid="l_mcyql">
                        <div className="text-4xl" data-oid="xmjp0at">
                            {order.customer.avatar}
                        </div>
                        <div className="flex-1" data-oid="ovtpf74">
                            <h4 className="font-semibold text-gray-800" data-oid="vw4916o">
                                {order.customer.name}
                            </h4>
                            <div
                                className="flex items-center space-x-2 space-x-reverse mt-1"
                                data-oid="d1it7:0"
                            >
                                <span className="text-yellow-500" data-oid="foj5z8f">
                                    ⭐
                                </span>
                                <span className="text-sm text-gray-600" data-oid="8ujz_tn">
                                    {order.customer.rating}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1" data-oid="fhs8ynj">
                                {order.customer.phone}
                            </p>
                        </div>
                        <button
                            onClick={handleCallCustomer}
                            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                            data-oid="g_i8j13"
                        >
                            📞
                        </button>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid=".tzl7u0">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="95g8hy7">
                        موقع الخدمة
                    </h3>
                    <div className="space-y-3" data-oid="pznj_37">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid=".sr.vhs"
                        >
                            <span className="text-xl mt-1" data-oid="v6mvv37">
                                📍
                            </span>
                            <div className="flex-1" data-oid="aedpjhp">
                                <p
                                    className="text-sm text-gray-700 leading-relaxed"
                                    data-oid="eqq9t91"
                                >
                                    {order.location.address}
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between text-sm text-gray-600"
                            data-oid="dzon6at"
                        >
                            <span data-oid="jy5.4:.">📏 المسافة: {order.location.distance}</span>
                            <span data-oid="s_c:nzo">🌍 {order.location.coordinates}</span>
                        </div>
                        <button
                            onClick={handleOpenMaps}
                            className="w-full bg-blue-100 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-200 transition-colors"
                            data-oid="-::sg1n"
                        >
                            فتح في الخرائط 🗺️
                        </button>
                    </div>
                </div>

                {/* Progress Timeline */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid="p-v4ft9">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="ztpzbi0">
                        مراحل الطلب
                    </h3>
                    <div className="space-y-4" data-oid="a.yjurh">
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['accepted', 'in_progress', 'on_way', 'completed'].includes(
                                    order.status,
                                )
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                            data-oid="c3.uxli"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['accepted', 'in_progress', 'on_way', 'completed'].includes(
                                        order.status,
                                    )
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                                data-oid="qj-2-_9"
                            ></div>
                            <span className="text-sm" data-oid="bp8-tj2">
                                تم قبول الطلب
                            </span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['in_progress', 'on_way', 'completed'].includes(order.status)
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                            data-oid="n7ggfi8"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['in_progress', 'on_way', 'completed'].includes(order.status)
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                                data-oid="7p3_ulq"
                            ></div>
                            <span className="text-sm" data-oid="jx6fxv5">
                                بدء تنفيذ الخدمة
                            </span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['on_way', 'completed'].includes(order.status)
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                            data-oid="bm.8jv3"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['on_way', 'completed'].includes(order.status)
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                                data-oid="9ax0bl5"
                            ></div>
                            <span className="text-sm" data-oid="z.64gsc">
                                في الطريق للموقع
                            </span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                order.status === 'completed' ? 'text-green-600' : 'text-gray-400'
                            }`}
                            data-oid=".qvwymy"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    order.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                                data-oid="tf:1gh6"
                            ></div>
                            <span className="text-sm" data-oid="g_k78cl">
                                اكتمال الخدمة
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-20" data-oid="pf5o7em">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="kkmylsd">
                        إجراءات
                    </h3>

                    {order.status === 'accepted' && (
                        <div className="space-y-3" data-oid="iwxrkp0">
                            <button
                                onClick={() => handleStatusUpdate('in_progress')}
                                className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                                data-oid="_-i_9fz"
                            >
                                بدء تنفيذ الخدمة 🚀
                            </button>
                            <div className="flex space-x-3 space-x-reverse" data-oid="dxx1.-v">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                    data-oid="rswp9si"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                    data-oid="3m312q9"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'in_progress' && (
                        <div className="space-y-3" data-oid="wkzywg7">
                            <button
                                onClick={() => handleStatusUpdate('on_way')}
                                className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                                data-oid="ebqwq4b"
                            >
                                في الطريق للموقع 🚗
                            </button>
                            <div className="flex space-x-3 space-x-reverse" data-oid="bsgywq:">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                    data-oid="2ut0wr_"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                    data-oid="1uut2x1"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'on_way' && (
                        <div className="space-y-3" data-oid="z4bu9-n">
                            <button
                                onClick={() => handleStatusUpdate('completed')}
                                className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                                data-oid="vvmy8p8"
                            >
                                إنهاء الخدمة ✅
                            </button>
                            <div className="flex space-x-3 space-x-reverse" data-oid=":nq9xie">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                    data-oid="b1nz0cl"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                    data-oid="9ot.8zh"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'completed' && (
                        <div className="text-center py-4" data-oid="dhg6725">
                            <div className="text-6xl mb-4" data-oid="8shcjsg">
                                🎉
                            </div>
                            <h4
                                className="text-lg font-bold text-green-600 mb-2"
                                data-oid="0093awa"
                            >
                                تم إنجاز الخدمة بنجاح!
                            </h4>
                            <p className="text-sm text-gray-600 mb-4" data-oid="i1y.dpc">
                                شكراً لك على تقديم خدمة ممتازة
                            </p>
                            <Link
                                href="/provider/earnings"
                                className="bg-green-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                                data-oid="3z0j7_9"
                            >
                                عرض الأرباح 💰
                            </Link>
                        </div>
                    )}

                    {order.status === 'cancelled' && (
                        <div className="text-center py-4" data-oid=".d8:cat">
                            <div className="text-6xl mb-4" data-oid="d:eskki">
                                ❌
                            </div>
                            <h4 className="text-lg font-bold text-red-600 mb-2" data-oid=".yo_2g1">
                                تم إلغاء الطلب
                            </h4>
                            <p className="text-sm text-gray-600" data-oid="anhz5iv">
                                هذا الطلب لم يعد متاحاً
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="s0znlya"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="e69-62n">
                    <div className="flex justify-around" data-oid="ti4qf_3">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="c9v3dx8"
                        >
                            <span className="text-xl" data-oid="c-bpj4g">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="knj_v4j">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="u-_3ohd"
                        >
                            <span className="text-xl" data-oid="se5rmp2">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="7x_6f.h">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hc07sov"
                        >
                            <span className="text-xl" data-oid="ur4rpb4">
                                💰
                            </span>
                            <span className="text-xs" data-oid="cp3mw:c">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="2uu.msp"
                        >
                            <span className="text-xl" data-oid="xqyv9zi">
                                💬
                            </span>
                            <span className="text-xs" data-oid="k9s-il.">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="psr32vl"
                        >
                            <span className="text-xl" data-oid="d7mu-3y">
                                👤
                            </span>
                            <span className="text-xs" data-oid="o8d621p">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
