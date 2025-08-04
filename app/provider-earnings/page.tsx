'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProviderEarnings() {
    const [selectedPeriod, setSelectedPeriod] = useState('week');

    const earningsData = {
        today: { amount: '125', orders: 5 },
        week: { amount: '850', orders: 28 },
        month: { amount: '3,240', orders: 112 },
        total: { amount: '12,450', orders: 456 },
    };

    const recentTransactions = [
        {
            id: 1,
            type: 'earning',
            service: 'تنظيف المنزل',
            customer: 'سارة أحمد',
            amount: '+45',
            date: 'اليوم 2:30 م',
            status: 'completed',
        },
        {
            id: 2,
            type: 'earning',
            service: 'صيانة السباكة',
            customer: 'محمد علي',
            amount: '+80',
            date: 'اليوم 11:15 ص',
            status: 'completed',
        },
        {
            id: 3,
            type: 'withdrawal',
            service: 'سحب نقدي',
            customer: 'تحويل بنكي',
            amount: '-200',
            date: 'أمس 4:45 م',
            status: 'pending',
        },
        {
            id: 4,
            type: 'earning',
            service: 'توصيل الطعام',
            customer: 'فاطمة محمد',
            amount: '+25',
            date: 'أمس 1:20 م',
            status: 'completed',
        },
        {
            id: 5,
            type: 'earning',
            service: 'تصليح الأجهزة',
            customer: 'خالد سالم',
            amount: '+120',
            date: 'أمس 10:30 ص',
            status: 'completed',
        },
    ];

    const weeklyStats = [
        { day: 'السبت', amount: 145 },
        { day: 'الأحد', amount: 89 },
        { day: 'الاثنين', amount: 156 },
        { day: 'الثلاثاء', amount: 98 },
        { day: 'الأربعاء', amount: 134 },
        { day: 'الخميس', amount: 103 },
        { day: 'الجمعة', amount: 125 },
    ];

    const maxAmount = Math.max(...weeklyStats.map((stat) => stat.amount));

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="mss-eu6">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="j4bcklq"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="4qtxa_4">
                    <div className="flex items-center justify-between mb-4" data-oid="i5pkh8g">
                        <Link href="/provider-dashboard" className="text-white" data-oid="y_-u1ym">
                            <span className="text-2xl" data-oid="3m..46k">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="30aacmw">
                            الأرباح والمحفظة
                        </h1>
                        <div className="w-8" data-oid="9ql:miq"></div>
                    </div>

                    {/* Current Balance */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid=".qbf7p2">
                        <div className="text-center" data-oid="foq1_zu">
                            <p className="text-white/80 text-sm mb-1" data-oid="10izpye">
                                الرصيد الحالي
                            </p>
                            <p className="text-3xl font-bold mb-2" data-oid="k51wisn">
                                2,450 ريال
                            </p>
                            <div
                                className="flex items-center justify-center space-x-4 space-x-reverse"
                                data-oid="t.5_uc_"
                            >
                                <button
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="tog7ahl"
                                >
                                    سحب الأموال
                                </button>
                                <Link
                                    href="/provider-payment-methods"
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="06b_8:2"
                                >
                                    طرق الدفع
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Period Selector */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="qn84:0:">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="ieo_hep">
                    <div className="flex space-x-2 space-x-reverse" data-oid="sly7b.d">
                        {[
                            { key: 'today', label: 'اليوم' },
                            { key: 'week', label: 'الأسبوع' },
                            { key: 'month', label: 'الشهر' },
                            { key: 'total', label: 'الإجمالي' },
                        ].map((period) => (
                            <button
                                key={period.key}
                                onClick={() => setSelectedPeriod(period.key)}
                                className={`flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-colors ${
                                    selectedPeriod === period.key
                                        ? 'bg-green-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                                data-oid="4pmrhgc"
                            >
                                {period.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Earnings Summary */}
            <div className="max-w-sm mx-auto px-4" data-oid="tkt-p::">
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="_2jdk1e"
                >
                    <div className="text-center mb-4" data-oid="dyk2ajj">
                        <p className="text-gray-600 text-sm mb-1" data-oid="v0p.jgi">
                            {selectedPeriod === 'today' && 'أرباح اليوم'}
                            {selectedPeriod === 'week' && 'أرباح هذا الأسبوع'}
                            {selectedPeriod === 'month' && 'أرباح هذا الشهر'}
                            {selectedPeriod === 'total' && 'إجمالي الأرباح'}
                        </p>
                        <p className="text-4xl font-bold text-green-600 mb-2" data-oid="s5va9lp">
                            {earningsData[selectedPeriod as keyof typeof earningsData].amount} ريال
                        </p>
                        <p className="text-gray-500 text-sm" data-oid="5c:ggll">
                            من {earningsData[selectedPeriod as keyof typeof earningsData].orders}{' '}
                            طلب مكتمل
                        </p>
                    </div>

                    {/* Weekly Chart */}
                    {selectedPeriod === 'week' && (
                        <div className="mt-6" data-oid="fk33.od">
                            <h3
                                className="text-sm font-semibold text-gray-800 mb-3"
                                data-oid="anmu5c_"
                            >
                                الأرباح اليومية
                            </h3>
                            <div
                                className="flex items-end justify-between space-x-2 space-x-reverse h-32"
                                data-oid="7yiabj0"
                            >
                                {weeklyStats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex flex-col items-center"
                                        data-oid="fnb4d-t"
                                    >
                                        <div
                                            className="bg-green-500 rounded-t w-full mb-2 transition-all duration-300"
                                            style={{
                                                height: `${(stat.amount / maxAmount) * 100}%`,
                                                minHeight: '8px',
                                            }}
                                            data-oid="ju_d.1f"
                                        ></div>
                                        <p
                                            className="text-xs text-gray-600 text-center"
                                            data-oid="ey19l69"
                                        >
                                            {stat.day}
                                        </p>
                                        <p
                                            className="text-xs font-semibold text-gray-800"
                                            data-oid="guvx6_g"
                                        >
                                            {stat.amount}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Recent Transactions */}
                <div className="mb-6" data-oid="8b_0.2e">
                    <div className="flex items-center justify-between mb-4" data-oid="yh240wi">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="xafi.sy">
                            المعاملات الأخيرة
                        </h2>
                        <Link
                            href="/provider-transaction-history"
                            className="text-green-600 text-sm font-semibold"
                            data-oid="dxtv1ju"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-3" data-oid="0o.uo6s">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="1lu5ukq"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="od4aa::"
                                >
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse"
                                        data-oid="nk:y3_3"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                transaction.type === 'earning'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-blue-100 text-blue-600'
                                            }`}
                                            data-oid="g3wqkwl"
                                        >
                                            <span className="text-lg" data-oid="3gsfeq8">
                                                {transaction.type === 'earning' ? '💰' : '🏦'}
                                            </span>
                                        </div>
                                        <div data-oid="kdrns15">
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="bbi_.hw"
                                            >
                                                {transaction.service}
                                            </h3>
                                            <p className="text-sm text-gray-600" data-oid="6qdmw7s">
                                                {transaction.customer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="_a2pqpm">
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-left" data-oid="ozjw4k7">
                                        <p
                                            className={`text-lg font-bold ${
                                                transaction.type === 'earning'
                                                    ? 'text-green-600'
                                                    : 'text-blue-600'
                                            }`}
                                            data-oid="t5cstol"
                                        >
                                            {transaction.amount} ريال
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                transaction.status === 'completed'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                            data-oid="i0m0_p3"
                                        >
                                            {transaction.status === 'completed'
                                                ? 'مكتمل'
                                                : 'في الانتظار'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-6" data-oid="dzzmy-a">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="o8p4jyy">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="hlleu88">
                        <button
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="35rq010"
                        >
                            <div className="text-3xl mb-2" data-oid="987v19k">
                                💳
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="6ja4uvj">
                                سحب الأموال
                            </p>
                            <p className="text-xs text-gray-500" data-oid="ngihmzi">
                                تحويل إلى البنك
                            </p>
                        </button>
                        <Link
                            href="/provider-transaction-history"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="lgwz-hg"
                        >
                            <div className="text-3xl mb-2" data-oid="9n_-hdi">
                                📊
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="iclnzjr">
                                تقرير مفصل
                            </p>
                            <p className="text-xs text-gray-500" data-oid="tijbwty">
                                جميع المعاملات
                            </p>
                        </Link>
                        <Link
                            href="/provider-tax-report"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="ark_xj9"
                        >
                            <div className="text-3xl mb-2" data-oid="m_ftwqh">
                                📋
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="nqz2dxm">
                                التقرير الضريبي
                            </p>
                            <p className="text-xs text-gray-500" data-oid=":1-d8n4">
                                للمحاسبة
                            </p>
                        </Link>
                        <Link
                            href="/provider-payment-methods"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="2ee-lks"
                        >
                            <div className="text-3xl mb-2" data-oid="o_0_223">
                                ⚙️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="qb-3gmt">
                                إعدادات الدفع
                            </p>
                            <p className="text-xs text-gray-500" data-oid="1qg80nt">
                                طرق الاستلام
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="m2h73qx"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="99sp4yk">
                    <div className="flex justify-around" data-oid="f30oedy">
                        <Link
                            href="/provider-dashboard"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="mp59kac"
                        >
                            <span className="text-xl" data-oid="7mxiwsi">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="kqvtu8b">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider-requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="2c.gzf9"
                        >
                            <span className="text-xl" data-oid="yonh-lw">
                                📋
                            </span>
                            <span className="text-xs" data-oid="yct:l0.">
                                الطلبات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="-gtlhui"
                        >
                            <span className="text-xl" data-oid="tzljwq7">
                                💰
                            </span>
                            <span className="text-xs font-semibold" data-oid="d8s818d">
                                الأرباح
                            </span>
                        </button>
                        <Link
                            href="/provider-messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="vesuo1g"
                        >
                            <span className="text-xl" data-oid="l:tq7h2">
                                💬
                            </span>
                            <span className="text-xs" data-oid="d3mbww4">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider-profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="lnu4396"
                        >
                            <span className="text-xl" data-oid="txj:4gw">
                                👤
                            </span>
                            <span className="text-xs" data-oid=".m:qiv2">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="3f0u8sv"></div>
        </div>
    );
}
