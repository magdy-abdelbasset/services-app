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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="ni3tn5:">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="yf9rer2"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="9h.ggrj">
                    <div className="flex items-center justify-between mb-4" data-oid="-3wx_ky">
                        <Link href="/provider" className="text-white" data-oid="gkyb1ep">
                            <span className="text-2xl" data-oid="1n0-cx6">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="8bhx8eg">
                            الأرباح والمحفظة
                        </h1>
                        <div className="w-8" data-oid="8epsk9h"></div>
                    </div>

                    {/* Current Balance */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid=":a1:ynw">
                        <div className="text-center" data-oid="cfohzgu">
                            <p className="text-white/80 text-sm mb-1" data-oid="l3fnut2">
                                الرصيد الحالي
                            </p>
                            <p className="text-3xl font-bold mb-2" data-oid="ybdpixw">
                                2,450 ريال
                            </p>
                            <div
                                className="flex items-center justify-center space-x-4 space-x-reverse"
                                data-oid="3jx69.p"
                            >
                                <button
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid=".qxpm7g"
                                >
                                    سحب الأموال
                                </button>
                                <Link
                                    href="/provider/payment-methods"
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="rbbkptn"
                                >
                                    طرق الدفع
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Period Selector */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="7ep3g6-">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="0jg1rqc">
                    <div className="flex space-x-2 space-x-reverse" data-oid="pv_.gw2">
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
                                data-oid="itdq7kn"
                            >
                                {period.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Earnings Summary */}
            <div className="max-w-sm mx-auto px-4" data-oid="6d:4x95">
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="3jadj_w"
                >
                    <div className="text-center mb-4" data-oid="tcpydf7">
                        <p className="text-gray-600 text-sm mb-1" data-oid="xzt5.og">
                            {selectedPeriod === 'today' && 'أرباح اليوم'}
                            {selectedPeriod === 'week' && 'أرباح هذا الأسبوع'}
                            {selectedPeriod === 'month' && 'أرباح هذا الشهر'}
                            {selectedPeriod === 'total' && 'إجمالي الأرباح'}
                        </p>
                        <p className="text-4xl font-bold text-green-600 mb-2" data-oid="cywbe5t">
                            {earningsData[selectedPeriod as keyof typeof earningsData].amount} ريال
                        </p>
                        <p className="text-gray-500 text-sm" data-oid="m0_bae6">
                            من {earningsData[selectedPeriod as keyof typeof earningsData].orders}{' '}
                            طلب مكتمل
                        </p>
                    </div>

                    {/* Weekly Chart */}
                    {selectedPeriod === 'week' && (
                        <div className="mt-6" data-oid="s9s38fs">
                            <h3
                                className="text-sm font-semibold text-gray-800 mb-3"
                                data-oid="snhf.5d"
                            >
                                الأرباح اليومية
                            </h3>
                            <div
                                className="flex items-end justify-between space-x-2 space-x-reverse h-32"
                                data-oid="_rangu_"
                            >
                                {weeklyStats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex flex-col items-center"
                                        data-oid="u:23m80"
                                    >
                                        <div
                                            className="bg-green-500 rounded-t w-full mb-2 transition-all duration-300"
                                            style={{
                                                height: `${(stat.amount / maxAmount) * 100}%`,
                                                minHeight: '8px',
                                            }}
                                            data-oid="u3tn7di"
                                        ></div>
                                        <p
                                            className="text-xs text-gray-600 text-center"
                                            data-oid="7csu_3z"
                                        >
                                            {stat.day}
                                        </p>
                                        <p
                                            className="text-xs font-semibold text-gray-800"
                                            data-oid="8o0qy1h"
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
                <div className="mb-6" data-oid=":amw06o">
                    <div className="flex items-center justify-between mb-4" data-oid="cr7rp06">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="m3x8xdg">
                            المعاملات الأخيرة
                        </h2>
                        <Link
                            href="/provider/transaction-history"
                            className="text-green-600 text-sm font-semibold"
                            data-oid="0q2n9no"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-3" data-oid=".i8:s4f">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="aluix7d"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="afmfrq3"
                                >
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse"
                                        data-oid="o87w7uq"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                transaction.type === 'earning'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-blue-100 text-blue-600'
                                            }`}
                                            data-oid="ruofm64"
                                        >
                                            <span className="text-lg" data-oid="02hr3x3">
                                                {transaction.type === 'earning' ? '💰' : '🏦'}
                                            </span>
                                        </div>
                                        <div data-oid="jreqnc.">
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="p.61r17"
                                            >
                                                {transaction.service}
                                            </h3>
                                            <p className="text-sm text-gray-600" data-oid="bg63s4c">
                                                {transaction.customer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="ri_20g2">
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-left" data-oid="qcba1.w">
                                        <p
                                            className={`text-lg font-bold ${
                                                transaction.type === 'earning'
                                                    ? 'text-green-600'
                                                    : 'text-blue-600'
                                            }`}
                                            data-oid="79l6-3d"
                                        >
                                            {transaction.amount} ريال
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                transaction.status === 'completed'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                            data-oid="3b_4cl6"
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
                <div className="mb-6" data-oid="ee6pp26">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="ipq1luv">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="umg_qf_">
                        <button
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="m1nfkq4"
                        >
                            <div className="text-3xl mb-2" data-oid="hw-j85q">
                                💳
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="sdm-itk">
                                سحب الأموال
                            </p>
                            <p className="text-xs text-gray-500" data-oid="y55n02z">
                                تحويل إلى البنك
                            </p>
                        </button>
                        <Link
                            href="/provider/transaction-history"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="hmt29.3"
                        >
                            <div className="text-3xl mb-2" data-oid="un7afxc">
                                📊
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="ciq-0dx">
                                تقرير مفصل
                            </p>
                            <p className="text-xs text-gray-500" data-oid="otg_3y9">
                                جميع المعاملات
                            </p>
                        </Link>
                        <Link
                            href="/provider/tax-report"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="yhpen5q"
                        >
                            <div className="text-3xl mb-2" data-oid="699clwk">
                                📋
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="_b:rill">
                                التقرير الضريبي
                            </p>
                            <p className="text-xs text-gray-500" data-oid="_3n3pfy">
                                للمحاسبة
                            </p>
                        </Link>
                        <Link
                            href="/provider/payment-methods"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="y35lzt-"
                        >
                            <div className="text-3xl mb-2" data-oid="r3x6k9o">
                                ⚙️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="xca90on">
                                إعدادات الدفع
                            </p>
                            <p className="text-xs text-gray-500" data-oid=":y0.yuj">
                                طرق الاستلام
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="pabwr2t"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="msdlkw9">
                    <div className="flex justify-around" data-oid="dt33t99">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="yig7hnx"
                        >
                            <span className="text-xl" data-oid="jl434xf">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="x1sy8k:">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="eotmimz"
                        >
                            <span className="text-xl" data-oid="kqjvyp0">
                                📋
                            </span>
                            <span className="text-xs" data-oid="ior77ke">
                                الطلبات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="f::_20g"
                        >
                            <span className="text-xl" data-oid="ll8hoji">
                                💰
                            </span>
                            <span className="text-xs font-semibold" data-oid="77qq:o6">
                                الأرباح
                            </span>
                        </button>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid=".khhbi7"
                        >
                            <span className="text-xl" data-oid="bq2mc1n">
                                💬
                            </span>
                            <span className="text-xs" data-oid="gvey.4g">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="0cmr1w:"
                        >
                            <span className="text-xl" data-oid="fhkys6b">
                                👤
                            </span>
                            <span className="text-xs" data-oid="ixhf570">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="v1eeto3"></div>
        </div>
    );
}
