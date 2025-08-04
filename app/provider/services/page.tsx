'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
    id: number;
    name: string;
    category: string;
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
        { id: 1, name: 'خدمات المنزل', icon: '🏠' },
        { id: 2, name: 'الصيانة والإصلاح', icon: '🔧' },
        { id: 3, name: 'التوصيل والنقل', icon: '🚚' },
        { id: 4, name: 'الجمال والعناية', icon: '💄' },
        { id: 5, name: 'البستنة والحدائق', icon: '🌱' },
        { id: 6, name: 'التعليم والتدريب', icon: '📚' },
        { id: 7, name: 'الرياضة واللياقة', icon: '💪' },
        { id: 8, name: 'التكنولوجيا والدعم الفني', icon: '💻' },
    ];

    const [newService, setNewService] = useState<Partial<Service>>({
        name: '',
        category: '',
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
        if (!newService.name || !newService.category || !newService.price) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        const service: Service = {
            id: Date.now(),
            name: newService.name!,
            category: newService.category!,
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
        setShowAddModal(false);
    };

    const handleEditService = (service: Service) => {
        setEditingService(service);
        setNewService(service);
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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="fxfq2g.">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="0ngq:cw"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="0-8ldr3">
                    <div className="flex items-center justify-between mb-4" data-oid="tislu41">
                        <Link
                            href="/provider"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="tt-_qjg"
                        >
                            <span className="text-lg" data-oid="jdeptix">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="p82npe9">
                            <h1 className="text-lg font-bold" data-oid="zs6r1ud">
                                إدارة خدماتي
                            </h1>
                            <p className="text-sm text-white/90" data-oid="1cb87zp">
                                {services.length} خدمة • {activeServices.length} نشطة
                            </p>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="1w6i82l"
                        >
                            <span className="text-lg" data-oid="i81j3jb">
                                +
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10" data-oid="_8nryl6">
                <div className="grid grid-cols-3 gap-3 mb-6" data-oid="3wemfgd">
                    <div
                        className="bg-white rounded-2xl p-3 shadow-lg text-center"
                        data-oid="tiol-6g"
                    >
                        <p className="text-xl font-bold text-green-600" data-oid="-klhb6x">
                            {activeServices.length}
                        </p>
                        <p className="text-xs text-gray-600" data-oid="qnmou65">
                            خدمة نشطة
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-3 shadow-lg text-center"
                        data-oid="k_lpb71"
                    >
                        <p className="text-xl font-bold text-blue-600" data-oid="17seiq.">
                            {services.reduce((sum, service) => sum + service.completedJobs, 0)}
                        </p>
                        <p className="text-xs text-gray-600" data-oid="g:xo01v">
                            إجمالي الطلبات
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-3 shadow-lg text-center"
                        data-oid="la4y2gn"
                    >
                        <p className="text-xl font-bold text-orange-600" data-oid="jxjetee">
                            {(
                                services.reduce((sum, service) => sum + service.rating, 0) /
                                services.length
                            ).toFixed(1)}
                        </p>
                        <p className="text-xs text-gray-600" data-oid="debnsio">
                            متوسط التقييم
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 mb-4" data-oid="orqn69w">
                <div className="bg-white rounded-2xl p-1 shadow-sm" data-oid="y1pw9i.">
                    <div className="flex" data-oid="o83hsau">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                                activeTab === 'active' ? 'bg-green-500 text-white' : 'text-gray-600'
                            }`}
                            data-oid="tx:zcbr"
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
                            data-oid="ooi-3s0"
                        >
                            غير نشطة ({inactiveServices.length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-sm mx-auto px-4 pb-24" data-oid="qx4le1j">
                <div className="space-y-4" data-oid="jwrnlyr">
                    {(activeTab === 'active' ? activeServices : inactiveServices).map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            data-oid="a_v-wox"
                        >
                            {/* Service Header */}
                            <div
                                className="flex items-start justify-between mb-3"
                                data-oid="szlat71"
                            >
                                <div className="flex-1" data-oid="ygko02g">
                                    <div
                                        className="flex items-center space-x-2 space-x-reverse mb-1"
                                        data-oid="1.81d3a"
                                    >
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="zjduxk8"
                                        >
                                            {service.name}
                                        </h3>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                service.isActive
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}
                                            data-oid="b-47a22"
                                        >
                                            {service.isActive ? 'نشطة' : 'غير نشطة'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1" data-oid="n12kzy:">
                                        {service.category}
                                    </p>
                                    <p className="text-sm text-gray-500" data-oid="ma3r4:l">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="text-left" data-oid="m4f6cym">
                                    <p
                                        className="text-lg font-bold text-green-600"
                                        data-oid="lq8zlez"
                                    >
                                        {service.price} ريال
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid=":f4ck:6">
                                        {service.duration}
                                    </p>
                                </div>
                            </div>

                            {/* Service Stats */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-3" data-oid="e38kroe">
                                <div
                                    className="grid grid-cols-3 gap-4 text-center"
                                    data-oid="12kfpoa"
                                >
                                    <div data-oid="m5p5h49">
                                        <div
                                            className="flex items-center justify-center space-x-1 space-x-reverse"
                                            data-oid="x419rfm"
                                        >
                                            <span className="text-yellow-500" data-oid="f.72007">
                                                ⭐
                                            </span>
                                            <p
                                                className="text-sm font-bold text-orange-600"
                                                data-oid="-j8vklz"
                                            >
                                                {service.rating}
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500" data-oid="yrt:-1o">
                                            التقييم
                                        </p>
                                    </div>
                                    <div data-oid="uff.e43">
                                        <p
                                            className="text-sm font-bold text-blue-600"
                                            data-oid="y2qllhf"
                                        >
                                            {service.completedJobs}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="e8v9lgr">
                                            طلب مكتمل
                                        </p>
                                    </div>
                                    <div data-oid="3mtlfbo">
                                        <p
                                            className="text-sm font-bold text-purple-600"
                                            data-oid="ztk:54e"
                                        >
                                            {service.availability.days.length} أيام
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="uj35rf2">
                                            متاح
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mb-3" data-oid="4szgrte">
                                <p className="text-sm text-gray-600 mb-2" data-oid="i8a6_6k">
                                    أوقات العمل:
                                </p>
                                <div className="flex flex-wrap gap-1 mb-2" data-oid="..1xq-m">
                                    {service.availability.days.map((day) => (
                                        <span
                                            key={day}
                                            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                                            data-oid="vpzxg7h"
                                        >
                                            {day}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500" data-oid="0lc30db">
                                    من {service.availability.startTime} إلى{' '}
                                    {service.availability.endTime}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-2 space-x-reverse" data-oid="_wqw2ap">
                                <button
                                    onClick={() => toggleServiceStatus(service.id)}
                                    className={`flex-1 py-2 rounded-xl font-semibold text-sm ${
                                        service.isActive
                                            ? 'bg-gray-200 text-gray-700'
                                            : 'bg-green-500 text-white'
                                    }`}
                                    data-oid="zddpii6"
                                >
                                    {service.isActive ? 'إيقاف' : 'تفعيل'}
                                </button>
                                <button
                                    onClick={() => handleEditService(service)}
                                    className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-semibold text-sm"
                                    data-oid="pd7_x0q"
                                >
                                    تعديل
                                </button>
                                <button
                                    onClick={() => deleteService(service.id)}
                                    className="px-4 py-2 bg-red-100 text-red-600 rounded-xl"
                                    data-oid=":jrjsn5"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}

                    {(activeTab === 'active' ? activeServices : inactiveServices).length === 0 && (
                        <div className="text-center py-12" data-oid="swsej4t">
                            <div className="text-6xl mb-4" data-oid="1w1ws39">
                                {activeTab === 'active' ? '📋' : '😴'}
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                data-oid="0nlouz5"
                            >
                                {activeTab === 'active'
                                    ? 'لا توجد خدمات نشطة'
                                    : 'لا توجد خدمات غير نشطة'}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6" data-oid="x_t-emc">
                                {activeTab === 'active'
                                    ? 'قم بإضافة خدمة جديدة أو تفعيل خدمة موجودة'
                                    : 'جميع خدماتك نشطة حالياً'}
                            </p>
                            {activeTab === 'active' && (
                                <button
                                    onClick={() => setShowAddModal(true)}
                                    className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold"
                                    data-oid="42_:1ej"
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
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="8fn897b">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-y-auto"
                        data-oid="pz5v-56"
                    >
                        <div className="p-6" data-oid="1b.e3:y">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"
                                data-oid="jm:w8df"
                            ></div>

                            <h2
                                className="text-xl font-bold text-gray-800 mb-6 text-center"
                                data-oid="-8gb1v2"
                            >
                                {editingService ? 'تعديل الخدمة' : 'إضافة خدمة جديدة'}
                            </h2>

                            <div className="space-y-4" data-oid="6.h-oho">
                                {/* Service Name */}
                                <div data-oid="eyku1l9">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="1d9stsr"
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
                                        data-oid="i.bn-y4"
                                    />
                                </div>

                                {/* Category */}
                                <div data-oid="gp9c_74">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="y-n8fvw"
                                    >
                                        التصنيف *
                                    </label>
                                    <select
                                        value={newService.category || ''}
                                        onChange={(e) =>
                                            setNewService({
                                                ...newService,
                                                category: e.target.value,
                                            })
                                        }
                                        className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                                        data-oid="h415e.s"
                                    >
                                        <option value="" data-oid="6s_gkpl">
                                            اختر التصنيف
                                        </option>
                                        {serviceCategories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.name}
                                                data-oid="p6z.pd7"
                                            >
                                                {category.icon} {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Description */}
                                <div data-oid="fovyuq4">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="k6-9l6-"
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
                                        data-oid="3-7cfcg"
                                    />
                                </div>

                                {/* Price and Duration */}
                                <div className="grid grid-cols-2 gap-4" data-oid="tx2rp7_">
                                    <div data-oid="hm0t4_f">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="kddi3.j"
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
                                            data-oid="gn9m2gs"
                                        />
                                    </div>
                                    <div data-oid="qg2w0pi">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="nil0::o"
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
                                            data-oid="6-2axv-"
                                        />
                                    </div>
                                </div>

                                {/* Working Days */}
                                <div data-oid="eq2rzsv">
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                        data-oid="zrfdn9b"
                                    >
                                        أيام العمل
                                    </label>
                                    <div className="grid grid-cols-4 gap-2" data-oid="taxekb7">
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
                                                data-oid="opw9pc4"
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="grid grid-cols-2 gap-4" data-oid="qbdr1oh">
                                    <div data-oid="76udjf:">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="m:bymtl"
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
                                            data-oid="yku.05h"
                                        />
                                    </div>
                                    <div data-oid="hhai1ib">
                                        <label
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                            data-oid="pen5etp"
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
                                            data-oid="8o1wxx-"
                                        />
                                    </div>
                                </div>

                                {/* Active Status */}
                                <div
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                                    data-oid="t3q7-9r"
                                >
                                    <div data-oid="gx2on-p">
                                        <h4
                                            className="font-semibold text-gray-800"
                                            data-oid="4.4kt10"
                                        >
                                            تفعيل الخدمة
                                        </h4>
                                        <p className="text-sm text-gray-600" data-oid="ibe9www">
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
                                        data-oid="63iq8sz"
                                    >
                                        <div
                                            className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${
                                                newService.isActive
                                                    ? 'translate-x-6'
                                                    : 'translate-x-1'
                                            }`}
                                            data-oid="7qx.my8"
                                        ></div>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="flex space-x-3 space-x-reverse mt-6" data-oid="glqtqi:">
                                <button
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setEditingService(null);
                                        setNewService({
                                            name: '',
                                            category: '',
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
                                    }}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
                                    data-oid="-nwko6."
                                >
                                    إلغاء
                                </button>
                                <button
                                    onClick={
                                        editingService ? handleUpdateService : handleAddService
                                    }
                                    className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold"
                                    data-oid="jjwjfkh"
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
                data-oid="_n7p2-a"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="xm51t-g">
                    <div className="flex justify-around" data-oid="l_-3x6k">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="cu:8jk2"
                        >
                            <span className="text-xl" data-oid=":1jhs0x">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="rww8d53">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ivmylwg"
                        >
                            <span className="text-xl" data-oid="_4ugws9">
                                📋
                            </span>
                            <span className="text-xs" data-oid="d.slpj6">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/services"
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="d_tbmfo"
                        >
                            <span className="text-xl" data-oid="08jua4q">
                                🛠️
                            </span>
                            <span className="text-xs font-semibold" data-oid="qihm-5u">
                                خدماتي
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="g8ne-5g"
                        >
                            <span className="text-xl" data-oid="c2tf58g">
                                💰
                            </span>
                            <span className="text-xs" data-oid="2.komdy">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="u73q-i5"
                        >
                            <span className="text-xl" data-oid="n-4095v">
                                👤
                            </span>
                            <span className="text-xs" data-oid="hjgrnyc">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
