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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="srpf3r0">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="p-_pntf"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="460yrl:">
                    <div className="flex items-center justify-between mb-4" data-oid="r:8r3x2">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="_n3ztsn"
                        >
                            <span className="text-lg" data-oid="n41utk8">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="3p2f:4q">
                            <h1 className="text-lg font-bold" data-oid="att63ni">
                                طلب خدمة
                            </h1>
                            <p className="text-sm text-white/90" data-oid="1.mvw3v">
                                {getStepTitle()}
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="nip8279"></div>
                    </div>

                    {/* Progress Bar */}
                    <div
                        className="flex items-center justify-center space-x-2 space-x-reverse"
                        data-oid="s9k60-r"
                    >
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center" data-oid="hw9q8m3">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        step <= currentStep
                                            ? 'bg-white text-blue-600'
                                            : 'bg-white/20 text-white/60'
                                    }`}
                                    data-oid="1-6ap8j"
                                >
                                    {step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-8 h-1 mx-1 ${
                                            step < currentStep ? 'bg-white' : 'bg-white/20'
                                        }`}
                                        data-oid="8er2vu_"
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Provider Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="q2ea7zf">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="53in_fi">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="s2jf68g">
                        <div className="relative" data-oid=":8:274g">
                            <div className="text-3xl" data-oid="joxhl2p">
                                {mockProvider.avatar}
                            </div>
                            {mockProvider.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="jn9jh4_"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid="qh1.d:.">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-1"
                                data-oid="3la2uxs"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="4dpok2y">
                                    {mockProvider.name}
                                </h3>
                                {mockProvider.verified && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                        data-oid=".91v19c"
                                    >
                                        موثق
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600"
                                data-oid="d7i70hx"
                            >
                                <div
                                    className="flex items-center space-x-1 space-x-reverse"
                                    data-oid="kruf5lp"
                                >
                                    <span className="text-yellow-500" data-oid="4pl3xa1">
                                        ⭐
                                    </span>
                                    <span data-oid="g1rkyk9">{mockProvider.rating}</span>
                                </div>
                                <span data-oid="frlmq4l">{serviceRequest.serviceName}</span>
                                <span className="font-semibold text-blue-600" data-oid="z.x-i3:">
                                    {mockProvider.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="a0gkwb4">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="y2d334_"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid=":q1tw99">
                            معلومات التواصل
                        </h3>

                        <div className="space-y-4" data-oid="v2lx4wb">
                            <div data-oid="7yn8ck3">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="okt_2e."
                                >
                                    العنوان *
                                </label>
                                <textarea
                                    value={serviceRequest.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="أدخل عنوانك بالتفصيل..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={3}
                                    data-oid=".lfv6us"
                                />
                            </div>

                            <div data-oid="e7t0pcn">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="y-90-53"
                                >
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
                                    data-oid="myni70z"
                                />
                            </div>

                            <div data-oid="ch.mady">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="13n_ehi"
                                >
                                    السعر المتوقع *
                                </label>
                                <div className="relative" data-oid="i55f-z_">
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
                                        data-oid="cdd2c_0"
                                    />

                                    <span
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        data-oid="x2xwxji"
                                    >
                                        ريال
                                    </span>
                                </div>
                                {priceError && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="v0oaqoj">
                                        {priceError}
                                    </p>
                                )}
                                <div className="bg-blue-50 p-3 rounded-lg mt-2" data-oid="d8-453n">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="ox98fu_"
                                    >
                                        <span className="text-blue-600" data-oid="nyoydhz">
                                            💰
                                        </span>
                                        <span
                                            className="text-sm font-semibold text-blue-800"
                                            data-oid="fn3-7p0"
                                        >
                                            معلومات السعر
                                        </span>
                                    </div>
                                    <p className="text-xs text-blue-700" data-oid="du7v9s7">
                                        الحد الأدنى لخدمة {serviceRequest.serviceName}:{' '}
                                        {getMinPrice()} ريال
                                        <br data-oid="nbhrn13" />
                                        السعر المقترح من مقدم الخدمة: {mockProvider.price}
                                    </p>
                                </div>
                            </div>

                            <div data-oid="btj_a0v">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="vcip2vt"
                                >
                                    مستوى الأولوية
                                </label>
                                <div className="grid grid-cols-3 gap-2" data-oid="qqsw4zl">
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
                                            data-oid="lhx0_1b"
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
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="s-ralzd"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid=":j54_85">
                            تحديد الموعد
                        </h3>

                        <div className="space-y-4" data-oid="ea059c0">
                            <div data-oid="y:7rp-z">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="0wqr325"
                                >
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
                                    data-oid="29x8:a_"
                                />
                            </div>

                            <div data-oid="qre1f0k">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="bveqddv"
                                >
                                    الوقت المفضل *
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="k4myhg4">
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
                                            data-oid="72xa:6j"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl" data-oid="c78wxd7">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="0pplij9"
                                >
                                    <span className="text-blue-600" data-oid="zxv4fel">
                                        ℹ️
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-blue-800"
                                        data-oid="1d7rlta"
                                    >
                                        معلومة مهمة
                                    </span>
                                </div>
                                <p className="text-sm text-blue-700" data-oid="::nyhwo">
                                    المدة المتوقعة للخدمة: {mockProvider.estimatedTime}
                                    <br data-oid="7smi7ee" />
                                    وقت استجابة مقدم الخدمة: {mockProvider.responseTime}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="od6:w4x"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="i-1y9x4">
                            تفاصيل إضافية
                        </h3>

                        <div className="space-y-4" data-oid="qiwppc-">
                            <div data-oid="xoc9_52">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="985fyz6"
                                >
                                    ملاحظات خاصة (اختياري)
                                </label>
                                <textarea
                                    value={serviceRequest.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="أي تفاصيل إضافية تريد إخبار مقدم الخدمة بها..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={4}
                                    data-oid="zi30nus"
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl" data-oid="zsyek2y">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="70yp3.i"
                                >
                                    <span className="text-yellow-600" data-oid="99fkakk">
                                        💡
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-yellow-800"
                                        data-oid="e_ephr8"
                                    >
                                        نصائح مفيدة
                                    </span>
                                </div>
                                <ul
                                    className="text-sm text-yellow-700 space-y-1"
                                    data-oid="42zik46"
                                >
                                    <li data-oid="7rjdl-c">• اذكر أي متطلبات خاصة للخدمة</li>
                                    <li data-oid="1hd5n-n">
                                        • حدد إذا كان هناك حيوانات أليفة في المنزل
                                    </li>
                                    <li data-oid="u8.zq3z">• اذكر أي مواد تنظيف مفضلة أو محظورة</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="space-y-4" data-oid="t1dczpr">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="csf8zj-"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="6bi-iu1"
                            >
                                مراجعة الطلب
                            </h3>

                            <div className="space-y-4" data-oid="m-bmutg">
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="26t0fxz"
                                >
                                    <span className="text-gray-600" data-oid="83varvz">
                                        الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="a8mg-wz">
                                        {serviceRequest.serviceName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="2_p1.nd"
                                >
                                    <span className="text-gray-600" data-oid="qvofqtt">
                                        مقدم الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="vu.:9wv">
                                        {serviceRequest.providerName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="xfq8i_f"
                                >
                                    <span className="text-gray-600" data-oid="xjxz9xr">
                                        السعر المتوقع:
                                    </span>
                                    <span
                                        className="font-semibold text-blue-600"
                                        data-oid="y9x1_16"
                                    >
                                        {serviceRequest.expectedPrice} ريال
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="ajq7ktm"
                                >
                                    <span className="text-gray-600" data-oid=":yld3eu">
                                        سعر مقدم الخدمة:
                                    </span>
                                    <span
                                        className="font-semibold text-gray-600"
                                        data-oid="o3j2qv6"
                                    >
                                        {serviceRequest.price}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="ywztjpe"
                                >
                                    <span className="text-gray-600" data-oid="zhx.ygo">
                                        التاريخ:
                                    </span>
                                    <span className="font-semibold" data-oid="0-m_1xk">
                                        {serviceRequest.scheduledDate}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="52v645c"
                                >
                                    <span className="text-gray-600" data-oid="57nuldd">
                                        الوقت:
                                    </span>
                                    <span className="font-semibold" data-oid="vx6nk8c">
                                        {serviceRequest.scheduledTime}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="_zwzp2_"
                                >
                                    <span className="text-gray-600" data-oid="5ns7xxc">
                                        الأولوية:
                                    </span>
                                    <span
                                        className={`font-semibold ${
                                            serviceRequest.urgency === 'asap'
                                                ? 'text-red-600'
                                                : serviceRequest.urgency === 'urgent'
                                                  ? 'text-orange-600'
                                                  : 'text-gray-600'
                                        }`}
                                        data-oid="f.vh1ru"
                                    >
                                        {serviceRequest.urgency === 'asap'
                                            ? 'فوري'
                                            : serviceRequest.urgency === 'urgent'
                                              ? 'مستعجل'
                                              : 'عادي'}
                                    </span>
                                </div>
                                <div className="py-2" data-oid="ej-9yiq">
                                    <span className="text-gray-600 block mb-2" data-oid="qpb1ytf">
                                        العنوان:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="j47y7b1"
                                    >
                                        {serviceRequest.address}
                                    </span>
                                </div>
                                {serviceRequest.notes && (
                                    <div className="py-2" data-oid="3i5td9e">
                                        <span
                                            className="text-gray-600 block mb-2"
                                            data-oid="d3z_2x:"
                                        >
                                            ملاحظات:
                                        </span>
                                        <span
                                            className="text-sm bg-gray-50 p-3 rounded-lg block"
                                            data-oid="2j_u7ok"
                                        >
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
                                    data-oid="w1-t:5a"
                                >
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-2"
                                        data-oid="o4bc3sx"
                                    >
                                        <span
                                            className={
                                                priceDifference > 0
                                                    ? 'text-green-600'
                                                    : priceDifference < 0
                                                      ? 'text-yellow-600'
                                                      : 'text-blue-600'
                                            }
                                            data-oid="ljickbp"
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
                                            data-oid="wog0xbu"
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
                                        data-oid="7k1_bxq"
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

                        <div className="bg-green-50 p-4 rounded-xl" data-oid="-30f7gz">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-2"
                                data-oid="u24:qkv"
                            >
                                <span className="text-green-600" data-oid="n_ic0tw">
                                    ✅
                                </span>
                                <span
                                    className="text-sm font-semibold text-green-800"
                                    data-oid="3:swg2g"
                                >
                                    ضمان الخدمة
                                </span>
                            </div>
                            <p className="text-sm text-green-700" data-oid="v9kbnl9">
                                جميع الخدمات مضمونة 100% ويمكنك إلغاء الطلب قبل وصول مقدم الخدمة
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 space-x-reverse mt-6" data-oid="h966m_a">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePrevStep}
                            className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                            data-oid="0w-0azx"
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
                            data-oid="lu7cm4a"
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
                            data-oid="9y4m:ix"
                        >
                            {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب'}
                        </button>
                    )}
                </div>
            </div>

            {/* Loading Modal */}
            {isSubmitting && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    data-oid="e33acgi"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="3zv6n6h"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="hs:vibu"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="-r0ay35">
                            جاري إرسال طلبك
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="5g6.ig1">
                            يرجى الانتظار بينما نرسل طلبك لمقدم الخدمة...
                        </p>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="eq4-n8n"></div>
        </div>
    );
}
