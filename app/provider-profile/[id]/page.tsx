'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
    joinDate: string;
    specialties: string[];
    workingHours: string;
    languages: string[];
    location: string;
    bio: string;
    gallery: string[];
    reviews: Review[];
    services: ServiceOffering[];
}

interface Review {
    id: number;
    customerName: string;
    customerAvatar: string;
    rating: number;
    comment: string;
    date: string;
    serviceName: string;
}

interface ServiceOffering {
    id: number;
    name: string;
    price: string;
    duration: string;
    description: string;
}

export default function ProviderProfilePage() {
    const params = useParams();
    const providerId = params.id as string;

    const [provider, setProvider] = useState<ServiceProvider | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'services' | 'gallery'>(
        'overview',
    );
    const [showContactModal, setShowContactModal] = useState(false);

    // Mock provider data - in real app, this would come from API
    const mockProvider: ServiceProvider = {
        id: parseInt(providerId),
        name: 'أحمد علي محمد',
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
        joinDate: '2019-03-15',
        specialties: ['تنظيف عام', 'تنظيف السجاد', 'تنظيف النوافذ', 'تنظيف المطابخ'],
        workingHours: 'السبت - الخميس: 8:00 ص - 10:00 م',
        languages: ['العربية', 'الإنجليزية'],
        location: 'الرياض، حي النرجس',
        bio: 'مرحباً! أنا أحمد، متخصص في خدمات التنظيف المنزلي منذ أكثر من 5 سنوات. أؤمن بأن النظافة هي أساس الراحة والصحة، لذلك أحرص على تقديم خدمة متميزة باستخدام أفضل المواد والأدوات. أعمل بدقة واهتمام بالتفاصيل لضمان رضا عملائي الكرام.',
        gallery: ['🏠', '🧽', '🪟', '🚿', '🍽️', '🛋️'],
        reviews: [
            {
                id: 1,
                customerName: 'سارة أحمد',
                customerAvatar: '👩‍💼',
                rating: 5,
                comment:
                    'خدمة ممتازة جداً! أحمد محترف ودقيق في عمله. المنزل أصبح نظيفاً بشكل مثالي.',
                date: '2024-01-15',
                serviceName: 'تنظيف عام',
            },
            {
                id: 2,
                customerName: 'محمد عبدالله',
                customerAvatar: '👨‍💻',
                rating: 5,
                comment: 'سرعة في الاستجابة ودقة في المواعيد. أنصح بالتعامل معه بقوة.',
                date: '2024-01-10',
                serviceName: 'تنظيف المطبخ',
            },
            {
                id: 3,
                customerName: 'فاطمة علي',
                customerAvatar: '👩‍🏫',
                rating: 4,
                comment:
                    'عمل جيد ونظافة ممتازة. الوقت كان أطول قليلاً من المتوقع لكن النتيجة مرضية.',
                date: '2024-01-05',
                serviceName: 'تنظيف السجاد',
            },
        ],

        services: [
            {
                id: 1,
                name: 'تنظيف عام للمنزل',
                price: '45 ريال',
                duration: '2-3 ساعات',
                description: 'تنظيف شامل لجميع غرف المنزل',
            },
            {
                id: 2,
                name: 'تنظيف المطبخ',
                price: '35 ريال',
                duration: '1-2 ساعة',
                description: 'تنظيف عميق للمطبخ والأجهزة',
            },
            {
                id: 3,
                name: 'تنظيف الحمامات',
                price: '25 ريال',
                duration: '30-45 دقيقة',
                description: 'تنظيف وتعقيم الحمامات',
            },
            {
                id: 4,
                name: 'تنظيف النوافذ',
                price: '20 ريال',
                duration: '30 دقيقة',
                description: 'تنظيف النوافذ من الداخل والخارج',
            },
        ],
    };

    useEffect(() => {
        // Simulate API call
        setProvider(mockProvider);
    }, [providerId]);

    const handleRequestService = (service?: ServiceOffering) => {
        if (typeof window !== 'undefined' && (window as any).showNotification) {
            (window as any).showNotification({
                type: 'info',
                title: 'جاري تحضير طلبك',
                message: `سيتم توجيهك لصفحة طلب الخدمة من ${provider?.name}`,
                duration: 3000,
            });
        }

        const serviceName = service ? service.name : 'خدمة عامة';
        setTimeout(() => {
            window.location.href = `/request-service?provider=${providerId}&service=${encodeURIComponent(serviceName)}`;
        }, 1000);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const getJoinDuration = () => {
        const joinDate = new Date(provider?.joinDate || '');
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

    if (!provider) {
        return (
            <div
                className="min-h-screen bg-gray-50 flex items-center justify-center"
                dir="rtl"
                data-oid="a_82g7l"
            >
                <div className="text-center" data-oid="29bev8:">
                    <div
                        className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                        data-oid="u:iqel0"
                    ></div>
                    <p className="text-gray-600" data-oid="vfykiqg">
                        جاري تحميل الملف الشخصي...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="8codid8">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="jt6p_z3"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="5mdb:wb">
                    <div className="flex items-center justify-between mb-6" data-oid="f_zjnop">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="2kxuc5p"
                        >
                            <span className="text-lg" data-oid="d1oy678">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-lg font-bold" data-oid="ipv:dr6">
                            الملف الشخصي
                        </h1>
                        <button
                            onClick={() => setShowContactModal(true)}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="efqrzkm"
                        >
                            <span className="text-lg" data-oid="cb5xbjd">
                                📞
                            </span>
                        </button>
                    </div>

                    {/* Provider Header Info */}
                    <div className="text-center" data-oid="6n4qb8q">
                        <div className="relative inline-block mb-4" data-oid="e4.qzjy">
                            <div className="text-6xl" data-oid="pr5l1mg">
                                {provider.avatar}
                            </div>
                            {provider.isOnline && (
                                <div
                                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"
                                    data-oid="3ew1qfq"
                                ></div>
                            )}
                        </div>
                        <h2 className="text-2xl font-bold mb-2" data-oid="um_djm2">
                            {provider.name}
                        </h2>
                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse mb-4"
                            data-oid="3feqe:c"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="qr5y5n0"
                            >
                                <span className="text-yellow-400" data-oid="t9eh.-:">
                                    ⭐
                                </span>
                                <span className="font-semibold" data-oid="kxzhvjt">
                                    {provider.rating}
                                </span>
                            </div>
                            <span data-oid="b6pkqg3">({provider.completedJobs} خدمة مكتملة)</span>
                            {provider.verified && (
                                <span
                                    className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                                    data-oid=".zgy:v0"
                                >
                                    موثق ✓
                                </span>
                            )}
                        </div>
                        <p className="text-white/90 text-sm mb-4" data-oid=":ln7kz.">
                            {provider.description}
                        </p>
                        <div
                            className="flex items-center justify-center space-x-6 space-x-reverse text-sm"
                            data-oid="is9w:dy"
                        >
                            <div className="text-center" data-oid="p1jliv3">
                                <div className="font-bold" data-oid="j21amu0">
                                    {provider.distance}
                                </div>
                                <div className="text-white/80" data-oid="0rnbbd1">
                                    المسافة
                                </div>
                            </div>
                            <div className="text-center" data-oid="7vzeffe">
                                <div className="font-bold" data-oid="5f-f2im">
                                    {provider.responseTime}
                                </div>
                                <div className="text-white/80" data-oid="14mbovh">
                                    وقت الاستجابة
                                </div>
                            </div>
                            <div className="text-center" data-oid="2a0zud6">
                                <div className="font-bold" data-oid="o2:qqck">
                                    {getJoinDuration()}
                                </div>
                                <div className="text-white/80" data-oid="x7lg4nq">
                                    في الخدمة
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="od6lpoi">
                <div className="bg-white rounded-2xl shadow-lg p-1 mb-6" data-oid=".i..c2i">
                    <div className="grid grid-cols-4 gap-1" data-oid="alu2o49">
                        {[
                            { key: 'overview', label: 'نظرة عامة', icon: '📋' },
                            { key: 'services', label: 'الخدمات', icon: '🛠️' },
                            { key: 'reviews', label: 'التقييمات', icon: '⭐' },
                            { key: 'gallery', label: 'المعرض', icon: '📸' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as any)}
                                className={`p-3 rounded-xl text-xs font-semibold transition-colors ${
                                    activeTab === tab.key
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                                data-oid="4c-53sg"
                            >
                                <div className="text-lg mb-1" data-oid="83rkmvw">
                                    {tab.icon}
                                </div>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="aj2ehj.">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-4" data-oid=":blen9_">
                        {/* Bio */}
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="mc2egcy"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="9x_dsmq"
                            >
                                نبذة شخصية
                            </h3>
                            <p className="text-gray-700 leading-relaxed" data-oid="9_bb-b3">
                                {provider.bio}
                            </p>
                        </div>

                        {/* Specialties */}
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="dgj1j5."
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-3"
                                data-oid="3pn4ifs"
                            >
                                التخصصات
                            </h3>
                            <div className="flex flex-wrap gap-2" data-oid="4hj73qj">
                                {provider.specialties.map((specialty, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        data-oid="4f2r5pw"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="xai29ry"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="v64wa7-"
                            >
                                تفاصيل إضافية
                            </h3>
                            <div className="space-y-3" data-oid="o3-tyl9">
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid=":n.cexi"
                                >
                                    <span className="text-xl" data-oid="aa46h6f">
                                        📍
                                    </span>
                                    <div data-oid="j-h0p33">
                                        <div
                                            className="font-semibold text-gray-800"
                                            data-oid="_3aafpk"
                                        >
                                            الموقع
                                        </div>
                                        <div className="text-gray-600 text-sm" data-oid="pd5hke1">
                                            {provider.location}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="oa152uw"
                                >
                                    <span className="text-xl" data-oid="cujg._f">
                                        🕒
                                    </span>
                                    <div data-oid="h3-yaeg">
                                        <div
                                            className="font-semibold text-gray-800"
                                            data-oid="wzvnkxe"
                                        >
                                            ساعات العمل
                                        </div>
                                        <div className="text-gray-600 text-sm" data-oid="ywprn2.">
                                            {provider.workingHours}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="of-te8p"
                                >
                                    <span className="text-xl" data-oid="mtlsn7n">
                                        🗣️
                                    </span>
                                    <div data-oid="wnerzqr">
                                        <div
                                            className="font-semibold text-gray-800"
                                            data-oid="z8ok:-g"
                                        >
                                            اللغات
                                        </div>
                                        <div className="text-gray-600 text-sm" data-oid="0s69ek8">
                                            {provider.languages.join(', ')}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="nzrfhg0"
                                >
                                    <span className="text-xl" data-oid="ikts01_">
                                        📅
                                    </span>
                                    <div data-oid="bk2fgwn">
                                        <div
                                            className="font-semibold text-gray-800"
                                            data-oid="nl:d9c1"
                                        >
                                            تاريخ الانضمام
                                        </div>
                                        <div className="text-gray-600 text-sm" data-oid="mt.r9ra">
                                            {formatDate(provider.joinDate)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Services Tab */}
                {activeTab === 'services' && (
                    <div className="space-y-4" data-oid="667r5tt">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="uth24e-"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="jq0-1e:"
                            >
                                الخدمات المتاحة
                            </h3>
                            <div className="space-y-4" data-oid="1d54ds-">
                                {provider.services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="border border-gray-100 rounded-xl p-4"
                                        data-oid="b68p2el"
                                    >
                                        <div
                                            className="flex justify-between items-start mb-2"
                                            data-oid="u3lbrt1"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="d.biu32"
                                            >
                                                {service.name}
                                            </h4>
                                            <span
                                                className="text-blue-600 font-bold"
                                                data-oid="pkf7m64"
                                            >
                                                {service.price}
                                            </span>
                                        </div>
                                        <p
                                            className="text-gray-600 text-sm mb-3"
                                            data-oid=".xktn_5"
                                        >
                                            {service.description}
                                        </p>
                                        <div
                                            className="flex justify-between items-center"
                                            data-oid="_myawag"
                                        >
                                            <span
                                                className="text-gray-500 text-sm"
                                                data-oid="xuns66l"
                                            >
                                                ⏱️ {service.duration}
                                            </span>
                                            <button
                                                onClick={() => handleRequestService(service)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                                data-oid="7xs0fvu"
                                            >
                                                طلب الخدمة
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-4" data-oid="9nfu5cw">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="yplep:7"
                        >
                            <div
                                className="flex justify-between items-center mb-4"
                                data-oid="q8_8w.e"
                            >
                                <h3
                                    className="text-lg font-semibold text-gray-800"
                                    data-oid="74zvkwk"
                                >
                                    التقييمات
                                </h3>
                                <div
                                    className="flex items-center space-x-2 space-x-reverse"
                                    data-oid="vv8khxf"
                                >
                                    <span className="text-yellow-500" data-oid="tjqsv_o">
                                        ⭐
                                    </span>
                                    <span className="font-bold" data-oid="3-6xr4e">
                                        {provider.rating}
                                    </span>
                                    <span className="text-gray-500" data-oid="v_wd4yy">
                                        ({provider.reviews.length})
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4" data-oid="z-0qhtz">
                                {provider.reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="border-b border-gray-100 pb-4 last:border-b-0"
                                        data-oid=":coya.u"
                                    >
                                        <div
                                            className="flex items-start space-x-3 space-x-reverse mb-2"
                                            data-oid="92vk409"
                                        >
                                            <div className="text-2xl" data-oid="6umcxbq">
                                                {review.customerAvatar}
                                            </div>
                                            <div className="flex-1" data-oid="jnxkhvh">
                                                <div
                                                    className="flex justify-between items-start mb-1"
                                                    data-oid="fw19c_6"
                                                >
                                                    <h4
                                                        className="font-semibold text-gray-800"
                                                        data-oid="usi_f4s"
                                                    >
                                                        {review.customerName}
                                                    </h4>
                                                    <div
                                                        className="flex items-center space-x-1 space-x-reverse"
                                                        data-oid="l4nzyxu"
                                                    >
                                                        {[...Array(5)].map((_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`text-sm ${
                                                                    i < review.rating
                                                                        ? 'text-yellow-500'
                                                                        : 'text-gray-300'
                                                                }`}
                                                                data-oid="8xbhhv5"
                                                            >
                                                                ⭐
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p
                                                    className="text-gray-700 text-sm mb-2"
                                                    data-oid="nzrbhgj"
                                                >
                                                    {review.comment}
                                                </p>
                                                <div
                                                    className="flex justify-between items-center text-xs text-gray-500"
                                                    data-oid="qbo_xv6"
                                                >
                                                    <span data-oid="cj-yncc">
                                                        {review.serviceName}
                                                    </span>
                                                    <span data-oid="slo47.s">
                                                        {formatDate(review.date)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                    <div className="space-y-4" data-oid="bbw.9ut">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            data-oid="4nnfyym"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="-rz8xtk"
                            >
                                معرض الأعمال
                            </h3>
                            <div className="grid grid-cols-2 gap-4" data-oid="k55fq68">
                                {provider.gallery.map((image, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-4xl"
                                        data-oid="x5reg3i"
                                    >
                                        {image}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Fixed Bottom Actions */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4"
                data-oid="lrvpw2_"
            >
                <div className="max-w-sm mx-auto flex space-x-3 space-x-reverse" data-oid="xuztvdr">
                    <button
                        onClick={() => handleRequestService()}
                        className="flex-1 bg-blue-500 text-white py-4 rounded-2xl font-semibold"
                        data-oid="8:8t:e7"
                    >
                        طلب خدمة - {provider.price}
                    </button>
                    <Link
                        href={`/chat/${provider.id}`}
                        className="px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center"
                        data-oid="t1q4jxo"
                    >
                        💬
                    </Link>
                </div>
            </div>

            {/* Contact Modal */}
            {showContactModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setShowContactModal(false)}
                    data-oid="48wmjkj"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="um8-hf:"
                    >
                        <h3
                            className="text-xl font-bold text-gray-800 mb-4 text-center"
                            data-oid="1_n_87w"
                        >
                            معلومات التواصل
                        </h3>
                        <div className="space-y-4" data-oid="io45h_:">
                            <div
                                className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl"
                                data-oid="_b-ipvv"
                            >
                                <span className="text-2xl" data-oid="6hlzw98">
                                    📱
                                </span>
                                <div data-oid="f5.w256">
                                    <div className="font-semibold text-gray-800" data-oid="rrucs94">
                                        رقم الهاتف
                                    </div>
                                    <div className="text-gray-600" data-oid="raes018">
                                        +966 50 123 4567
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl"
                                data-oid="vf4bcaa"
                            >
                                <span className="text-2xl" data-oid="b3iyqdc">
                                    📧
                                </span>
                                <div data-oid="vh0txc1">
                                    <div className="font-semibold text-gray-800" data-oid="jm-l1s9">
                                        البريد الإلكتروني
                                    </div>
                                    <div className="text-gray-600" data-oid="g_e67y:">
                                        ahmed.ali@example.com
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl"
                                data-oid="l-hf0o0"
                            >
                                <span className="text-2xl" data-oid="yzh7tag">
                                    💬
                                </span>
                                <div data-oid="l6u6was">
                                    <div className="font-semibold text-gray-800" data-oid="jz6554s">
                                        واتساب
                                    </div>
                                    <div className="text-gray-600" data-oid="rrupn2g">
                                        +966 50 123 4567
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowContactModal(false)}
                            className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold mt-6"
                            data-oid="76ce_gp"
                        >
                            إغلاق
                        </button>
                    </div>
                </div>
            )}

            {/* Padding for bottom actions */}
            <div className="h-24" data-oid="1xr1:x8"></div>
        </div>
    );
}
