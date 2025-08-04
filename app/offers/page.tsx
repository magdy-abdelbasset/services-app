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
        alert(
            `تم اختيار العرض من ${offer.providerName} لخدمة ${serviceRequest.serviceName} بسعر ${offer.price}`,
        );
    };
    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="-12r:ar">
            {' '}
            {/* Header */}{' '}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="1xwyn:."
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="b-6nik.">
                    {' '}
                    <div className="flex items-center justify-between mb-4" data-oid="kmk4xye">
                        {' '}
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="opnp6rl"
                        >
                            {' '}
                            <span className="text-lg" data-oid="8sp4qcr">
                                {' '}
                                ←{' '}
                            </span>{' '}
                        </Link>{' '}
                        <h1 className="text-xl font-bold" data-oid="7tts-kv">
                            {' '}
                            العروض المتاحة{' '}
                        </h1>{' '}
                        <div className="w-10 h-10" data-oid="sshd0o3"></div>{' '}
                    </div>{' '}
                    <p className="text-white/90 text-sm text-center" data-oid="mzlcesy">
                        {' '}
                        اختر أفضل العروض من مقدمي الخدمات{' '}
                    </p>{' '}
                </div>{' '}
            </div>{' '}
            {/* Pending Requests */}{' '}
            <div className="max-w-sm mx-auto px-4 py-6" data-oid="d8__juc">
                {' '}
                {pendingOffers.length > 0 ? (
                    <div className="space-y-6" data-oid="3m5kqe7">
                        {' '}
                        {pendingOffers.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="zbg_c57"
                            >
                                {' '}
                                {/* Service Info */}{' '}
                                <div
                                    className="flex items-center space-x-3 space-x-reverse mb-4"
                                    data-oid="k3il16v"
                                >
                                    {' '}
                                    <div className="text-2xl" data-oid="zix0i:.">
                                        {' '}
                                        {request.serviceIcon}{' '}
                                    </div>{' '}
                                    <div className="flex-1" data-oid="0nrfb_a">
                                        {' '}
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid=".9mq-7g"
                                        >
                                            {' '}
                                            {request.serviceName}{' '}
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="omwlfey">
                                            {' '}
                                            طُلب في: {request.requestTime}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                    <div
                                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                        data-oid="awovm1y"
                                    >
                                        {' '}
                                        {request.offersCount} عروض{' '}
                                    </div>{' '}
                                </div>{' '}
                                {/* Offers */}{' '}
                                <div className="space-y-3" data-oid="41j_5bx">
                                    {' '}
                                    {request.offers.map((offer) => (
                                        <div
                                            key={offer.id}
                                            className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                                            data-oid="1obnwbn"
                                        >
                                            {' '}
                                            {/* Provider Info */}{' '}
                                            <div
                                                className="flex items-center space-x-3 space-x-reverse mb-3"
                                                data-oid="-l7bmmf"
                                            >
                                                {' '}
                                                <div className="text-2xl" data-oid="-0oa-l:">
                                                    {' '}
                                                    {offer.avatar}{' '}
                                                </div>{' '}
                                                <div className="flex-1" data-oid="u8yes7n">
                                                    {' '}
                                                    <div
                                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                                        data-oid="eo8imt."
                                                    >
                                                        {' '}
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="o-c0f17"
                                                        >
                                                            {' '}
                                                            {offer.providerName}{' '}
                                                        </h4>{' '}
                                                        {offer.verified && (
                                                            <span
                                                                className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                                data-oid="1mrt10b"
                                                            >
                                                                {' '}
                                                                موثق{' '}
                                                            </span>
                                                        )}{' '}
                                                    </div>{' '}
                                                    <div
                                                        className="flex items-center space-x-3 space-x-reverse text-xs text-gray-600"
                                                        data-oid="-mnbiou"
                                                    >
                                                        {' '}
                                                        <div
                                                            className="flex items-center space-x-1 space-x-reverse"
                                                            data-oid="6oig7ua"
                                                        >
                                                            {' '}
                                                            <span
                                                                className="text-yellow-500"
                                                                data-oid="v0yfi_f"
                                                            >
                                                                {' '}
                                                                ⭐{' '}
                                                            </span>{' '}
                                                            <span data-oid="sb135_y">
                                                                {' '}
                                                                {offer.rating}{' '}
                                                            </span>{' '}
                                                        </div>{' '}
                                                        <span data-oid="6plv6q-">
                                                            {' '}
                                                            ({offer.completedJobs} خدمة){' '}
                                                        </span>{' '}
                                                    </div>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            {/* Offer Details */}{' '}
                                            <div
                                                className="grid grid-cols-3 gap-2 text-center mb-3"
                                                data-oid="2oc1:6n"
                                            >
                                                {' '}
                                                <div data-oid="46h1.w.">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-blue-600"
                                                        data-oid="-8rxv.i"
                                                    >
                                                        {' '}
                                                        {offer.price}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="7d_:rzb"
                                                    >
                                                        {' '}
                                                        السعر{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="rx1aftt">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-green-600"
                                                        data-oid="lssjk4f"
                                                    >
                                                        {' '}
                                                        {offer.estimatedTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="zp:2gcb"
                                                    >
                                                        {' '}
                                                        المدة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="vhzhisz">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-orange-600"
                                                        data-oid="m0:flii"
                                                    >
                                                        {' '}
                                                        {offer.responseTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="7vrc-q4"
                                                    >
                                                        {' '}
                                                        الاستجابة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            <p
                                                className="text-xs text-gray-700 mb-3"
                                                data-oid="yi5ah8g"
                                            >
                                                {' '}
                                                {offer.description}{' '}
                                            </p>{' '}
                                            {/* Action Buttons */}{' '}
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="49.x6nk"
                                            >
                                                {' '}
                                                <button
                                                    onClick={() =>
                                                        handleSelectOffer(request, offer)
                                                    }
                                                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                                    data-oid="szt.p2v"
                                                >
                                                    {' '}
                                                    قبول العرض{' '}
                                                </button>{' '}
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center justify-center"
                                                    data-oid="6j6f6lk"
                                                >
                                                    {' '}
                                                    💬{' '}
                                                </Link>{' '}
                                                <button
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                                    data-oid="oxt7l62"
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
                                        data-oid="zg8rzuc"
                                    >
                                        {' '}
                                        عرض جميع العروض ({request.offersCount}){' '}
                                    </button>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="q4t_mgq">
                        {' '}
                        <div className="text-6xl mb-4" data-oid=".5:k_sr">
                            {' '}
                            📋{' '}
                        </div>{' '}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="0aik:22">
                            {' '}
                            لا توجد عروض متاحة{' '}
                        </h3>{' '}
                        <p className="text-gray-600 text-sm mb-6" data-oid="8riyk11">
                            {' '}
                            اطلب خدمة جديدة لتلقي عروض من مقدمي الخدمات{' '}
                        </p>{' '}
                        <Link
                            href="/"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="7twbf-p"
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
                data-oid="s2x892g"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="cgf1bys">
                    {' '}
                    <div className="flex justify-around" data-oid="ouq-9:5">
                        {' '}
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="cp920ul"
                        >
                            {' '}
                            <span className="text-xl" data-oid="8kequtx">
                                {' '}
                                🏠{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="8047fai">
                                {' '}
                                الرئيسية{' '}
                            </span>{' '}
                        </Link>{' '}
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="7jvdfo6"
                        >
                            {' '}
                            <span className="text-xl" data-oid="5.e2yf2">
                                {' '}
                                📋{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="l0iqhf4">
                                {' '}
                                طلباتي{' '}
                            </span>{' '}
                        </Link>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="yk53rea"
                        >
                            {' '}
                            <span className="text-xl" data-oid="3:n3h6:">
                                {' '}
                                💰{' '}
                            </span>{' '}
                            <span className="text-xs font-semibold" data-oid="3hx6z43">
                                {' '}
                                العروض{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="8zycf4j"
                        >
                            {' '}
                            <span className="text-xl" data-oid="yryat00">
                                {' '}
                                💬{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="1a01dir">
                                {' '}
                                الرسائل{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="gv:80ir"
                        >
                            {' '}
                            <span className="text-xl" data-oid="rlil9.p">
                                {' '}
                                👤{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="xu5jvup">
                                {' '}
                                الملف الشخصي{' '}
                            </span>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
            {/* Padding for bottom navigation */}{' '}
            <div className="h-20" data-oid="gt_7y3g"></div>{' '}
        </div>
    );
}
