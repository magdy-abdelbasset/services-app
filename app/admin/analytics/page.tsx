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
        <div className="p-6" data-oid="k83kujq">
            <div className="mb-6" data-oid="nr:dzbk">
                <div className="flex justify-between items-center" data-oid="alsk9u7">
                    <div data-oid="a22lqjl">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2" data-oid="gsiw7fl">
                            التقارير والإحصائيات
                        </h1>
                        <p className="text-gray-600" data-oid="g7plim3">
                            تحليل شامل لأداء التطبيق والخدمات
                        </p>
                    </div>
                    <div className="flex items-center space-x-4 space-x-reverse" data-oid="0qdayld">
                        <select
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            data-oid="fmvmnot"
                        >
                            <option value="7" data-oid="3wfy0m6">
                                آخر 7 أيام
                            </option>
                            <option value="30" data-oid="1:i:if9">
                                آخر 30 يوم
                            </option>
                            <option value="90" data-oid="dvdu1:l">
                                آخر 3 أشهر
                            </option>
                            <option value="365" data-oid="fmcwbcg">
                                آخر سنة
                            </option>
                        </select>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                            data-oid="5xuw.pn"
                        >
                            تصدير التقرير
                        </button>
                    </div>
                </div>
            </div>

            {/* Key Metrics */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
                data-oid="lov:qi8"
            >
                <div className="bg-white rounded-lg shadow p-4" data-oid="_yu7ram">
                    <div className="flex items-center justify-between" data-oid="s:en7bm">
                        <div data-oid=":vdqj41">
                            <p className="text-sm text-gray-600" data-oid="7gbpdof">
                                إجمالي الإيرادات
                            </p>
                            <p className="text-2xl font-bold text-gray-900" data-oid="s.765q2">
                                {stats.totalRevenue.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="tv1o2eu">
                                ريال سعودي
                            </p>
                        </div>
                        <div
                            className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center"
                            data-oid="m65.7cp"
                        >
                            <span className="text-white text-sm" data-oid="jy31g9b">
                                💰
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4" data-oid="4nu3pho">
                    <div className="flex items-center justify-between" data-oid="4mhb_m3">
                        <div data-oid="ap2vs.6">
                            <p className="text-sm text-gray-600" data-oid="v4i8tiq">
                                إجمالي الطلبات
                            </p>
                            <p className="text-2xl font-bold text-gray-900" data-oid="sao:g2z">
                                {stats.totalOrders.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="5ry:tsq">
                                طلب
                            </p>
                        </div>
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center"
                            data-oid="mo2ldk3"
                        >
                            <span className="text-white text-sm" data-oid="bi3f5g4">
                                📋
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4" data-oid="pnm8zm9">
                    <div className="flex items-center justify-between" data-oid="wvcvtnf">
                        <div data-oid="crw4mu_">
                            <p className="text-sm text-gray-600" data-oid="6ytp82i">
                                متوسط قيمة الطلب
                            </p>
                            <p className="text-2xl font-bold text-gray-900" data-oid="3o5qiel">
                                {stats.avgOrderValue}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="4.sl3pv">
                                ريال
                            </p>
                        </div>
                        <div
                            className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center"
                            data-oid="5mqg11l"
                        >
                            <span className="text-white text-sm" data-oid="6nr-z86">
                                📊
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4" data-oid="q0fq6ay">
                    <div className="flex items-center justify-between" data-oid="ovh6a2g">
                        <div data-oid="bcjawmr">
                            <p className="text-sm text-gray-600" data-oid="m3uqzcd">
                                نمو العملاء
                            </p>
                            <p className="text-2xl font-bold text-green-600" data-oid=".qlc8de">
                                +{stats.customerGrowth}%
                            </p>
                            <p className="text-xs text-gray-500" data-oid="8gz2.d3">
                                شهرياً
                            </p>
                        </div>
                        <div
                            className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center"
                            data-oid="iavnnjb"
                        >
                            <span className="text-white text-sm" data-oid="msa9kfx">
                                📈
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4" data-oid="ohz7to_">
                    <div className="flex items-center justify-between" data-oid="6nk9tq0">
                        <div data-oid="m9xtcx0">
                            <p className="text-sm text-gray-600" data-oid="9rp_.k.">
                                نمو مقدمي الخدمة
                            </p>
                            <p className="text-2xl font-bold text-blue-600" data-oid="kdjr9_j">
                                +{stats.providerGrowth}%
                            </p>
                            <p className="text-xs text-gray-500" data-oid="ic8fazb">
                                شهرياً
                            </p>
                        </div>
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center"
                            data-oid="dsiarjr"
                        >
                            <span className="text-white text-sm" data-oid="k124exz">
                                🔧
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4" data-oid="h2-5dve">
                    <div className="flex items-center justify-between" data-oid=":qf747.">
                        <div data-oid="17o7:87">
                            <p className="text-sm text-gray-600" data-oid="pu40:rf">
                                معدل الإنجاز
                            </p>
                            <p className="text-2xl font-bold text-green-600" data-oid="ergii59">
                                {stats.completionRate}%
                            </p>
                            <p className="text-xs text-gray-500" data-oid="zf4jd3d">
                                من الطلبات
                            </p>
                        </div>
                        <div
                            className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center"
                            data-oid="oktdqpf"
                        >
                            <span className="text-white text-sm" data-oid="lo_puum">
                                ✅
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" data-oid="e3swx5h">
                {/* Monthly Performance */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="hcgqe.c">
                    <h3 className="text-lg font-medium text-gray-900 mb-4" data-oid="01cnw1z">
                        الأداء الشهري
                    </h3>
                    <div className="space-y-4" data-oid="-1j8_df">
                        {monthlyData.map((month, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                data-oid="sk9rwup"
                            >
                                <div className="flex-1" data-oid="dq1e_p5">
                                    <div
                                        className="flex justify-between items-center mb-1"
                                        data-oid="dufsgv9"
                                    >
                                        <span
                                            className="font-medium text-gray-900"
                                            data-oid="o4ewifc"
                                        >
                                            {month.month}
                                        </span>
                                        <span className="text-sm text-gray-600" data-oid="o34i.hv">
                                            {month.orders} طلب
                                        </span>
                                    </div>
                                    <div
                                        className="w-full bg-gray-200 rounded-full h-2"
                                        data-oid="r.79gxc"
                                    >
                                        <div
                                            className="bg-blue-500 h-2 rounded-full"
                                            style={{ width: `${(month.revenue / 65000) * 100}%` }}
                                            data-oid="4-sokkh"
                                        ></div>
                                    </div>
                                    <div
                                        className="flex justify-between items-center mt-1"
                                        data-oid=".qe7o3l"
                                    >
                                        <span className="text-sm text-gray-500" data-oid="7r43gy1">
                                            {month.revenue.toLocaleString()} ريال
                                        </span>
                                        <span className="text-sm text-gray-500" data-oid="5u6m9ls">
                                            {month.customers} عميل جديد
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Services */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="2rhsxtc">
                    <h3 className="text-lg font-medium text-gray-900 mb-4" data-oid="_gvk0t1">
                        أفضل الخدمات
                    </h3>
                    <div className="space-y-4" data-oid="5h75hu3">
                        {topServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                                data-oid="_b6m4e1"
                            >
                                <div className="flex-1" data-oid=".q3xk2a">
                                    <div
                                        className="flex justify-between items-center mb-1"
                                        data-oid="fd9sjt8"
                                    >
                                        <span
                                            className="font-medium text-gray-900"
                                            data-oid="w8guxxn"
                                        >
                                            {service.name}
                                        </span>
                                        <span
                                            className={`text-sm ${service.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}
                                            data-oid="3sgr_57"
                                        >
                                            {service.growth >= 0 ? '+' : ''}
                                            {service.growth}%
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center text-sm text-gray-600"
                                        data-oid="16ky9c_"
                                    >
                                        <span data-oid=":4m7lp3">{service.orders} طلب</span>
                                        <span data-oid="g119pqr">
                                            {service.revenue.toLocaleString()} ريال
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="vlxz57p">
                {/* Top Providers */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="qts7teq">
                    <h3 className="text-lg font-medium text-gray-900 mb-4" data-oid="sa212nb">
                        أفضل مقدمي الخدمات
                    </h3>
                    <div className="space-y-4" data-oid="1envtcq">
                        {topProviders.map((provider, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                data-oid="o6qy6p5"
                            >
                                <div className="flex items-center" data-oid="xph9r-j">
                                    <div
                                        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-3"
                                        data-oid="j0z449k"
                                    >
                                        <span
                                            className="text-white font-semibold"
                                            data-oid="mqkkn.1"
                                        >
                                            {provider.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="xhkmawg">
                                        <div
                                            className="font-medium text-gray-900"
                                            data-oid="p2:nb1y"
                                        >
                                            {provider.name}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="mysz4w0">
                                            {provider.orders} طلب مكتمل
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left" data-oid="tfmxbd6">
                                    <div className="font-medium text-gray-900" data-oid="mw0y:_z">
                                        {provider.revenue.toLocaleString()} ريال
                                    </div>
                                    <div
                                        className="flex items-center text-sm text-gray-600"
                                        data-oid="2tskeyz"
                                    >
                                        <span className="text-yellow-500 ml-1" data-oid="9:ilm2.">
                                            ⭐
                                        </span>
                                        <span data-oid="1g3ks3b">{provider.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* City Statistics */}
                <div className="bg-white rounded-lg shadow p-6" data-oid="ukqsmav">
                    <h3 className="text-lg font-medium text-gray-900 mb-4" data-oid="f3ebn:q">
                        إحصائيات المدن
                    </h3>
                    <div className="space-y-4" data-oid="nbrqwvj">
                        {cityStats.map((city, index) => (
                            <div
                                key={index}
                                className="p-3 border border-gray-200 rounded-lg"
                                data-oid="rs7n-ao"
                            >
                                <div
                                    className="flex justify-between items-center mb-2"
                                    data-oid="s5y473a"
                                >
                                    <span className="font-medium text-gray-900" data-oid="ymk-u94">
                                        {city.city}
                                    </span>
                                    <span className="text-sm text-gray-600" data-oid="je-6:so">
                                        {city.percentage}%
                                    </span>
                                </div>
                                <div
                                    className="w-full bg-gray-200 rounded-full h-2 mb-2"
                                    data-oid="m2r42wa"
                                >
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${city.percentage}%` }}
                                        data-oid="ih045l3"
                                    ></div>
                                </div>
                                <div
                                    className="flex justify-between items-center text-sm text-gray-600"
                                    data-oid="woba813"
                                >
                                    <span data-oid="7lo2zvr">{city.orders} طلب</span>
                                    <span data-oid="i79a9yl">
                                        {city.revenue.toLocaleString()} ريال
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
