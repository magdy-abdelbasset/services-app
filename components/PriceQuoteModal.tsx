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
        >
            <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">تقديم عرض سعر</h2>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Request Info */}
                <div className="p-4 bg-gray-50 border-b">
                    <h3 className="font-semibold text-gray-800 mb-2">{request.service}</h3>
                    <p className="text-sm text-gray-600 mb-1">العميل: {request.customer}</p>
                    <p className="text-sm text-gray-600 mb-2">📍 {request.location}</p>
                    <p className="text-sm text-gray-700 bg-white p-2 rounded-lg">
                        {request.description}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {/* Price */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            السعر المطلوب *
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                value={formData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.price ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="أدخل السعر"
                            />

                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                ريال
                            </span>
                        </div>
                        {errors.price && (
                            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                        )}
                    </div>

                    {/* Estimated Time */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            الوقت المتوقع للإنجاز *
                        </label>
                        <select
                            value={formData.estimatedTime}
                            onChange={(e) => handleInputChange('estimatedTime', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.estimatedTime ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                            <option value="">اختر الوقت المتوقع</option>
                            <option value="15 دقيقة">15 دقيقة</option>
                            <option value="30 دقيقة">30 دقيقة</option>
                            <option value="45 دقيقة">45 دقيقة</option>
                            <option value="ساعة واحدة">ساعة واحدة</option>
                            <option value="ساعتان">ساعتان</option>
                            <option value="3 ساعات">3 ساعات</option>
                            <option value="نصف يوم">نصف يوم</option>
                            <option value="يوم كامل">يوم كامل</option>
                            <option value="يومان">يومان</option>
                            <option value="أسبوع">أسبوع</option>
                        </select>
                        {errors.estimatedTime && (
                            <p className="text-red-500 text-xs mt-1">{errors.estimatedTime}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                        />

                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                        )}
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <input
                                type="checkbox"
                                id="transport"
                                checked={formData.includesTransport}
                                onChange={(e) =>
                                    handleInputChange('includesTransport', e.target.checked)
                                }
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />

                            <label htmlFor="transport" className="text-sm text-gray-700">
                                يشمل السعر تكلفة المواصلات
                            </label>
                        </div>

                        <div className="flex items-center space-x-3 space-x-reverse">
                            <input
                                type="checkbox"
                                id="materials"
                                checked={formData.includesMaterials}
                                onChange={(e) =>
                                    handleInputChange('includesMaterials', e.target.checked)
                                }
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />

                            <label htmlFor="materials" className="text-sm text-gray-700">
                                يشمل السعر تكلفة المواد والأدوات
                            </label>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex space-x-3 space-x-reverse pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                        >
                            إرسال العرض
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                        >
                            إلغاء
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
