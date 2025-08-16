'use client';

import { useState } from 'react';

export default function AdminSettings() {
    const [settings, setSettings] = useState({
        appName: 'خدماتي',
        appDescription: 'تطبيق الخدمات المنزلية والمهنية',
        supportEmail: 'support@khadamati.com',
        supportPhone: '+966501234567',
        commissionRate: 15,
        minOrderAmount: 20,
        maxOrderAmount: 1000,
        autoApproveProviders: false,
        requireVerification: true,
        enableNotifications: true,
        enableSMS: true,
        enableEmail: true,
        maintenanceMode: false,
        allowRegistration: true,
        requirePhoneVerification: true,
    });

    const [activeTab, setActiveTab] = useState('general');

    const handleSettingChange = (key: string, value: any) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSave = () => {
        alert('تم حفظ الإعدادات بنجاح');
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">إعدادات النظام</h1>
                <p className="text-gray-600">إدارة إعدادات التطبيق والنظام العامة</p>
            </div>

            {/* Tabs */}
            <div className="mb-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8 space-x-reverse">
                        <button
                            onClick={() => setActiveTab('general')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'general'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            الإعدادات العامة
                        </button>
                        <button
                            onClick={() => setActiveTab('business')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'business'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            إعدادات الأعمال
                        </button>
                        <button
                            onClick={() => setActiveTab('notifications')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'notifications'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            الإشعارات
                        </button>
                        <button
                            onClick={() => setActiveTab('security')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'security'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            الأمان
                        </button>
                    </nav>
                </div>
            </div>

            {/* General Settings */}
            {activeTab === 'general' && (
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">الإعدادات العامة</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                اسم التطبيق
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.appName}
                                onChange={(e) => handleSettingChange('appName', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                بريد الدعم الفني
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.supportEmail}
                                onChange={(e) =>
                                    handleSettingChange('supportEmail', e.target.value)
                                }
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                وصف التطبيق
                            </label>
                            <textarea
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.appDescription}
                                onChange={(e) =>
                                    handleSettingChange('appDescription', e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                رقم الدعم الفني
                            </label>
                            <input
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.supportPhone}
                                onChange={(e) =>
                                    handleSettingChange('supportPhone', e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.maintenanceMode}
                                    onChange={(e) =>
                                        handleSettingChange('maintenanceMode', e.target.checked)
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">وضع الصيانة</span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                                تفعيل وضع الصيانة سيمنع المستخدمين من الوصول للتطبيق
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Business Settings */}
            {activeTab === 'business' && (
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">إعدادات الأعمال</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                نسبة العمولة (%)
                            </label>
                            <input
                                type="number"
                                min="0"
                                max="50"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.commissionRate}
                                onChange={(e) =>
                                    handleSettingChange('commissionRate', parseInt(e.target.value))
                                }
                            />

                            <p className="text-xs text-gray-500 mt-1">النسبة المئوية من كل طلب</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                الحد الأدنى للطلب (ريال)
                            </label>
                            <input
                                type="number"
                                min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.minOrderAmount}
                                onChange={(e) =>
                                    handleSettingChange('minOrderAmount', parseInt(e.target.value))
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                الحد الأقصى للطلب (ريال)
                            </label>
                            <input
                                type="number"
                                min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.maxOrderAmount}
                                onChange={(e) =>
                                    handleSettingChange('maxOrderAmount', parseInt(e.target.value))
                                }
                            />
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.autoApproveProviders}
                                    onChange={(e) =>
                                        handleSettingChange(
                                            'autoApproveProviders',
                                            e.target.checked,
                                        )
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">
                                    الموافقة التلقائية على مقدمي الخدمات
                                </span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.requireVerification}
                                    onChange={(e) =>
                                        handleSettingChange('requireVerification', e.target.checked)
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">
                                    طلب التحقق من الهوية
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">إعدادات الإشعارات</h3>
                    <div className="space-y-6">
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.enableNotifications}
                                    onChange={(e) =>
                                        handleSettingChange('enableNotifications', e.target.checked)
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">تفعيل الإشعارات</span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                                تفعيل أو إلغاء جميع الإشعارات في التطبيق
                            </p>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.enableSMS}
                                    onChange={(e) =>
                                        handleSettingChange('enableSMS', e.target.checked)
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">
                                    إشعارات الرسائل النصية
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                                إرسال إشعارات عبر الرسائل النصية
                            </p>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.enableEmail}
                                    onChange={(e) =>
                                        handleSettingChange('enableEmail', e.target.checked)
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">
                                    إشعارات البريد الإلكتروني
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                                إرسال إشعارات عبر البريد الإلكتروني
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">إعدادات الأمان</h3>
                    <div className="space-y-6">
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.allowRegistration}
                                    onChange={(e) =>
                                        handleSettingChange('allowRegistration', e.target.checked)
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">
                                    السماح بالتسجيل الجديد
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                                السماح للمستخدمين الجدد بإنشاء حسابات
                            </p>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.requirePhoneVerification}
                                    onChange={(e) =>
                                        handleSettingChange(
                                            'requirePhoneVerification',
                                            e.target.checked,
                                        )
                                    }
                                />

                                <span className="mr-2 text-sm text-gray-700">
                                    طلب التحقق من رقم الهاتف
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                                إجبار المستخدمين على التحقق من أرقام هواتفهم
                            </p>
                        </div>
                        <div className="border-t border-gray-200 pt-6">
                            <h4 className="text-md font-medium text-gray-900 mb-4">
                                إجراءات الأمان
                            </h4>
                            <div className="space-y-3">
                                <button className="w-full md:w-auto bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                                    تصدير نسخة احتياطية من البيانات
                                </button>
                                <button className="w-full md:w-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors mr-3">
                                    مسح ذاكرة التخزين المؤقت
                                </button>
                                <button className="w-full md:w-auto bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors mr-3">
                                    عرض سجل النشاطات
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    حفظ الإعدادات
                </button>
            </div>
        </div>
    );
}
