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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="79rjthh">
            {' '}
            {/* Header */}{' '}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="4w0-ake"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="1jnr:tg">
                    {' '}
                    <div className="flex items-center justify-between mb-4" data-oid="b1zq7.p">
                        {' '}
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="-_ks2dg"
                        >
                            {' '}
                            <span className="text-lg" data-oid="1sg1791">
                                {' '}
                                ←{' '}
                            </span>{' '}
                        </Link>{' '}
                        <h1 className="text-xl font-bold" data-oid="g25.da7">
                            {' '}
                            العروض المتاحة{' '}
                        </h1>{' '}
                        <div className="w-10 h-10" data-oid=":z9ek0m"></div>{' '}
                    </div>{' '}
                    <p className="text-white/90 text-sm text-center" data-oid="-pskj4v">
                        {' '}
                        اختر أفضل العروض من مقدمي الخدمات{' '}
                    </p>{' '}
                </div>{' '}
            </div>{' '}
            {/* Pending Requests */}{' '}
            <div className="max-w-sm mx-auto px-4 py-6" data-oid=":s3ezxb">
                {' '}
                {pendingOffers.length > 0 ? (
                    <div className="space-y-6" data-oid="n4ibm5h">
                        {' '}
                        {pendingOffers.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="5o3k7x4"
                            >
                                {' '}
                                {/* Service Info */}{' '}
                                <div
                                    className="flex items-center space-x-3 space-x-reverse mb-4"
                                    data-oid="mvcshx_"
                                >
                                    {' '}
                                    <div className="text-2xl" data-oid="ivv37g-">
                                        {' '}
                                        {request.serviceIcon}{' '}
                                    </div>{' '}
                                    <div className="flex-1" data-oid="csjf8y2">
                                        {' '}
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="4pqm5oh"
                                        >
                                            {' '}
                                            {request.serviceName}{' '}
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600" data-oid="_krccav">
                                            {' '}
                                            طُلب في: {request.requestTime}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                    <div
                                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                        data-oid="3ds0rgy"
                                    >
                                        {' '}
                                        {request.offersCount} عروض{' '}
                                    </div>{' '}
                                </div>{' '}
                                {/* Offers */}{' '}
                                <div className="space-y-3" data-oid="xcclccv">
                                    {' '}
                                    {request.offers.map((offer) => (
                                        <div
                                            key={offer.id}
                                            className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                                            data-oid="j9o6yua"
                                        >
                                            {' '}
                                            {/* Provider Info */}{' '}
                                            <div
                                                className="flex items-center space-x-3 space-x-reverse mb-3"
                                                data-oid="7mqej6f"
                                            >
                                                {' '}
                                                <div className="text-2xl" data-oid="a.qrf89">
                                                    {' '}
                                                    {offer.avatar}{' '}
                                                </div>{' '}
                                                <div className="flex-1" data-oid="p1mdntp">
                                                    {' '}
                                                    <div
                                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                                        data-oid="k7z8zc1"
                                                    >
                                                        {' '}
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="7bzy4_z"
                                                        >
                                                            {' '}
                                                            {offer.providerName}{' '}
                                                        </h4>{' '}
                                                        {offer.verified && (
                                                            <span
                                                                className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                                data-oid="an3fanj"
                                                            >
                                                                {' '}
                                                                موثق{' '}
                                                            </span>
                                                        )}{' '}
                                                    </div>{' '}
                                                    <div
                                                        className="flex items-center space-x-3 space-x-reverse text-xs text-gray-600"
                                                        data-oid="r5u:dpc"
                                                    >
                                                        {' '}
                                                        <div
                                                            className="flex items-center space-x-1 space-x-reverse"
                                                            data-oid="p3vr_fk"
                                                        >
                                                            {' '}
                                                            <span
                                                                className="text-yellow-500"
                                                                data-oid="07dut.m"
                                                            >
                                                                {' '}
                                                                ⭐{' '}
                                                            </span>{' '}
                                                            <span data-oid="fgvzskq">
                                                                {' '}
                                                                {offer.rating}{' '}
                                                            </span>{' '}
                                                        </div>{' '}
                                                        <span data-oid="eqi2b3w">
                                                            {' '}
                                                            ({offer.completedJobs} خدمة){' '}
                                                        </span>{' '}
                                                    </div>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            {/* Offer Details */}{' '}
                                            <div
                                                className="grid grid-cols-3 gap-2 text-center mb-3"
                                                data-oid="r-smdjj"
                                            >
                                                {' '}
                                                <div data-oid="khf90eb">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-blue-600"
                                                        data-oid="fgyjnzb"
                                                    >
                                                        {' '}
                                                        {offer.price}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="ctpzjfn"
                                                    >
                                                        {' '}
                                                        السعر{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="w:5n-df">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-green-600"
                                                        data-oid="dh75j5d"
                                                    >
                                                        {' '}
                                                        {offer.estimatedTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="s39q3hp"
                                                    >
                                                        {' '}
                                                        المدة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div data-oid="wym55-q">
                                                    {' '}
                                                    <p
                                                        className="text-sm font-bold text-orange-600"
                                                        data-oid=":a7w117"
                                                    >
                                                        {' '}
                                                        {offer.responseTime}{' '}
                                                    </p>{' '}
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="efitl.3"
                                                    >
                                                        {' '}
                                                        الاستجابة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            <p
                                                className="text-xs text-gray-700 mb-3"
                                                data-oid="kl8i3zv"
                                            >
                                                {' '}
                                                {offer.description}{' '}
                                            </p>{' '}
                                            {/* Action Buttons */}{' '}
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="gyheg5y"
                                            >
                                                {' '}
                                                <button
                                                    onClick={() =>
                                                        handleSelectOffer(request, offer)
                                                    }
                                                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                                    data-oid="-igmz40"
                                                >
                                                    {' '}
                                                    قبول العرض{' '}
                                                </button>{' '}
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center justify-center"
                                                    data-oid="uur9wkh"
                                                >
                                                    {' '}
                                                    💬{' '}
                                                </Link>{' '}
                                                <button
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                                    data-oid="z89wkit"
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
                                        data-oid="dj4i-11"
                                    >
                                        {' '}
                                        عرض جميع العروض ({request.offersCount}){' '}
                                    </button>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="fb-86ej">
                        {' '}
                        <div className="text-6xl mb-4" data-oid=":f3fy75">
                            {' '}
                            📋{' '}
                        </div>{' '}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="es.6w:h">
                            {' '}
                            لا توجد عروض متاحة{' '}
                        </h3>{' '}
                        <p className="text-gray-600 text-sm mb-6" data-oid="6liucjw">
                            {' '}
                            اطلب خدمة جديدة لتلقي عروض من مقدمي الخدمات{' '}
                        </p>{' '}
                        <Link
                            href="/"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="b6::zwo"
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
                data-oid="0da:xqc"
            >
                {' '}
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="9lu6cc7">
                    {' '}
                    <div className="flex justify-around" data-oid="q_08:zi">
                        {' '}
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="r1-zf0d"
                        >
                            {' '}
                            <span className="text-xl" data-oid="1f0htts">
                                {' '}
                                🏠{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="z75bsi4">
                                {' '}
                                الرئيسية{' '}
                            </span>{' '}
                        </Link>{' '}
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="mhhiwoo"
                        >
                            {' '}
                            <span className="text-xl" data-oid="rxyr669">
                                {' '}
                                📋{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="n0dz7c.">
                                {' '}
                                طلباتي{' '}
                            </span>{' '}
                        </Link>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="w_2nt2d"
                        >
                            {' '}
                            <span className="text-xl" data-oid="s-f04jc">
                                {' '}
                                💰{' '}
                            </span>{' '}
                            <span className="text-xs font-semibold" data-oid="33d65d0">
                                {' '}
                                العروض{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="-8off7n"
                        >
                            {' '}
                            <span className="text-xl" data-oid=".96fq31">
                                {' '}
                                💬{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="s:n3vb2">
                                {' '}
                                الرسائل{' '}
                            </span>{' '}
                        </button>{' '}
                        <button
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="zt:smef"
                        >
                            {' '}
                            <span className="text-xl" data-oid="og77fqc">
                                {' '}
                                👤{' '}
                            </span>{' '}
                            <span className="text-xs" data-oid="xvajcr9">
                                {' '}
                                الملف الشخصي{' '}
                            </span>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
            {/* Padding for bottom navigation */}{' '}
            <div className="h-20" data-oid="3hu76_c"></div>{' '}
        </div>
    );
}
