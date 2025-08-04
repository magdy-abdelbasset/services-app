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
            // Generate order ID and redirect to confirmation page
            const orderId = Math.floor(Math.random() * 100000);
            window.location.href = `/order-confirmation?orderId=${orderId}`;
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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="ykcotuj">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="6xx5e_t"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="2e8myvg">
                    <div className="flex items-center justify-between mb-4" data-oid="yq0byr9">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="yf-b2xe"
                        >
                            <span className="text-lg" data-oid="b2kq3gr">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="joavkmx">
                            <h1 className="text-lg font-bold" data-oid="._07p.h">
                                طلب خدمة
                            </h1>
                            <p className="text-sm text-white/90" data-oid="fq0whxr">
                                {getStepTitle()}
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="3xq9bgx"></div>
                    </div>

                    {/* Progress Bar */}
                    <div
                        className="flex items-center justify-center space-x-2 space-x-reverse"
                        data-oid="_kr5q09"
                    >
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center" data-oid="7to8u8w">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        step <= currentStep
                                            ? 'bg-white text-blue-600'
                                            : 'bg-white/20 text-white/60'
                                    }`}
                                    data-oid="9plm6tk"
                                >
                                    {step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-8 h-1 mx-1 ${
                                            step < currentStep ? 'bg-white' : 'bg-white/20'
                                        }`}
                                        data-oid="7q.kejt"
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Provider Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="rfuba79">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="6p1xvz.">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="d4uqt8h">
                        <div className="relative" data-oid="o.w.t_h">
                            <div className="text-3xl" data-oid="wivb.s2">
                                {mockProvider.avatar}
                            </div>
                            {mockProvider.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="4fqzkf5"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid="zdxtm.n">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-1"
                                data-oid="76a3.96"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="yee60qp">
                                    {mockProvider.name}
                                </h3>
                                {mockProvider.verified && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                        data-oid="1umer6q"
                                    >
                                        موثق
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600"
                                data-oid="3e.6s83"
                            >
                                <div
                                    className="flex items-center space-x-1 space-x-reverse"
                                    data-oid="hu.-ndx"
                                >
                                    <span className="text-yellow-500" data-oid="mbkkuhs">
                                        ⭐
                                    </span>
                                    <span data-oid="0ilze2r">{mockProvider.rating}</span>
                                </div>
                                <span data-oid="-rv7u7c">{serviceRequest.serviceName}</span>
                                <span className="font-semibold text-blue-600" data-oid="5n:28d0">
                                    {mockProvider.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="-k3nu1g">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="ruhtrcz"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="-22-y-_">
                            معلومات التواصل
                        </h3>

                        <div className="space-y-4" data-oid="2vo9.x8">
                            <div data-oid="rbtikiy">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="adw9hly"
                                >
                                    العنوان *
                                </label>
                                <textarea
                                    value={serviceRequest.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="أدخل عنوانك بالتفصيل..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={3}
                                    data-oid="8_0lp-w"
                                />
                            </div>

                            <div data-oid="z8ro8s2">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="44m.uky"
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
                                    data-oid="01hskqa"
                                />
                            </div>

                            <div data-oid="4w-9nmk">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="-01jmk6"
                                >
                                    مستوى الأولوية
                                </label>
                                <div className="grid grid-cols-3 gap-2" data-oid="rw5-i8q">
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
                                            data-oid="2qs6tal"
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
                        data-oid="hoxn5zw"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="u6.end2">
                            تحديد الموعد
                        </h3>

                        <div className="space-y-4" data-oid="go.za:6">
                            <div data-oid="d-hciew">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid=".oy1umw"
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
                                    data-oid="h7_mxfg"
                                />
                            </div>

                            <div data-oid="q-:8t2x">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="42uas59"
                                >
                                    الوقت المفضل *
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="k7hrhbo">
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
                                            data-oid="4w:zg5u"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl" data-oid="w94p:ab">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="jsikp.r"
                                >
                                    <span className="text-blue-600" data-oid="9ip4-1c">
                                        ℹ️
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-blue-800"
                                        data-oid="shg.shk"
                                    >
                                        معلومة مهمة
                                    </span>
                                </div>
                                <p className="text-sm text-blue-700" data-oid="2ttrfla">
                                    المدة المتوقعة للخدمة: {mockProvider.estimatedTime}
                                    <br data-oid="46uy6aj" />
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
                        data-oid="o9tn__g"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="t37dkbf">
                            تفاصيل إضافية
                        </h3>

                        <div className="space-y-4" data-oid="92i3f0i">
                            <div data-oid="6b6mwr-">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid=":a1ftet"
                                >
                                    ملاحظات خاصة (اختياري)
                                </label>
                                <textarea
                                    value={serviceRequest.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="أي تفاصيل إضافية تريد إخبار مقدم الخدمة بها..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={4}
                                    data-oid="txeu.hv"
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl" data-oid="li8d90z">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="vfqrhpr"
                                >
                                    <span className="text-yellow-600" data-oid="n_yrptm">
                                        💡
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-yellow-800"
                                        data-oid="v_89mht"
                                    >
                                        نصائح مفيدة
                                    </span>
                                </div>
                                <ul
                                    className="text-sm text-yellow-700 space-y-1"
                                    data-oid="fos_4y3"
                                >
                                    <li data-oid="bfp5yei">• اذكر أي متطلبات خاصة للخدمة</li>
                                    <li data-oid="7j-.6yj">
                                        • حدد إذا كان هناك حيوانات أليفة في المنزل
                                    </li>
                                    <li data-oid="bgs9_w3">• اذكر أي مواد تنظيف مفضلة أو محظورة</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="space-y-4" data-oid="zu4-l-f">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="fk-pr98"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="aa:vb05"
                            >
                                مراجعة الطلب
                            </h3>

                            <div className="space-y-4" data-oid="ij21hr3">
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="e6sy:aq"
                                >
                                    <span className="text-gray-600" data-oid="xb1j.28">
                                        الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="o92.8al">
                                        {serviceRequest.serviceName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="9kt.537"
                                >
                                    <span className="text-gray-600" data-oid="fmfkv6e">
                                        مقدم الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="zhwd1vb">
                                        {serviceRequest.providerName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="2g8ey6h"
                                >
                                    <span className="text-gray-600" data-oid="mug:beu">
                                        السعر:
                                    </span>
                                    <span
                                        className="font-semibold text-blue-600"
                                        data-oid="_5ynsiz"
                                    >
                                        {serviceRequest.price}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="j.o5yi7"
                                >
                                    <span className="text-gray-600" data-oid="hf1uyqu">
                                        التاريخ:
                                    </span>
                                    <span className="font-semibold" data-oid="m4qcudz">
                                        {serviceRequest.scheduledDate}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="l--2t2c"
                                >
                                    <span className="text-gray-600" data-oid="i2.q34g">
                                        الوقت:
                                    </span>
                                    <span className="font-semibold" data-oid="mt0tl-r">
                                        {serviceRequest.scheduledTime}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="cb6wkt7"
                                >
                                    <span className="text-gray-600" data-oid="fllep7k">
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
                                        data-oid="ec1-tdk"
                                    >
                                        {serviceRequest.urgency === 'asap'
                                            ? 'فوري'
                                            : serviceRequest.urgency === 'urgent'
                                              ? 'مستعجل'
                                              : 'عادي'}
                                    </span>
                                </div>
                                <div className="py-2" data-oid="1klrpvs">
                                    <span className="text-gray-600 block mb-2" data-oid="umsws-0">
                                        العنوان:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="1h03izp"
                                    >
                                        {serviceRequest.address}
                                    </span>
                                </div>
                                {serviceRequest.notes && (
                                    <div className="py-2" data-oid="mdkjfwa">
                                        <span
                                            className="text-gray-600 block mb-2"
                                            data-oid="zof05:k"
                                        >
                                            ملاحظات:
                                        </span>
                                        <span
                                            className="text-sm bg-gray-50 p-3 rounded-lg block"
                                            data-oid="qxvth8j"
                                        >
                                            {serviceRequest.notes}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl" data-oid="4ev3nv3">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-2"
                                data-oid="zpiu2j9"
                            >
                                <span className="text-green-600" data-oid="io6almt">
                                    ✅
                                </span>
                                <span
                                    className="text-sm font-semibold text-green-800"
                                    data-oid="9pf2wul"
                                >
                                    ضمان الخدمة
                                </span>
                            </div>
                            <p className="text-sm text-green-700" data-oid="9_j6qiw">
                                جميع الخدمات مضمونة 100% ويمكنك إلغاء الطلب قبل وصول مقدم الخدمة
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 space-x-reverse mt-6" data-oid="vapag:k">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePrevStep}
                            className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                            data-oid="vcom990"
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
                            data-oid="spdor4y"
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
                            data-oid="eyg5kxz"
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
                    data-oid="iqbsvy:"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="-mx_u-9"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="7er8840"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="5.8-c04">
                            جاري إرسال طلبك
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="l90f1ue">
                            يرجى الانتظار بينما نرسل طلبك لمقدم الخدمة...
                        </p>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="1can18o"></div>
        </div>
    );
}
