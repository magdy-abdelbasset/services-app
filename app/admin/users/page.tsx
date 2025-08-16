'use client';

import { useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    joinDate: string;
    orders: number;
    address?: string;
    lastLogin?: string;
}

export default function UsersManagement() {
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: 'أحمد محمد',
            email: 'ahmed@example.com',
            phone: '0501234567',
            status: 'نشط',
            joinDate: '2024-01-15',
            orders: 12,
            address: 'الرياض، حي النخيل، شارع الملك فهد',
            lastLogin: '2024-02-20 14:30',
        },
        {
            id: 2,
            name: 'سارة أحمد',
            email: 'sara@example.com',
            phone: '0507654321',
            status: 'نشط',
            joinDate: '2024-01-20',
            orders: 8,
            address: 'جدة، حي الصفا، شارع التحلية',
            lastLogin: '2024-02-21 09:15',
        },
        {
            id: 3,
            name: 'علي محمود',
            email: 'ali@example.com',
            phone: '0509876543',
            status: 'معلق',
            joinDate: '2024-02-01',
            orders: 3,
            address: 'الدمام، حي الشاطئ، شارع الخليج',
            lastLogin: '2024-02-18 16:45',
        },
        {
            id: 4,
            name: 'نور الدين',
            email: 'nour@example.com',
            phone: '0502468135',
            status: 'نشط',
            joinDate: '2024-02-10',
            orders: 15,
            address: 'الرياض، حي العليا، شارع العروبة',
            lastLogin: '2024-02-21 11:20',
        },
        {
            id: 5,
            name: 'مريم سالم',
            email: 'mariam@example.com',
            phone: '0508642097',
            status: 'محظور',
            joinDate: '2024-01-05',
            orders: 2,
            address: 'مكة، حي العزيزية، شارع الحرم',
            lastLogin: '2024-02-15 13:10',
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [editForm, setEditForm] = useState<User>({
        id: 0,
        name: '',
        email: '',
        phone: '',
        status: 'نشط',
        joinDate: '',
        orders: 0,
        address: '',
        lastLogin: '',
    });

    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.includes(searchTerm);
        const matchesStatus = statusFilter === 'الكل' || user.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'نشط':
                return 'bg-green-100 text-green-800';
            case 'معلق':
                return 'bg-yellow-100 text-yellow-800';
            case 'محظور':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleViewUser = (user: User) => {
        setSelectedUser(user);
        setShowViewModal(true);
    };

    const handleEditUser = (user: User) => {
        setEditForm({ ...user });
        setShowEditModal(true);
    };

    const handleDeleteUser = (user: User) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handleSaveEdit = () => {
        setUsers(users.map((user) => (user.id === editForm.id ? editForm : user)));
        setShowEditModal(false);
        alert('تم تحديث بيانات المستخدم بنجاح');
    };

    const handleConfirmDelete = () => {
        if (selectedUser) {
            setUsers(users.filter((user) => user.id !== selectedUser.id));
            setShowDeleteModal(false);
            setSelectedUser(null);
            alert('تم حذف المستخدم بنجاح');
        }
    };

    const handleStatusChange = (userId: number, newStatus: string) => {
        setUsers(users.map((user) => (user.id === userId ? { ...user, status: newStatus } : user)));
        alert(`تم تغيير حالة المستخدم إلى: ${newStatus}`);
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">إدارة المستخدمين</h1>
                <p className="text-gray-600">إدارة حسابات العملاء والمستخدمين</p>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            البحث
                        </label>
                        <input
                            type="text"
                            placeholder="ابحث بالاسم، البريد الإلكتروني، أو رقم الهاتف..."
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
                            <option value="نشط">نشط</option>
                            <option value="معلق">معلق</option>
                            <option value="محظور">محظور</option>
                        </select>
                    </div>
                    <div className="flex items-end">
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                            تصدير البيانات
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">👥</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">إجمالي المستخدمين</p>
                            <p className="text-xl font-semibold text-gray-900">{users.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المستخدمين النشطين</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {users.filter((u) => u.status === 'نشط').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">⏸</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المعلقين</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {users.filter((u) => u.status === 'معلق').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center ml-3">
                            <span className="text-white text-sm">🚫</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">المحظورين</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {users.filter((u) => u.status === 'محظور').length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">قائمة المستخدمين</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    المستخدم
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    معلومات الاتصال
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    تاريخ التسجيل
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    عدد الطلبات
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الحالة
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-3">
                                                <span className="text-white font-semibold">
                                                    {user.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    ID: {user.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.email}</div>
                                        <div className="text-sm text-gray-500">{user.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.joinDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {user.orders}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2 space-x-reverse">
                                            <button
                                                onClick={() => handleViewUser(user)}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                عرض
                                            </button>
                                            <button
                                                onClick={() => handleEditUser(user)}
                                                className="text-green-600 hover:text-green-900"
                                            >
                                                تعديل
                                            </button>
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                حذف
                                            </button>
                                            {user.status === 'نشط' ? (
                                                <button
                                                    onClick={() =>
                                                        handleStatusChange(user.id, 'معلق')
                                                    }
                                                    className="text-yellow-600 hover:text-yellow-900"
                                                >
                                                    تعليق
                                                </button>
                                            ) : user.status === 'معلق' ? (
                                                <button
                                                    onClick={() =>
                                                        handleStatusChange(user.id, 'نشط')
                                                    }
                                                    className="text-green-600 hover:text-green-900"
                                                >
                                                    تفعيل
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleStatusChange(user.id, 'نشط')
                                                    }
                                                    className="text-green-600 hover:text-green-900"
                                                >
                                                    إلغاء الحظر
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

            {/* View User Modal */}
            {showViewModal && selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">تفاصيل المستخدم</h3>
                            <button
                                onClick={() => setShowViewModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <span className="text-2xl">×</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 flex items-center mb-6">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center ml-4">
                                    <span className="text-white text-2xl font-bold">
                                        {selectedUser.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900">
                                        {selectedUser.name}
                                    </h4>
                                    <span
                                        className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedUser.status)}`}
                                    >
                                        {selectedUser.status}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    رقم المستخدم
                                </label>
                                <p className="text-gray-900">#{selectedUser.id}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    البريد الإلكتروني
                                </label>
                                <p className="text-gray-900">{selectedUser.email}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    رقم الهاتف
                                </label>
                                <p className="text-gray-900">{selectedUser.phone}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    تاريخ التسجيل
                                </label>
                                <p className="text-gray-900">{selectedUser.joinDate}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    عدد الطلبات
                                </label>
                                <p className="text-gray-900">{selectedUser.orders} طلب</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    آخر تسجيل دخول
                                </label>
                                <p className="text-gray-900">
                                    {selectedUser.lastLogin || 'غير متاح'}
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    العنوان
                                </label>
                                <p className="text-gray-900">
                                    {selectedUser.address || 'غير محدد'}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                onClick={() => setShowViewModal(false)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                            >
                                إغلاق
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit User Modal */}
            {showEditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">
                                تعديل بيانات المستخدم
                            </h3>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <span className="text-2xl">×</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.name}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, name: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.email}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, email: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.phone}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, phone: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    الحالة
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.status}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, status: e.target.value })
                                    }
                                >
                                    <option value="نشط">نشط</option>
                                    <option value="معلق">معلق</option>
                                    <option value="محظور">محظور</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    العنوان
                                </label>
                                <textarea
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.address || ''}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, address: e.target.value })
                                    }
                                    placeholder="أدخل العنوان الكامل..."
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 space-x-reverse mt-6">
                            <button
                                onClick={handleSaveEdit}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center ml-4">
                                <span className="text-red-600 text-2xl">⚠️</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">تأكيد الحذف</h3>
                                <p className="text-sm text-gray-600">
                                    هذا الإجراء لا يمكن التراجع عنه
                                </p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700">
                                هل أنت متأكد من حذف المستخدم <strong>{selectedUser.name}</strong>؟
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                سيتم حذف جميع بيانات المستخدم وطلباته نهائياً.
                            </p>
                        </div>

                        <div className="flex justify-end space-x-3 space-x-reverse">
                            <button
                                onClick={handleConfirmDelete}
                                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
                            >
                                حذف نهائي
                            </button>
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
