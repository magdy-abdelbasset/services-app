'use client';

import { useState } from 'react';
import { useNotifications } from '../../../hooks/useNotifications';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    type: 'customer' | 'provider';
    isActive: boolean;
    lastSeen: string;
}

interface NotificationTemplate {
    id: number;
    name: string;
    title: string;
    content: string;
    type: 'info' | 'warning' | 'success' | 'promotion' | 'system';
    category: 'general' | 'order' | 'payment' | 'system' | 'marketing';
}

interface SentNotification {
    id: number;
    title: string;
    content: string;
    type: 'info' | 'warning' | 'success' | 'promotion' | 'system';
    recipients: number;
    sentAt: string;
    status: 'sent' | 'pending' | 'failed';
    deliveryRate: number;
    openRate: number;
}

export default function AdminNotificationsPage() {
    const { showSuccess, showError, showWarning } = useNotifications();

    // Form state
    const [notificationForm, setNotificationForm] = useState({
        title: '',
        content: '',
        type: 'info' as 'info' | 'warning' | 'success' | 'promotion' | 'system',
        targetAudience: 'all' as 'all' | 'customers' | 'providers' | 'specific',
        selectedUsers: [] as string[],
        scheduleType: 'now' as 'now' | 'scheduled',
        scheduledDate: '',
        scheduledTime: '',
        includeEmail: true,
        includeSMS: false,
        includePush: true,
    });

    const [activeTab, setActiveTab] = useState<'send' | 'templates' | 'history'>('send');
    const [showUserSelector, setShowUserSelector] = useState(false);

    // Mock data
    const [users] = useState<User[]>([
        {
            id: '1',
            name: 'أحمد محمد',
            email: 'ahmed@example.com',
            phone: '+966501234567',
            type: 'customer',
            isActive: true,
            lastSeen: '2024-02-21 14:30',
        },
        {
            id: '2',
            name: 'فاطمة علي',
            email: 'fatima@example.com',
            phone: '+966507654321',
            type: 'provider',
            isActive: true,
            lastSeen: '2024-02-21 16:45',
        },
        {
            id: '3',
            name: 'سارة أحمد',
            email: 'sara@example.com',
            phone: '+966509876543',
            type: 'customer',
            isActive: false,
            lastSeen: '2024-02-20 10:15',
        },
        {
            id: '4',
            name: 'محمد حسن',
            email: 'mohammed@example.com',
            phone: '+966502468135',
            type: 'provider',
            isActive: true,
            lastSeen: '2024-02-21 18:20',
        },
    ]);

    const [templates] = useState<NotificationTemplate[]>([
        {
            id: 1,
            name: 'ترحيب بالمستخدمين الجدد',
            title: 'مرحباً بك في تطبيقنا!',
            content: 'نحن سعداء لانضمامك إلينا. استكشف خدماتنا المتنوعة واستمتع بتجربة فريدة.',
            type: 'success',
            category: 'general',
        },
        {
            id: 2,
            name: 'تذكير بالطلب المعلق',
            title: 'لديك طلب في الانتظار',
            content: 'لا تنس أن لديك طلب خدمة في الانتظار. يرجى المتابعة لإتمام العملية.',
            type: 'warning',
            category: 'order',
        },
        {
            id: 3,
            name: 'عرض خاص',
            title: 'عرض محدود - خصم 20%',
            content: 'احصل على خصم 20% على جميع الخدمات لفترة محدودة. استخدم الكود: SAVE20',
            type: 'promotion',
            category: 'marketing',
        },
        {
            id: 4,
            name: 'تحديث النظام',
            title: 'تحديث مهم للتطبيق',
            content:
                'سيتم إجراء صيانة للنظام غداً من الساعة 2:00 إلى 4:00 صباحاً. نعتذر عن أي إزعاج.',
            type: 'system',
            category: 'system',
        },
    ]);

    const [sentNotifications] = useState<SentNotification[]>([
        {
            id: 1,
            title: 'ترحيب بالمستخدمين الجدد',
            content: 'مرحباً بك في تطبيقنا! نحن سعداء لانضمامك إلينا...',
            type: 'success',
            recipients: 150,
            sentAt: '2024-02-21 10:30',
            status: 'sent',
            deliveryRate: 98.5,
            openRate: 75.2,
        },
        {
            id: 2,
            title: 'تحديث النظام',
            content: 'سيتم إجراء صيانة للنظام غداً من الساعة 2:00 إلى 4:00 صباحاً...',
            type: 'system',
            recipients: 1247,
            sentAt: '2024-02-20 16:45',
            status: 'sent',
            deliveryRate: 99.1,
            openRate: 82.3,
        },
        {
            id: 3,
            title: 'عرض خاص - خصم 20%',
            content: 'احصل على خصم 20% على جميع الخدمات لفترة محدودة...',
            type: 'promotion',
            recipients: 890,
            sentAt: '2024-02-19 14:20',
            status: 'sent',
            deliveryRate: 97.8,
            openRate: 68.9,
        },
    ]);

    const handleInputChange = (field: string, value: any) => {
        setNotificationForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleUserSelection = (userId: string) => {
        setNotificationForm((prev) => ({
            ...prev,
            selectedUsers: prev.selectedUsers.includes(userId)
                ? prev.selectedUsers.filter((id) => id !== userId)
                : [...prev.selectedUsers, userId],
        }));
    };

    const handleSelectAllUsers = () => {
        const filteredUsers = users.filter((user) => {
            if (notificationForm.targetAudience === 'customers') return user.type === 'customer';
            if (notificationForm.targetAudience === 'providers') return user.type === 'provider';
            return true;
        });

        setNotificationForm((prev) => ({
            ...prev,
            selectedUsers: filteredUsers.map((user) => user.id),
        }));
    };

    const handleClearSelection = () => {
        setNotificationForm((prev) => ({
            ...prev,
            selectedUsers: [],
        }));
    };

    const handleUseTemplate = (template: NotificationTemplate) => {
        setNotificationForm((prev) => ({
            ...prev,
            title: template.title,
            content: template.content,
            type: template.type,
        }));
        setActiveTab('send');
        showSuccess('تم التحميل', 'تم تحميل القالب بنجاح');
    };

    const handleSendNotification = () => {
        if (!notificationForm.title.trim() || !notificationForm.content.trim()) {
            showError('خطأ', 'يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        if (
            notificationForm.targetAudience === 'specific' &&
            notificationForm.selectedUsers.length === 0
        ) {
            showError('خطأ', 'يرجى اختيار المستخدمين المستهدفين');
            return;
        }

        // Simulate sending notification
        showSuccess('تم الإرسال', 'تم إرسال الإشعار بنجاح');

        // Reset form
        setNotificationForm({
            title: '',
            content: '',
            type: 'info',
            targetAudience: 'all',
            selectedUsers: [],
            scheduleType: 'now',
            scheduledDate: '',
            scheduledTime: '',
            includeEmail: true,
            includeSMS: false,
            includePush: true,
        });
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'success':
                return 'bg-green-100 text-green-800';
            case 'warning':
                return 'bg-yellow-100 text-yellow-800';
            case 'info':
                return 'bg-blue-100 text-blue-800';
            case 'promotion':
                return 'bg-purple-100 text-purple-800';
            case 'system':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'success':
                return '✅';
            case 'warning':
                return '⚠️';
            case 'info':
                return 'ℹ️';
            case 'promotion':
                return '🎉';
            case 'system':
                return '⚙️';
            default:
                return '📢';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'sent':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const filteredUsers = users.filter((user) => {
        if (notificationForm.targetAudience === 'customers') return user.type === 'customer';
        if (notificationForm.targetAudience === 'providers') return user.type === 'provider';
        return true;
    });

    const getRecipientCount = () => {
        if (notificationForm.targetAudience === 'specific') {
            return notificationForm.selectedUsers.length;
        }
        return filteredUsers.length;
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">إرسال الإشعارات</h1>
                <p className="text-gray-600">إرسال إشعارات للمستخدمين ومقدمي الخدمات</p>
            </div>

            {/* Tabs */}
            <div className="mb-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8 space-x-reverse">
                        <button
                            onClick={() => setActiveTab('send')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'send'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            إرسال إشعار جديد
                        </button>
                        <button
                            onClick={() => setActiveTab('templates')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'templates'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            القوالب الجاهزة
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'history'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            سجل الإشعارات
                        </button>
                    </nav>
                </div>
            </div>

            {/* Send Notification Tab */}
            {activeTab === 'send' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-6">
                                إنشاء إشعار جديد
                            </h3>

                            <div className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        عنوان الإشعار *
                                    </label>
                                    <input
                                        type="text"
                                        value={notificationForm.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                        placeholder="أدخل عنوان الإشعار"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        محتوى الإشعار *
                                    </label>
                                    <textarea
                                        value={notificationForm.content}
                                        onChange={(e) =>
                                            handleInputChange('content', e.target.value)
                                        }
                                        placeholder="أدخل محتوى الإشعار"
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        نوع الإشعار
                                    </label>
                                    <select
                                        value={notificationForm.type}
                                        onChange={(e) => handleInputChange('type', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="info">معلومات</option>
                                        <option value="success">نجاح</option>
                                        <option value="warning">تحذير</option>
                                        <option value="promotion">عرض ترويجي</option>
                                        <option value="system">نظام</option>
                                    </select>
                                </div>

                                {/* Target Audience */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الجمهور المستهدف
                                    </label>
                                    <select
                                        value={notificationForm.targetAudience}
                                        onChange={(e) => {
                                            handleInputChange('targetAudience', e.target.value);
                                            if (e.target.value !== 'specific') {
                                                setShowUserSelector(false);
                                                handleInputChange('selectedUsers', []);
                                            }
                                        }}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">جميع المستخدمين</option>
                                        <option value="customers">العملاء فقط</option>
                                        <option value="providers">مقدمي الخدمات فقط</option>
                                        <option value="specific">مستخدمين محددين</option>
                                    </select>
                                </div>

                                {/* User Selector */}
                                {notificationForm.targetAudience === 'specific' && (
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                اختيار المستخدمين (
                                                {notificationForm.selectedUsers.length} محدد)
                                            </label>
                                            <div className="space-x-2 space-x-reverse">
                                                <button
                                                    onClick={handleSelectAllUsers}
                                                    className="text-blue-600 hover:text-blue-800 text-sm"
                                                >
                                                    تحديد الكل
                                                </button>
                                                <button
                                                    onClick={handleClearSelection}
                                                    className="text-red-600 hover:text-red-800 text-sm"
                                                >
                                                    إلغاء التحديد
                                                </button>
                                            </div>
                                        </div>
                                        <div className="border border-gray-300 rounded-md max-h-48 overflow-y-auto">
                                            {filteredUsers.map((user) => (
                                                <label
                                                    key={user.id}
                                                    className="flex items-center p-3 hover:bg-gray-50 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={notificationForm.selectedUsers.includes(
                                                            user.id,
                                                        )}
                                                        onChange={() =>
                                                            handleUserSelection(user.id)
                                                        }
                                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-3"
                                                    />

                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <span className="font-medium text-gray-900">
                                                                    {user.name}
                                                                </span>
                                                                <span
                                                                    className={`mr-2 px-2 py-0.5 text-xs rounded-full ${
                                                                        user.type === 'customer'
                                                                            ? 'bg-blue-100 text-blue-800'
                                                                            : 'bg-green-100 text-green-800'
                                                                    }`}
                                                                >
                                                                    {user.type === 'customer'
                                                                        ? 'عميل'
                                                                        : 'مقدم خدمة'}
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={`w-2 h-2 rounded-full ${user.isActive ? 'bg-green-500' : 'bg-gray-400'}`}
                                                            ></div>
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {user.email} • {user.phone}
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Delivery Methods */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        طرق التوصيل
                                    </label>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={notificationForm.includePush}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        'includePush',
                                                        e.target.checked,
                                                    )
                                                }
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
                                            />

                                            <span className="text-sm text-gray-700">
                                                إشعار داخل التطبيق
                                            </span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={notificationForm.includeEmail}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        'includeEmail',
                                                        e.target.checked,
                                                    )
                                                }
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
                                            />

                                            <span className="text-sm text-gray-700">
                                                بريد إلكتروني
                                            </span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={notificationForm.includeSMS}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        'includeSMS',
                                                        e.target.checked,
                                                    )
                                                }
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2"
                                            />

                                            <span className="text-sm text-gray-700">
                                                رسالة نصية
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                {/* Schedule */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        توقيت الإرسال
                                    </label>
                                    <div className="space-y-3">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="scheduleType"
                                                value="now"
                                                checked={notificationForm.scheduleType === 'now'}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        'scheduleType',
                                                        e.target.value,
                                                    )
                                                }
                                                className="text-blue-600 focus:ring-blue-500 ml-2"
                                            />

                                            <span className="text-sm text-gray-700">
                                                إرسال فوري
                                            </span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="scheduleType"
                                                value="scheduled"
                                                checked={
                                                    notificationForm.scheduleType === 'scheduled'
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        'scheduleType',
                                                        e.target.value,
                                                    )
                                                }
                                                className="text-blue-600 focus:ring-blue-500 ml-2"
                                            />

                                            <span className="text-sm text-gray-700">
                                                جدولة الإرسال
                                            </span>
                                        </label>
                                        {notificationForm.scheduleType === 'scheduled' && (
                                            <div className="mr-6 grid grid-cols-2 gap-3">
                                                <input
                                                    type="date"
                                                    value={notificationForm.scheduledDate}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            'scheduledDate',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />

                                                <input
                                                    type="time"
                                                    value={notificationForm.scheduledTime}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            'scheduledTime',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview and Send */}
                    <div className="space-y-6">
                        {/* Preview */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                معاينة الإشعار
                            </h3>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                            notificationForm.type === 'success'
                                                ? 'bg-green-500'
                                                : notificationForm.type === 'warning'
                                                  ? 'bg-yellow-500'
                                                  : notificationForm.type === 'promotion'
                                                    ? 'bg-purple-500'
                                                    : notificationForm.type === 'system'
                                                      ? 'bg-gray-500'
                                                      : 'bg-blue-500'
                                        }`}
                                    >
                                        <span className="text-lg text-white">
                                            {getTypeIcon(notificationForm.type)}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-800 mb-1">
                                            {notificationForm.title || 'عنوان الإشعار'}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {notificationForm.content || 'محتوى الإشعار سيظهر هنا'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Send Summary */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">ملخص الإرسال</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">عدد المستلمين:</span>
                                    <span className="text-sm font-medium text-gray-900">
                                        {getRecipientCount()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">نوع الإشعار:</span>
                                    <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(notificationForm.type)}`}
                                    >
                                        {notificationForm.type === 'info'
                                            ? 'معلومات'
                                            : notificationForm.type === 'success'
                                              ? 'نجاح'
                                              : notificationForm.type === 'warning'
                                                ? 'تحذير'
                                                : notificationForm.type === 'promotion'
                                                  ? 'عرض ترويجي'
                                                  : 'نظام'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">طرق التوصيل:</span>
                                    <div className="text-sm text-gray-900">
                                        {[
                                            notificationForm.includePush && 'تطبيق',
                                            notificationForm.includeEmail && 'إيميل',
                                            notificationForm.includeSMS && 'SMS',
                                        ]
                                            .filter(Boolean)
                                            .join(' + ') || 'لا يوجد'}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">التوقيت:</span>
                                    <span className="text-sm text-gray-900">
                                        {notificationForm.scheduleType === 'now'
                                            ? 'فوري'
                                            : `${notificationForm.scheduledDate} ${notificationForm.scheduledTime}`}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={handleSendNotification}
                                className="w-full mt-6 bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
                            >
                                {notificationForm.scheduleType === 'now'
                                    ? 'إرسال الإشعار'
                                    : 'جدولة الإشعار'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Templates Tab */}
            {activeTab === 'templates' && (
                <div className="bg-white rounded-lg shadow">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">القوالب الجاهزة</h3>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {templates.map((template) => (
                                <div
                                    key={template.id}
                                    className="border border-gray-200 rounded-lg p-4"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="font-medium text-gray-900">
                                                {template.name}
                                            </h4>
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(template.type)}`}
                                            >
                                                {template.type === 'info'
                                                    ? 'معلومات'
                                                    : template.type === 'success'
                                                      ? 'نجاح'
                                                      : template.type === 'warning'
                                                        ? 'تحذير'
                                                        : template.type === 'promotion'
                                                          ? 'عرض ترويجي'
                                                          : 'نظام'}
                                            </span>
                                        </div>
                                        <span className="text-2xl">
                                            {getTypeIcon(template.type)}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="font-medium text-gray-800 mb-1">
                                            {template.title}
                                        </h5>
                                        <p className="text-sm text-gray-600">{template.content}</p>
                                    </div>
                                    <button
                                        onClick={() => handleUseTemplate(template)}
                                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors text-sm"
                                    >
                                        استخدام هذا القالب
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
                <div className="bg-white rounded-lg shadow">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">سجل الإشعارات المرسلة</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        العنوان
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        النوع
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        المستلمين
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        تاريخ الإرسال
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        الحالة
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        معدل التوصيل
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        معدل الفتح
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sentNotifications.map((notification) => (
                                    <tr key={notification.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {notification.title}
                                                </div>
                                                <div className="text-sm text-gray-500 truncate max-w-xs">
                                                    {notification.content}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="ml-2">
                                                    {getTypeIcon(notification.type)}
                                                </span>
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(notification.type)}`}
                                                >
                                                    {notification.type === 'info'
                                                        ? 'معلومات'
                                                        : notification.type === 'success'
                                                          ? 'نجاح'
                                                          : notification.type === 'warning'
                                                            ? 'تحذير'
                                                            : notification.type === 'promotion'
                                                              ? 'عرض ترويجي'
                                                              : 'نظام'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {notification.recipients.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div>
                                                <div>{notification.sentAt.split(' ')[0]}</div>
                                                <div className="text-xs text-gray-400">
                                                    {notification.sentAt.split(' ')[1]}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(notification.status)}`}
                                            >
                                                {notification.status === 'sent'
                                                    ? 'مرسل'
                                                    : notification.status === 'pending'
                                                      ? 'في الانتظار'
                                                      : 'فشل'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex items-center">
                                                <div className="w-16 bg-gray-200 rounded-full h-2 ml-2">
                                                    <div
                                                        className="bg-green-500 h-2 rounded-full"
                                                        style={{
                                                            width: `${notification.deliveryRate}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <span>{notification.deliveryRate}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex items-center">
                                                <div className="w-16 bg-gray-200 rounded-full h-2 ml-2">
                                                    <div
                                                        className="bg-blue-500 h-2 rounded-full"
                                                        style={{
                                                            width: `${notification.openRate}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <span>{notification.openRate}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
