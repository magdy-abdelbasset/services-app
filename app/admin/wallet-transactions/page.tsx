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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="7hum9kb">
            {/* Header */}
            <div className="bg-white shadow-sm border-b" data-oid="j8f-exz">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="m6p9l5m">
                    <div className="flex justify-between items-center py-4" data-oid="qp4kkg6">
                        <div
                            className="flex items-center space-x-4 space-x-reverse"
                            data-oid="gs:iwy8"
                        >
                            <h1 className="text-2xl font-bold text-gray-900" data-oid="ca6intb">
                                سجل معاملات المحفظة
                            </h1>
                        </div>
                        <div
                            className="flex items-center space-x-4 space-x-reverse"
                            data-oid="skp5_c5"
                        >
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                data-oid="3659bjs"
                            >
                                تصدير التقرير
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="4.9jbh6">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" data-oid="boj5j.0">
                    <div className="bg-white rounded-lg shadow p-6" data-oid="re3i_f5">
                        <div className="flex items-center" data-oid="5cyerzr">
                            <div className="flex-shrink-0" data-oid="odys6bu">
                                <div
                                    className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center"
                                    data-oid="ni06iwh"
                                >
                                    <span className="text-white text-lg" data-oid="6ewjs9y">
                                        📊
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="h70.lk-">
                                <p className="text-sm font-medium text-gray-600" data-oid="p.2bo_m">
                                    إجمالي المعاملات
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="gvcob:2"
                                >
                                    {totalTransactions.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6" data-oid="whw-6wz">
                        <div className="flex items-center" data-oid="t44mw22">
                            <div className="flex-shrink-0" data-oid="e831geo">
                                <div
                                    className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center"
                                    data-oid="6tgui_j"
                                >
                                    <span className="text-white text-lg" data-oid="y_7__ns">
                                        💰
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="rh7e5xc">
                                <p className="text-sm font-medium text-gray-600" data-oid="4-:9.4:">
                                    إجمالي الإيداعات
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="sb3bji3"
                                >
                                    {totalCredits.toLocaleString()} ريال
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6" data-oid="q9iw_au">
                        <div className="flex items-center" data-oid="3jd1.ga">
                            <div className="flex-shrink-0" data-oid="lr0w:ot">
                                <div
                                    className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center"
                                    data-oid="hz14e4h"
                                >
                                    <span className="text-white text-lg" data-oid="0i07wyz">
                                        💸
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="h84ruts">
                                <p className="text-sm font-medium text-gray-600" data-oid="6g._npr">
                                    إجمالي المدفوعات
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="gbpapt8"
                                >
                                    {totalDebits.toLocaleString()} ريال
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6" data-oid="w35byii">
                        <div className="flex items-center" data-oid="003w2cc">
                            <div className="flex-shrink-0" data-oid="uhfzp27">
                                <div
                                    className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center"
                                    data-oid="uhka.fc"
                                >
                                    <span className="text-white text-lg" data-oid="j5t3:xr">
                                        ⏳
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="9j7u10p">
                                <p className="text-sm font-medium text-gray-600" data-oid="ay8vaot">
                                    معاملات معلقة
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="13tvufx"
                                >
                                    {pendingTransactions}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow mb-6" data-oid="ivtb36w">
                    <div className="p-6" data-oid="cxoe7wx">
                        <div
                            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"
                            data-oid="k.:jczb"
                        >
                            <div data-oid="i0_:8en">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="y_9:upr"
                                >
                                    البحث
                                </label>
                                <input
                                    type="text"
                                    placeholder="البحث بالاسم، البريد، أو رقم المعاملة..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="-sd.wcg"
                                />
                            </div>
                            <div data-oid="8fe0rg_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ls-sbzl"
                                >
                                    الفترة الزمنية
                                </label>
                                <select
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="vxg8uz6"
                                >
                                    <option value="all" data-oid="pk6hgn7">
                                        جميع الفترات
                                    </option>
                                    <option value="today" data-oid="bwk94r0">
                                        اليوم
                                    </option>
                                    <option value="week" data-oid="z4i7:gj">
                                        آخر أسبوع
                                    </option>
                                    <option value="month" data-oid="hq1_6ty">
                                        آخر شهر
                                    </option>
                                </select>
                            </div>
                            <div data-oid="um6_kyo">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="e935gj_"
                                >
                                    الحالة
                                </label>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="16z7jtm"
                                >
                                    <option value="all" data-oid="134tuix">
                                        جميع الحالات
                                    </option>
                                    <option value="completed" data-oid="mqjdo6c">
                                        مكتملة
                                    </option>
                                    <option value="pending" data-oid="3l40o-d">
                                        قيد المعالجة
                                    </option>
                                    <option value="failed" data-oid="t1tt.ob">
                                        فاشلة
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-gray-200" data-oid="492ek63">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-4 py-2 text-sm font-medium ${
                                    activeTab === 'all'
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                                data-oid="ss30iod"
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
                                data-oid="d8faqyi"
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
                                data-oid="6txful:"
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
                                data-oid="02gh:kb"
                            >
                                معلقة (
                                {walletTransactions.filter((t) => t.status === 'pending').length})
                            </button>
                        </div>
                    </div>
                </div>

                {/* Transactions Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden" data-oid="ojvauis">
                    <div className="overflow-x-auto" data-oid="xytiyy6">
                        <table className="min-w-full divide-y divide-gray-200" data-oid="7.1.49_">
                            <thead className="bg-gray-50" data-oid="p6yq.e4">
                                <tr data-oid="34f7wug">
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="vv5u8uf"
                                    >
                                        رقم المعاملة
                                    </th>
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="uy9110x"
                                    >
                                        المستخدم
                                    </th>
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="edogicg"
                                    >
                                        النوع
                                    </th>
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="-ploy25"
                                    >
                                        المبلغ
                                    </th>
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="wde8-:i"
                                    >
                                        الوصف
                                    </th>
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="7_7.t.."
                                    >
                                        التاريخ
                                    </th>
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="h3l:t8."
                                    >
                                        الحالة
                                    </th>
                                    <th
                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="0cc5c6x"
                                    >
                                        إجراءات
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="y-5_z.i">
                                {paginatedTransactions.map((transaction) => (
                                    <tr
                                        key={transaction.id}
                                        className="hover:bg-gray-50"
                                        data-oid="zq5jejl"
                                    >
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                            data-oid="o.8f4.6"
                                        >
                                            <div
                                                className="flex items-center space-x-2 space-x-reverse"
                                                data-oid="e3d_amc"
                                            >
                                                <span className="text-lg" data-oid="jj7fysk">
                                                    {getTransactionIcon(transaction)}
                                                </span>
                                                <span data-oid="2j5ani:">
                                                    {transaction.transactionId}
                                                </span>
                                            </div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="9627v83"
                                        >
                                            <div data-oid="8af7s3.">
                                                <div
                                                    className="text-sm font-medium text-gray-900"
                                                    data-oid="106qm_t"
                                                >
                                                    {transaction.userName}
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid="_lo3ji8"
                                                >
                                                    {transaction.userEmail}
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="kadt7cu"
                                        >
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    transaction.type === 'credit'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                                data-oid="vai5mp4"
                                            >
                                                {getCategoryText(transaction.category)}
                                            </span>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm"
                                            data-oid="21bvbgi"
                                        >
                                            <span
                                                className={`font-bold ${
                                                    transaction.type === 'credit'
                                                        ? 'text-green-600'
                                                        : 'text-red-600'
                                                }`}
                                                data-oid="hyzx0ep"
                                            >
                                                {transaction.type === 'credit' ? '+' : '-'}
                                                {transaction.amount} ريال
                                            </span>
                                        </td>
                                        <td
                                            className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate"
                                            data-oid="5u7i:r_"
                                        >
                                            {transaction.description}
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            data-oid="p.wj42m"
                                        >
                                            {formatDate(transaction.date)}
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="jmo.0a9"
                                        >
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}
                                                data-oid="gjbtkwt"
                                            >
                                                {getStatusText(transaction.status)}
                                            </span>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                            data-oid="k7sblnk"
                                        >
                                            <div
                                                className="flex space-x-2 space-x-reverse"
                                                data-oid="utvu.7g"
                                            >
                                                <button
                                                    className="text-blue-600 hover:text-blue-900"
                                                    data-oid="i0icdlf"
                                                >
                                                    عرض
                                                </button>
                                                {transaction.status === 'pending' && (
                                                    <>
                                                        <button
                                                            className="text-green-600 hover:text-green-900"
                                                            data-oid="x_27rs7"
                                                        >
                                                            موافقة
                                                        </button>
                                                        <button
                                                            className="text-red-600 hover:text-red-900"
                                                            data-oid="od.2o1:"
                                                        >
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
                        <div
                            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                            data-oid="wga.h8i"
                        >
                            <div
                                className="flex-1 flex justify-between sm:hidden"
                                data-oid="a2lk:us"
                            >
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                    data-oid="syp4tqx"
                                >
                                    السابق
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                                    }
                                    disabled={currentPage === totalPages}
                                    className="mr-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                    data-oid="330hjcr"
                                >
                                    التالي
                                </button>
                            </div>
                            <div
                                className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
                                data-oid="jddfh_l"
                            >
                                <div data-oid="j9rsj3n">
                                    <p className="text-sm text-gray-700" data-oid="1z6vbj1">
                                        عرض{' '}
                                        <span className="font-medium" data-oid="x4450c7">
                                            {startIndex + 1}
                                        </span>{' '}
                                        إلى{' '}
                                        <span className="font-medium" data-oid="ez.iikj">
                                            {Math.min(
                                                startIndex + itemsPerPage,
                                                filteredTransactions.length,
                                            )}
                                        </span>{' '}
                                        من{' '}
                                        <span className="font-medium" data-oid="x27lcsu">
                                            {filteredTransactions.length}
                                        </span>{' '}
                                        نتيجة
                                    </p>
                                </div>
                                <div data-oid="2wrk0fc">
                                    <nav
                                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                        aria-label="Pagination"
                                        data-oid="co_dolx"
                                    >
                                        <button
                                            onClick={() =>
                                                setCurrentPage(Math.max(1, currentPage - 1))
                                            }
                                            disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                            data-oid="uyyw05z"
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
                                                    data-oid="3lk55uq"
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
                                            data-oid="s-75ffh"
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
                    <div className="bg-white rounded-lg shadow p-8 text-center" data-oid="c:n6han">
                        <div className="text-4xl mb-4" data-oid="ulbetzs">
                            📊
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2" data-oid="w4mywne">
                            لا توجد معاملات
                        </h3>
                        <p className="text-gray-500" data-oid="9p1l:zs">
                            لا توجد معاملات تطابق المعايير المحددة
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
