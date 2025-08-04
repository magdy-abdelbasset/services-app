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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="nqn_edf">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="1_9oilj"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="ss6zxym">
                    <div className="flex items-center justify-between mb-6" data-oid="cvy87vg">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="mxvcch9"
                        >
                            <span className="text-lg" data-oid=":0tv8xi">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-lg font-bold" data-oid="wr7ane-">
                            الملف الشخصي
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="aborq:y"
                        >
                            <span className="text-lg" data-oid="0jfl6mr">
                                ⋯
                            </span>
                        </button>
                    </div>

                    {/* Provider Basic Info */}
                    <div className="text-center" data-oid="wzql63s">
                        <div className="relative inline-block mb-4" data-oid="auuvaz8">
                            <div
                                className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl"
                                data-oid="jreokjc"
                            >
                                {provider.avatar}
                            </div>
                            {provider.isOnline && (
                                <div
                                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
                                    data-oid="otdres6"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full"
                                        data-oid="sy3.v80"
                                    ></div>
                                </div>
                            )}
                            {provider.verified && (
                                <div
                                    className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                                    data-oid="ebd94zt"
                                >
                                    <span className="text-white text-sm" data-oid="r322gzj">
                                        ✓
                                    </span>
                                </div>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold mb-2" data-oid="s2-oxq9">
                            {provider.name}
                        </h2>
                        <div
                            className="flex items-center justify-center space-x-2 space-x-reverse mb-2"
                            data-oid="2a2glj4"
                        >
                            <span className="text-yellow-300 text-lg" data-oid="5wbzy__">
                                {getRatingStars(provider.rating)}
                            </span>
                            <span className="font-semibold" data-oid="o0d04je">
                                {provider.rating}
                            </span>
                            <span className="text-white/80" data-oid="k4vd18c">
                                ({provider.completedJobs} تقييم)
                            </span>
                        </div>
                        <p className="text-white/90 text-sm mb-4" data-oid=".s7rxlq">
                            {provider.location}
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse text-sm"
                            data-oid="i-q9vhg"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="fz_:g7m"
                            >
                                <span data-oid="hk9upiz">📍</span>
                                <span data-oid="70klr.q">{provider.responseTime}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="4qqqwje"
                            >
                                <span data-oid=".r26gg.">📅</span>
                                <span data-oid="c.4aye4">عضو منذ {getJoinDuration()}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="sfx5sl:"
                            >
                                <span
                                    className={
                                        provider.isOnline ? 'text-green-300' : 'text-gray-300'
                                    }
                                    data-oid="e1jv:m_"
                                >
                                    ●
                                </span>
                                <span data-oid="si:uumk">
                                    {provider.isOnline ? 'متصل الآن' : 'غير متصل'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="n.gua33">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="acdw3zt">
                    <div className="grid grid-cols-2 gap-3" data-oid="otjdyjv">
                        <button
                            onClick={handleContactProvider}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="a5qooij"
                        >
                            <span data-oid="cl7-jnt">💬</span>
                            <span data-oid=".d4ez5r">تواصل</span>
                        </button>
                        <Link
                            href={`/chat/${provider.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="r06-lwm"
                        >
                            <span data-oid="11n9fat">📞</span>
                            <span data-oid="l23-:17">اتصال</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="6pl2xq.">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid="tt3p178"
                >
                    <div className="grid grid-cols-4 gap-1" data-oid="40am_ol">
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
                                data-oid="n6uus82"
                            >
                                <div
                                    className="flex flex-col items-center space-y-1"
                                    data-oid="vfr.0rb"
                                >
                                    <span data-oid="c2oh0yh">{tab.icon}</span>
                                    <span data-oid="yrwb_x6">{tab.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="ja7tsc3">
                {/* Services Tab */}
                {activeTab === 'services' && (
                    <div className="space-y-4" data-oid="-cpqf92">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="lejwzxr">
                            الخدمات المتاحة ({provider.services.length})
                        </h3>
                        {provider.services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="sm:nnjs"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="ob9--3u"
                                >
                                    <div className="flex-1" data-oid="vp-f5hu">
                                        <h4
                                            className="font-semibold text-gray-800 mb-1"
                                            data-oid="9djr5p8"
                                        >
                                            {service.name}
                                        </h4>
                                        <p
                                            className="text-sm text-gray-600 mb-2"
                                            data-oid="uw6yp1-"
                                        >
                                            {service.description}
                                        </p>
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-500"
                                            data-oid="fmi_wmf"
                                        >
                                            <span data-oid="67yi0ct">📂 {service.category}</span>
                                            <span data-oid="rcbkf7d">
                                                ⏱️ {service.estimatedTime}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right" data-oid="0cuhl9b">
                                        <p
                                            className="text-lg font-bold text-blue-600"
                                            data-oid="6y15s39"
                                        >
                                            {service.price}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRequestService(service)}
                                    className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold"
                                    data-oid="l9dlvss"
                                >
                                    طلب الخدمة
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-4" data-oid="2n9o83t">
                        <div className="flex items-center justify-between mb-4" data-oid="i8gjeay">
                            <h3 className="text-lg font-semibold text-gray-800" data-oid="zc0xxaq">
                                التقييمات ({provider.reviews.length})
                            </h3>
                            <div className="text-right" data-oid="rhge090">
                                <div
                                    className="text-2xl font-bold text-blue-600"
                                    data-oid="-0q-w6v"
                                >
                                    {provider.rating}
                                </div>
                                <div className="text-sm text-gray-500" data-oid="4jx30zn">
                                    من 5
                                </div>
                            </div>
                        </div>

                        {provider.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="q8gvy5a"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-3"
                                    data-oid="dtn5nau"
                                >
                                    <div className="text-2xl" data-oid="0xs:9e:">
                                        {review.customerAvatar}
                                    </div>
                                    <div className="flex-1" data-oid="urn.b:a">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid=".w6y30z"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="dvvq_xl"
                                            >
                                                {review.customerName}
                                            </h4>
                                            <span
                                                className="text-xs text-gray-500"
                                                data-oid="188658o"
                                            >
                                                {review.date}
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-2"
                                            data-oid="n1-98u5"
                                        >
                                            <span className="text-yellow-500" data-oid="2uao7kd">
                                                {getRatingStars(review.rating)}
                                            </span>
                                            <span
                                                className="text-sm text-blue-600"
                                                data-oid="o5fid4c"
                                            >
                                                {review.serviceName}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700" data-oid="66ud:jc">
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
                    <div className="space-y-4" data-oid="weny07c">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="b7eirwq">
                            معرض الأعمال ({provider.portfolio.length})
                        </h3>
                        <div className="grid grid-cols-2 gap-4" data-oid=":lyulhz">
                            {provider.portfolio.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="qzy:xeh"
                                >
                                    <div className="text-4xl text-center mb-3" data-oid="ft0uz1t">
                                        {item.image}
                                    </div>
                                    <h4
                                        className="font-semibold text-gray-800 text-sm mb-1"
                                        data-oid="s:wf.ab"
                                    >
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mb-2" data-oid="h1kxie2">
                                        {item.description}
                                    </p>
                                    <span className="text-xs text-gray-500" data-oid="ves1xlh">
                                        {item.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* About Tab */}
                {activeTab === 'about' && (
                    <div className="space-y-6" data-oid="d8k3haj">
                        {/* Description */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="_9e4sc0"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="5987cma"
                            >
                                نبذة عني
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed" data-oid="f3e8:4e">
                                {provider.description}
                            </p>
                        </div>

                        {/* Working Hours */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="7-qalqf"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="yx4.6nk"
                            >
                                ساعات العمل
                            </h3>
                            <div className="space-y-2" data-oid="99o:.l5">
                                {Object.entries(provider.workingHours).map(([day, hours]) => (
                                    <div
                                        key={day}
                                        className="flex items-center justify-between py-1"
                                        data-oid="8bi6csh"
                                    >
                                        <span
                                            className="text-sm font-medium text-gray-700"
                                            data-oid="dnp.g9i"
                                        >
                                            {day}
                                        </span>
                                        <span
                                            className={`text-sm ${hours.available ? 'text-green-600' : 'text-red-500'}`}
                                            data-oid="e.n2q-1"
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
                            data-oid="-ox5kpa"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="45k_cfd"
                            >
                                اللغات
                            </h3>
                            <div className="flex flex-wrap gap-2" data-oid="rb5:od:">
                                {provider.languages.map((language, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        data-oid="fvn8jc1"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="o1wgqi."
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="y32g496"
                            >
                                الشهادات والمؤهلات
                            </h3>
                            <div className="space-y-3" data-oid="ogxrfxp">
                                {provider.certifications.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="flex items-start space-x-3 space-x-reverse"
                                        data-oid="v1g2wh5"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${cert.verified ? 'bg-green-100' : 'bg-gray-100'}`}
                                            data-oid="cvly923"
                                        >
                                            <span
                                                className={
                                                    cert.verified
                                                        ? 'text-green-600'
                                                        : 'text-gray-500'
                                                }
                                                data-oid="3vh5-tc"
                                            >
                                                {cert.verified ? '✓' : '📜'}
                                            </span>
                                        </div>
                                        <div className="flex-1" data-oid="7ca2b5p">
                                            <h4
                                                className="font-semibold text-gray-800 text-sm"
                                                data-oid="gfl71f."
                                            >
                                                {cert.name}
                                            </h4>
                                            <p className="text-xs text-gray-600" data-oid="k6w2abj">
                                                {cert.issuer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="8fcxfk8">
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
                            data-oid="iyvok96"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="5j.yvb2"
                            >
                                معلومات التواصل
                            </h3>
                            <div className="space-y-3" data-oid="beyc_6q">
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="9lzmv_x"
                                >
                                    <span className="text-gray-500" data-oid="k1y-3eh">
                                        📍
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="bxu2l1n">
                                        {provider.location}
                                    </span>
                                </div>
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="qyhmuqf"
                                >
                                    <span className="text-gray-500" data-oid="zy9m6qn">
                                        ⏱️
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="82_.y-e">
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
                    data-oid="_t9-erl"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="klsorw5"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="3_z-2.i"
                        ></div>

                        <h3
                            className="text-xl font-bold text-gray-800 mb-4 text-center"
                            data-oid="16kz15d"
                        >
                            تواصل مع {provider.name}
                        </h3>

                        <div className="space-y-3" data-oid="8byr6k4">
                            <Link
                                href={`/chat/${provider.id}`}
                                className="w-full bg-blue-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="6ac4rmn"
                            >
                                💬 إرسال رسالة
                            </Link>
                            <a
                                href={`tel:${provider.phone}`}
                                className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="u:m0_9k"
                            >
                                📞 اتصال هاتفي
                            </a>
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="c8a6ith"
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
                data-oid="edq_m9:"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="zduyfmr">
                    <div className="flex justify-around" data-oid="zg3o-gb">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="cc5vy:8"
                        >
                            <span className="text-xl" data-oid="2.u3p:2">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="quexgwf">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="fa6-uq1"
                        >
                            <span className="text-xl" data-oid="mn7_53v">
                                📂
                            </span>
                            <span className="text-xs" data-oid="onu-rn9">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="dfs0m_i"
                        >
                            <span className="text-xl" data-oid="ye.go.b">
                                📋
                            </span>
                            <span className="text-xs" data-oid="b-mg8wt">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="zpofnls"
                        >
                            <span className="text-xl" data-oid="8pq-sm_">
                                💰
                            </span>
                            <span className="text-xs" data-oid="_qluuwn">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="1j8c1h_"
                        >
                            <span className="text-xl" data-oid="hg0ls7h">
                                💬
                            </span>
                            <span className="text-xs" data-oid="4xam8k-">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="yvhy59-"></div>
        </div>
    );
}
