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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="haj1jmg">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="z:vmhm."
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="v2k1w-g">
                    <div className="flex items-center justify-between mb-4" data-oid=".n:kj5d">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="hq:45_3"
                        >
                            <span className="text-lg" data-oid="d5q0ofp">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="nebeq6a">
                            <h1 className="text-lg font-bold" data-oid="jmn.6xz">
                                طلب خدمة
                            </h1>
                            <p className="text-sm text-white/90" data-oid="9g2oai6">
                                {getStepTitle()}
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="y2dy4u6"></div>
                    </div>

                    {/* Progress Bar */}
                    <div
                        className="flex items-center justify-center space-x-2 space-x-reverse"
                        data-oid="9_k-o.l"
                    >
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center" data-oid="dmzxtsf">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        step <= currentStep
                                            ? 'bg-white text-blue-600'
                                            : 'bg-white/20 text-white/60'
                                    }`}
                                    data-oid="zh.0bno"
                                >
                                    {step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-8 h-1 mx-1 ${
                                            step < currentStep ? 'bg-white' : 'bg-white/20'
                                        }`}
                                        data-oid="-5:-pyt"
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Provider Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="jpoo5cw">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="cgvgq:p">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="sc-18am">
                        <div className="relative" data-oid="qj6mkrq">
                            <div className="text-3xl" data-oid="nzum8yw">
                                {mockProvider.avatar}
                            </div>
                            {mockProvider.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="h6vai6j"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid="-o0k5s5">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-1"
                                data-oid="8jb1blu"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="c0k8qry">
                                    {mockProvider.name}
                                </h3>
                                {mockProvider.verified && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                        data-oid="nhpk9dd"
                                    >
                                        موثق
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600"
                                data-oid="hgd9duy"
                            >
                                <div
                                    className="flex items-center space-x-1 space-x-reverse"
                                    data-oid="z_:yqt-"
                                >
                                    <span className="text-yellow-500" data-oid="oagaipv">
                                        ⭐
                                    </span>
                                    <span data-oid="h9.ry.y">{mockProvider.rating}</span>
                                </div>
                                <span data-oid="6k7yjj4">{serviceRequest.serviceName}</span>
                                <span className="font-semibold text-blue-600" data-oid="_tf_cz.">
                                    {mockProvider.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="9a_rpul">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="x:ypm20"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="__jusz5">
                            معلومات التواصل
                        </h3>

                        <div className="space-y-4" data-oid="y2ccq2n">
                            <div data-oid="22-:clc">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="k_5k_im"
                                >
                                    العنوان *
                                </label>
                                <textarea
                                    value={serviceRequest.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="أدخل عنوانك بالتفصيل..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={3}
                                    data-oid="y_m9yht"
                                />
                            </div>

                            <div data-oid="dy-foco">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="1ggylxh"
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
                                    data-oid="2kueu3h"
                                />
                            </div>

                            <div data-oid=":1-7tb1">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="9mh9lzp"
                                >
                                    السعر المتوقع *
                                </label>
                                <div className="relative" data-oid=".l-uo:f">
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
                                        data-oid="iw6v-6m"
                                    />

                                    <span
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        data-oid="v2q-3nk"
                                    >
                                        ريال
                                    </span>
                                </div>
                                {priceError && (
                                    <p className="text-red-500 text-xs mt-1" data-oid="-12mls4">
                                        {priceError}
                                    </p>
                                )}
                                <div className="bg-blue-50 p-3 rounded-lg mt-2" data-oid="ut01vtd">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="srlxwft"
                                    >
                                        <span className="text-blue-600" data-oid="6b16yvx">
                                            💰
                                        </span>
                                        <span
                                            className="text-sm font-semibold text-blue-800"
                                            data-oid="iq-48.k"
                                        >
                                            معلومات السعر
                                        </span>
                                    </div>
                                    <p className="text-xs text-blue-700" data-oid="bi-t.bp">
                                        الحد الأدنى لخدمة {serviceRequest.serviceName}:{' '}
                                        {getMinPrice()} ريال
                                        <br data-oid="74gaj7f" />
                                        السعر المقترح من مقدم الخدمة: {mockProvider.price}
                                    </p>
                                </div>
                            </div>

                            <div data-oid=".u-ubxe">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="z8sml-j"
                                >
                                    مستوى الأولوية
                                </label>
                                <div className="grid grid-cols-3 gap-2" data-oid="gwpvrus">
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
                                            data-oid="2bs7lzg"
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
                        data-oid="_2j2yqc"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid=":9d_3gh">
                            تحديد الموعد
                        </h3>

                        <div className="space-y-4" data-oid="1.8aoa.">
                            <div data-oid="1g2o-3o">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="-j6x.b5"
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
                                    data-oid="10yna49"
                                />
                            </div>

                            <div data-oid="v-j7tnr">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="t44px-y"
                                >
                                    الوقت المفضل *
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid=".3.ffh.">
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
                                            data-oid="r6d0osr"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl" data-oid="4h77n4d">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="cfyimgj"
                                >
                                    <span className="text-blue-600" data-oid="4c.ns31">
                                        ℹ️
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-blue-800"
                                        data-oid="8buduqy"
                                    >
                                        معلومة مهمة
                                    </span>
                                </div>
                                <p className="text-sm text-blue-700" data-oid="e5cruru">
                                    المدة المتوقعة للخدمة: {mockProvider.estimatedTime}
                                    <br data-oid="w.fnad4" />
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
                        data-oid="0fb8zth"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="vbsl97-">
                            تفاصيل إضافية
                        </h3>

                        <div className="space-y-4" data-oid="4y3de34">
                            <div data-oid="pox8vqn">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="z_jia:i"
                                >
                                    ملاحظات خاصة (اختياري)
                                </label>
                                <textarea
                                    value={serviceRequest.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="أي تفاصيل إضافية تريد إخبار مقدم الخدمة بها..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={4}
                                    data-oid="arm.r7w"
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl" data-oid="qb_-sg7">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="z8rasnp"
                                >
                                    <span className="text-yellow-600" data-oid="kmrkwgh">
                                        💡
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-yellow-800"
                                        data-oid="91hs4w-"
                                    >
                                        نصائح مفيدة
                                    </span>
                                </div>
                                <ul
                                    className="text-sm text-yellow-700 space-y-1"
                                    data-oid=".or41h5"
                                >
                                    <li data-oid="dqgice4">• اذكر أي متطلبات خاصة للخدمة</li>
                                    <li data-oid="sfzy:0c">
                                        • حدد إذا كان هناك حيوانات أليفة في المنزل
                                    </li>
                                    <li data-oid="g-z.v76">• اذكر أي مواد تنظيف مفضلة أو محظورة</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="space-y-4" data-oid=".315gmn">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="yate38h"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="2_7c40n"
                            >
                                مراجعة الطلب
                            </h3>

                            <div className="space-y-4" data-oid="c14z4wi">
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="d5zukpg"
                                >
                                    <span className="text-gray-600" data-oid="o0:xo4g">
                                        الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="o_zfprm">
                                        {serviceRequest.serviceName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="v6nszqk"
                                >
                                    <span className="text-gray-600" data-oid="d_.1ihz">
                                        مقدم الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="9v_zbik">
                                        {serviceRequest.providerName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="lo.wv-d"
                                >
                                    <span className="text-gray-600" data-oid="3o74m_y">
                                        السعر المتوقع:
                                    </span>
                                    <span
                                        className="font-semibold text-blue-600"
                                        data-oid="oynpaui"
                                    >
                                        {serviceRequest.expectedPrice} ريال
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="3:0m6vv"
                                >
                                    <span className="text-gray-600" data-oid="ckkl710">
                                        سعر مقدم الخدمة:
                                    </span>
                                    <span
                                        className="font-semibold text-gray-600"
                                        data-oid="b7u5aek"
                                    >
                                        {serviceRequest.price}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="jglm1q2"
                                >
                                    <span className="text-gray-600" data-oid="lnlmq1r">
                                        التاريخ:
                                    </span>
                                    <span className="font-semibold" data-oid="sqajsjo">
                                        {serviceRequest.scheduledDate}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="sc5xzph"
                                >
                                    <span className="text-gray-600" data-oid="t_khsf-">
                                        الوقت:
                                    </span>
                                    <span className="font-semibold" data-oid="kje98-4">
                                        {serviceRequest.scheduledTime}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="1g5-n5p"
                                >
                                    <span className="text-gray-600" data-oid="h1st_go">
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
                                        data-oid="lr9dwqy"
                                    >
                                        {serviceRequest.urgency === 'asap'
                                            ? 'فوري'
                                            : serviceRequest.urgency === 'urgent'
                                              ? 'مستعجل'
                                              : 'عادي'}
                                    </span>
                                </div>
                                <div className="py-2" data-oid="4it61ml">
                                    <span className="text-gray-600 block mb-2" data-oid="etbw-mf">
                                        العنوان:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="y4yy6l6"
                                    >
                                        {serviceRequest.address}
                                    </span>
                                </div>
                                {serviceRequest.notes && (
                                    <div className="py-2" data-oid="mrhg0f.">
                                        <span
                                            className="text-gray-600 block mb-2"
                                            data-oid="88axwsr"
                                        >
                                            ملاحظات:
                                        </span>
                                        <span
                                            className="text-sm bg-gray-50 p-3 rounded-lg block"
                                            data-oid="7xiz-1c"
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
                                    data-oid="xv_ca8o"
                                >
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-2"
                                        data-oid=":c.x501"
                                    >
                                        <span
                                            className={
                                                priceDifference > 0
                                                    ? 'text-green-600'
                                                    : priceDifference < 0
                                                      ? 'text-yellow-600'
                                                      : 'text-blue-600'
                                            }
                                            data-oid="bi8ylwe"
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
                                            data-oid=":m4t-uv"
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
                                        data-oid="z5:1jrf"
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

                        <div className="bg-green-50 p-4 rounded-xl" data-oid="0gmm8f.">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-2"
                                data-oid="9rs:v_5"
                            >
                                <span className="text-green-600" data-oid="iwww0xz">
                                    ✅
                                </span>
                                <span
                                    className="text-sm font-semibold text-green-800"
                                    data-oid="2e6dp9t"
                                >
                                    ضمان الخدمة
                                </span>
                            </div>
                            <p className="text-sm text-green-700" data-oid="0:3te8o">
                                جميع الخدمات مضمونة 100% ويمكنك إلغاء الطلب قبل وصول مقدم الخدمة
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 space-x-reverse mt-6" data-oid="fpncnz5">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePrevStep}
                            className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                            data-oid="ytkw0e3"
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
                            data-oid="j8ir4ky"
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
                            data-oid="kb82s8f"
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
                    data-oid="uw2k9:5"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="gog92-:"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="p26v9y0"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="n-hb-a_">
                            جاري إرسال طلبك
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="-kt3wyr">
                            يرجى الانتظار بينما نرسل طلبك لمقدم الخدمة...
                        </p>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="l67pq9q"></div>
        </div>
    );
}
