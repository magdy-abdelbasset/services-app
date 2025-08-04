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
                data-oid="21.8z03"
            >
                <div className="text-center" data-oid="z0cs_e8">
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
                        data-oid="1k8pnmw"
                    ></div>
                    <p className="text-gray-600" data-oid="kkw8:d-">
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
                data-oid=".dekt1c"
            >
                <div className="text-center" data-oid="_30ed4:">
                    <div className="text-6xl mb-4" data-oid="pzevfi8">
                        ❌
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="n_pr2ke">
                        الطلب غير موجود
                    </h2>
                    <p className="text-gray-600 mb-4" data-oid="4_.:0ll">
                        لم يتم العثور على الطلب المطلوب
                    </p>
                    <Link
                        href="/provider/requests"
                        className="bg-blue-500 text-white px-6 py-2 rounded-xl"
                        data-oid="_hz-bzd"
                    >
                        العودة للطلبات
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="8ic122w">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="fzw8ez:"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="1hxk:o8">
                    <div className="flex items-center justify-between mb-4" data-oid="tvkne59">
                        <Link href="/provider/requests" className="text-white" data-oid="b6_47.r">
                            <span className="text-2xl" data-oid="esqn8-7">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="5nks9jq">
                            تفاصيل الطلب #{order.id}
                        </h1>
                        <div className="w-8" data-oid="ejz8bns"></div>
                    </div>
                    <div className="flex items-center justify-between" data-oid="q9etxkh">
                        <OrderStatus status={order.status} data-oid="xssibbn" />
                        {order.urgent && (
                            <span
                                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                data-oid="c47h5ii"
                            >
                                عاجل
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="1_n:w7t">
                {/* Service Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid="apkolq1">
                    <div className="flex items-start justify-between mb-4" data-oid="veadj6p">
                        <div className="flex-1" data-oid="r9ttxu3">
                            <h2 className="text-xl font-bold text-gray-800 mb-2" data-oid="99c_lgz">
                                {order.service}
                            </h2>
                            <p className="text-sm text-gray-600 mb-2" data-oid="unjz2dw">
                                تم الطلب: {order.createdAt}
                            </p>
                            <p className="text-sm text-gray-600" data-oid="sw8w40h">
                                الموعد المحدد: {order.scheduledTime}
                            </p>
                        </div>
                        <div className="text-left" data-oid="0gn.acg">
                            <p className="text-2xl font-bold text-green-600" data-oid="o9nq8cw">
                                {order.price}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="9xsz_5d">
                                المدة المتوقعة: {order.estimatedDuration}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4" data-oid="t-oy4tp">
                        <h3 className="font-semibold text-gray-800 mb-2" data-oid="oltzij.">
                            وصف الخدمة:
                        </h3>
                        <p className="text-sm text-gray-700" data-oid="brjju0l">
                            {order.description}
                        </p>
                    </div>

                    {order.notes && (
                        <div
                            className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4"
                            data-oid="duqw1ol"
                        >
                            <h3 className="font-semibold text-yellow-800 mb-2" data-oid="mh3x.je">
                                ملاحظات مهمة:
                            </h3>
                            <p className="text-sm text-yellow-700" data-oid="-34bhnb">
                                {order.notes}
                            </p>
                        </div>
                    )}
                </div>

                {/* Customer Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid=":.ho18o">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="eg8muq_">
                        معلومات العميل
                    </h3>
                    <div className="flex items-center space-x-4 space-x-reverse" data-oid="1gw9i48">
                        <div className="text-4xl" data-oid="0y.-:qt">
                            {order.customer.avatar}
                        </div>
                        <div className="flex-1" data-oid="tq64b15">
                            <h4 className="font-semibold text-gray-800" data-oid="29y2y1_">
                                {order.customer.name}
                            </h4>
                            <div
                                className="flex items-center space-x-2 space-x-reverse mt-1"
                                data-oid="t12jadw"
                            >
                                <span className="text-yellow-500" data-oid="ukp22:k">
                                    ⭐
                                </span>
                                <span className="text-sm text-gray-600" data-oid="rm:p_9l">
                                    {order.customer.rating}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1" data-oid="rfdis7b">
                                {order.customer.phone}
                            </p>
                        </div>
                        <button
                            onClick={handleCallCustomer}
                            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                            data-oid="bdudd_9"
                        >
                            📞
                        </button>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid="ae:abvk">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="mn3f1ie">
                        موقع الخدمة
                    </h3>
                    <div className="space-y-3" data-oid="2wwj3ra">
                        <div
                            className="flex items-start space-x-3 space-x-reverse"
                            data-oid="bw-0k:b"
                        >
                            <span className="text-xl mt-1" data-oid="68spzx2">
                                📍
                            </span>
                            <div className="flex-1" data-oid="fkaqzcm">
                                <p
                                    className="text-sm text-gray-700 leading-relaxed"
                                    data-oid=".3q5gkb"
                                >
                                    {order.location.address}
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-between text-sm text-gray-600"
                            data-oid="xrd8si7"
                        >
                            <span data-oid="-7u6of-">📏 المسافة: {order.location.distance}</span>
                            <span data-oid="6ioscfd">🌍 {order.location.coordinates}</span>
                        </div>
                        <button
                            onClick={handleOpenMaps}
                            className="w-full bg-blue-100 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-200 transition-colors"
                            data-oid="sl3fofo"
                        >
                            فتح في الخرائط 🗺️
                        </button>
                    </div>
                </div>

                {/* Progress Timeline */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4" data-oid="2p:djvv">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="apyx:9t">
                        مراحل الطلب
                    </h3>
                    <div className="space-y-4" data-oid="b9k3zwm">
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['accepted', 'in_progress', 'on_way', 'completed'].includes(
                                    order.status,
                                )
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                            data-oid="ei32_ml"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['accepted', 'in_progress', 'on_way', 'completed'].includes(
                                        order.status,
                                    )
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                                data-oid="48ueoh3"
                            ></div>
                            <span className="text-sm" data-oid="e2n0o80">
                                تم قبول الطلب
                            </span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['in_progress', 'on_way', 'completed'].includes(order.status)
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                            data-oid="un-f-n-"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['in_progress', 'on_way', 'completed'].includes(order.status)
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                                data-oid="8azct03"
                            ></div>
                            <span className="text-sm" data-oid="c.hwsoz">
                                بدء تنفيذ الخدمة
                            </span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                ['on_way', 'completed'].includes(order.status)
                                    ? 'text-green-600'
                                    : 'text-gray-400'
                            }`}
                            data-oid="4aj7wy-"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    ['on_way', 'completed'].includes(order.status)
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                                data-oid="nvzjf91"
                            ></div>
                            <span className="text-sm" data-oid=".rjdytp">
                                في الطريق للموقع
                            </span>
                        </div>
                        <div
                            className={`flex items-center space-x-3 space-x-reverse ${
                                order.status === 'completed' ? 'text-green-600' : 'text-gray-400'
                            }`}
                            data-oid="okyi31c"
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${
                                    order.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                                data-oid="i-9ay6z"
                            ></div>
                            <span className="text-sm" data-oid="-4dtdhn">
                                اكتمال الخدمة
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-20" data-oid="_pkkojh">
                    <h3 className="font-bold text-gray-800 mb-4" data-oid="drfzkce">
                        إجراءات
                    </h3>

                    {order.status === 'accepted' && (
                        <div className="space-y-3" data-oid="4h0l6nz">
                            <button
                                onClick={() => handleStatusUpdate('in_progress')}
                                className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                                data-oid="x23vnrr"
                            >
                                بدء تنفيذ الخدمة 🚀
                            </button>
                            <div className="flex space-x-3 space-x-reverse" data-oid="wiuc-r8">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                    data-oid="p55gzdm"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                    data-oid="89n4.2t"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'in_progress' && (
                        <div className="space-y-3" data-oid="t79h3j5">
                            <button
                                onClick={() => handleStatusUpdate('on_way')}
                                className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                                data-oid="q_56rar"
                            >
                                في الطريق للموقع 🚗
                            </button>
                            <div className="flex space-x-3 space-x-reverse" data-oid="ok6s_zz">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                    data-oid="oqrhp2t"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                    data-oid="swax9mj"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'on_way' && (
                        <div className="space-y-3" data-oid="wmgeg8q">
                            <button
                                onClick={() => handleStatusUpdate('completed')}
                                className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                                data-oid="dwvk1nw"
                            >
                                إنهاء الخدمة ✅
                            </button>
                            <div className="flex space-x-3 space-x-reverse" data-oid="d9-h2g.">
                                <Link
                                    href={`/provider/chat/${order.id}`}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
                                    data-oid="7akfhln"
                                >
                                    مراسلة العميل 💬
                                </Link>
                                <button
                                    onClick={handleCallCustomer}
                                    className="flex-1 bg-green-100 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                                    data-oid="hger660"
                                >
                                    اتصال 📞
                                </button>
                            </div>
                        </div>
                    )}

                    {order.status === 'completed' && (
                        <div className="text-center py-4" data-oid="lmm1pco">
                            <div className="text-6xl mb-4" data-oid="r33h_1z">
                                🎉
                            </div>
                            <h4
                                className="text-lg font-bold text-green-600 mb-2"
                                data-oid="q-cnj.g"
                            >
                                تم إنجاز الخدمة بنجاح!
                            </h4>
                            <p className="text-sm text-gray-600 mb-4" data-oid="cvi_0e3">
                                شكراً لك على تقديم خدمة ممتازة
                            </p>
                            <Link
                                href="/provider/earnings"
                                className="bg-green-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                                data-oid="n21r59u"
                            >
                                عرض الأرباح 💰
                            </Link>
                        </div>
                    )}

                    {order.status === 'cancelled' && (
                        <div className="text-center py-4" data-oid="_0o7fpn">
                            <div className="text-6xl mb-4" data-oid="kl1jp-:">
                                ❌
                            </div>
                            <h4 className="text-lg font-bold text-red-600 mb-2" data-oid="l_8yi60">
                                تم إلغاء الطلب
                            </h4>
                            <p className="text-sm text-gray-600" data-oid="hssc_9:">
                                هذا الطلب لم يعد متاحاً
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="izl.w3e"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="75-76q4">
                    <div className="flex justify-around" data-oid="3_mvezk">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="jwr4k7m"
                        >
                            <span className="text-xl" data-oid="vws59sq">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="x_4cnsn">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="u.1_iy3"
                        >
                            <span className="text-xl" data-oid="8sgcgzl">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="vwf_xm9">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="13d05pd"
                        >
                            <span className="text-xl" data-oid="nnz_v87">
                                💰
                            </span>
                            <span className="text-xs" data-oid="9prjjtk">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="x3qkk-a"
                        >
                            <span className="text-xl" data-oid="9n5axr0">
                                💬
                            </span>
                            <span className="text-xs" data-oid="jyl7vbd">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="00pscpp"
                        >
                            <span className="text-xl" data-oid="dapo_xf">
                                👤
                            </span>
                            <span className="text-xs" data-oid="h0vw9fa">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
