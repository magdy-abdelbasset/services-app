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
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {' '}
            {/* Header */}{' '}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {' '}
                <div className="max-w-sm mx-auto px-4 py-6">
                    {' '}
                    <div className="flex items-center justify-between mb-4">
                        {' '}
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            {' '}
                            <span className="text-lg"> ← </span>{' '}
                        </Link>{' '}
                        <h1 className="text-xl font-bold"> العروض المتاحة </h1>{' '}
                        <div className="w-10 h-10"></div>{' '}
                    </div>{' '}
                    <p className="text-white/90 text-sm text-center">
                        {' '}
                        اختر أفضل العروض من مقدمي الخدمات{' '}
                    </p>{' '}
                </div>{' '}
            </div>{' '}
            {/* Pending Requests */}{' '}
            <div className="max-w-sm mx-auto px-4 py-6">
                {' '}
                {pendingOffers.length > 0 ? (
                    <div className="space-y-6">
                        {' '}
                        {pendingOffers.map((request) => (
                            <div
                                key={request.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            >
                                {' '}
                                {/* Service Info */}{' '}
                                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                                    {' '}
                                    <div className="text-2xl"> {request.serviceIcon} </div>{' '}
                                    <div className="flex-1">
                                        {' '}
                                        <h3 className="font-semibold text-gray-800">
                                            {' '}
                                            {request.serviceName}{' '}
                                        </h3>{' '}
                                        <p className="text-sm text-gray-600">
                                            {' '}
                                            طُلب في: {request.requestTime}{' '}
                                        </p>{' '}
                                    </div>{' '}
                                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {' '}
                                        {request.offersCount} عروض{' '}
                                    </div>{' '}
                                </div>{' '}
                                {/* Offers */}{' '}
                                <div className="space-y-3">
                                    {' '}
                                    {request.offers.map((offer) => (
                                        <div
                                            key={offer.id}
                                            className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                                        >
                                            {' '}
                                            {/* Provider Info */}{' '}
                                            <div className="flex items-center space-x-3 space-x-reverse mb-3">
                                                {' '}
                                                <div className="text-2xl">
                                                    {' '}
                                                    {offer.avatar}{' '}
                                                </div>{' '}
                                                <div className="flex-1">
                                                    {' '}
                                                    <div className="flex items-center space-x-2 space-x-reverse mb-1">
                                                        {' '}
                                                        <h4 className="font-semibold text-gray-800 text-sm">
                                                            {' '}
                                                            {offer.providerName}{' '}
                                                        </h4>{' '}
                                                        {offer.verified && (
                                                            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                                                {' '}
                                                                موثق{' '}
                                                            </span>
                                                        )}{' '}
                                                    </div>{' '}
                                                    <div className="flex items-center space-x-3 space-x-reverse text-xs text-gray-600">
                                                        {' '}
                                                        <div className="flex items-center space-x-1 space-x-reverse">
                                                            {' '}
                                                            <span className="text-yellow-500">
                                                                {' '}
                                                                ⭐{' '}
                                                            </span>{' '}
                                                            <span> {offer.rating} </span>{' '}
                                                        </div>{' '}
                                                        <span>
                                                            {' '}
                                                            ({offer.completedJobs} خدمة){' '}
                                                        </span>{' '}
                                                    </div>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            {/* Offer Details */}{' '}
                                            <div className="grid grid-cols-3 gap-2 text-center mb-3">
                                                {' '}
                                                <div>
                                                    {' '}
                                                    <p className="text-sm font-bold text-blue-600">
                                                        {' '}
                                                        {offer.price}{' '}
                                                    </p>{' '}
                                                    <p className="text-xs text-gray-500">
                                                        {' '}
                                                        السعر{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div>
                                                    {' '}
                                                    <p className="text-sm font-bold text-green-600">
                                                        {' '}
                                                        {offer.estimatedTime}{' '}
                                                    </p>{' '}
                                                    <p className="text-xs text-gray-500">
                                                        {' '}
                                                        المدة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                                <div>
                                                    {' '}
                                                    <p className="text-sm font-bold text-orange-600">
                                                        {' '}
                                                        {offer.responseTime}{' '}
                                                    </p>{' '}
                                                    <p className="text-xs text-gray-500">
                                                        {' '}
                                                        الاستجابة{' '}
                                                    </p>{' '}
                                                </div>{' '}
                                            </div>{' '}
                                            <p className="text-xs text-gray-700 mb-3">
                                                {' '}
                                                {offer.description}{' '}
                                            </p>{' '}
                                            {/* Action Buttons */}{' '}
                                            <div className="flex space-x-2 space-x-reverse">
                                                {' '}
                                                <button
                                                    onClick={() =>
                                                        handleSelectOffer(request, offer)
                                                    }
                                                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                                                >
                                                    {' '}
                                                    قبول العرض{' '}
                                                </button>{' '}
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center justify-center"
                                                >
                                                    {' '}
                                                    💬{' '}
                                                </Link>{' '}
                                                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                                                    {' '}
                                                    ❌{' '}
                                                </button>{' '}
                                            </div>{' '}
                                        </div>
                                    ))}{' '}
                                </div>{' '}
                                {/* View All Offers */}{' '}
                                {request.offersCount > request.offers.length && (
                                    <button className="w-full mt-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">
                                        {' '}
                                        عرض جميع العروض ({request.offersCount}){' '}
                                    </button>
                                )}{' '}
                            </div>
                        ))}{' '}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        {' '}
                        <div className="text-6xl mb-4"> 📋 </div>{' '}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {' '}
                            لا توجد عروض متاحة{' '}
                        </h3>{' '}
                        <p className="text-gray-600 text-sm mb-6">
                            {' '}
                            اطلب خدمة جديدة لتلقي عروض من مقدمي الخدمات{' '}
                        </p>{' '}
                        <Link
                            href="/"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                        >
                            {' '}
                            طلب خدمة جديدة{' '}
                        </Link>{' '}
                    </div>
                )}{' '}
            </div>{' '}
            {/* Bottom Navigation */}{' '}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                {' '}
                <div className="max-w-sm mx-auto px-4 py-3">
                    {' '}
                    <div className="flex justify-around">
                        {' '}
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            {' '}
                            <span className="text-xl"> 🏠 </span>{' '}
                            <span className="text-xs"> الرئيسية </span>{' '}
                        </Link>{' '}
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            {' '}
                            <span className="text-xl"> 📋 </span>{' '}
                            <span className="text-xs"> طلباتي </span>{' '}
                        </Link>{' '}
                        <button className="flex flex-col items-center space-y-1 text-blue-600">
                            {' '}
                            <span className="text-xl"> 💰 </span>{' '}
                            <span className="text-xs font-semibold"> العروض </span>{' '}
                        </button>{' '}
                        <button className="flex flex-col items-center space-y-1 text-gray-400">
                            {' '}
                            <span className="text-xl"> 💬 </span>{' '}
                            <span className="text-xs"> الرسائل </span>{' '}
                        </button>{' '}
                        <button className="flex flex-col items-center space-y-1 text-gray-400">
                            {' '}
                            <span className="text-xl"> 👤 </span>{' '}
                            <span className="text-xs"> الملف الشخصي </span>{' '}
                        </button>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
            {/* Padding for bottom navigation */} <div className="h-20"></div>{' '}
        </div>
    );
}
