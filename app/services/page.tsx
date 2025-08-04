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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="yp1cppr">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid=":p5y20b"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="iyle4:a">
                    <div className="flex items-center justify-between mb-4" data-oid="ijplutz">
                        <Link
                            href="/categories"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="prhm6rk"
                        >
                            <span className="text-lg" data-oid="ep4nmq3">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="pn-6q3r">
                            <h1 className="text-lg font-bold" data-oid="hpy6r-y">
                                {getCategoryName()}
                            </h1>
                            {getSubCategoryName() && (
                                <p className="text-sm text-white/90" data-oid="_5y8693">
                                    {getSubCategoryName()}
                                </p>
                            )}
                        </div>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="n2lyaxx"
                        >
                            <span className="text-lg" data-oid="gmrjlc3">
                                🔍
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="e.--zf2">
                <div
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4"
                    data-oid="mwqi:f-"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="lri:z9r">
                        <h3 className="font-semibold text-gray-800" data-oid="yg5b7ha">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="c:9uweh"
                        >
                            <option value="rating" data-oid="1c:-5ui">
                                التقييم
                            </option>
                            <option value="price" data-oid="dwvbjhh">
                                السعر
                            </option>
                            <option value="distance" data-oid="v9yuyiq">
                                المسافة
                            </option>
                        </select>
                    </div>

                    <div className="flex space-x-2 space-x-reverse" data-oid="q7jg2.b">
                        <button
                            onClick={() => setFilterBy('all')}
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                                filterBy === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="dvor86u"
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
                            data-oid="y9g0:fs"
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
                            data-oid="xjy3gck"
                        >
                            متصل (
                            {services.flatMap((s) => s.providers).filter((p) => p.isOnline).length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Service Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="tkk.wee">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="vku0sst">
                        {filteredProviders.map((provider) => (
                            <div
                                key={provider.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="_p81mjc"
                            >
                                {/* Provider Info */}
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-4"
                                    data-oid="4b0k.xc"
                                >
                                    <div className="relative" data-oid="sy-3ms8">
                                        <div className="text-3xl" data-oid="-fy2s-9">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="d:bj.ll"
                                            ></div>
                                        )}
                                    </div>
                                    <div className="flex-1" data-oid="t1-n-y-">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="w5kljec"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="2wybrax"
                                            >
                                                {provider.name}
                                            </h4>
                                            {provider.verified && (
                                                <span
                                                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="2zr4kx1"
                                                >
                                                    موثق
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="unionh6"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="y_pm:l1"
                                            >
                                                <span
                                                    className="text-yellow-500"
                                                    data-oid="4.-k:kf"
                                                >
                                                    ⭐
                                                </span>
                                                <span data-oid="kkk48ce">{provider.rating}</span>
                                            </div>
                                            <span data-oid="h:2fo49">
                                                ({provider.completedJobs} خدمة مكتملة)
                                            </span>
                                            <span data-oid="5533kdl">📍 {provider.distance}</span>
                                        </div>
                                        <p
                                            className="text-sm text-gray-700 mb-3"
                                            data-oid="6fdwqh6"
                                        >
                                            {provider.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="bg-gray-50 rounded-xl p-3 mb-4" data-oid=":.aj-lp">
                                    <div
                                        className="grid grid-cols-3 gap-4 text-center"
                                        data-oid="yo9z-5n"
                                    >
                                        <div data-oid="yzm.t_7">
                                            <p
                                                className="text-lg font-bold text-blue-600"
                                                data-oid="6xp8jco"
                                            >
                                                {provider.price}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="-el-u6t">
                                                السعر
                                            </p>
                                        </div>
                                        <div data-oid="e6a.h3u">
                                            <p
                                                className="text-lg font-bold text-green-600"
                                                data-oid="kqtcgc4"
                                            >
                                                {provider.estimatedTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="a46shx5">
                                                المدة المتوقعة
                                            </p>
                                        </div>
                                        <div data-oid="o2bydqy">
                                            <p
                                                className="text-lg font-bold text-orange-600"
                                                data-oid=":ssqsy_"
                                            >
                                                {provider.responseTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="_diykw.">
                                                وقت الاستجابة
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3 space-x-reverse" data-oid="5_06jk:">
                                    <button
                                        onClick={() => handleRequestService(provider)}
                                        className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                        data-oid="7ukk6qu"
                                    >
                                        طلب الخدمة
                                    </button>
                                    <Link
                                        href={`/chat/${provider.id}`}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="3xtc7xr"
                                    >
                                        💬
                                    </Link>
                                    <button
                                        onClick={() => setSelectedProvider(provider)}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl"
                                        data-oid="w17hpi_"
                                    >
                                        👁️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="b0h8pxn">
                        <div className="text-6xl mb-4" data-oid="e.3rm_2">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="lwdlqup">
                            لا توجد خدمات متاحة
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="-c41bx7">
                            جرب تغيير المرشحات أو البحث في تصنيف آخر
                        </p>
                        <Link
                            href="/categories"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="-ds:xx3"
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
                    data-oid="i.vf9:-"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="wi2dezh"
                    >
                        <div className="p-6" data-oid="3wf4fe_">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                                data-oid="n817z:c"
                            ></div>

                            <div className="text-center mb-6" data-oid="gwvq:4p">
                                <div className="text-4xl mb-3" data-oid="zl1xb:5">
                                    {selectedProvider.avatar}
                                </div>
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-2"
                                    data-oid="xpzt:bh"
                                >
                                    {selectedProvider.name}
                                </h3>
                                <div
                                    className="flex items-center justify-center space-x-2 space-x-reverse mb-4"
                                    data-oid="ro:p_ji"
                                >
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="t7:govg"
                                    >
                                        <span className="text-yellow-500" data-oid="l4zcjp:">
                                            ⭐
                                        </span>
                                        <span className="font-semibold" data-oid="3q_3mq2">
                                            {selectedProvider.rating}
                                        </span>
                                    </div>
                                    <span className="text-gray-600" data-oid="kmdjs1_">
                                        ({selectedProvider.completedJobs} خدمة مكتملة)
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm" data-oid="m4fzg0n">
                                    {selectedProvider.description}
                                </p>
                            </div>

                            <div className="space-y-3" data-oid="al2194z">
                                <button
                                    onClick={() => handleRequestService(selectedProvider)}
                                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                    data-oid="5eio26n"
                                >
                                    طلب الخدمة - {selectedProvider.price}
                                </button>
                                <button
                                    onClick={() => setSelectedProvider(null)}
                                    className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                    data-oid=":5zed_e"
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
                data-oid=".cbcwc1"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="0g7ea0-">
                    <div className="flex justify-around" data-oid="n7e-bao">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="mepeszv"
                        >
                            <span className="text-xl" data-oid="z5qpama">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="vr1te88">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="dypojrl"
                        >
                            <span className="text-xl" data-oid="-pz5t2i">
                                📂
                            </span>
                            <span className="text-xs font-semibold" data-oid="w41hbtg">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="2qewhp_"
                        >
                            <span className="text-xl" data-oid="ej7e65l">
                                📋
                            </span>
                            <span className="text-xs" data-oid="fw7kjpb">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="_d:9y_o"
                        >
                            <span className="text-xl" data-oid="jg.gu1j">
                                💰
                            </span>
                            <span className="text-xs" data-oid="t79-cq:">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="8:fh8t1"
                        >
                            <span className="text-xl" data-oid="go1ahll">
                                💬
                            </span>
                            <span className="text-xs" data-oid="o798gsr">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="q4aetlg"></div>
        </div>
    );
}
