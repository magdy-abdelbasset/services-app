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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="ch1yzuv">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="e_cx_g."
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="hcc1wf1">
                    <div className="flex items-center justify-between mb-4" data-oid="t2oldz1">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="x_49sck"
                        >
                            <span className="text-lg" data-oid="vq418rn">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="g2b9l1k">
                            مقدمو الخدمات
                        </h1>
                        <div className="w-10 h-10" data-oid="dx9lea-"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="4llutoc">
                        اكتشف أفضل مقدمي الخدمات في منطقتك
                    </p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="scuf5pu">
                {/* Search Bar */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid=":pvia_f"
                >
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="mk__5ra">
                        <span className="text-gray-400" data-oid="0vlxykg">
                            🔍
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ابحث عن مقدم خدمة أو تخصص..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="wr8z1de"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid="x3m8vnf"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="fee9t:0">
                        <h3 className="font-semibold text-gray-800" data-oid="aeg4qeh">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="wsew2xu"
                        >
                            <option value="rating" data-oid="2vhf8ih">
                                التقييم
                            </option>
                            <option value="newest" data-oid="02ktnqs">
                                الأحدث
                            </option>
                            <option value="experience" data-oid="i9knccr">
                                الخبرة
                            </option>
                        </select>
                    </div>

                    <div
                        className="flex space-x-2 space-x-reverse overflow-x-auto"
                        data-oid="brz2e8z"
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
                                data-oid="xkynclx"
                            >
                                {filter.label} ({filter.count})
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="dw0_cm2">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="_es-_5f">
                        {filteredProviders.map((provider) => (
                            <Link
                                key={provider.id}
                                href={`/provider-profile/${provider.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="_pub20w"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse"
                                    data-oid="j-eacz5"
                                >
                                    {/* Avatar */}
                                    <div className="relative" data-oid="is34ff1">
                                        <div className="text-3xl" data-oid="l2.cv9a">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="9.8ay1w"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Provider Info */}
                                    <div className="flex-1 min-w-0" data-oid="fcgbodo">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="v51iczt"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="qfmylaa"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="ttpt3l2"
                                                >
                                                    {provider.name}
                                                </h3>
                                                {provider.verified && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="16p4z-y"
                                                    >
                                                        موثق
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-right" data-oid="nzxew_q">
                                                <div
                                                    className="flex items-center space-x-1 space-x-reverse"
                                                    data-oid="331sse7"
                                                >
                                                    <span
                                                        className="text-yellow-500 text-sm"
                                                        data-oid="_m.3ooi"
                                                    >
                                                        {getRatingStars(provider.rating)}
                                                    </span>
                                                    <span
                                                        className="text-sm font-semibold"
                                                        data-oid="8lg_ebt"
                                                    >
                                                        {provider.rating}
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="h_qhtjo"
                                                >
                                                    {provider.completedJobs} خدمة
                                                </span>
                                            </div>
                                        </div>

                                        {/* Location and Response Time */}
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="9yzq6q4"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="spf71kb"
                                            >
                                                <span data-oid="kgcdb1r">📍</span>
                                                <span className="truncate" data-oid="sm5e:yo">
                                                    {provider.location}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="ujqzw-h"
                                            >
                                                <span data-oid="kelf5oe">⏱️</span>
                                                <span data-oid="vh6hr6d">
                                                    {provider.responseTime}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Specialties */}
                                        <div
                                            className="flex flex-wrap gap-1 mb-2"
                                            data-oid="jkuz.y6"
                                        >
                                            {provider.specialties
                                                .slice(0, 2)
                                                .map((specialty, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                                        data-oid="leykf7b"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            {provider.specialties.length > 2 && (
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="dxvwc:k"
                                                >
                                                    +{provider.specialties.length - 2} أخرى
                                                </span>
                                            )}
                                        </div>

                                        {/* Price Range and Status */}
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid=":1cf7z1"
                                        >
                                            <span
                                                className="text-sm font-semibold text-green-600"
                                                data-oid="eq7j9ja"
                                            >
                                                {provider.priceRange}
                                            </span>
                                            <span
                                                className={`text-xs ${provider.isOnline ? 'text-green-600' : 'text-gray-500'}`}
                                                data-oid="xggovwq"
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
                    <div className="text-center py-12" data-oid=".z49_17">
                        <div className="text-6xl mb-4" data-oid="4azudfu">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="5_qase_">
                            لا توجد نتائج
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="8vnffz1">
                            جرب تغيير كلمات البحث أو المرشحات
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setFilterBy('all');
                            }}
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold"
                            data-oid="uxnjdn7"
                        >
                            إعادة تعيين البحث
                        </button>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="_0xp7:7"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="z:-4p:6">
                    <div className="flex justify-around" data-oid=".56oxt6">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="spoc6cw"
                        >
                            <span className="text-xl" data-oid="240dqwa">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="d.2:z_t">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="798hr:1"
                        >
                            <span className="text-xl" data-oid="6b2g__0">
                                📂
                            </span>
                            <span className="text-xs" data-oid="jf-fdrz">
                                التصنيفات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="rrla6dj"
                        >
                            <span className="text-xl" data-oid="1m-htgh">
                                👥
                            </span>
                            <span className="text-xs font-semibold" data-oid="8h_q21a">
                                مقدمو الخدمات
                            </span>
                        </button>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="qyqvvqe"
                        >
                            <span className="text-xl" data-oid="xk09l6b">
                                📋
                            </span>
                            <span className="text-xs" data-oid="t.y0:s2">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="hja3ect"
                        >
                            <span className="text-xl" data-oid="-c0g70r">
                                💬
                            </span>
                            <span className="text-xs" data-oid="-1jl70i">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="-poefxx"></div>
        </div>
    );
}
