'use client';

import { useState } from 'react';

export default function ProvidersManagement() {
    const [providers] = useState([
        {
            id: 1,
            name: 'أحمد علي',
            email: 'ahmed.ali@example.com',
            phone: '0501234567',
            status: 'نشط',
            rating: 4.9,
            completedJobs: 156,
            services: ['تنظيف المنزل', 'صيانة عامة'],
            joinDate: '2024-01-10',
            verified: true,
        },
        {
            id: 2,
            name: 'فاطمة محمد',
            email: 'fatima@example.com',
            phone: '0507654321',
            status: 'نشط',
            rating: 4.8,
            completedJobs: 203,
            services: ['تنظيف المنزل'],
            joinDate: '2024-01-15',
            verified: true,
        },
        {
            id: 3,
            name: 'محمد حسن',
            email: 'mohammed@example.com',
            phone: '0509876543',
            status: 'في انتظار الموافقة',
            rating: 0,
            completedJobs: 0,
            services: ['صيانة السباكة'],
            joinDate: '2024-02-20',
            verified: false,
        },
        {
            id: 4,
            name: 'ليلى محمد',
            email: 'layla@example.com',
            phone: '0502468135',
            status: 'نشط',
            rating: 4.7,
            completedJobs: 89,
            services: ['خدمات التجميل'],
            joinDate: '2024-01-25',
            verified: true,
        },
        {
            id: 5,
            name: 'عمر يوسف',
            email: 'omar@example.com',
            phone: '0508642097',
            status: 'معلق',
            rating: 4.2,
            completedJobs: 45,
            services: ['تصليح الأجهزة'],
            joinDate: '2024-02-01',
            verified: false,
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');

    const filteredProviders = providers.filter((provider) => {
        const matchesSearch =
            provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.phone.includes(searchTerm);
        const matchesStatus = statusFilter === 'الكل' || provider.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'نشط':
                return 'bg-green-100 text-green-800';
            case 'معلق':
                return 'bg-yellow-100 text-yellow-800';
            case 'في انتظار الموافقة':
                return 'bg-blue-100 text-blue-800';
            case 'مرفوض':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleApprove = (providerId: number) => {
        alert(`تم قبول مقدم الخدمة رقم ${providerId}`);
    };

    const handleReject = (providerId: number) => {
        alert(`تم رفض مقدم الخدمة رقم ${providerId}`);
    };

    return (
        <div className="p-6" data-oid="-fj7hig">
            <div className="mb-6" data-oid="ktxacz.">
                <h1 className="text-2xl font-bold text-gray-900 mb-2" data-oid="p5yj3qi">
                    إدارة مقدمي الخدمات
                </h1>
                <p className="text-gray-600" data-oid="cmzxels">
                    إدارة حسابات مقدمي الخدمات والموافقة على الطلبات
                </p>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow mb-6 p-6" data-oid="6-5s7et">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="rpum-a9">
                    <div data-oid="rfr7zzt">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="l7ne7w3"
                        >
                            البحث
                        </label>
                        <input
                            type="text"
                            placeholder="ابحث بالاسم، البريد الإلكتروني، أو رقم الهاتف..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            data-oid="upid5.v"
                        />
                    </div>
                    <div data-oid="8k4j-1d">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="8y2h1x2"
                        >
                            الحالة
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            data-oid="znabdp2"
                        >
                            <option value="الكل" data-oid="lxplqep">
                                جميع الحالات
                            </option>
                            <option value="نشط" data-oid="7c-zz-n">
                                نشط
                            </option>
                            <option value="معلق" data-oid="h.agc_8">
                                معلق
                            </option>
                            <option value="في انتظار الموافقة" data-oid="oskitb5">
                                في انتظار الموافقة
                            </option>
                            <option value="مرفوض" data-oid="8acfu-r">
                                مرفوض
                            </option>
                        </select>
                    </div>
                    <div className="flex items-end" data-oid="d:8n0n4">
                        <button
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            data-oid="d3naly4"
                        >
                            تصدير البيانات
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" data-oid="t0lq8i5">
                <div className="bg-white rounded-lg shadow p-4" data-oid="0i0d2.n">
                    <div className="flex items-center" data-oid="8avdk56">
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="aqkwko7"
                        >
                            <span className="text-white text-sm" data-oid="vk3jus:">
                                🔧
                            </span>
                        </div>
                        <div data-oid="ppby8xu">
                            <p className="text-sm text-gray-600" data-oid=".jk2lb3">
                                إجمالي مقدمي الخدمات
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="ahw4xaw">
                                {providers.length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="w3:w9vl">
                    <div className="flex items-center" data-oid="vogqgby">
                        <div
                            className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="__.eip3"
                        >
                            <span className="text-white text-sm" data-oid="z8un:ph">
                                ✓
                            </span>
                        </div>
                        <div data-oid="tj1s:dg">
                            <p className="text-sm text-gray-600" data-oid=":nrlxbc">
                                النشطين
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="xd37_dg">
                                {providers.filter((p) => p.status === 'نشط').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="0e-1i..">
                    <div className="flex items-center" data-oid="j8f.1-g">
                        <div
                            className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="ua1my_:"
                        >
                            <span className="text-white text-sm" data-oid="40d8s3k">
                                ⏳
                            </span>
                        </div>
                        <div data-oid="68xlq5-">
                            <p className="text-sm text-gray-600" data-oid="v:r5feh">
                                في انتظار الموافقة
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid=".1xijve">
                                {providers.filter((p) => p.status === 'في انتظار الموافقة').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4" data-oid="-8cwyfo">
                    <div className="flex items-center" data-oid="g6vn7uc">
                        <div
                            className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center ml-3"
                            data-oid="8tl0231"
                        >
                            <span className="text-white text-sm" data-oid="g7xn6fk">
                                ✅
                            </span>
                        </div>
                        <div data-oid="sjg1652">
                            <p className="text-sm text-gray-600" data-oid="23j8k:0">
                                الموثقين
                            </p>
                            <p className="text-xl font-semibold text-gray-900" data-oid="9ui4jwx">
                                {providers.filter((p) => p.verified).length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Providers Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden" data-oid="u.x8yb7">
                <div className="px-6 py-4 border-b border-gray-200" data-oid="7c4q3-t">
                    <h3 className="text-lg font-medium text-gray-900" data-oid="xm6zrq5">
                        قائمة مقدمي الخدمات
                    </h3>
                </div>
                <div className="overflow-x-auto" data-oid="p3xabea">
                    <table className="min-w-full divide-y divide-gray-200" data-oid="nc:sl0t">
                        <thead className="bg-gray-50" data-oid="z4:c:tk">
                            <tr data-oid="io8sv0z">
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="43wbpv2"
                                >
                                    مقدم الخدمة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid=":sxy8-y"
                                >
                                    معلومات الاتصال
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="k7gm3ds"
                                >
                                    التقييم
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="1y9dksn"
                                >
                                    الخدمات المكتملة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="1j_.e33"
                                >
                                    الخدمات
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="u_86nwx"
                                >
                                    الحالة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="dozolmy"
                                >
                                    الإجراءات
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" data-oid="fbf1be6">
                            {filteredProviders.map((provider) => (
                                <tr
                                    key={provider.id}
                                    className="hover:bg-gray-50"
                                    data-oid="bpabwvt"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="n:o:w92">
                                        <div className="flex items-center" data-oid="_zm9.rt">
                                            <div
                                                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center ml-3"
                                                data-oid="rg41lso"
                                            >
                                                <span
                                                    className="text-white font-semibold"
                                                    data-oid="15.bh83"
                                                >
                                                    {provider.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div data-oid="ditrh:s">
                                                <div
                                                    className="flex items-center"
                                                    data-oid="2k6gmbx"
                                                >
                                                    <div
                                                        className="text-sm font-medium text-gray-900"
                                                        data-oid="g4js0mq"
                                                    >
                                                        {provider.name}
                                                    </div>
                                                    {provider.verified && (
                                                        <span
                                                            className="mr-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                            data-oid="dcmbq92"
                                                        >
                                                            موثق
                                                        </span>
                                                    )}
                                                </div>
                                                <div
                                                    className="text-sm text-gray-500"
                                                    data-oid="dxea263"
                                                >
                                                    ID: {provider.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="esnsmdt">
                                        <div className="text-sm text-gray-900" data-oid=".8ez4b:">
                                            {provider.email}
                                        </div>
                                        <div className="text-sm text-gray-500" data-oid="ygn4ow5">
                                            {provider.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="ukhbhxo">
                                        <div className="flex items-center" data-oid="yegrqcl">
                                            <span
                                                className="text-yellow-500 ml-1"
                                                data-oid="6zcew5z"
                                            >
                                                ⭐
                                            </span>
                                            <span
                                                className="text-sm text-gray-900"
                                                data-oid="8je5.mp"
                                            >
                                                {provider.rating > 0 ? provider.rating : 'جديد'}
                                            </span>
                                        </div>
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="x88isu4"
                                    >
                                        {provider.completedJobs}
                                    </td>
                                    <td className="px-6 py-4" data-oid="8:n.olp">
                                        <div className="flex flex-wrap gap-1" data-oid="gnnmv0w">
                                            {provider.services.map((service, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                                                    data-oid="sk:kyts"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="67lvfxt">
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(provider.status)}`}
                                            data-oid="-f9:1h3"
                                        >
                                            {provider.status}
                                        </span>
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                        data-oid="fn0.q2p"
                                    >
                                        <div
                                            className="flex space-x-2 space-x-reverse"
                                            data-oid="d7mn3lu"
                                        >
                                            {provider.status === 'في انتظار الموافقة' ? (
                                                <>
                                                    <button
                                                        onClick={() => handleApprove(provider.id)}
                                                        className="text-green-600 hover:text-green-900"
                                                        data-oid="7bs-mi9"
                                                    >
                                                        قبول
                                                    </button>
                                                    <button
                                                        onClick={() => handleReject(provider.id)}
                                                        className="text-red-600 hover:text-red-900"
                                                        data-oid="j3jgw22"
                                                    >
                                                        رفض
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        className="text-blue-600 hover:text-blue-900"
                                                        data-oid="db:rg_:"
                                                    >
                                                        عرض
                                                    </button>
                                                    <button
                                                        className="text-green-600 hover:text-green-900"
                                                        data-oid=":xbmi:q"
                                                    >
                                                        تعديل
                                                    </button>
                                                    <button
                                                        className="text-red-600 hover:text-red-900"
                                                        data-oid="813::v."
                                                    >
                                                        تعليق
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
            </div>
        </div>
    );
}
