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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="2r99:97">
            {' '}
            {/* Header */}{' '}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="e-7waa9"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="cm0hpzk">
                    {' '}
                    <div className="flex items-center justify-between mb-4" data-oid="cuwd:0:">
                        {' '}
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="psxhk7m"
                        >
                            {' '}
                            <span className="text-lg" data-oid="s8sfx2a">
                                {' '}
                                ←{' '}
                            </span>{' '}
                        </Link>{' '}
                        <h1 className="text-xl font-bold" data-oid="l4ivu1w">
                            {' '}
                            العروض المتاحة{' '}
                        </h1>{' '}
                        <div className="w-10 h-10" data-oid="r3f5eux"></div>{' '}
                    </div>{' '}
                    <p className="text-white/90 text-sm text-center" data-oid="9tl4cc0">
                        {' '}
                        اختر أفضل العروض من مقدمي الخدمات{' '}
                    </p>{' '}
                </div>{' '}
            </div>{' '}
            {/* Pending Requests */}{' '}
            <div className="max-w-sm mx-auto px-4 py-6" data-oid="7hw7kke">
                {' '}
                {pendingOffers.length > 0 ? (
                    <div className="space-y-6" data-oid="khem3or">
                        {' '}
                        {pendingOffers.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="7dazg7b"
                            >
                                {' '}
                                {/* Service Info */}{' '}
                                <div
                                    className="flex items-center space-x-3 space-x-reverse mb-4"
                                    data-oid="nhjj7bw"
                                >
                                    {' '}
                                    <div className="text-2xl" data-oid="a3d88da">
                                        {' '}
                                        {request.serviceIcon}{' '}
                                    </div>{' '}
                                    <div className="flex-1" data-oid="wtywda-">
                                        {' '}
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="82znzgm"
                                        >
                                            {' '}
                                            {request.serviceName}{' '}
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="uirpluv">
                                            {' '}
                                            طُلب في: {request.requestTime}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                    <div
                                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                        data-oid="dvrcge8"
                                    >
                                        {' '}
                                        {request.offersCount} عروض{' '}
                                    </div>{' '}
                                </div>{' '}
                                {/* Offers */}{' '}
                                <div className="space-y-3" data-oid="sulq3nj">
                                    {' '}
                                    {request.offers.map((offer) => (
                                        <div
                                            key={offer.id}
                                            className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                                            data-oid=":wf7_:o"
                                        >
                                            {' '}
                                            {/* Provider Info */}{' '}
                                            <div
                                                className="flex items-center space-x-3 space-x-reverse mb-3"
                                                data-oid="bv6iyxj"
                                            >
                                                {' '}
                                                <div className="text-2xl" data-oid="10--zxa">
                                                    {' '}
                                                    {offer.avatar}{' '}
                                                </div>{' '}
                                                <div className="flex-1" data-oid="0sjm:f.">
                                                    {' '}
                                                    <div
                                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                                        data-oid="ons9u-o"
                                                    >
                                                        {' '}
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="np5.uz8"
                                                        >
                                                            {' '}
                                                            {offer.providerName}{' '}
                                                        </h4>{' '}
                                                        {offer.verified && (
                                                            <span
                                                                className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                                data-oid="vs:0gow"
                                                            >
                                                                {' '}
                                                                موثق{' '}
                                                            </span>
                                                        )}{' '}
                                                    </div>{' '}
                                                    <div
                                                        className="flex items-center space-x-3 space-x-reverse text-xs text-gray-600"
                                                        data-oid="ov9gjvz"
                                                    >
                                                        {' '}
                                                        <div
                                                            className="flex items-center space-x-1 space-x-reverse"
                                                            data-oid="362s16y"
                                                        >
                                                            {' '}
                                                            <span
                                                                className="text-yellow-500"
                                                                data-oid="3oyg-ya"
                                                            >
                                                                {' '}
                                                                ⭐{' '}
                                                            </span>{' '}
                                                            <span data-oid="bfygc_a">
                                                                {' '}
                                                                {offer.rating}{' '}
                                                            </span>{' '}
                                                        </div>{' '}
                                                        <span data-oid="k1yw9-o">
                                                            {' '}
                                                            ({offer.completedJobs} خدمة){' '}
                                                        </span>{' '}
                                                    </div>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            {/* Offer Details */}{' '}
                                            <div
                                                className="grid grid-cols-3 gap-2 text-center mb-3"
                                                data-oid="1r005cq"
                                            >
                                                {' '}
                                                <div data-oid="178w:hs">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-blue-600"
                                                        data-oid="3lau7.m"
                                                    >
                                                        {' '}
                                                        {offer.price}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="t_btjnn"
                                                    >
                                                        {' '}
                                                        السعر{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="cux1f:y">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-green-600"
                                                        data-oid="p:x.g_g"
                                                    >
                                                        {' '}
                                                        {offer.estimatedTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="sis.cgf"
                                                    >
                                                        {' '}
                                                        المدة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="f554wxq">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-orange-600"
                                                        data-oid="ms6g8qi"
                                                    >
                                                        {' '}
                                                        {offer.responseTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="nezdvbt"
                                                    >
                                                        {' '}
                                                        الاستجابة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            <p
                                                className="text-xs text-gray-700 mb-3"
                                                data-oid="chy:_4d"
                                            >
                                                {' '}
                                                {offer.description}{' '}
                                            </p>{' '}
                                            {/* Action Buttons */}{' '}
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="6t..am0"
                                            >
                                                {' '}
                                                <button
                                                    onClick={() =>
                                                        handleSelectOffer(request, offer)
                                                    }
                                                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                                    data-oid="41_b-z4"
                                                >
                                                    {' '}
                                                    قبول العرض{' '}
                                                </button>{' '}
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center justify-center"
                                                    data-oid=":ohu2:o"
                                                >
                                                    {' '}
                                                    💬{' '}
                                                </Link>{' '}
                                                <button
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                                    data-oid=":ig1tzd"
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
                                        data-oid="5ley6o8"
                                    >
                                        {' '}
                                        عرض جميع العروض ({request.offersCount}){' '}
                                    </button>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="5ik4tkk">
                        {' '}
                        <div className="text-6xl mb-4" data-oid="xd7-pqw">
                            {' '}
                            📋{' '}
                        </div>{' '}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="7u_nzeh">
                            {' '}
                            لا توجد عروض متاحة{' '}
                        </h3>{' '}
                        <p className="text-gray-600 text-sm mb-6" data-oid="ser4hfj">
                            {' '}
                            اطلب خدمة جديدة لتلقي عروض من مقدمي الخدمات{' '}
                        </p>{' '}
                        <Link
                            href="/"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="q5yylie"
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
                data-oid="1b_lenf"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="09rka9g">
                    {' '}
                    <div className="flex justify-around" data-oid="51cf3:x">
                        {' '}
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="07a5dmz"
                        >
                            {' '}
                            <span className="text-xl" data-oid="gxu7g-8">
                                {' '}
                                🏠{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="gow.g6m">
                                {' '}
                                الرئيسية{' '}
                            </span>{' '}
                        </Link>{' '}
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="l0swcpz"
                        >
                            {' '}
                            <span className="text-xl" data-oid="istiemd">
                                {' '}
                                📋{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="k3waxba">
                                {' '}
                                طلباتي{' '}
                            </span>{' '}
                        </Link>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="6:8otup"
                        >
                            {' '}
                            <span className="text-xl" data-oid="4s6pdw-">
                                {' '}
                                💰{' '}
                            </span>{' '}
                            <span className="text-xs font-semibold" data-oid="zio7usm">
                                {' '}
                                العروض{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="bpwge.n"
                        >
                            {' '}
                            <span className="text-xl" data-oid="gm_w.p7">
                                {' '}
                                💬{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="92_isp2">
                                {' '}
                                الرسائل{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="okdv-9s"
                        >
                            {' '}
                            <span className="text-xl" data-oid="qvpogma">
                                {' '}
                                👤{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="95zib4d">
                                {' '}
                                الملف الشخصي{' '}
                            </span>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
            {/* Padding for bottom navigation */}{' '}
            <div className="h-20" data-oid="ctpq47y"></div>{' '}
        </div>
    );
}
