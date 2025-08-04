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

interface Service {
    id: number;
    name: string;
    categoryId: number;
    subCategoryId: number;
    providers: ServiceProvider[];
}

export default function ServicesPage() {
    const searchParams = useSearchParams();
    const categoryId = searchParams.get('category');
    const subCategoryId = searchParams.get('subcategory');

    const [services, setServices] = useState<Service[]>([]);
    const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>([]);
    const [sortBy, setSortBy] = useState<'rating' | 'price' | 'distance'>('rating');
    const [filterBy, setFilterBy] = useState<'all' | 'verified' | 'online'>('all');
    const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);

    // Mock data for services and providers
    const mockServices: Service[] = [
        {
            id: 1,
            name: 'تنظيف عام',
            categoryId: 1,
            subCategoryId: 11,
            providers: [
                {
                    id: 1,
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
                },
                {
                    id: 2,
                    name: 'فاطمة محمد',
                    avatar: '👩‍💼',
                    rating: 4.8,
                    completedJobs: 203,
                    price: '50 ريال',
                    estimatedTime: '30 دقيقة',
                    description: 'متخصصة في التنظيف العميق، خدمة سريعة ومضمونة',
                    verified: true,
                    responseTime: '3 دقائق',
                    distance: '1.8 كم',
                    isOnline: true,
                },
                {
                    id: 3,
                    name: 'محمد حسن',
                    avatar: '👨‍🔧',
                    rating: 4.7,
                    completedJobs: 89,
                    price: '40 ريال',
                    estimatedTime: '35 دقيقة',
                    description: 'خدمة تنظيف شاملة بأسعار منافسة',
                    verified: false,
                    responseTime: '10 دقائق',
                    distance: '3.2 كم',
                    isOnline: false,
                },
                {
                    id: 4,
                    name: 'سارة أحمد',
                    avatar: '👩‍🎨',
                    rating: 4.6,
                    completedJobs: 124,
                    price: '55 ريال',
                    estimatedTime: '40 دقيقة',
                    description: 'خدمات تنظيف متميزة مع ضمان الجودة',
                    verified: true,
                    responseTime: '7 دقائق',
                    distance: '4.1 كم',
                    isOnline: true,
                },
            ],
        },
    ];

    useEffect(() => {
        // Filter services based on category and subcategory
        const filtered = mockServices.filter((service) => {
            if (categoryId && service.categoryId !== parseInt(categoryId)) return false;
            if (subCategoryId && service.subCategoryId !== parseInt(subCategoryId)) return false;
            return true;
        });

        setServices(filtered);

        // Get all providers from filtered services
        const allProviders = filtered.flatMap((service) => service.providers);
        setFilteredProviders(allProviders);
    }, [categoryId, subCategoryId]);

    useEffect(() => {
        let providers = services.flatMap((service) => service.providers);

        // Apply filters
        if (filterBy === 'verified') {
            providers = providers.filter((provider) => provider.verified);
        } else if (filterBy === 'online') {
            providers = providers.filter((provider) => provider.isOnline);
        }

        // Apply sorting
        providers.sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'price':
                    return parseInt(a.price) - parseInt(b.price);
                case 'distance':
                    return parseFloat(a.distance) - parseFloat(b.distance);
                default:
                    return 0;
            }
        });

        setFilteredProviders(providers);
    }, [services, sortBy, filterBy]);

    const handleRequestService = (provider: ServiceProvider) => {
        // Show notification
        if (typeof window !== 'undefined' && (window as any).showNotification) {
            (window as any).showNotification({
                type: 'info',
                title: 'جاري تحضير طلبك',
                message: `سيتم توجيهك لصفحة طلب الخدمة من ${provider.name}`,
                duration: 3000,
            });
        }

        const serviceName = getSubCategoryName() || getCategoryName();
        setTimeout(() => {
            window.location.href = `/request-service?provider=${provider.id}&service=${encodeURIComponent(serviceName)}`;
        }, 1000);
    };

    const getCategoryName = () => {
        const categoryNames: { [key: string]: string } = {
            '1': 'خدمات المنزل',
            '2': 'الصيانة والإصلاح',
            '3': 'التوصيل والنقل',
            '4': 'الجمال والعناية',
            '5': 'البستنة والحدائق',
            '6': 'التعليم والتدريب',
            '7': 'الرياضة واللياقة',
            '8': 'التكنولوجيا والدعم الفني',
        };
        return categoryId ? categoryNames[categoryId] : 'جميع الخدمات';
    };

    const getSubCategoryName = () => {
        const subCategoryNames: { [key: string]: string } = {
            '11': 'تنظيف عام',
            '12': 'تنظيف السجاد',
            '21': 'صيانة السباكة',
            '22': 'صيانة الكهرباء',
            // Add more subcategory mappings as needed
        };
        return subCategoryId ? subCategoryNames[subCategoryId] : '';
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="sxvwdri">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="j2xff6u"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="xtx.i9f">
                    <div className="flex items-center justify-between mb-4" data-oid="v:74f_4">
                        <Link
                            href="/categories"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid=".y_l:yh"
                        >
                            <span className="text-lg" data-oid="2ca-dy9">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="_sgfdnl">
                            <h1 className="text-lg font-bold" data-oid="k3p_p9f">
                                {getCategoryName()}
                            </h1>
                            {getSubCategoryName() && (
                                <p className="text-sm text-white/90" data-oid=":w-4-4a">
                                    {getSubCategoryName()}
                                </p>
                            )}
                        </div>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid=".a3qf1w"
                        >
                            <span className="text-lg" data-oid="oy3v.y_">
                                🔍
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="8up_.z_">
                <div
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4"
                    data-oid="rid3hha"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="ldyreix">
                        <h3 className="font-semibold text-gray-800" data-oid="80axpin">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="q5it.kj"
                        >
                            <option value="rating" data-oid="wasv_l9">
                                التقييم
                            </option>
                            <option value="price" data-oid="dpp7gbw">
                                السعر
                            </option>
                            <option value="distance" data-oid="mmdh9n5">
                                المسافة
                            </option>
                        </select>
                    </div>

                    <div className="flex space-x-2 space-x-reverse" data-oid="5hqd4vk">
                        <button
                            onClick={() => setFilterBy('all')}
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                                filterBy === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="4c-::p5"
                        >
                            الكل ({services.flatMap((s) => s.providers).length})
                        </button>
                        <button
                            onClick={() => setFilterBy('verified')}
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                                filterBy === 'verified'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid=".0wufsp"
                        >
                            موثق (
                            {services.flatMap((s) => s.providers).filter((p) => p.verified).length})
                        </button>
                        <button
                            onClick={() => setFilterBy('online')}
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                                filterBy === 'online'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="7vxp09:"
                        >
                            متصل (
                            {services.flatMap((s) => s.providers).filter((p) => p.isOnline).length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Service Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid=".1ea3f7">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="f4lqps.">
                        {filteredProviders.map((provider) => (
                            <div
                                key={provider.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="zo.exsl"
                            >
                                {/* Provider Info */}
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-4"
                                    data-oid="j17zvba"
                                >
                                    <div className="relative" data-oid="y:d5w_x">
                                        <div className="text-3xl" data-oid="7.8h:zi">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="3pq480:"
                                            ></div>
                                        )}
                                    </div>
                                    <div className="flex-1" data-oid="8973c7i">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="1x0bjn-"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="wed:muj"
                                            >
                                                {provider.name}
                                            </h4>
                                            {provider.verified && (
                                                <span
                                                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid=".30dh75"
                                                >
                                                    موثق
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="ibgu95u"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="1jz3924"
                                            >
                                                <span
                                                    className="text-yellow-500"
                                                    data-oid="b0y9mx8"
                                                >
                                                    ⭐
                                                </span>
                                                <span data-oid="8zuljzd">{provider.rating}</span>
                                            </div>
                                            <span data-oid="b1c3k7x">
                                                ({provider.completedJobs} خدمة مكتملة)
                                            </span>
                                            <span data-oid="nksu8sm">📍 {provider.distance}</span>
                                        </div>
                                        <p
                                            className="text-sm text-gray-700 mb-3"
                                            data-oid="4b:kvt9"
                                        >
                                            {provider.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="bg-gray-50 rounded-xl p-3 mb-4" data-oid="w93fzbr">
                                    <div
                                        className="grid grid-cols-3 gap-4 text-center"
                                        data-oid="bkwetkg"
                                    >
                                        <div data-oid="wh3xvy2">
                                            <p
                                                className="text-lg font-bold text-blue-600"
                                                data-oid=".y0sebb"
                                            >
                                                {provider.price}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="sqlz:fw">
                                                السعر
                                            </p>
                                        </div>
                                        <div data-oid="hciuk:x">
                                            <p
                                                className="text-lg font-bold text-green-600"
                                                data-oid="mg0leio"
                                            >
                                                {provider.estimatedTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="8v73-mr">
                                                المدة المتوقعة
                                            </p>
                                        </div>
                                        <div data-oid="w79w5k:">
                                            <p
                                                className="text-lg font-bold text-orange-600"
                                                data-oid="r-aifnc"
                                            >
                                                {provider.responseTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="f_7e_pk">
                                                وقت الاستجابة
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3 space-x-reverse" data-oid="uztvo_b">
                                    <button
                                        onClick={() => handleRequestService(provider)}
                                        className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                        data-oid="edt5tba"
                                    >
                                        طلب الخدمة
                                    </button>
                                    <Link
                                        href={`/chat/${provider.id}`}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="2lupa8a"
                                    >
                                        💬
                                    </Link>
                                    <Link
                                        href={`/provider-profile/${provider.id}`}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="jrdibjb"
                                    >
                                        👁️
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="_pypgi0">
                        <div className="text-6xl mb-4" data-oid="9bxe.ox">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="czw1nm.">
                            لا توجد خدمات متاحة
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="l59w-jw">
                            جرب تغيير المرشحات أو البحث في تصنيف آخر
                        </p>
                        <Link
                            href="/categories"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="1p1ax-w"
                        >
                            تصفح التصنيفات
                        </Link>
                    </div>
                )}
            </div>

            {/* Provider Details Modal */}
            {selectedProvider && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-end z-50"
                    onClick={() => setSelectedProvider(null)}
                    data-oid="_guvdny"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="t:zbxe5"
                    >
                        <div className="p-6" data-oid="ln5xjz3">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                                data-oid="6n-u-1g"
                            ></div>

                            <div className="text-center mb-6" data-oid="revn5nv">
                                <div className="text-4xl mb-3" data-oid="cld4twe">
                                    {selectedProvider.avatar}
                                </div>
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-2"
                                    data-oid="pywr.4:"
                                >
                                    {selectedProvider.name}
                                </h3>
                                <div
                                    className="flex items-center justify-center space-x-2 space-x-reverse mb-4"
                                    data-oid="z892449"
                                >
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="sinp:6r"
                                    >
                                        <span className="text-yellow-500" data-oid="l82eunt">
                                            ⭐
                                        </span>
                                        <span className="font-semibold" data-oid="25he52f">
                                            {selectedProvider.rating}
                                        </span>
                                    </div>
                                    <span className="text-gray-600" data-oid="1hebtii">
                                        ({selectedProvider.completedJobs} خدمة مكتملة)
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm" data-oid="532qdj1">
                                    {selectedProvider.description}
                                </p>
                            </div>

                            <div className="space-y-3" data-oid="9trhd34">
                                <button
                                    onClick={() => handleRequestService(selectedProvider)}
                                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                    data-oid=":a_bmya"
                                >
                                    طلب الخدمة - {selectedProvider.price}
                                </button>
                                <button
                                    onClick={() => setSelectedProvider(null)}
                                    className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                    data-oid="e7bh7.m"
                                >
                                    إغلاق
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="ua27u13"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="6l_tsw1">
                    <div className="flex justify-around" data-oid="-kzt0k6">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=":njcawt"
                        >
                            <span className="text-xl" data-oid="gt_u-bg">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="j6wg0k7">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="64spa_9"
                        >
                            <span className="text-xl" data-oid=":80g_tz">
                                📂
                            </span>
                            <span className="text-xs font-semibold" data-oid="hgwsbfj">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="92k5jdg"
                        >
                            <span className="text-xl" data-oid="uqpjupv">
                                📋
                            </span>
                            <span className="text-xs" data-oid="no_hx4h">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="1l2z_rs"
                        >
                            <span className="text-xl" data-oid="kka2dpx">
                                💰
                            </span>
                            <span className="text-xs" data-oid=".96.3m6">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="4l.nri0"
                        >
                            <span className="text-xl" data-oid="bbfmpgs">
                                💬
                            </span>
                            <span className="text-xs" data-oid="26tdhp1">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="5_og6w0"></div>
        </div>
    );
}
