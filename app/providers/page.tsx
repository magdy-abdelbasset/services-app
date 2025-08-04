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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="dfphqdl">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="vnwlb8m"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="1o5ysbd">
                    <div className="flex items-center justify-between mb-4" data-oid="6r-67i2">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="pev3bpd"
                        >
                            <span className="text-lg" data-oid="vu2stkh">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="tsywgkw">
                            مقدمو الخدمات
                        </h1>
                        <div className="w-10 h-10" data-oid="gh2j6o7"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="9g2bdt0">
                        اكتشف أفضل مقدمي الخدمات في منطقتك
                    </p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="c.d3eb6">
                {/* Search Bar */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid="i6--c0t"
                >
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="f:n.bt6">
                        <span className="text-gray-400" data-oid="sa_k7vf">
                            🔍
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ابحث عن مقدم خدمة أو تخصص..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="6dhfwqo"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid=":g4v:6i"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="kvmtl0m">
                        <h3 className="font-semibold text-gray-800" data-oid="ra5um7a">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="_nmnh5."
                        >
                            <option value="rating" data-oid="yv39bod">
                                التقييم
                            </option>
                            <option value="newest" data-oid="s-drfp-">
                                الأحدث
                            </option>
                            <option value="experience" data-oid="c761ak5">
                                الخبرة
                            </option>
                        </select>
                    </div>

                    <div
                        className="flex space-x-2 space-x-reverse overflow-x-auto"
                        data-oid="3rcy4dx"
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
                                data-oid="f4le2v2"
                            >
                                {filter.label} ({filter.count})
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="e1yf.66">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="ntdw0.z">
                        {filteredProviders.map((provider) => (
                            <Link
                                key={provider.id}
                                href={`/provider-profile/${provider.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="puewwq9"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse"
                                    data-oid="q.nf0pa"
                                >
                                    {/* Avatar */}
                                    <div className="relative" data-oid="zkss7do">
                                        <div className="text-3xl" data-oid="gyxsbuc">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="438bnp6"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Provider Info */}
                                    <div className="flex-1 min-w-0" data-oid="e287kin">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="mw5x5ls"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="na37021"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="yu2w:0b"
                                                >
                                                    {provider.name}
                                                </h3>
                                                {provider.verified && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="z_b9nh0"
                                                    >
                                                        موثق
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-right" data-oid="do-tx7x">
                                                <div
                                                    className="flex items-center space-x-1 space-x-reverse"
                                                    data-oid="xd_k6ag"
                                                >
                                                    <span
                                                        className="text-yellow-500 text-sm"
                                                        data-oid="--qxhj3"
                                                    >
                                                        {getRatingStars(provider.rating)}
                                                    </span>
                                                    <span
                                                        className="text-sm font-semibold"
                                                        data-oid="-g778nj"
                                                    >
                                                        {provider.rating}
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid=":s.d495"
                                                >
                                                    {provider.completedJobs} خدمة
                                                </span>
                                            </div>
                                        </div>

                                        {/* Location and Response Time */}
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="65q1dex"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="gy9.:it"
                                            >
                                                <span data-oid="u0r8uvb">📍</span>
                                                <span className="truncate" data-oid=":fupp6l">
                                                    {provider.location}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="59kf56u"
                                            >
                                                <span data-oid="b1abrnh">⏱️</span>
                                                <span data-oid="l:1_joy">
                                                    {provider.responseTime}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Specialties */}
                                        <div
                                            className="flex flex-wrap gap-1 mb-2"
                                            data-oid="2y.ghuf"
                                        >
                                            {provider.specialties
                                                .slice(0, 2)
                                                .map((specialty, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                                        data-oid="g:f62u."
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            {provider.specialties.length > 2 && (
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="jx4kf5."
                                                >
                                                    +{provider.specialties.length - 2} أخرى
                                                </span>
                                            )}
                                        </div>

                                        {/* Price Range and Status */}
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="bmfuwqq"
                                        >
                                            <span
                                                className="text-sm font-semibold text-green-600"
                                                data-oid="k9cvrjp"
                                            >
                                                {provider.priceRange}
                                            </span>
                                            <span
                                                className={`text-xs ${provider.isOnline ? 'text-green-600' : 'text-gray-500'}`}
                                                data-oid="j6szjr3"
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
                    <div className="text-center py-12" data-oid="ev3qn-w">
                        <div className="text-6xl mb-4" data-oid="lunhv0o">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="ivw:woz">
                            لا توجد نتائج
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="a9vxhvj">
                            جرب تغيير كلمات البحث أو المرشحات
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setFilterBy('all');
                            }}
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold"
                            data-oid="humo9y4"
                        >
                            إعادة تعيين البحث
                        </button>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="ueta49a"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="yy7ublw">
                    <div className="flex justify-around" data-oid="md021oh">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="dfh.nqn"
                        >
                            <span className="text-xl" data-oid="qufh5my">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="-.axyc9">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9-6hhqn"
                        >
                            <span className="text-xl" data-oid="_e:ut2i">
                                📂
                            </span>
                            <span className="text-xs" data-oid="dpzejcq">
                                التصنيفات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="bkzdift"
                        >
                            <span className="text-xl" data-oid="dq-7.-k">
                                👥
                            </span>
                            <span className="text-xs font-semibold" data-oid="pzdl6od">
                                مقدمو الخدمات
                            </span>
                        </button>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="cwndzri"
                        >
                            <span className="text-xl" data-oid="9pdqpwz">
                                📋
                            </span>
                            <span className="text-xs" data-oid="4kndkum">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="tmjela3"
                        >
                            <span className="text-xl" data-oid="zdg--rp">
                                💬
                            </span>
                            <span className="text-xs" data-oid="mcti575">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="bt7_wgk"></div>
        </div>
    );
}
