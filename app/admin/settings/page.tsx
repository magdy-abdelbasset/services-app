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
        <div className="p-6" data-oid="4f.71d-">
            <div className="mb-6" data-oid="d9i.l1v">
                <h1 className="text-2xl font-bold text-gray-900 mb-2" data-oid="96kevmr">
                    إعدادات النظام
                </h1>
                <p className="text-gray-600" data-oid="1jufeu3">
                    إدارة إعدادات التطبيق والنظام العامة
                </p>
            </div>

            {/* Tabs */}
            <div className="mb-6" data-oid="3372ujz">
                <div className="border-b border-gray-200" data-oid="390sa3d">
                    <nav className="-mb-px flex space-x-8 space-x-reverse" data-oid="vcepl1l">
                        <button
                            onClick={() => setActiveTab('general')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'general'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                            data-oid="edmhu39"
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
                            data-oid="y7d1_dj"
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
                            data-oid="r8q8_y6"
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
                            data-oid="sgx5ccc"
                        >
                            الأمان
                        </button>
                    </nav>
                </div>
            </div>

            {/* General Settings */}
            {activeTab === 'general' && (
                <div className="bg-white rounded-lg shadow p-6" data-oid="ep46uof">
                    <h3 className="text-lg font-medium text-gray-900 mb-6" data-oid="8y-ra17">
                        الإعدادات العامة
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="yalb9tk">
                        <div data-oid="w4jlz2o">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="t4aovl1"
                            >
                                اسم التطبيق
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.appName}
                                onChange={(e) => handleSettingChange('appName', e.target.value)}
                                data-oid="6oz_ef."
                            />
                        </div>
                        <div data-oid="qx2mex_">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="m97.wa3"
                            >
                                بريد الدعم الفني
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.supportEmail}
                                onChange={(e) =>
                                    handleSettingChange('supportEmail', e.target.value)
                                }
                                data-oid="0c3586q"
                            />
                        </div>
                        <div className="md:col-span-2" data-oid="7fuqilo">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid=".an98e5"
                            >
                                وصف التطبيق
                            </label>
                            <textarea
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.appDescription}
                                onChange={(e) =>
                                    handleSettingChange('appDescription', e.target.value)
                                }
                                data-oid="mhc6_v6"
                            />
                        </div>
                        <div data-oid="y2m9x8l">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="32kk.vm"
                            >
                                رقم الدعم الفني
                            </label>
                            <input
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={settings.supportPhone}
                                onChange={(e) =>
                                    handleSettingChange('supportPhone', e.target.value)
                                }
                                data-oid="bf-i7-9"
                            />
                        </div>
                        <div data-oid="-ymk3rg">
                            <label className="flex items-center" data-oid="wynxpg:">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.maintenanceMode}
                                    onChange={(e) =>
                                        handleSettingChange('maintenanceMode', e.target.checked)
                                    }
                                    data-oid="sjzf5fp"
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid="x0w47_q">
                                    وضع الصيانة
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1" data-oid=":0:m4xk">
                                تفعيل وضع الصيانة سيمنع المستخدمين من الوصول للتطبيق
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Business Settings */}
            {activeTab === 'business' && (
                <div className="bg-white rounded-lg shadow p-6" data-oid="l9bx628">
                    <h3 className="text-lg font-medium text-gray-900 mb-6" data-oid="zed4qd7">
                        إعدادات الأعمال
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="84..cuh">
                        <div data-oid="qi-uig-">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="hsxehyv"
                            >
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
                                data-oid=".n01wr9"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="iu3o7dc">
                                النسبة المئوية من كل طلب
                            </p>
                        </div>
                        <div data-oid="f9lr34t">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="32le:7p"
                            >
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
                                data-oid="ude2d3x"
                            />
                        </div>
                        <div data-oid="mr:9.df">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="p3w17zo"
                            >
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
                                data-oid="8inydmk"
                            />
                        </div>
                        <div data-oid="6z7za-6">
                            <label className="flex items-center" data-oid="77xkmk1">
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
                                    data-oid="ugknz4b"
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid="xyw2izt">
                                    الموافقة التلقائية على مقدمي الخدمات
                                </span>
                            </label>
                        </div>
                        <div data-oid="d35awi5">
                            <label className="flex items-center" data-oid="os_jg0r">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.requireVerification}
                                    onChange={(e) =>
                                        handleSettingChange('requireVerification', e.target.checked)
                                    }
                                    data-oid="qv09jm."
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid="qt39_io">
                                    طلب التحقق من الهوية
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
                <div className="bg-white rounded-lg shadow p-6" data-oid="q-q._78">
                    <h3 className="text-lg font-medium text-gray-900 mb-6" data-oid=":hemyk8">
                        إعدادات الإشعارات
                    </h3>
                    <div className="space-y-6" data-oid="k06ii74">
                        <div data-oid="i7lr7kq">
                            <label className="flex items-center" data-oid="v9--v4d">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.enableNotifications}
                                    onChange={(e) =>
                                        handleSettingChange('enableNotifications', e.target.checked)
                                    }
                                    data-oid="w9-h7kf"
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid=".u8shl0">
                                    تفعيل الإشعارات
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1" data-oid="0p:btmx">
                                تفعيل أو إلغاء جميع الإشعارات في التطبيق
                            </p>
                        </div>
                        <div data-oid="xhwmw0s">
                            <label className="flex items-center" data-oid="watv2gh">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.enableSMS}
                                    onChange={(e) =>
                                        handleSettingChange('enableSMS', e.target.checked)
                                    }
                                    data-oid="wjlmclz"
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid="5p_0z-0">
                                    إشعارات الرسائل النصية
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1" data-oid="jc.ostd">
                                إرسال إشعارات عبر الرسائل النصية
                            </p>
                        </div>
                        <div data-oid="g2_5i09">
                            <label className="flex items-center" data-oid="9fdv6:p">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.enableEmail}
                                    onChange={(e) =>
                                        handleSettingChange('enableEmail', e.target.checked)
                                    }
                                    data-oid="5f48fn4"
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid="o2f4xts">
                                    إشعارات البريد الإلكتروني
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1" data-oid="jtnxdcs">
                                إرسال إشعارات عبر البريد الإلكتروني
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
                <div className="bg-white rounded-lg shadow p-6" data-oid="eub1rf8">
                    <h3 className="text-lg font-medium text-gray-900 mb-6" data-oid="2e6rlo6">
                        إعدادات الأمان
                    </h3>
                    <div className="space-y-6" data-oid="nd-47i9">
                        <div data-oid="_2h:l5v">
                            <label className="flex items-center" data-oid="_z-pm97">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    checked={settings.allowRegistration}
                                    onChange={(e) =>
                                        handleSettingChange('allowRegistration', e.target.checked)
                                    }
                                    data-oid="k0kgjcm"
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid="ju_fru6">
                                    السماح بالتسجيل الجديد
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1" data-oid="4vd_phj">
                                السماح للمستخدمين الجدد بإنشاء حسابات
                            </p>
                        </div>
                        <div data-oid="hitycvr">
                            <label className="flex items-center" data-oid="7487ih5">
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
                                    data-oid="5i1hofp"
                                />

                                <span className="mr-2 text-sm text-gray-700" data-oid="0arf39f">
                                    طلب التحقق من رقم الهاتف
                                </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1" data-oid="7i52zze">
                                إجبار المستخدمين على التحقق من أرقام هواتفهم
                            </p>
                        </div>
                        <div className="border-t border-gray-200 pt-6" data-oid="u_1xlwz">
                            <h4
                                className="text-md font-medium text-gray-900 mb-4"
                                data-oid="hy28gnj"
                            >
                                إجراءات الأمان
                            </h4>
                            <div className="space-y-3" data-oid="a935rae">
                                <button
                                    className="w-full md:w-auto bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                                    data-oid="79c:qid"
                                >
                                    تصدير نسخة احتياطية من البيانات
                                </button>
                                <button
                                    className="w-full md:w-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors mr-3"
                                    data-oid="cb92qik"
                                >
                                    مسح ذاكرة التخزين المؤقت
                                </button>
                                <button
                                    className="w-full md:w-auto bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors mr-3"
                                    data-oid="lbgqpd5"
                                >
                                    عرض سجل النشاطات
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex justify-end" data-oid="5apr4ft">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    data-oid="tiqrrtq"
                >
                    حفظ الإعدادات
                </button>
            </div>
        </div>
    );
}
