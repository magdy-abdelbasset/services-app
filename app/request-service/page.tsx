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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="p8toh20">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid=".hri5zb"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="s429l56">
                    <div className="flex items-center justify-between mb-4" data-oid="tub7v59">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="akv776-"
                        >
                            <span className="text-lg" data-oid="x9hq4e-">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="h.2p3s9">
                            <h1 className="text-lg font-bold" data-oid="s06vxnc">
                                طلب خدمة
                            </h1>
                            <p className="text-sm text-white/90" data-oid="88.as6y">
                                {getStepTitle()}
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="f3k3p1h"></div>
                    </div>

                    {/* Progress Bar */}
                    <div
                        className="flex items-center justify-center space-x-2 space-x-reverse"
                        data-oid="_c5awjo"
                    >
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center" data-oid="-kfw4q6">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        step <= currentStep
                                            ? 'bg-white text-blue-600'
                                            : 'bg-white/20 text-white/60'
                                    }`}
                                    data-oid="ok20phi"
                                >
                                    {step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-8 h-1 mx-1 ${
                                            step < currentStep ? 'bg-white' : 'bg-white/20'
                                        }`}
                                        data-oid="n5tb7ai"
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Provider Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="n1mcb44">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="uojhd6i">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="sbpj8:i">
                        <div className="relative" data-oid="nn4l6lg">
                            <div className="text-3xl" data-oid="i8pcbcn">
                                {mockProvider.avatar}
                            </div>
                            {mockProvider.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="t:nfzoh"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid="w:8qchh">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-1"
                                data-oid="gotulf8"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="72f0-00">
                                    {mockProvider.name}
                                </h3>
                                {mockProvider.verified && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                        data-oid="sw377vs"
                                    >
                                        موثق
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600"
                                data-oid="0wm7yu1"
                            >
                                <div
                                    className="flex items-center space-x-1 space-x-reverse"
                                    data-oid="zeh..ow"
                                >
                                    <span className="text-yellow-500" data-oid="lp8kcp0">
                                        ⭐
                                    </span>
                                    <span data-oid=".s058:i">{mockProvider.rating}</span>
                                </div>
                                <span data-oid="5v.nos6">{serviceRequest.serviceName}</span>
                                <span className="font-semibold text-blue-600" data-oid="kk_v9oj">
                                    {mockProvider.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="6r4m33h">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="-7-ab:p"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="_2w7pt2">
                            معلومات التواصل
                        </h3>

                        <div className="space-y-4" data-oid="t5lw8uf">
                            <div data-oid="7jypmeu">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="n7tkoc2"
                                >
                                    العنوان *
                                </label>
                                <textarea
                                    value={serviceRequest.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="أدخل عنوانك بالتفصيل..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={3}
                                    data-oid="woyh3oi"
                                />
                            </div>

                            <div data-oid="-aszcmh">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="p1w1zdq"
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
                                    data-oid="gseten8"
                                />
                            </div>

                            <div data-oid="i000yuc">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="f.knc96"
                                >
                                    مستوى الأولوية
                                </label>
                                <div className="grid grid-cols-3 gap-2" data-oid="e9-rlto">
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
                                            data-oid="6rqky:w"
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
                        data-oid="rq1rpbu"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="auf:5df">
                            تحديد الموعد
                        </h3>

                        <div className="space-y-4" data-oid="ohkwse3">
                            <div data-oid="uia9qdt">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid=":aa07eo"
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
                                    data-oid="2wzs:l-"
                                />
                            </div>

                            <div data-oid="qcizzv5">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="n34-dm-"
                                >
                                    الوقت المفضل *
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="32o-:z5">
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
                                            data-oid="vi:mtn7"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl" data-oid="v6yik5-">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="v6sffek"
                                >
                                    <span className="text-blue-600" data-oid="cxh31xp">
                                        ℹ️
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-blue-800"
                                        data-oid="q97_dcn"
                                    >
                                        معلومة مهمة
                                    </span>
                                </div>
                                <p className="text-sm text-blue-700" data-oid="pl5oa:o">
                                    المدة المتوقعة للخدمة: {mockProvider.estimatedTime}
                                    <br data-oid="7q-2fij" />
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
                        data-oid="42xxrf0"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="powa-ht">
                            تفاصيل إضافية
                        </h3>

                        <div className="space-y-4" data-oid="bu0_y8u">
                            <div data-oid="dae:1xw">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="imwu5cw"
                                >
                                    ملاحظات خاصة (اختياري)
                                </label>
                                <textarea
                                    value={serviceRequest.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="أي تفاصيل إضافية تريد إخبار مقدم الخدمة بها..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={4}
                                    data-oid="etx9x-j"
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl" data-oid="k19v0sx">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="y77__gp"
                                >
                                    <span className="text-yellow-600" data-oid="w-efso7">
                                        💡
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-yellow-800"
                                        data-oid="pxt8od."
                                    >
                                        نصائح مفيدة
                                    </span>
                                </div>
                                <ul
                                    className="text-sm text-yellow-700 space-y-1"
                                    data-oid="1vx63v9"
                                >
                                    <li data-oid="v8w9xsx">• اذكر أي متطلبات خاصة للخدمة</li>
                                    <li data-oid="6_ezk70">
                                        • حدد إذا كان هناك حيوانات أليفة في المنزل
                                    </li>
                                    <li data-oid="vdc.ixv">• اذكر أي مواد تنظيف مفضلة أو محظورة</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="space-y-4" data-oid="l2vru13">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="-xnoed5"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="kw41eq3"
                            >
                                مراجعة الطلب
                            </h3>

                            <div className="space-y-4" data-oid="5un0-vs">
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="-89ima1"
                                >
                                    <span className="text-gray-600" data-oid="1q_7rn:">
                                        الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="4.681q6">
                                        {serviceRequest.serviceName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="1.c0-yf"
                                >
                                    <span className="text-gray-600" data-oid="8f2fxkj">
                                        مقدم الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="u1:_7.6">
                                        {serviceRequest.providerName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="0r04hgx"
                                >
                                    <span className="text-gray-600" data-oid="ty.fut9">
                                        السعر:
                                    </span>
                                    <span
                                        className="font-semibold text-blue-600"
                                        data-oid="7_3-75w"
                                    >
                                        {serviceRequest.price}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid=":i8ba1k"
                                >
                                    <span className="text-gray-600" data-oid="y:mb.mq">
                                        التاريخ:
                                    </span>
                                    <span className="font-semibold" data-oid="5yu4_8v">
                                        {serviceRequest.scheduledDate}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="h639yt0"
                                >
                                    <span className="text-gray-600" data-oid="2ma:ikk">
                                        الوقت:
                                    </span>
                                    <span className="font-semibold" data-oid="2q1:cei">
                                        {serviceRequest.scheduledTime}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="n1dqt6v"
                                >
                                    <span className="text-gray-600" data-oid="qyskpz4">
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
                                        data-oid="x25eckj"
                                    >
                                        {serviceRequest.urgency === 'asap'
                                            ? 'فوري'
                                            : serviceRequest.urgency === 'urgent'
                                              ? 'مستعجل'
                                              : 'عادي'}
                                    </span>
                                </div>
                                <div className="py-2" data-oid="54t:g2c">
                                    <span className="text-gray-600 block mb-2" data-oid="_6ymuhd">
                                        العنوان:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="ri6x9c:"
                                    >
                                        {serviceRequest.address}
                                    </span>
                                </div>
                                {serviceRequest.notes && (
                                    <div className="py-2" data-oid="-8iayq1">
                                        <span
                                            className="text-gray-600 block mb-2"
                                            data-oid="3vf_y__"
                                        >
                                            ملاحظات:
                                        </span>
                                        <span
                                            className="text-sm bg-gray-50 p-3 rounded-lg block"
                                            data-oid="ze9wcng"
                                        >
                                            {serviceRequest.notes}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl" data-oid="6d2h2qh">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-2"
                                data-oid="7far60n"
                            >
                                <span className="text-green-600" data-oid="g7wb41d">
                                    ✅
                                </span>
                                <span
                                    className="text-sm font-semibold text-green-800"
                                    data-oid="ahjptx3"
                                >
                                    ضمان الخدمة
                                </span>
                            </div>
                            <p className="text-sm text-green-700" data-oid="vi_gth8">
                                جميع الخدمات مضمونة 100% ويمكنك إلغاء الطلب قبل وصول مقدم الخدمة
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 space-x-reverse mt-6" data-oid="h5m.4a3">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePrevStep}
                            className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                            data-oid="ddkgz6c"
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
                            data-oid="62g3cmz"
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
                            data-oid="-wwxjkp"
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
                    data-oid="y51.:ex"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="kbf3j.7"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="bsd39pr"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="9otmeq6">
                            جاري إرسال طلبك
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="p:wbik5">
                            يرجى الانتظار بينما نرسل طلبك لمقدم الخدمة...
                        </p>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="mhhwdz2"></div>
        </div>
    );
}
