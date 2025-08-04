'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
    id: number;
    name: string;
    category: string;
    subCategory: string;
    description: string;
    price: string;
    duration: string;
    isActive: boolean;
    rating: number;
    completedJobs: number;
    availability: {
        days: string[];
        startTime: string;
        endTime: string;
    };
}

interface ServiceCategory {
    id: number;
    name: string;
    icon: string;
    subCategories: string[];
}

export default function ProviderServicesPage() {
    const [activeTab, setActiveTab] = useState<'active' | 'inactive' | 'add'>('active');
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);

    // Sample data for provider's services
    const [services, setServices] = useState<Service[]>([
        {
            id: 1,
            name: 'تنظيف المنزل العام',
            category: 'خدمات المنزل',
            subCategory: 'تنظيف عام',
            description: 'تنظيف شامل للمنزل يشمل جميع الغرف والحمامات والمطبخ',
            price: '45',
            duration: '2-3 ساعات',
            isActive: true,
            rating: 4.9,
            completedJobs: 156,
            availability: {
                days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
                startTime: '08:00',
                endTime: '18:00',
            },
        },
        {
            id: 2,
            name: 'تنظيف السجاد والموكيت',
            category: 'خدمات المنزل',
            subCategory: 'تنظيف متخصص',
            description: 'تنظيف عميق للسجاد والموكيت باستخدام أحدث المعدات',
            price: '25',
            duration: '1-2 ساعة',
            isActive: true,
            rating: 4.8,
            completedJobs: 89,
            availability: {
                days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء'],
                startTime: '09:00',
                endTime: '17:00',
            },
        },
        {
            id: 3,
            name: 'صيانة الأجهزة المنزلية',
            category: 'الصيانة والإصلاح',
            subCategory: 'صيانة الأجهزة',
            description: 'إصلاح وصيانة الأجهزة المنزلية المختلفة',
            price: '80',
            duration: '1-4 ساعات',
            isActive: false,
            rating: 4.7,
            completedJobs: 45,
            availability: {
                days: ['الأحد', 'الثلاثاء', 'الخميس'],
                startTime: '10:00',
                endTime: '16:00',
            },
        },
    ]);

    const serviceCategories: ServiceCategory[] = [
        {
            id: 1,
            name: 'خدمات المنزل',
            icon: '🏠',
            subCategories: [
                'تنظيف عام',
                'تنظيف متخصص',
                'تنظيف النوافذ',
                'تنظيف المطابخ',
                'تنظيف الحمامات',
                'تنظيف الأثاث',
            ],
        },
        {
            id: 2,
            name: 'الصيانة والإصلاح',
            icon: '🔧',
            subCategories: [
                'صيانة الأجهزة',
                'إصلاح السباكة',
                'إصلاح الكهرباء',
                'إصلاح التكييف',
                'صيانة الأثاث',
                'إصلاح الأقفال',
            ],
        },
        {
            id: 3,
            name: 'التوصيل والنقل',
            icon: '🚚',
            subCategories: [
                'توصيل الطعام',
                'توصيل البقالة',
                'نقل الأثاث',
                'نقل الأشخاص',
                'توصيل الوثائق',
                'خدمات البريد',
            ],
        },
        {
            id: 4,
            name: 'الجمال والعناية',
            icon: '💄',
            subCategories: [
                'قص الشعر',
                'العناية بالبشرة',
                'المكياج',
                'العناية بالأظافر',
                'التدليك',
                'إزالة الشعر',
            ],
        },
        {
            id: 5,
            name: 'البستنة والحدائق',
            icon: '🌱',
            subCategories: [
                'تنسيق الحدائق',
                'قص الأشجار',
                'زراعة النباتات',
                'ري الحدائق',
                'تنظيف الحدائق',
                'صيانة المسابح',
            ],
        },
        {
            id: 6,
            name: 'التعليم والتدريب',
            icon: '📚',
            subCategories: [
                'دروس خصوصية',
                'تعليم اللغات',
                'تعليم الموسيقى',
                'تعليم الرياضة',
                'تدريب مهني',
                'تعليم الحاسوب',
            ],
        },
        {
            id: 7,
            name: 'الرياضة واللياقة',
            icon: '💪',
            subCategories: ['تدريب شخصي', 'يوغا', 'بيلاتس', 'كارديو', 'رفع الأثقال', 'تدريب جماعي'],
        },
        {
            id: 8,
            name: 'التكنولوجيا والدعم الفني',
            icon: '💻',
            subCategories: [
                'إصلاح الحاسوب',
                'تطوير المواقع',
                'دعم تقني',
                'تصميم جرافيك',
                'إدارة الشبكات',
                'استشارات تقنية',
            ],
        },
    ];

    const [newService, setNewService] = useState<Partial<Service>>({
        name: '',
        category: '',
        subCategory: '',
        description: '',
        price: '',
        duration: '',
        isActive: true,
        availability: {
            days: [],
            startTime: '08:00',
            endTime: '18:00',
        },
    });

    const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

    const weekDays = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

    const toggleServiceStatus = (serviceId: number) => {
        setServices(
            services.map((service) =>
                service.id === serviceId ? { ...service, isActive: !service.isActive } : service,
            ),
        );
    };

    const deleteService = (serviceId: number) => {
        if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
            setServices(services.filter((service) => service.id !== serviceId));
        }
    };

    const handleAddService = () => {
        if (
            !newService.name ||
            !newService.category ||
            !newService.subCategory ||
            !newService.price
        ) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        const service: Service = {
            id: Date.now(),
            name: newService.name!,
            category: newService.category!,
            subCategory: newService.subCategory!,
            description: newService.description || '',
            price: newService.price!,
            duration: newService.duration || '1 ساعة',
            isActive: newService.isActive!,
            rating: 0,
            completedJobs: 0,
            availability: newService.availability!,
        };

        setServices([...services, service]);
        setNewService({
            name: '',
            category: '',
            subCategory: '',
            description: '',
            price: '',
            duration: '',
            isActive: true,
            availability: {
                days: [],
                startTime: '08:00',
                endTime: '18:00',
            },
        });
        setSelectedCategory(null);
        setShowAddModal(false);
    };

    const handleEditService = (service: Service) => {
        setEditingService(service);
        setNewService(service);
        // Set the selected category for editing
        const category = serviceCategories.find((cat) => cat.name === service.category);
        setSelectedCategory(category || null);
        setShowAddModal(true);
    };

    const handleUpdateService = () => {
        if (!editingService) return;

        setServices(
            services.map((service) =>
                service.id === editingService.id ? { ...service, ...newService } : service,
            ),
        );
        setEditingService(null);
        setShowAddModal(false);
        setNewService({
            name: '',
            category: '',
            subCategory: '',
            description: '',
            price: '',
            duration: '',
            isActive: true,
            availability: {
                days: [],
                startTime: '08:00',
                endTime: '18:00',
            },
        });
        setSelectedCategory(null);
    };

    const activeServices = services.filter((service) => service.isActive);
    const inactiveServices = services.filter((service) => !service.isActive);

    const toggleDay = (day: string) => {
        const currentDays = newService.availability?.days || [];
        const updatedDays = currentDays.includes(day)
            ? currentDays.filter((d) => d !== day)
            : [...currentDays, day];

        setNewService({
            ...newService,
            availability: {
                ...newService.availability!,
                days: updatedDays,
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="q:8d8na">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="el-zc82"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="2otrk6w">
                    <div className="flex items-center justify-between mb-4" data-oid="t1ekoa3">
                        <Link
                            href="/provider"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="il3pypi"
                        >
                            <span className="text-lg" data-oid="zmpsyme">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="6_h:q35">
                            <h1 className="text-lg font-bold" data-oid="r4djhv.">
                                إدارة خدماتي
                            </h1>
                            <p className="text-sm text-white/90" data-oid="r4jjvyq">
                                {services.length} خدمة • {activeServices.length} نشطة
                            </p>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="e0uwgt."
                        >
                            <span className="text-lg" data-oid="_602qm0">
                                +
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="babk1j:">
                <div className="grid grid-cols-3 gap-3 mb-6" data-oid="4kmi.-.">
                    <div
                        className="bg-white rounded-2xl p-3 shadow-lg text-center"
                        data-oid="k-ybb36"
                    >
                        <p className="text-xl font-bold text-green-600" data-oid="bo4749p">
                            {activeServices.length}
                        </p>
                        <p className="text-xs text-gray-600" data-oid="zgapo6b">
                            خدمة نشطة
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-3 shadow-lg text-center"
                        data-oid="i599_9o"
                    >
                        <p className="text-xl font-bold text-blue-600" data-oid="maiuq0y">
                            {services.reduce((sum, service) => sum + service.completedJobs, 0)}
                        </p>
                        <p className="text-xs text-gray-600" data-oid="4ez-w_-">
                            إجمالي الطلبات
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-3 shadow-lg text-center"
                        data-oid="o2oayu_"
                    >
                        <p className="text-xl font-bold text-orange-600" data-oid="3bsyxlc">
                            {(
                                services.reduce((sum, service) => sum + service.rating, 0) /
                                services.length
                            ).toFixed(1)}
                        </p>
                        <p className="text-xs text-gray-600" data-oid="bk7i1wm">
                            متوسط التقييم
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 mb-4" data-oid="9p_0bet">
                <div className="bg-white rounded-2xl p-1 shadow-sm" data-oid="mwot7-p">
                    <div className="flex" data-oid="imob2j1">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'active' ? 'bg-green-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="3n_m:1g"
                        >
                            نشطة ({activeServices.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('inactive')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'inactive'
                                    ? 'bg-gray-500 text-white'
                                    : 'text-gray-600'
                            }`}
                            data-oid="zcd82mn"
                        >
                            غير نشطة ({inactiveServices.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-sm mx-auto px-4 pb-24" data-oid="yds4:xf">
                <div className="space-y-4" data-oid="wl8ldua">
                    {(activeTab === 'active' ? activeServices : inactiveServices).map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="2n61ucm"
                        >
                            {/* Service Header */}
                            <div
                                className="flex items-start justify-between mb-3"
                                data-oid="j55x:8-"
                            >
                                <div className="flex-1" data-oid="lz-k7al">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="hgl5a.5"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="11u0d9j"
                                        >
                                            {service.name}
                                        </h3>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                service.isActive
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}
                                            data-oid="g-y8j_x"
                                        >
                                            {service.isActive ? 'نشطة' : 'غير نشطة'}
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="2fqcr47"
                                    >
                                        <p className="text-sm text-gray-600" data-oid="0i1dbhk">
                                            {service.category}
                                        </p>
                                        <span className="text-gray-400" data-oid="th1_17u">
                                            •
                                        </span>
                                        <p
                                            className="text-sm text-blue-600 font-medium"
                                            data-oid="zqh26y_"
                                        >
                                            {service.subCategory}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500" data-oid=":zrefmz">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="text-left" data-oid="th0kd35">
                                    <p
                                        className="text-lg font-bold text-green-600"
                                        data-oid="jzjiqj7"
                                    >
                                        {service.price} ريال
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid=".8qhk.p">
                                        {service.duration}
                                    </p>
                                </div>
                            </div>

                            {/* Service Stats */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-3" data-oid="cr-6m3w">
                                <div
                                    className="grid grid-cols-3 gap-4 text-center"
                                    data-oid=":nh1na8"
                                >
                                    <div data-oid="wdhb-0s">
                                        <div
                                            className="flex items-center justify-center space-x-1 space-x-reverse"
                                            data-oid="c5cqgrh"
                                        >
                                            <span className="text-yellow-500" data-oid="9aawe3y">
                                                ⭐
                                            </span>
                                            <p
                                                className="text-sm font-bold text-orange-600"
                                                data-oid=":9zuvgg"
                                            >
                                                {service.rating}
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500" data-oid="qvb5dy4">
                                            التقييم
                                        </p>
                                    </div>
                                    <div data-oid="gwix.v_">
                                        <p
                                            className="text-sm font-bold text-blue-600"
                                            data-oid="q1384j:"
                                        >
                                            {service.completedJobs}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="dptsjik">
                                            طلب مكتمل
                                        </p>
                                    </div>
                                    <div data-oid="v1y1e7g">
                                        <p
                                            className="text-sm font-bold text-purple-600"
                                            data-oid="ojr__9m"
                                        >
                                            {service.availability.days.length} أيام
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="5.uxm51">
                                            متاح
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mb-3" data-oid="s4ic0tp">
                                <p className="text-sm text-gray-600 mb-2" data-oid="x.2b:sf">
                                    أوقات العمل:
                                </p>
                                <div className="flex flex-wrap gap-1 mb-2" data-oid="kubff--">
                                    {service.availability.days.map((day) => (
                                        <span
                                            key={day}
                                            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                                            data-oid="i8-lbzb"
                                        >
                                            {day}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500" data-oid="h7:9ctq">
                                    من {service.availability.startTime} إلى{' '}
                                    {service.availability.endTime}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-2 space-x-reverse" data-oid=":g_7zrp">
                                <button
                                    onClick={() => toggleServiceStatus(service.id)}
                                    className={`flex-1 py-2 rounded-xl font-semibold text-sm ${
                                        service.isActive
                                            ? 'bg-gray-200 text-gray-700'
                                            : 'bg-green-500 text-white'
                                    }`}
                                    data-oid="a0oyd2s"
                                >
                                    {service.isActive ? 'إيقاف' : 'تفعيل'}
                                </button>
                                <button
                                    onClick={() => handleEditService(service)}
                                    className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-sm"
                                    data-oid="v3japoy"
                                >
                                    تعديل
                                </button>
                                <button
                                    onClick={() => deleteService(service.id)}
                                    className="px-4 py-2 bg-red-100 text-red-600 rounded-xl"
                                    data-oid="he7x29c"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}

                    {(activeTab === 'active' ? activeServices : inactiveServices).length === 0 && (
                        <div className="text-center py-12" data-oid="f3qllso">
                            <div className="text-6xl mb-4" data-oid="igrif_a">
                                {activeTab === 'active' ? '📋' : '😴'}
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="rwwt:6h"
                            >
                                {activeTab === 'active'
                                    ? 'لا توجد خدمات نشطة'
                                    : 'لا توجد خدمات غير نشطة'}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6" data-oid="2u77yj5">
                                {activeTab === 'active'
                                    ? 'قم بإضافة خدمة جديدة أو تفعيل خدمة موجودة'
                                    : 'جميع خدماتك نشطة حالياً'}
                            </p>
                            {activeTab === 'active' && (
                                <button
                                    onClick={() => setShowAddModal(true)}
                                    className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold"
                                    data-oid="7i5h-:g"
                                >
                                    إضافة خدمة جديدة
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Add/Edit Service Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="---k.6x">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-y-auto"
                        data-oid="al2ruc2"
                    >
                        <div className="p-6" data-oid="pp5b-1y">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                                data-oid="4cm3anq"
                            ></div>

                            <h2
                                className="text-xl font-bold text-gray-800 mb-6 text-center"
                                data-oid="w8s.ude"
                            >
                                {editingService ? 'تعديل الخدمة' : 'إضافة خدمة جديدة'}
                            </h2>

                            <div className="space-y-4" data-oid="mj72mit">
                                {/* Service Name */}
                                <div data-oid="q:la2fv">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="k0_10ej"
                                    >
                                        اسم الخدمة *
                                    </label>
                                    <input
                                        type="text"
                                        value={newService.name || ''}
                                        onChange={(e) =>
                                            setNewService({ ...newService, name: e.target.value })
                                        }
                                        className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                        placeholder="مثال: تنظيف المنزل العام"
                                        data-oid="_3nxh-t"
                                    />
                                </div>

                                {/* Category */}
                                <div data-oid="gcbhtmq">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="a216ecl"
                                    >
                                        التصنيف الرئيسي *
                                    </label>
                                    <select
                                        value={newService.category || ''}
                                        onChange={(e) => {
                                            const categoryName = e.target.value;
                                            const category = serviceCategories.find(
                                                (cat) => cat.name === categoryName,
                                            );
                                            setSelectedCategory(category || null);
                                            setNewService({
                                                ...newService,
                                                category: categoryName,
                                                subCategory: '', // Reset subcategory when main category changes
                                            });
                                        }}
                                        className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                        data-oid="086_:4s"
                                    >
                                        <option value="" data-oid="vav_.bo">
                                            اختر التصنيف الرئيسي
                                        </option>
                                        {serviceCategories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.name}
                                                data-oid="id3f47x"
                                            >
                                                {category.icon} {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sub Category */}
                                {selectedCategory && (
                                    <div data-oid="rfsmzjp">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="71zs7_m"
                                        >
                                            التصنيف الفرعي *
                                        </label>
                                        <select
                                            value={newService.subCategory || ''}
                                            onChange={(e) =>
                                                setNewService({
                                                    ...newService,
                                                    subCategory: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                            data-oid=":ry5ryf"
                                        >
                                            <option value="" data-oid="o-w:fx1">
                                                اختر التصنيف الفرعي
                                            </option>
                                            {selectedCategory.subCategories.map(
                                                (subCategory, index) => (
                                                    <option
                                                        key={index}
                                                        value={subCategory}
                                                        data-oid="t7t-x19"
                                                    >
                                                        {subCategory}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </div>
                                )}

                                {/* Description */}
                                <div data-oid="1tb.oqq">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid=".:q8m3m"
                                    >
                                        وصف الخدمة
                                    </label>
                                    <textarea
                                        value={newService.description || ''}
                                        onChange={(e) =>
                                            setNewService({
                                                ...newService,
                                                description: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500 h-20 resize-none"
                                        placeholder="وصف مختصر للخدمة..."
                                        data-oid="z.vsji3"
                                    />
                                </div>

                                {/* Price and Duration */}
                                <div className="grid grid-cols-2 gap-4" data-oid="nlgoluj">
                                    <div data-oid="hlshn8e">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="1-3js8-"
                                        >
                                            السعر (ريال) *
                                        </label>
                                        <input
                                            type="number"
                                            value={newService.price || ''}
                                            onChange={(e) =>
                                                setNewService({
                                                    ...newService,
                                                    price: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                            placeholder="45"
                                            data-oid="zuaa65z"
                                        />
                                    </div>
                                    <div data-oid="6uq4s5-">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="mn6hw6m"
                                        >
                                            المدة المتوقعة
                                        </label>
                                        <input
                                            type="text"
                                            value={newService.duration || ''}
                                            onChange={(e) =>
                                                setNewService({
                                                    ...newService,
                                                    duration: e.target.value,
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                            placeholder="2-3 ساعات"
                                            data-oid=":h34icb"
                                        />
                                    </div>
                                </div>

                                {/* Working Days */}
                                <div data-oid="a8s_lgi">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="1gers8b"
                                    >
                                        أيام العمل
                                    </label>
                                    <div className="grid grid-cols-4 gap-2" data-oid="9saegzo">
                                        {weekDays.map((day) => (
                                            <button
                                                key={day}
                                                type="button"
                                                onClick={() => toggleDay(day)}
                                                className={`p-2 rounded-lg text-sm font-semibold transition-colors ${
                                                    newService.availability?.days.includes(day)
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-gray-100 text-gray-700'
                                                }`}
                                                data-oid="m:3ewv1"
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="grid grid-cols-2 gap-4" data-oid="ux-d5m2">
                                    <div data-oid="cs4dfbe">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="aj772u0"
                                        >
                                            من الساعة
                                        </label>
                                        <input
                                            type="time"
                                            value={newService.availability?.startTime || '08:00'}
                                            onChange={(e) =>
                                                setNewService({
                                                    ...newService,
                                                    availability: {
                                                        ...newService.availability!,
                                                        startTime: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                            data-oid="d7j0xsk"
                                        />
                                    </div>
                                    <div data-oid="wvs15m3">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="nrqv9dr"
                                        >
                                            إلى الساعة
                                        </label>
                                        <input
                                            type="time"
                                            value={newService.availability?.endTime || '18:00'}
                                            onChange={(e) =>
                                                setNewService({
                                                    ...newService,
                                                    availability: {
                                                        ...newService.availability!,
                                                        endTime: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                            data-oid="tg94imo"
                                        />
                                    </div>
                                </div>

                                {/* Active Status */}
                                <div
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                                    data-oid="14qmqye"
                                >
                                    <div data-oid="8pgoh:a">
                                        <h4
                                            className="font-semibold text-gray-800"
                                            data-oid="bhirydy"
                                        >
                                            تفعيل الخدمة
                                        </h4>
                                        <p className="text-sm text-gray-600" data-oid="ejjxc22">
                                            {newService.isActive
                                                ? 'الخدمة متاحة للعملاء'
                                                : 'الخدمة غير متاحة'}
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setNewService({
                                                ...newService,
                                                isActive: !newService.isActive,
                                            })
                                        }
                                        className={`w-14 h-8 rounded-full transition-colors ${
                                            newService.isActive ? 'bg-green-500' : 'bg-gray-400'
                                        } relative`}
                                        data-oid="j.6ks-v"
                                    >
                                        <div
                                            className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                                newService.isActive
                                                    ? 'translate-x-6'
                                                    : 'translate-x-1'
                                            }`}
                                            data-oid="6kbfu_b"
                                        ></div>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="flex space-x-3 space-x-reverse mt-6" data-oid="584oj8-">
                                <button
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setEditingService(null);
                                        setNewService({
                                            name: '',
                                            category: '',
                                            subCategory: '',
                                            description: '',
                                            price: '',
                                            duration: '',
                                            isActive: true,
                                            availability: {
                                                days: [],
                                                startTime: '08:00',
                                                endTime: '18:00',
                                            },
                                        });
                                        setSelectedCategory(null);
                                    }}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
                                    data-oid="fyvj8-4"
                                >
                                    إلغاء
                                </button>
                                <button
                                    onClick={
                                        editingService ? handleUpdateService : handleAddService
                                    }
                                    className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                    data-oid="e:m4d5p"
                                >
                                    {editingService ? 'حفظ التعديلات' : 'إضافة الخدمة'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="87-kgj0"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="-yq9bgu">
                    <div className="flex justify-around" data-oid="3e.fd3e">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="szcdq_3"
                        >
                            <span className="text-xl" data-oid="3gq-_.a">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="xj8p1wx">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="k:2z987"
                        >
                            <span className="text-xl" data-oid="66f8:hg">
                                📋
                            </span>
                            <span className="text-xs" data-oid="50:e2lc">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/services"
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="9f4mgqw"
                        >
                            <span className="text-xl" data-oid="07e1gqc">
                                🛠️
                            </span>
                            <span className="text-xs font-semibold" data-oid="4k9.m8w">
                                خدماتي
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="0icm1d1"
                        >
                            <span className="text-xl" data-oid="-6t3kt0">
                                💰
                            </span>
                            <span className="text-xs" data-oid=".j4cf0d">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ihuo.5m"
                        >
                            <span className="text-xl" data-oid=".11sjsx">
                                👤
                            </span>
                            <span className="text-xs" data-oid="_cgspj7">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
