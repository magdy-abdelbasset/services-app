'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OrdersManagement() {
    const [orders] = useState([
        {
            id: 1,
            customer: 'أحمد محمد',
            provider: 'فاطمة علي',
            service: 'تنظيف المنزل',
            status: 'مكتمل',
            amount: 45,
            date: '2024-02-20',
            time: '14:30',
            location: 'الرياض، حي النخيل',
            rating: 5,
        },
        {
            id: 2,
            customer: 'سارة أحمد',
            provider: 'محمد حسن',
            service: 'صيانة السباكة',
            status: 'جاري التنفيذ',
            amount: 80,
            date: '2024-02-21',
            time: '10:00',
            location: 'جدة، حي الصفا',
            rating: null,
        },
        {
            id: 3,
            customer: 'علي محمود',
            provider: 'خالد عبدالله',
            service: 'توصيل الطعام',
            status: 'في الانتظار',
            amount: 25,
            date: '2024-02-21',
            time: '12:15',
            location: 'الدمام، حي الشاطئ',
            rating: null,
        },
        {
            id: 4,
            customer: 'نور الدين',
            provider: 'ليلى محمد',
            service: 'خدمات التجميل',
            status: 'مكتمل',
            amount: 120,
            date: '2024-02-19',
            time: '16:00',
            location: 'الرياض، حي العليا',
            rating: 4,
        },
        {
            id: 5,
            customer: 'مريم سالم',
            provider: 'عمر يوسف',
            service: 'تصليح الأجهزة',
            status: 'ملغي',
            amount: 60,
            date: '2024-02-18',
            time: '09:30',
            location: 'مكة، حي العزيزية',
            rating: null,
        },
        {
            id: 6,
            customer: 'خالد أحمد',
            provider: 'أمينة سعد',
            service: 'تنظيف السجاد',
            status: 'مؤكد',
            amount: 35,
            date: '2024-02-22',
            time: '11:00',
            location: 'المدينة، حي قباء',
            rating: null,
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');
    const [dateFilter, setDateFilter] = useState('');

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.toString().includes(searchTerm);
        const matchesStatus = statusFilter === 'الكل' || order.status === statusFilter;
        const matchesDate = !dateFilter || order.date === dateFilter;
        return matchesSearch && matchesStatus && matchesDate;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'مكتمل':
                return 'bg-green-100 text-green-800';
            case 'جاري التنفيذ':
                return 'bg-blue-100 text-blue-800';
            case 'في الانتظار':
                return 'bg-yellow-100 text-yellow-800';
            case 'مؤكد':
                return 'bg-purple-100 text-purple-800';
            case 'ملغي':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'مكتمل':
                return '✅';
            case 'جاري التنفيذ':
                return '🔄';
            case 'في الانتظار':
                return '⏳';
            case 'مؤكد':
                return '✔️';
            case 'ملغي':
                return '❌';
            default:
                return '❓';
        }
    };

    const totalRevenue = orders
        .filter((o) => o.status === 'مكتمل')
        .reduce((sum, order) => sum + order.amount, 0);
    const activeOrders = orders.filter((o) =>
        ['جاري التنفيذ', 'في الانتظار', 'مؤكد'].includes(o.status),
    ).length;
    const completedOrders = orders.filter((o) => o.status === 'مكتمل').length;
    const cancelledOrders = orders.filter((o) => o.status === 'ملغي').length;

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">إدارة الطلبات</h1>
                <p className="text-gray-600">متابعة وإدارة جميع طلبات الخدمات في التطبيق</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">📋</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">إجمالي الطلبات</p>
                            <p className="text-xl font-semibold text-gray-900">{orders.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">🔄</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">الطلبات النشطة</p>
                            <p className="text-xl font-semibold text-gray-900">{activeOrders}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">✅</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المكتملة</p>
                            <p className="text-xl font-semibold text-gray-900">{completedOrders}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">💰</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">إجمالي الإيرادات</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {totalRevenue} ريال
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            البحث
                        </label>
                        <input
                            type="text"
                            placeholder="ابحث برقم الطلب، العميل، مقدم الخدمة..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            الحالة
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="الكل">جميع الحالات</option>
                            <option value="مكتمل">مكتمل</option>
                            <option value="جاري التنفيذ">جاري التنفيذ</option>
                            <option value="في الانتظار">في الانتظار</option>
                            <option value="مؤكد">مؤكد</option>
                            <option value="ملغي">ملغي</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            التاريخ
                        </label>
                        <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                        />
                    </div>
                    <div className="flex items-end">
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                            تصدير التقرير
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">قائمة الطلبات</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    رقم الطلب
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    العميل
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    مقدم الخدمة
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الخدمة
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    التاريخ والوقت
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    المبلغ
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الحالة
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    التقييم
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        #{order.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {order.customer}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {order.provider}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {order.service}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div>{order.date}</div>
                                        <div className="text-xs text-gray-400">{order.time}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {order.amount} ريال
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="ml-2">
                                                {getStatusIcon(order.status)}
                                            </span>
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {order.rating ? (
                                            <div className="flex items-center">
                                                <span className="text-yellow-500 ml-1">⭐</span>
                                                <span>{order.rating}</span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400">لا يوجد</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2 space-x-reverse">
                                            <Link
                                                href={`/admin/orders/${order.id}`}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                عرض
                                            </Link>
                                            <button className="text-green-600 hover:text-green-900">
                                                تعديل
                                            </button>
                                            {order.status === 'في الانتظار' && (
                                                <button className="text-red-600 hover:text-red-900">
                                                    إلغاء
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
