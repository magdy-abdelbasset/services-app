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
        <div className="p-6" data-oid="8sv6iji">
            <div className="mb-6" data-oid="3ww9n3e">
                <h1 className="text-2xl font-bold text-gray-900 mb-2" data-oid="3p1p8q2">
                    إدارة المستخدمين
                </h1>
                <p className="text-gray-600" data-oid="9ym3-xy">
                    إدارة حسابات العملاء والمستخدمين
                </p>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow mb-6 p-6" data-oid="p0noeyt">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="cw682np">
                    <div data-oid="aauva3x">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="uhcji8b"
                        >
                            البحث
                        </label>
                        <input
                            type="text"
                            placeholder="ابحث بالاسم، البريد الإلكتروني، أو رقم الهاتف..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            data-oid="2u:sw6u"
                        />
                    </div>
                    <div data-oid="6.i:nm3">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="04uy98o"
                        >
                            الحالة
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            data-oid="40uiu1y"
                        >
                            <option value="الكل" data-oid="g25xzq5">
                                جميع الحالات
                            </option>
                            <option value="نشط" data-oid="zt98fuh">
                                نشط
                            </option>
                            <option value="معلق" data-oid="5mlpyxd">
                                معلق
                            </option>
                            <option value="محظور" data-oid="nb63mnw">
                                محظور
                            </option>
                        </select>
                    </div>
                    <div className="flex items-end" data-oid="f8akoqh">
                        <button
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            data-oid="up4woro"
                        >
                            تصدير البيانات
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" data-oid="_vr_j6h">
                <div className="bg-white rounded-lg shadow p-4" data-oid="efy4lz3">
                    <div className="flex items-center" data-oid="27tmkgv">
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="0skr_eb"
                        >
                            <span className="text-white text-sm" data-oid="49y8:0d">
                                👥
                            </span>
                        </div>
                        <div data-oid="rycyqgk">
                            <p className="text-sm text-gray-600" data-oid="_xg1x4x">
                                إجمالي المستخدمين
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="2vkkskm">
                                {users.length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="0hmq-da">
                    <div className="flex items-center" data-oid="oqnk-sm">
                        <div
                            className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="1a5jcg."
                        >
                            <span className="text-white text-sm" data-oid="8ijwm5o">
                                ✓
                            </span>
                        </div>
                        <div data-oid="fbo:681">
                            <p className="text-sm text-gray-600" data-oid="jyjbyvq">
                                المستخدمين النشطين
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="cqohuji">
                                {users.filter((u) => u.status === 'نشط').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="3a9eeo3">
                    <div className="flex items-center" data-oid="zze-.us">
                        <div
                            className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="2yb:pcl"
                        >
                            <span className="text-white text-sm" data-oid="i6xh-5v">
                                ⏸
                            </span>
                        </div>
                        <div data-oid="1fc3eo4">
                            <p className="text-sm text-gray-600" data-oid="7zywtr.">
                                المعلقين
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="nmba6bn">
                                {users.filter((u) => u.status === 'معلق').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="mi9g4b_">
                    <div className="flex items-center" data-oid="z4pznbe">
                        <div
                            className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="-kxr2zr"
                        >
                            <span className="text-white text-sm" data-oid="d74x491">
                                🚫
                            </span>
                        </div>
                        <div data-oid="yynp_s8">
                            <p className="text-sm text-gray-600" data-oid="m3cp-sb">
                                المحظورين
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="j27:6di">
                                {users.filter((u) => u.status === 'محظور').length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden" data-oid="disrpfg">
                <div className="px-6 py-4 border-b border-gray-200" data-oid="o78990z">
                    <h3 className="text-lg font-medium text-gray-900" data-oid="zo21__y">
                        قائمة المستخدمين
                    </h3>
                </div>
                <div className="overflow-x-auto" data-oid="jk2zabj">
                    <table className="min-w-full divide-y divide-gray-200" data-oid="w9kww4y">
                        <thead className="bg-gray-50" data-oid="h.ngto4">
                            <tr data-oid="sg1fa9e">
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="fljpmd6"
                                >
                                    المستخدم
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="iw40scl"
                                >
                                    معلومات الاتصال
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid=":3n2sib"
                                >
                                    تاريخ التسجيل
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="5qwq0_2"
                                >
                                    عدد الطلبات
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="rd5vu.u"
                                >
                                    الحالة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="s:12abk"
                                >
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" data-oid="gtj:_gd">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50" data-oid="hwkkjbo">
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="2f9pva_">
                                        <div className="flex items-center" data-oid="l8q1.y1">
                                            <div
                                                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-3"
                                                data-oid="kj7l4xv"
                                            >
                                                <span
                                                    className="text-white font-semibold"
                                                    data-oid="ggm9.5y"
                                                >
                                                    {user.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div data-oid="m94erw-">
                                                <div
                                                    className="text-sm font-medium text-gray-900"
                                                    data-oid="nyxe0h."
                                                >
                                                    {user.name}
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid="hwzgj3l"
                                                >
                                                    ID: {user.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="xuvl.v3">
                                        <div className="text-sm text-gray-900" data-oid="7yvimlw">
                                            {user.email}
                                        </div>
                                        <div className="text-sm text-gray-500" data-oid="kg12jo.">
                                            {user.phone}
                                        </div>
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        data-oid="o2ems6f"
                                    >
                                        {user.joinDate}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="vj9.j1_"
                                    >
                                        {user.orders}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid=".sy0fgy">
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}
                                            data-oid="jcnmw5."
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                        data-oid="p8cfafu"
                                    >
                                        <div
                                            className="flex space-x-2 space-x-reverse"
                                            data-oid="3na2k7j"
                                        >
                                            <button
                                                onClick={() => handleViewUser(user)}
                                                className="text-blue-600 hover:text-blue-900"
                                                data-oid="f35s8.g"
                                            >
                                                عرض
                                            </button>
                                            <button
                                                onClick={() => handleEditUser(user)}
                                                className="text-green-600 hover:text-green-900"
                                                data-oid="3s425.r"
                                            >
                                                تعديل
                                            </button>
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="text-red-600 hover:text-red-900"
                                                data-oid="7bgeuok"
                                            >
                                                حذف
                                            </button>
                                            {user.status === 'نشط' ? (
                                                <button
                                                    onClick={() =>
                                                        handleStatusChange(user.id, 'معلق')
                                                    }
                                                    className="text-yellow-600 hover:text-yellow-900"
                                                    data-oid="1:kl_50"
                                                >
                                                    تعليق
                                                </button>
                                            ) : user.status === 'معلق' ? (
                                                <button
                                                    onClick={() =>
                                                        handleStatusChange(user.id, 'نشط')
                                                    }
                                                    className="text-green-600 hover:text-green-900"
                                                    data-oid="7-.z58l"
                                                >
                                                    تفعيل
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleStatusChange(user.id, 'نشط')
                                                    }
                                                    className="text-green-600 hover:text-green-900"
                                                    data-oid="h6x:px:"
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
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    data-oid="flkjsxe"
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
                        data-oid="ip23t0y"
                    >
                        <div className="flex justify-between items-center mb-6" data-oid="qm3dmm2">
                            <h3 className="text-xl font-bold text-gray-900" data-oid="k3c3:cb">
                                تفاصيل المستخدم
                            </h3>
                            <button
                                onClick={() => setShowViewModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                                data-oid="t:::2bb"
                            >
                                <span className="text-2xl" data-oid="spx06mh">
                                    ×
                                </span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="o9csfbm">
                            <div
                                className="md:col-span-2 flex items-center mb-6"
                                data-oid="unoqxxz"
                            >
                                <div
                                    className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center ml-4"
                                    data-oid="fbr0foa"
                                >
                                    <span
                                        className="text-white text-2xl font-bold"
                                        data-oid="3_5xl85"
                                    >
                                        {selectedUser.name.charAt(0)}
                                    </span>
                                </div>
                                <div data-oid="pkkf-12">
                                    <h4
                                        className="text-xl font-semibold text-gray-900"
                                        data-oid="3wq_wkz"
                                    >
                                        {selectedUser.name}
                                    </h4>
                                    <span
                                        className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedUser.status)}`}
                                        data-oid="4.x8l:l"
                                    >
                                        {selectedUser.status}
                                    </span>
                                </div>
                            </div>

                            <div data-oid="iarfga1">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="tnwlcp7"
                                >
                                    رقم المستخدم
                                </label>
                                <p className="text-gray-900" data-oid="_o0li86">
                                    #{selectedUser.id}
                                </p>
                            </div>

                            <div data-oid="45_9j3s">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="-qo5kg-"
                                >
                                    البريد الإلكتروني
                                </label>
                                <p className="text-gray-900" data-oid="qzdhaf6">
                                    {selectedUser.email}
                                </p>
                            </div>

                            <div data-oid="0z7ttc6">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="m1525q."
                                >
                                    رقم الهاتف
                                </label>
                                <p className="text-gray-900" data-oid="mf5:5ej">
                                    {selectedUser.phone}
                                </p>
                            </div>

                            <div data-oid="84sype7">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="os1p5l2"
                                >
                                    تاريخ التسجيل
                                </label>
                                <p className="text-gray-900" data-oid="eipkfr9">
                                    {selectedUser.joinDate}
                                </p>
                            </div>

                            <div data-oid="4a78lny">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="y8z09q9"
                                >
                                    عدد الطلبات
                                </label>
                                <p className="text-gray-900" data-oid="ys2:64h">
                                    {selectedUser.orders} طلب
                                </p>
                            </div>

                            <div data-oid="wcj89fm">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="bqi_pc8"
                                >
                                    آخر تسجيل دخول
                                </label>
                                <p className="text-gray-900" data-oid="sr7yd_8">
                                    {selectedUser.lastLogin || 'غير متاح'}
                                </p>
                            </div>

                            <div className="md:col-span-2" data-oid="::syen1">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid=":feneq5"
                                >
                                    العنوان
                                </label>
                                <p className="text-gray-900" data-oid=":lfkogo">
                                    {selectedUser.address || 'غير محدد'}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6" data-oid="mm:732m">
                            <button
                                onClick={() => setShowViewModal(false)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                                data-oid="q4jxeub"
                            >
                                إغلاق
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit User Modal */}
            {showEditModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    data-oid="6u7eu.m"
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
                        data-oid="rpgsabb"
                    >
                        <div className="flex justify-between items-center mb-6" data-oid="c2qswvw">
                            <h3 className="text-xl font-bold text-gray-900" data-oid="_682kwj">
                                تعديل بيانات المستخدم
                            </h3>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                                data-oid="tu6sse-"
                            >
                                <span className="text-2xl" data-oid="g-x3gnv">
                                    ×
                                </span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="44s1q6-">
                            <div data-oid="50nbv91">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid=":k4rn2v"
                                >
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.name}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, name: e.target.value })
                                    }
                                    data-oid="vszxtd_"
                                />
                            </div>

                            <div data-oid="mscyrnd">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="hjum-1v"
                                >
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.email}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, email: e.target.value })
                                    }
                                    data-oid="h0-xmmq"
                                />
                            </div>

                            <div data-oid=":m7h.eb">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="e-r90-b"
                                >
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.phone}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, phone: e.target.value })
                                    }
                                    data-oid="msp8hfy"
                                />
                            </div>

                            <div data-oid="kdaum7c">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="omff6_6"
                                >
                                    الحالة
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editForm.status}
                                    onChange={(e) =>
                                        setEditForm({ ...editForm, status: e.target.value })
                                    }
                                    data-oid="lj:pt-u"
                                >
                                    <option value="نشط" data-oid="7_1ru1_">
                                        نشط
                                    </option>
                                    <option value="معلق" data-oid="qxmrfr.">
                                        معلق
                                    </option>
                                    <option value="محظور" data-oid="11k-c1h">
                                        محظور
                                    </option>
                                </select>
                            </div>

                            <div className="md:col-span-2" data-oid="nl6okn:">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="gr.p2g8"
                                >
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
                                    data-oid="n2ku9xj"
                                />
                            </div>
                        </div>

                        <div
                            className="flex justify-end space-x-3 space-x-reverse mt-6"
                            data-oid="2z..g4u"
                        >
                            <button
                                onClick={handleSaveEdit}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                                data-oid="-1594i7"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                                data-oid=".q1vkww"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && selectedUser && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    data-oid="573kyq."
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
                        data-oid="d4fwki8"
                    >
                        <div className="flex items-center mb-4" data-oid="51mri9m">
                            <div
                                className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center ml-4"
                                data-oid="9vi:wrh"
                            >
                                <span className="text-red-600 text-2xl" data-oid="mv8gz79">
                                    ⚠️
                                </span>
                            </div>
                            <div data-oid="rst_ay.">
                                <h3 className="text-lg font-bold text-gray-900" data-oid="6-ledpr">
                                    تأكيد الحذف
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="wx.--of">
                                    هذا الإجراء لا يمكن التراجع عنه
                                </p>
                            </div>
                        </div>

                        <div className="mb-6" data-oid="cj4jd4b">
                            <p className="text-gray-700" data-oid=".:u9:6o">
                                هل أنت متأكد من حذف المستخدم{' '}
                                <strong data-oid="_oos9.n">{selectedUser.name}</strong>؟
                            </p>
                            <p className="text-sm text-gray-500 mt-2" data-oid="_:.zu4s">
                                سيتم حذف جميع بيانات المستخدم وطلباته نهائياً.
                            </p>
                        </div>

                        <div
                            className="flex justify-end space-x-3 space-x-reverse"
                            data-oid="cc8vak9"
                        >
                            <button
                                onClick={handleConfirmDelete}
                                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
                                data-oid="e4grtup"
                            >
                                حذف نهائي
                            </button>
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                                data-oid="46hh7bl"
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
