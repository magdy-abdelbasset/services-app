'use client';

import { useState } from 'react';
import Link from 'next/link';

interface WalletTransaction {
    id: number;
    userId: number;
    userName: string;
    userEmail: string;
    type: 'credit' | 'debit';
    amount: number;
    description: string;
    date: string;
    status: 'completed' | 'pending' | 'failed';
    category: 'service' | 'topup' | 'refund' | 'bonus' | 'transfer' | 'commission';
    orderId?: number;
    paymentMethod?: string;
    transactionId: string;
}

export default function AdminWalletTransactionsPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'credit' | 'debit' | 'pending'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Mock wallet transactions data
    const walletTransactions: WalletTransaction[] = [
        {
            id: 1,
            userId: 101,
            userName: 'أحمد محمد علي',
            userEmail: 'ahmed@example.com',
            type: 'debit',
            amount: 45,
            description: 'دفع خدمة تنظيف المنزل',
            date: '2024-01-15T10:30:00',
            status: 'completed',
            category: 'service',
            orderId: 1001,
            transactionId: 'TXN-2024-001',
        },
        {
            id: 2,
            userId: 102,
            userName: 'فاطمة أحمد',
            userEmail: 'fatima@example.com',
            type: 'credit',
            amount: 100,
            description: 'شحن المحفظة - بطاقة ائتمانية',
            date: '2024-01-15T09:15:00',
            status: 'completed',
            category: 'topup',
            paymentMethod: 'Credit Card',
            transactionId: 'TXN-2024-002',
        },
        {
            id: 3,
            userId: 103,
            userName: 'محمد حسن',
            userEmail: 'mohammed@example.com',
            type: 'credit',
            amount: 25,
            description: 'مكافأة العضو الجديد',
            date: '2024-01-14T16:45:00',
            status: 'completed',
            category: 'bonus',
            transactionId: 'TXN-2024-003',
        },
        {
            id: 4,
            userId: 104,
            userName: 'سارة علي',
            userEmail: 'sara@example.com',
            type: 'debit',
            amount: 60,
            description: 'دفع خدمة صيانة السباكة',
            date: '2024-01-14T14:20:00',
            status: 'completed',
            category: 'service',
            orderId: 1002,
            transactionId: 'TXN-2024-004',
        },
        {
            id: 5,
            userId: 105,
            userName: 'خالد محمود',
            userEmail: 'khalid@example.com',
            type: 'credit',
            amount: 30,
            description: 'استرداد خدمة ملغية',
            date: '2024-01-14T11:30:00',
            status: 'completed',
            category: 'refund',
            orderId: 1003,
            transactionId: 'TXN-2024-005',
        },
        {
            id: 6,
            userId: 106,
            userName: 'نور الدين',
            userEmail: 'nour@example.com',
            type: 'debit',
            amount: 35,
            description: 'دفع خدمة توصيل الطعام',
            date: '2024-01-13T19:45:00',
            status: 'pending',
            category: 'service',
            orderId: 1004,
            transactionId: 'TXN-2024-006',
        },
        {
            id: 7,
            userId: 107,
            userName: 'ليلى محمد',
            userEmail: 'layla@example.com',
            type: 'credit',
            amount: 200,
            description: 'شحن المحفظة - تحويل بنكي',
            date: '2024-01-13T15:20:00',
            status: 'completed',
            category: 'topup',
            paymentMethod: 'Bank Transfer',
            transactionId: 'TXN-2024-007',
        },
        {
            id: 8,
            userId: 108,
            userName: 'عمر يوسف',
            userEmail: 'omar@example.com',
            type: 'credit',
            amount: 15,
            description: 'عمولة تقديم خدمة',
            date: '2024-01-13T12:10:00',
            status: 'completed',
            category: 'commission',
            orderId: 1005,
            transactionId: 'TXN-2024-008',
        },
        {
            id: 9,
            userId: 109,
            userName: 'مريم سالم',
            userEmail: 'mariam@example.com',
            type: 'debit',
            amount: 80,
            description: 'دفع خدمة تصليح الأجهزة',
            date: '2024-01-12T17:30:00',
            status: 'failed',
            category: 'service',
            orderId: 1006,
            transactionId: 'TXN-2024-009',
        },
        {
            id: 10,
            userId: 110,
            userName: 'يوسف أحمد',
            userEmail: 'youssef@example.com',
            type: 'credit',
            amount: 50,
            description: 'تحويل من مستخدم آخر',
            date: '2024-01-12T14:15:00',
            status: 'completed',
            category: 'transfer',
            transactionId: 'TXN-2024-010',
        },
    ];

    // Filter transactions
    const filteredTransactions = walletTransactions.filter((transaction) => {
        const matchesTab =
            activeTab === 'all' ||
            (activeTab === 'pending'
                ? transaction.status === 'pending'
                : transaction.type === activeTab);
        const matchesSearch =
            transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;

        let matchesDate = true;
        if (dateFilter !== 'all') {
            const transactionDate = new Date(transaction.date);
            const today = new Date();

            switch (dateFilter) {
                case 'today':
                    matchesDate = transactionDate.toDateString() === today.toDateString();
                    break;
                case 'week':
                    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                    matchesDate = transactionDate >= weekAgo;
                    break;
                case 'month':
                    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
                    matchesDate = transactionDate >= monthAgo;
                    break;
            }
        }

        return matchesTab && matchesSearch && matchesStatus && matchesDate;
    });

    // Pagination
    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

    // Statistics
    const totalTransactions = walletTransactions.length;
    const totalCredits = walletTransactions
        .filter((t) => t.type === 'credit' && t.status === 'completed')
        .reduce((sum, t) => sum + t.amount, 0);
    const totalDebits = walletTransactions
        .filter((t) => t.type === 'debit' && t.status === 'completed')
        .reduce((sum, t) => sum + t.amount, 0);
    const pendingTransactions = walletTransactions.filter((t) => t.status === 'pending').length;

    const getTransactionIcon = (transaction: WalletTransaction) => {
        switch (transaction.category) {
            case 'service':
                return transaction.type === 'debit' ? '🛠️' : '💼';
            case 'topup':
                return '💳';
            case 'refund':
                return '↩️';
            case 'bonus':
                return '🎁';
            case 'transfer':
                return '🔄';
            case 'commission':
                return '💰';
            default:
                return '💰';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'مكتملة';
            case 'pending':
                return 'قيد المعالجة';
            case 'failed':
                return 'فاشلة';
            default:
                return 'غير معروف';
        }
    };

    const getCategoryText = (category: string) => {
        switch (category) {
            case 'service':
                return 'خدمة';
            case 'topup':
                return 'شحن محفظة';
            case 'refund':
                return 'استرداد';
            case 'bonus':
                return 'مكافأة';
            case 'transfer':
                return 'تحويل';
            case 'commission':
                return 'عمولة';
            default:
                return 'أخرى';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <h1 className="text-2xl font-bold text-gray-900">
                                سجل معاملات المحفظة
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                تصدير التقرير
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">📊</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">
                                    إجمالي المعاملات
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {totalTransactions.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">💰</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">
                                    إجمالي الإيداعات
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {totalCredits.toLocaleString()} ريال
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">💸</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">
                                    إجمالي المدفوعات
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {totalDebits.toLocaleString()} ريال
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                    <span className="text-white text-lg">⏳</span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1">
                                <p className="text-sm font-medium text-gray-600">معاملات معلقة</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {pendingTransactions}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow mb-6">
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    البحث
                                </label>
                                <input
                                    type="text"
                                    placeholder="البحث بالاسم، البريد، أو رقم المعاملة..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    الفترة الزمنية
                                </label>
                                <select
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">جميع الفترات</option>
                                    <option value="today">اليوم</option>
                                    <option value="week">آخر أسبوع</option>
                                    <option value="month">آخر شهر</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    الحالة
                                </label>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">جميع الحالات</option>
                                    <option value="completed">مكتملة</option>
                                    <option value="pending">قيد المعالجة</option>
                                    <option value="failed">فاشلة</option>
                                </select>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-4 py-2 text-sm font-medium ${
                                    activeTab === 'all'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                جميع المعاملات ({walletTransactions.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('credit')}
                                className={`px-4 py-2 text-sm font-medium ${
                                    activeTab === 'credit'
                                        ? 'text-green-600 border-b-2 border-green-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                الإيداعات (
                                {walletTransactions.filter((t) => t.type === 'credit').length})
                            </button>
                            <button
                                onClick={() => setActiveTab('debit')}
                                className={`px-4 py-2 text-sm font-medium ${
                                    activeTab === 'debit'
                                        ? 'text-red-600 border-b-2 border-red-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                المدفوعات (
                                {walletTransactions.filter((t) => t.type === 'debit').length})
                            </button>
                            <button
                                onClick={() => setActiveTab('pending')}
                                className={`px-4 py-2 text-sm font-medium ${
                                    activeTab === 'pending'
                                        ? 'text-yellow-600 border-b-2 border-yellow-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                معلقة (
                                {walletTransactions.filter((t) => t.status === 'pending').length})
                            </button>
                        </div>
                    </div>
                </div>

                {/* Transactions Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        رقم المعاملة
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        المستخدم
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        النوع
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        المبلغ
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        الوصف
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        التاريخ
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        الحالة
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        إجراءات
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {paginatedTransactions.map((transaction) => (
                                    <tr key={transaction.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <div className="flex items-center space-x-2 space-x-reverse">
                                                <span className="text-lg">
                                                    {getTransactionIcon(transaction)}
                                                </span>
                                                <span>{transaction.transactionId}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {transaction.userName}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {transaction.userEmail}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    transaction.type === 'credit'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {getCategoryText(transaction.category)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span
                                                className={`font-bold ${
                                                    transaction.type === 'credit'
                                                        ? 'text-green-600'
                                                        : 'text-red-600'
                                                }`}
                                            >
                                                {transaction.type === 'credit' ? '+' : '-'}
                                                {transaction.amount} ريال
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                                            {transaction.description}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {formatDate(transaction.date)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}
                                            >
                                                {getStatusText(transaction.status)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2 space-x-reverse">
                                                <button className="text-blue-600 hover:text-blue-900">
                                                    عرض
                                                </button>
                                                {transaction.status === 'pending' && (
                                                    <>
                                                        <button className="text-green-600 hover:text-green-900">
                                                            موافقة
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-900">
                                                            رفض
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    السابق
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                                    }
                                    disabled={currentPage === totalPages}
                                    className="mr-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    التالي
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        عرض <span className="font-medium">{startIndex + 1}</span>{' '}
                                        إلى{' '}
                                        <span className="font-medium">
                                            {Math.min(
                                                startIndex + itemsPerPage,
                                                filteredTransactions.length,
                                            )}
                                        </span>{' '}
                                        من{' '}
                                        <span className="font-medium">
                                            {filteredTransactions.length}
                                        </span>{' '}
                                        نتيجة
                                    </p>
                                </div>
                                <div>
                                    <nav
                                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                        aria-label="Pagination"
                                    >
                                        <button
                                            onClick={() =>
                                                setCurrentPage(Math.max(1, currentPage - 1))
                                            }
                                            disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            السابق
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                            (page) => (
                                                <button
                                                    key={page}
                                                    onClick={() => setCurrentPage(page)}
                                                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                        page === currentPage
                                                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            ),
                                        )}
                                        <button
                                            onClick={() =>
                                                setCurrentPage(
                                                    Math.min(totalPages, currentPage + 1),
                                                )
                                            }
                                            disabled={currentPage === totalPages}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            التالي
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Empty State */}
                {filteredTransactions.length === 0 && (
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد معاملات</h3>
                        <p className="text-gray-500">لا توجد معاملات تطابق المعايير المحددة</p>
                    </div>
                )}
            </div>
        </div>
    );
}
