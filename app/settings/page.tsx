'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SettingItem {
    id: string;
    title: string;
    description?: string;
    icon: string;
    type: 'toggle' | 'navigation' | 'action';
    value?: boolean;
    href?: string;
    action?: () => void;
    color?: string;
}

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        notifications: true,
        emailNotifications: false,
        smsNotifications: true,
        locationServices: true,
        darkMode: false,
        autoAcceptOffers: false,
        showOnlineStatus: true,
    });

    const toggleSetting = (key: string) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const profileSettings: SettingItem[] = [
        {
            id: 'profile',
            title: 'الملف الشخصي',
            description: 'تحديث معلوماتك الشخصية',
            icon: '👤',
            type: 'navigation',
            href: '/profile/edit',
        },
        {
            id: 'payment',
            title: 'طرق الدفع',
            description: 'إدارة بطاقاتك ومحفظتك',
            icon: '💳',
            type: 'navigation',
            href: '/payment-methods',
        },
        {
            id: 'addresses',
            title: 'العناوين المحفوظة',
            description: 'إدارة عناوينك المفضلة',
            icon: '📍',
            type: 'navigation',
            href: '/addresses',
        },
    ];

    const notificationSettings: SettingItem[] = [
        {
            id: 'notifications',
            title: 'الإشعارات',
            description: 'تلقي إشعارات التطبيق',
            icon: '🔔',
            type: 'toggle',
            value: settings.notifications,
        },
        {
            id: 'emailNotifications',
            title: 'إشعارات البريد الإلكتروني',
            description: 'تلقي الإشعارات عبر البريد',
            icon: '📧',
            type: 'toggle',
            value: settings.emailNotifications,
        },
        {
            id: 'smsNotifications',
            title: 'الرسائل النصية',
            description: 'تلقي الإشعارات عبر SMS',
            icon: '📱',
            type: 'toggle',
            value: settings.smsNotifications,
        },
    ];

    const appSettings: SettingItem[] = [
        {
            id: 'language',
            title: 'اللغة',
            description: 'العربية',
            icon: '🌐',
            type: 'navigation',
            href: '/settings/language',
        },
        {
            id: 'darkMode',
            title: 'الوضع الليلي',
            description: 'تفعيل المظهر الداكن',
            icon: '🌙',
            type: 'toggle',
            value: settings.darkMode,
        },
        {
            id: 'locationServices',
            title: 'خدمات الموقع',
            description: 'السماح بالوصول للموقع',
            icon: '📍',
            type: 'toggle',
            value: settings.locationServices,
        },
    ];

    const serviceSettings: SettingItem[] = [
        {
            id: 'autoAcceptOffers',
            title: 'قبول العروض تلقائياً',
            description: 'قبول أفضل العروض تلقائياً',
            icon: '⚡',
            type: 'toggle',
            value: settings.autoAcceptOffers,
        },
        {
            id: 'showOnlineStatus',
            title: 'إظهار حالة الاتصال',
            description: 'إظهار حالتك للمقدمين',
            icon: '🟢',
            type: 'toggle',
            value: settings.showOnlineStatus,
        },
        {
            id: 'serviceHistory',
            title: 'سجل الخدمات',
            description: 'عرض جميع خدماتك السابقة',
            icon: '📋',
            type: 'navigation',
            href: '/service-history',
        },
    ];

    const supportSettings: SettingItem[] = [
        {
            id: 'help',
            title: 'المساعدة والدعم',
            description: 'الحصول على المساعدة',
            icon: '❓',
            type: 'navigation',
            href: '/help',
        },
        {
            id: 'contact',
            title: 'تواصل معنا',
            description: 'إرسال رسالة للدعم',
            icon: '📞',
            type: 'navigation',
            href: '/contact',
        },
        {
            id: 'feedback',
            title: 'تقييم التطبيق',
            description: 'شاركنا رأيك في التطبيق',
            icon: '⭐',
            type: 'navigation',
            href: '/feedback',
        },
    ];

    const legalSettings: SettingItem[] = [
        {
            id: 'privacy',
            title: 'سياسة الخصوصية',
            icon: '🔒',
            type: 'navigation',
            href: '/privacy-policy',
        },
        {
            id: 'terms',
            title: 'شروط الاستخدام',
            icon: '📄',
            type: 'navigation',
            href: '/terms-of-service',
        },
        {
            id: 'about',
            title: 'حول التطبيق',
            description: 'الإصدار 1.0.0',
            icon: 'ℹ️',
            type: 'navigation',
            href: '/about',
        },
    ];

    const dangerSettings: SettingItem[] = [
        {
            id: 'logout',
            title: 'تسجيل الخروج',
            icon: '🚪',
            type: 'action',
            color: 'text-red-600',
            action: () => {
                if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
                    // Handle logout
                    alert('تم تسجيل الخروج');
                }
            },
        },
        {
            id: 'deleteAccount',
            title: 'حذف الحساب',
            description: 'حذف حسابك نهائياً',
            icon: '🗑️',
            type: 'action',
            color: 'text-red-600',
            action: () => {
                if (confirm('هل أنت متأكد من حذف حسابك؟ هذا الإجراء لا يمكن التراجع عنه.')) {
                    // Handle account deletion
                    alert('سيتم حذف حسابك خلال 24 ساعة');
                }
            },
        },
    ];

    const renderSettingItem = (item: SettingItem) => {
        const baseClasses =
            'bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between';
        const textColor = item.color || 'text-gray-800';

        if (item.type === 'toggle') {
            return (
                <div key={item.id} className={baseClasses} data-oid="nzhsnyp">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="e1-4csj">
                        <div className="text-2xl" data-oid="ou4e8re">
                            {item.icon}
                        </div>
                        <div data-oid="3w5f9:q">
                            <h3 className={`font-semibold ${textColor}`} data-oid="7igpfh.">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-sm text-gray-600" data-oid="apap27o">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={() => toggleSetting(item.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            item.value ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        data-oid="9lm-23u"
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                item.value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                            data-oid="jpzh133"
                        />
                    </button>
                </div>
            );
        }

        if (item.type === 'navigation') {
            return (
                <Link
                    key={item.id}
                    href={item.href || '#'}
                    className={`${baseClasses} cursor-pointer hover:shadow-md transition-shadow`}
                    data-oid="ufhxmup"
                >
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="mkw7e91">
                        <div className="text-2xl" data-oid="733.gc.">
                            {item.icon}
                        </div>
                        <div data-oid="9-0vg.o">
                            <h3 className={`font-semibold ${textColor}`} data-oid="ch47:q7">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-sm text-gray-600" data-oid="w97zywg">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <span className="text-gray-400" data-oid="6c:-0cz">
                        ←
                    </span>
                </Link>
            );
        }

        if (item.type === 'action') {
            return (
                <button
                    key={item.id}
                    onClick={item.action}
                    className={`${baseClasses} cursor-pointer hover:shadow-md transition-shadow`}
                    data-oid="5_cqpl:"
                >
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="elg66i7">
                        <div className="text-2xl" data-oid="_4umuiw">
                            {item.icon}
                        </div>
                        <div data-oid="-ydoguk">
                            <h3 className={`font-semibold ${textColor}`} data-oid="wqn1ydc">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-sm text-gray-600" data-oid="u6rvz.h">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <span className="text-gray-400" data-oid="1p9.r9w">
                        ←
                    </span>
                </button>
            );
        }

        return null;
    };

    const renderSection = (title: string, items: SettingItem[]) => (
        <div className="mb-6" data-oid=":-3hivo">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 px-1" data-oid="j3bketn">
                {title}
            </h2>
            <div className="space-y-3" data-oid="wuwc53f">
                {items.map(renderSettingItem)}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="n0tt_fp">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="e5bf5_r"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="lat8gi:">
                    <div className="flex items-center justify-between mb-4" data-oid="_4fr3mo">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="dmip-kv"
                        >
                            <span className="text-lg" data-oid="1-b2imo">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="vik24x9">
                            الإعدادات
                        </h1>
                        <div className="w-10" data-oid="3cnpbhf"></div>
                    </div>
                    <p className="text-white/90 text-sm text-center" data-oid="8r:wto_">
                        إدارة حسابك وتخصيص التطبيق
                    </p>
                </div>
            </div>

            {/* User Profile Card */}
            <div className="max-w-sm mx-auto px-4 -mt-6 relative z-10 mb-6" data-oid="ocshhv-">
                <div className="bg-white rounded-2xl shadow-lg p-4" data-oid="d0c439y">
                    <div className="flex items-center space-x-4 space-x-reverse" data-oid="18j3qhh">
                        <div
                            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                            data-oid="ibg8sza"
                        >
                            <span className="text-2xl text-white" data-oid="731ez:6">
                                👤
                            </span>
                        </div>
                        <div className="flex-1" data-oid="85cvuwv">
                            <h3 className="font-bold text-gray-800" data-oid="9nqdv4i">
                                أحمد محمد
                            </h3>
                            <p className="text-sm text-gray-600" data-oid="e6.cle4">
                                ahmed.mohamed@example.com
                            </p>
                            <div
                                className="flex items-center space-x-2 space-x-reverse mt-1"
                                data-oid="zfzf8gk"
                            >
                                <span
                                    className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full"
                                    data-oid="i.bz38d"
                                >
                                    عضو مميز
                                </span>
                                <span className="text-xs text-gray-500" data-oid="40xnq-w">
                                    ⭐ 4.9
                                </span>
                            </div>
                        </div>
                        <Link
                            href="/profile/edit"
                            className="text-blue-600 text-sm font-semibold"
                            data-oid="m3h_m.q"
                        >
                            تعديل
                        </Link>
                    </div>
                </div>
            </div>

            {/* Settings Sections */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="f712807">
                {renderSection('الحساب الشخصي', profileSettings)}
                {renderSection('الإشعارات', notificationSettings)}
                {renderSection('إعدادات التطبيق', appSettings)}
                {renderSection('إعدادات الخدمة', serviceSettings)}
                {renderSection('المساعدة والدعم', supportSettings)}
                {renderSection('القانونية', legalSettings)}
                {renderSection('إعدادات متقدمة', dangerSettings)}
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="8mk3pp8"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="qsa59v:">
                    <div className="flex justify-around" data-oid="nd4-8q.">
                        <Link
                            href="/"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="g_zpr_x"
                        >
                            <span className="text-xl" data-oid="orq:ctr">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="79gbyao">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/categories"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="-mh-tqp"
                        >
                            <span className="text-xl" data-oid="_xasn_i">
                                📂
                            </span>
                            <span className="text-xs" data-oid="o9w1zzk">
                                التصنيفات
                            </span>
                        </Link>
                        <Link
                            href="/orders"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="27oh1cf"
                        >
                            <span className="text-xl" data-oid="4rhyg_7">
                                📋
                            </span>
                            <span className="text-xs" data-oid="-4g-c1b">
                                طلباتي
                            </span>
                        </Link>
                        <Link
                            href="/wallet"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="iup__oq"
                        >
                            <span className="text-xl" data-oid="c:3iy7.">
                                💰
                            </span>
                            <span className="text-xs" data-oid="qvdlswp">
                                المحفظة
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-blue-600"
                            data-oid="el0keao"
                        >
                            <span className="text-xl" data-oid="_indn_d">
                                ⚙️
                            </span>
                            <span className="text-xs font-semibold" data-oid="rr9cmt3">
                                الإعدادات
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="wfx2:lx"></div>
        </div>
    );
}
