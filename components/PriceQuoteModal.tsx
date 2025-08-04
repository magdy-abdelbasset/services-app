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
            data-oid="hdoxg4y"
        >
            <div
                className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
                data-oid="66pkq3q"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl"
                    data-oid=".jpe53k"
                >
                    <div className="flex items-center justify-between" data-oid="iq1w.0:">
                        <h2 className="text-lg font-bold" data-oid="_f99f6n">
                            تقديم عرض سعر
                        </h2>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="z2z-c8y"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Request Info */}
                <div className="p-4 bg-gray-50 border-b" data-oid="0561tba">
                    <h3 className="font-semibold text-gray-800 mb-2" data-oid=":wlqxm-">
                        {request.service}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1" data-oid="wiu7okk">
                        العميل: {request.customer}
                    </p>
                    <p className="text-sm text-gray-600 mb-2" data-oid="u5v.eql">
                        📍 {request.location}
                    </p>
                    <p className="text-sm text-gray-700 bg-white p-2 rounded-lg" data-oid="oto_wd0">
                        {request.description}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4" data-oid=".:fcos4">
                    {/* Price */}
                    <div data-oid="qblzxeh">
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="49jcl5b"
                        >
                            السعر المطلوب *
                        </label>
                        <div className="relative" data-oid="x3gmbxf">
                            <input
                                type="number"
                                value={formData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.price ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="أدخل السعر"
                                data-oid="77ikied"
                            />

                            <span
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                data-oid="ylb4irx"
                            >
                                ريال
                            </span>
                        </div>
                        {errors.price && (
                            <p className="text-red-500 text-xs mt-1" data-oid="nmg1v-d">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    {/* Estimated Time */}
                    <div data-oid="6lia8v3">
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="8g62d5_"
                        >
                            الوقت المتوقع للإنجاز *
                        </label>
                        <select
                            value={formData.estimatedTime}
                            onChange={(e) => handleInputChange('estimatedTime', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.estimatedTime ? 'border-red-500' : 'border-gray-300'
                            }`}
                            data-oid="t1k._1y"
                        >
                            <option value="" data-oid="xlo9gec">
                                اختر الوقت المتوقع
                            </option>
                            <option value="15 دقيقة" data-oid="1dfq-_t">
                                15 دقيقة
                            </option>
                            <option value="30 دقيقة" data-oid="yao6wav">
                                30 دقيقة
                            </option>
                            <option value="45 دقيقة" data-oid="g70jgeb">
                                45 دقيقة
                            </option>
                            <option value="ساعة واحدة" data-oid="as:7wba">
                                ساعة واحدة
                            </option>
                            <option value="ساعتان" data-oid="54p2vwj">
                                ساعتان
                            </option>
                            <option value="3 ساعات" data-oid="2zp7u1g">
                                3 ساعات
                            </option>
                            <option value="نصف يوم" data-oid="zcf8f2m">
                                نصف يوم
                            </option>
                            <option value="يوم كامل" data-oid="2fovuzr">
                                يوم كامل
                            </option>
                            <option value="يومان" data-oid="h_zqqky">
                                يومان
                            </option>
                            <option value="أسبوع" data-oid="7m0e2cq">
                                أسبوع
                            </option>
                        </select>
                        {errors.estimatedTime && (
                            <p className="text-red-500 text-xs mt-1" data-oid="hyqbz2_">
                                {errors.estimatedTime}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div data-oid="vp-96tr">
                        <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            data-oid="1mekbvh"
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
                            data-oid="epecgt6"
                        />

                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1" data-oid="5zi4-hi">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-3" data-oid="x09_6ae">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="itzuzq2"
                        >
                            <input
                                type="checkbox"
                                id="transport"
                                checked={formData.includesTransport}
                                onChange={(e) =>
                                    handleInputChange('includesTransport', e.target.checked)
                                }
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="_:wqaxi"
                            />

                            <label
                                htmlFor="transport"
                                className="text-sm text-gray-700"
                                data-oid="kjehc.h"
                            >
                                يشمل السعر تكلفة المواصلات
                            </label>
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid=":c7iv81"
                        >
                            <input
                                type="checkbox"
                                id="materials"
                                checked={formData.includesMaterials}
                                onChange={(e) =>
                                    handleInputChange('includesMaterials', e.target.checked)
                                }
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                data-oid="k87v7_f"
                            />

                            <label
                                htmlFor="materials"
                                className="text-sm text-gray-700"
                                data-oid="pbr7bio"
                            >
                                يشمل السعر تكلفة المواد والأدوات
                            </label>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex space-x-3 space-x-reverse pt-4" data-oid="kbqbbdo">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                            data-oid=":48caj1"
                        >
                            إرسال العرض
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                            data-oid="w3.3gue"
                        >
                            إلغاء
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
