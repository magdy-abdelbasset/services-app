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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="j59tubx">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="vzx9:90"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="3ab.iii">
                    <div className="flex items-center justify-between mb-4" data-oid="6b1r1e1">
                        <Link href="/provider" className="text-white" data-oid="qx84np9">
                            <span className="text-2xl" data-oid="exv1pnq">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="ky7ptty">
                            الطلبات الواردة
                        </h1>
                        <div className="w-8" data-oid="2279ksd"></div>
                    </div>

                    <p className="text-white/90 text-sm" data-oid="hs6id2b">
                        إدارة جميع الطلبات الواردة إليك
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="tx5k4gv">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="t.:4yud">
                    <div className="flex space-x-2 space-x-reverse" data-oid="t4wg0ll">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeFilter === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            data-oid="-:c2_gv"
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
                            data-oid="uy4kexw"
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
                            data-oid="h66fe6:"
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
                            data-oid="smuytej"
                        >
                            مقبول ({requests.filter((r) => r.status === 'accepted').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Requests List */}
            <div className="max-w-sm mx-auto px-4" data-oid=".bnom7w">
                <div className="space-y-4 mb-20" data-oid="nnqfysv">
                    {filteredRequests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="h3_-yg:"
                        >
                            {/* Request Header */}
                            <div
                                className="flex items-start justify-between mb-3"
                                data-oid="pw3uoaf"
                            >
                                <div className="flex-1" data-oid="ykta10x">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid=":svxxfi"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="jagfwl2"
                                        >
                                            {request.service}
                                        </h3>
                                        {request.urgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid="g0nl-9-"
                                            >
                                                عاجل
                                            </span>
                                        )}
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}
                                            data-oid="34l-kub"
                                        >
                                            {getStatusText(request.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1" data-oid="-k1w.7d">
                                        العميل: {request.customer}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500"
                                        data-oid=".hfpdxg"
                                    >
                                        <span data-oid="d694ovl">📍 {request.location}</span>
                                        <span data-oid="-cy3oj2">📏 {request.distance}</span>
                                    </div>
                                </div>
                                <div className="text-left" data-oid="cahhj4o">
                                    <p
                                        className="text-lg font-bold text-green-600"
                                        data-oid="_hpg3pg"
                                    >
                                        {request.price}
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="yprvr96">
                                        {request.time}
                                    </p>
                                </div>
                            </div>

                            {/* Request Description */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-3" data-oid="spjpq6g">
                                <p className="text-sm text-gray-700" data-oid="uujdds:">
                                    {request.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            {request.status === 'pending' && (
                                <div className="space-y-2" data-oid="sta0029">
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="stf1xm7"
                                    >
                                        <button
                                            onClick={() => handleSubmitQuote(request.id)}
                                            className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold"
                                            data-oid="qh1ljtc"
                                        >
                                            تقديم عرض سعر
                                        </button>
                                        <Link
                                            href={`/provider/chat/${request.id}`}
                                            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"
                                            data-oid="b7yaj_l"
                                        >
                                            💬
                                        </Link>
                                    </div>
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="f09eo70"
                                    >
                                        <button
                                            onClick={() => handleAcceptRequest(request.id)}
                                            className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                            data-oid="l38ck.6"
                                        >
                                            قبول مباشر
                                        </button>
                                        <button
                                            onClick={() => handleRejectRequest(request.id)}
                                            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                            data-oid="x8:kn-i"
                                        >
                                            رفض
                                        </button>
                                    </div>
                                </div>
                            )}

                            {request.status === 'accepted' && (
                                <div className="flex space-x-3 space-x-reverse" data-oid="oegxfkk">
                                    <Link
                                        href={`/provider/order-details/${request.id}`}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-center"
                                        data-oid="u3qinva"
                                    >
                                        تفاصيل الطلب
                                    </Link>
                                    <Link
                                        href={`/provider/chat/${request.id}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="pu7d4mx"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        className="px-4 py-2 bg-green-100 text-green-600 rounded-xl"
                                        data-oid="psqtmjv"
                                    >
                                        📞
                                    </button>
                                </div>
                            )}

                            {request.status === 'quoted' && (
                                <div className="space-y-2" data-oid="p.97hgq">
                                    <div
                                        className="bg-blue-50 rounded-xl p-3 text-center"
                                        data-oid="dkzeq80"
                                    >
                                        <p
                                            className="text-sm text-blue-700 font-semibold"
                                            data-oid="dxzx17g"
                                        >
                                            ✅ تم إرسال عرض السعر
                                        </p>
                                        <p
                                            className="text-xs text-blue-600 mt-1"
                                            data-oid="vv4wavq"
                                        >
                                            في انتظار رد العميل
                                        </p>
                                    </div>
                                    <div
                                        className="flex space-x-2 space-x-reverse"
                                        data-oid="ofhj407"
                                    >
                                        <Link
                                            href={`/provider/chat/${request.id}`}
                                            className="flex-1 bg-blue-100 text-blue-700 py-2 rounded-xl font-semibold text-center"
                                            data-oid="bhpqgwk"
                                        >
                                            💬 تواصل مع العميل
                                        </Link>
                                        <button
                                            onClick={() => handleSubmitQuote(request.id)}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl"
                                            data-oid="fcnyy94"
                                        >
                                            ✏️
                                        </button>
                                    </div>
                                </div>
                            )}

                            {request.status === 'rejected' && (
                                <div className="text-center py-2" data-oid=":tc2.-r">
                                    <p className="text-sm text-gray-500" data-oid="p3qg966">
                                        تم رفض هذا الطلب
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredRequests.length === 0 && (
                        <div className="text-center py-12" data-oid="eg7euse">
                            <div className="text-6xl mb-4" data-oid="gkslxp4">
                                📋
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid=":w4evi-"
                            >
                                لا توجد طلبات
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="lomc58q">
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
                data-oid="fxogx71"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="q..w_do">
                    <div className="flex justify-around" data-oid="wyy4162">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="l1pbegs"
                        >
                            <span className="text-xl" data-oid="cjzp0l8">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="9kj673r">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="dczx0f:"
                        >
                            <span className="text-xl" data-oid="u:p6814">
                                📋
                            </span>
                            <span className="text-xs font-semibold" data-oid=".rp2pj_">
                                الطلبات
                            </span>
                        </button>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=":i.53mb"
                        >
                            <span className="text-xl" data-oid="vpqaawu">
                                💰
                            </span>
                            <span className="text-xs" data-oid="5s37oxx">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="r3wqg2_"
                        >
                            <span className="text-xl" data-oid="-72p33t">
                                💬
                            </span>
                            <span className="text-xs" data-oid="zy7e8va">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="i1oy1hm"
                        >
                            <span className="text-xl" data-oid="j5r-z6d">
                                👤
                            </span>
                            <span className="text-xs" data-oid="vuqs9.s">
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
                    data-oid="g00ldv3"
                />
            )}
        </div>
    );
}
