'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface OrderEditData {
    id: number;
    customer: {
        name: string;
        phone: string;
        email: string;
    };
    provider: {
        name: string;
        phone: string;
        email: string;
        rating: number;
    };
    service: {
        name: string;
        category: string;
        description: string;
        price: number;
    };
    status: string;
    amount: number;
    date: string;
    time: string;
    location: {
        address: string;
        city: string;
    };
    paymentMethod: string;
    paymentStatus: string;
    notes?: string;
    priority: string;
}

export default function EditOrderPage() {
    const params = useParams();
    const router = useRouter();
    const orderId = params.id as string;

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState<OrderEditData | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // قائمة الحالات المتاحة
    const statusOptions = [
        { value: 'في الانتظار', label: 'في الانتظار', color: 'yellow' },
        { value: 'مؤكد', label: 'مؤكد', color: 'purple' },
        { value: 'جاري التنفيذ', label: 'جاري التنفيذ', color: 'blue' },
        { value: 'مكتمل', label: 'مكتمل', color: 'green' },
        { value: 'ملغي', label: 'ملغي', color: 'red' },
    ];

    // قائمة طرق الدفع
    const paymentMethods = ['نقداً', 'بطاقة ائتمان', 'بطاقة مدى', 'محفظة إلكترونية', 'تحويل بنكي'];

    // قائمة حالات الدفع
    const paymentStatusOptions = ['في الانتظار', 'مدفوع', 'مرفوض', 'مسترد'];

    // قائمة الأولويات
    const priorityOptions = [
        { value: 'منخفضة', label: 'منخفضة', color: 'green' },
        { value: 'متوسطة', label: 'متوسطة', color: 'yellow' },
        { value: 'عالية', label: 'عالية', color: 'orange' },
        { value: 'عاجلة', label: 'عاجلة', color: 'red' },
    ];

    // قائمة المدن
    const cities = [
        'الرياض',
        'جدة',
        'الدمام',
        'مكة المكرمة',
        'المدينة المنورة',
        'الطائف',
        'تبوك',
        'بريدة',
        'خميس مشيط',
        'حائل',
    ];

    useEffect(() => {
        // محاكاة تحميل البيانات من API
        const mockOrderData: OrderEditData = {
            id: parseInt(orderId),
            customer: {
                name: 'أحمد محمد علي',
                phone: '+966501234567',
                email: 'ahmed@example.com',
            },
            provider: {
                name: 'فاطمة علي حسن',
                phone: '+966509876543',
                email: 'fatima@example.com',
                rating: 4.8,
            },
            service: {
                name: 'تنظيف المنزل الشامل',
                category: 'خدمات التنظيف',
                description: 'تنظيف شامل للمنزل يشمل جميع الغرف والحمامات والمطبخ',
                price: 150,
            },
            status: 'مؤكد',
            amount: 150,
            date: '2024-02-22',
            time: '14:30',
            location: {
                address: 'شارع الملك فهد، حي النخيل',
                city: 'الرياض',
            },
            paymentMethod: 'بطاقة ائتمان',
            paymentStatus: 'في الانتظار',
            notes: 'يرجى التركيز على تنظيف المطبخ والحمامات',
            priority: 'متوسطة',
        };

        setTimeout(() => {
            setFormData(mockOrderData);
            setLoading(false);
        }, 1000);
    }, [orderId]);

    const handleInputChange = (field: string, value: string | number) => {
        if (!formData) return;

        setFormData((prev) => {
            if (!prev) return prev;

            // Handle nested objects
            if (field.includes('.')) {
                const [parent, child] = field.split('.');
                return {
                    ...prev,
                    [parent]: {
                        ...prev[parent as keyof OrderEditData],
                        [child]: value,
                    },
                };
            }

            return {
                ...prev,
                [field]: value,
            };
        });

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: '',
            }));
        }
    };

    const validateForm = (): boolean => {
        if (!formData) return false;

        const newErrors: Record<string, string> = {};

        // التحقق من الحقول المطلوبة
        if (!formData.status) {
            newErrors.status = 'حالة الطلب مطلوبة';
        }

        if (!formData.date) {
            newErrors.date = 'تاريخ الخدمة مطلوب';
        }

        if (!formData.time) {
            newErrors.time = 'وقت الخدمة مطلوب';
        }

        if (!formData.location.address.trim()) {
            newErrors['location.address'] = 'العنوان مطلوب';
        }

        if (!formData.location.city) {
            newErrors['location.city'] = 'المدينة مطلوبة';
        }

        if (!formData.paymentMethod) {
            newErrors.paymentMethod = 'طريقة الدفع مطلوبة';
        }

        if (!formData.paymentStatus) {
            newErrors.paymentStatus = 'حالة الدفع مطلوبة';
        }

        if (formData.amount <= 0) {
            newErrors.amount = 'المبلغ يجب أن يكون أكبر من صفر';
        }

        // التحقق من صحة التاريخ
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today && formData.status !== 'مكتمل' && formData.status !== 'ملغي') {
            newErrors.date = 'لا يمكن تحديد تاريخ في الماضي للطلبات النشطة';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSaving(true);

        try {
            // محاكاة حفظ البيانات
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // في التطبيق الحقيقي، ستكون هناك مكالمة API
            console.log('Saving order data:', formData);

            // إظهار رسالة نجاح
            alert('تم حفظ التعديلات بنجاح!');

            // العودة إلى صفحة تفاصيل الطلب
            router.push(`/admin/orders/${orderId}`);
        } catch (error) {
            console.error('Error saving order:', error);
            alert('حدث خطأ أثناء حفظ التعديلات. يرجى المحاولة مرة أخرى.');
        } finally {
            setSaving(false);
        }
    };

    const getStatusColor = (status: string) => {
        const statusOption = statusOptions.find((opt) => opt.value === status);
        switch (statusOption?.color) {
            case 'green':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'blue':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'yellow':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'purple':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'red':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    if (loading) {
        return (
            <div className="p-6" data-oid="j2e5cjn">
                <div className="animate-pulse" data-oid="fxp_o1g">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4" data-oid="s1m6rx_"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" data-oid="rbv3gt1"></div>
                    <div className="space-y-6" data-oid="vnufxne">
                        <div className="bg-white rounded-lg shadow p-6" data-oid="5959xko">
                            <div
                                className="h-6 bg-gray-200 rounded w-1/3 mb-4"
                                data-oid="2n6oth5"
                            ></div>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                data-oid="-pt30aw"
                            >
                                <div className="h-10 bg-gray-200 rounded" data-oid="18cwg_j"></div>
                                <div className="h-10 bg-gray-200 rounded" data-oid="k5d6rsg"></div>
                                <div className="h-10 bg-gray-200 rounded" data-oid="n7tfnl5"></div>
                                <div className="h-10 bg-gray-200 rounded" data-oid="r7yh53j"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!formData) {
        return (
            <div className="p-6" data-oid="6bvo_z3">
                <div className="text-center py-12" data-oid="nsxy87m">
                    <div className="text-6xl mb-4" data-oid="txjfmt2">
                        ❌
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2" data-oid="h5va4g7">
                        الطلب غير موجود
                    </h2>
                    <p className="text-gray-600 mb-6" data-oid="g_.uh_s">
                        لم يتم العثور على الطلب المطلوب
                    </p>
                    <Link
                        href="/admin/orders"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        data-oid="ez0qk0x"
                    >
                        العودة إلى قائمة الطلبات
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6" data-oid="g1208e.">
            {/* Header */}
            <div className="mb-6" data-oid="zmuijcw">
                <div className="flex items-center justify-between mb-4" data-oid="3:7pewi">
                    <div data-oid="4unfspv">
                        <h1 className="text-2xl font-bold text-gray-900" data-oid="wba422y">
                            تعديل الطلب #{formData.id}
                        </h1>
                        <p className="text-gray-600" data-oid="3vnkfn:">
                            تعديل تفاصيل الطلب ومعلوماته
                        </p>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="ur4dzbp">
                        <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(formData.status)}`}
                            data-oid=".aoxiha"
                        >
                            {formData.status}
                        </div>
                        <Link
                            href={`/admin/orders/${orderId}`}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                            data-oid="b_ah9te"
                        >
                            إلغاء
                        </Link>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" data-oid="nnicepy">
                {/* Order Status & Priority */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="w6u.dsi">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="92ksf9x">
                        حالة الطلب والأولوية
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="sq7mv-0">
                        <div data-oid=":_105tb">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="5p2kg-p"
                            >
                                حالة الطلب *
                            </label>
                            <select
                                value={formData.status}
                                onChange={(e) => handleInputChange('status', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.status ? 'border-red-500' : 'border-gray-300'
                                }`}
                                data-oid="8jm2k9j"
                            >
                                {statusOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        data-oid="w0q7inp"
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            {errors.status && (
                                <p className="text-red-500 text-sm mt-1" data-oid="2_4x_u9">
                                    {errors.status}
                                </p>
                            )}
                        </div>
                        <div data-oid="-6ymidn">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="v75.5y-"
                            >
                                الأولوية
                            </label>
                            <select
                                value={formData.priority}
                                onChange={(e) => handleInputChange('priority', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="z.fdx6b"
                            >
                                {priorityOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        data-oid="ljzpvcw"
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Service Details */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="4ub4hug">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="_4jn58b">
                        تفاصيل الخدمة
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="_407bsa">
                        <div data-oid="j6o_n8i">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="91e9.zs"
                            >
                                اسم الخدمة
                            </label>
                            <input
                                type="text"
                                value={formData.service.name}
                                onChange={(e) => handleInputChange('service.name', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                                data-oid="mrp9ip3"
                            />
                        </div>
                        <div data-oid="8s2a7ro">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="67afsw0"
                            >
                                الفئة
                            </label>
                            <input
                                type="text"
                                value={formData.service.category}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                readOnly
                                data-oid="0lnf1ne"
                            />
                        </div>
                        <div className="md:col-span-2" data-oid="qqz4sch">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="5fl7ywg"
                            >
                                وصف الخدمة
                            </label>
                            <textarea
                                value={formData.service.description}
                                onChange={(e) =>
                                    handleInputChange('service.description', e.target.value)
                                }
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="ugdarvl"
                            />
                        </div>
                        <div data-oid="yadr0cd">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="7ytjj2t"
                            >
                                سعر الخدمة (ريال)
                            </label>
                            <input
                                type="number"
                                value={formData.service.price}
                                onChange={(e) =>
                                    handleInputChange(
                                        'service.price',
                                        parseFloat(e.target.value) || 0,
                                    )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                min="0"
                                step="0.01"
                                data-oid="644iuwc"
                            />
                        </div>
                        <div data-oid="-cd91f-">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="cb_5xzr"
                            >
                                المبلغ الإجمالي (ريال) *
                            </label>
                            <input
                                type="number"
                                value={formData.amount}
                                onChange={(e) =>
                                    handleInputChange('amount', parseFloat(e.target.value) || 0)
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.amount ? 'border-red-500' : 'border-gray-300'
                                }`}
                                min="0"
                                step="0.01"
                                data-oid="b9rzc7e"
                            />

                            {errors.amount && (
                                <p className="text-red-500 text-sm mt-1" data-oid="nr1nxf7">
                                    {errors.amount}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Schedule & Location */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="4cbksd1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="k3dd_h1">
                        الموعد والموقع
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="s4i:n6g">
                        <div data-oid=":iiw6nq">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="qr-.dv7"
                            >
                                تاريخ الخدمة *
                            </label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.date ? 'border-red-500' : 'border-gray-300'
                                }`}
                                data-oid="68nwubs"
                            />

                            {errors.date && (
                                <p className="text-red-500 text-sm mt-1" data-oid="nxbipvu">
                                    {errors.date}
                                </p>
                            )}
                        </div>
                        <div data-oid="z68t.9-">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="5mlj146"
                            >
                                وقت الخدمة *
                            </label>
                            <input
                                type="time"
                                value={formData.time}
                                onChange={(e) => handleInputChange('time', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.time ? 'border-red-500' : 'border-gray-300'
                                }`}
                                data-oid="b0z009v"
                            />

                            {errors.time && (
                                <p className="text-red-500 text-sm mt-1" data-oid="4:63zr7">
                                    {errors.time}
                                </p>
                            )}
                        </div>
                        <div data-oid="umq7z7u">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="0:n1bn."
                            >
                                المدينة *
                            </label>
                            <select
                                value={formData.location.city}
                                onChange={(e) => handleInputChange('location.city', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors['location.city'] ? 'border-red-500' : 'border-gray-300'
                                }`}
                                data-oid="9syewx-"
                            >
                                <option value="" data-oid=".3cohun">
                                    اختر المدينة
                                </option>
                                {cities.map((city) => (
                                    <option key={city} value={city} data-oid="wwi:bt5">
                                        {city}
                                    </option>
                                ))}
                            </select>
                            {errors['location.city'] && (
                                <p className="text-red-500 text-sm mt-1" data-oid="j7-x11a">
                                    {errors['location.city']}
                                </p>
                            )}
                        </div>
                        <div data-oid="pg1l3zz">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="nw2y8l6"
                            >
                                العنوان التفصيلي *
                            </label>
                            <input
                                type="text"
                                value={formData.location.address}
                                onChange={(e) =>
                                    handleInputChange('location.address', e.target.value)
                                }
                                placeholder="مثال: شارع الملك فهد، حي النخيل"
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors['location.address']
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                                data-oid="-1z1cic"
                            />

                            {errors['location.address'] && (
                                <p className="text-red-500 text-sm mt-1" data-oid="g2847ua">
                                    {errors['location.address']}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="x4.cvyn">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="__4:a_j">
                        معلومات الدفع
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="8:9xr2u">
                        <div data-oid="z8qg5h7">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="xx4j-s4"
                            >
                                طريقة الدفع *
                            </label>
                            <select
                                value={formData.paymentMethod}
                                onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.paymentMethod ? 'border-red-500' : 'border-gray-300'
                                }`}
                                data-oid="snyulur"
                            >
                                <option value="" data-oid="ceurqk7">
                                    اختر طريقة الدفع
                                </option>
                                {paymentMethods.map((method) => (
                                    <option key={method} value={method} data-oid="ajeks:a">
                                        {method}
                                    </option>
                                ))}
                            </select>
                            {errors.paymentMethod && (
                                <p className="text-red-500 text-sm mt-1" data-oid=":6lygt4">
                                    {errors.paymentMethod}
                                </p>
                            )}
                        </div>
                        <div data-oid="zmjl4s1">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="l1pxo47"
                            >
                                حالة الدفع *
                            </label>
                            <select
                                value={formData.paymentStatus}
                                onChange={(e) => handleInputChange('paymentStatus', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.paymentStatus ? 'border-red-500' : 'border-gray-300'
                                }`}
                                data-oid="ruz50fy"
                            >
                                <option value="" data-oid="qtag7bn">
                                    اختر حالة الدفع
                                </option>
                                {paymentStatusOptions.map((status) => (
                                    <option key={status} value={status} data-oid="4rb_1l0">
                                        {status}
                                    </option>
                                ))}
                            </select>
                            {errors.paymentStatus && (
                                <p className="text-red-500 text-sm mt-1" data-oid="2wxgt-6">
                                    {errors.paymentStatus}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Customer & Provider Info (Read-only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="i.fiqko">
                    <div className="bg-white rounded-lg shadow p-6" data-oid="41r7wxq">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid=".xozgbv">
                            معلومات العميل
                        </h3>
                        <div className="space-y-3" data-oid="ygqq_iv">
                            <div data-oid="6j-co8s">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="5-5ue.0"
                                >
                                    الاسم
                                </label>
                                <input
                                    type="text"
                                    value={formData.customer.name}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    readOnly
                                    data-oid="qj4-ugv"
                                />
                            </div>
                            <div data-oid="0zb513l">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="z3yyq9v"
                                >
                                    رقم الهاتف
                                </label>
                                <input
                                    type="text"
                                    value={formData.customer.phone}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    readOnly
                                    data-oid="4om0pq7"
                                />
                            </div>
                            <div data-oid="af10.um">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="re1kelz"
                                >
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    value={formData.customer.email}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    readOnly
                                    data-oid="oftcae1"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6" data-oid="jgicxow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="ihw7r:s">
                            معلومات مقدم الخدمة
                        </h3>
                        <div className="space-y-3" data-oid="t_pw7h2">
                            <div data-oid="8v5nj_l">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="dhoii39"
                                >
                                    الاسم
                                </label>
                                <input
                                    type="text"
                                    value={formData.provider.name}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    readOnly
                                    data-oid="1f8_bew"
                                />
                            </div>
                            <div data-oid=":k1zq4v">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="gbu10l9"
                                >
                                    رقم الهاتف
                                </label>
                                <input
                                    type="text"
                                    value={formData.provider.phone}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    readOnly
                                    data-oid="_w1m10x"
                                />
                            </div>
                            <div data-oid="l_e9gki">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="24_38o8"
                                >
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    value={formData.provider.email}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    readOnly
                                    data-oid="yl_gxgv"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Notes */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="qnmed0:">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="gwh0suh">
                        ملاحظات إضافية
                    </h3>
                    <textarea
                        value={formData.notes || ''}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        rows={4}
                        placeholder="أضف أي ملاحظات إضافية حول الطلب..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        data-oid="b_6ajt:"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 space-x-reverse" data-oid="l_p-8fb">
                    <Link
                        href={`/admin/orders/${orderId}`}
                        className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                        data-oid="w8_1ceq"
                    >
                        إلغاء
                    </Link>
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        data-oid="ax89xji"
                    >
                        {saving ? (
                            <>
                                <div
                                    className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"
                                    data-oid="gq2fuqi"
                                ></div>
                                جاري الحفظ...
                            </>
                        ) : (
                            'حفظ التعديلات'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
