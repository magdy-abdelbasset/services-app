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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="13fddbb">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="ay_b92p"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="jlbsqod">
                    <div className="flex items-center justify-between mb-4" data-oid="7m:8ma1">
                        <Link href="/provider" className="text-white" data-oid=":boda2v">
                            <span className="text-2xl" data-oid="jkxlmzo">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="u-.tdsr">
                            الأرباح والمحفظة
                        </h1>
                        <div className="w-8" data-oid="rg4rz8l"></div>
                    </div>

                    {/* Current Balance */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid="dtavbho">
                        <div className="text-center" data-oid="2.5wt2i">
                            <p className="text-white/80 text-sm mb-1" data-oid="n-rj.2b">
                                الرصيد الحالي
                            </p>
                            <p className="text-3xl font-bold mb-2" data-oid="oyr.22_">
                                2,450 ريال
                            </p>
                            <div
                                className="flex items-center justify-center space-x-4 space-x-reverse"
                                data-oid="w8.em-:"
                            >
                                <button
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="-0_5bac"
                                >
                                    سحب الأموال
                                </button>
                                <Link
                                    href="/provider/payment-methods"
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="mw4ng8h"
                                >
                                    طرق الدفع
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Period Selector */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="p8x..lu">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid="6p5s9b7">
                    <div className="flex space-x-2 space-x-reverse" data-oid="olp-lj1">
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
                                data-oid="i56wkv0"
                            >
                                {period.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Earnings Summary */}
            <div className="max-w-sm mx-auto px-4" data-oid="t3450f-">
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="94z6w9f"
                >
                    <div className="text-center mb-4" data-oid="m7289gz">
                        <p className="text-gray-600 text-sm mb-1" data-oid="7cv0nd6">
                            {selectedPeriod === 'today' && 'أرباح اليوم'}
                            {selectedPeriod === 'week' && 'أرباح هذا الأسبوع'}
                            {selectedPeriod === 'month' && 'أرباح هذا الشهر'}
                            {selectedPeriod === 'total' && 'إجمالي الأرباح'}
                        </p>
                        <p className="text-4xl font-bold text-green-600 mb-2" data-oid="8ksg-y8">
                            {earningsData[selectedPeriod as keyof typeof earningsData].amount} ريال
                        </p>
                        <p className="text-gray-500 text-sm" data-oid="n.wcidh">
                            من {earningsData[selectedPeriod as keyof typeof earningsData].orders}{' '}
                            طلب مكتمل
                        </p>
                    </div>

                    {/* Weekly Chart */}
                    {selectedPeriod === 'week' && (
                        <div className="mt-6" data-oid="1ulrzhp">
                            <h3
                                className="text-sm font-semibold text-gray-800 mb-3"
                                data-oid="5kw3yku"
                            >
                                الأرباح اليومية
                            </h3>
                            <div
                                className="flex items-end justify-between space-x-2 space-x-reverse h-32"
                                data-oid="c42hiqh"
                            >
                                {weeklyStats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex flex-col items-center"
                                        data-oid="k5pej1i"
                                    >
                                        <div
                                            className="bg-green-500 rounded-t w-full mb-2 transition-all duration-300"
                                            style={{
                                                height: `${(stat.amount / maxAmount) * 100}%`,
                                                minHeight: '8px',
                                            }}
                                            data-oid="3u4wk24"
                                        ></div>
                                        <p
                                            className="text-xs text-gray-600 text-center"
                                            data-oid="6ncnxex"
                                        >
                                            {stat.day}
                                        </p>
                                        <p
                                            className="text-xs font-semibold text-gray-800"
                                            data-oid="ryal4la"
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
                <div className="mb-6" data-oid="m6lwkse">
                    <div className="flex items-center justify-between mb-4" data-oid="-wwttv0">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="cn22whu">
                            المعاملات الأخيرة
                        </h2>
                        <Link
                            href="/provider/transaction-history"
                            className="text-green-600 text-sm font-semibold"
                            data-oid="a1h3y37"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-3" data-oid="iq2q57a">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="800qiw6"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="io5zmpu"
                                >
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse"
                                        data-oid="j5zokz:"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                transaction.type === 'earning'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-blue-100 text-blue-600'
                                            }`}
                                            data-oid="-rri5k7"
                                        >
                                            <span className="text-lg" data-oid="ayz6nqz">
                                                {transaction.type === 'earning' ? '💰' : '🏦'}
                                            </span>
                                        </div>
                                        <div data-oid="qlv7ru2">
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="0g-rocv"
                                            >
                                                {transaction.service}
                                            </h3>
                                            <p className="text-sm text-gray-600" data-oid="bos2j2k">
                                                {transaction.customer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="gh99ga6">
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-left" data-oid="8-w8-x1">
                                        <p
                                            className={`text-lg font-bold ${
                                                transaction.type === 'earning'
                                                    ? 'text-green-600'
                                                    : 'text-blue-600'
                                            }`}
                                            data-oid="omcbrth"
                                        >
                                            {transaction.amount} ريال
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                transaction.status === 'completed'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                            data-oid="d_uxc0e"
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
                <div className="mb-6" data-oid="5umkwea">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="1zk4g56">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="zufpz58">
                        <button
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="jb2rspv"
                        >
                            <div className="text-3xl mb-2" data-oid="qnm:a5z">
                                💳
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="hegz8u7">
                                سحب الأموال
                            </p>
                            <p className="text-xs text-gray-500" data-oid="1_h7mzc">
                                تحويل إلى البنك
                            </p>
                        </button>
                        <Link
                            href="/provider/transaction-history"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="ew31gxc"
                        >
                            <div className="text-3xl mb-2" data-oid="9-ukz1y">
                                📊
                            </div>
                            <p className="font-semibold text-gray-800" data-oid=".eyr.ng">
                                تقرير مفصل
                            </p>
                            <p className="text-xs text-gray-500" data-oid="f8z4:70">
                                جميع المعاملات
                            </p>
                        </Link>
                        <Link
                            href="/provider/tax-report"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="5-4sy9p"
                        >
                            <div className="text-3xl mb-2" data-oid="yl7e_az">
                                📋
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="oz48rsh">
                                التقرير الضريبي
                            </p>
                            <p className="text-xs text-gray-500" data-oid="6xk.xkd">
                                للمحاسبة
                            </p>
                        </Link>
                        <Link
                            href="/provider/payment-methods"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="lmeryk."
                        >
                            <div className="text-3xl mb-2" data-oid="82onqpp">
                                ⚙️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="zf3uodi">
                                إعدادات الدفع
                            </p>
                            <p className="text-xs text-gray-500" data-oid="pplry76">
                                طرق الاستلام
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="hlj0xc8"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="gyzu.u9">
                    <div className="flex justify-around" data-oid="64:fg_b">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="7_fid1t"
                        >
                            <span className="text-xl" data-oid="o37xfa9">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="1_tdoaz">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="xm17i-8"
                        >
                            <span className="text-xl" data-oid="h949jn_">
                                📋
                            </span>
                            <span className="text-xs" data-oid="knk4ncx">
                                الطلبات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="315.3at"
                        >
                            <span className="text-xl" data-oid="64_him8">
                                💰
                            </span>
                            <span className="text-xs font-semibold" data-oid=":1n0_i1">
                                الأرباح
                            </span>
                        </button>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="8c6n.hd"
                        >
                            <span className="text-xl" data-oid="6_4n6ll">
                                💬
                            </span>
                            <span className="text-xs" data-oid="iuf5-k9">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="w9zykfh"
                        >
                            <span className="text-xl" data-oid="zu6ydtq">
                                👤
                            </span>
                            <span className="text-xs" data-oid="gxm3frp">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="-l0_ja1"></div>
        </div>
    );
}
