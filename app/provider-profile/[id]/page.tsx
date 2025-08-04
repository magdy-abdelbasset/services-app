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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="t1qrhym">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="7svx119"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="4zxqpu1">
                    <div className="flex items-center justify-between mb-6" data-oid="92ivpl4">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="3i50r.j"
                        >
                            <span className="text-lg" data-oid="o6mlqaf">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-lg font-bold" data-oid="i5.ywyo">
                            الملف الشخصي
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="t38qgcy"
                        >
                            <span className="text-lg" data-oid="sskyfhi">
                                ⋯
                            </span>
                        </button>
                    </div>

                    {/* Provider Basic Info */}
                    <div className="text-center" data-oid="m.tamxi">
                        <div className="relative inline-block mb-4" data-oid="kjt67ki">
                            <div
                                className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl"
                                data-oid="a2l1emx"
                            >
                                {provider.avatar}
                            </div>
                            {provider.isOnline && (
                                <div
                                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
                                    data-oid="plmgqxa"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full"
                                        data-oid="b::4l_:"
                                    ></div>
                                </div>
                            )}
                            {provider.verified && (
                                <div
                                    className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                                    data-oid="qmavj.g"
                                >
                                    <span className="text-white text-sm" data-oid="h9g1hec">
                                        ✓
                                    </span>
                                </div>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold mb-2" data-oid="kzmvue_">
                            {provider.name}
                        </h2>
                        <div
                            className="flex items-center justify-center space-x-2 space-x-reverse mb-2"
                            data-oid="-.fxiz6"
                        >
                            <span className="text-yellow-300 text-lg" data-oid="ou77vf6">
                                {getRatingStars(provider.rating)}
                            </span>
                            <span className="font-semibold" data-oid=":x1jrnk">
                                {provider.rating}
                            </span>
                            <span className="text-white/80" data-oid="kd25sv4">
                                ({provider.completedJobs} تقييم)
                            </span>
                        </div>
                        <p className="text-white/90 text-sm mb-4" data-oid="h0_wxwu">
                            {provider.location}
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse text-sm"
                            data-oid="wehqpby"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="n8-uomv"
                            >
                                <span data-oid="gtt-wdf">📍</span>
                                <span data-oid="g14635w">{provider.responseTime}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="plhis7_"
                            >
                                <span data-oid="qvj04.-">📅</span>
                                <span data-oid="pu_.lve">عضو منذ {getJoinDuration()}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="33q514e"
                            >
                                <span
                                    className={
                                        provider.isOnline ? 'text-green-300' : 'text-gray-300'
                                    }
                                    data-oid="qsajae:"
                                >
                                    ●
                                </span>
                                <span data-oid="t98l2z_">
                                    {provider.isOnline ? 'متصل الآن' : 'غير متصل'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="pow_hk5">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="4u0zdwb">
                    <div className="grid grid-cols-2 gap-3" data-oid="p4n1ag.">
                        <button
                            onClick={handleContactProvider}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="25fcf9d"
                        >
                            <span data-oid="imv0z-k">💬</span>
                            <span data-oid="du04g_i">تواصل</span>
                        </button>
                        <Link
                            href={`/chat/${provider.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="j9daez6"
                        >
                            <span data-oid="w:2i0wc">📞</span>
                            <span data-oid="5mrd726">اتصال</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="pia6t96">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid="ql-4sa5"
                >
                    <div className="grid grid-cols-4 gap-1" data-oid="2px6inm">
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
                                data-oid="c1udbjg"
                            >
                                <div
                                    className="flex flex-col items-center space-y-1"
                                    data-oid="3g5whtf"
                                >
                                    <span data-oid="sz49mwa">{tab.icon}</span>
                                    <span data-oid="9hy9ri1">{tab.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="9_6s3-q">
                {/* Services Tab */}
                {activeTab === 'services' && (
                    <div className="space-y-4" data-oid="v.8do99">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="pvu:_dz">
                            الخدمات المتاحة ({provider.services.length})
                        </h3>
                        {provider.services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="yq:-t7."
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="lq:h5jn"
                                >
                                    <div className="flex-1" data-oid="xf1ktgg">
                                        <h4
                                            className="font-semibold text-gray-800 mb-1"
                                            data-oid="yz.p81l"
                                        >
                                            {service.name}
                                        </h4>
                                        <p
                                            className="text-sm text-gray-600 mb-2"
                                            data-oid="f-:tfrf"
                                        >
                                            {service.description}
                                        </p>
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-500"
                                            data-oid="hs8.424"
                                        >
                                            <span data-oid="ucpp:o.">📂 {service.category}</span>
                                            <span data-oid="3sci15n">
                                                ⏱️ {service.estimatedTime}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right" data-oid="bie8wu6">
                                        <p
                                            className="text-lg font-bold text-blue-600"
                                            data-oid="rxf5guy"
                                        >
                                            {service.price}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRequestService(service)}
                                    className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold"
                                    data-oid="9mv7fg0"
                                >
                                    طلب الخدمة
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-4" data-oid="zd1u2rc">
                        <div className="flex items-center justify-between mb-4" data-oid="-pdzq8d">
                            <h3 className="text-lg font-semibold text-gray-800" data-oid="21b-w4p">
                                التقييمات ({provider.reviews.length})
                            </h3>
                            <div className="text-right" data-oid="iz22o-6">
                                <div
                                    className="text-2xl font-bold text-blue-600"
                                    data-oid="yk1xk9."
                                >
                                    {provider.rating}
                                </div>
                                <div className="text-sm text-gray-500" data-oid="d808g0e">
                                    من 5
                                </div>
                            </div>
                        </div>

                        {provider.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="iu4njjx"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-3"
                                    data-oid="g7p0yhd"
                                >
                                    <div className="text-2xl" data-oid="p1105sf">
                                        {review.customerAvatar}
                                    </div>
                                    <div className="flex-1" data-oid="tw-_lsc">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="pe_ysun"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="w1pxs82"
                                            >
                                                {review.customerName}
                                            </h4>
                                            <span
                                                className="text-xs text-gray-500"
                                                data-oid="f-sps3_"
                                            >
                                                {review.date}
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-2"
                                            data-oid="we9zn:8"
                                        >
                                            <span className="text-yellow-500" data-oid="xbibmdv">
                                                {getRatingStars(review.rating)}
                                            </span>
                                            <span
                                                className="text-sm text-blue-600"
                                                data-oid="2kcir1q"
                                            >
                                                {review.serviceName}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700" data-oid="80hl6mx">
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
                    <div className="space-y-4" data-oid="t6zn:z6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="kc5a833">
                            معرض الأعمال ({provider.portfolio.length})
                        </h3>
                        <div className="grid grid-cols-2 gap-4" data-oid="6j0_brs">
                            {provider.portfolio.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid=".b_jz7j"
                                >
                                    <div className="text-4xl text-center mb-3" data-oid="a1-0t-1">
                                        {item.image}
                                    </div>
                                    <h4
                                        className="font-semibold text-gray-800 text-sm mb-1"
                                        data-oid="uyuj7xl"
                                    >
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mb-2" data-oid="p7:2ye5">
                                        {item.description}
                                    </p>
                                    <span className="text-xs text-gray-500" data-oid="l7:ruom">
                                        {item.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* About Tab */}
                {activeTab === 'about' && (
                    <div className="space-y-6" data-oid="pne6hzm">
                        {/* Description */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="fh8vrdl"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="vufhh1y"
                            >
                                نبذة عني
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed" data-oid=":c.39lk">
                                {provider.description}
                            </p>
                        </div>

                        {/* Working Hours */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="8ml5:a8"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="pabcd_s"
                            >
                                ساعات العمل
                            </h3>
                            <div className="space-y-2" data-oid=".dfy4wl">
                                {Object.entries(provider.workingHours).map(([day, hours]) => (
                                    <div
                                        key={day}
                                        className="flex items-center justify-between py-1"
                                        data-oid="1s6y0df"
                                    >
                                        <span
                                            className="text-sm font-medium text-gray-700"
                                            data-oid="cjsoqko"
                                        >
                                            {day}
                                        </span>
                                        <span
                                            className={`text-sm ${hours.available ? 'text-green-600' : 'text-red-500'}`}
                                            data-oid="2qot7sv"
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
                            data-oid="2b3nn_u"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="z5cv96:"
                            >
                                اللغات
                            </h3>
                            <div className="flex flex-wrap gap-2" data-oid="4o2m6b5">
                                {provider.languages.map((language, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        data-oid="0bii6cr"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="gav-:-."
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="syvhq.q"
                            >
                                الشهادات والمؤهلات
                            </h3>
                            <div className="space-y-3" data-oid="2lso9mq">
                                {provider.certifications.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="flex items-start space-x-3 space-x-reverse"
                                        data-oid="rwanuka"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${cert.verified ? 'bg-green-100' : 'bg-gray-100'}`}
                                            data-oid="f9320xe"
                                        >
                                            <span
                                                className={
                                                    cert.verified
                                                        ? 'text-green-600'
                                                        : 'text-gray-500'
                                                }
                                                data-oid="3akrotv"
                                            >
                                                {cert.verified ? '✓' : '📜'}
                                            </span>
                                        </div>
                                        <div className="flex-1" data-oid="gclz1s6">
                                            <h4
                                                className="font-semibold text-gray-800 text-sm"
                                                data-oid="dz_voop"
                                            >
                                                {cert.name}
                                            </h4>
                                            <p className="text-xs text-gray-600" data-oid="jn68hd7">
                                                {cert.issuer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="x_7nfjp">
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
                            data-oid="1g8phkr"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="513ca5t"
                            >
                                معلومات التواصل
                            </h3>
                            <div className="space-y-3" data-oid="9w.tkf6">
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="z13v8xf"
                                >
                                    <span className="text-gray-500" data-oid="2hlbblp">
                                        📍
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="3gli8c-">
                                        {provider.location}
                                    </span>
                                </div>
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="5wxvxkp"
                                >
                                    <span className="text-gray-500" data-oid="bccdk_2">
                                        ⏱️
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="77_-uye">
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
                    data-oid="sqrmrar"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="64o3o.1"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="ysr1g23"
                        ></div>

                        <h3
                            className="text-xl font-bold text-gray-800 mb-4 text-center"
                            data-oid="cpvh01l"
                        >
                            تواصل مع {provider.name}
                        </h3>

                        <div className="space-y-3" data-oid="-_cj10u">
                            <Link
                                href={`/chat/${provider.id}`}
                                className="w-full bg-blue-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="nborisz"
                            >
                                💬 إرسال رسالة
                            </Link>
                            <a
                                href={`tel:${provider.phone}`}
                                className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="7eruc3k"
                            >
                                📞 اتصال هاتفي
                            </a>
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="k0ao-u5"
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
                data-oid="zkd_2vm"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="e23vrl_">
                    <div className="flex justify-around" data-oid="bxlyg4:">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="wb9ohv6"
                        >
                            <span className="text-xl" data-oid="0rwgr1u">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="1o-v81m">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="oa03:1o"
                        >
                            <span className="text-xl" data-oid="dxcg.j6">
                                📂
                            </span>
                            <span className="text-xs" data-oid="qbafrra">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ltatz3d"
                        >
                            <span className="text-xl" data-oid="5wse:76">
                                📋
                            </span>
                            <span className="text-xs" data-oid="wlpcvv8">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="k:grere"
                        >
                            <span className="text-xl" data-oid="l3tfp0o">
                                💰
                            </span>
                            <span className="text-xs" data-oid="aejbbws">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="zdtipd1"
                        >
                            <span className="text-xl" data-oid="mrgz0hj">
                                💬
                            </span>
                            <span className="text-xs" data-oid="qku49yy">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="l-xod.0"></div>
        </div>
    );
}
