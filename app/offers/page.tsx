'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function OffersPage() {
    const [selectedOffer, setSelectedOffer] = useState(null);
    const pendingOffers = [
        {
            id: 1,
            serviceId: 1,
            serviceName: 'تنظيف المنزل',
            serviceIcon: '🏠',
            requestTime: '10:30 ص - اليوم',
            offersCount: 5,
            offers: [
                {
                    id: 1,
                    providerName: 'أحمد علي',
                    rating: 4.9,
                    completedJobs: 156,
                    price: '45 ريال',
                    estimatedTime: '25 دقيقة',
                    description: 'خبرة 5 سنوات في تنظيف المنازل، أستخدم مواد تنظيف صديقة للبيئة',
                    avatar: '👨‍💼',
                    verified: true,
                    responseTime: '5 دقائق',
                },
                {
                    id: 2,
                    providerName: 'فاطمة محمد',
                    rating: 4.8,
                    completedJobs: 203,
                    price: '50 ريال',
                    estimatedTime: '30 دقيقة',
                    description: 'متخصصة في التنظيف العميق، خدمة سريعة ومضمونة',
                    avatar: '👩‍💼',
                    verified: true,
                    responseTime: '3 دقائق',
                },
            ],
        },
        {
            id: 2,
            serviceId: 2,
            serviceName: 'صيانة السباكة',
            serviceIcon: '🔧',
            requestTime: '2:15 م - أمس',
            offersCount: 3,
            offers: [
                {
                    id: 3,
                    providerName: 'محمد حسن',
                    rating: 4.7,
                    completedJobs: 89,
                    price: '80 ريال',
                    estimatedTime: '45 دقيقة',
                    description: 'خبير في إصلاح جميع أنواع مشاكل السباكة',
                    avatar: '👨‍🔧',
                    verified: true,
                    responseTime: '15 دقيقة',
                },
            ],
        },
    ];

    const handleSelectOffer = (serviceRequest, offer) => {
        // Show success notification
        if (typeof window !== 'undefined' && (window as any).showNotification) {
            (window as any).showNotification({
                type: 'success',
                title: 'تم قبول العرض!',
                message: `تم اختيار العرض من ${offer.providerName} بسعر ${offer.price}`,
                duration: 4000,
            });
        }

        // Simulate order creation
        setTimeout(() => {
            window.location.href = '/orders';
        }, 2000);
    };
    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="kwvy0ti">
            {' '}
            {/* Header */}{' '}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="19lypx2"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-6" data-oid=":dhirw3">
                    {' '}
                    <div className="flex items-center justify-between mb-4" data-oid="lyvbr5:">
                        {' '}
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid=":z8phio"
                        >
                            {' '}
                            <span className="text-lg" data-oid="m97yz43">
                                {' '}
                                ←{' '}
                            </span>{' '}
                        </Link>{' '}
                        <h1 className="text-xl font-bold" data-oid="wh8svwu">
                            {' '}
                            العروض المتاحة{' '}
                        </h1>{' '}
                        <div className="w-10 h-10" data-oid="bo18hu3"></div>{' '}
                    </div>{' '}
                    <p className="text-white/90 text-sm text-center" data-oid="i3.x35c">
                        {' '}
                        اختر أفضل العروض من مقدمي الخدمات{' '}
                    </p>{' '}
                </div>{' '}
            </div>{' '}
            {/* Pending Requests */}{' '}
            <div className="max-w-sm mx-auto px-4 py-6" data-oid=".dolam3">
                {' '}
                {pendingOffers.length > 0 ? (
                    <div className="space-y-6" data-oid="08-9h2k">
                        {' '}
                        {pendingOffers.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="rwuvn02"
                            >
                                {' '}
                                {/* Service Info */}{' '}
                                <div
                                    className="flex items-center space-x-3 space-x-reverse mb-4"
                                    data-oid="pnyg4za"
                                >
                                    {' '}
                                    <div className="text-2xl" data-oid="o77etnc">
                                        {' '}
                                        {request.serviceIcon}{' '}
                                    </div>{' '}
                                    <div className="flex-1" data-oid="8qy-a7q">
                                        {' '}
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="3bac6tr"
                                        >
                                            {' '}
                                            {request.serviceName}{' '}
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="fu9zben">
                                            {' '}
                                            طُلب في: {request.requestTime}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                    <div
                                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                        data-oid="4e.b:az"
                                    >
                                        {' '}
                                        {request.offersCount} عروض{' '}
                                    </div>{' '}
                                </div>{' '}
                                {/* Offers */}{' '}
                                <div className="space-y-3" data-oid="a0jn20w">
                                    {' '}
                                    {request.offers.map((offer) => (
                                        <div
                                            key={offer.id}
                                            className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                                            data-oid="s8n7k8z"
                                        >
                                            {' '}
                                            {/* Provider Info */}{' '}
                                            <div
                                                className="flex items-center space-x-3 space-x-reverse mb-3"
                                                data-oid="c3jbsx1"
                                            >
                                                {' '}
                                                <div className="text-2xl" data-oid="l951w6w">
                                                    {' '}
                                                    {offer.avatar}{' '}
                                                </div>{' '}
                                                <div className="flex-1" data-oid="auz51bn">
                                                    {' '}
                                                    <div
                                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                                        data-oid=":h3ez:9"
                                                    >
                                                        {' '}
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="hx-b:m."
                                                        >
                                                            {' '}
                                                            {offer.providerName}{' '}
                                                        </h4>{' '}
                                                        {offer.verified && (
                                                            <span
                                                                className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                                data-oid="su483j0"
                                                            >
                                                                {' '}
                                                                موثق{' '}
                                                            </span>
                                                        )}{' '}
                                                    </div>{' '}
                                                    <div
                                                        className="flex items-center space-x-3 space-x-reverse text-xs text-gray-600"
                                                        data-oid="-93p2q1"
                                                    >
                                                        {' '}
                                                        <div
                                                            className="flex items-center space-x-1 space-x-reverse"
                                                            data-oid="konubf5"
                                                        >
                                                            {' '}
                                                            <span
                                                                className="text-yellow-500"
                                                                data-oid="b58:5od"
                                                            >
                                                                {' '}
                                                                ⭐{' '}
                                                            </span>{' '}
                                                            <span data-oid="qo1f4go">
                                                                {' '}
                                                                {offer.rating}{' '}
                                                            </span>{' '}
                                                        </div>{' '}
                                                        <span data-oid="d:t3xdq">
                                                            {' '}
                                                            ({offer.completedJobs} خدمة){' '}
                                                        </span>{' '}
                                                    </div>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            {/* Offer Details */}{' '}
                                            <div
                                                className="grid grid-cols-3 gap-2 text-center mb-3"
                                                data-oid="yf..tf5"
                                            >
                                                {' '}
                                                <div data-oid="u:w.29v">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-blue-600"
                                                        data-oid="n9841pj"
                                                    >
                                                        {' '}
                                                        {offer.price}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="uuegguj"
                                                    >
                                                        {' '}
                                                        السعر{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="56kv1w2">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-green-600"
                                                        data-oid="3rdw:gl"
                                                    >
                                                        {' '}
                                                        {offer.estimatedTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="hsce0:."
                                                    >
                                                        {' '}
                                                        المدة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="g3g2vv1">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-orange-600"
                                                        data-oid="4fl8d3o"
                                                    >
                                                        {' '}
                                                        {offer.responseTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="uswjqth"
                                                    >
                                                        {' '}
                                                        الاستجابة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            <p
                                                className="text-xs text-gray-700 mb-3"
                                                data-oid="otfa.y6"
                                            >
                                                {' '}
                                                {offer.description}{' '}
                                            </p>{' '}
                                            {/* Action Buttons */}{' '}
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="g_fp3cq"
                                            >
                                                {' '}
                                                <button
                                                    onClick={() =>
                                                        handleSelectOffer(request, offer)
                                                    }
                                                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                                    data-oid="m90al62"
                                                >
                                                    {' '}
                                                    قبول العرض{' '}
                                                </button>{' '}
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center justify-center"
                                                    data-oid="ww8_ha6"
                                                >
                                                    {' '}
                                                    💬{' '}
                                                </Link>{' '}
                                                <button
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                                    data-oid="_7xi0-6"
                                                >
                                                    {' '}
                                                    ❌{' '}
                                                </button>{' '}
                                            </div>{' '}
                                        </div>
                                    ))}{' '}
                                </div>{' '}
                                {/* View All Offers */}{' '}
                                {request.offersCount > request.offers.length && (
                                    <button
                                        className="w-full mt-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold"
                                        data-oid="7rfhmb1"
                                    >
                                        {' '}
                                        عرض جميع العروض ({request.offersCount}){' '}
                                    </button>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="9d2g09o">
                        {' '}
                        <div className="text-6xl mb-4" data-oid="vnypkmu">
                            {' '}
                            📋{' '}
                        </div>{' '}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="s.wpq-t">
                            {' '}
                            لا توجد عروض متاحة{' '}
                        </h3>{' '}
                        <p className="text-gray-600 text-sm mb-6" data-oid="bm:p-on">
                            {' '}
                            اطلب خدمة جديدة لتلقي عروض من مقدمي الخدمات{' '}
                        </p>{' '}
                        <Link
                            href="/"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="itieilk"
                        >
                            {' '}
                            طلب خدمة جديدة{' '}
                        </Link>{' '}
                    </div>
                )}{' '}
            </div>{' '}
            {/* Bottom Navigation */}{' '}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="13fpsgw"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="cbvl46n">
                    {' '}
                    <div className="flex justify-around" data-oid=":yfadqp">
                        {' '}
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="6lnvbz0"
                        >
                            {' '}
                            <span className="text-xl" data-oid="6wetxnn">
                                {' '}
                                🏠{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="omd_.dv">
                                {' '}
                                الرئيسية{' '}
                            </span>{' '}
                        </Link>{' '}
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="etwm2ul"
                        >
                            {' '}
                            <span className="text-xl" data-oid="qmii8:w">
                                {' '}
                                📋{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="xwhqcmx">
                                {' '}
                                طلباتي{' '}
                            </span>{' '}
                        </Link>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="__2hec8"
                        >
                            {' '}
                            <span className="text-xl" data-oid="punpu.f">
                                {' '}
                                💰{' '}
                            </span>{' '}
                            <span className="text-xs font-semibold" data-oid="sh33t6w">
                                {' '}
                                العروض{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="85.ekej"
                        >
                            {' '}
                            <span className="text-xl" data-oid="af9l1-:">
                                {' '}
                                💬{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="tegdjj2">
                                {' '}
                                الرسائل{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="vxpdxwg"
                        >
                            {' '}
                            <span className="text-xl" data-oid="nmr77-c">
                                {' '}
                                👤{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="9r4a9--">
                                {' '}
                                الملف الشخصي{' '}
                            </span>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
            {/* Padding for bottom navigation */}{' '}
            <div className="h-20" data-oid="1t1-t55"></div>{' '}
        </div>
    );
}
