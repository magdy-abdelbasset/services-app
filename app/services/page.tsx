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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="wotcqw9">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="s9u55d_"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="n9zzbae">
                    <div className="flex items-center justify-between mb-4" data-oid="bx9m018">
                        <Link
                            href="/categories"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="xnvu6ev"
                        >
                            <span className="text-lg" data-oid="qg85l0r">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="2cgc9jp">
                            <h1 className="text-lg font-bold" data-oid="pkddxa1">
                                {getCategoryName()}
                            </h1>
                            {getSubCategoryName() && (
                                <p className="text-sm text-white/90" data-oid="_0do90:">
                                    {getSubCategoryName()}
                                </p>
                            )}
                        </div>
                        <button
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="mzb9usc"
                        >
                            <span className="text-lg" data-oid="9ae9z1d">
                                🔍
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="f83y0hu">
                <div
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4"
                    data-oid="j.68_r_"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="l_v4wy4">
                        <h3 className="font-semibold text-gray-800" data-oid=":ymctw1">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="hh489l_"
                        >
                            <option value="rating" data-oid="si2epm1">
                                التقييم
                            </option>
                            <option value="price" data-oid="y7n43g-">
                                السعر
                            </option>
                            <option value="distance" data-oid="68cvmkr">
                                المسافة
                            </option>
                        </select>
                    </div>

                    <div className="flex space-x-2 space-x-reverse" data-oid="iuv:vd1">
                        <button
                            onClick={() => setFilterBy('all')}
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                                filterBy === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="zr1-d-q"
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
                            data-oid="66f8pt0"
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
                            data-oid="abl7x2m"
                        >
                            متصل (
                            {services.flatMap((s) => s.providers).filter((p) => p.isOnline).length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Service Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="5yxv-n_">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="_.7z780">
                        {filteredProviders.map((provider) => (
                            <div
                                key={provider.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="pb4u30a"
                            >
                                {/* Provider Info */}
                                <div
                                    className="flex items-start space-x-3 space-x-reverse mb-4"
                                    data-oid="i1fx_.i"
                                >
                                    <div className="relative" data-oid="3p:v.kh">
                                        <div className="text-3xl" data-oid="rbo.0.g">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="14pcyl3"
                                            ></div>
                                        )}
                                    </div>
                                    <div className="flex-1" data-oid="7ubveyp">
                                        <div
                                            className="flex items-center space-x-2 space-x-reverse mb-1"
                                            data-oid=".s51u0n"
                                        >
                                            <h4
                                                className="font-semibold text-gray-800"
                                                data-oid=".5o19tb"
                                            >
                                                {provider.name}
                                            </h4>
                                            {provider.verified && (
                                                <span
                                                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                    data-oid="ehfm:in"
                                                >
                                                    موثق
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="zjsrrvi"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid=":o3bi6t"
                                            >
                                                <span
                                                    className="text-yellow-500"
                                                    data-oid="p4i6tlp"
                                                >
                                                    ⭐
                                                </span>
                                                <span data-oid="wpl9q0m">{provider.rating}</span>
                                            </div>
                                            <span data-oid="o.xdtqg">
                                                ({provider.completedJobs} خدمة مكتملة)
                                            </span>
                                            <span data-oid="j2ecm1k">📍 {provider.distance}</span>
                                        </div>
                                        <p
                                            className="text-sm text-gray-700 mb-3"
                                            data-oid="114li93"
                                        >
                                            {provider.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="bg-gray-50 rounded-xl p-3 mb-4" data-oid="rpx4vte">
                                    <div
                                        className="grid grid-cols-3 gap-4 text-center"
                                        data-oid="wo30eao"
                                    >
                                        <div data-oid="o3:11w_">
                                            <p
                                                className="text-lg font-bold text-blue-600"
                                                data-oid="fq4_edl"
                                            >
                                                {provider.price}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="8:8bi30">
                                                السعر
                                            </p>
                                        </div>
                                        <div data-oid="ib.6wqx">
                                            <p
                                                className="text-lg font-bold text-green-600"
                                                data-oid="m883:p3"
                                            >
                                                {provider.estimatedTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="3vvy0xm">
                                                المدة المتوقعة
                                            </p>
                                        </div>
                                        <div data-oid="zs.vhvv">
                                            <p
                                                className="text-lg font-bold text-orange-600"
                                                data-oid="jowjhvp"
                                            >
                                                {provider.responseTime}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="mv7_ed9">
                                                وقت الاستجابة
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3 space-x-reverse" data-oid="bv10oxk">
                                    <button
                                        onClick={() => handleRequestService(provider)}
                                        className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                        data-oid=":v9u71t"
                                    >
                                        طلب الخدمة
                                    </button>
                                    <Link
                                        href={`/chat/${provider.id}`}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="vlm:4c1"
                                    >
                                        💬
                                    </Link>
                                    <Link
                                        href={`/provider-profile/${provider.id}`}
                                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center"
                                        data-oid="qn5pd4k"
                                    >
                                        👁️
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="_l0z0c7">
                        <div className="text-6xl mb-4" data-oid="qlnus54">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="_fxywuh">
                            لا توجد خدمات متاحة
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="0mbdzx3">
                            جرب تغيير المرشحات أو البحث في تصنيف آخر
                        </p>
                        <Link
                            href="/categories"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold inline-block"
                            data-oid="k6hd9ek"
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
                    data-oid="l_hf:7a"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="b_l81ec"
                    >
                        <div className="p-6" data-oid="a7amr0v">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                                data-oid="6x690q-"
                            ></div>

                            <div className="text-center mb-6" data-oid="_565.kz">
                                <div className="text-4xl mb-3" data-oid="ar6gsm7">
                                    {selectedProvider.avatar}
                                </div>
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-2"
                                    data-oid="aywguck"
                                >
                                    {selectedProvider.name}
                                </h3>
                                <div
                                    className="flex items-center justify-center space-x-2 space-x-reverse mb-4"
                                    data-oid="85q5h0s"
                                >
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="9_oqibe"
                                    >
                                        <span className="text-yellow-500" data-oid="xmqf27m">
                                            ⭐
                                        </span>
                                        <span className="font-semibold" data-oid="aa725ag">
                                            {selectedProvider.rating}
                                        </span>
                                    </div>
                                    <span className="text-gray-600" data-oid="4gi7i1n">
                                        ({selectedProvider.completedJobs} خدمة مكتملة)
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm" data-oid="bb-ic_q">
                                    {selectedProvider.description}
                                </p>
                            </div>

                            <div className="space-y-3" data-oid="s6r.54b">
                                <button
                                    onClick={() => handleRequestService(selectedProvider)}
                                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
                                    data-oid="c2_pvo0"
                                >
                                    طلب الخدمة - {selectedProvider.price}
                                </button>
                                <button
                                    onClick={() => setSelectedProvider(null)}
                                    className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold"
                                    data-oid="kstt-kh"
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
                data-oid="nxcc4zx"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="3-21rik">
                    <div className="flex justify-around" data-oid="i3h9-ha">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="8q-ps_p"
                        >
                            <span className="text-xl" data-oid="0h.fnow">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="ra912bh">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="d.dd14p"
                        >
                            <span className="text-xl" data-oid="j1bsf75">
                                📂
                            </span>
                            <span className="text-xs font-semibold" data-oid="4:s3ide">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ra1qht4"
                        >
                            <span className="text-xl" data-oid="y:45lsz">
                                📋
                            </span>
                            <span className="text-xs" data-oid="_gf5v78">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=":47:sys"
                        >
                            <span className="text-xl" data-oid="d.oq44w">
                                💰
                            </span>
                            <span className="text-xs" data-oid="n0jifch">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="aa0icln"
                        >
                            <span className="text-xl" data-oid="xmia18x">
                                💬
                            </span>
                            <span className="text-xs" data-oid="om-i7a5">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="sul1rjb"></div>
        </div>
    );
}
