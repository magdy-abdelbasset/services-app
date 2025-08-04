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
        address: '',
        phoneNumber: '',
        scheduledDate: '',
        scheduledTime: '',
        notes: '',
        urgency: 'normal',
    });

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
                    serviceRequest.address.trim() !== '' && serviceRequest.phoneNumber.trim() !== ''
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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="f_0b:3o">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="uxoqmng"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="xv_jm1-">
                    <div className="flex items-center justify-between mb-4" data-oid="t08blir">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="s:6a9v4"
                        >
                            <span className="text-lg" data-oid="fewyvn2">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid=".sj:r06">
                            <h1 className="text-lg font-bold" data-oid="9.ztqcc">
                                طلب خدمة
                            </h1>
                            <p className="text-sm text-white/90" data-oid="irhwfm9">
                                {getStepTitle()}
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="_wadixt"></div>
                    </div>

                    {/* Progress Bar */}
                    <div
                        className="flex items-center justify-center space-x-2 space-x-reverse"
                        data-oid="5w_7df1"
                    >
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center" data-oid="cn3dqr2">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        step <= currentStep
                                            ? 'bg-white text-blue-600'
                                            : 'bg-white/20 text-white/60'
                                    }`}
                                    data-oid="xf1ccro"
                                >
                                    {step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-8 h-1 mx-1 ${
                                            step < currentStep ? 'bg-white' : 'bg-white/20'
                                        }`}
                                        data-oid="cbvr2sq"
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Provider Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="6.kt108">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="xvikhgj">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="vzlespn">
                        <div className="relative" data-oid="vqys8dt">
                            <div className="text-3xl" data-oid="zy7mq9g">
                                {mockProvider.avatar}
                            </div>
                            {mockProvider.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="e0wozgz"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid="khhlf8h">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-1"
                                data-oid=":.vk:73"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="sp7to8y">
                                    {mockProvider.name}
                                </h3>
                                {mockProvider.verified && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                        data-oid="_c2po.g"
                                    >
                                        موثق
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600"
                                data-oid="iu3lnvx"
                            >
                                <div
                                    className="flex items-center space-x-1 space-x-reverse"
                                    data-oid="yt2uphy"
                                >
                                    <span className="text-yellow-500" data-oid="o9mn9h5">
                                        ⭐
                                    </span>
                                    <span data-oid="-1vr2o1">{mockProvider.rating}</span>
                                </div>
                                <span data-oid="3v9c:8-">{serviceRequest.serviceName}</span>
                                <span className="font-semibold text-blue-600" data-oid="i.oma1w">
                                    {mockProvider.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="24k26rh">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="304:dtv"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="y8ijf1r">
                            معلومات التواصل
                        </h3>

                        <div className="space-y-4" data-oid="fi05.6n">
                            <div data-oid="9ki0.8-">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="dgg4kab"
                                >
                                    العنوان *
                                </label>
                                <textarea
                                    value={serviceRequest.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="أدخل عنوانك بالتفصيل..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={3}
                                    data-oid="zugf432"
                                />
                            </div>

                            <div data-oid="9jo8cip">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="1a3frg9"
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
                                    data-oid="ey:hwz6"
                                />
                            </div>

                            <div data-oid="w1iclla">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="x29.g.j"
                                >
                                    مستوى الأولوية
                                </label>
                                <div className="grid grid-cols-3 gap-2" data-oid="jwbso59">
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
                                            data-oid="qozj7.b"
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
                        data-oid="4c450-z"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="df7iead">
                            تحديد الموعد
                        </h3>

                        <div className="space-y-4" data-oid="7:uv-z4">
                            <div data-oid="fel5g5b">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid=":5xh8fr"
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
                                    data-oid=":phu.6f"
                                />
                            </div>

                            <div data-oid="rxv67as">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid=":_s7gk."
                                >
                                    الوقت المفضل *
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="wj3sync">
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
                                            data-oid="p_rorz:"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl" data-oid="vmenuic">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid=".hn1:i2"
                                >
                                    <span className="text-blue-600" data-oid="zboarwo">
                                        ℹ️
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-blue-800"
                                        data-oid="zxy1r:."
                                    >
                                        معلومة مهمة
                                    </span>
                                </div>
                                <p className="text-sm text-blue-700" data-oid="daz6gy_">
                                    المدة المتوقعة للخدمة: {mockProvider.estimatedTime}
                                    <br data-oid="a4-ij0f" />
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
                        data-oid="9w90nbr"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="ak1nmqp">
                            تفاصيل إضافية
                        </h3>

                        <div className="space-y-4" data-oid="gfbz-at">
                            <div data-oid="ktvwr6m">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="zf:nu3x"
                                >
                                    ملاحظات خاصة (اختياري)
                                </label>
                                <textarea
                                    value={serviceRequest.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="أي تفاصيل إضافية تريد إخبار مقدم الخدمة بها..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={4}
                                    data-oid="ua08-8v"
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl" data-oid="f_vzfcf">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="e:rd5l2"
                                >
                                    <span className="text-yellow-600" data-oid="b9qges.">
                                        💡
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-yellow-800"
                                        data-oid="tzj6l83"
                                    >
                                        نصائح مفيدة
                                    </span>
                                </div>
                                <ul
                                    className="text-sm text-yellow-700 space-y-1"
                                    data-oid="wjr43zh"
                                >
                                    <li data-oid="aki6qmm">• اذكر أي متطلبات خاصة للخدمة</li>
                                    <li data-oid="h-so4t5">
                                        • حدد إذا كان هناك حيوانات أليفة في المنزل
                                    </li>
                                    <li data-oid="s-yd75_">• اذكر أي مواد تنظيف مفضلة أو محظورة</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="space-y-4" data-oid="v7mm.:.">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid=":kk-2ys"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="1.ub3im"
                            >
                                مراجعة الطلب
                            </h3>

                            <div className="space-y-4" data-oid="eisn7qa">
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="::eew-0"
                                >
                                    <span className="text-gray-600" data-oid="kp50f8h">
                                        الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="71n1bwp">
                                        {serviceRequest.serviceName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="maqidkt"
                                >
                                    <span className="text-gray-600" data-oid="uf38t3m">
                                        مقدم الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="ocbh974">
                                        {serviceRequest.providerName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="2m-fu2."
                                >
                                    <span className="text-gray-600" data-oid="t9m3t9n">
                                        السعر:
                                    </span>
                                    <span
                                        className="font-semibold text-blue-600"
                                        data-oid="..q2.t6"
                                    >
                                        {serviceRequest.price}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="u8ozmzi"
                                >
                                    <span className="text-gray-600" data-oid="n3uk7bx">
                                        التاريخ:
                                    </span>
                                    <span className="font-semibold" data-oid="2n.vnng">
                                        {serviceRequest.scheduledDate}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="9t2-7fd"
                                >
                                    <span className="text-gray-600" data-oid="3:iogmy">
                                        الوقت:
                                    </span>
                                    <span className="font-semibold" data-oid="o:pdp.s">
                                        {serviceRequest.scheduledTime}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="f:ub37b"
                                >
                                    <span className="text-gray-600" data-oid="_8jc38s">
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
                                        data-oid="tmwgmr0"
                                    >
                                        {serviceRequest.urgency === 'asap'
                                            ? 'فوري'
                                            : serviceRequest.urgency === 'urgent'
                                              ? 'مستعجل'
                                              : 'عادي'}
                                    </span>
                                </div>
                                <div className="py-2" data-oid="sveulp.">
                                    <span className="text-gray-600 block mb-2" data-oid="qza75sp">
                                        العنوان:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="cx-k:v4"
                                    >
                                        {serviceRequest.address}
                                    </span>
                                </div>
                                {serviceRequest.notes && (
                                    <div className="py-2" data-oid="8beea8r">
                                        <span
                                            className="text-gray-600 block mb-2"
                                            data-oid="_wy-odu"
                                        >
                                            ملاحظات:
                                        </span>
                                        <span
                                            className="text-sm bg-gray-50 p-3 rounded-lg block"
                                            data-oid="9xik6m8"
                                        >
                                            {serviceRequest.notes}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl" data-oid="q4-cuba">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-2"
                                data-oid="c5l7_:5"
                            >
                                <span className="text-green-600" data-oid="s2255r3">
                                    ✅
                                </span>
                                <span
                                    className="text-sm font-semibold text-green-800"
                                    data-oid="9ragjlj"
                                >
                                    ضمان الخدمة
                                </span>
                            </div>
                            <p className="text-sm text-green-700" data-oid="a0hf3v6">
                                جميع الخدمات مضمونة 100% ويمكنك إلغاء الطلب قبل وصول مقدم الخدمة
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 space-x-reverse mt-6" data-oid="o1bk:lc">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePrevStep}
                            className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                            data-oid="27hs2zv"
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
                            data-oid="b2i4wy5"
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
                            data-oid=":u-no7t"
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
                    data-oid="82437js"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="zqt2:87"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="uf09m4."
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="9:20a.y">
                            جاري إرسال طلبك
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="49r39rr">
                            يرجى الانتظار بينما نرسل طلبك لمقدم الخدمة...
                        </p>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="9l-83z."></div>
        </div>
    );
}
