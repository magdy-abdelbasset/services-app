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
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingItem, setEditingItem] = useState<string | null>(null);
    const [editCategory, setEditCategory] = useState({
        id: '',
        name: '',
        icon: '',
        color: 'bg-blue-500',
    });
    const [editSubcategory, setEditSubcategory] = useState({
        id: '',
        name: '',
        categoryId: '',
        icon: '',
    });
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

    const handleEditCategory = (category) => {
        setEditingItem('category');
        setEditCategory({
            id: category.id,
            name: category.name,
            icon: category.icon,
            color: category.color,
        });
        setShowEditModal(true);
    };

    const handleEditSubcategory = (subcategory) => {
        setEditingItem('subcategory');
        setEditSubcategory({
            id: subcategory.id,
            name: subcategory.name,
            categoryId: subcategory.categoryId.toString(),
            icon: subcategory.icon,
        });
        setShowEditModal(true);
    };

    const handleUpdateCategory = () => {
        if (editCategory.name && editCategory.icon) {
            alert(`تم تحديث التصنيف: ${editCategory.name}`);
            setEditCategory({ id: '', name: '', icon: '', color: 'bg-blue-500' });
            setShowEditModal(false);
            setEditingItem(null);
        }
    };

    const handleUpdateSubcategory = () => {
        if (editSubcategory.name && editSubcategory.categoryId && editSubcategory.icon) {
            alert(`تم تحديث التصنيف الفرعي: ${editSubcategory.name}`);
            setEditSubcategory({ id: '', name: '', categoryId: '', icon: '' });
            setShowEditModal(false);
            setEditingItem(null);
        }
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setEditingItem(null);
        setEditCategory({ id: '', name: '', icon: '', color: 'bg-blue-500' });
        setEditSubcategory({ id: '', name: '', categoryId: '', icon: '' });
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">إدارة الخدمات والتصنيفات</h1>
                <p className="text-gray-600">إدارة تصنيفات الخدمات والخدمات المتاحة في التطبيق</p>
            </div>

            {/* Tabs */}
            <div className="mb-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8 space-x-reverse">
                        <button
                            onClick={() => setActiveTab('categories')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'categories'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
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
                        >
                            الخدمات
                        </button>
                    </nav>
                </div>
            </div>

            {/* Categories Tab */}
            {activeTab === 'categories' && (
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">تصنيفات الخدمات</h2>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            إضافة تصنيف جديد
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div key={category.id} className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}
                                    >
                                        <span className="text-2xl">{category.icon}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 space-x-reverse">
                                        <span
                                            className={`w-3 h-3 rounded-full ${category.active ? 'bg-green-500' : 'bg-red-500'}`}
                                        ></span>
                                        <span className="text-sm text-gray-500">
                                            {category.active ? 'نشط' : 'غير نشط'}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {category.name}
                                </h3>
                                <div className="text-sm text-gray-600 mb-4">
                                    <p>{category.servicesCount} خدمة متاحة</p>
                                    <p>{category.subcategoriesCount} تصنيف فرعي</p>
                                </div>
                                <div className="flex space-x-2 space-x-reverse">
                                    <button
                                        onClick={() => handleEditCategory(category)}
                                        className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600 transition-colors"
                                    >
                                        تعديل
                                    </button>
                                    <button
                                        className={`flex-1 py-2 px-3 rounded-md text-sm transition-colors ${
                                            category.active
                                                ? 'bg-red-500 text-white hover:bg-red-600'
                                                : 'bg-green-500 text-white hover:bg-green-600'
                                        }`}
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
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">التصنيفات الفرعية</h2>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            إضافة تصنيف فرعي جديد
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            التصنيف الفرعي
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            التصنيف الرئيسي
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            عدد الخدمات
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الحالة
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الإجراءات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {subcategories.map((subcategory) => (
                                        <tr key={subcategory.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-2xl ml-3">
                                                        {subcategory.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {subcategory.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            ID: {subcategory.id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {subcategory.categoryName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {subcategory.servicesCount}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        subcategory.active
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {subcategory.active ? 'نشط' : 'غير نشط'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2 space-x-reverse">
                                                    <button
                                                        onClick={() =>
                                                            handleEditSubcategory(subcategory)
                                                        }
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        تعديل
                                                    </button>
                                                    <button
                                                        className={
                                                            subcategory.active
                                                                ? 'text-red-600 hover:text-red-900'
                                                                : 'text-green-600 hover:text-green-900'
                                                        }
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
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">الخدمات المتاحة</h2>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            إضافة خدمة جديدة
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الخدمة
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            التصنيف
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            التصنيف الفرعي
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            عدد مقدمي الخدمة
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            متوسط السعر
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الحالة
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الإجراءات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {services.map((service) => (
                                        <tr key={service.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-2xl ml-3">
                                                        {service.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {service.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            ID: {service.id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {service.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {service.subcategory}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {service.providers}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {service.avgPrice} ريال
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        service.active
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {service.active ? 'نشط' : 'غير نشط'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2 space-x-reverse">
                                                    <button className="text-blue-600 hover:text-blue-900">
                                                        تعديل
                                                    </button>
                                                    <button
                                                        className={
                                                            service.active
                                                                ? 'text-red-600 hover:text-red-900'
                                                                : 'text-green-600 hover:text-green-900'
                                                        }
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            {activeTab === 'categories'
                                ? 'إضافة تصنيف جديد'
                                : activeTab === 'subcategories'
                                  ? 'إضافة تصنيف فرعي جديد'
                                  : 'إضافة خدمة جديدة'}
                        </h3>

                        {activeTab === 'categories' ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    >
                                        <option value="bg-blue-500">أزرق</option>
                                        <option value="bg-green-500">أخضر</option>
                                        <option value="bg-orange-500">برتقالي</option>
                                        <option value="bg-purple-500">بنفسجي</option>
                                        <option value="bg-pink-500">وردي</option>
                                        <option value="bg-red-500">أحمر</option>
                                    </select>
                                </div>
                            </div>
                        ) : activeTab === 'subcategories' ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    >
                                        <option value="">اختر التصنيف الرئيسي</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id.toString()}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    >
                                        <option value="">اختر التصنيف الرئيسي</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.name}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    >
                                        <option value="">اختر التصنيف الفرعي</option>
                                        {subcategories
                                            .filter(
                                                (sub) => sub.categoryName === newService.category,
                                            )
                                            .map((sub) => (
                                                <option key={sub.id} value={sub.name}>
                                                    {sub.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex space-x-3 space-x-reverse mt-6">
                            <button
                                onClick={
                                    activeTab === 'categories'
                                        ? handleAddCategory
                                        : activeTab === 'subcategories'
                                          ? handleAddSubcategory
                                          : handleAddService
                                }
                                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                إضافة
                            </button>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            {editingItem === 'category' ? 'تعديل التصنيف' : 'تعديل التصنيف الفرعي'}
                        </h3>

                        {editingItem === 'category' ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        اسم التصنيف
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={editCategory.name}
                                        onChange={(e) =>
                                            setEditCategory({
                                                ...editCategory,
                                                name: e.target.value,
                                            })
                                        }
                                        placeholder="مثال: خدمات المنزل"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الأيقونة
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={editCategory.icon}
                                        onChange={(e) =>
                                            setEditCategory({
                                                ...editCategory,
                                                icon: e.target.value,
                                            })
                                        }
                                        placeholder="🏠"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        اللون
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={editCategory.color}
                                        onChange={(e) =>
                                            setEditCategory({
                                                ...editCategory,
                                                color: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="bg-blue-500">أزرق</option>
                                        <option value="bg-green-500">أخضر</option>
                                        <option value="bg-orange-500">برتقالي</option>
                                        <option value="bg-purple-500">بنفسجي</option>
                                        <option value="bg-pink-500">وردي</option>
                                        <option value="bg-red-500">أحمر</option>
                                        <option value="bg-emerald-500">أخضر زمردي</option>
                                    </select>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        اسم التصنيف الفرعي
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={editSubcategory.name}
                                        onChange={(e) =>
                                            setEditSubcategory({
                                                ...editSubcategory,
                                                name: e.target.value,
                                            })
                                        }
                                        placeholder="مثال: تنظيف عام"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        التصنيف الرئيسي
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={editSubcategory.categoryId}
                                        onChange={(e) =>
                                            setEditSubcategory({
                                                ...editSubcategory,
                                                categoryId: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="">اختر التصنيف الرئيسي</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id.toString()}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الأيقونة
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={editSubcategory.icon}
                                        onChange={(e) =>
                                            setEditSubcategory({
                                                ...editSubcategory,
                                                icon: e.target.value,
                                            })
                                        }
                                        placeholder="🧹"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex space-x-3 space-x-reverse mt-6">
                            <button
                                onClick={
                                    editingItem === 'category'
                                        ? handleUpdateCategory
                                        : handleUpdateSubcategory
                                }
                                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={closeEditModal}
                                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
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
