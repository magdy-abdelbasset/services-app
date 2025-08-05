'use client';

import { useState } from 'react';

interface Provider {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    rating: number;
    completedJobs: number;
    services: string[];
    joinDate: string;
    verified: boolean;
    documents?: {
        nationalId: boolean;
        license: boolean;
        insurance: boolean;
    };
    earnings?: number;
    location?: string;
}

export default function ProvidersManagement() {
    const [providers] = useState<Provider[]>([
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
            documents: { nationalId: true, license: true, insurance: true },
            earnings: 15600,
            location: 'الرياض',
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
            documents: { nationalId: true, license: true, insurance: false },
            earnings: 20300,
            location: 'جدة',
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
            documents: { nationalId: true, license: false, insurance: false },
            earnings: 0,
            location: 'الدمام',
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
            documents: { nationalId: true, license: true, insurance: true },
            earnings: 8900,
            location: 'مكة المكرمة',
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
            documents: { nationalId: true, license: false, insurance: true },
            earnings: 4500,
            location: 'المدينة المنورة',
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');
    const [serviceFilter, setServiceFilter] = useState('الكل');
    const [selectedProviders, setSelectedProviders] = useState<number[]>([]);
    const [showProviderModal, setShowProviderModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Get unique services for filter
    const allServices = Array.from(new Set(providers.flatMap((p) => p.services)));

    const filteredProviders = providers
        .filter((provider) => {
            const matchesSearch =
                provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                provider.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                provider.phone.includes(searchTerm) ||
                (provider.location &&
                    provider.location.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesStatus = statusFilter === 'الكل' || provider.status === statusFilter;
            const matchesService =
                serviceFilter === 'الكل' || provider.services.includes(serviceFilter);
            return matchesSearch && matchesStatus && matchesService;
        })
        .sort((a, b) => {
            let aValue: any = a[sortBy as keyof Provider];
            let bValue: any = b[sortBy as keyof Provider];

            if (sortBy === 'name') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
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

    const handleSelectProvider = (providerId: number) => {
        setSelectedProviders((prev) =>
            prev.includes(providerId)
                ? prev.filter((id) => id !== providerId)
                : [...prev, providerId],
        );
    };

    const handleSelectAll = () => {
        if (selectedProviders.length === filteredProviders.length) {
            setSelectedProviders([]);
        } else {
            setSelectedProviders(filteredProviders.map((p) => p.id));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedProviders.length === 0) {
            alert('يرجى اختيار مقدمي خدمات أولاً');
            return;
        }
        alert(`تم تطبيق الإجراء "${action}" على ${selectedProviders.length} مقدم خدمة`);
        setSelectedProviders([]);
    };

    const handleViewProvider = (provider: Provider) => {
        setSelectedProvider(provider);
        setShowProviderModal(true);
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
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4" data-oid="rpum-a9">
                    <div data-oid="rfr7zzt">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="l7ne7w3"
                        >
                            البحث
                        </label>
                        <input
                            type="text"
                            placeholder="ابحث بالاسم، البريد، الهاتف، أو المدينة..."
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
                    <div data-oid="18oc2ff">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="jums460"
                        >
                            نوع الخدمة
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={serviceFilter}
                            onChange={(e) => setServiceFilter(e.target.value)}
                            data-oid="vdbjz5p"
                        >
                            <option value="الكل" data-oid="vtnusdh">
                                جميع الخدمات
                            </option>
                            {allServices.map((service) => (
                                <option key={service} value={service} data-oid="919.msy">
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div data-oid="im784zb">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="6rv4w3u"
                        >
                            ترتيب حسب
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={`${sortBy}-${sortOrder}`}
                            onChange={(e) => {
                                const [field, order] = e.target.value.split('-');
                                setSortBy(field);
                                setSortOrder(order as 'asc' | 'desc');
                            }}
                            data-oid="fzos_c:"
                        >
                            <option value="name-asc" data-oid="klgh0qc">
                                الاسم (أ-ي)
                            </option>
                            <option value="name-desc" data-oid=":ankioq">
                                الاسم (ي-أ)
                            </option>
                            <option value="rating-desc" data-oid=":kxby.b">
                                التقييم (الأعلى)
                            </option>
                            <option value="rating-asc" data-oid="sc-fsx:">
                                التقييم (الأقل)
                            </option>
                            <option value="completedJobs-desc" data-oid="8rr.-5n">
                                الخدمات المكتملة (الأكثر)
                            </option>
                            <option value="joinDate-desc" data-oid="puefvco">
                                تاريخ الانضمام (الأحدث)
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

                {/* Bulk Actions */}
                {selectedProviders.length > 0 && (
                    <div
                        className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg"
                        data-oid="zvtmwp0"
                    >
                        <span className="text-sm text-blue-800" data-oid="gfksp3m">
                            تم اختيار {selectedProviders.length} مقدم خدمة
                        </span>
                        <div className="flex gap-2" data-oid="wvk0n9r">
                            <button
                                onClick={() => handleBulkAction('approve')}
                                className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                                data-oid="djbrtyc"
                            >
                                قبول الكل
                            </button>
                            <button
                                onClick={() => handleBulkAction('suspend')}
                                className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                                data-oid="809c1po"
                            >
                                تعليق الكل
                            </button>
                            <button
                                onClick={() => handleBulkAction('reject')}
                                className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                                data-oid="jml.j2h"
                            >
                                رفض الكل
                            </button>
                        </div>
                    </div>
                )}
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
                                    data-oid="eg6zlvm"
                                >
                                    <input
                                        type="checkbox"
                                        checked={
                                            selectedProviders.length === filteredProviders.length &&
                                            filteredProviders.length > 0
                                        }
                                        onChange={handleSelectAll}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        data-oid="64q5ur:"
                                    />
                                </th>
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
                                    data-oid="247ad.p"
                                >
                                    المدينة
                                </th>
                                <th
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    data-oid="n358kh9"
                                >
                                    الأرباح
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
                                    <td className="px-6 py-4 whitespace-nowrap" data-oid="0qj_y7j">
                                        <input
                                            type="checkbox"
                                            checked={selectedProviders.includes(provider.id)}
                                            onChange={() => handleSelectProvider(provider.id)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            data-oid="ctt0-xv"
                                        />
                                    </td>
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
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="uskdg_w"
                                    >
                                        {provider.location}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="aolrj1e"
                                    >
                                        {provider.earnings?.toLocaleString()} ر.س
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
                                                        onClick={() => handleViewProvider(provider)}
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

            {/* Provider Details Modal */}
            {showProviderModal && selectedProvider && (
                <div className="fixed inset-0 z-50 overflow-y-auto" data-oid="3td8n7_">
                    <div
                        className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
                        data-oid="ymfjmz7"
                    >
                        <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            onClick={() => setShowProviderModal(false)}
                            data-oid="r_0i.js"
                        ></div>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
                            data-oid="he:0y-j"
                        >
                            <div
                                className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                                data-oid="aez1p8g"
                            >
                                <div
                                    className="flex justify-between items-center mb-6"
                                    data-oid="9ua.az9"
                                >
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        data-oid="ultydx2"
                                    >
                                        تفاصيل مقدم الخدمة
                                    </h3>
                                    <button
                                        onClick={() => setShowProviderModal(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                        data-oid="oyyn_zz"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid="pbq-hzi"
                                >
                                    {/* Basic Information */}
                                    <div className="bg-gray-50 p-4 rounded-lg" data-oid="5:6pvdt">
                                        <h4
                                            className="font-semibold text-gray-900 mb-3"
                                            data-oid="x17w62g"
                                        >
                                            المعلومات الأساسية
                                        </h4>
                                        <div className="space-y-2" data-oid="6xiu5aq">
                                            <div className="flex items-center" data-oid="adxlizj">
                                                <div
                                                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center ml-4"
                                                    data-oid=":0-bv1:"
                                                >
                                                    <span
                                                        className="text-white font-bold text-xl"
                                                        data-oid="xzdwhyl"
                                                    >
                                                        {selectedProvider.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div data-oid="xm10j-u">
                                                    <div
                                                        className="flex items-center gap-2"
                                                        data-oid="n2ga6g6"
                                                    >
                                                        <h5
                                                            className="font-semibold text-lg"
                                                            data-oid="9hi.rpl"
                                                        >
                                                            {selectedProvider.name}
                                                        </h5>
                                                        {selectedProvider.verified && (
                                                            <span
                                                                className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                                                                data-oid="k9f02nz"
                                                            >
                                                                موثق
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-gray-600" data-oid="sd3..j3">
                                                        ID: {selectedProvider.id}
                                                    </p>
                                                </div>
                                            </div>
                                            <div data-oid="7a460zp">
                                                <strong data-oid="-djcqz0">
                                                    البريد الإلكتروني:
                                                </strong>{' '}
                                                {selectedProvider.email}
                                            </div>
                                            <div data-oid="8:yo-dp">
                                                <strong data-oid="ap8rst3">رقم الهاتف:</strong>{' '}
                                                {selectedProvider.phone}
                                            </div>
                                            <div data-oid="kfg-41h">
                                                <strong data-oid="c-0ctv9">المدينة:</strong>{' '}
                                                {selectedProvider.location}
                                            </div>
                                            <div data-oid="28zxeo3">
                                                <strong data-oid="n8ul:wi">تاريخ الانضمام:</strong>{' '}
                                                {selectedProvider.joinDate}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Performance Stats */}
                                    <div className="bg-gray-50 p-4 rounded-lg" data-oid="rg-sx7y">
                                        <h4
                                            className="font-semibold text-gray-900 mb-3"
                                            data-oid="1ko-qq6"
                                        >
                                            إحصائيات الأداء
                                        </h4>
                                        <div className="space-y-2" data-oid="e7uuh:4">
                                            <div
                                                className="flex justify-between"
                                                data-oid="oa4pz-:"
                                            >
                                                <span data-oid="4xuaep_">التقييم:</span>
                                                <div
                                                    className="flex items-center"
                                                    data-oid="u4c01yj"
                                                >
                                                    <span
                                                        className="text-yellow-500 ml-1"
                                                        data-oid="x1o5m_2"
                                                    >
                                                        ⭐
                                                    </span>
                                                    <span data-oid="p674_yd">
                                                        {selectedProvider.rating > 0
                                                            ? selectedProvider.rating
                                                            : 'جديد'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className="flex justify-between"
                                                data-oid="qw8:-93"
                                            >
                                                <span data-oid="lje7ppv">الخدمات المكتملة:</span>
                                                <span data-oid="mqbnx6m">
                                                    {selectedProvider.completedJobs}
                                                </span>
                                            </div>
                                            <div
                                                className="flex justify-between"
                                                data-oid="qwuvcgi"
                                            >
                                                <span data-oid="zor:t_m">إجمالي الأرباح:</span>
                                                <span data-oid="47yy_ow">
                                                    {selectedProvider.earnings?.toLocaleString()}{' '}
                                                    ر.س
                                                </span>
                                            </div>
                                            <div
                                                className="flex justify-between"
                                                data-oid="8:44ijs"
                                            >
                                                <span data-oid="vd__vch">الحالة:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedProvider.status)}`}
                                                    data-oid="ttuuqb5"
                                                >
                                                    {selectedProvider.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Services */}
                                    <div className="bg-gray-50 p-4 rounded-lg" data-oid="4-9_gqf">
                                        <h4
                                            className="font-semibold text-gray-900 mb-3"
                                            data-oid="p5xc7_a"
                                        >
                                            الخدمات المقدمة
                                        </h4>
                                        <div className="flex flex-wrap gap-2" data-oid="hzheys.">
                                            {selectedProvider.services.map((service, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800"
                                                    data-oid="rdgkkm_"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Documents Status */}
                                    <div className="bg-gray-50 p-4 rounded-lg" data-oid="uro4zbf">
                                        <h4
                                            className="font-semibold text-gray-900 mb-3"
                                            data-oid="pdgu380"
                                        >
                                            حالة الوثائق
                                        </h4>
                                        <div className="space-y-2" data-oid="f8b628f">
                                            <div
                                                className="flex justify-between items-center"
                                                data-oid="l1is4v7"
                                            >
                                                <span data-oid="dl:p3j-">الهوية الوطنية:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${
                                                        selectedProvider.documents?.nationalId
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                    data-oid="669hgjn"
                                                >
                                                    {selectedProvider.documents?.nationalId
                                                        ? 'مرفوعة'
                                                        : 'غير مرفوعة'}
                                                </span>
                                            </div>
                                            <div
                                                className="flex justify-between items-center"
                                                data-oid="pxhjflt"
                                            >
                                                <span data-oid="ooyx.v4">الرخصة المهنية:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${
                                                        selectedProvider.documents?.license
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                    data-oid="ltx9ai8"
                                                >
                                                    {selectedProvider.documents?.license
                                                        ? 'مرفوعة'
                                                        : 'غير مرفوعة'}
                                                </span>
                                            </div>
                                            <div
                                                className="flex justify-between items-center"
                                                data-oid="oxaw9lm"
                                            >
                                                <span data-oid="6tx3uor">التأمين:</span>
                                                <span
                                                    className={`px-2 py-1 text-xs rounded-full ${
                                                        selectedProvider.documents?.insurance
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                    data-oid=".fvp1pd"
                                                >
                                                    {selectedProvider.documents?.insurance
                                                        ? 'مرفوع'
                                                        : 'غير مرفوع'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                                data-oid="_8w3bvw"
                            >
                                <div className="flex gap-3" data-oid="x2nfoz1">
                                    {selectedProvider.status === 'في انتظار الموافقة' && (
                                        <>
                                            <button
                                                onClick={() => {
                                                    handleApprove(selectedProvider.id);
                                                    setShowProviderModal(false);
                                                }}
                                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                                data-oid="8b0i0pd"
                                            >
                                                قبول
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleReject(selectedProvider.id);
                                                    setShowProviderModal(false);
                                                }}
                                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                                data-oid="8-ohrs9"
                                            >
                                                رفض
                                            </button>
                                        </>
                                    )}
                                    <button
                                        onClick={() => setShowProviderModal(false)}
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                                        data-oid=".8yq653"
                                    >
                                        إغلاق
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
