'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UsersManagement() {
    const [users] = useState([
        {
            id: 1,
            name: 'أحمد محمد',
            email: 'ahmed@example.com',
            phone: '0501234567',
            status: 'نشط',
            joinDate: '2024-01-15',
            orders: 12,
        },
        {
            id: 2,
            name: 'سارة أحمد',
            email: 'sara@example.com',
            phone: '0507654321',
            status: 'نشط',
            joinDate: '2024-01-20',
            orders: 8,
        },
        {
            id: 3,
            name: 'علي محمود',
            email: 'ali@example.com',
            phone: '0509876543',
            status: 'معلق',
            joinDate: '2024-02-01',
            orders: 3,
        },
        {
            id: 4,
            name: 'نور الدين',
            email: 'nour@example.com',
            phone: '0502468135',
            status: 'نشط',
            joinDate: '2024-02-10',
            orders: 15,
        },
        {
            id: 5,
            name: 'مريم سالم',
            email: 'mariam@example.com',
            phone: '0508642097',
            status: 'محظور',
            joinDate: '2024-01-05',
            orders: 2,
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');

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
                                                className="text-blue-600 hover:text-blue-900"
                                                data-oid="f35s8.g"
                                            >
                                                عرض
                                            </button>
                                            <button
                                                className="text-green-600 hover:text-green-900"
                                                data-oid="3s425.r"
                                            >
                                                تعديل
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-900"
                                                data-oid="7bgeuok"
                                            >
                                                حظر
                                            </button>
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
