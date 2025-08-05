'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ConversationLog {
    id: number;
    orderId: number;
    customer: string;
    provider: string;
    service: string;
    startDate: string;
    lastActivity: string;
    messageCount: number;
    status: 'نشط' | 'مكتمل' | 'متوقف';
    orderStatus: 'مكتمل' | 'جاري التنفيذ' | 'في الانتظار' | 'ملغي' | 'مؤكد';
    hasIssues: boolean;
    priority: 'عادي' | 'مهم' | 'عاجل';
}

interface Message {
    id: number;
    senderId: string;
    senderName: string;
    senderType: 'customer' | 'provider';
    content: string;
    timestamp: string;
    type: 'text' | 'offer' | 'image' | 'location' | 'complaint';
    isRead: boolean;
}

export default function ConversationLogsPage() {
    const [conversationLogs] = useState<ConversationLog[]>([
        {
            id: 1,
            orderId: 1001,
            customer: 'أحمد محمد',
            provider: 'فاطمة علي',
            service: 'تنظيف المنزل',
            startDate: '2024-02-20',
            lastActivity: '2024-02-21 14:30',
            messageCount: 15,
            status: 'مكتمل',
            orderStatus: 'مكتمل',
            hasIssues: false,
            priority: 'عادي',
        },
        {
            id: 2,
            orderId: 1002,
            customer: 'سارة أحمد',
            provider: 'محمد حسن',
            service: 'صيانة السباكة',
            startDate: '2024-02-21',
            lastActivity: '2024-02-21 16:45',
            messageCount: 8,
            status: 'نشط',
            orderStatus: 'جاري التنفيذ',
            hasIssues: true,
            priority: 'مهم',
        },
        {
            id: 3,
            orderId: 1003,
            customer: 'علي محمود',
            provider: 'خالد عبدالله',
            service: 'توصيل الطعام',
            startDate: '2024-02-21',
            lastActivity: '2024-02-21 12:15',
            messageCount: 5,
            status: 'متوقف',
            orderStatus: 'في الانتظار',
            hasIssues: false,
            priority: 'عادي',
        },
        {
            id: 4,
            orderId: 1004,
            customer: 'نور الدين',
            provider: 'ليلى محمد',
            service: 'خدمات التجميل',
            startDate: '2024-02-19',
            lastActivity: '2024-02-20 18:00',
            messageCount: 22,
            status: 'مكتمل',
            orderStatus: 'مكتمل',
            hasIssues: false,
            priority: 'عادي',
        },
        {
            id: 5,
            orderId: 1005,
            customer: 'مريم سالم',
            provider: 'عمر يوسف',
            service: 'تصليح الأجهزة',
            startDate: '2024-02-18',
            lastActivity: '2024-02-18 15:30',
            messageCount: 3,
            status: 'متوقف',
            orderStatus: 'ملغي',
            hasIssues: true,
            priority: 'عاجل',
        },
    ]);

    const [selectedConversation, setSelectedConversation] = useState<ConversationLog | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');
    const [priorityFilter, setPriorityFilter] = useState('الكل');
    const [showIssuesOnly, setShowIssuesOnly] = useState(false);

    // Mock messages for selected conversation
    const loadMessages = (conversationId: number) => {
        const mockMessages: Message[] = [
            {
                id: 1,
                senderId: 'customer1',
                senderName: 'أحمد محمد',
                senderType: 'customer',
                content: 'مرحباً، أريد تنظيف منزلي غداً',
                timestamp: '2024-02-20 10:00',
                type: 'text',
                isRead: true,
            },
            {
                id: 2,
                senderId: 'provider1',
                senderName: 'فاطمة علي',
                senderType: 'provider',
                content: 'مرحباً! سأكون سعيدة لمساعدتك. ما هو حجم المنزل؟',
                timestamp: '2024-02-20 10:05',
                type: 'text',
                isRead: true,
            },
            {
                id: 3,
                senderId: 'customer1',
                senderName: 'أحمد محمد',
                senderType: 'customer',
                content: 'المنزل مكون من 3 غرف نوم وصالة ومطبخ',
                timestamp: '2024-02-20 10:07',
                type: 'text',
                isRead: true,
            },
            {
                id: 4,
                senderId: 'provider1',
                senderName: 'فاطمة علي',
                senderType: 'provider',
                content: 'ممتاز! سعر التنظيف الشامل سيكون 150 ريال',
                timestamp: '2024-02-20 10:10',
                type: 'offer',
                isRead: true,
            },
            {
                id: 5,
                senderId: 'customer1',
                senderName: 'أحمد محمد',
                senderType: 'customer',
                content: 'موافق، متى يمكنك البدء؟',
                timestamp: '2024-02-20 10:12',
                type: 'text',
                isRead: true,
            },
        ];

        setMessages(mockMessages);
    };

    const filteredLogs = conversationLogs.filter((log) => {
        const matchesSearch =
            log.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.orderId.toString().includes(searchTerm);
        const matchesStatus = statusFilter === 'الكل' || log.status === statusFilter;
        const matchesPriority = priorityFilter === 'الكل' || log.priority === priorityFilter;
        const matchesIssues = !showIssuesOnly || log.hasIssues;
        return matchesSearch && matchesStatus && matchesPriority && matchesIssues;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'نشط':
                return 'bg-green-100 text-green-800';
            case 'مكتمل':
                return 'bg-blue-100 text-blue-800';
            case 'متوقف':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'عاجل':
                return 'bg-red-100 text-red-800';
            case 'مهم':
                return 'bg-orange-100 text-orange-800';
            case 'عادي':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getOrderStatusColor = (status: string) => {
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

    const stats = {
        totalConversations: conversationLogs.length,
        activeConversations: conversationLogs.filter((log) => log.status === 'نشط').length,
        completedConversations: conversationLogs.filter((log) => log.status === 'مكتمل').length,
        conversationsWithIssues: conversationLogs.filter((log) => log.hasIssues).length,
    };

    return (
        <div className="p-6" data-oid="conv-logs-main">
            <div className="mb-6" data-oid="conv-logs-header">
                <h1 className="text-2xl font-bold text-gray-900 mb-2" data-oid="conv-logs-title">
                    سجل المحادثات للطلبات
                </h1>
                <p className="text-gray-600" data-oid="conv-logs-desc">
                    متابعة ومراقبة جميع المحادثات بين العملاء ومقدمي الخدمات
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" data-oid="conv-logs-stats">
                <div className="bg-white rounded-lg shadow p-4" data-oid="stat-total">
                    <div className="flex items-center" data-oid="stat-total-content">
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="stat-total-icon"
                        >
                            <span className="text-white text-sm" data-oid="stat-total-emoji">
                                💬
                            </span>
                        </div>
                        <div data-oid="stat-total-text">
                            <p className="text-sm text-gray-600" data-oid="stat-total-label">
                                إجمالي المحادثات
                            </p>
                            <p
                                className="text-xl font-semibold text-gray-900"
                                data-oid="stat-total-value"
                            >
                                {stats.totalConversations}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="stat-active">
                    <div className="flex items-center" data-oid="stat-active-content">
                        <div
                            className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="stat-active-icon"
                        >
                            <span className="text-white text-sm" data-oid="stat-active-emoji">
                                🟢
                            </span>
                        </div>
                        <div data-oid="stat-active-text">
                            <p className="text-sm text-gray-600" data-oid="stat-active-label">
                                المحادثات النشطة
                            </p>
                            <p
                                className="text-xl font-semibold text-gray-900"
                                data-oid="stat-active-value"
                            >
                                {stats.activeConversations}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="stat-completed">
                    <div className="flex items-center" data-oid="stat-completed-content">
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="stat-completed-icon"
                        >
                            <span className="text-white text-sm" data-oid="stat-completed-emoji">
                                ✅
                            </span>
                        </div>
                        <div data-oid="stat-completed-text">
                            <p className="text-sm text-gray-600" data-oid="stat-completed-label">
                                المحادثات المكتملة
                            </p>
                            <p
                                className="text-xl font-semibold text-gray-900"
                                data-oid="stat-completed-value"
                            >
                                {stats.completedConversations}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="stat-issues">
                    <div className="flex items-center" data-oid="stat-issues-content">
                        <div
                            className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="stat-issues-icon"
                        >
                            <span className="text-white text-sm" data-oid="stat-issues-emoji">
                                ⚠️
                            </span>
                        </div>
                        <div data-oid="stat-issues-text">
                            <p className="text-sm text-gray-600" data-oid="stat-issues-label">
                                محادثات بها مشاكل
                            </p>
                            <p
                                className="text-xl font-semibold text-gray-900"
                                data-oid="stat-issues-value"
                            >
                                {stats.conversationsWithIssues}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="conv-logs-layout">
                {/* Conversations List */}
                <div className="lg:col-span-2" data-oid="conv-logs-list-section">
                    {/* Filters */}
                    <div
                        className="bg-white rounded-lg shadow mb-6 p-6"
                        data-oid="conv-logs-filters"
                    >
                        <div
                            className="grid grid-cols-1 md:grid-cols-5 gap-4"
                            data-oid="conv-logs-filters-grid"
                        >
                            <div data-oid="filter-search">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="filter-search-label"
                                >
                                    البحث
                                </label>
                                <input
                                    type="text"
                                    placeholder="ابحث برقم الطلب، العميل، مقدم الخدمة..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    data-oid="filter-search-input"
                                />
                            </div>
                            <div data-oid="filter-status">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="filter-status-label"
                                >
                                    حالة المحادثة
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    data-oid="filter-status-select"
                                >
                                    <option value="الكل" data-oid="filter-status-all">
                                        جميع الحالات
                                    </option>
                                    <option value="نشط" data-oid="filter-status-active">
                                        نشط
                                    </option>
                                    <option value="مكتمل" data-oid="filter-status-completed">
                                        مكتمل
                                    </option>
                                    <option value="متوقف" data-oid="filter-status-stopped">
                                        متوقف
                                    </option>
                                </select>
                            </div>
                            <div data-oid="filter-priority">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="filter-priority-label"
                                >
                                    الأولوية
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={priorityFilter}
                                    onChange={(e) => setPriorityFilter(e.target.value)}
                                    data-oid="filter-priority-select"
                                >
                                    <option value="الكل" data-oid="filter-priority-all">
                                        جميع الأولويات
                                    </option>
                                    <option value="عاجل" data-oid="filter-priority-urgent">
                                        عاجل
                                    </option>
                                    <option value="مهم" data-oid="filter-priority-important">
                                        مهم
                                    </option>
                                    <option value="عادي" data-oid="filter-priority-normal">
                                        عادي
                                    </option>
                                </select>
                            </div>
                            <div data-oid="filter-issues">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="filter-issues-label"
                                >
                                    المشاكل
                                </label>
                                <label
                                    className="flex items-center"
                                    data-oid="filter-issues-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        checked={showIssuesOnly}
                                        onChange={(e) => setShowIssuesOnly(e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        data-oid="filter-issues-input"
                                    />

                                    <span
                                        className="mr-2 text-sm text-gray-700"
                                        data-oid="filter-issues-text"
                                    >
                                        المشاكل فقط
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-end" data-oid="filter-export">
                                <button
                                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                                    data-oid="filter-export-btn"
                                >
                                    تصدير التقرير
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Conversations Table */}
                    <div
                        className="bg-white rounded-lg shadow overflow-hidden"
                        data-oid="conv-logs-table"
                    >
                        <div
                            className="px-6 py-4 border-b border-gray-200"
                            data-oid="conv-logs-table-header"
                        >
                            <h3
                                className="text-lg font-medium text-gray-900"
                                data-oid="conv-logs-table-title"
                            >
                                سجل المحادثات
                            </h3>
                        </div>
                        <div className="overflow-x-auto" data-oid="conv-logs-table-container">
                            <table
                                className="min-w-full divide-y divide-gray-200"
                                data-oid="conv-logs-table-element"
                            >
                                <thead className="bg-gray-50" data-oid="conv-logs-table-head">
                                    <tr data-oid="conv-logs-table-head-row">
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-order"
                                        >
                                            رقم الطلب
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-participants"
                                        >
                                            المشاركون
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-service"
                                        >
                                            الخدمة
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-messages"
                                        >
                                            الرسائل
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-last-activity"
                                        >
                                            آخر نشاط
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-status"
                                        >
                                            الحالة
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-priority"
                                        >
                                            الأولوية
                                        </th>
                                        <th
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            data-oid="th-actions"
                                        >
                                            الإجراءات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200"
                                    data-oid="conv-logs-table-body"
                                >
                                    {filteredLogs.map((log) => (
                                        <tr
                                            key={log.id}
                                            className="hover:bg-gray-50"
                                            data-oid={`conv-row-${log.id}`}
                                        >
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                                data-oid={`order-${log.id}`}
                                            >
                                                <div
                                                    className="flex items-center"
                                                    data-oid={`order-content-${log.id}`}
                                                >
                                                    <span data-oid={`order-id-${log.id}`}>
                                                        #{log.orderId}
                                                    </span>
                                                    {log.hasIssues && (
                                                        <span
                                                            className="mr-2 text-red-500"
                                                            data-oid={`issue-icon-${log.id}`}
                                                        >
                                                            ⚠️
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                data-oid={`participants-${log.id}`}
                                            >
                                                <div data-oid={`customer-${log.id}`}>
                                                    <div
                                                        className="font-medium"
                                                        data-oid={`customer-name-${log.id}`}
                                                    >
                                                        {log.customer}
                                                    </div>
                                                    <div
                                                        className="text-gray-500"
                                                        data-oid={`provider-name-${log.id}`}
                                                    >
                                                        {log.provider}
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                data-oid={`service-${log.id}`}
                                            >
                                                {log.service}
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                data-oid={`messages-${log.id}`}
                                            >
                                                <div
                                                    className="flex items-center"
                                                    data-oid={`messages-content-${log.id}`}
                                                >
                                                    <span
                                                        className="ml-1"
                                                        data-oid={`messages-icon-${log.id}`}
                                                    >
                                                        💬
                                                    </span>
                                                    <span data-oid={`messages-count-${log.id}`}>
                                                        {log.messageCount}
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                data-oid={`last-activity-${log.id}`}
                                            >
                                                <div data-oid={`last-activity-content-${log.id}`}>
                                                    <div data-oid={`last-activity-date-${log.id}`}>
                                                        {log.lastActivity.split(' ')[0]}
                                                    </div>
                                                    <div
                                                        className="text-xs text-gray-400"
                                                        data-oid={`last-activity-time-${log.id}`}
                                                    >
                                                        {log.lastActivity.split(' ')[1]}
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap"
                                                data-oid={`status-${log.id}`}
                                            >
                                                <div
                                                    className="space-y-1"
                                                    data-oid={`status-content-${log.id}`}
                                                >
                                                    <span
                                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(log.status)}`}
                                                        data-oid={`conv-status-${log.id}`}
                                                    >
                                                        {log.status}
                                                    </span>
                                                    <div data-oid={`order-status-${log.id}`}>
                                                        <span
                                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOrderStatusColor(log.orderStatus)}`}
                                                            data-oid={`order-status-badge-${log.id}`}
                                                        >
                                                            {log.orderStatus}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap"
                                                data-oid={`priority-${log.id}`}
                                            >
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(log.priority)}`}
                                                    data-oid={`priority-badge-${log.id}`}
                                                >
                                                    {log.priority}
                                                </span>
                                            </td>
                                            <td
                                                className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                                data-oid={`actions-${log.id}`}
                                            >
                                                <div
                                                    className="flex space-x-2 space-x-reverse"
                                                    data-oid={`actions-content-${log.id}`}
                                                >
                                                    <button
                                                        onClick={() => {
                                                            setSelectedConversation(log);
                                                            loadMessages(log.id);
                                                        }}
                                                        className="text-blue-600 hover:text-blue-900"
                                                        data-oid={`view-btn-${log.id}`}
                                                    >
                                                        عرض المحادثة
                                                    </button>
                                                    <Link
                                                        href={`/admin/orders/${log.orderId}`}
                                                        className="text-green-600 hover:text-green-900"
                                                        data-oid={`order-btn-${log.id}`}
                                                    >
                                                        عرض الطلب
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Conversation Details */}
                <div className="space-y-6" data-oid="conv-details-section">
                    {selectedConversation ? (
                        <>
                            {/* Conversation Info */}
                            <div className="bg-white rounded-lg shadow p-6" data-oid="conv-info">
                                <h3
                                    className="text-lg font-medium text-gray-900 mb-4"
                                    data-oid="conv-info-title"
                                >
                                    تفاصيل المحادثة #{selectedConversation.orderId}
                                </h3>
                                <div className="space-y-3" data-oid="conv-info-details">
                                    <div
                                        className="flex justify-between"
                                        data-oid="conv-info-customer"
                                    >
                                        <span
                                            className="text-sm text-gray-600"
                                            data-oid="conv-info-customer-label"
                                        >
                                            العميل:
                                        </span>
                                        <span
                                            className="text-sm font-medium text-gray-900"
                                            data-oid="conv-info-customer-value"
                                        >
                                            {selectedConversation.customer}
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between"
                                        data-oid="conv-info-provider"
                                    >
                                        <span
                                            className="text-sm text-gray-600"
                                            data-oid="conv-info-provider-label"
                                        >
                                            مقدم الخدمة:
                                        </span>
                                        <span
                                            className="text-sm font-medium text-gray-900"
                                            data-oid="conv-info-provider-value"
                                        >
                                            {selectedConversation.provider}
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between"
                                        data-oid="conv-info-service"
                                    >
                                        <span
                                            className="text-sm text-gray-600"
                                            data-oid="conv-info-service-label"
                                        >
                                            الخدمة:
                                        </span>
                                        <span
                                            className="text-sm font-medium text-gray-900"
                                            data-oid="conv-info-service-value"
                                        >
                                            {selectedConversation.service}
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between"
                                        data-oid="conv-info-messages"
                                    >
                                        <span
                                            className="text-sm text-gray-600"
                                            data-oid="conv-info-messages-label"
                                        >
                                            عدد الرسائل:
                                        </span>
                                        <span
                                            className="text-sm font-medium text-gray-900"
                                            data-oid="conv-info-messages-value"
                                        >
                                            {selectedConversation.messageCount}
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between"
                                        data-oid="conv-info-status"
                                    >
                                        <span
                                            className="text-sm text-gray-600"
                                            data-oid="conv-info-status-label"
                                        >
                                            حالة المحادثة:
                                        </span>
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedConversation.status)}`}
                                            data-oid="conv-info-status-value"
                                        >
                                            {selectedConversation.status}
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between"
                                        data-oid="conv-info-priority"
                                    >
                                        <span
                                            className="text-sm text-gray-600"
                                            data-oid="conv-info-priority-label"
                                        >
                                            الأولوية:
                                        </span>
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(selectedConversation.priority)}`}
                                            data-oid="conv-info-priority-value"
                                        >
                                            {selectedConversation.priority}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="bg-white rounded-lg shadow" data-oid="conv-messages">
                                <div
                                    className="px-6 py-4 border-b border-gray-200"
                                    data-oid="conv-messages-header"
                                >
                                    <h3
                                        className="text-lg font-medium text-gray-900"
                                        data-oid="conv-messages-title"
                                    >
                                        الرسائل
                                    </h3>
                                </div>
                                <div
                                    className="p-6 max-h-96 overflow-y-auto"
                                    data-oid="conv-messages-container"
                                >
                                    <div className="space-y-4" data-oid="conv-messages-list">
                                        {messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${message.senderType === 'customer' ? 'justify-start' : 'justify-end'}`}
                                                data-oid={`message-${message.id}`}
                                            >
                                                <div
                                                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                                        message.senderType === 'customer'
                                                            ? 'bg-gray-100 text-gray-800'
                                                            : 'bg-blue-500 text-white'
                                                    }`}
                                                    data-oid={`message-bubble-${message.id}`}
                                                >
                                                    <div
                                                        className="text-xs font-medium mb-1"
                                                        data-oid={`message-sender-${message.id}`}
                                                    >
                                                        {message.senderName}
                                                        {message.type === 'offer' && (
                                                            <span
                                                                className="mr-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs"
                                                                data-oid={`message-offer-${message.id}`}
                                                            >
                                                                عرض سعر
                                                            </span>
                                                        )}
                                                        {message.type === 'complaint' && (
                                                            <span
                                                                className="mr-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs"
                                                                data-oid={`message-complaint-${message.id}`}
                                                            >
                                                                شكوى
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p
                                                        className="text-sm"
                                                        data-oid={`message-content-${message.id}`}
                                                    >
                                                        {message.content}
                                                    </p>
                                                    <div
                                                        className={`text-xs mt-1 ${
                                                            message.senderType === 'customer'
                                                                ? 'text-gray-500'
                                                                : 'text-blue-100'
                                                        }`}
                                                        data-oid={`message-timestamp-${message.id}`}
                                                    >
                                                        {message.timestamp}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="bg-white rounded-lg shadow p-6" data-oid="conv-actions">
                                <h3
                                    className="text-lg font-medium text-gray-900 mb-4"
                                    data-oid="conv-actions-title"
                                >
                                    إجراءات إدارية
                                </h3>
                                <div className="space-y-3" data-oid="conv-actions-buttons">
                                    <button
                                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                                        data-oid="conv-action-export"
                                    >
                                        تصدير المحادثة
                                    </button>
                                    <button
                                        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
                                        data-oid="conv-action-flag"
                                    >
                                        وضع علامة للمراجعة
                                    </button>
                                    <button
                                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                                        data-oid="conv-action-resolve"
                                    >
                                        حل المشكلة
                                    </button>
                                    <button
                                        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                                        data-oid="conv-action-escalate"
                                    >
                                        تصعيد للإدارة العليا
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div
                            className="bg-white rounded-lg shadow p-6 text-center"
                            data-oid="conv-no-selection"
                        >
                            <div
                                className="text-gray-400 text-6xl mb-4"
                                data-oid="conv-no-selection-icon"
                            >
                                💬
                            </div>
                            <h3
                                className="text-lg font-medium text-gray-900 mb-2"
                                data-oid="conv-no-selection-title"
                            >
                                اختر محادثة لعرض التفاصيل
                            </h3>
                            <p className="text-gray-600" data-oid="conv-no-selection-desc">
                                انقر على "عرض المحادثة" لأي محادثة في القائمة لعرض تفاصيلها والرسائل
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
