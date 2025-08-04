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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="8r.4hwx">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="0hozy4b"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="0rd3rqh">
                    <div className="flex items-center justify-between mb-4" data-oid="1j889f1">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="0wah5.d"
                        >
                            <span className="text-lg" data-oid="c26n7m:">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="ykpxzv4">
                            تصنيفات الخدمات
                        </h1>
                        <div className="w-10 h-10" data-oid="or0.t0w"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="2byxyh8">
                        اختر التصنيف المناسب لإيجاد الخدمة التي تحتاجها
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="dux6n6w">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="mhy50m.">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="2:hz.pc">
                        <span className="text-gray-400" data-oid="b9d9rc9">
                            🔍
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ابحث في التصنيفات..."
                            className="flex-1 outline-none text-gray-700"
                            data-oid="obr-7jp"
                        />
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="n6yqe7z">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="tdr2dd9">
                    {filteredCategories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => setSelectedCategory(category)}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                            data-oid="c_g8ui3"
                        >
                            <div
                                className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mb-3 mx-auto`}
                                data-oid="32-idq:"
                            >
                                <span className="text-2xl" data-oid="-160vt8">
                                    {category.icon}
                                </span>
                            </div>
                            <h3
                                className="font-semibold text-gray-800 text-sm text-center mb-1"
                                data-oid="nmn7nd9"
                            >
                                {category.name}
                            </h3>
                            <p className="text-xs text-gray-500 text-center" data-oid="vy4:qkt">
                                {category.subCategories.length} تصنيف فرعي
                            </p>
                        </div>
                    ))}
                </div>

                {/* Popular Categories */}
                <div className="mb-6" data-oid="9v.7r1.">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-oid="nmnp0x6">
                        التصنيفات الأكثر طلباً
                    </h3>
                    <div className="space-y-3" data-oid="ev2z1.l">
                        {categories.slice(0, 4).map((category) => (
                            <div
                                key={category.id}
                                onClick={() => setSelectedCategory(category)}
                                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 space-x-reverse cursor-pointer hover:shadow-md transition-shadow"
                                data-oid="lz6zl9v"
                            >
                                <div
                                    className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center`}
                                    data-oid="_6fhq9i"
                                >
                                    <span className="text-lg" data-oid="9d8h11r">
                                        {category.icon}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="tuq8x6d">
                                    <h4
                                        className="font-semibold text-gray-800 text-sm"
                                        data-oid="8_trlfu"
                                    >
                                        {category.name}
                                    </h4>
                                    <p className="text-xs text-gray-500" data-oid="i-3oqnw">
                                        {category.description}
                                    </p>
                                </div>
                                <div className="text-xs text-gray-400" data-oid="ytkq33x">
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
                    data-oid="y:8rkwf"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="580:6_p"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="6sshdjn">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="134-w3u"
                            ></div>
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid="ff8i7_9"
                            >
                                <div
                                    className="flex items-center space-x-3 space-x-reverse"
                                    data-oid="onljp20"
                                >
                                    <div
                                        className={`w-12 h-12 ${selectedCategory.color} rounded-2xl flex items-center justify-center`}
                                        data-oid="mfjwjj3"
                                    >
                                        <span className="text-2xl" data-oid="j__hoxl">
                                            {selectedCategory.icon}
                                        </span>
                                    </div>
                                    <div data-oid="keiq4j0">
                                        <h3
                                            className="text-xl font-bold text-gray-800"
                                            data-oid="fizhctw"
                                        >
                                            {selectedCategory.name}
                                        </h3>
                                        <p className="text-sm text-gray-600" data-oid="91oww5v">
                                            {selectedCategory.description}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="p5a5abk"
                                >
                                    <span className="text-gray-600" data-oid="vxhklso">
                                        ✕
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Subcategories List */}
                        <div
                            className="overflow-y-auto max-h-[calc(90vh-200px)] p-4"
                            data-oid="dqld-z3"
                        >
                            <div className="space-y-3" data-oid="54obesm">
                                {selectedCategory.subCategories.map((subCategory) => (
                                    <div
                                        key={subCategory.id}
                                        onClick={() =>
                                            handleSubCategoryClick(selectedCategory, subCategory)
                                        }
                                        className="bg-gray-50 rounded-2xl p-4 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors"
                                        data-oid="khofj73"
                                    >
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse"
                                            data-oid="7oabbr6"
                                        >
                                            <div className="text-2xl" data-oid="wjud8z8">
                                                {subCategory.icon}
                                            </div>
                                            <div className="flex-1" data-oid="4bvizrn">
                                                <h4
                                                    className="font-semibold text-gray-800"
                                                    data-oid="7.qefw0"
                                                >
                                                    {subCategory.name}
                                                </h4>
                                                <p
                                                    className="text-sm text-gray-600"
                                                    data-oid="qjpwudi"
                                                >
                                                    {subCategory.servicesCount} مقدم خدمة متاح
                                                </p>
                                            </div>
                                            <div className="text-gray-400" data-oid="56k36yx">
                                                <span data-oid="azlk5pn">←</span>
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
                data-oid="-9aq.9e"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="xn1xfbd">
                    <div className="flex justify-around" data-oid=".893j_9">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="qltal4-"
                        >
                            <span className="text-xl" data-oid="5_.npr9">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="h7-xlyx">
                                الرئيسية
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="_intur2"
                        >
                            <span className="text-xl" data-oid="o:3j-d2">
                                📂
                            </span>
                            <span className="text-xs font-semibold" data-oid=":fwgb6n">
                                التصنيفات
                            </span>
                        </button>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ghs4qkx"
                        >
                            <span className="text-xl" data-oid="-hirxmg">
                                📋
                            </span>
                            <span className="text-xs" data-oid=":-k53:d">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/offers"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="270ikff"
                        >
                            <span className="text-xl" data-oid="._lbcr:">
                                💰
                            </span>
                            <span className="text-xs" data-oid="x902o73">
                                العروض
                            </span>
                        </Link>
                        <Link
                            href="/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="o0r82u:"
                        >
                            <span className="text-xl" data-oid=".0.gi8.">
                                💬
                            </span>
                            <span className="text-xs" data-oid="4cpmidd">
                                الرسائل
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="cvqgsbo"></div>
        </div>
    );
}
