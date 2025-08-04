'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProviderRequests() {
    const [activeFilter, setActiveFilter] = useState('all');

    const requests = [
        {
            id: 1,
            service: 'تنظيف المنزل',
            customer: 'سارة أحمد',
            location: 'الرياض - حي النرجس',
            price: '45 ريال',
            time: 'منذ 5 دقائق',
            urgent: true,
            description: 'تنظيف شقة من غرفتين وصالة',
            status: 'pending',
            distance: '2.5 كم',
        },
        {
            id: 2,
            service: 'صيانة السباكة',
            customer: 'محمد علي',
            location: 'الرياض - حي الملز',
            price: '80 ريال',
            time: 'منذ 12 دقيقة',
            urgent: false,
            description: 'إصلاح تسريب في الحمام',
            status: 'pending',
            distance: '4.1 كم',
        },
        {
            id: 3,
            service: 'توصيل الطعام',
            customer: 'فاطمة محمد',
            location: 'الرياض - حي العليا',
            price: '25 ريال',
            time: 'منذ 18 دقيقة',
            urgent: true,
            description: 'توصيل طلب من مطعم البيك',
            status: 'accepted',
            distance: '1.8 كم',
        },
        {
            id: 4,
            service: 'تصليح الأجهزة',
            customer: 'خالد سالم',
            location: 'الرياض - حي الورود',
            price: '120 ريال',
            time: 'منذ 25 دقيقة',
            urgent: false,
            description: 'إصلاح غسالة ملابس',
            status: 'rejected',
            distance: '6.2 كم',
        },
    ];

    const filteredRequests = requests.filter((request) => {
        if (activeFilter === 'all') return true;
        return request.status === activeFilter;
    });

    const handleAcceptRequest = (requestId: number) => {
        alert(`تم قبول الطلب رقم ${requestId}`);
    };

    const handleRejectRequest = (requestId: number) => {
        alert(`تم رفض الطلب رقم ${requestId}`);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-600';
            case 'accepted':
                return 'bg-green-100 text-green-600';
            case 'rejected':
                return 'bg-red-100 text-red-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'pending':
                return 'في الانتظار';
            case 'accepted':
                return 'مقبول';
            case 'rejected':
                return 'مرفوض';
            default:
                return 'غير محدد';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="wqpjgc.">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="vhkl0v5"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid=".y_eyhm">
                    <div className="flex items-center justify-between mb-4" data-oid="df-goul">
                        <Link href="/provider-dashboard" className="text-white" data-oid="qfm2527">
                            <span className="text-2xl" data-oid="ose9yw8">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="g4sd6yk">
                            الطلبات الواردة
                        </h1>
                        <div className="w-8" data-oid="i3nihlf"></div>
                    </div>

                    <p className="text-white/90 text-sm" data-oid="2x5h-uk">
                        إدارة جميع الطلبات الواردة إليك
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="8a:w3zy">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="umepxm6">
                    <div className="flex space-x-2 space-x-reverse" data-oid="fbwg5x3">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="x29s9-9"
                        >
                            الكل ({requests.length})
                        </button>
                        <button
                            onClick={() => setActiveFilter('pending')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'pending'
                                    ? 'bg-yellow-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="31ofhtq"
                        >
                            جديد ({requests.filter((r) => r.status === 'pending').length})
                        </button>
                        <button
                            onClick={() => setActiveFilter('accepted')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'accepted'
                                    ? 'bg-green-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="knnglts"
                        >
                            مقبول ({requests.filter((r) => r.status === 'accepted').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Requests List */}
            <div className="max-w-sm mx-auto px-4" data-oid="51gugu:">
                <div className="space-y-4 mb-20" data-oid="46p43qr">
                    {filteredRequests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="ywomn7j"
                        >
                            {/* Request Header */}
                            <div
                                className="flex items-start justify-between mb-3"
                                data-oid="q4b5248"
                            >
                                <div className="flex-1" data-oid="gzzl_t7">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="291b9qi"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="8_tq3mx"
                                        >
                                            {request.service}
                                        </h3>
                                        {request.urgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid="jbjusyx"
                                            >
                                                عاجل
                                            </span>
                                        )}
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}
                                            data-oid="rittrp-"
                                        >
                                            {getStatusText(request.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1" data-oid="hrrp:l:">
                                        العميل: {request.customer}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500"
                                        data-oid="3z9xuiu"
                                    >
                                        <span data-oid="z0xgb9p">📍 {request.location}</span>
                                        <span data-oid="ai5xfv.">📏 {request.distance}</span>
                                    </div>
                                </div>
                                <div className="text-left" data-oid="qcskwbh">
                                    <p
                                        className="text-lg font-bold text-green-600"
                                        data-oid="aey9zk_"
                                    >
                                        {request.price}
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="fs8-c37">
                                        {request.time}
                                    </p>
                                </div>
                            </div>

                            {/* Request Description */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-3" data-oid="1hw7dxq">
                                <p className="text-sm text-gray-700" data-oid="r17_dpa">
                                    {request.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            {request.status === 'pending' && (
                                <div className="flex space-x-3 space-x-reverse" data-oid="a0serm1">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                        data-oid="vv.vq07"
                                    >
                                        قبول الطلب
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                        data-oid="an29vqp"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider-chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                        data-oid="2iz:n04"
                                    >
                                        💬
                                    </Link>
                                </div>
                            )}

                            {request.status === 'accepted' && (
                                <div className="flex space-x-3 space-x-reverse" data-oid="-qa29x2">
                                    <Link
                                        href={`/provider-order-details/${request.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="kfvnu4j"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider-chat/${request.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="g0zefjm"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="v57vhjn"
                                    >
                                        📞
                                    </button>
                                </div>
                            )}

                            {request.status === 'rejected' && (
                                <div className="text-center py-2" data-oid="v2mvd1n">
                                    <p className="text-sm text-gray-500" data-oid="5_kk:i_">
                                        تم رفض هذا الطلب
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredRequests.length === 0 && (
                        <div className="text-center py-12" data-oid="lg4jys6">
                            <div className="text-6xl mb-4" data-oid="at2sqpn">
                                📋
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="1or7ycv"
                            >
                                لا توجد طلبات
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="2s_o77y">
                                {activeFilter === 'all'
                                    ? 'لم تستلم أي طلبات بعد'
                                    : `لا توجد طلبات ${getStatusText(activeFilter)}`}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="-yyr8n5"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="amty44f">
                    <div className="flex justify-around" data-oid="7ir.yxw">
                        <Link
                            href="/provider-dashboard"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="5y29:53"
                        >
                            <span className="text-xl" data-oid="c:me3sp">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="jj.7h_g">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="z319ig0"
                        >
                            <span className="text-xl" data-oid="mit4_._">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="7fgey8u">
                                الطلبات
                            </span>
                        </button>
                        <Link
                            href="/provider-earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="345fd8r"
                        >
                            <span className="text-xl" data-oid="6:m-y93">
                                💰
                            </span>
                            <span className="text-xs" data-oid="b.ubf8a">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider-messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="e0na_wx"
                        >
                            <span className="text-xl" data-oid="_nxt6qx">
                                💬
                            </span>
                            <span className="text-xs" data-oid="pk0jnrh">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider-profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="c0t5-.8"
                        >
                            <span className="text-xl" data-oid="9scocje">
                                👤
                            </span>
                            <span className="text-xs" data-oid="29d_8sj">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
