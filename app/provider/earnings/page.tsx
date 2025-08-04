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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="9b2x3wk">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="f06c4t1"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="ph590rk">
                    <div className="flex items-center justify-between mb-4" data-oid="95908iy">
                        <Link href="/provider" className="text-white" data-oid="ti:v0_c">
                            <span className="text-2xl" data-oid="mjmz:u:">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="ls9mm2.">
                            الأرباح والمحفظة
                        </h1>
                        <div className="w-8" data-oid="0rkg-tm"></div>
                    </div>

                    {/* Current Balance */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid="tott8xe">
                        <div className="text-center" data-oid="8:q-fcl">
                            <p className="text-white/80 text-sm mb-1" data-oid="50-y9y-">
                                الرصيد الحالي
                            </p>
                            <p className="text-3xl font-bold mb-2" data-oid="0ich5.3">
                                2,450 ريال
                            </p>
                            <div
                                className="flex items-center justify-center space-x-4 space-x-reverse"
                                data-oid="hmsicri"
                            >
                                <button
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid=":5bgkom"
                                >
                                    سحب الأموال
                                </button>
                                <Link
                                    href="/provider/payment-methods"
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="arucjf2"
                                >
                                    طرق الدفع
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Period Selector */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="edn.2su">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="hq_c74.">
                    <div className="flex space-x-2 space-x-reverse" data-oid="k8a5k:l">
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
                                data-oid="57067__"
                            >
                                {period.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Earnings Summary */}
            <div className="max-w-sm mx-auto px-4" data-oid="xf.wftc">
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="rzi-rq1"
                >
                    <div className="text-center mb-4" data-oid="dg80e4a">
                        <p className="text-gray-600 text-sm mb-1" data-oid="xyz0lyg">
                            {selectedPeriod === 'today' && 'أرباح اليوم'}
                            {selectedPeriod === 'week' && 'أرباح هذا الأسبوع'}
                            {selectedPeriod === 'month' && 'أرباح هذا الشهر'}
                            {selectedPeriod === 'total' && 'إجمالي الأرباح'}
                        </p>
                        <p className="text-4xl font-bold text-green-600 mb-2" data-oid=":av-m47">
                            {earningsData[selectedPeriod as keyof typeof earningsData].amount} ريال
                        </p>
                        <p className="text-gray-500 text-sm" data-oid="bgyfdk4">
                            من {earningsData[selectedPeriod as keyof typeof earningsData].orders}{' '}
                            طلب مكتمل
                        </p>
                    </div>

                    {/* Weekly Chart */}
                    {selectedPeriod === 'week' && (
                        <div className="mt-6" data-oid=".xm_pn1">
                            <h3
                                className="text-sm font-semibold text-gray-800 mb-3"
                                data-oid="tjuiy8-"
                            >
                                الأرباح اليومية
                            </h3>
                            <div
                                className="flex items-end justify-between space-x-2 space-x-reverse h-32"
                                data-oid="7jihg1j"
                            >
                                {weeklyStats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex flex-col items-center"
                                        data-oid="y7.xlvf"
                                    >
                                        <div
                                            className="bg-green-500 rounded-t w-full mb-2 transition-all duration-300"
                                            style={{
                                                height: `${(stat.amount / maxAmount) * 100}%`,
                                                minHeight: '8px',
                                            }}
                                            data-oid="fes3nd2"
                                        ></div>
                                        <p
                                            className="text-xs text-gray-600 text-center"
                                            data-oid="5sk.f_k"
                                        >
                                            {stat.day}
                                        </p>
                                        <p
                                            className="text-xs font-semibold text-gray-800"
                                            data-oid="x34d3r-"
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
                <div className="mb-6" data-oid="y81t9aj">
                    <div className="flex items-center justify-between mb-4" data-oid="2ja9ld:">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="tb1k28p">
                            المعاملات الأخيرة
                        </h2>
                        <Link
                            href="/provider/transaction-history"
                            className="text-green-600 text-sm font-semibold"
                            data-oid="o0ay:wd"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-3" data-oid="mh2hg-2">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="pz28.m2"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="hv0kkvn"
                                >
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse"
                                        data-oid="4hsgv72"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                transaction.type === 'earning'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-blue-100 text-blue-600'
                                            }`}
                                            data-oid="o57uae5"
                                        >
                                            <span className="text-lg" data-oid=":_le9aj">
                                                {transaction.type === 'earning' ? '💰' : '🏦'}
                                            </span>
                                        </div>
                                        <div data-oid="n608a1n">
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="hx36k__"
                                            >
                                                {transaction.service}
                                            </h3>
                                            <p className="text-sm text-gray-600" data-oid="czaxnai">
                                                {transaction.customer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="760o-v0">
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-left" data-oid="qfc5g:m">
                                        <p
                                            className={`text-lg font-bold ${
                                                transaction.type === 'earning'
                                                    ? 'text-green-600'
                                                    : 'text-blue-600'
                                            }`}
                                            data-oid="n2_lm7l"
                                        >
                                            {transaction.amount} ريال
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                transaction.status === 'completed'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                            data-oid="b4nupc5"
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
                <div className="mb-6" data-oid="781jjxq">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="uc_ae14">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="f_5pq-1">
                        <button
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="wv0y0p8"
                        >
                            <div className="text-3xl mb-2" data-oid="d_67w.r">
                                💳
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="s:k725g">
                                سحب الأموال
                            </p>
                            <p className="text-xs text-gray-500" data-oid="26a1r2j">
                                تحويل إلى البنك
                            </p>
                        </button>
                        <Link
                            href="/provider/transaction-history"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="7hz.0l7"
                        >
                            <div className="text-3xl mb-2" data-oid="jt0n169">
                                📊
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="bh8:.t.">
                                تقرير مفصل
                            </p>
                            <p className="text-xs text-gray-500" data-oid="o29_bu-">
                                جميع المعاملات
                            </p>
                        </Link>
                        <Link
                            href="/provider/tax-report"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="r:mu:sp"
                        >
                            <div className="text-3xl mb-2" data-oid="1emm9vw">
                                📋
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="ppqavm5">
                                التقرير الضريبي
                            </p>
                            <p className="text-xs text-gray-500" data-oid="a3e8.xn">
                                للمحاسبة
                            </p>
                        </Link>
                        <Link
                            href="/provider/payment-methods"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="_fa:52i"
                        >
                            <div className="text-3xl mb-2" data-oid="z.rv9ns">
                                ⚙️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="cju_ck4">
                                إعدادات الدفع
                            </p>
                            <p className="text-xs text-gray-500" data-oid="idfdhc1">
                                طرق الاستلام
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="zx9_84:"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="0zr9.p8">
                    <div className="flex justify-around" data-oid="y_linql">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="-eo8k0j"
                        >
                            <span className="text-xl" data-oid="3mnmqqb">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="rc:ygwc">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="mscq934"
                        >
                            <span className="text-xl" data-oid="zm.iuj8">
                                📋
                            </span>
                            <span className="text-xs" data-oid="yqi1p-8">
                                الطلبات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="yvucu2e"
                        >
                            <span className="text-xl" data-oid="3mvxvvj">
                                💰
                            </span>
                            <span className="text-xs font-semibold" data-oid="6rhpbqj">
                                الأرباح
                            </span>
                        </button>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="ow.21xp"
                        >
                            <span className="text-xl" data-oid="z1t.gi2">
                                💬
                            </span>
                            <span className="text-xs" data-oid="dudr764">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="t9b6i.4"
                        >
                            <span className="text-xl" data-oid="9gev-gi">
                                👤
                            </span>
                            <span className="text-xs" data-oid="5_3:kn9">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="7iz8.7t"></div>
        </div>
    );
}
