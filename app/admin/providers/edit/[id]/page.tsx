'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
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
    documents: {
        nationalId: boolean;
        license: boolean;
        insurance: boolean;
    };
    earnings: number;
    location: string;
    address?: string;
    nationalId?: string;
    licenseNumber?: string;
    bankAccount?: string;
    emergencyContact?: string;
    bio?: string;
    workingHours?: {
        start: string;
        end: string;
        days: string[];
    };
    serviceAreas?: string[];
    commission?: number;
}

const availableServices = [
    'تنظيف المنزل',
    'صيانة عامة',
    'صيانة السباكة',
    'صيانة الكهرباء',
    'خدمات التجميل',
    'تصليح الأجهزة',
    'خدمات الحدائق',
    'خدمات الطبخ',
    'خدمات التنظيف التجاري',
    'صيانة المكيفات',
];

const availableCities = [
    'الرياض',
    'جدة',
    'الدمام',
    'مكة المكرمة',
    'المدينة المنورة',
    'الطائف',
    'تبوك',
    'بريدة',
    'خميس مشيط',
    'الأحساء',
];

const statusOptions = [
    { value: 'نشط', label: 'نشط', color: 'green' },
    { value: 'معلق', label: 'معلق', color: 'yellow' },
    { value: 'في انتظار الموافقة', label: 'في انتظار الموافقة', color: 'blue' },
    { value: 'مرفوض', label: 'مرفوض', color: 'red' },
    { value: 'غير نشط', label: 'غير نشط', color: 'gray' },
];

export default function EditProvider() {
    const router = useRouter();
    const params = useParams();
    const providerId = params.id as string;

    const [provider, setProvider] = useState<Provider | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('basic');

    // Mock data - in real app, this would come from API
    const mockProviders: Provider[] = [
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
            address: 'حي النرجس، شارع الأمير محمد بن عبدالعزيز',
            nationalId: '1234567890',
            licenseNumber: 'LIC-2024-001',
            bankAccount: 'SA1234567890123456789012',
            emergencyContact: '0509876543',
            bio: 'خبرة 5 سنوات في مجال التنظيف والصيانة العامة',
            workingHours: {
                start: '08:00',
                end: '18:00',
                days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
            },
            serviceAreas: ['الرياض', 'الخرج'],
            commission: 15,
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
            address: 'حي الزهراء، شارع الملك عبدالعزيز',
            nationalId: '2345678901',
            licenseNumber: 'LIC-2024-002',
            bankAccount: 'SA2345678901234567890123',
            emergencyContact: '0508765432',
            bio: 'متخصصة في تنظيف المنازل مع خبرة 7 سنوات',
            workingHours: {
                start: '09:00',
                end: '17:00',
                days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'السبت'],
            },
            serviceAreas: ['جدة', 'مكة المكرمة'],
            commission: 12,
        },
    ];

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const foundProvider = mockProviders.find((p) => p.id === parseInt(providerId));
            setProvider(foundProvider || null);
            setLoading(false);
        }, 1000);
    }, [providerId]);

    const handleInputChange = (field: string, value: any) => {
        if (!provider) return;

        setProvider((prev) => ({
            ...prev!,
            [field]: value,
        }));
    };

    const handleNestedInputChange = (parentField: string, field: string, value: any) => {
        if (!provider) return;

        setProvider((prev) => ({
            ...prev!,
            [parentField]: {
                ...(prev![parentField as keyof Provider] as any),
                [field]: value,
            },
        }));
    };

    const handleServiceToggle = (service: string) => {
        if (!provider) return;

        const updatedServices = provider.services.includes(service)
            ? provider.services.filter((s) => s !== service)
            : [...provider.services, service];

        handleInputChange('services', updatedServices);
    };

    const handleServiceAreaToggle = (area: string) => {
        if (!provider) return;

        const currentAreas = provider.serviceAreas || [];
        const updatedAreas = currentAreas.includes(area)
            ? currentAreas.filter((a) => a !== area)
            : [...currentAreas, area];

        handleInputChange('serviceAreas', updatedAreas);
    };

    const handleWorkingDayToggle = (day: string) => {
        if (!provider?.workingHours) return;

        const currentDays = provider.workingHours.days;
        const updatedDays = currentDays.includes(day)
            ? currentDays.filter((d) => d !== day)
            : [...currentDays, day];

        handleNestedInputChange('workingHours', 'days', updatedDays);
    };

    const handleSave = async () => {
        setSaving(true);

        // Simulate API call
        setTimeout(() => {
            alert('تم حفظ التغييرات بنجاح');
            setSaving(false);
            router.push('/admin/providers');
        }, 1500);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">جاري تحميل بيانات مقدم الخدمة...</p>
                </div>
            </div>
        );
    }

    if (!provider) {
        return (
            <div className="p-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">مقدم الخدمة غير موجود</h1>
                    <p className="text-gray-600 mb-6">لم يتم العثور على مقدم الخدمة المطلوب</p>
                    <Link
                        href="/admin/providers"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        العودة لقائمة مقدمي الخدمات
                    </Link>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'basic', label: 'المعلومات الأساسية', icon: '👤' },
        { id: 'services', label: 'الخدمات والمناطق', icon: '🔧' },
        { id: 'documents', label: 'الوثائق والتحقق', icon: '📄' },
        { id: 'financial', label: 'المعلومات المالية', icon: '💰' },
        { id: 'settings', label: 'الإعدادات المتقدمة', icon: '⚙️' },
    ];

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">تعديل مقدم الخدمة</h1>
                        <p className="text-gray-600">
                            تعديل معلومات وإعدادات مقدم الخدمة: {provider.name}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="/admin/providers"
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                        >
                            إلغاء
                        </Link>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
                        >
                            {saving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Provider Status Card */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center ml-4">
                            <span className="text-white font-bold text-xl">
                                {provider.name.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-semibold">{provider.name}</h3>
                                {provider.verified && (
                                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                        موثق
                                    </span>
                                )}
                                <span
                                    className={`px-2 py-1 text-xs rounded-full ${
                                        provider.status === 'نشط'
                                            ? 'bg-green-100 text-green-800'
                                            : provider.status === 'معلق'
                                              ? 'bg-yellow-100 text-yellow-800'
                                              : provider.status === 'في انتظار الموافقة'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-red-100 text-red-800'
                                    }`}
                                >
                                    {provider.status}
                                </span>
                            </div>
                            <p className="text-gray-600">
                                ID: {provider.id} • انضم في {provider.joinDate}
                            </p>
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="flex items-center mb-1">
                            <span className="text-yellow-500 ml-1">⭐</span>
                            <span className="font-semibold">{provider.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            {provider.completedJobs} خدمة مكتملة
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow">
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-8 space-x-reverse px-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <span className="ml-2">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="p-6">
                    {/* Basic Information Tab */}
                    {activeTab === 'basic' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الاسم الكامل *
                                    </label>
                                    <input
                                        type="text"
                                        value={provider.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        البريد الإلكتروني *
                                    </label>
                                    <input
                                        type="email"
                                        value={provider.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        رقم الهاتف *
                                    </label>
                                    <input
                                        type="tel"
                                        value={provider.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        رقم الهوية الوطنية
                                    </label>
                                    <input
                                        type="text"
                                        value={provider.nationalId || ''}
                                        onChange={(e) =>
                                            handleInputChange('nationalId', e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        المدينة *
                                    </label>
                                    <select
                                        value={provider.location}
                                        onChange={(e) =>
                                            handleInputChange('location', e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {availableCities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الحالة *
                                    </label>
                                    <select
                                        value={provider.status}
                                        onChange={(e) =>
                                            handleInputChange('status', e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {statusOptions.map((status) => (
                                            <option key={status.value} value={status.value}>
                                                {status.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    العنوان
                                </label>
                                <textarea
                                    value={provider.address || ''}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    نبذة تعريفية
                                </label>
                                <textarea
                                    value={provider.bio || ''}
                                    onChange={(e) => handleInputChange('bio', e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="اكتب نبذة مختصرة عن مقدم الخدمة وخبراته..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    رقم الاتصال في حالات الطوارئ
                                </label>
                                <input
                                    type="tel"
                                    value={provider.emergencyContact || ''}
                                    onChange={(e) =>
                                        handleInputChange('emergencyContact', e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    )}

                    {/* Services and Areas Tab */}
                    {activeTab === 'services' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    الخدمات المقدمة
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {availableServices.map((service) => (
                                        <label key={service} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={provider.services.includes(service)}
                                                onChange={() => handleServiceToggle(service)}
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
                                            />
                                            <span className="text-sm">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    مناطق الخدمة
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {availableCities.map((city) => (
                                        <label key={city} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={(provider.serviceAreas || []).includes(
                                                    city,
                                                )}
                                                onChange={() => handleServiceAreaToggle(city)}
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
                                            />
                                            <span className="text-sm">{city}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    ساعات العمل
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            من الساعة
                                        </label>
                                        <input
                                            type="time"
                                            value={provider.workingHours?.start || ''}
                                            onChange={(e) =>
                                                handleNestedInputChange(
                                                    'workingHours',
                                                    'start',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            إلى الساعة
                                        </label>
                                        <input
                                            type="time"
                                            value={provider.workingHours?.end || ''}
                                            onChange={(e) =>
                                                handleNestedInputChange(
                                                    'workingHours',
                                                    'end',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        أيام العمل
                                    </label>
                                    <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                                        {[
                                            'الأحد',
                                            'الاثنين',
                                            'الثلاثاء',
                                            'الأربعاء',
                                            'الخميس',
                                            'الجمعة',
                                            'السبت',
                                        ].map((day) => (
                                            <label key={day} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={(
                                                        provider.workingHours?.days || []
                                                    ).includes(day)}
                                                    onChange={() => handleWorkingDayToggle(day)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-1"
                                                />
                                                <span className="text-xs">{day}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Documents Tab */}
                    {activeTab === 'documents' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    حالة الوثائق
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h4 className="font-medium">الهوية الوطنية</h4>
                                            <p className="text-sm text-gray-600">
                                                صورة من الهوية الوطنية
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full ${
                                                    provider.documents.nationalId
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {provider.documents.nationalId
                                                    ? 'مرفوعة'
                                                    : 'غير مرفوعة'}
                                            </span>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={provider.documents.nationalId}
                                                    onChange={(e) =>
                                                        handleNestedInputChange(
                                                            'documents',
                                                            'nationalId',
                                                            e.target.checked,
                                                        )
                                                    }
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="mr-2 text-sm">موافق عليها</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h4 className="font-medium">الرخصة المهنية</h4>
                                            <p className="text-sm text-gray-600">
                                                رخصة مزاولة المهنة
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full ${
                                                    provider.documents.license
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {provider.documents.license
                                                    ? 'مرفوعة'
                                                    : 'غير مرفوعة'}
                                            </span>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={provider.documents.license}
                                                    onChange={(e) =>
                                                        handleNestedInputChange(
                                                            'documents',
                                                            'license',
                                                            e.target.checked,
                                                        )
                                                    }
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="mr-2 text-sm">موافق عليها</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h4 className="font-medium">وثيقة التأمين</h4>
                                            <p className="text-sm text-gray-600">
                                                تأمين المسؤولية المهنية
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full ${
                                                    provider.documents.insurance
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {provider.documents.insurance
                                                    ? 'مرفوعة'
                                                    : 'غير مرفوعة'}
                                            </span>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={provider.documents.insurance}
                                                    onChange={(e) =>
                                                        handleNestedInputChange(
                                                            'documents',
                                                            'insurance',
                                                            e.target.checked,
                                                        )
                                                    }
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="mr-2 text-sm">موافق عليها</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    معلومات الرخصة
                                </h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        رقم الرخصة المهنية
                                    </label>
                                    <input
                                        type="text"
                                        value={provider.licenseNumber || ''}
                                        onChange={(e) =>
                                            handleInputChange('licenseNumber', e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    حالة التحقق
                                </h3>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={provider.verified}
                                        onChange={(e) =>
                                            handleInputChange('verified', e.target.checked)
                                        }
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
                                    />
                                    <span>مقدم خدمة موثق</span>
                                </label>
                                <p className="text-sm text-gray-600 mt-1">
                                    عند تفعيل هذا الخيار، سيظهر مقدم الخدمة كموثق في التطبيق
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Financial Tab */}
                    {activeTab === 'financial' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        إجمالي الأرباح (ر.س)
                                    </label>
                                    <input
                                        type="number"
                                        value={provider.earnings}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'earnings',
                                                parseFloat(e.target.value) || 0,
                                            )
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        readOnly
                                    />
                                    <p className="text-sm text-gray-600 mt-1">
                                        هذا الحقل للعرض فقط
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        نسبة العمولة (%)
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        value={provider.commission || 15}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'commission',
                                                parseFloat(e.target.value) || 0,
                                            )
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    رقم الحساب البنكي (IBAN)
                                </label>
                                <input
                                    type="text"
                                    value={provider.bankAccount || ''}
                                    onChange={(e) =>
                                        handleInputChange('bankAccount', e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="SA1234567890123456789012"
                                />
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-3">إحصائيات مالية</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-green-600">
                                            {provider.earnings.toLocaleString()}
                                        </p>
                                        <p className="text-sm text-gray-600">إجمالي الأرباح</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-blue-600">
                                            {Math.round(
                                                (provider.earnings * (provider.commission || 15)) /
                                                    100,
                                            ).toLocaleString()}
                                        </p>
                                        <p className="text-sm text-gray-600">عمولة المنصة</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-purple-600">
                                            {Math.round(
                                                provider.earnings / provider.completedJobs || 0,
                                            )}
                                        </p>
                                        <p className="text-sm text-gray-600">متوسط الربح/خدمة</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-orange-600">
                                            {provider.completedJobs}
                                        </p>
                                        <p className="text-sm text-gray-600">الخدمات المكتملة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Advanced Settings Tab */}
                    {activeTab === 'settings' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    إعدادات الحساب
                                </h3>
                                <div className="space-y-4">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={provider.verified}
                                            onChange={(e) =>
                                                handleInputChange('verified', e.target.checked)
                                            }
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
                                        />
                                        <span>حساب موثق</span>
                                    </label>

                                    <div className="border-t pt-4">
                                        <h4 className="font-medium text-gray-900 mb-2">
                                            إجراءات الحساب
                                        </h4>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => {
                                                    if (
                                                        confirm('هل أنت متأكد من تعليق هذا الحساب؟')
                                                    ) {
                                                        handleInputChange('status', 'معلق');
                                                    }
                                                }}
                                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                                            >
                                                تعليق الحساب
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (
                                                        confirm(
                                                            'هل أنت متأكد من إلغاء تفعيل هذا الحساب؟',
                                                        )
                                                    ) {
                                                        handleInputChange('status', 'غير نشط');
                                                    }
                                                }}
                                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                            >
                                                إلغاء التفعيل
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleInputChange('status', 'نشط');
                                                }}
                                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                            >
                                                تفعيل الحساب
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <h4 className="font-medium text-red-900 mb-2">منطقة الخطر</h4>
                                <p className="text-sm text-red-700 mb-3">
                                    هذه الإجراءات لا يمكن التراجع عنها. يرجى التأكد قبل المتابعة.
                                </p>
                                <button
                                    onClick={() => {
                                        if (
                                            confirm(
                                                'هل أنت متأكد من حذف هذا الحساب نهائياً؟ هذا الإجراء لا يمكن التراجع عنه.',
                                            )
                                        ) {
                                            alert('تم حذف الحساب');
                                            router.push('/admin/providers');
                                        }
                                    }}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                >
                                    حذف الحساب نهائياً
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
