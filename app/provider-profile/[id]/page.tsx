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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="pjdxayo">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="ario7d3"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="pnjz_2j">
                    <div className="flex items-center justify-between mb-6" data-oid=":p41-63">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="kmudhde"
                        >
                            <span className="text-lg" data-oid="mu-ubf.">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-lg font-bold" data-oid="m:08-1p">
                            الملف الشخصي
                        </h1>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="ie-:skx"
                        >
                            <span className="text-lg" data-oid="9uzjunv">
                                ⋯
                            </span>
                        </button>
                    </div>

                    {/* Provider Basic Info */}
                    <div className="text-center" data-oid="gh9kjj-">
                        <div className="relative inline-block mb-4" data-oid="okxj6br">
                            <div
                                className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl"
                                data-oid="v6c4x7s"
                            >
                                {provider.avatar}
                            </div>
                            {provider.isOnline && (
                                <div
                                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
                                    data-oid="8yg10ee"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full"
                                        data-oid="b9cwr0q"
                                    ></div>
                                </div>
                            )}
                            {provider.verified && (
                                <div
                                    className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                                    data-oid="gbnfh.j"
                                >
                                    <span className="text-white text-sm" data-oid="o:lmfv7">
                                        ✓
                                    </span>
                                </div>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold mb-2" data-oid="5hg:gu8">
                            {provider.name}
                        </h2>
                        <div
                            className="flex items-center justify-center space-x-2 space-x-reverse mb-2"
                            data-oid="8euegm6"
                        >
                            <span className="text-yellow-300 text-lg" data-oid="m:51blu">
                                {getRatingStars(provider.rating)}
                            </span>
                            <span className="font-semibold" data-oid="aod68s2">
                                {provider.rating}
                            </span>
                            <span className="text-white/80" data-oid="oxbqn_0">
                                ({provider.completedJobs} تقييم)
                            </span>
                        </div>
                        <p className="text-white/90 text-sm mb-4" data-oid="72s.34:">
                            {provider.location}
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse text-sm"
                            data-oid="07_7rdq"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="rj5xh2q"
                            >
                                <span data-oid="apv55.5">📍</span>
                                <span data-oid="rp86a4_">{provider.responseTime}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="_:p191w"
                            >
                                <span data-oid="d0xj7e8">📅</span>
                                <span data-oid="wx__nr7">عضو منذ {getJoinDuration()}</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="i-uya8d"
                            >
                                <span
                                    className={
                                        provider.isOnline ? 'text-green-300' : 'text-gray-300'
                                    }
                                    data-oid="n8unwln"
                                >
                                    ●
                                </span>
                                <span data-oid="4004kra">
                                    {provider.isOnline ? 'متصل الآن' : 'غير متصل'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="6ed.ynj">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="ebvq8.a">
                    <div className="grid grid-cols-2 gap-3" data-oid="u89v6qi">
                        <button
                            onClick={handleContactProvider}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-blue-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="4lvbpyk"
                        >
                            <span data-oid="k9y68oc">💬</span>
                            <span data-oid="i9.b-8f">تواصل</span>
                        </button>
                        <Link
                            href={`/chat/${provider.id}`}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white py-3 rounded-xl font-semibold"
                            data-oid="u0d4rjx"
                        >
                            <span data-oid="1:kkq6r">📞</span>
                            <span data-oid="x7ywev9">اتصال</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 mb-6" data-oid="wu1h_yu">
                <div
                    className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100"
                    data-oid="n4s.9vj"
                >
                    <div className="grid grid-cols-4 gap-1" data-oid="0l3n64r">
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
                                data-oid="2pb2he0"
                            >
                                <div
                                    className="flex flex-col items-center space-y-1"
                                    data-oid="kt_oipb"
                                >
                                    <span data-oid="q6zp89d">{tab.icon}</span>
                                    <span data-oid="yfzcw_y">{tab.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="iihhv6g">
                {/* Services Tab */}
                {activeTab === 'services' && (
                    <div className="space-y-4" data-oid="7sf9i5h">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="h6flhiz">
                            الخدمات المتاحة ({provider.services.length})
                        </h3>
                        {provider.services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="ez305uu"
                            >
                                <div
                                    className="flex items-start justify-between mb-3"
                                    data-oid="01z_3kf"
                                >
                                    <div className="flex-1" data-oid="b25f9.l">
                                        <h4
                                            className="font-semibold text-gray-800 mb-1"
                                            data-oid="q74bcwa"
                                        >
                                            {service.name}
                                        </h4>
                                        <p
                                            className="text-sm text-gray-600 mb-2"
                                            data-oid="s7.-bhf"
                                        >
                                            {service.description}
                                        </p>
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-500"
                                            data-oid="wf2-8st"
                                        >
                                            <span data-oid="gy_sa2z">📂 {service.category}</span>
                                            <span data-oid="p.urydp">
                                                ⏱️ {service.estimatedTime}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right" data-oid="_dukb1n">
                                        <p
                                            className="text-lg font-bold text-blue-600"
                                            data-oid="8uhlfp_"
                                        >
                                            {service.price}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRequestService(service)}
                                    className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold"
                                    data-oid=".yvmiev"
                                >
                                    طلب الخدمة
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-4" data-oid="u8kl0z2">
                        <div className="flex items-center justify-between mb-4" data-oid="80ggegv">
                            <h3 className="text-lg font-semibold text-gray-800" data-oid="igpgmlp">
                                التقييمات ({provider.reviews.length})
                            </h3>
                            <div className="text-right" data-oid="2kq4ojw">
                                <div
                                    className="text-2xl font-bold text-blue-600"
                                    data-oid="3w5:yut"
                                >
                                    {provider.rating}
                                </div>
                                <div className="text-sm text-gray-500" data-oid=".3mbm_d">
                                    من 5
                                </div>
                            </div>
                        </div>

                        {provider.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="8_c1:4p"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-3"
                                    data-oid="j5ba9rt"
                                >
                                    <div className="text-2xl" data-oid="izl7qnl">
                                        {review.customerAvatar}
                                    </div>
                                    <div className="flex-1" data-oid="mxh-pp6">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="f4qpghc"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="u742jd9"
                                            >
                                                {review.customerName}
                                            </h4>
                                            <span
                                                className="text-xs text-gray-500"
                                                data-oid="ig8mmd5"
                                            >
                                                {review.date}
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-2"
                                            data-oid="x.nzqeq"
                                        >
                                            <span className="text-yellow-500" data-oid="tiasa6m">
                                                {getRatingStars(review.rating)}
                                            </span>
                                            <span
                                                className="text-sm text-blue-600"
                                                data-oid="bv4ohwa"
                                            >
                                                {review.serviceName}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700" data-oid="qrfjzpc">
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
                    <div className="space-y-4" data-oid=".8-zzs2">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4" data-oid="8ty.t88">
                            معرض الأعمال ({provider.portfolio.length})
                        </h3>
                        <div className="grid grid-cols-2 gap-4" data-oid="44j50sv">
                            {provider.portfolio.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                    data-oid="0jh:x0d"
                                >
                                    <div className="text-4xl text-center mb-3" data-oid="a5d5cx7">
                                        {item.image}
                                    </div>
                                    <h4
                                        className="font-semibold text-gray-800 text-sm mb-1"
                                        data-oid="w4w-up:"
                                    >
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mb-2" data-oid="jfb40qz">
                                        {item.description}
                                    </p>
                                    <span className="text-xs text-gray-500" data-oid="vts:oxb">
                                        {item.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* About Tab */}
                {activeTab === 'about' && (
                    <div className="space-y-6" data-oid="resv1o3">
                        {/* Description */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="b4i-qc7"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="o4g:_vw"
                            >
                                نبذة عني
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed" data-oid="3yb0pa4">
                                {provider.description}
                            </p>
                        </div>

                        {/* Working Hours */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="kkdqb6m"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="9t7a7.i"
                            >
                                ساعات العمل
                            </h3>
                            <div className="space-y-2" data-oid="0as4wfy">
                                {Object.entries(provider.workingHours).map(([day, hours]) => (
                                    <div
                                        key={day}
                                        className="flex items-center justify-between py-1"
                                        data-oid="9bu63mi"
                                    >
                                        <span
                                            className="text-sm font-medium text-gray-700"
                                            data-oid=".-4mrdi"
                                        >
                                            {day}
                                        </span>
                                        <span
                                            className={`text-sm ${hours.available ? 'text-green-600' : 'text-red-500'}`}
                                            data-oid="rh8s6vy"
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
                            data-oid="hlrsgur"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="n8rkc33"
                            >
                                اللغات
                            </h3>
                            <div className="flex flex-wrap gap-2" data-oid="e9eltqa">
                                {provider.languages.map((language, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        data-oid="79txth9"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="9b-b.ag"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="h5e.rm_"
                            >
                                الشهادات والمؤهلات
                            </h3>
                            <div className="space-y-3" data-oid="nlhoz1j">
                                {provider.certifications.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="flex items-start space-x-3 space-x-reverse"
                                        data-oid="j07lu_q"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${cert.verified ? 'bg-green-100' : 'bg-gray-100'}`}
                                            data-oid="qkwonyr"
                                        >
                                            <span
                                                className={
                                                    cert.verified
                                                        ? 'text-green-600'
                                                        : 'text-gray-500'
                                                }
                                                data-oid="f7gkuek"
                                            >
                                                {cert.verified ? '✓' : '📜'}
                                            </span>
                                        </div>
                                        <div className="flex-1" data-oid="sk54vy2">
                                            <h4
                                                className="font-semibold text-gray-800 text-sm"
                                                data-oid="rxpn00h"
                                            >
                                                {cert.name}
                                            </h4>
                                            <p className="text-xs text-gray-600" data-oid="8w0hs.4">
                                                {cert.issuer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="202m7c6">
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
                            data-oid=":rwo0cl"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid=":3n:.nz"
                            >
                                معلومات التواصل
                            </h3>
                            <div className="space-y-3" data-oid="eais04x">
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="hfulaec"
                                >
                                    <span className="text-gray-500" data-oid="pbffa70">
                                        📍
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="ufgfhkh">
                                        {provider.location}
                                    </span>
                                </div>
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="unz33si"
                                >
                                    <span className="text-gray-500" data-oid="l960we-">
                                        ⏱️
                                    </span>
                                    <span className="text-sm text-gray-700" data-oid="bwms9ke">
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
                    data-oid="84fsls3"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="w2m..-g"
                    >
                        <div
                            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                            data-oid="xgn83mo"
                        ></div>

                        <h3
                            className="text-xl font-bold text-gray-800 mb-4 text-center"
                            data-oid="vn033rl"
                        >
                            تواصل مع {provider.name}
                        </h3>

                        <div className="space-y-3" data-oid="y6zskkn">
                            <Link
                                href={`/chat/${provider.id}`}
                                className="w-full bg-blue-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="2l3y_k7"
                            >
                                💬 إرسال رسالة
                            </Link>
                            <a
                                href={`tel:${provider.phone}`}
                                className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-center block"
                                data-oid="wvholrv"
                            >
                                📞 اتصال هاتفي
                            </a>
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                data-oid="gtm.rd9"
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
                data-oid="vw_j19i"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="4lhd1j-">
                    <div className="flex justify-around" data-oid="07ihou_">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=".a46m_."
                        >
                            <span className="text-xl" data-oid="odpkcz_">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="1pf:v4v">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="j5:9i-h"
                        >
                            <span className="text-xl" data-oid="7bau22d">
                                📂
                            </span>
                            <span className="text-xs" data-oid="f:_d4.h">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="3htu7vq"
                        >
                            <span className="text-xl" data-oid="lgc7tuq">
                                📋
                            </span>
                            <span className="text-xs" data-oid="_c940_k">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="2fh71p-"
                        >
                            <span className="text-xl" data-oid="v4tnrwn">
                                💰
                            </span>
                            <span className="text-xs" data-oid="c44-w-w">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hh.5dyh"
                        >
                            <span className="text-xl" data-oid="8coonfz">
                                💬
                            </span>
                            <span className="text-xs" data-oid="5x6yq-c">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="7xiyajb"></div>
        </div>
    );
}
