'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Provider {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    rating: number;
    completedJobs: number;
    services: string[];
    joinDate: string;
    verified: boolean;
    documents?: {
        nationalId: boolean;
        license: boolean;
        insurance: boolean;
    };
    earnings?: number;
    location?: string;
}

export default function ProvidersManagement() {
    const [providers] = useState<Provider[]>([
        {
            id: 1,
            name: 'أحمد علي',
            email: 'ahmed.ali@example.com',
            phone: '0501234567',
            status: 'نشط',
            rating: 4.9,
            completedJobs: 156,
            services: ['تنظيف المنزل', 'صيانة عامة'],
            joinDate: '2024-01-10',
            verified: true,
            documents: { nationalId: true, license: true, insurance: true },
            earnings: 15600,
            location: 'الرياض',
        },
        {
            id: 2,
            name: 'فاطمة محمد',
            email: 'fatima@example.com',
            phone: '0507654321',
            status: 'نشط',
            rating: 4.8,
            completedJobs: 203,
            services: ['تنظيف المنزل'],
            joinDate: '2024-01-15',
            verified: true,
            documents: { nationalId: true, license: true, insurance: false },
            earnings: 20300,
            location: 'جدة',
        },
        {
            id: 3,
            name: 'محمد حسن',
            email: 'mohammed@example.com',
            phone: '0509876543',
            status: 'في انتظار الموافقة',
            rating: 0,
            completedJobs: 0,
            services: ['صيانة السباكة'],
            joinDate: '2024-02-20',
            verified: false,
            documents: { nationalId: true, license: false, insurance: false },
            earnings: 0,
            location: 'الدمام',
        },
        {
            id: 4,
            name: 'ليلى محمد',
            email: 'layla@example.com',
            phone: '0502468135',
            status: 'نشط',
            rating: 4.7,
            completedJobs: 89,
            services: ['خدمات التجميل'],
            joinDate: '2024-01-25',
            verified: true,
            documents: { nationalId: true, license: true, insurance: true },
            earnings: 8900,
            location: 'مكة المكرمة',
        },
        {
            id: 5,
            name: 'عمر يوسف',
            email: 'omar@example.com',
            phone: '0508642097',
            status: 'معلق',
            rating: 4.2,
            completedJobs: 45,
            services: ['تصليح الأجهزة'],
            joinDate: '2024-02-01',
            verified: false,
            documents: { nationalId: true, license: false, insurance: true },
            earnings: 4500,
            location: 'المدينة المنورة',
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');
    const [serviceFilter, setServiceFilter] = useState('الكل');
    const [selectedProviders, setSelectedProviders] = useState<number[]>([]);
    const [showProviderModal, setShowProviderModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Get unique services for filter
    const allServices = Array.from(new Set(providers.flatMap((p) => p.services)));

    const filteredProviders = providers
        .filter((provider) => {
            const matchesSearch =
                provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                provider.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                provider.phone.includes(searchTerm) ||
                (provider.location &&
                    provider.location.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesStatus = statusFilter === 'الكل' || provider.status === statusFilter;
            const matchesService =
                serviceFilter === 'الكل' || provider.services.includes(serviceFilter);
            return matchesSearch && matchesStatus && matchesService;
        })
        .sort((a, b) => {
            let aValue: any = a[sortBy as keyof Provider];
            let bValue: any = b[sortBy as keyof Provider];

            if (sortBy === 'name') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'نشط':
                return 'bg-green-100 text-green-800';
            case 'معلق':
                return 'bg-yellow-100 text-yellow-800';
            case 'في انتظار الموافقة':
                return 'bg-blue-100 text-blue-800';
            case 'مرفوض':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleApprove = (providerId: number) => {
        alert(`تم قبول مقدم الخدمة رقم ${providerId}`);
    };

    const handleReject = (providerId: number) => {
        alert(`تم رفض مقدم الخدمة رقم ${providerId}`);
    };

    const handleSelectProvider = (providerId: number) => {
        setSelectedProviders((prev) =>
            prev.includes(providerId)
                ? prev.filter((id) => id !== providerId)
                : [...prev, providerId],
        );
    };

    const handleSelectAll = () => {
        if (selectedProviders.length === filteredProviders.length) {
            setSelectedProviders([]);
        } else {
            setSelectedProviders(filteredProviders.map((p) => p.id));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedProviders.length === 0) {
            alert('يرجى اختيار مقدمي خدمات أولاً');
            return;
        }
        alert(`تم تطبيق الإجراء "${action}" على ${selectedProviders.length} مقدم خدمة`);
        setSelectedProviders([]);
    };

    const handleViewProvider = (provider: Provider) => {
        setSelectedProvider(provider);
        setShowProviderModal(true);
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">إدارة مقدمي الخدمات</h1>
                <p className="text-gray-600">إدارة حسابات مقدمي الخدمات والموافقة على الطلبات</p>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            البحث
                        </label>
                        <input
                            type="text"
                            placeholder="ابحث بالاسم، البريد، الهاتف، أو المدينة..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            الحالة
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="الكل">جميع الحالات</option>
                            <option value="نشط">نشط</option>
                            <option value="معلق">معلق</option>
                            <option value="في انتظار الموافقة">في انتظار الموافقة</option>
                            <option value="مرفوض">مرفوض</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            نوع الخدمة
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={serviceFilter}
                            onChange={(e) => setServiceFilter(e.target.value)}
                        >
                            <option value="الكل">جميع الخدمات</option>
                            {allServices.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            ترتيب حسب
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={`${sortBy}-${sortOrder}`}
                            onChange={(e) => {
                                const [field, order] = e.target.value.split('-');
                                setSortBy(field);
                                setSortOrder(order as 'asc' | 'desc');
                            }}
                        >
                            <option value="name-asc">الاسم (أ-ي)</option>
                            <option value="name-desc">الاسم (ي-أ)</option>
                            <option value="rating-desc">التقييم (الأعلى)</option>
                            <option value="rating-asc">التقييم (الأقل)</option>
                            <option value="completedJobs-desc">الخدمات المكتملة (الأكثر)</option>
                            <option value="joinDate-desc">تاريخ الانضمام (الأحدث)</option>
                        </select>
                    </div>
                    <div className="flex items-end">
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                            تصدير البيانات
                        </button>
                    </div>
                </div>

                {/* Bulk Actions */}
                {selectedProviders.length > 0 && (
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                        <span className="text-sm text-blue-800">
                            تم اختيار {selectedProviders.length} مقدم خدمة
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleBulkAction('approve')}
                                className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                            >
                                قبول الكل
                            </button>
                            <button
                                onClick={() => handleBulkAction('suspend')}
                                className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                            >
                                تعليق الكل
                            </button>
                            <button
                                onClick={() => handleBulkAction('reject')}
                                className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                            >
                                رفض الكل
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">🔧</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">إجمالي مقدمي الخدمات</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {providers.length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">النشطين</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {providers.filter((p) => p.status === 'نشط').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">⏳</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">في انتظار الموافقة</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {providers.filter((p) => p.status === 'في انتظار الموافقة').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">✅</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">الموثقين</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {providers.filter((p) => p.verified).length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Providers Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">قائمة مقدمي الخدمات</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <input
                                        type="checkbox"
                                        checked={
                                            selectedProviders.length === filteredProviders.length &&
                                            filteredProviders.length > 0
                                        }
                                        onChange={handleSelectAll}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    مقدم الخدمة
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    معلومات الاتصال
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    التقييم
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الخدمات المكتملة
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الخدمات
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    المدينة
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الأرباح
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
                            {filteredProviders.map((provider) => (
                                <tr key={provider.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            checked={selectedProviders.includes(provider.id)}
                                            onChange={() => handleSelectProvider(provider.id)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center ml-3">
                                                <span className="text-white font-semibold">
                                                    {provider.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="flex items-center">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {provider.name}
                                                    </div>
                                                    {provider.verified && (
                                                        <span className="mr-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    ID: {provider.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {provider.email}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {provider.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="text-yellow-500 ml-1">⭐</span>
                                            <span className="text-sm text-gray-900">
                                                {provider.rating > 0 ? provider.rating : 'جديد'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {provider.completedJobs}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {provider.services.map((service, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {provider.location}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {provider.earnings?.toLocaleString()} ر.س
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(provider.status)}`}
                                        >
                                            {provider.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2 space-x-reverse">
                                            {provider.status === 'في انتظار الموافقة' ? (
                                                <>
                                                    <button
                                                        onClick={() => handleApprove(provider.id)}
                                                        className="text-green-600 hover:text-green-900"
                                                    >
                                                        قبول
                                                    </button>
                                                    <button
                                                        onClick={() => handleReject(provider.id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        رفض
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => handleViewProvider(provider)}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        عرض
                                                    </button>
                                                    <Link
                                                        href={`/admin/providers/edit/${provider.id}`}
                                                        className="text-green-600 hover:text-green-900"
                                                    >
                                                        تعديل
                                                    </Link>
                                                    <button className="text-red-600 hover:text-red-900">
                                                        تعليق
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Provider Details Modal */}
            {showProviderModal && selectedProvider && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            onClick={() => setShowProviderModal(false)}
                        ></div>

                        <div className="inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        تفاصيل مقدم الخدمة
                                    </h3>
                                    <button
                                        onClick={() => setShowProviderModal(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Basic Information */}
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-3">
                                            المعلومات الأساسية
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center ml-4">
                                                    <span className="text-white font-bold text-xl">
                                                        {selectedProvider.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h5 className="font-semibold text-lg">
                                                            {selectedProvider.name}
                                                        </h5>
                                                        {selectedProvider.verified && (
                                                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                                                موثق
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-gray-600">
                                                        ID: {selectedProvider.id}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <strong>البريد الإلكتروني:</strong>{' '}
                                                {selectedProvider.email}
                                            </div>
                                            <div>
                                                <strong>رقم الهاتف:</strong>{' '}
                                                {selectedProvider.phone}
                                            </div>
                                            <div>
                                                <strong>المدينة:</strong>{' '}
                                                {selectedProvider.location}
                                            </div>
                                            <div>
                                                <strong>تاريخ الانضمام:</strong>{' '}
                                                {selectedProvider.joinDate}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Performance Stats */}
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-3">
                                            إحصائيات الأداء
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span>التقييم:</span>
                                                <div className="flex items-center">
                                                    <span className="text-yellow-500 ml-1">⭐</span>
                                                    <span>
                                                        {selectedProvider.rating > 0
                                                            ? selectedProvider.rating
                                                            : 'جديد'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>الخدمات المكتملة:</span>
                                                <span>{selectedProvider.completedJobs}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>إجمالي الأرباح:</span>
                                                <span>
                                                    {selectedProvider.earnings?.toLocaleString()}{' '}
                                                    ر.س
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>الحالة:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedProvider.status)}`}
                                                >
                                                    {selectedProvider.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Services */}
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-3">
                                            الخدمات المقدمة
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProvider.services.map((service, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Documents Status */}
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-3">
                                            حالة الوثائق
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span>الهوية الوطنية:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${
                                                        selectedProvider.documents?.nationalId
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {selectedProvider.documents?.nationalId
                                                        ? 'مرفوعة'
                                                        : 'غير مرفوعة'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>الرخصة المهنية:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${
                                                        selectedProvider.documents?.license
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {selectedProvider.documents?.license
                                                        ? 'مرفوعة'
                                                        : 'غير مرفوعة'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>التأمين:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${
                                                        selectedProvider.documents?.insurance
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {selectedProvider.documents?.insurance
                                                        ? 'مرفوع'
                                                        : 'غير مرفوع'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <div className="flex gap-3">
                                    {selectedProvider.status === 'في انتظار الموافقة' && (
                                        <>
                                            <button
                                                onClick={() => {
                                                    handleApprove(selectedProvider.id);
                                                    setShowProviderModal(false);
                                                }}
                                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                            >
                                                قبول
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleReject(selectedProvider.id);
                                                    setShowProviderModal(false);
                                                }}
                                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                            >
                                                رفض
                                            </button>
                                        </>
                                    )}
                                    <button
                                        onClick={() => setShowProviderModal(false)}
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                                    >
                                        إغلاق
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
