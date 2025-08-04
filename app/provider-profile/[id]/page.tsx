'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ServiceProvider {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    completedJobs: number;
    joinDate: string;
    description: string;
    verified: boolean;
    isOnline: boolean;
    responseTime: string;
    location: string;
    phone: string;
    email: string;
    languages: string[];
    workingHours: {
        [key: string]: { start: string; end: string; available: boolean };
    };
    services: {
        id: number;
        name: string;
        price: string;
        estimatedTime: string;
        description: string;
        category: string;
    }[];
    reviews: {
        id: number;
        customerName: string;
        customerAvatar: string;
        rating: number;
        comment: string;
        date: string;
        serviceName: string;
    }[];
    portfolio: {
        id: number;
        title: string;
        image: string;
        description: string;
        date: string;
    }[];
    certifications: {
        id: number;
        name: string;
        issuer: string;
        date: string;
        verified: boolean;
    }[];
}

export default function ProviderProfilePage() {
    const params = useParams();
    const providerId = params.id as string;

    const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'portfolio' | 'about'>(
        'services',
    );
    const [showContactModal, setShowContactModal] = useState(false);

    // Mock provider data
    const provider: ServiceProvider = {
        id: parseInt(providerId),
        name: 'أحمد علي محمد',
        avatar: '👨‍💼',
        rating: 4.9,
        completedJobs: 156,
        joinDate: '2022-03-15',
        description:
            'مقدم خدمات تنظيف محترف مع خبرة 5 سنوات في تنظيف المنازل والمكاتب. أستخدم مواد تنظيف صديقة للبيئة وأضمن جودة عالية في العمل.',
        verified: true,
        isOnline: true,
        responseTime: '5 دقائق',
        location: 'الرياض، حي النرجس',
        phone: '0501234567',
        email: 'ahmed.ali@example.com',
        languages: ['العربية', 'الإنجليزية'],
        workingHours: {
            الأحد: { start: '08:00', end: '18:00', available: true },
            الاثنين: { start: '08:00', end: '18:00', available: true },
            الثلاثاء: { start: '08:00', end: '18:00', available: true },
            الأربعاء: { start: '08:00', end: '18:00', available: true },
            الخميس: { start: '08:00', end: '18:00', available: true },
            الجمعة: { start: '14:00', end: '18:00', available: true },
            السبت: { start: '08:00', end: '18:00', available: false },
        },
        services: [
            {
                id: 1,
                name: 'تنظيف عام للمنزل',
                price: '45 ريال',
                estimatedTime: '2-3 ساعات',
                description: 'تنظيف شامل لجميع غرف المنزل',
                category: 'تنظيف المنازل',
            },
            {
                id: 2,
                name: 'تنظيف المطبخ',
                price: '35 ريال',
                estimatedTime: '1-2 ساعة',
                description: 'تنظيف عميق للمطبخ والأجهزة',
                category: 'تنظيف المنازل',
            },
            {
                id: 3,
                name: 'تنظيف الحمامات',
                price: '25 ريال',
                estimatedTime: '30-45 دقيقة',
                description: 'تنظيف وتعقيم الحمامات',
                category: 'تنظيف المنازل',
            },
        ],

        reviews: [
            {
                id: 1,
                customerName: 'سارة أحمد',
                customerAvatar: '👩',
                rating: 5,
                comment:
                    'خدمة ممتازة وسريعة. أحمد محترف جداً ونظف المنزل بشكل مثالي. أنصح به بشدة!',
                date: '2024-01-15',
                serviceName: 'تنظيف عام للمنزل',
            },
            {
                id: 2,
                customerName: 'محمد خالد',
                customerAvatar: '👨',
                rating: 5,
                comment: 'وصل في الوقت المحدد وأنجز العمل بجودة عالية. سأطلب خدماته مرة أخرى.',
                date: '2024-01-10',
                serviceName: 'تنظيف المطبخ',
            },
            {
                id: 3,
                customerName: 'فاطمة علي',
                customerAvatar: '👩‍🦱',
                rating: 4,
                comment: 'خدمة جيدة جداً، لكن تأخر قليلاً عن الموعد المحدد.',
                date: '2024-01-05',
                serviceName: 'تنظيف الحمامات',
            },
        ],

        portfolio: [
            {
                id: 1,
                title: 'تنظيف فيلا كبيرة',
                image: '🏡',
                description: 'تنظيف شامل لفيلا من 3 طوابق',
                date: '2024-01-12',
            },
            {
                id: 2,
                title: 'تنظيف مكتب تجاري',
                image: '🏢',
                description: 'تنظيف مكتب تجاري بمساحة 200 متر',
                date: '2024-01-08',
            },
            {
                id: 3,
                title: 'تنظيف شقة عائلية',
                image: '🏠',
                description: 'تنظيف عميق لشقة من 4 غرف',
                date: '2024-01-03',
            },
        ],

        certifications: [
            {
                id: 1,
                name: 'شهادة في خدمات التنظيف المهني',
                issuer: 'معهد الخدمات المهنية',
                date: '2023-06-15',
                verified: true,
            },
            {
                id: 2,
                name: 'دورة السلامة المهنية',
                issuer: 'مركز التدريب المهني',
                date: '2023-03-20',
                verified: true,
            },
        ],
    };

    const handleRequestService = (service: any) => {
        window.location.href = `/request-service?provider=${provider.id}&service=${encodeURIComponent(service.name)}`;
    };

    const handleContactProvider = () => {
        setShowContactModal(true);
    };

    const getRatingStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push('⭐');
        }
        if (hasHalfStar) {
            stars.push('⭐');
        }
        return stars.join('');
    };

    const getJoinDuration = () => {
        const joinDate = new Date(provider.joinDate);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - joinDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const years = Math.floor(diffDays / 365);
        const months = Math.floor((diffDays % 365) / 30);

        if (years > 0) {
            return `${years} ${years === 1 ? 'سنة' : 'سنوات'}`;
        } else if (months > 0) {
            return `${months} ${months === 1 ? 'شهر' : 'أشهر'}`;
        } else {
            return 'أقل من شهر';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="rika..k">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="pi_-xuw"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="fsr6:.m">
                    <div className="flex items-center justify-between mb-6" data-oid="jn2:vn-">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="dvvu4nj"
                        >
                            <span className="text-lg" data-oid="o0utz12">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-lg font-bold" data-oid="gpl_wpn">
                            الملف الشخصي
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="ru6vyrk"
                        >
                            <span className="text-lg" data-oid="1y:8t4f">
                                ⋯
                            </span>
                        </button>
                    </div>

                    {/* Provider Basic Info */}
                    <div className="text-center" data-oid="gea4qm.">
                        <div className="relative inline-block mb-4" data-oid="e035rvi">
                            <div
                                className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl"
                                data-oid="zexk3mc"
                            >
                                {provider.avatar}
                            </div>
                            {provider.isOnline && (
                                <div
                                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
                                    data-oid="bdo5tzm"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full"
                                        data-oid="qdavdqy"
                                    ></div>
                                </div>
                            )}
                            {provider.verified && (
                                <div
                                    className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                                    data-oid="xz6fw64"
                                >
                                    <span className="text-white text-sm" data-oid="-.rr3lu">
                                        ✓
                                    </span>
                                </div>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold mb-2" data-oid="n9ab474">
                            {provider.name}
                        </h2>
                        <div
                            className="flex items-center justify-center space-x-2 space-x-reverse mb-2"
                            data-oid="2_eep-1"
                        >
                            <span className="text-yellow-300 text-lg" data-oid="9.qk.fw">
                                {getRatingStars(provider.rating)}
                            </span>
                            <span className="font-semibold" data-oid="-nz5356">
                                {provider.rating}
                            </span>
                            <span className="text-white/80" data-oid="-hhiy1w">
                                ({provider.completedJobs} تقييم)
                            </span>
                        </div>
                        <p className="text-white/90 text-sm mb-4" data-oid="hxtqom:">
                            {provider.location}
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse text-sm"
                            data-oid=":x1newm"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="_dqkq7y"
                            >
                                <span data-oid="8jka5fy">📍</span>
                                <span data-oid="ozuw-0c">{provider.responseTime}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="3uo1apa"
                            >
                                <span data-oid="2q.o5h6">📅</span>
                                <span data-oid="zm.veuf">عضو منذ {getJoinDuration()}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="s0.5:gs"
                            >
                                <span
                                    className={
                                        provider.isOnline ? 'text-green-300' : 'text-gray-300'
                                    }
                                    data-oid="fdip51g"
                                >
                                    ●
                                </span>
                                <span data-oid="ulj6xr8">
                                    {provider.isOnline ? 'متصل الآن' : 'غير متصل'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="34f852w">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="cfekv3t">
                    <div className="grid grid-cols-2 gap-3" data-oid="gd250qe">
                        <button
                            onClick={handleContactProvider}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="-tx-v4g"
                        >
                            <span data-oid="3:w8pgg">💬</span>
                            <span data-oid="a.4qbmr">تواصل</span>
                        </button>
                        <Link
                            href={`/chat/${provider.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="wej573v"
                        >
                            <span data-oid="z7_2-zs">📞</span>
                            <span data-oid="fcvl177">اتصال</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="nsk2cxl">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid=".oh5zhp"
                >
                    <div className="grid grid-cols-4 gap-1" data-oid="rj-c:dh">
                        {[
                            { key: 'services', label: 'الخدمات', icon: '🛠️' },
                            { key: 'reviews', label: 'التقييمات', icon: '⭐' },
                            { key: 'portfolio', label: 'الأعمال', icon: '📸' },
                            { key: 'about', label: 'حول', icon: 'ℹ️' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as any)}
                                className={`py-2 px-2 rounded-xl text-xs font-semibold transition-colors ${
                                    activeTab === tab.key
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-600'
                                }`}
                                data-oid="58vuybi"
                            >
                                <div
                                    className="flex flex-col items-center space-y-1"
                                    data-oid="nk_ypet"
                                >
                                    <span data-oid="lm6duc1">{tab.icon}</span>
                                    <span data-oid="zthmi3q">{tab.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="cxcznd:">
                {/* Services Tab */}
                {activeTab === 'services' && (
                    <div className="space-y-4" data-oid="uq66wae">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="cq6mwiv">
                            الخدمات المتاحة ({provider.services.length})
                        </h3>
                        {provider.services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="v71:6xm"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="8eyq7t5"
                                >
                                    <div className="flex-1" data-oid="68i:c_7">
                                        <h4
                                            className="font-semibold text-gray-800 mb-1"
                                            data-oid="urtfz:y"
                                        >
                                            {service.name}
                                        </h4>
                                        <p
                                            className="text-sm text-gray-600 mb-2"
                                            data-oid=".v5p7-f"
                                        >
                                            {service.description}
                                        </p>
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-500"
                                            data-oid="zktig0h"
                                        >
                                            <span data-oid="94-f6k:">📂 {service.category}</span>
                                            <span data-oid="9on70iu">
                                                ⏱️ {service.estimatedTime}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right" data-oid="cr:y9lp">
                                        <p
                                            className="text-lg font-bold text-blue-600"
                                            data-oid="zldedkn"
                                        >
                                            {service.price}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRequestService(service)}
                                    className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold"
                                    data-oid="59udt4a"
                                >
                                    طلب الخدمة
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-4" data-oid="n-rbwkp">
                        <div className="flex items-center justify-between mb-4" data-oid="dyf006a">
                            <h3 className="text-lg font-semibold text-gray-800" data-oid="_eqf_ky">
                                التقييمات ({provider.reviews.length})
                            </h3>
                            <div className="text-right" data-oid="90pi7a2">
                                <div
                                    className="text-2xl font-bold text-blue-600"
                                    data-oid="lcor0hd"
                                >
                                    {provider.rating}
                                </div>
                                <div className="text-sm text-gray-500" data-oid=".277nsb">
                                    من 5
                                </div>
                            </div>
                        </div>

                        {provider.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="mstc6tu"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-3"
                                    data-oid="bl1jy_h"
                                >
                                    <div className="text-2xl" data-oid="muumug1">
                                        {review.customerAvatar}
                                    </div>
                                    <div className="flex-1" data-oid="4dwqmg1">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="2h66tir"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="kap2tam"
                                            >
                                                {review.customerName}
                                            </h4>
                                            <span
                                                className="text-xs text-gray-500"
                                                data-oid="tq5fkvs"
                                            >
                                                {review.date}
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-2"
                                            data-oid="zx_9xj5"
                                        >
                                            <span className="text-yellow-500" data-oid="ws0i4kb">
                                                {getRatingStars(review.rating)}
                                            </span>
                                            <span
                                                className="text-sm text-blue-600"
                                                data-oid="of2rrkl"
                                            >
                                                {review.serviceName}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700" data-oid="5.r71vc">
                                            {review.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Portfolio Tab */}
                {activeTab === 'portfolio' && (
                    <div className="space-y-4" data-oid="ion_mud">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="bq_twgx">
                            معرض الأعمال ({provider.portfolio.length})
                        </h3>
                        <div className="grid grid-cols-2 gap-4" data-oid="26jicy7">
                            {provider.portfolio.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="xjlnzlm"
                                >
                                    <div className="text-4xl text-center mb-3" data-oid="b7wo7sg">
                                        {item.image}
                                    </div>
                                    <h4
                                        className="font-semibold text-gray-800 text-sm mb-1"
                                        data-oid="3d3291_"
                                    >
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mb-2" data-oid="uu5p6oc">
                                        {item.description}
                                    </p>
                                    <span className="text-xs text-gray-500" data-oid="u1u_la5">
                                        {item.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* About Tab */}
                {activeTab === 'about' && (
                    <div className="space-y-6" data-oid="t2uf_o4">
                        {/* Description */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid=".jsv6.f"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="tbfnag0"
                            >
                                نبذة عني
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed" data-oid="k20pas2">
                                {provider.description}
                            </p>
                        </div>

                        {/* Working Hours */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="ixvycd2"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="auzsqi:"
                            >
                                ساعات العمل
                            </h3>
                            <div className="space-y-2" data-oid="yg2fjmq">
                                {Object.entries(provider.workingHours).map(([day, hours]) => (
                                    <div
                                        key={day}
                                        className="flex items-center justify-between py-1"
                                        data-oid="8:43sc8"
                                    >
                                        <span
                                            className="text-sm font-medium text-gray-700"
                                            data-oid="h66r-cj"
                                        >
                                            {day}
                                        </span>
                                        <span
                                            className={`text-sm ${hours.available ? 'text-green-600' : 'text-red-500'}`}
                                            data-oid="4u20y_v"
                                        >
                                            {hours.available
                                                ? `${hours.start} - ${hours.end}`
                                                : 'مغلق'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="sia6vmt"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="5.pyayw"
                            >
                                اللغات
                            </h3>
                            <div className="flex flex-wrap gap-2" data-oid="w4wqmlz">
                                {provider.languages.map((language, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        data-oid="uli6qo2"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid=".4114bc"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="s8y6syg"
                            >
                                الشهادات والمؤهلات
                            </h3>
                            <div className="space-y-3" data-oid="9md322w">
                                {provider.certifications.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="flex items-start space-x-3 space-x-reverse"
                                        data-oid="uvv782m"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${cert.verified ? 'bg-green-100' : 'bg-gray-100'}`}
                                            data-oid="huwj_xi"
                                        >
                                            <span
                                                className={
                                                    cert.verified
                                                        ? 'text-green-600'
                                                        : 'text-gray-500'
                                                }
                                                data-oid="h2nv2t8"
                                            >
                                                {cert.verified ? '✓' : '📜'}
                                            </span>
                                        </div>
                                        <div className="flex-1" data-oid="3wmad12">
                                            <h4
                                                className="font-semibold text-gray-800 text-sm"
                                                data-oid="6043wnx"
                                            >
                                                {cert.name}
                                            </h4>
                                            <p className="text-xs text-gray-600" data-oid="5phsi-h">
                                                {cert.issuer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="4_r2kh3">
                                                {cert.date}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="7walqei"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="1:ms:g:"
                            >
                                معلومات التواصل
                            </h3>
                            <div className="space-y-3" data-oid="ubxg2w5">
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="w-jtr_q"
                                >
                                    <span className="text-gray-500" data-oid="ba9ny10">
                                        📍
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="7pkd35w">
                                        {provider.location}
                                    </span>
                                </div>
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="nsxpr.o"
                                >
                                    <span className="text-gray-500" data-oid="xecaodb">
                                        ⏱️
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="f79iu_g">
                                        يرد خلال {provider.responseTime}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Contact Modal */}
            {showContactModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-end z-50"
                    onClick={() => setShowContactModal(false)}
                    data-oid="6.owh_p"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="6-ayfkr"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="izf8mdb"
                        ></div>

                        <h3
                            className="text-xl font-bold text-gray-800 mb-4 text-center"
                            data-oid="o6ptg-u"
                        >
                            تواصل مع {provider.name}
                        </h3>

                        <div className="space-y-3" data-oid="5.axdxe">
                            <Link
                                href={`/chat/${provider.id}`}
                                className="w-full bg-blue-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="x40nr3x"
                            >
                                💬 إرسال رسالة
                            </Link>
                            <a
                                href={`tel:${provider.phone}`}
                                className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="5b5exk."
                            >
                                📞 اتصال هاتفي
                            </a>
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="engbppv"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="xt8leza"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="cg3wken">
                    <div className="flex justify-around" data-oid="-y5dzlu">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="u2i3vzp"
                        >
                            <span className="text-xl" data-oid="ywbr2e-">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="fk.2tnd">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="-8rrcl_"
                        >
                            <span className="text-xl" data-oid="0xp-6pr">
                                📂
                            </span>
                            <span className="text-xs" data-oid="s:8fbj1">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="qsavz3e"
                        >
                            <span className="text-xl" data-oid="96fx6p4">
                                📋
                            </span>
                            <span className="text-xs" data-oid="ifxdt0c">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="1x0cczf"
                        >
                            <span className="text-xl" data-oid="bw:rvt2">
                                💰
                            </span>
                            <span className="text-xs" data-oid="r7w7a.d">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hil1ma5"
                        >
                            <span className="text-xl" data-oid="zzc8m3v">
                                💬
                            </span>
                            <span className="text-xs" data-oid="u4evq80">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="e_.gwi9"></div>
        </div>
    );
}
