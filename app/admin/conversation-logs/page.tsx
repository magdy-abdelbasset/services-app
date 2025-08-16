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
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">سجل المحادثات للطلبات</h1>
                <p className="text-gray-600">
                    متابعة ومراقبة جميع المحادثات بين العملاء ومقدمي الخدمات
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">💬</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">إجمالي المحادثات</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {stats.totalConversations}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">🟢</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المحادثات النشطة</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {stats.activeConversations}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">✅</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المحادثات المكتملة</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {stats.completedConversations}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">⚠️</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">محادثات بها مشاكل</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {stats.conversationsWithIssues}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Conversations List */}
                <div className="lg:col-span-2">
                    {/* Filters */}
                    <div className="bg-white rounded-lg shadow mb-6 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                                    حالة المحادثة
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="الكل">جميع الحالات</option>
                                    <option value="نشط">نشط</option>
                                    <option value="مكتمل">مكتمل</option>
                                    <option value="متوقف">متوقف</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    الأولوية
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={priorityFilter}
                                    onChange={(e) => setPriorityFilter(e.target.value)}
                                >
                                    <option value="الكل">جميع الأولويات</option>
                                    <option value="عاجل">عاجل</option>
                                    <option value="مهم">مهم</option>
                                    <option value="عادي">عادي</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    المشاكل
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={showIssuesOnly}
                                        onChange={(e) => setShowIssuesOnly(e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />

                                    <span className="mr-2 text-sm text-gray-700">المشاكل فقط</span>
                                </label>
                            </div>
                            <div className="flex items-end">
                                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                                    تصدير التقرير
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Conversations Table */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">سجل المحادثات</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            رقم الطلب
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            المشاركون
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الخدمة
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الرسائل
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            آخر نشاط
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الحالة
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الأولوية
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            الإجراءات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredLogs.map((log) => (
                                        <tr key={log.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <div className="flex items-center">
                                                    <span>#{log.orderId}</span>
                                                    {log.hasIssues && (
                                                        <span className="mr-2 text-red-500">
                                                            ⚠️
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div>
                                                    <div className="font-medium">
                                                        {log.customer}
                                                    </div>
                                                    <div className="text-gray-500">
                                                        {log.provider}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {log.service}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex items-center">
                                                    <span className="ml-1">💬</span>
                                                    <span>{log.messageCount}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div>
                                                    <div>{log.lastActivity.split(' ')[0]}</div>
                                                    <div className="text-xs text-gray-400">
                                                        {log.lastActivity.split(' ')[1]}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="space-y-1">
                                                    <span
                                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(log.status)}`}
                                                    >
                                                        {log.status}
                                                    </span>
                                                    <div>
                                                        <span
                                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOrderStatusColor(log.orderStatus)}`}
                                                        >
                                                            {log.orderStatus}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(log.priority)}`}
                                                >
                                                    {log.priority}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2 space-x-reverse">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedConversation(log);
                                                            loadMessages(log.id);
                                                        }}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        عرض المحادثة
                                                    </button>
                                                    <Link
                                                        href={`/admin/orders/${log.orderId}`}
                                                        className="text-green-600 hover:text-green-900"
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
                <div className="space-y-6">
                    {selectedConversation ? (
                        <>
                            {/* Conversation Info */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    تفاصيل المحادثة #{selectedConversation.orderId}
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">العميل:</span>
                                        <span className="text-sm font-medium text-gray-900">
                                            {selectedConversation.customer}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">مقدم الخدمة:</span>
                                        <span className="text-sm font-medium text-gray-900">
                                            {selectedConversation.provider}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">الخدمة:</span>
                                        <span className="text-sm font-medium text-gray-900">
                                            {selectedConversation.service}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">عدد الرسائل:</span>
                                        <span className="text-sm font-medium text-gray-900">
                                            {selectedConversation.messageCount}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">
                                            حالة المحادثة:
                                        </span>
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedConversation.status)}`}
                                        >
                                            {selectedConversation.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">الأولوية:</span>
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(selectedConversation.priority)}`}
                                        >
                                            {selectedConversation.priority}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="bg-white rounded-lg shadow">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-900">الرسائل</h3>
                                </div>
                                <div className="p-6 max-h-96 overflow-y-auto">
                                    <div className="space-y-4">
                                        {messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${message.senderType === 'customer' ? 'justify-start' : 'justify-end'}`}
                                            >
                                                <div
                                                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                                        message.senderType === 'customer'
                                                            ? 'bg-gray-100 text-gray-800'
                                                            : 'bg-blue-500 text-white'
                                                    }`}
                                                >
                                                    <div className="text-xs font-medium mb-1">
                                                        {message.senderName}
                                                        {message.type === 'offer' && (
                                                            <span className="mr-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">
                                                                عرض سعر
                                                            </span>
                                                        )}
                                                        {message.type === 'complaint' && (
                                                            <span className="mr-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs">
                                                                شكوى
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm">{message.content}</p>
                                                    <div
                                                        className={`text-xs mt-1 ${
                                                            message.senderType === 'customer'
                                                                ? 'text-gray-500'
                                                                : 'text-blue-100'
                                                        }`}
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
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    إجراءات إدارية
                                </h3>
                                <div className="space-y-3">
                                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                                        تصدير المحادثة
                                    </button>
                                    <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors">
                                        وضع علامة للمراجعة
                                    </button>
                                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                                        حل المشكلة
                                    </button>
                                    <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                                        تصعيد للإدارة العليا
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <div className="text-gray-400 text-6xl mb-4">💬</div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                اختر محادثة لعرض التفاصيل
                            </h3>
                            <p className="text-gray-600">
                                انقر على "عرض المحادثة" لأي محادثة في القائمة لعرض تفاصيلها والرسائل
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
