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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="_sd825-">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="e:mfhu1"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="wq_5rdt">
                    <div className="flex items-center justify-between mb-4" data-oid="c-zyqpy">
                        <Link href="/provider" className="text-white" data-oid="ndp3i.4">
                            <span className="text-2xl" data-oid="06x9i9a">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="jum:qiv">
                            الطلبات الواردة
                        </h1>
                        <div className="w-8" data-oid="2kztn7w"></div>
                    </div>

                    <p className="text-white/90 text-sm" data-oid="p6i_ftc">
                        إدارة جميع الطلبات الواردة إليك
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="cgenbip">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="l8f3qhh">
                    <div className="flex space-x-2 space-x-reverse" data-oid="5zo2dp6">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="lygp09x"
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
                            data-oid="44.u1wm"
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
                            data-oid="_szw:12"
                        >
                            مقبول ({requests.filter((r) => r.status === 'accepted').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Requests List */}
            <div className="max-w-sm mx-auto px-4" data-oid="hdb00jh">
                <div className="space-y-4 mb-20" data-oid="8v2c80m">
                    {filteredRequests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="hi3pov_"
                        >
                            {/* Request Header */}
                            <div
                                className="flex items-start justify-between mb-3"
                                data-oid="ka7ydut"
                            >
                                <div className="flex-1" data-oid="n6ne_7g">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid=".6cyflx"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="27tmd09"
                                        >
                                            {request.service}
                                        </h3>
                                        {request.urgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid="qmdwijb"
                                            >
                                                عاجل
                                            </span>
                                        )}
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}
                                            data-oid="au5ebk9"
                                        >
                                            {getStatusText(request.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1" data-oid="bmcbwhg">
                                        العميل: {request.customer}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500"
                                        data-oid="m5qnfi:"
                                    >
                                        <span data-oid=":rw.ibb">📍 {request.location}</span>
                                        <span data-oid="8xbaizt">📏 {request.distance}</span>
                                    </div>
                                </div>
                                <div className="text-left" data-oid="d98crvd">
                                    <p
                                        className="text-lg font-bold text-green-600"
                                        data-oid="qgdazcg"
                                    >
                                        {request.price}
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="i84cabi">
                                        {request.time}
                                    </p>
                                </div>
                            </div>

                            {/* Request Description */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-3" data-oid="18rqlqi">
                                <p className="text-sm text-gray-700" data-oid="_ps2yn5">
                                    {request.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            {request.status === 'pending' && (
                                <div className="flex space-x-3 space-x-reverse" data-oid=":of04h3">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                        data-oid="09_1nnz"
                                    >
                                        قبول الطلب
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                        data-oid="lq7tpwj"
                                    >
                                        رفض
                                    </button>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                        data-oid="gbo6vjv"
                                    >
                                        💬
                                    </Link>
                                </div>
                            )}

                            {request.status === 'accepted' && (
                                <div className="flex space-x-3 space-x-reverse" data-oid="gjqo7gs">
                                    <Link
                                        href={`/provider/order-details/${request.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="271nv3u"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="4cetxk9"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="s4cpomv"
                                    >
                                        📞
                                    </button>
                                </div>
                            )}

                            {request.status === 'rejected' && (
                                <div className="text-center py-2" data-oid="aeray4t">
                                    <p className="text-sm text-gray-500" data-oid="2b0o9b4">
                                        تم رفض هذا الطلب
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredRequests.length === 0 && (
                        <div className="text-center py-12" data-oid="8bzh3.g">
                            <div className="text-6xl mb-4" data-oid="7xr58ee">
                                📋
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="aiefr6."
                            >
                                لا توجد طلبات
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="srm8w7:">
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
                data-oid="jrdrznm"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="_e8-qi1">
                    <div className="flex justify-around" data-oid="n-0ebh9">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hmplxfm"
                        >
                            <span className="text-xl" data-oid="b6ni_-p">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="wkqstm2">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="10vzcwh"
                        >
                            <span className="text-xl" data-oid="iipe4o5">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="3cbb05-">
                                الطلبات
                            </span>
                        </button>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="gn3o851"
                        >
                            <span className="text-xl" data-oid="pjt1rxa">
                                💰
                            </span>
                            <span className="text-xs" data-oid="3blju8p">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="x6iwht5"
                        >
                            <span className="text-xl" data-oid="4ou.tp.">
                                💬
                            </span>
                            <span className="text-xs" data-oid=":xvv13n">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="7v4j.y5"
                        >
                            <span className="text-xl" data-oid="43pro7b">
                                👤
                            </span>
                            <span className="text-xs" data-oid="6e52t8_">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
