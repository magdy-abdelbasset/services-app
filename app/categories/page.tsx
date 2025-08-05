'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SubCategory {
    id: number;
    name: string;
    icon: string;
    servicesCount: number;
}

interface Category {
    id: number;
    name: string;
    icon: string;
    color: string;
    description: string;
    subCategories: SubCategory[];
}

export default function CategoriesPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const categories: Category[] = [
        {
            id: 1,
            name: 'خدمات المنزل',
            icon: '🏠',
            color: 'bg-blue-500',
            description: 'جميع خدمات التنظيف والصيانة المنزلية',
            subCategories: [
                { id: 11, name: 'تنظيف عام', icon: '🧹', servicesCount: 45 },
                { id: 12, name: 'تنظيف السجاد', icon: '🪑', servicesCount: 23 },
                { id: 13, name: 'تنظيف النوافذ', icon: '🪟', servicesCount: 18 },
                { id: 14, name: 'تنظيف المطبخ', icon: '🍳', servicesCount: 32 },
                { id: 15, name: 'تنظيف الحمامات', icon: '🚿', servicesCount: 28 },
                { id: 16, name: 'تنظيف الأثاث', icon: '🛋️', servicesCount: 15 },
            ],
        },
        {
            id: 2,
            name: 'الصيانة والإصلاح',
            icon: '🔧',
            color: 'bg-orange-500',
            description: 'خدمات الصيانة وإصلاح الأعطال',
            subCategories: [
                { id: 21, name: 'صيانة السباكة', icon: '🚰', servicesCount: 38 },
                { id: 22, name: 'صيانة الكهرباء', icon: '⚡', servicesCount: 42 },
                { id: 23, name: 'صيانة التكييف', icon: '❄️', servicesCount: 25 },
                { id: 24, name: 'صيانة الأجهزة', icon: '📱', servicesCount: 31 },
                { id: 25, name: 'أعمال الدهان', icon: '🎨', servicesCount: 19 },
                { id: 26, name: 'أعمال النجارة', icon: '🪚', servicesCount: 22 },
            ],
        },
        {
            id: 3,
            name: 'التوصيل والنقل',
            icon: '🚚',
            color: 'bg-green-500',
            description: 'خدمات التوصيل والنقل والشحن',
            subCategories: [
                { id: 31, name: 'توصيل الطعام', icon: '🍕', servicesCount: 67 },
                { id: 32, name: 'توصيل البقالة', icon: '🛒', servicesCount: 34 },
                { id: 33, name: 'نقل الأثاث', icon: '📦', servicesCount: 28 },
                { id: 34, name: 'توصيل الأدوية', icon: '💊', servicesCount: 15 },
                { id: 35, name: 'توصيل الوثائق', icon: '📄', servicesCount: 12 },
                { id: 36, name: 'خدمات الشحن', icon: '📮', servicesCount: 21 },
            ],
        },
        {
            id: 4,
            name: 'الجمال والعناية',
            icon: '💄',
            color: 'bg-pink-500',
            description: 'خدمات التجميل والعناية الشخصية',
            subCategories: [
                { id: 41, name: 'قص الشعر', icon: '✂️', servicesCount: 29 },
                { id: 42, name: 'العناية بالبشرة', icon: '🧴', servicesCount: 24 },
                { id: 43, name: 'المكياج', icon: '💋', servicesCount: 18 },
                { id: 44, name: 'العناية بالأظافر', icon: '💅', servicesCount: 16 },
                { id: 45, name: 'التدليك', icon: '🤲', servicesCount: 13 },
                { id: 46, name: 'إزالة الشعر', icon: '🪒', servicesCount: 11 },
            ],
        },
        {
            id: 5,
            name: 'البستنة والحدائق',
            icon: '🌱',
            color: 'bg-emerald-500',
            description: 'خدمات العناية بالحدائق والنباتات',
            subCategories: [
                { id: 51, name: 'تنسيق الحدائق', icon: '🌺', servicesCount: 22 },
                { id: 52, name: 'قص الأشجار', icon: '🌳', servicesCount: 18 },
                { id: 53, name: 'زراعة النباتات', icon: '🪴', servicesCount: 15 },
                { id: 54, name: 'ري الحدائق', icon: '💧', servicesCount: 12 },
                { id: 55, name: 'تنظيف الحدائق', icon: '🍃', servicesCount: 14 },
                { id: 56, name: 'مكافحة الآفات', icon: '🐛', servicesCount: 9 },
            ],
        },
        {
            id: 6,
            name: 'التعليم والتدريب',
            icon: '📚',
            color: 'bg-purple-500',
            description: 'خدمات التعليم والدروس الخصوصية',
            subCategories: [
                { id: 61, name: 'دروس اللغات', icon: '🗣️', servicesCount: 35 },
                { id: 62, name: 'دروس الرياضيات', icon: '🔢', servicesCount: 28 },
                { id: 63, name: 'دروس العلوم', icon: '🔬', servicesCount: 24 },
                { id: 64, name: 'دروس الموسيقى', icon: '🎵', servicesCount: 16 },
                { id: 65, name: 'دروس الرسم', icon: '🎨', servicesCount: 12 },
                { id: 66, name: 'دروس الكمبيوتر', icon: '💻', servicesCount: 19 },
            ],
        },
        {
            id: 7,
            name: 'الرياضة واللياقة',
            icon: '💪',
            color: 'bg-red-500',
            description: 'خدمات التدريب الرياضي واللياقة البدنية',
            subCategories: [
                { id: 71, name: 'تدريب شخصي', icon: '🏋️', servicesCount: 26 },
                { id: 72, name: 'يوغا وتأمل', icon: '🧘', servicesCount: 18 },
                { id: 73, name: 'تدريب جماعي', icon: '👥', servicesCount: 15 },
                { id: 74, name: 'تدريب السباحة', icon: '🏊', servicesCount: 12 },
                { id: 75, name: 'تدريب الدفاع عن النفس', icon: '🥋', servicesCount: 8 },
                { id: 76, name: 'تدريب كرة القدم', icon: '⚽', servicesCount: 14 },
            ],
        },
        {
            id: 8,
            name: 'التكنولوجيا والدعم الفني',
            icon: '💻',
            color: 'bg-indigo-500',
            description: 'خدمات الدعم التقني وإصلاح الأجهزة',
            subCategories: [
                { id: 81, name: 'إصلاح الهواتف', icon: '📱', servicesCount: 42 },
                { id: 82, name: 'إصلاح الحاسوب', icon: '🖥️', servicesCount: 38 },
                { id: 83, name: 'تركيب البرامج', icon: '💿', servicesCount: 25 },
                { id: 84, name: 'استرداد البيانات', icon: '💾', servicesCount: 16 },
                { id: 85, name: 'تصميم المواقع', icon: '🌐', servicesCount: 22 },
                { id: 86, name: 'الدعم التقني', icon: '🛠️', servicesCount: 31 },
            ],
        },
    ];

    const filteredCategories = categories.filter(
        (category) =>
            category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.subCategories.some((sub) =>
                sub.name.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
    );

    const handleSubCategoryClick = (category: Category, subCategory: SubCategory) => {
        // Navigate to services page with category and subcategory filters
        window.location.href = `/services?category=${category.id}&subcategory=${subCategory.id}`;
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="0wuaub8">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="8bcyryc"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="z1m_xis">
                    <div className="flex items-center justify-between mb-4" data-oid="xgzc096">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="-yxgvif"
                        >
                            <span className="text-lg" data-oid="__2-uo4">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="x3b9uk0">
                            تصنيفات الخدمات
                        </h1>
                        <div className="w-10 h-10" data-oid="hqykzm_"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="3exk1.6">
                        اختر التصنيف المناسب لإيجاد الخدمة التي تحتاجها
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid=".7:k6g6">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="eizqvmw">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="bjtjhz0">
                        <span className="text-gray-400" data-oid="bw.pro-">
                            🔍
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ابحث في التصنيفات..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="c7:1b5h"
                        />
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="5rua.i7">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="iwjs8c5">
                    {filteredCategories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => setSelectedCategory(category)}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid=":4q_t0z"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid="a--33uc"
                            >
                                <span className="text-2xl" data-oid="alqjnn.">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center mb-1"
                                data-oid="9enj36m"
                            >
                                {category.name}
                            </h3>
                            <p className="text-xs text-gray-500 text-center" data-oid="yv5jvh1">
                                {category.subCategories.length} تصنيف فرعي
                            </p>
                        </div>
                    ))}
                </div>

                {/* Popular Categories */}
                <div className="mb-6" data-oid="8e55x4l">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid="fshm31d">
                        التصنيفات الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid=".j3vs1p">
                        {categories.slice(0, 4).map((category) => (
                            <div
                                key={category.id}
                                onClick={() => setSelectedCategory(category)}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse cursor-pointer hover:shadow-md transition-shadow"
                                data-oid="krtqt3y"
                            >
                                <div
                                    className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center`}
                                    data-oid=":cuv6.a"
                                >
                                    <span className="text-lg" data-oid="2t.:r6g">
                                        {category.icon}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="5_qtfi:">
                                    <h4
                                        className="font-semibold text-gray-800 text-sm"
                                        data-oid="0we8ol."
                                    >
                                        {category.name}
                                    </h4>
                                    <p className="text-xs text-gray-500" data-oid="zze_434">
                                        {category.description}
                                    </p>
                                </div>
                                <div className="text-xs text-gray-400" data-oid="07n.a1j">
                                    {category.subCategories.reduce(
                                        (sum, sub) => sum + sub.servicesCount,
                                        0,
                                    )}{' '}
                                    خدمة
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Category Details Modal */}
            {selectedCategory && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-end z-50"
                    onClick={() => setSelectedCategory(null)}
                    data-oid="1i019w_"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="tpptuf5"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="f5zqzn_">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="0mh4k63"
                            ></div>
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid="ko7_8-3"
                            >
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="uax1ro6"
                                >
                                    <div
                                        className={`w-12 h-12 ${selectedCategory.color} rounded-2xl flex items-center justify-center`}
                                        data-oid="2exjplx"
                                    >
                                        <span className="text-2xl" data-oid="4bpntu5">
                                            {selectedCategory.icon}
                                        </span>
                                    </div>
                                    <div data-oid="_pcv3-1">
                                        <h3
                                            className="text-xl font-bold text-gray-800"
                                            data-oid="wjxjx.3"
                                        >
                                            {selectedCategory.name}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="1z-x:.4">
                                            {selectedCategory.description}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="jyweqma"
                                >
                                    <span className="text-gray-600" data-oid="wmiaciy">
                                        ✕
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Subcategories List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-200px)] p-4"
                            data-oid="na662t-"
                        >
                            <div className="space-y-3" data-oid="zscrqi.">
                                {selectedCategory.subCategories.map((subCategory) => (
                                    <div
                                        key={subCategory.id}
                                        onClick={() =>
                                            handleSubCategoryClick(selectedCategory, subCategory)
                                        }
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
                                        data-oid="vyp.7ly"
                                    >
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse"
                                            data-oid="x33d9g2"
                                        >
                                            <div className="text-2xl" data-oid="qyl-ly9">
                                                {subCategory.icon}
                                            </div>
                                            <div className="flex-1" data-oid="lc_r1yg">
                                                <h4
                                                    className="font-semibold text-gray-800"
                                                    data-oid="b_-_8ux"
                                                >
                                                    {subCategory.name}
                                                </h4>
                                                <p
                                                    className="text-sm text-gray-600"
                                                    data-oid="cj2ey4j"
                                                >
                                                    {subCategory.servicesCount} مقدم خدمة متاح
                                                </p>
                                            </div>
                                            <div className="text-gray-400" data-oid="ru:dx6r">
                                                <span data-oid="wu63y.k">←</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="a7ls-8n"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="omnti2z">
                    <div className="flex justify-around" data-oid="wacq-2n">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ayu-ngi"
                        >
                            <span className="text-xl" data-oid="f4kds4e">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="te:4p4l">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="u4qb4_w"
                        >
                            <span className="text-xl" data-oid="bdc:dg3">
                                📂
                            </span>
                            <span className="text-xs font-semibold" data-oid="p5lrac3">
                                التصنيفات
                            </span>
                        </button>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="97xa44g"
                        >
                            <span className="text-xl" data-oid="2dgfcz-">
                                📋
                            </span>
                            <span className="text-xs" data-oid="xrapbeq">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ofx-ez5"
                        >
                            <span className="text-xl" data-oid="98zscrz">
                                💰
                            </span>
                            <span className="text-xs" data-oid="_8u2b7x">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="qm7xe7j"
                        >
                            <span className="text-xl" data-oid="0iq_cga">
                                💬
                            </span>
                            <span className="text-xs" data-oid="fs9rl6w">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="2bf5x4c"></div>
        </div>
    );
}
