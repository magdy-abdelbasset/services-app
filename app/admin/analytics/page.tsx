'use client';

import { useState } from 'react';

export default function Analytics() {
    const [timeRange, setTimeRange] = useState('30');

    const stats = {
        totalRevenue: 125430,
        totalOrders: 2156,
        avgOrderValue: 58.2,
        customerGrowth: 12.5,
        providerGrowth: 8.3,
        completionRate: 94.2,
    };

    const monthlyData = [
        { month: 'يناير', revenue: 45000, orders: 780, customers: 120 },
        { month: 'فبراير', revenue: 52000, orders: 890, customers: 145 },
        { month: 'مارس', revenue: 48000, orders: 820, customers: 132 },
        { month: 'أبريل', revenue: 58000, orders: 950, customers: 168 },
        { month: 'مايو', revenue: 62000, orders: 1020, customers: 189 },
        { month: 'يونيو', revenue: 55000, orders: 890, customers: 156 },
    ];

    const topServices = [
        { name: 'تنظيف المنزل', orders: 456, revenue: 22800, growth: 15.2 },
        { name: 'صيانة السباكة', orders: 234, revenue: 18720, growth: 8.7 },
        { name: 'توصيل الطعام', orders: 789, revenue: 19725, growth: 22.1 },
        { name: 'خدمات التجميل', orders: 123, revenue: 14760, growth: 5.3 },
        { name: 'تصليح الأجهزة', orders: 167, revenue: 10020, growth: -2.1 },
    ];

    const topProviders = [
        { name: 'أحمد علي', orders: 156, revenue: 7800, rating: 4.9 },
        { name: 'فاطمة محمد', orders: 203, revenue: 10150, rating: 4.8 },
        { name: 'محمد حسن', orders: 89, revenue: 7120, rating: 4.7 },
        { name: 'ليلى محمد', orders: 134, revenue: 16080, rating: 4.6 },
        { name: 'عمر يوسف', orders: 78, revenue: 4680, rating: 4.5 },
    ];

    const cityStats = [
        { city: 'الرياض', orders: 856, revenue: 42800, percentage: 39.7 },
        { city: 'جدة', orders: 634, revenue: 31700, percentage: 29.4 },
        { city: 'الدمام', orders: 423, revenue: 21150, percentage: 19.6 },
        { city: 'مكة', orders: 243, revenue: 12150, percentage: 11.3 },
    ];

    return (
        <div className="p-6">
            <div className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            التقارير والإحصائيات
                        </h1>
                        <p className="text-gray-600">تحليل شامل لأداء التطبيق والخدمات</p>
                    </div>
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <select
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                        >
                            <option value="7">آخر 7 أيام</option>
                            <option value="30">آخر 30 يوم</option>
                            <option value="90">آخر 3 أشهر</option>
                            <option value="365">آخر سنة</option>
                        </select>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                            تصدير التقرير
                        </button>
                    </div>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">إجمالي الإيرادات</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {stats.totalRevenue.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">ريال سعودي</p>
                        </div>
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                            <span className="text-white text-sm">💰</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">إجمالي الطلبات</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {stats.totalOrders.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">طلب</p>
                        </div>
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                            <span className="text-white text-sm">📋</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">متوسط قيمة الطلب</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {stats.avgOrderValue}
                            </p>
                            <p className="text-xs text-gray-500">ريال</p>
                        </div>
                        <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                            <span className="text-white text-sm">📊</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">نمو العملاء</p>
                            <p className="text-2xl font-bold text-green-600">
                                +{stats.customerGrowth}%
                            </p>
                            <p className="text-xs text-gray-500">شهرياً</p>
                        </div>
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                            <span className="text-white text-sm">📈</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">نمو مقدمي الخدمة</p>
                            <p className="text-2xl font-bold text-blue-600">
                                +{stats.providerGrowth}%
                            </p>
                            <p className="text-xs text-gray-500">شهرياً</p>
                        </div>
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                            <span className="text-white text-sm">🔧</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">معدل الإنجاز</p>
                            <p className="text-2xl font-bold text-green-600">
                                {stats.completionRate}%
                            </p>
                            <p className="text-xs text-gray-500">من الطلبات</p>
                        </div>
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                            <span className="text-white text-sm">✅</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Monthly Performance */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">الأداء الشهري</h3>
                    <div className="space-y-4">
                        {monthlyData.map((month, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-gray-900">
                                            {month.month}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {month.orders} طلب
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-500 h-2 rounded-full"
                                            style={{ width: `${(month.revenue / 65000) * 100}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between items-center mt-1">
                                        <span className="text-sm text-gray-500">
                                            {month.revenue.toLocaleString()} ريال
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {month.customers} عميل جديد
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Services */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">أفضل الخدمات</h3>
                    <div className="space-y-4">
                        {topServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                            >
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium text-gray-900">
                                            {service.name}
                                        </span>
                                        <span
                                            className={`text-sm ${service.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}
                                        >
                                            {service.growth >= 0 ? '+' : ''}
                                            {service.growth}%
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-gray-600">
                                        <span>{service.orders} طلب</span>
                                        <span>{service.revenue.toLocaleString()} ريال</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Providers */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">أفضل مقدمي الخدمات</h3>
                    <div className="space-y-4">
                        {topProviders.map((provider, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-3">
                                        <span className="text-white font-semibold">
                                            {provider.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            {provider.name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {provider.orders} طلب مكتمل
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-gray-900">
                                        {provider.revenue.toLocaleString()} ريال
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <span className="text-yellow-500 ml-1">⭐</span>
                                        <span>{provider.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* City Statistics */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">إحصائيات المدن</h3>
                    <div className="space-y-4">
                        {cityStats.map((city, index) => (
                            <div key={index} className="p-3 border border-gray-200 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-gray-900">{city.city}</span>
                                    <span className="text-sm text-gray-600">
                                        {city.percentage}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${city.percentage}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <span>{city.orders} طلب</span>
                                    <span>{city.revenue.toLocaleString()} ريال</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
