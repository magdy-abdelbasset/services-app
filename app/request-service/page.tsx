'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface ServiceProvider {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    completedJobs: number;
    price: string;
    estimatedTime: string;
    description: string;
    verified: boolean;
    responseTime: string;
    distance: string;
    isOnline: boolean;
}

interface ServiceRequest {
    providerId: number;
    providerName: string;
    serviceName: string;
    price: string;
    estimatedTime: string;
    expectedPrice: string;
    address: string;
    phoneNumber: string;
    scheduledDate: string;
    scheduledTime: string;
    notes: string;
    urgency: 'normal' | 'urgent' | 'asap';
}

export default function RequestServicePage() {
    const searchParams = useSearchParams();
    const providerId = searchParams.get('provider');
    const serviceName = searchParams.get('service');

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serviceRequest, setServiceRequest] = useState<ServiceRequest>({
        providerId: parseInt(providerId || '0'),
        providerName: '',
        serviceName: serviceName || '',
        price: '',
        estimatedTime: '',
        expectedPrice: '',
        address: '',
        phoneNumber: '',
        scheduledDate: '',
        scheduledTime: '',
        notes: '',
        urgency: 'normal',
    });

    // Service minimum prices (in SAR)
    const serviceMinPrices: { [key: string]: number } = {
        'تنظيف المنزل': 30,
        'صيانة السباكة': 50,
        'توصيل الطعام': 15,
        'تصليح الأجهزة': 40,
        'خدمات التجميل': 60,
        'صيانة الكهرباء': 45,
        'تنظيف السيارات': 25,
        'خدمات الحدائق': 35,
    };

    const getMinPrice = () => {
        return serviceMinPrices[serviceRequest.serviceName] || 20;
    };

    const [priceError, setPriceError] = useState('');

    // Mock provider data
    const mockProvider: ServiceProvider = {
        id: parseInt(providerId || '1'),
        name: 'أحمد علي',
        avatar: '👨‍💼',
        rating: 4.9,
        completedJobs: 156,
        price: '45 ريال',
        estimatedTime: '25 دقيقة',
        description: 'خبرة 5 سنوات في تنظيف المنازل، أستخدم مواد تنظيف صديقة للبيئة',
        verified: true,
        responseTime: '5 دقائق',
        distance: '2.5 كم',
        isOnline: true,
    };

    useEffect(() => {
        setServiceRequest((prev) => ({
            ...prev,
            providerName: mockProvider.name,
            price: mockProvider.price,
            estimatedTime: mockProvider.estimatedTime,
        }));
    }, []);

    const handleInputChange = (field: keyof ServiceRequest, value: string) => {
        setServiceRequest((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Validate expected price
        if (field === 'expectedPrice') {
            setPriceError('');
            if (value && parseFloat(value) < getMinPrice()) {
                setPriceError(`الحد الأدنى للسعر هو ${getMinPrice()} ريال`);
            }
        }
    };

    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmitRequest = async () => {
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);

            // Show success notification
            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'success',
                    title: 'تم إرسال طلبك بنجاح!',
                    message: 'سيتم التواصل معك من قبل مقدم الخدمة قريباً',
                    duration: 4000,
                });
            }

            // Generate order ID and redirect to confirmation page
            const orderId = Math.floor(Math.random() * 100000);
            setTimeout(() => {
                window.location.href = `/order-confirmation?orderId=${orderId}`;
            }, 1000);
        }, 2000);
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return (
                    serviceRequest.address.trim() !== '' &&
                    serviceRequest.phoneNumber.trim() !== '' &&
                    serviceRequest.expectedPrice.trim() !== '' &&
                    !priceError &&
                    parseFloat(serviceRequest.expectedPrice) >= getMinPrice()
                );

            case 2:
                return serviceRequest.scheduledDate !== '' && serviceRequest.scheduledTime !== '';
            case 3:
                return true; // Notes are optional
            case 4:
                return true; // Review step
            default:
                return false;
        }
    };

    const getStepTitle = () => {
        switch (currentStep) {
            case 1:
                return 'معلومات التواصل';
            case 2:
                return 'تحديد الموعد';
            case 3:
                return 'تفاصيل إضافية';
            case 4:
                return 'مراجعة الطلب';
            default:
                return '';
        }
    };

    const getTomorrowDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            <span className="text-lg">←</span>
                        </Link>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">طلب خدمة</h1>
                            <p className="text-sm text-white/90">{getStepTitle()}</p>
                        </div>
                        <div className="w-10 h-10"></div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center justify-center space-x-2 space-x-reverse">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        step <= currentStep
                                            ? 'bg-white text-blue-600'
                                            : 'bg-white/20 text-white/60'
                                    }`}
                                >
                                    {step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-8 h-1 mx-1 ${
                                            step < currentStep ? 'bg-white' : 'bg-white/20'
                                        }`}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Provider Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="relative">
                            <div className="text-3xl">{mockProvider.avatar}</div>
                            {mockProvider.isOnline && (
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 space-x-reverse mb-1">
                                <h3 className="font-semibold text-gray-800">{mockProvider.name}</h3>
                                {mockProvider.verified && (
                                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                        موثق
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600">
                                <div className="flex items-center space-x-1 space-x-reverse">
                                    <span className="text-yellow-500">⭐</span>
                                    <span>{mockProvider.rating}</span>
                                </div>
                                <span>{serviceRequest.serviceName}</span>
                                <span className="font-semibold text-blue-600">
                                    {mockProvider.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-sm mx-auto px-4 pb-6">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            معلومات التواصل
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    العنوان *
                                </label>
                                <textarea
                                    value={serviceRequest.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="أدخل عنوانك بالتفصيل..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    رقم الهاتف *
                                </label>
                                <input
                                    type="tel"
                                    value={serviceRequest.phoneNumber}
                                    onChange={(e) =>
                                        handleInputChange('phoneNumber', e.target.value)
                                    }
                                    placeholder="05xxxxxxxx"
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    السعر المتوقع *
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={serviceRequest.expectedPrice}
                                        onChange={(e) =>
                                            handleInputChange('expectedPrice', e.target.value)
                                        }
                                        placeholder={`أدخل السعر المتوقع (الحد الأدنى: ${getMinPrice()} ريال)`}
                                        min={getMinPrice()}
                                        className={`w-full p-3 border rounded-xl outline-none focus:border-blue-500 ${
                                            priceError ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                    />

                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        ريال
                                    </span>
                                </div>
                                {priceError && (
                                    <p className="text-red-500 text-xs mt-1">{priceError}</p>
                                )}
                                <div className="bg-blue-50 p-3 rounded-lg mt-2">
                                    <div className="flex items-center space-x-2 space-x-reverse mb-1">
                                        <span className="text-blue-600">💰</span>
                                        <span className="text-sm font-semibold text-blue-800">
                                            معلومات السعر
                                        </span>
                                    </div>
                                    <p className="text-xs text-blue-700">
                                        الحد الأدنى لخدمة {serviceRequest.serviceName}:{' '}
                                        {getMinPrice()} ريال
                                        <br />
                                        السعر المقترح من مقدم الخدمة: {mockProvider.price}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    مستوى الأولوية
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { value: 'normal', label: 'عادي', color: 'bg-gray-100' },
                                        {
                                            value: 'urgent',
                                            label: 'مستعجل',
                                            color: 'bg-orange-100',
                                        },
                                        { value: 'asap', label: 'فوري', color: 'bg-red-100' },
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() =>
                                                handleInputChange('urgency', option.value)
                                            }
                                            className={`p-3 rounded-xl text-sm font-semibold transition-colors ${
                                                serviceRequest.urgency === option.value
                                                    ? 'bg-blue-500 text-white'
                                                    : `${option.color} text-gray-700`
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Schedule */}
                {currentStep === 2 && (
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">تحديد الموعد</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    التاريخ المطلوب *
                                </label>
                                <input
                                    type="date"
                                    value={serviceRequest.scheduledDate}
                                    onChange={(e) =>
                                        handleInputChange('scheduledDate', e.target.value)
                                    }
                                    min={getTomorrowDate()}
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    الوقت المفضل *
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        '08:00',
                                        '09:00',
                                        '10:00',
                                        '11:00',
                                        '14:00',
                                        '15:00',
                                        '16:00',
                                        '17:00',
                                        '18:00',
                                        '19:00',
                                        '20:00',
                                        '21:00',
                                    ].map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => handleInputChange('scheduledTime', time)}
                                            className={`p-3 rounded-xl text-sm font-semibold transition-colors ${
                                                serviceRequest.scheduledTime === time
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-100 text-gray-700'
                                            }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl">
                                <div className="flex items-center space-x-2 space-x-reverse mb-2">
                                    <span className="text-blue-600">ℹ️</span>
                                    <span className="text-sm font-semibold text-blue-800">
                                        معلومة مهمة
                                    </span>
                                </div>
                                <p className="text-sm text-blue-700">
                                    المدة المتوقعة للخدمة: {mockProvider.estimatedTime}
                                    <br />
                                    وقت استجابة مقدم الخدمة: {mockProvider.responseTime}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">تفاصيل إضافية</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    ملاحظات خاصة (اختياري)
                                </label>
                                <textarea
                                    value={serviceRequest.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="أي تفاصيل إضافية تريد إخبار مقدم الخدمة بها..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={4}
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl">
                                <div className="flex items-center space-x-2 space-x-reverse mb-2">
                                    <span className="text-yellow-600">💡</span>
                                    <span className="text-sm font-semibold text-yellow-800">
                                        نصائح مفيدة
                                    </span>
                                </div>
                                <ul className="text-sm text-yellow-700 space-y-1">
                                    <li>• اذكر أي متطلبات خاصة للخدمة</li>
                                    <li>• حدد إذا كان هناك حيوانات أليفة في المنزل</li>
                                    <li>• اذكر أي مواد تنظيف مفضلة أو محظورة</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                مراجعة الطلب
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">الخدمة:</span>
                                    <span className="font-semibold">
                                        {serviceRequest.serviceName}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">مقدم الخدمة:</span>
                                    <span className="font-semibold">
                                        {serviceRequest.providerName}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">السعر المتوقع:</span>
                                    <span className="font-semibold text-blue-600">
                                        {serviceRequest.expectedPrice} ريال
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">سعر مقدم الخدمة:</span>
                                    <span className="font-semibold text-gray-600">
                                        {serviceRequest.price}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">التاريخ:</span>
                                    <span className="font-semibold">
                                        {serviceRequest.scheduledDate}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">الوقت:</span>
                                    <span className="font-semibold">
                                        {serviceRequest.scheduledTime}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">الأولوية:</span>
                                    <span
                                        className={`font-semibold ${
                                            serviceRequest.urgency === 'asap'
                                                ? 'text-red-600'
                                                : serviceRequest.urgency === 'urgent'
                                                  ? 'text-orange-600'
                                                  : 'text-gray-600'
                                        }`}
                                    >
                                        {serviceRequest.urgency === 'asap'
                                            ? 'فوري'
                                            : serviceRequest.urgency === 'urgent'
                                              ? 'مستعجل'
                                              : 'عادي'}
                                    </span>
                                </div>
                                <div className="py-2">
                                    <span className="text-gray-600 block mb-2">العنوان:</span>
                                    <span className="text-sm bg-gray-50 p-3 rounded-lg block">
                                        {serviceRequest.address}
                                    </span>
                                </div>
                                {serviceRequest.notes && (
                                    <div className="py-2">
                                        <span className="text-gray-600 block mb-2">ملاحظات:</span>
                                        <span className="text-sm bg-gray-50 p-3 rounded-lg block">
                                            {serviceRequest.notes}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Price Comparison */}
                        {(() => {
                            const expectedPrice = parseFloat(serviceRequest.expectedPrice);
                            const providerPrice = parseFloat(
                                mockProvider.price.replace(' ريال', ''),
                            );
                            const priceDifference = expectedPrice - providerPrice;

                            return (
                                <div
                                    className={`p-4 rounded-xl ${
                                        priceDifference > 0
                                            ? 'bg-green-50'
                                            : priceDifference < 0
                                              ? 'bg-yellow-50'
                                              : 'bg-blue-50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2 space-x-reverse mb-2">
                                        <span
                                            className={
                                                priceDifference > 0
                                                    ? 'text-green-600'
                                                    : priceDifference < 0
                                                      ? 'text-yellow-600'
                                                      : 'text-blue-600'
                                            }
                                        >
                                            {priceDifference > 0
                                                ? '💰'
                                                : priceDifference < 0
                                                  ? '⚠️'
                                                  : 'ℹ️'}
                                        </span>
                                        <span
                                            className={`text-sm font-semibold ${
                                                priceDifference > 0
                                                    ? 'text-green-800'
                                                    : priceDifference < 0
                                                      ? 'text-yellow-800'
                                                      : 'text-blue-800'
                                            }`}
                                        >
                                            مقارنة الأسعار
                                        </span>
                                    </div>
                                    <p
                                        className={`text-sm ${
                                            priceDifference > 0
                                                ? 'text-green-700'
                                                : priceDifference < 0
                                                  ? 'text-yellow-700'
                                                  : 'text-blue-700'
                                        }`}
                                    >
                                        {priceDifference > 0
                                            ? `السعر المتوقع أعلى بـ ${priceDifference} ريال من سعر مقدم الخدمة`
                                            : priceDifference < 0
                                              ? `السعر المتوقع أقل بـ ${Math.abs(priceDifference)} ريال من سعر مقدم الخدمة`
                                              : 'السعر المتوقع مطابق لسعر مقدم الخدمة'}
                                    </p>
                                </div>
                            );
                        })()}

                        <div className="bg-green-50 p-4 rounded-xl">
                            <div className="flex items-center space-x-2 space-x-reverse mb-2">
                                <span className="text-green-600">✅</span>
                                <span className="text-sm font-semibold text-green-800">
                                    ضمان الخدمة
                                </span>
                            </div>
                            <p className="text-sm text-green-700">
                                جميع الخدمات مضمونة 100% ويمكنك إلغاء الطلب قبل وصول مقدم الخدمة
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 space-x-reverse mt-6">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePrevStep}
                            className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                        >
                            السابق
                        </button>
                    )}

                    {currentStep < 4 ? (
                        <button
                            onClick={handleNextStep}
                            disabled={!isStepValid()}
                            className={`flex-1 py-4 rounded-2xl font-semibold ${
                                isStepValid()
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            التالي
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmitRequest}
                            disabled={isSubmitting}
                            className={`flex-1 py-4 rounded-2xl font-semibold ${
                                isSubmitting
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-green-500 text-white'
                            }`}
                        >
                            {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب'}
                        </button>
                    )}
                </div>
            </div>

            {/* Loading Modal */}
            {isSubmitting && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center">
                        <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">جاري إرسال طلبك</h3>
                        <p className="text-gray-600 text-sm">
                            يرجى الانتظار بينما نرسل طلبك لمقدم الخدمة...
                        </p>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
