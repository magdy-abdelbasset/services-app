'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [selectedService, setSelectedService] = useState(null);
    const [showOffers, setShowOffers] = useState(false);
    const [requestingOffers, setRequestingOffers] = useState(false);

    const mainCategories = [
        { id: 1, name: 'خدمات المنزل', icon: '🏠', color: 'bg-blue-500' },
        { id: 2, name: 'الصيانة والإصلاح', icon: '🔧', color: 'bg-orange-500' },
        { id: 3, name: 'التوصيل والنقل', icon: '🚚', color: 'bg-green-500' },
        { id: 4, name: 'الجمال والعناية', icon: '💄', color: 'bg-pink-500' },
        { id: 5, name: 'البستنة والحدائق', icon: '🌱', color: 'bg-emerald-500' },
        { id: 6, name: 'التعليم والتدريب', icon: '📚', color: 'bg-purple-500' },
    ];

    const services = [
        { id: 1, name: 'تنظيف المنزل', icon: '🏠' },
        { id: 2, name: 'صيانة السباكة', icon: '🔧' },
        { id: 3, name: 'توصيل الطعام', icon: '🍕' },
        { id: 4, name: 'خدمات التجميل', icon: '💄' },
        { id: 5, name: 'تصليح الأجهزة', icon: '📱' },
        { id: 6, name: 'خدمات البستنة', icon: '🌱' },
    ];

    // Sample offers data
    const sampleOffers = [
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
        {
            id: 3,
            providerName: 'محمد حسن',
            rating: 4.7,
            completedJobs: 89,
            price: '40 ريال',
            estimatedTime: '35 دقيقة',
            description: 'خدمة تنظيف شاملة بأسعار منافسة',
            avatar: '👨‍🔧',
            verified: false,
            responseTime: '10 دقائق',
        },
    ];

    const handleRequestOffers = () => {
        setRequestingOffers(true);
        // Simulate API call
        setTimeout(() => {
            setRequestingOffers(false);
            setShowOffers(true);
            setSelectedService(null);
        }, 2000);
    };

    const handleSelectOffer = (offer) => {
        alert(`تم اختيار العرض من ${offer.providerName} بسعر ${offer.price}`);
        setShowOffers(false);
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-lg">👤</span>
                            </div>
                            <div>
                                <p className="text-sm opacity-90">مرحباً</p>
                                <p className="font-semibold">أحمد محمد</p>
                            </div>
                        </div>
                        <Link
                            href="/notifications"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                        >
                            <span className="text-lg">🔔</span>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                3
                            </span>
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold mb-2">اطلب خدمتك الآن</h1>
                    <p className="text-white/90 text-sm">خدمات موثوقة وسريعة في منطقتك</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <span className="text-gray-400">🔍</span>
                        <input
                            type="text"
                            placeholder="ابحث عن الخدمة التي تريدها..."
                            className="flex-1 outline-none text-gray-700"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-sm mx-auto px-4 mb-6">
                <div className="flex space-x-4 space-x-reverse">
                    <Link
                        href="/request-service?service=طلب سريع"
                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center"
                    >
                        طلب سريع
                    </Link>
                    <Link
                        href="/orders"
                        className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                    >
                        طلباتي
                    </Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-sm mx-auto px-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-800">التصنيفات الرئيسية</h2>
                    <Link href="/categories" className="text-blue-600 text-sm font-semibold">
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    {mainCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                            >
                                <span className="text-2xl">{category.icon}</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm text-center">
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Popular Services */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">الأكثر طلباً</h3>
                    <div className="space-y-3">
                        {services.slice(0, 3).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse"
                            >
                                <div className="text-2xl">{service.icon}</div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800">{service.name}</h4>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedService(service);
                                        handleRequestOffers();
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                >
                                    اطلب
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="max-w-sm mx-auto px-4 py-3">
                    <div className="flex justify-around">
                        <button className="flex flex-col items-center space-y-1 text-blue-600">
                            <span className="text-xl">🏠</span>
                            <span className="text-xs font-semibold">الرئيسية</span>
                        </button>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">📂</span>
                            <span className="text-xs">التصنيفات</span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">📋</span>
                            <span className="text-xs">طلباتي</span>
                        </Link>
                        <Link
                            href="/wallet"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💰</span>
                            <span className="text-xs">المحفظة</span>
                        </Link>
                        <Link
                            href="/settings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">⚙️</span>
                            <span className="text-xs">الإعدادات</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Service Modal */}
            {selectedService && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-end z-50"
                    onClick={() => setSelectedService(null)}
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>

                        <div className="text-center mb-6">
                            <div className="text-4xl mb-3">{selectedService.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {selectedService.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">خدمة موثوقة ومضمونة</p>

                            <div className="flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-green-500">30</p>
                                    <p className="text-xs text-gray-500">دقيقة</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={handleRequestOffers}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                            >
                                طلب عروض من مقدمي الخدمة
                            </button>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Requesting Offers Modal */}
            {requestingOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center">
                        <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            جاري البحث عن مقدمي الخدمة
                        </h3>
                        <p className="text-gray-600 text-sm">
                            يرجى الانتظار بينما نجمع أفضل العروض لك...
                        </p>
                    </div>
                </div>
            )}

            {/* Offers Modal */}
            {showOffers && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50">
                    <div className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-800">العروض المتاحة</h3>
                                <button
                                    onClick={() => setShowOffers(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                >
                                    <span className="text-gray-600">✕</span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">اختر أفضل عرض يناسبك</p>
                        </div>

                        {/* Offers List */}
                        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-4">
                            <div className="space-y-4">
                                {sampleOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                                    >
                                        {/* Provider Info */}
                                        <div className="flex items-start space-x-3 space-x-reverse mb-4">
                                            <div className="text-3xl">{offer.avatar}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 space-x-reverse mb-1">
                                                    <h4 className="font-semibold text-gray-800">
                                                        {offer.providerName}
                                                    </h4>
                                                    {offer.verified && (
                                                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600">
                                                    <div className="flex items-center space-x-1 space-x-reverse">
                                                        <span className="text-yellow-500">⭐</span>
                                                        <span>{offer.rating}</span>
                                                    </div>
                                                    <span>({offer.completedJobs} خدمة مكتملة)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Offer Details */}
                                        <div className="bg-white rounded-xl p-3 mb-4">
                                            <div className="grid grid-cols-3 gap-4 text-center mb-3">
                                                <div>
                                                    <p className="text-lg font-bold text-blue-600">
                                                        {offer.price}
                                                    </p>
                                                    <p className="text-xs text-gray-500">السعر</p>
                                                </div>
                                                <div>
                                                    <p className="text-lg font-bold text-green-600">
                                                        {offer.estimatedTime}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        المدة المتوقعة
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-lg font-bold text-orange-600">
                                                        {offer.responseTime}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        وقت الاستجابة
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-700 text-center">
                                                {offer.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3 space-x-reverse">
                                            <button
                                                onClick={() => handleSelectOffer(offer)}
                                                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                            >
                                                اختيار هذا العرض
                                            </button>
                                            <div className="flex space-x-2 space-x-reverse">
                                                <Link
                                                    href={`/chat/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                >
                                                    💬
                                                </Link>
                                                <Link
                                                    href={`/provider-profile/${offer.id}`}
                                                    className="px-3 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                                >
                                                    👁️
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Request More Offers */}
                            <div className="mt-6 p-4 bg-blue-50 rounded-2xl text-center">
                                <p className="text-sm text-gray-600 mb-3">لم تجد العرض المناسب؟</p>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold">
                                    طلب المزيد من العروض
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
