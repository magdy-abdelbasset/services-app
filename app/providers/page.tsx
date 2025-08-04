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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="zokkcxr">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="cfcpya9"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="4e_z4uk">
                    <div className="flex items-center justify-between mb-4" data-oid="pk6ogeb">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="m:ya:--"
                        >
                            <span className="text-lg" data-oid="1nu605c">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid=".voskh0">
                            مقدمو الخدمات
                        </h1>
                        <div className="w-10 h-10" data-oid="xg3hfl3"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="sfxz9mv">
                        اكتشف أفضل مقدمي الخدمات في منطقتك
                    </p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-sm mx-auto px-4 py-4" data-oid="7fhdc2t">
                {/* Search Bar */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid="1i8u27k"
                >
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="3v9csp-">
                        <span className="text-gray-400" data-oid="vxkohrl">
                            🔍
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ابحث عن مقدم خدمة أو تخصص..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="-iazcyi"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4"
                    data-oid="zw9y21g"
                >
                    <div className="flex items-center justify-between mb-3" data-oid="u6njzpo">
                        <h3 className="font-semibold text-gray-800" data-oid="unn1e2.">
                            ترتيب حسب:
                        </h3>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-gray-100 rounded-lg px-3 py-1 text-sm outline-none"
                            data-oid="qejwvzw"
                        >
                            <option value="rating" data-oid="nlkufhj">
                                التقييم
                            </option>
                            <option value="newest" data-oid="00wc25.">
                                الأحدث
                            </option>
                            <option value="experience" data-oid="um:vb27">
                                الخبرة
                            </option>
                        </select>
                    </div>

                    <div
                        className="flex space-x-2 space-x-reverse overflow-x-auto"
                        data-oid="eaxea8i"
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
                                data-oid="rslama7"
                            >
                                {filter.label} ({filter.count})
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Providers List */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="9:3tg3i">
                {filteredProviders.length > 0 ? (
                    <div className="space-y-4" data-oid="0oocfcy">
                        {filteredProviders.map((provider) => (
                            <Link
                                key={provider.id}
                                href={`/provider-profile/${provider.id}`}
                                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                data-oid="c7k1:zx"
                            >
                                <div
                                    className="flex items-start space-x-3 space-x-reverse"
                                    data-oid="ykkf_sz"
                                >
                                    {/* Avatar */}
                                    <div className="relative" data-oid=":8u9-4i">
                                        <div className="text-3xl" data-oid=".gv2lk2">
                                            {provider.avatar}
                                        </div>
                                        {provider.isOnline && (
                                            <div
                                                className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                                data-oid="1vbkmzi"
                                            ></div>
                                        )}
                                    </div>

                                    {/* Provider Info */}
                                    <div className="flex-1 min-w-0" data-oid="lm981gd">
                                        <div
                                            className="flex items-center justify-between mb-1"
                                            data-oid="6c8.hb:"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="-p0_48q"
                                            >
                                                <h3
                                                    className="font-semibold text-gray-800 truncate"
                                                    data-oid="q:t0yry"
                                                >
                                                    {provider.name}
                                                </h3>
                                                {provider.verified && (
                                                    <span
                                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                                        data-oid="wycuc:n"
                                                    >
                                                        موثق
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-right" data-oid="1cqah2o">
                                                <div
                                                    className="flex items-center space-x-1 space-x-reverse"
                                                    data-oid="0u-q2nk"
                                                >
                                                    <span
                                                        className="text-yellow-500 text-sm"
                                                        data-oid="a5g3-.y"
                                                    >
                                                        {getRatingStars(provider.rating)}
                                                    </span>
                                                    <span
                                                        className="text-sm font-semibold"
                                                        data-oid="34-3r_a"
                                                    >
                                                        {provider.rating}
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="evb2qk0"
                                                >
                                                    {provider.completedJobs} خدمة
                                                </span>
                                            </div>
                                        </div>

                                        {/* Location and Response Time */}
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600 mb-2"
                                            data-oid="9e7:1h3"
                                        >
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="w32jdib"
                                            >
                                                <span data-oid="wtw_9vb">📍</span>
                                                <span className="truncate" data-oid="gez01i7">
                                                    {provider.location}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-1 space-x-reverse"
                                                data-oid="n0g3m41"
                                            >
                                                <span data-oid="f:8yn2_">⏱️</span>
                                                <span data-oid="2gtli3b">
                                                    {provider.responseTime}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Specialties */}
                                        <div
                                            className="flex flex-wrap gap-1 mb-2"
                                            data-oid="b1b00mw"
                                        >
                                            {provider.specialties
                                                .slice(0, 2)
                                                .map((specialty, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                                        data-oid="9m4s:t9"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            {provider.specialties.length > 2 && (
                                                <span
                                                    className="text-xs text-gray-500"
                                                    data-oid="965bvbt"
                                                >
                                                    +{provider.specialties.length - 2} أخرى
                                                </span>
                                            )}
                                        </div>

                                        {/* Price Range and Status */}
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="ndff.p5"
                                        >
                                            <span
                                                className="text-sm font-semibold text-green-600"
                                                data-oid="jxjp6gn"
                                            >
                                                {provider.priceRange}
                                            </span>
                                            <span
                                                className={`text-xs ${provider.isOnline ? 'text-green-600' : 'text-gray-500'}`}
                                                data-oid="4y7d5nz"
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
                    <div className="text-center py-12" data-oid="q_yd3d.">
                        <div className="text-6xl mb-4" data-oid="29sztjt">
                            🔍
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2" data-oid="32jpl22">
                            لا توجد نتائج
                        </h3>
                        <p className="text-gray-600 text-sm mb-6" data-oid="i525:yf">
                            جرب تغيير كلمات البحث أو المرشحات
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setFilterBy('all');
                            }}
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold"
                            data-oid="kfo4wk1"
                        >
                            إعادة تعيين البحث
                        </button>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="m0aa51y"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="llz_uzz">
                    <div className="flex justify-around" data-oid="fnd8mcc">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="r:3-t:r"
                        >
                            <span className="text-xl" data-oid="3bt04dn">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="b7v:1:i">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="pg:a:3c"
                        >
                            <span className="text-xl" data-oid="ox_o07p">
                                📂
                            </span>
                            <span className="text-xs" data-oid=".uau570">
                                التصنيفات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="qlwwshm"
                        >
                            <span className="text-xl" data-oid=".o8a-wc">
                                👥
                            </span>
                            <span className="text-xs font-semibold" data-oid="rqc-:3.">
                                مقدمو الخدمات
                            </span>
                        </button>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="pwot.-m"
                        >
                            <span className="text-xl" data-oid="-bt34rg">
                                📋
                            </span>
                            <span className="text-xs" data-oid="obn.cc0">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=":2-olbr"
                        >
                            <span className="text-xl" data-oid="3mg2-5l">
                                💬
                            </span>
                            <span className="text-xs" data-oid="cf1t:4n">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="b452x1_"></div>
        </div>
    );
}
