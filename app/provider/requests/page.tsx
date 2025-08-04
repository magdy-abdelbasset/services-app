'use client';

import { useState } from 'react';
import Link from 'next/link';
import PriceQuoteModal from '../../../components/PriceQuoteModal';

export default function ProviderRequests() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedRequest, setSelectedRequest] = useState<any>(null);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
        {
            id: 5,
            service: 'خدمات التجميل',
            customer: 'نورا أحمد',
            location: 'الرياض - حي الصحافة',
            price: '90 ريال',
            time: 'منذ 30 دقيقة',
            urgent: false,
            description: 'جلسة مكياج للمناسبات',
            status: 'quoted',
            distance: '3.7 كم',
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

    const handleSubmitQuote = (requestId: number) => {
        const request = requests.find((r) => r.id === requestId);
        if (request) {
            setSelectedRequest(request);
            setIsQuoteModalOpen(true);
        }
    };

    const handleQuoteSubmit = (quoteData: any) => {
        // Show success notification
        if (typeof window !== 'undefined' && (window as any).showNotification) {
            (window as any).showNotification({
                type: 'success',
                title: 'تم إرسال العرض!',
                message: `تم إرسال عرض السعر بقيمة ${quoteData.price} ريال بنجاح`,
                duration: 4000,
            });
        }

        // Here you would typically send the quote to your backend
        console.log('Quote submitted:', {
            requestId: selectedRequest?.id,
            ...quoteData,
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-600';
            case 'accepted':
                return 'bg-green-100 text-green-600';
            case 'rejected':
                return 'bg-red-100 text-red-600';
            case 'quoted':
                return 'bg-blue-100 text-blue-600';
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
            case 'quoted':
                return 'تم تقديم عرض';
            default:
                return 'غير محدد';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="wiefa41">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="_myqlzo"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="rb6lj-l">
                    <div className="flex items-center justify-between mb-4" data-oid="p4705kd">
                        <Link href="/provider" className="text-white" data-oid="c83xm6e">
                            <span className="text-2xl" data-oid="19z-ryz">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="q70ezf0">
                            الطلبات الواردة
                        </h1>
                        <div className="w-8" data-oid="lfksr62"></div>
                    </div>

                    <p className="text-white/90 text-sm" data-oid="d00ccyx">
                        إدارة جميع الطلبات الواردة إليك
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="mqj75:0">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="whb9_fu">
                    <div className="flex space-x-2 space-x-reverse" data-oid="f2rgd:p">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="7t.rvjw"
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
                            data-oid="aek6r2k"
                        >
                            جديد ({requests.filter((r) => r.status === 'pending').length})
                        </button>
                        <button
                            onClick={() => setActiveFilter('quoted')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'quoted'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="p7lt-n7"
                        >
                            عروض ({requests.filter((r) => r.status === 'quoted').length})
                        </button>
                        <button
                            onClick={() => setActiveFilter('accepted')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'accepted'
                                    ? 'bg-green-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="b0gw:de"
                        >
                            مقبول ({requests.filter((r) => r.status === 'accepted').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Requests List */}
            <div className="max-w-sm mx-auto px-4" data-oid="2ghi4b6">
                <div className="space-y-4 mb-20" data-oid="dziiz.x">
                    {filteredRequests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="cv2but6"
                        >
                            {/* Request Header */}
                            <div
                                className="flex items-start justify-between mb-3"
                                data-oid="ck3vv32"
                            >
                                <div className="flex-1" data-oid="dupxpfe">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="ay:_nns"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="3rz_r93"
                                        >
                                            {request.service}
                                        </h3>
                                        {request.urgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid="-wvf5st"
                                            >
                                                عاجل
                                            </span>
                                        )}
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}
                                            data-oid="b8707db"
                                        >
                                            {getStatusText(request.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1" data-oid="--bdsgw">
                                        العميل: {request.customer}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500"
                                        data-oid=".1mv6tt"
                                    >
                                        <span data-oid="ah5twgf">📍 {request.location}</span>
                                        <span data-oid="7byt6gq">📏 {request.distance}</span>
                                    </div>
                                </div>
                                <div className="text-left" data-oid="3j9d7a2">
                                    <p
                                        className="text-lg font-bold text-green-600"
                                        data-oid="-njidy3"
                                    >
                                        {request.price}
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="ki82rfk">
                                        {request.time}
                                    </p>
                                </div>
                            </div>

                            {/* Request Description */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-3" data-oid="n-unqen">
                                <p className="text-sm text-gray-700" data-oid="ifalnyh">
                                    {request.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            {request.status === 'pending' && (
                                <div className="space-y-2" data-oid="8achdlq">
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="ofhn3_-"
                                    >
                                        <button
                                            onClick={() => handleSubmitQuote(request.id)}
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold"
                                            data-oid="ftl_y6h"
                                        >
                                            تقديم عرض سعر
                                        </button>
                                        <Link
                                            href={`/provider/chat/${request.id}`}
                                            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                            data-oid="38twnlr"
                                        >
                                            💬
                                        </Link>
                                    </div>
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="fk47f1x"
                                    >
                                        <button
                                            onClick={() => handleAcceptRequest(request.id)}
                                            className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                            data-oid="oa43vb6"
                                        >
                                            قبول مباشر
                                        </button>
                                        <button
                                            onClick={() => handleRejectRequest(request.id)}
                                            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                            data-oid="9ynuz:s"
                                        >
                                            رفض
                                        </button>
                                    </div>
                                </div>
                            )}

                            {request.status === 'accepted' && (
                                <div className="flex space-x-3 space-x-reverse" data-oid="bzkq8_m">
                                    <Link
                                        href={`/provider/order-details/${request.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="jqkteko"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="qae.q3-"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="3h9cde."
                                    >
                                        📞
                                    </button>
                                </div>
                            )}

                            {request.status === 'quoted' && (
                                <div className="space-y-2" data-oid="hk_kebt">
                                    <div
                                        className="bg-blue-50 rounded-xl p-3 text-center"
                                        data-oid="ftfs::5"
                                    >
                                        <p
                                            className="text-sm text-blue-700 font-semibold"
                                            data-oid="ho4hsi_"
                                        >
                                            ✅ تم إرسال عرض السعر
                                        </p>
                                        <p
                                            className="text-xs text-blue-600 mt-1"
                                            data-oid="3g:yu:-"
                                        >
                                            في انتظار رد العميل
                                        </p>
                                    </div>
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="5tcj2cd"
                                    >
                                        <Link
                                            href={`/provider/chat/${request.id}`}
                                            className="flex-1 bg-blue-100 text-blue-700 py-2 rounded-xl font-semibold text-center"
                                            data-oid="v_rcctc"
                                        >
                                            💬 تواصل مع العميل
                                        </Link>
                                        <button
                                            onClick={() => handleSubmitQuote(request.id)}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl"
                                            data-oid=".tsq33f"
                                        >
                                            ✏️
                                        </button>
                                    </div>
                                </div>
                            )}

                            {request.status === 'rejected' && (
                                <div className="text-center py-2" data-oid="qp4x::w">
                                    <p className="text-sm text-gray-500" data-oid="q-fbgm:">
                                        تم رفض هذا الطلب
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredRequests.length === 0 && (
                        <div className="text-center py-12" data-oid="vmo63.a">
                            <div className="text-6xl mb-4" data-oid="gge8jbg">
                                📋
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="mjie.:h"
                            >
                                لا توجد طلبات
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="m:ho4wi">
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
                data-oid="x0rih:l"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="6qu58bi">
                    <div className="flex justify-around" data-oid="z8iwl0c">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ur4ji2x"
                        >
                            <span className="text-xl" data-oid="jfufkik">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="h:syc8o">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="wdgi::g"
                        >
                            <span className="text-xl" data-oid="98vz21p">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="z8sth4m">
                                الطلبات
                            </span>
                        </button>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9ck_ezy"
                        >
                            <span className="text-xl" data-oid="z-l9-:4">
                                💰
                            </span>
                            <span className="text-xs" data-oid="-byndp.">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="g:9dlpc"
                        >
                            <span className="text-xl" data-oid=".ta9w2t">
                                💬
                            </span>
                            <span className="text-xs" data-oid="riqqrtx">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ew:i8gv"
                        >
                            <span className="text-xl" data-oid="q:xb-3q">
                                👤
                            </span>
                            <span className="text-xs" data-oid="yfyik3:">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Price Quote Modal */}
            {selectedRequest && (
                <PriceQuoteModal
                    isOpen={isQuoteModalOpen}
                    onClose={() => {
                        setIsQuoteModalOpen(false);
                        setSelectedRequest(null);
                    }}
                    onSubmit={handleQuoteSubmit}
                    request={selectedRequest}
                    data-oid="hngbwm8"
                />
            )}
        </div>
    );
}
