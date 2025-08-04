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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="nfv7.z6">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="98yga:d"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="98-t-tt">
                    <div className="flex items-center justify-between mb-4" data-oid="6.06pu4">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="a9zguse"
                        >
                            <span className="text-lg" data-oid="c6mq797">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="jgof1xs">
                            <h1 className="text-lg font-bold" data-oid="-6e5z1c">
                                طلب خدمة
                            </h1>
                            <p className="text-sm text-white/90" data-oid="tq8ti4c">
                                {getStepTitle()}
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="bhgl1tt"></div>
                    </div>

                    {/* Progress Bar */}
                    <div
                        className="flex items-center justify-center space-x-2 space-x-reverse"
                        data-oid="vhst25q"
                    >
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center" data-oid="est3j:u">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                        step <= currentStep
                                            ? 'bg-white text-blue-600'
                                            : 'bg-white/20 text-white/60'
                                    }`}
                                    data-oid="7:u2ep6"
                                >
                                    {step}
                                </div>
                                {step < 4 && (
                                    <div
                                        className={`w-8 h-1 mx-1 ${
                                            step < currentStep ? 'bg-white' : 'bg-white/20'
                                        }`}
                                        data-oid="w2w91cd"
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Provider Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="35gau2u">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid=":v58qv-">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="vup8ds:">
                        <div className="relative" data-oid="bh.vc0c">
                            <div className="text-3xl" data-oid="wjuv5.z">
                                {mockProvider.avatar}
                            </div>
                            {mockProvider.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="ma45a72"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid="pjf_7dp">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-1"
                                data-oid="fne14k0"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="7ym6nzb">
                                    {mockProvider.name}
                                </h3>
                                {mockProvider.verified && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                        data-oid="751dvlh"
                                    >
                                        موثق
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600"
                                data-oid="4n7l1ot"
                            >
                                <div
                                    className="flex items-center space-x-1 space-x-reverse"
                                    data-oid="xy11lxu"
                                >
                                    <span className="text-yellow-500" data-oid="iy4-qxw">
                                        ⭐
                                    </span>
                                    <span data-oid="bw2r.-e">{mockProvider.rating}</span>
                                </div>
                                <span data-oid="hy6lsda">{serviceRequest.serviceName}</span>
                                <span className="font-semibold text-blue-600" data-oid="jsgb2ig">
                                    {mockProvider.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="woky59_">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        data-oid="ih._z6w"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="g_adyq8">
                            معلومات التواصل
                        </h3>

                        <div className="space-y-4" data-oid="f1dtf:h">
                            <div data-oid="7pw0lqs">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="zs.b.6u"
                                >
                                    العنوان *
                                </label>
                                <textarea
                                    value={serviceRequest.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="أدخل عنوانك بالتفصيل..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={3}
                                    data-oid="rzekdg8"
                                />
                            </div>

                            <div data-oid="a_3ruxj">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="m0zefj4"
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
                                    data-oid="qz4b3gj"
                                />
                            </div>

                            <div data-oid="vawzlw-">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="ows-ap6"
                                >
                                    مستوى الأولوية
                                </label>
                                <div className="grid grid-cols-3 gap-2" data-oid="o1:zlbu">
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
                                            data-oid="as54v.-"
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
                        data-oid="j_:iu.4"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="e5_c_qr">
                            تحديد الموعد
                        </h3>

                        <div className="space-y-4" data-oid="wp109bt">
                            <div data-oid="-j3cifi">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="qhi2:ex"
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
                                    data-oid="tmm0_t4"
                                />
                            </div>

                            <div data-oid="r-zk_m-">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="4xqy2r2"
                                >
                                    الوقت المفضل *
                                </label>
                                <div className="grid grid-cols-2 gap-3" data-oid="asqdplp">
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
                                            data-oid="qnto:-z"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl" data-oid="z4tih-s">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="h5sr-tb"
                                >
                                    <span className="text-blue-600" data-oid="ruy0hso">
                                        ℹ️
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-blue-800"
                                        data-oid="6xh:.4k"
                                    >
                                        معلومة مهمة
                                    </span>
                                </div>
                                <p className="text-sm text-blue-700" data-oid="bsl5xjf">
                                    المدة المتوقعة للخدمة: {mockProvider.estimatedTime}
                                    <br data-oid="0nl-be-" />
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
                        data-oid="vovg0v9"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="3bgv4np">
                            تفاصيل إضافية
                        </h3>

                        <div className="space-y-4" data-oid="z0wm61e">
                            <div data-oid="m45gszi">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="4v781gg"
                                >
                                    ملاحظات خاصة (اختياري)
                                </label>
                                <textarea
                                    value={serviceRequest.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="أي تفاصيل إضافية تريد إخبار مقدم الخدمة بها..."
                                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 resize-none"
                                    rows={4}
                                    data-oid="7zetban"
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl" data-oid="831o7ht">
                                <div
                                    className="flex items-center space-x-2 space-x-reverse mb-2"
                                    data-oid="1zh5it:"
                                >
                                    <span className="text-yellow-600" data-oid="zu2p-a-">
                                        💡
                                    </span>
                                    <span
                                        className="text-sm font-semibold text-yellow-800"
                                        data-oid="5zj9:ql"
                                    >
                                        نصائح مفيدة
                                    </span>
                                </div>
                                <ul
                                    className="text-sm text-yellow-700 space-y-1"
                                    data-oid="dhgq0ot"
                                >
                                    <li data-oid="ga75jsd">• اذكر أي متطلبات خاصة للخدمة</li>
                                    <li data-oid="hj0lrxr">
                                        • حدد إذا كان هناك حيوانات أليفة في المنزل
                                    </li>
                                    <li data-oid="2h698oj">• اذكر أي مواد تنظيف مفضلة أو محظورة</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="space-y-4" data-oid="h17nwqs">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="qij5uzt"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="s1d:vr6"
                            >
                                مراجعة الطلب
                            </h3>

                            <div className="space-y-4" data-oid="if2_zjn">
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid=":.s5hso"
                                >
                                    <span className="text-gray-600" data-oid="ejdu78c">
                                        الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="qr:4fhm">
                                        {serviceRequest.serviceName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="dfa0-q7"
                                >
                                    <span className="text-gray-600" data-oid="baouy-.">
                                        مقدم الخدمة:
                                    </span>
                                    <span className="font-semibold" data-oid="hdmy49o">
                                        {serviceRequest.providerName}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="_j:n3._"
                                >
                                    <span className="text-gray-600" data-oid="vqhm09:">
                                        السعر:
                                    </span>
                                    <span
                                        className="font-semibold text-blue-600"
                                        data-oid="vlpv99w"
                                    >
                                        {serviceRequest.price}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="b4obxjj"
                                >
                                    <span className="text-gray-600" data-oid="1qjsftt">
                                        التاريخ:
                                    </span>
                                    <span className="font-semibold" data-oid="p7t4a5n">
                                        {serviceRequest.scheduledDate}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="8v-5ohi"
                                >
                                    <span className="text-gray-600" data-oid="15es4v-">
                                        الوقت:
                                    </span>
                                    <span className="font-semibold" data-oid="1-hd_s1">
                                        {serviceRequest.scheduledTime}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center py-2 border-b border-gray-100"
                                    data-oid="8vur7po"
                                >
                                    <span className="text-gray-600" data-oid="4les4ql">
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
                                        data-oid="ldl5bmi"
                                    >
                                        {serviceRequest.urgency === 'asap'
                                            ? 'فوري'
                                            : serviceRequest.urgency === 'urgent'
                                              ? 'مستعجل'
                                              : 'عادي'}
                                    </span>
                                </div>
                                <div className="py-2" data-oid="nepw4j1">
                                    <span className="text-gray-600 block mb-2" data-oid="f0wj0b4">
                                        العنوان:
                                    </span>
                                    <span
                                        className="text-sm bg-gray-50 p-3 rounded-lg block"
                                        data-oid="tc8vp-m"
                                    >
                                        {serviceRequest.address}
                                    </span>
                                </div>
                                {serviceRequest.notes && (
                                    <div className="py-2" data-oid="boeiael">
                                        <span
                                            className="text-gray-600 block mb-2"
                                            data-oid="574h5h."
                                        >
                                            ملاحظات:
                                        </span>
                                        <span
                                            className="text-sm bg-gray-50 p-3 rounded-lg block"
                                            data-oid="0v2kl.s"
                                        >
                                            {serviceRequest.notes}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl" data-oid="hvohx4x">
                            <div
                                className="flex items-center space-x-2 space-x-reverse mb-2"
                                data-oid="huxh.t3"
                            >
                                <span className="text-green-600" data-oid="onvgc_h">
                                    ✅
                                </span>
                                <span
                                    className="text-sm font-semibold text-green-800"
                                    data-oid=":0k3-9y"
                                >
                                    ضمان الخدمة
                                </span>
                            </div>
                            <p className="text-sm text-green-700" data-oid=".in74mp">
                                جميع الخدمات مضمونة 100% ويمكنك إلغاء الطلب قبل وصول مقدم الخدمة
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 space-x-reverse mt-6" data-oid="bmeu.i_">
                    {currentStep > 1 && (
                        <button
                            onClick={handlePrevStep}
                            className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                            data-oid="xhfjyqa"
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
                            data-oid="iofbwea"
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
                            data-oid="d9s_0u7"
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
                    data-oid="yrm1n.b"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="ok_xdzl"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="utod3el"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="j:sdssv">
                            جاري إرسال طلبك
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="8mo2mti">
                            يرجى الانتظار بينما نرسل طلبك لمقدم الخدمة...
                        </p>
                    </div>
                </div>
            )}

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="wpyub7y"></div>
        </div>
    );
}
