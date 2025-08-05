'use client';

import { useState } from 'react';

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
        <div className="p-6" data-oid="k07_73e">
            <div className="mb-6" data-oid="u3fucn7">
                <h1 className="text-2xl font-bold text-gray-900 mb-2" data-oid="87oe3t:">
                    إدارة الطلبات
                </h1>
                <p className="text-gray-600" data-oid="5pfndgy">
                    متابعة وإدارة جميع طلبات الخدمات في التطبيق
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" data-oid="-rzota2">
                <div className="bg-white rounded-lg shadow p-4" data-oid="lj3izf7">
                    <div className="flex items-center" data-oid="w:j7luc">
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="86ywz65"
                        >
                            <span className="text-white text-sm" data-oid="1a6pdbk">
                                📋
                            </span>
                        </div>
                        <div data-oid="-g8if32">
                            <p className="text-sm text-gray-600" data-oid="h0nvqo7">
                                إجمالي الطلبات
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="fc_:xeq">
                                {orders.length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="ii5n7t.">
                    <div className="flex items-center" data-oid="82tirec">
                        <div
                            className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center ml-3"
                            data-oid=".ika4a1"
                        >
                            <span className="text-white text-sm" data-oid="91l:.j8">
                                🔄
                            </span>
                        </div>
                        <div data-oid="2ps5ald">
                            <p className="text-sm text-gray-600" data-oid="cgmyliy">
                                الطلبات النشطة
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="dtyw5cg">
                                {activeOrders}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="nip5jyt">
                    <div className="flex items-center" data-oid="p-f.:2a">
                        <div
                            className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="n2e_tc_"
                        >
                            <span className="text-white text-sm" data-oid="e10qims">
                                ✅
                            </span>
                        </div>
                        <div data-oid="-i1h8so">
                            <p className="text-sm text-gray-600" data-oid="9nzo-08">
                                المكتملة
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="b5:a6et">
                                {completedOrders}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="acx.swx">
                    <div className="flex items-center" data-oid="oflp78b">
                        <div
                            className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="i-7xff:"
                        >
                            <span className="text-white text-sm" data-oid="i:abpg7">
                                💰
                            </span>
                        </div>
                        <div data-oid="n.ykpiq">
                            <p className="text-sm text-gray-600" data-oid="0494h:5">
                                إجمالي الإيرادات
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="9ex:k.0">
                                {totalRevenue} ريال
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow mb-6 p-6" data-oid="3p1kwdm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-oid="ze:r8qv">
                    <div data-oid="kzcu-m-">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="clc3tys"
                        >
                            البحث
                        </label>
                        <input
                            type="text"
                            placeholder="ابحث برقم الطلب، العميل، مقدم الخدمة..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            data-oid="hqk7gk8"
                        />
                    </div>
                    <div data-oid="tr9u-re">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="i1a4kbf"
                        >
                            الحالة
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            data-oid="xy26xr:"
                        >
                            <option value="الكل" data-oid="20b_yp9">
                                جميع الحالات
                            </option>
                            <option value="مكتمل" data-oid="q-pg7:a">
                                مكتمل
                            </option>
                            <option value="جاري التنفيذ" data-oid="47dsnoq">
                                جاري التنفيذ
                            </option>
                            <option value="في الانتظار" data-oid="76xvlb4">
                                في الانتظار
                            </option>
                            <option value="مؤكد" data-oid="wd-95vr">
                                مؤكد
                            </option>
                            <option value="ملغي" data-oid="li1l3eh">
                                ملغي
                            </option>
                        </select>
                    </div>
                    <div data-oid="92de5r-">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="4g_:2bt"
                        >
                            التاريخ
                        </label>
                        <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            data-oid="6f4k_fq"
                        />
                    </div>
                    <div className="flex items-end" data-oid="7gu5l0q">
                        <button
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            data-oid="z579c9m"
                        >
                            تصدير التقرير
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden" data-oid="v0q4qqr">
                <div className="px-6 py-4 border-b border-gray-200" data-oid="64_alc-">
                    <h3 className="text-lg font-medium text-gray-900" data-oid="6mus97x">
                        قائمة الطلبات
                    </h3>
                </div>
                <div className="overflow-x-auto" data-oid="b5igme0">
                    <table className="min-w-full divide-y divide-gray-200" data-oid="mqt1ngl">
                        <thead className="bg-gray-50" data-oid="vovzhal">
                            <tr data-oid="q_flnea">
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="j:-ulj1"
                                >
                                    رقم الطلب
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid=":.u.7pw"
                                >
                                    العميل
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="knhajp7"
                                >
                                    مقدم الخدمة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="330uxap"
                                >
                                    الخدمة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="wfuibpl"
                                >
                                    التاريخ والوقت
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="rm5618m"
                                >
                                    المبلغ
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="ptelksi"
                                >
                                    الحالة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="nrs1lnc"
                                >
                                    التقييم
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="hr514fg"
                                >
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" data-oid="34upmhz">
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50" data-oid="ht5nz33">
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                        data-oid="-j_hv_7"
                                    >
                                        #{order.id}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="txpo_ys"
                                    >
                                        {order.customer}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="a_5k.sy"
                                    >
                                        {order.provider}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        data-oid="n-z:gw5"
                                    >
                                        {order.service}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        data-oid="bo6icmb"
                                    >
                                        <div data-oid="1hi0-:s">{order.date}</div>
                                        <div className="text-xs text-gray-400" data-oid=":4:mulj">
                                            {order.time}
                                        </div>
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="kkm4y3c"
                                    >
                                        {order.amount} ريال
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="f0foaid">
                                        <div className="flex items-center" data-oid="rp.z069">
                                            <span className="ml-2" data-oid="mh-bwfr">
                                                {getStatusIcon(order.status)}
                                            </span>
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
                                                data-oid=":q_86-s"
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        data-oid="c4eqiyp"
                                    >
                                        {order.rating ? (
                                            <div className="flex items-center" data-oid="o6i6dl0">
                                                <span
                                                    className="text-yellow-500 ml-1"
                                                    data-oid="umioa5c"
                                                >
                                                    ⭐
                                                </span>
                                                <span data-oid="1_5cfnt">{order.rating}</span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400" data-oid="vf1i1hc">
                                                لا يوجد
                                            </span>
                                        )}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                        data-oid="eo_:9t-"
                                    >
                                        <div
                                            className="flex space-x-2 space-x-reverse"
                                            data-oid="5105j78"
                                        >
                                            <button
                                                className="text-blue-600 hover:text-blue-900"
                                                data-oid="jb5zrt8"
                                            >
                                                عرض
                                            </button>
                                            <button
                                                className="text-green-600 hover:text-green-900"
                                                data-oid="h5upthq"
                                            >
                                                تعديل
                                            </button>
                                            {order.status === 'في الانتظار' && (
                                                <button
                                                    className="text-red-600 hover:text-red-900"
                                                    data-oid="z7-u4sg"
                                                >
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
