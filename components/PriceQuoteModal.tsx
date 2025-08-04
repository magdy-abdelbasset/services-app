'use client';

import { useState } from 'react';

interface PriceQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (quote: QuoteData) => void;
    request: {
        id: number;
        service: string;
        customer: string;
        description: string;
        location: string;
    };
}

interface QuoteData {
    price: string;
    estimatedTime: string;
    description: string;
    includesTransport: boolean;
    includesMaterials: boolean;
}

export default function PriceQuoteModal({
    isOpen,
    onClose,
    onSubmit,
    request,
}: PriceQuoteModalProps) {
    const [formData, setFormData] = useState<QuoteData>({
        price: '',
        estimatedTime: '',
        description: '',
        includesTransport: false,
        includesMaterials: false,
    });

    const [errors, setErrors] = useState<Partial<QuoteData>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        const newErrors: Partial<QuoteData> = {};
        if (!formData.price) newErrors.price = 'السعر مطلوب';
        if (!formData.estimatedTime) newErrors.estimatedTime = 'الوقت المتوقع مطلوب';
        if (!formData.description) newErrors.description = 'وصف العرض مطلوب';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit(formData);
        onClose();

        // Reset form
        setFormData({
            price: '',
            estimatedTime: '',
            description: '',
            includesTransport: false,
            includesMaterials: false,
        });
        setErrors({});
    };

    const handleInputChange = (field: keyof QuoteData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            dir="rtl"
            data-oid="zuvki0x"
        >
            <div
                className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
                data-oid="ez_px-5"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl"
                    data-oid="188e75g"
                >
                    <div className="flex items-center justify-between" data-oid="m-13pzj">
                        <h2 className="text-lg font-bold" data-oid="76254py">
                            تقديم عرض سعر
                        </h2>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="jg5.iye"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Request Info */}
                <div className="p-4 bg-gray-50 border-b" data-oid="u4i29m5">
                    <h3 className="font-semibold text-gray-800 mb-2" data-oid="oe6hw5l">
                        {request.service}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1" data-oid="h7wy4qz">
                        العميل: {request.customer}
                    </p>
                    <p className="text-sm text-gray-600 mb-2" data-oid="g2use:v">
                        📍 {request.location}
                    </p>
                    <p className="text-sm text-gray-700 bg-white p-2 rounded-lg" data-oid="tzj7t1:">
                        {request.description}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4" data-oid="lrxttth">
                    {/* Price */}
                    <div data-oid="-u:j8jp">
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="53_u69d"
                        >
                            السعر المطلوب *
                        </label>
                        <div className="relative" data-oid="ewdwh-y">
                            <input
                                type="number"
                                value={formData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.price ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="أدخل السعر"
                                data-oid="mf6tc7_"
                            />

                            <span
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                data-oid=".oe-in1"
                            >
                                ريال
                            </span>
                        </div>
                        {errors.price && (
                            <p className="text-red-500 text-xs mt-1" data-oid="sv6yz.k">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    {/* Estimated Time */}
                    <div data-oid="_l:nax0">
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="vh_h5lf"
                        >
                            الوقت المتوقع للإنجاز *
                        </label>
                        <select
                            value={formData.estimatedTime}
                            onChange={(e) => handleInputChange('estimatedTime', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.estimatedTime ? 'border-red-500' : 'border-gray-300'
                            }`}
                            data-oid="4hcz1yg"
                        >
                            <option value="" data-oid="sanqba1">
                                اختر الوقت المتوقع
                            </option>
                            <option value="15 دقيقة" data-oid="zfxi-mf">
                                15 دقيقة
                            </option>
                            <option value="30 دقيقة" data-oid="hy.1a9p">
                                30 دقيقة
                            </option>
                            <option value="45 دقيقة" data-oid="t30n3g_">
                                45 دقيقة
                            </option>
                            <option value="ساعة واحدة" data-oid="omlft8:">
                                ساعة واحدة
                            </option>
                            <option value="ساعتان" data-oid="xxk8va6">
                                ساعتان
                            </option>
                            <option value="3 ساعات" data-oid="_wesacu">
                                3 ساعات
                            </option>
                            <option value="نصف يوم" data-oid="1xnc1o6">
                                نصف يوم
                            </option>
                            <option value="يوم كامل" data-oid="mx51g8:">
                                يوم كامل
                            </option>
                            <option value="يومان" data-oid="qk_fw_w">
                                يومان
                            </option>
                            <option value="أسبوع" data-oid="m4fvm0x">
                                أسبوع
                            </option>
                        </select>
                        {errors.estimatedTime && (
                            <p className="text-red-500 text-xs mt-1" data-oid="itbu2hs">
                                {errors.estimatedTime}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div data-oid="aijjc7t">
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="tajnmyc"
                        >
                            وصف العرض وتفاصيل الخدمة *
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            rows={4}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                                errors.description ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="اشرح تفاصيل الخدمة التي ستقدمها، خبرتك، والمواد المستخدمة..."
                            data-oid="b_l87qh"
                        />

                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1" data-oid="_5lwclc">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-3" data-oid="rfansbu">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="_nbq_lk"
                        >
                            <input
                                type="checkbox"
                                id="transport"
                                checked={formData.includesTransport}
                                onChange={(e) =>
                                    handleInputChange('includesTransport', e.target.checked)
                                }
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="cw3dmhj"
                            />

                            <label
                                htmlFor="transport"
                                className="text-sm text-gray-700"
                                data-oid="2zp2415"
                            >
                                يشمل السعر تكلفة المواصلات
                            </label>
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="mmfkmqx"
                        >
                            <input
                                type="checkbox"
                                id="materials"
                                checked={formData.includesMaterials}
                                onChange={(e) =>
                                    handleInputChange('includesMaterials', e.target.checked)
                                }
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="cz-kf8w"
                            />

                            <label
                                htmlFor="materials"
                                className="text-sm text-gray-700"
                                data-oid="7o0zfes"
                            >
                                يشمل السعر تكلفة المواد والأدوات
                            </label>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex space-x-3 space-x-reverse pt-4" data-oid="c5uqeib">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                            data-oid="9jyd3mz"
                        >
                            إرسال العرض
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                            data-oid="tqlg6ne"
                        >
                            إلغاء
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
