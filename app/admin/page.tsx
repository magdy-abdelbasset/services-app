'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [stats] = useState({
        totalUsers: 1247,
        totalProviders: 342,
        totalOrders: 2156,
        totalRevenue: 125430,
        activeOrders: 89,
        pendingApprovals: 23,
        newRegistrations: 45,
        completedToday: 67,
    });

    const recentOrders = [
        {
            id: 1,
            customer: 'أحمد محمد',
            service: 'تنظيف المنزل',
            provider: 'فاطمة علي',
            status: 'مكتمل',
            amount: 45,
        },
        {
            id: 2,
            customer: 'سارة أحمد',
            service: 'صيانة السباكة',
            provider: 'محمد حسن',
            status: 'جاري التنفيذ',
            amount: 80,
        },
        {
            id: 3,
            customer: 'علي محمود',
            service: 'توصيل الطعام',
            provider: 'خالد عبدالله',
            status: 'في الانتظار',
            amount: 25,
        },
        {
            id: 4,
            customer: 'نور الدين',
            service: 'خدمات التجميل',
            provider: 'ليلى محمد',
            status: 'مكتمل',
            amount: 120,
        },
        {
            id: 5,
            customer: 'مريم سالم',
            service: 'تصليح الأجهزة',
            provider: 'عمر يوسف',
            status: 'ملغي',
            amount: 60,
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'مكتمل':
                return 'bg-green-100 text-green-800';
            case 'جاري التنفيذ':
                return 'bg-blue-100 text-blue-800';
            case 'في الانتظار':
                return 'bg-yellow-100 text-yellow-800';
            case 'ملغي':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <h1 className="text-2xl font-bold text-gray-900">
                                لوحة التحكم الإدارية
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="relative">
                                <button className="p-2 text-gray-400 hover:text-gray-500">
                                    <span className="text-xl">🔔</span>
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {stats.pendingApprovals}
                                    </span>
                                </button>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-semibold">أ</span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    المدير العام
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">👥</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">
                                    إجمالي المستخدمين
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {stats.totalUsers.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">🔧</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">مقدمي الخدمات</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {stats.totalProviders.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">📋</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">إجمالي الطلبات</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {stats.totalOrders.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">💰</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">
                                    إجمالي الإيرادات
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {stats.totalRevenue.toLocaleString()} ريال
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-blue-600">{stats.activeOrders}</p>
                        <p className="text-sm text-blue-800">طلبات نشطة</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-orange-600">
                            {stats.pendingApprovals}
                        </p>
                        <p className="text-sm text-orange-800">في انتظار الموافقة</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-green-600">
                            {stats.newRegistrations}
                        </p>
                        <p className="text-sm text-green-800">تسجيلات جديدة اليوم</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-purple-600">{stats.completedToday}</p>
                        <p className="text-sm text-purple-800">مكتملة اليوم</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        الطلبات الأخيرة
                                    </h3>
                                    <Link
                                        href="/admin/orders"
                                        className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                                    >
                                        عرض الكل
                                    </Link>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                العميل
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                الخدمة
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                مقدم الخدمة
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                الحالة
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                المبلغ
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {order.customer}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {order.service}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {order.provider}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
                                                    >
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.amount} ريال
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                إجراءات سريعة
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    href="/admin/users"
                                    className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                                >
                                    إدارة المستخدمين
                                </Link>
                                <Link
                                    href="/admin/providers"
                                    className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                                >
                                    إدارة مقدمي الخدمات
                                </Link>
                                <Link
                                    href="/admin/services"
                                    className="block w-full bg-purple-500 text-white text-center py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
                                >
                                    إدارة الخدمات
                                </Link>
                                <Link
                                    href="/admin/orders"
                                    className="block w-full bg-orange-500 text-white text-center py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
                                >
                                    إدارة الطلبات
                                </Link>
                                <Link
                                    href="/admin/analytics"
                                    className="block w-full bg-indigo-500 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
                                >
                                    التقارير والإحصائيات
                                </Link>
                                <Link
                                    href="/admin/settings"
                                    className="block w-full bg-gray-500 text-white text-center py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                                >
                                    الإعدادات
                                </Link>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">حالة النظام</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">الخادم</span>
                                    <span className="flex items-center text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        متصل
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">قاعدة البيانات</span>
                                    <span className="flex items-center text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        متصلة
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">خدمة الدفع</span>
                                    <span className="flex items-center text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        نشطة
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">الإشعارات</span>
                                    <span className="flex items-center text-yellow-600">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                        تحديث مطلوب
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
