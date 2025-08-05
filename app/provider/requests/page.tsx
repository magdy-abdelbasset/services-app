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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="kbnxbph">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="ox4bx6l"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="x3:tr5c">
                    <div className="flex items-center justify-between mb-4" data-oid="9qrg2u5">
                        <Link href="/provider" className="text-white" data-oid="t.oho9i">
                            <span className="text-2xl" data-oid="9gynqgr">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="_lm2xqx">
                            الطلبات الواردة
                        </h1>
                        <div className="w-8" data-oid="sbo0u79"></div>
                    </div>

                    <p className="text-white/90 text-sm" data-oid="p8:q1x6">
                        إدارة جميع الطلبات الواردة إليك
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="vwbl8tz">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="6ojo6e1">
                    <div className="flex space-x-2 space-x-reverse" data-oid="fe5edwr">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="gpi6bbv"
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
                            data-oid="-_-1o1q"
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
                            data-oid="xqbwla1"
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
                            data-oid="fx159fv"
                        >
                            مقبول ({requests.filter((r) => r.status === 'accepted').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Requests List */}
            <div className="max-w-sm mx-auto px-4" data-oid="10c6omw">
                <div className="space-y-4 mb-20" data-oid="jhk9.nc">
                    {filteredRequests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="eav0d-0"
                        >
                            {/* Request Header */}
                            <div
                                className="flex items-start justify-between mb-3"
                                data-oid="sgsvgbx"
                            >
                                <div className="flex-1" data-oid="764b6qu">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="t8d.219"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="mu_ncah"
                                        >
                                            {request.service}
                                        </h3>
                                        {request.urgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid=".d6-c:z"
                                            >
                                                عاجل
                                            </span>
                                        )}
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}
                                            data-oid="6uagjwp"
                                        >
                                            {getStatusText(request.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1" data-oid="u-93pcj">
                                        العميل: {request.customer}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500"
                                        data-oid="pdl81q8"
                                    >
                                        <span data-oid="4dcoh3.">📍 {request.location}</span>
                                        <span data-oid="k-di979">📏 {request.distance}</span>
                                    </div>
                                </div>
                                <div className="text-left" data-oid="pgo0uj:">
                                    <p
                                        className="text-lg font-bold text-green-600"
                                        data-oid="pbpus.1"
                                    >
                                        {request.price}
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid=".up-hc-">
                                        {request.time}
                                    </p>
                                </div>
                            </div>

                            {/* Request Description */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-3" data-oid="nt8-c_w">
                                <p className="text-sm text-gray-700" data-oid="5857p42">
                                    {request.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            {request.status === 'pending' && (
                                <div className="space-y-2" data-oid="lhlgcs6">
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="-9eyhkr"
                                    >
                                        <button
                                            onClick={() => handleSubmitQuote(request.id)}
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold"
                                            data-oid="kvicifx"
                                        >
                                            تقديم عرض سعر
                                        </button>
                                        <Link
                                            href={`/provider/chat/${request.id}`}
                                            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                            data-oid="-1o4x:z"
                                        >
                                            💬
                                        </Link>
                                    </div>
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="oeszxdl"
                                    >
                                        <button
                                            onClick={() => handleAcceptRequest(request.id)}
                                            className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                            data-oid="7-tyyf_"
                                        >
                                            قبول مباشر
                                        </button>
                                        <button
                                            onClick={() => handleRejectRequest(request.id)}
                                            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                            data-oid=":khvvsm"
                                        >
                                            رفض
                                        </button>
                                    </div>
                                </div>
                            )}

                            {request.status === 'accepted' && (
                                <div className="flex space-x-3 space-x-reverse" data-oid="0zwqdvy">
                                    <Link
                                        href={`/provider/order-details/${request.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="cmwygi0"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="30fvegx"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="xv.pjkl"
                                    >
                                        📞
                                    </button>
                                </div>
                            )}

                            {request.status === 'quoted' && (
                                <div className="space-y-2" data-oid="0ox2sz7">
                                    <div
                                        className="bg-blue-50 rounded-xl p-3 text-center"
                                        data-oid="jr02q1-"
                                    >
                                        <p
                                            className="text-sm text-blue-700 font-semibold"
                                            data-oid="8ryxiqy"
                                        >
                                            ✅ تم إرسال عرض السعر
                                        </p>
                                        <p
                                            className="text-xs text-blue-600 mt-1"
                                            data-oid="jv:jhi_"
                                        >
                                            في انتظار رد العميل
                                        </p>
                                    </div>
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="4zt-v_1"
                                    >
                                        <Link
                                            href={`/provider/chat/${request.id}`}
                                            className="flex-1 bg-blue-100 text-blue-700 py-2 rounded-xl font-semibold text-center"
                                            data-oid="7j62nzh"
                                        >
                                            💬 تواصل مع العميل
                                        </Link>
                                        <button
                                            onClick={() => handleSubmitQuote(request.id)}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl"
                                            data-oid="it-ir-:"
                                        >
                                            ✏️
                                        </button>
                                    </div>
                                </div>
                            )}

                            {request.status === 'rejected' && (
                                <div className="text-center py-2" data-oid="itw6oax">
                                    <p className="text-sm text-gray-500" data-oid="j5ob7_j">
                                        تم رفض هذا الطلب
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredRequests.length === 0 && (
                        <div className="text-center py-12" data-oid=":ae2t07">
                            <div className="text-6xl mb-4" data-oid="mne9vm3">
                                📋
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="-03u1hr"
                            >
                                لا توجد طلبات
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="jtu0bou">
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
                data-oid="c36u51s"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="fyl6l8v">
                    <div className="flex justify-around" data-oid="gmnod7w">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="dpe:vpn"
                        >
                            <span className="text-xl" data-oid="3y9d7co">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="r7ptgx_">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="w3s1nyb"
                        >
                            <span className="text-xl" data-oid="9_2:eu2">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid="i7xbmii">
                                الطلبات
                            </span>
                        </button>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="fg4h_cp"
                        >
                            <span className="text-xl" data-oid="eb-o-mj">
                                💰
                            </span>
                            <span className="text-xs" data-oid="la.ke:u">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="zwfh_jz"
                        >
                            <span className="text-xl" data-oid="ogwp1eq">
                                💬
                            </span>
                            <span className="text-xs" data-oid="3f0xofz">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="57qi0my"
                        >
                            <span className="text-xl" data-oid="4bhonkh">
                                👤
                            </span>
                            <span className="text-xs" data-oid="ewe7m6r">
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
                    data-oid=".kq0rnj"
                />
            )}
        </div>
    );
}
