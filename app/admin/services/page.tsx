'use client';

import { useState } from 'react';

export default function ServicesManagement() {
    const [categories] = useState([
        {
            id: 1,
            name: 'خدمات المنزل',
            icon: '🏠',
            color: 'bg-blue-500',
            servicesCount: 8,
            subcategoriesCount: 3,
            active: true,
        },
        {
            id: 2,
            name: 'الصيانة والإصلاح',
            icon: '🔧',
            color: 'bg-orange-500',
            servicesCount: 12,
            subcategoriesCount: 4,
            active: true,
        },
        {
            id: 3,
            name: 'التوصيل والنقل',
            icon: '🚚',
            color: 'bg-green-500',
            servicesCount: 6,
            subcategoriesCount: 2,
            active: true,
        },
        {
            id: 4,
            name: 'الجمال والعناية',
            icon: '💄',
            color: 'bg-pink-500',
            servicesCount: 5,
            subcategoriesCount: 3,
            active: true,
        },
        {
            id: 5,
            name: 'البستنة والحدائق',
            icon: '🌱',
            color: 'bg-emerald-500',
            servicesCount: 4,
            subcategoriesCount: 2,
            active: false,
        },
        {
            id: 6,
            name: 'التعليم والتدريب',
            icon: '📚',
            color: 'bg-purple-500',
            servicesCount: 7,
            subcategoriesCount: 3,
            active: true,
        },
    ]);

    const [subcategories] = useState([
        {
            id: 1,
            name: 'تنظيف عام',
            categoryId: 1,
            categoryName: 'خدمات المنزل',
            icon: '🧹',
            servicesCount: 3,
            active: true,
        },
        {
            id: 2,
            name: 'تنظيف متخصص',
            categoryId: 1,
            categoryName: 'خدمات المنزل',
            icon: '🧽',
            servicesCount: 2,
            active: true,
        },
        {
            id: 3,
            name: 'خدمات الطبخ',
            categoryId: 1,
            categoryName: 'خدمات المنزل',
            icon: '👨‍🍳',
            servicesCount: 3,
            active: true,
        },
        {
            id: 4,
            name: 'صيانة السباكة',
            categoryId: 2,
            categoryName: 'الصيانة والإصلاح',
            icon: '🚰',
            servicesCount: 4,
            active: true,
        },
        {
            id: 5,
            name: 'صيانة الكهرباء',
            categoryId: 2,
            categoryName: 'الصيانة والإصلاح',
            icon: '⚡',
            servicesCount: 3,
            active: true,
        },
        {
            id: 6,
            name: 'صيانة الأجهزة',
            categoryId: 2,
            categoryName: 'الصيانة والإصلاح',
            icon: '🔧',
            servicesCount: 3,
            active: true,
        },
        {
            id: 7,
            name: 'صيانة السيارات',
            categoryId: 2,
            categoryName: 'الصيانة والإصلاح',
            icon: '🚗',
            servicesCount: 2,
            active: false,
        },
        {
            id: 8,
            name: 'توصيل الطعام',
            categoryId: 3,
            categoryName: 'التوصيل والنقل',
            icon: '🍕',
            servicesCount: 3,
            active: true,
        },
        {
            id: 9,
            name: 'نقل البضائع',
            categoryId: 3,
            categoryName: 'التوصيل والنقل',
            icon: '📦',
            servicesCount: 3,
            active: true,
        },
        {
            id: 10,
            name: 'العناية بالشعر',
            categoryId: 4,
            categoryName: 'الجمال والعناية',
            icon: '💇‍♀️',
            servicesCount: 2,
            active: true,
        },
        {
            id: 11,
            name: 'العناية بالبشرة',
            categoryId: 4,
            categoryName: 'الجمال والعناية',
            icon: '🧴',
            servicesCount: 2,
            active: true,
        },
        {
            id: 12,
            name: 'المكياج',
            categoryId: 4,
            categoryName: 'الجمال والعناية',
            icon: '💄',
            servicesCount: 1,
            active: true,
        },
    ]);

    const [services] = useState([
        {
            id: 1,
            name: 'تنظيف المنزل',
            category: 'خدمات المنزل',
            subcategory: 'تنظيف عام',
            icon: '🏠',
            providers: 45,
            avgPrice: 50,
            active: true,
        },
        {
            id: 2,
            name: 'صيانة السباكة',
            category: 'الصيانة والإصلاح',
            subcategory: 'صيانة السباكة',
            icon: '🔧',
            providers: 23,
            avgPrice: 80,
            active: true,
        },
        {
            id: 3,
            name: 'توصيل الطعام',
            category: 'التوصيل والنقل',
            subcategory: 'توصيل الطعام',
            icon: '🍕',
            providers: 67,
            avgPrice: 25,
            active: true,
        },
        {
            id: 4,
            name: 'خدمات التجميل',
            category: 'الجمال والعناية',
            subcategory: 'المكياج',
            icon: '💄',
            providers: 34,
            avgPrice: 120,
            active: true,
        },
        {
            id: 5,
            name: 'تصليح الأجهزة',
            category: 'الصيانة والإصلاح',
            subcategory: 'صيانة الأجهزة',
            icon: '📱',
            providers: 18,
            avgPrice: 60,
            active: false,
        },
        {
            id: 6,
            name: 'خدمات البستنة',
            category: 'البستنة والحدائق',
            subcategory: 'العناية بالحدائق',
            icon: '🌱',
            providers: 12,
            avgPrice: 40,
            active: true,
        },
        {
            id: 7,
            name: 'تنظيف السجاد',
            category: 'خدمات المنزل',
            subcategory: 'تنظيف متخصص',
            icon: '🧽',
            providers: 28,
            avgPrice: 35,
            active: true,
        },
        {
            id: 8,
            name: 'صيانة الكهرباء',
            category: 'الصيانة والإصلاح',
            subcategory: 'صيانة الكهرباء',
            icon: '⚡',
            providers: 15,
            avgPrice: 90,
            active: true,
        },
    ]);

    const [activeTab, setActiveTab] = useState('categories');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', icon: '', color: 'bg-blue-500' });
    const [newSubcategory, setNewSubcategory] = useState({ name: '', categoryId: '', icon: '' });
    const [newService, setNewService] = useState({
        name: '',
        category: '',
        subcategory: '',
        icon: '',
        avgPrice: 0,
    });

    const handleAddCategory = () => {
        if (newCategory.name && newCategory.icon) {
            alert(`تم إضافة التصنيف: ${newCategory.name}`);
            setNewCategory({ name: '', icon: '', color: 'bg-blue-500' });
            setShowAddModal(false);
        }
    };

    const handleAddSubcategory = () => {
        if (newSubcategory.name && newSubcategory.categoryId && newSubcategory.icon) {
            alert(`تم إضافة التصنيف الفرعي: ${newSubcategory.name}`);
            setNewSubcategory({ name: '', categoryId: '', icon: '' });
            setShowAddModal(false);
        }
    };

    const handleAddService = () => {
        if (newService.name && newService.category && newService.subcategory && newService.icon) {
            alert(`تم إضافة الخدمة: ${newService.name}`);
            setNewService({ name: '', category: '', subcategory: '', icon: '', avgPrice: 0 });
            setShowAddModal(false);
        }
    };

    return (
        <div className="p-6" data-oid="8eaoi06">
            <div className="mb-6" data-oid="fgi022p">
                <h1 className="text-2xl font-bold text-gray-900 mb-2" data-oid="gk2s-u0">
                    إدارة الخدمات والتصنيفات
                </h1>
                <p className="text-gray-600" data-oid="wvx7jc5">
                    إدارة تصنيفات الخدمات والخدمات المتاحة في التطبيق
                </p>
            </div>

            {/* Tabs */}
            <div className="mb-6" data-oid="1cvpcju">
                <div className="border-b border-gray-200" data-oid="1h5tl8y">
                    <nav className="-mb-px flex space-x-8 space-x-reverse" data-oid="l6xhsn.">
                        <button
                            onClick={() => setActiveTab('categories')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'categories'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                            data-oid="pdux.xu"
                        >
                            التصنيفات الرئيسية
                        </button>
                        <button
                            onClick={() => setActiveTab('subcategories')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'subcategories'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                            data-oid="subcategories-tab"
                        >
                            التصنيفات الفرعية
                        </button>
                        <button
                            onClick={() => setActiveTab('services')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'services'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                            data-oid="gr_h::d"
                        >
                            الخدمات
                        </button>
                    </nav>
                </div>
            </div>

            {/* Categories Tab */}
            {activeTab === 'categories' && (
                <div data-oid="egggosu">
                    <div className="flex justify-between items-center mb-6" data-oid="5qxuapf">
                        <h2 className="text-xl font-semibold text-gray-900" data-oid="dfow92v">
                            تصنيفات الخدمات
                        </h2>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            data-oid="7f-iybt"
                        >
                            إضافة تصنيف جديد
                        </button>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="zuumh3o"
                    >
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white rounded-lg shadow p-6"
                                data-oid=".qjys9."
                            >
                                <div
                                    className="flex items-center justify-between mb-4"
                                    data-oid="oe:k817"
                                >
                                    <div
                                        className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}
                                        data-oid="hkbml:_"
                                    >
                                        <span className="text-2xl" data-oid="iwowv8c">
                                            {category.icon}
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse"
                                        data-oid="o--x2nc"
                                    >
                                        <span
                                            className={`w-3 h-3 rounded-full ${category.active ? 'bg-green-500' : 'bg-red-500'}`}
                                            data-oid="0ko6y72"
                                        ></span>
                                        <span className="text-sm text-gray-500" data-oid="7k:w2.0">
                                            {category.active ? 'نشط' : 'غير نشط'}
                                        </span>
                                    </div>
                                </div>
                                <h3
                                    className="text-lg font-semibold text-gray-900 mb-2"
                                    data-oid="hp8.ws4"
                                >
                                    {category.name}
                                </h3>
                                <div className="text-sm text-gray-600 mb-4" data-oid="p25u.wm">
                                    <p data-oid="2809fw:">{category.servicesCount} خدمة متاحة</p>
                                    <p data-oid=".7-:li_">
                                        {category.subcategoriesCount} تصنيف فرعي
                                    </p>
                                </div>
                                <div className="flex space-x-2 space-x-reverse" data-oid="rfktp6h">
                                    <button
                                        className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600 transition-colors"
                                        data-oid="-hscj-y"
                                    >
                                        تعديل
                                    </button>
                                    <button
                                        className={`flex-1 py-2 px-3 rounded-md text-sm transition-colors ${
                                            category.active
                                                ? 'bg-red-500 text-white hover:bg-red-600'
                                                : 'bg-green-500 text-white hover:bg-green-600'
                                        }`}
                                        data-oid="jpp7u3l"
                                    >
                                        {category.active ? 'إلغاء تفعيل' : 'تفعيل'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Subcategories Tab */}
            {activeTab === 'subcategories' && (
                <div data-oid="subcategories-content">
                    <div
                        className="flex justify-between items-center mb-6"
                        data-oid="subcategories-header"
                    >
                        <h2
                            className="text-xl font-semibold text-gray-900"
                            data-oid="subcategories-title"
                        >
                            التصنيفات الفرعية
                        </h2>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            data-oid="add-subcategory-btn"
                        >
                            إضافة تصنيف فرعي جديد
                        </button>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow overflow-hidden"
                        data-oid="subcategories-table-container"
                    >
                        <div className="overflow-x-auto" data-oid="subcategories-table-scroll">
                            <table
                                className="min-w-full divide-y divide-gray-200"
                                data-oid="subcategories-table"
                            >
                                <thead className="bg-gray-50" data-oid="subcategories-table-head">
                                    <tr data-oid="subcategories-table-head-row">
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="subcategory-name-header"
                                        >
                                            التصنيف الفرعي
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="parent-category-header"
                                        >
                                            التصنيف الرئيسي
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="subcategory-services-header"
                                        >
                                            عدد الخدمات
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="subcategory-status-header"
                                        >
                                            الحالة
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="subcategory-actions-header"
                                        >
                                            الإجراءات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200"
                                    data-oid="subcategories-table-body"
                                >
                                    {subcategories.map((subcategory) => (
                                        <tr
                                            key={subcategory.id}
                                            className="hover:bg-gray-50"
                                            data-oid="subcategory-row"
                                        >
                                            <td
                                                className="px-6 py-4 whitespace-nowrap"
                                                data-oid="subcategory-name-cell"
                                            >
                                                <div
                                                    className="flex items-center"
                                                    data-oid="subcategory-name-content"
                                                >
                                                    <div
                                                        className="text-2xl ml-3"
                                                        data-oid="subcategory-icon"
                                                    >
                                                        {subcategory.icon}
                                                    </div>
                                                    <div data-oid="subcategory-info">
                                                        <div
                                                            className="text-sm font-medium text-gray-900"
                                                            data-oid="subcategory-name"
                                                        >
                                                            {subcategory.name}
                                                        </div>
                                                        <div
                                                            className="text-sm text-gray-500"
                                                            data-oid="subcategory-id"
                                                        >
                                                            ID: {subcategory.id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                data-oid="parent-category-cell"
                                            >
                                                {subcategory.categoryName}
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                data-oid="subcategory-services-cell"
                                            >
                                                {subcategory.servicesCount}
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap"
                                                data-oid="subcategory-status-cell"
                                            >
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        subcategory.active
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                    data-oid="subcategory-status-badge"
                                                >
                                                    {subcategory.active ? 'نشط' : 'غير نشط'}
                                                </span>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                                data-oid="subcategory-actions-cell"
                                            >
                                                <div
                                                    className="flex space-x-2 space-x-reverse"
                                                    data-oid="subcategory-actions"
                                                >
                                                    <button
                                                        className="text-blue-600 hover:text-blue-900"
                                                        data-oid="edit-subcategory-btn"
                                                    >
                                                        تعديل
                                                    </button>
                                                    <button
                                                        className={
                                                            subcategory.active
                                                                ? 'text-red-600 hover:text-red-900'
                                                                : 'text-green-600 hover:text-green-900'
                                                        }
                                                        data-oid="toggle-subcategory-btn"
                                                    >
                                                        {subcategory.active
                                                            ? 'إلغاء تفعيل'
                                                            : 'تفعيل'}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
                <div data-oid="6eixzzu">
                    <div className="flex justify-between items-center mb-6" data-oid="o-ch:dr">
                        <h2 className="text-xl font-semibold text-gray-900" data-oid="9vohriy">
                            الخدمات المتاحة
                        </h2>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            data-oid="15w3cv_"
                        >
                            إضافة خدمة جديدة
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow overflow-hidden" data-oid="8rx8i11">
                        <div className="overflow-x-auto" data-oid="7jj0979">
                            <table
                                className="min-w-full divide-y divide-gray-200"
                                data-oid="l._07_j"
                            >
                                <thead className="bg-gray-50" data-oid="df-nsy0">
                                    <tr data-oid="r:0zyr1">
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="5-nqji6"
                                        >
                                            الخدمة
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="cd.f-p2"
                                        >
                                            التصنيف
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="subcategory-header"
                                        >
                                            التصنيف الفرعي
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="d1yoa.3"
                                        >
                                            عدد مقدمي الخدمة
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="wsxd7dx"
                                        >
                                            متوسط السعر
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="ffx.uwz"
                                        >
                                            الحالة
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="79qqpu8"
                                        >
                                            الإجراءات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200"
                                    data-oid="zr0t.bw"
                                >
                                    {services.map((service) => (
                                        <tr
                                            key={service.id}
                                            className="hover:bg-gray-50"
                                            data-oid="ciykoh-"
                                        >
                                            <td
                                                className="px-6 py-4 whitespace-nowrap"
                                                data-oid="su.r_vz"
                                            >
                                                <div
                                                    className="flex items-center"
                                                    data-oid="ll9wdeo"
                                                >
                                                    <div
                                                        className="text-2xl ml-3"
                                                        data-oid="u6dk3ir"
                                                    >
                                                        {service.icon}
                                                    </div>
                                                    <div data-oid="7kr74fc">
                                                        <div
                                                            className="text-sm font-medium text-gray-900"
                                                            data-oid="vqfrtp-"
                                                        >
                                                            {service.name}
                                                        </div>
                                                        <div
                                                            className="text-sm text-gray-500"
                                                            data-oid="ivkgw-c"
                                                        >
                                                            ID: {service.id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                data-oid="wd4wv_6"
                                            >
                                                {service.category}
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                data-oid="service-subcategory-cell"
                                            >
                                                {service.subcategory}
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                data-oid="44zotk6"
                                            >
                                                {service.providers}
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                data-oid="ed70e_9"
                                            >
                                                {service.avgPrice} ريال
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap"
                                                data-oid="v2-9ehj"
                                            >
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        service.active
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                    data-oid=".h2722k"
                                                >
                                                    {service.active ? 'نشط' : 'غير نشط'}
                                                </span>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                                data-oid="0sc3h8l"
                                            >
                                                <div
                                                    className="flex space-x-2 space-x-reverse"
                                                    data-oid="az-d3l6"
                                                >
                                                    <button
                                                        className="text-blue-600 hover:text-blue-900"
                                                        data-oid="yo5aw9:"
                                                    >
                                                        تعديل
                                                    </button>
                                                    <button
                                                        className={
                                                            service.active
                                                                ? 'text-red-600 hover:text-red-900'
                                                                : 'text-green-600 hover:text-green-900'
                                                        }
                                                        data-oid="jknmgzf"
                                                    >
                                                        {service.active ? 'إلغاء تفعيل' : 'تفعيل'}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Modal */}
            {showAddModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    data-oid="xjgl:mi"
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
                        data-oid="n.w0lzm"
                    >
                        <h3 className="text-lg font-medium text-gray-900 mb-4" data-oid="1mcryz6">
                            {activeTab === 'categories'
                                ? 'إضافة تصنيف جديد'
                                : activeTab === 'subcategories'
                                  ? 'إضافة تصنيف فرعي جديد'
                                  : 'إضافة خدمة جديدة'}
                        </h3>

                        {activeTab === 'categories' ? (
                            <div className="space-y-4" data-oid="my..sx5">
                                <div data-oid="0d9fnwq">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="upgmov6"
                                    >
                                        اسم التصنيف
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newCategory.name}
                                        onChange={(e) =>
                                            setNewCategory({ ...newCategory, name: e.target.value })
                                        }
                                        placeholder="مثال: خدمات المنزل"
                                        data-oid="npeu6dx"
                                    />
                                </div>
                                <div data-oid="h375.t1">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="zrwog3."
                                    >
                                        الأيقونة
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newCategory.icon}
                                        onChange={(e) =>
                                            setNewCategory({ ...newCategory, icon: e.target.value })
                                        }
                                        placeholder="🏠"
                                        data-oid="kd5rzmw"
                                    />
                                </div>
                                <div data-oid="c0t_cc_">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="vzfj-yp"
                                    >
                                        اللون
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newCategory.color}
                                        onChange={(e) =>
                                            setNewCategory({
                                                ...newCategory,
                                                color: e.target.value,
                                            })
                                        }
                                        data-oid="pclvpk0"
                                    >
                                        <option value="bg-blue-500" data-oid="k:bd-nv">
                                            أزرق
                                        </option>
                                        <option value="bg-green-500" data-oid="q6ow6-4">
                                            أخضر
                                        </option>
                                        <option value="bg-orange-500" data-oid="56o_vrl">
                                            برتقالي
                                        </option>
                                        <option value="bg-purple-500" data-oid="60_lmj-">
                                            بنفسجي
                                        </option>
                                        <option value="bg-pink-500" data-oid="tew2:p5">
                                            وردي
                                        </option>
                                        <option value="bg-red-500" data-oid="la71kib">
                                            أحمر
                                        </option>
                                    </select>
                                </div>
                            </div>
                        ) : activeTab === 'subcategories' ? (
                            <div className="space-y-4" data-oid="subcategory-form">
                                <div data-oid="subcategory-name-field">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="subcategory-name-label"
                                    >
                                        اسم التصنيف الفرعي
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newSubcategory.name}
                                        onChange={(e) =>
                                            setNewSubcategory({
                                                ...newSubcategory,
                                                name: e.target.value,
                                            })
                                        }
                                        placeholder="مثال: تنظيف عام"
                                        data-oid="subcategory-name-input"
                                    />
                                </div>
                                <div data-oid="subcategory-parent-field">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="subcategory-parent-label"
                                    >
                                        التصنيف الرئيسي
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newSubcategory.categoryId}
                                        onChange={(e) =>
                                            setNewSubcategory({
                                                ...newSubcategory,
                                                categoryId: e.target.value,
                                            })
                                        }
                                        data-oid="subcategory-parent-select"
                                    >
                                        <option value="" data-oid="subcategory-parent-default">
                                            اختر التصنيف الرئيسي
                                        </option>
                                        {categories.map((cat) => (
                                            <option
                                                key={cat.id}
                                                value={cat.id.toString()}
                                                data-oid="subcategory-parent-option"
                                            >
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div data-oid="subcategory-icon-field">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="subcategory-icon-label"
                                    >
                                        الأيقونة
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newSubcategory.icon}
                                        onChange={(e) =>
                                            setNewSubcategory({
                                                ...newSubcategory,
                                                icon: e.target.value,
                                            })
                                        }
                                        placeholder="🧹"
                                        data-oid="subcategory-icon-input"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4" data-oid="sqyo:wg">
                                <div data-oid="noy:rua">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="grcql_w"
                                    >
                                        اسم الخدمة
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newService.name}
                                        onChange={(e) =>
                                            setNewService({ ...newService, name: e.target.value })
                                        }
                                        placeholder="مثال: تنظيف المنزل"
                                        data-oid="gt0ya60"
                                    />
                                </div>
                                <div data-oid="n3u8yuc">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="4_0rpxf"
                                    >
                                        التصنيف الرئيسي
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newService.category}
                                        onChange={(e) =>
                                            setNewService({
                                                ...newService,
                                                category: e.target.value,
                                                subcategory: '', // Reset subcategory when category changes
                                            })
                                        }
                                        data-oid="c.-8bs7"
                                    >
                                        <option value="" data-oid="3r-gg21">
                                            اختر التصنيف الرئيسي
                                        </option>
                                        {categories.map((cat) => (
                                            <option
                                                key={cat.id}
                                                value={cat.name}
                                                data-oid="8yram1x"
                                            >
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div data-oid="service-subcategory-field">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="service-subcategory-label"
                                    >
                                        التصنيف الفرعي
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newService.subcategory}
                                        onChange={(e) =>
                                            setNewService({
                                                ...newService,
                                                subcategory: e.target.value,
                                            })
                                        }
                                        disabled={!newService.category}
                                        data-oid="service-subcategory-select"
                                    >
                                        <option value="" data-oid="service-subcategory-default">
                                            اختر التصنيف الفرعي
                                        </option>
                                        {subcategories
                                            .filter(
                                                (sub) => sub.categoryName === newService.category,
                                            )
                                            .map((sub) => (
                                                <option
                                                    key={sub.id}
                                                    value={sub.name}
                                                    data-oid="service-subcategory-option"
                                                >
                                                    {sub.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div data-oid="u5c:0a2">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="ub04kui"
                                    >
                                        الأيقونة
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newService.icon}
                                        onChange={(e) =>
                                            setNewService({ ...newService, icon: e.target.value })
                                        }
                                        placeholder="🏠"
                                        data-oid="zutk2d0"
                                    />
                                </div>
                                <div data-oid="ufe9-n.">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="k9d7fvs"
                                    >
                                        متوسط السعر (ريال)
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newService.avgPrice}
                                        onChange={(e) =>
                                            setNewService({
                                                ...newService,
                                                avgPrice: parseInt(e.target.value),
                                            })
                                        }
                                        placeholder="50"
                                        data-oid="m8gjfcz"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex space-x-3 space-x-reverse mt-6" data-oid="pmkwi_n">
                            <button
                                onClick={
                                    activeTab === 'categories'
                                        ? handleAddCategory
                                        : activeTab === 'subcategories'
                                          ? handleAddSubcategory
                                          : handleAddService
                                }
                                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                                data-oid="j14ghoo"
                            >
                                إضافة
                            </button>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                                data-oid="en:ohwo"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
