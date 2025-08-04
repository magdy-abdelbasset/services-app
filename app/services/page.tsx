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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="k_38y8q">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="yetgc1o"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="cs7j90m">
                    <div className="flex items-center justify-between mb-4" data-oid="aeaka_p">
                        <Link
                            href="/categories"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="q3dxj42"
                        >
                            <span className="text-lg" data-oid=":_m.o.m">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="__iphdl">
                            <h1 className="text-lg font-bold" data-oid="t3zaile">
                                {getCategoryName()}
                            </h1>
                            {getSubCategoryName() && (
                                <p className="text-sm text-white/90" data-oid="1uhheyf">
                                    {getSubCategoryName()}
                                </p>
                            )}
                        </div>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="nv:jx40"
                        >
                            <span className="text-lg" data-oid="0azjl8z">
                                🔍
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="7:ze23v">
                <div
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4"
                    data-oid="cdf_as8"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="a-c.t4a">
                        <h3 className="font-semibold text-gray-800" data-oid="nlu4u0d">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="udjejep"
                        >
                            <option value="rating" data-oid="u6ru2to">
                                التقييم
                            </option>
                            <option value="price" data-oid="fxsgso7">
                                السعر
                            </option>
                            <option value="distance" data-oid="_qmfa3-">
                                المسافة
                            </option>
                        </select>
                    </div>

                    <div className="flex space-x-2 space-x-reverse" data-oid="3.j:4j-">
                        <button
                            onClick={() => setFilterBy('all')}
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                                filterBy === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="8rl4_-9"
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
                            data-oid="nz-xjg8"
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
                            data-oid="n24c.hm"
                        >
                            متصل (
                            {services.flatMap((s) => s.providers).filter((p) => p.isOnline).length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Service Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="kfyyaki">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="sr7nvnk">
                        {filteredProviders.map((provider) => (
                            <div
                                key={provider.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="dsrj-t."
                            >
                                {/* Provider Info */}
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-4"
                                    data-oid=".3y4nwb"
                                >
                                    <div className="relative" data-oid="9oiiqz0">
                                        <div className="text-3xl" data-oid="cw8zy7f">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="y52:y3k"
                                            ></div>
                                        )}
                                    </div>
                                    <div className="flex-1" data-oid="w6pm3.d">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid="y9gosga"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid="fb4pnu2"
                                            >
                                                {provider.name}
                                            </h4>
                                            {provider.verified && (
                                                <span
                                                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="5jfhdzi"
                                                >
                                                    موثق
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="43oly7g"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="n5j3a.n"
                                            >
                                                <span
                                                    className="text-yellow-500"
                                                    data-oid="c5wtdj."
                                                >
                                                    ⭐
                                                </span>
                                                <span data-oid="t_zs-d3">{provider.rating}</span>
                                            </div>
                                            <span data-oid="37fsfzd">
                                                ({provider.completedJobs} خدمة مكتملة)
                                            </span>
                                            <span data-oid="fah6zkb">📍 {provider.distance}</span>
                                        </div>
                                        <p
                                            className="text-sm text-gray-700 mb-3"
                                            data-oid="pw3y5l7"
                                        >
                                            {provider.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="bg-gray-50 rounded-xl p-3 mb-4" data-oid="s6:zoqz">
                                    <div
                                        className="grid grid-cols-3 gap-4 text-center"
                                        data-oid="ycl6act"
                                    >
                                        <div data-oid="y3atbb-">
                                            <p
                                                className="text-lg font-bold text-blue-600"
                                                data-oid="p7d0rju"
                                            >
                                                {provider.price}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="lfob9rq">
                                                السعر
                                            </p>
                                        </div>
                                        <div data-oid="i5onf22">
                                            <p
                                                className="text-lg font-bold text-green-600"
                                                data-oid="y:hnfq1"
                                            >
                                                {provider.estimatedTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="5fsiiub">
                                                المدة المتوقعة
                                            </p>
                                        </div>
                                        <div data-oid="l7nxpjc">
                                            <p
                                                className="text-lg font-bold text-orange-600"
                                                data-oid="3c1g..f"
                                            >
                                                {provider.responseTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="r7g3:68">
                                                وقت الاستجابة
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3 space-x-reverse" data-oid="mg4jo6k">
                                    <button
                                        onClick={() => handleRequestService(provider)}
                                        className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                        data-oid="mj4ql5p"
                                    >
                                        طلب الخدمة
                                    </button>
                                    <Link
                                        href={`/chat/${provider.id}`}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="wfa4sdc"
                                    >
                                        💬
                                    </Link>
                                    <Link
                                        href={`/provider-profile/${provider.id}`}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid=":in6q_x"
                                    >
                                        👁️
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="d263v8v">
                        <div className="text-6xl mb-4" data-oid="6yw88yu">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="pzyce.c">
                            لا توجد خدمات متاحة
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="_9yzupn">
                            جرب تغيير المرشحات أو البحث في تصنيف آخر
                        </p>
                        <Link
                            href="/categories"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="wkz7ht6"
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
                    data-oid="rsq_:o_"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="5xn1786"
                    >
                        <div className="p-6" data-oid="9h6aq9v">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                                data-oid="1.q.hnp"
                            ></div>

                            <div className="text-center mb-6" data-oid="e0n_5a1">
                                <div className="text-4xl mb-3" data-oid="wahdv1f">
                                    {selectedProvider.avatar}
                                </div>
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-2"
                                    data-oid="x._-ssc"
                                >
                                    {selectedProvider.name}
                                </h3>
                                <div
                                    className="flex items-center justify-center space-x-2 space-x-reverse mb-4"
                                    data-oid="34t7-9h"
                                >
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="st0a.kw"
                                    >
                                        <span className="text-yellow-500" data-oid="0jbldwd">
                                            ⭐
                                        </span>
                                        <span className="font-semibold" data-oid="_ry_dx7">
                                            {selectedProvider.rating}
                                        </span>
                                    </div>
                                    <span className="text-gray-600" data-oid="rf1tjz2">
                                        ({selectedProvider.completedJobs} خدمة مكتملة)
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm" data-oid="0bj-.7.">
                                    {selectedProvider.description}
                                </p>
                            </div>

                            <div className="space-y-3" data-oid="j6ll59v">
                                <button
                                    onClick={() => handleRequestService(selectedProvider)}
                                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                    data-oid="__9bh-d"
                                >
                                    طلب الخدمة - {selectedProvider.price}
                                </button>
                                <button
                                    onClick={() => setSelectedProvider(null)}
                                    className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                    data-oid="is78uvw"
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
                data-oid="_6lt9mk"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="ynpl1q-">
                    <div className="flex justify-around" data-oid="uj-l2xj">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ou-u3c5"
                        >
                            <span className="text-xl" data-oid="pu5epd_">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="hij4e-_">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="cqlhmum"
                        >
                            <span className="text-xl" data-oid="9mfsp2_">
                                📂
                            </span>
                            <span className="text-xs font-semibold" data-oid="w145dj.">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="cnxz5qe"
                        >
                            <span className="text-xl" data-oid="8:xxp5b">
                                📋
                            </span>
                            <span className="text-xs" data-oid="e0qf23m">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="j08euk4"
                        >
                            <span className="text-xl" data-oid="rocgkt3">
                                💰
                            </span>
                            <span className="text-xs" data-oid="rkk8:o3">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=".d9cyy0"
                        >
                            <span className="text-xl" data-oid="4uz.9wk">
                                💬
                            </span>
                            <span className="text-xs" data-oid="-c1d0..">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="j_trqs2"></div>
        </div>
    );
}
