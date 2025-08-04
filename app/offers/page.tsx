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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="2cs4p-j">
            {' '}
            {/* Header */}{' '}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="tozwy2p"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="e:ql_:6">
                    {' '}
                    <div className="flex items-center justify-between mb-4" data-oid="tg7:f7p">
                        {' '}
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="n422g93"
                        >
                            {' '}
                            <span className="text-lg" data-oid="rlf9g77">
                                {' '}
                                ←{' '}
                            </span>{' '}
                        </Link>{' '}
                        <h1 className="text-xl font-bold" data-oid="54m17eb">
                            {' '}
                            العروض المتاحة{' '}
                        </h1>{' '}
                        <div className="w-10 h-10" data-oid="ev-r9xu"></div>{' '}
                    </div>{' '}
                    <p className="text-white/90 text-sm text-center" data-oid="ve35j39">
                        {' '}
                        اختر أفضل العروض من مقدمي الخدمات{' '}
                    </p>{' '}
                </div>{' '}
            </div>{' '}
            {/* Pending Requests */}{' '}
            <div className="max-w-sm mx-auto px-4 py-6" data-oid="j5b7yxv">
                {' '}
                {pendingOffers.length > 0 ? (
                    <div className="space-y-6" data-oid="un4e6wv">
                        {' '}
                        {pendingOffers.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="ldpy8o6"
                            >
                                {' '}
                                {/* Service Info */}{' '}
                                <div
                                    className="flex items-center space-x-3 space-x-reverse mb-4"
                                    data-oid="q9:m1_q"
                                >
                                    {' '}
                                    <div className="text-2xl" data-oid="_akjk6z">
                                        {' '}
                                        {request.serviceIcon}{' '}
                                    </div>{' '}
                                    <div className="flex-1" data-oid="x8opndw">
                                        {' '}
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="t4p.nh6"
                                        >
                                            {' '}
                                            {request.serviceName}{' '}
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="q.ylurk">
                                            {' '}
                                            طُلب في: {request.requestTime}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                    <div
                                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                        data-oid="3xq858s"
                                    >
                                        {' '}
                                        {request.offersCount} عروض{' '}
                                    </div>{' '}
                                </div>{' '}
                                {/* Offers */}{' '}
                                <div className="space-y-3" data-oid="jzajopp">
                                    {' '}
                                    {request.offers.map((offer) => (
                                        <div
                                            key={offer.id}
                                            className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                                            data-oid="nkdlzkf"
                                        >
                                            {' '}
                                            {/* Provider Info */}{' '}
                                            <div
                                                className="flex items-center space-x-3 space-x-reverse mb-3"
                                                data-oid="8pq:coh"
                                            >
                                                {' '}
                                                <div className="text-2xl" data-oid="agv54bn">
                                                    {' '}
                                                    {offer.avatar}{' '}
                                                </div>{' '}
                                                <div className="flex-1" data-oid="q:x126v">
                                                    {' '}
                                                    <div
                                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                                        data-oid=":nyp1n6"
                                                    >
                                                        {' '}
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="9i68xjw"
                                                        >
                                                            {' '}
                                                            {offer.providerName}{' '}
                                                        </h4>{' '}
                                                        {offer.verified && (
                                                            <span
                                                                className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                                data-oid="mb29175"
                                                            >
                                                                {' '}
                                                                موثق{' '}
                                                            </span>
                                                        )}{' '}
                                                    </div>{' '}
                                                    <div
                                                        className="flex items-center space-x-3 space-x-reverse text-xs text-gray-600"
                                                        data-oid="eqmh0ex"
                                                    >
                                                        {' '}
                                                        <div
                                                            className="flex items-center space-x-1 space-x-reverse"
                                                            data-oid="ps-pc.b"
                                                        >
                                                            {' '}
                                                            <span
                                                                className="text-yellow-500"
                                                                data-oid="8:kwhkv"
                                                            >
                                                                {' '}
                                                                ⭐{' '}
                                                            </span>{' '}
                                                            <span data-oid="y9hnkkj">
                                                                {' '}
                                                                {offer.rating}{' '}
                                                            </span>{' '}
                                                        </div>{' '}
                                                        <span data-oid="4f0kz.v">
                                                            {' '}
                                                            ({offer.completedJobs} خدمة){' '}
                                                        </span>{' '}
                                                    </div>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            {/* Offer Details */}{' '}
                                            <div
                                                className="grid grid-cols-3 gap-2 text-center mb-3"
                                                data-oid="2t4xp:f"
                                            >
                                                {' '}
                                                <div data-oid="tulppy0">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-blue-600"
                                                        data-oid="k6g6xzd"
                                                    >
                                                        {' '}
                                                        {offer.price}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="._y3_q1"
                                                    >
                                                        {' '}
                                                        السعر{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="hv0v7uh">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-green-600"
                                                        data-oid="34ic5zj"
                                                    >
                                                        {' '}
                                                        {offer.estimatedTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="p2hg0_5"
                                                    >
                                                        {' '}
                                                        المدة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="92z_b7s">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-orange-600"
                                                        data-oid=".a7cdbb"
                                                    >
                                                        {' '}
                                                        {offer.responseTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="09ymzan"
                                                    >
                                                        {' '}
                                                        الاستجابة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            <p
                                                className="text-xs text-gray-700 mb-3"
                                                data-oid="q4kkj_m"
                                            >
                                                {' '}
                                                {offer.description}{' '}
                                            </p>{' '}
                                            {/* Action Buttons */}{' '}
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="mtpu7gr"
                                            >
                                                {' '}
                                                <button
                                                    onClick={() =>
                                                        handleSelectOffer(request, offer)
                                                    }
                                                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                                    data-oid="y1tmhnu"
                                                >
                                                    {' '}
                                                    قبول العرض{' '}
                                                </button>{' '}
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center justify-center"
                                                    data-oid="_1yaog3"
                                                >
                                                    {' '}
                                                    💬{' '}
                                                </Link>{' '}
                                                <button
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                                    data-oid="w1c97mi"
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
                                        data-oid="pg03.p6"
                                    >
                                        {' '}
                                        عرض جميع العروض ({request.offersCount}){' '}
                                    </button>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="n3tusg5">
                        {' '}
                        <div className="text-6xl mb-4" data-oid="h35ahik">
                            {' '}
                            📋{' '}
                        </div>{' '}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="boa8rwz">
                            {' '}
                            لا توجد عروض متاحة{' '}
                        </h3>{' '}
                        <p className="text-gray-600 text-sm mb-6" data-oid="l1rupb4">
                            {' '}
                            اطلب خدمة جديدة لتلقي عروض من مقدمي الخدمات{' '}
                        </p>{' '}
                        <Link
                            href="/"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="e6-7d1-"
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
                data-oid="pstjoso"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="a_eiskr">
                    {' '}
                    <div className="flex justify-around" data-oid="i2x3ve_">
                        {' '}
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="sj8j4q9"
                        >
                            {' '}
                            <span className="text-xl" data-oid="lekttc2">
                                {' '}
                                🏠{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="ft1iu6k">
                                {' '}
                                الرئيسية{' '}
                            </span>{' '}
                        </Link>{' '}
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="u9xqdyf"
                        >
                            {' '}
                            <span className="text-xl" data-oid="9c6t-lw">
                                {' '}
                                📋{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="c:9m7d7">
                                {' '}
                                طلباتي{' '}
                            </span>{' '}
                        </Link>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="3a5oclw"
                        >
                            {' '}
                            <span className="text-xl" data-oid="ntzusxw">
                                {' '}
                                💰{' '}
                            </span>{' '}
                            <span className="text-xs font-semibold" data-oid="bg4jc_x">
                                {' '}
                                العروض{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="-9gyg.r"
                        >
                            {' '}
                            <span className="text-xl" data-oid="zitiv17">
                                {' '}
                                💬{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid=".j8l5w:">
                                {' '}
                                الرسائل{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="mzx_hyc"
                        >
                            {' '}
                            <span className="text-xl" data-oid=":d_48es">
                                {' '}
                                👤{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="g84b5ks">
                                {' '}
                                الملف الشخصي{' '}
                            </span>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
            {/* Padding for bottom navigation */}{' '}
            <div className="h-20" data-oid="ed8a.kr"></div>{' '}
        </div>
    );
}
