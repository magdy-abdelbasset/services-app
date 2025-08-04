'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ServiceProvider {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    completedJobs: number;
    verified: boolean;
    isOnline: boolean;
    responseTime: string;
    location: string;
    specialties: string[];
    joinDate: string;
    priceRange: string;
}

export default function ProvidersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterBy, setFilterBy] = useState<'all' | 'verified' | 'online' | 'top_rated'>('all');
    const [sortBy, setSortBy] = useState<'rating' | 'newest' | 'experience'>('rating');

    const providers: ServiceProvider[] = [
        {
            id: 1,
            name: 'أحمد علي محمد',
            avatar: '👨‍💼',
            rating: 4.9,
            completedJobs: 156,
            verified: true,
            isOnline: true,
            responseTime: '5 دقائق',
            location: 'الرياض، حي النرجس',
            specialties: ['تنظيف المنازل', 'تنظيف المكاتب'],
            joinDate: '2022-03-15',
            priceRange: '25-50 ريال',
        },
        {
            id: 2,
            name: 'فاطمة محمد أحمد',
            avatar: '👩‍💼',
            rating: 4.8,
            completedJobs: 203,
            verified: true,
            isOnline: true,
            responseTime: '3 دقائق',
            location: 'الرياض، حي العليا',
            specialties: ['تنظيف عميق', 'تنظيف السجاد'],
            joinDate: '2021-11-20',
            priceRange: '30-60 ريال',
        },
        {
            id: 3,
            name: 'محمد حسن علي',
            avatar: '👨‍🔧',
            rating: 4.7,
            completedJobs: 89,
            verified: false,
            isOnline: false,
            responseTime: '10 دقائق',
            location: 'الرياض، حي الملز',
            specialties: ['صيانة السباكة', 'صيانة الكهرباء'],
            joinDate: '2023-01-10',
            priceRange: '40-80 ريال',
        },
        {
            id: 4,
            name: 'سارة أحمد خالد',
            avatar: '👩‍🎨',
            rating: 4.6,
            completedJobs: 124,
            verified: true,
            isOnline: true,
            responseTime: '7 دقائق',
            location: 'الرياض، حي الورود',
            specialties: ['خدمات التجميل', 'العناية بالبشرة'],
            joinDate: '2022-08-05',
            priceRange: '50-100 ريال',
        },
        {
            id: 5,
            name: 'عبدالله محمد سالم',
            avatar: '👨‍🌾',
            rating: 4.5,
            completedJobs: 67,
            verified: true,
            isOnline: false,
            responseTime: '15 دقيقة',
            location: 'الرياض، حي الياسمين',
            specialties: ['البستنة', 'تنسيق الحدائق'],
            joinDate: '2023-05-12',
            priceRange: '35-70 ريال',
        },
    ];

    const filteredProviders = providers
        .filter((provider) => {
            const matchesSearch =
                provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                provider.specialties.some((specialty) =>
                    specialty.toLowerCase().includes(searchQuery.toLowerCase()),
                );

            if (!matchesSearch) return false;

            switch (filterBy) {
                case 'verified':
                    return provider.verified;
                case 'online':
                    return provider.isOnline;
                case 'top_rated':
                    return provider.rating >= 4.7;
                default:
                    return true;
            }
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'newest':
                    return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
                case 'experience':
                    return b.completedJobs - a.completedJobs;
                default:
                    return 0;
            }
        });

    const getRatingStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        for (let i = 0; i < fullStars; i++) {
            stars.push('⭐');
        }
        return stars.join('');
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="0wec-2-">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="kxj7snp"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="qlh-llh">
                    <div className="flex items-center justify-between mb-4" data-oid="85wqd9c">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="n9fw0u7"
                        >
                            <span className="text-lg" data-oid="oj_8cy6">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="r2fcr_m">
                            مقدمو الخدمات
                        </h1>
                        <div className="w-10 h-10" data-oid="3n2zb:6"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="fj--:jq">
                        اكتشف أفضل مقدمي الخدمات في منطقتك
                    </p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="vk0o0fs">
                {/* Search Bar */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid="q2iyjrc"
                >
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="0ctzjea">
                        <span className="text-gray-400" data-oid="-0-5v-b">
                            🔍
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ابحث عن مقدم خدمة أو تخصص..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="kel40yw"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid="m-cc6ob"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="88.puyd">
                        <h3 className="font-semibold text-gray-800" data-oid="sl62wj9">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="two-ypk"
                        >
                            <option value="rating" data-oid="2qanr_v">
                                التقييم
                            </option>
                            <option value="newest" data-oid="m7womb6">
                                الأحدث
                            </option>
                            <option value="experience" data-oid="beec__3">
                                الخبرة
                            </option>
                        </select>
                    </div>

                    <div
                        className="flex space-x-2 space-x-reverse overflow-x-auto"
                        data-oid="owzb1_5"
                    >
                        {[
                            { key: 'all', label: 'الكل', count: providers.length },
                            {
                                key: 'verified',
                                label: 'موثق',
                                count: providers.filter((p) => p.verified).length,
                            },
                            {
                                key: 'online',
                                label: 'متصل',
                                count: providers.filter((p) => p.isOnline).length,
                            },
                            {
                                key: 'top_rated',
                                label: 'الأعلى تقييماً',
                                count: providers.filter((p) => p.rating >= 4.7).length,
                            },
                        ].map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setFilterBy(filter.key as any)}
                                className={`px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap ${
                                    filterBy === filter.key
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-700'
                                }`}
                                data-oid="mu62by6"
                            >
                                {filter.label} ({filter.count})
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="h7uicd7">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="prkjkwc">
                        {filteredProviders.map((provider) => (
                            <Link
                                key={provider.id}
                                href={`/provider-profile/${provider.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="emj.rm7"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse"
                                    data-oid="oiel-0d"
                                >
                                    {/* Avatar */}
                                    <div className="relative" data-oid="5tq:7vz">
                                        <div className="text-3xl" data-oid="u-.drp0">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="ih14ed7"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Provider Info */}
                                    <div className="flex-1 min-w-0" data-oid="9hvit_i">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="c.73t5u"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="8dv68-9"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="w1f9jdc"
                                                >
                                                    {provider.name}
                                                </h3>
                                                {provider.verified && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="0n:hoff"
                                                    >
                                                        موثق
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-right" data-oid="segg1x5">
                                                <div
                                                    className="flex items-center space-x-1 space-x-reverse"
                                                    data-oid="x7rdbmd"
                                                >
                                                    <span
                                                        className="text-yellow-500 text-sm"
                                                        data-oid="tulnwty"
                                                    >
                                                        {getRatingStars(provider.rating)}
                                                    </span>
                                                    <span
                                                        className="text-sm font-semibold"
                                                        data-oid="1rj82wi"
                                                    >
                                                        {provider.rating}
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="ij5a4-j"
                                                >
                                                    {provider.completedJobs} خدمة
                                                </span>
                                            </div>
                                        </div>

                                        {/* Location and Response Time */}
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="_sc9a_t"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="6wd.oox"
                                            >
                                                <span data-oid="vszy8zi">📍</span>
                                                <span className="truncate" data-oid="g48p:o7">
                                                    {provider.location}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="qgg3rzp"
                                            >
                                                <span data-oid="kvd1fx5">⏱️</span>
                                                <span data-oid="q1dlzey">
                                                    {provider.responseTime}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Specialties */}
                                        <div
                                            className="flex flex-wrap gap-1 mb-2"
                                            data-oid="e484g75"
                                        >
                                            {provider.specialties
                                                .slice(0, 2)
                                                .map((specialty, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                                        data-oid="o0gv0sd"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            {provider.specialties.length > 2 && (
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="k2eec78"
                                                >
                                                    +{provider.specialties.length - 2} أخرى
                                                </span>
                                            )}
                                        </div>

                                        {/* Price Range and Status */}
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="7:4pkic"
                                        >
                                            <span
                                                className="text-sm font-semibold text-green-600"
                                                data-oid="2brmru-"
                                            >
                                                {provider.priceRange}
                                            </span>
                                            <span
                                                className={`text-xs ${provider.isOnline ? 'text-green-600' : 'text-gray-500'}`}
                                                data-oid="kqb2ugk"
                                            >
                                                {provider.isOnline ? 'متصل الآن' : 'غير متصل'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12" data-oid="-zuq6._">
                        <div className="text-6xl mb-4" data-oid="-:hrh08">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="kqjyuhw">
                            لا توجد نتائج
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="aar1xx-">
                            جرب تغيير كلمات البحث أو المرشحات
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setFilterBy('all');
                            }}
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold"
                            data-oid="4ad0j6q"
                        >
                            إعادة تعيين البحث
                        </button>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="xf6j5tm"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="nsbid.k">
                    <div className="flex justify-around" data-oid=":1m7e5j">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="b58og8h"
                        >
                            <span className="text-xl" data-oid="t-:0i.2">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="uc09n1:">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="lwj8_4v"
                        >
                            <span className="text-xl" data-oid="d9c0ztf">
                                📂
                            </span>
                            <span className="text-xs" data-oid="bv27r-9">
                                التصنيفات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="d19_xe:"
                        >
                            <span className="text-xl" data-oid="b9dr9-l">
                                👥
                            </span>
                            <span className="text-xs font-semibold" data-oid="p7m0f7z">
                                مقدمو الخدمات
                            </span>
                        </button>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="pm87pee"
                        >
                            <span className="text-xl" data-oid="wezm2p0">
                                📋
                            </span>
                            <span className="text-xs" data-oid="oxzg.py">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="u-9otu5"
                        >
                            <span className="text-xl" data-oid="l48_dw4">
                                💬
                            </span>
                            <span className="text-xs" data-oid="v6h.v.3">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="ei6f_8s"></div>
        </div>
    );
}
