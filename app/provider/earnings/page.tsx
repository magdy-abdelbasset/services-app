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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="mm..fm.">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="-pdk1mu"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="j9jof-f">
                    <div className="flex items-center justify-between mb-4" data-oid="k6c29o3">
                        <Link href="/provider" className="text-white" data-oid="5t4:w7u">
                            <span className="text-2xl" data-oid="0lgo90s">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="ouwjv3v">
                            الأرباح والمحفظة
                        </h1>
                        <div className="w-8" data-oid="ai2un-1"></div>
                    </div>

                    {/* Current Balance */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4" data-oid=":g7qyc-">
                        <div className="text-center" data-oid="s_bcblq">
                            <p className="text-white/80 text-sm mb-1" data-oid="f2zc9gs">
                                الرصيد الحالي
                            </p>
                            <p className="text-3xl font-bold mb-2" data-oid="kdjagt7">
                                2,450 ريال
                            </p>
                            <div
                                className="flex items-center justify-center space-x-4 space-x-reverse"
                                data-oid="txqy--d"
                            >
                                <button
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="og7wh3h"
                                >
                                    سحب الأموال
                                </button>
                                <Link
                                    href="/provider/payment-methods"
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                    data-oid="1bpawgo"
                                >
                                    طرق الدفع
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Period Selector */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="fw6192:">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6" data-oid=".un-nhp">
                    <div className="flex space-x-2 space-x-reverse" data-oid="h0gy44v">
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
                                data-oid="yzmdni6"
                            >
                                {period.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Earnings Summary */}
            <div className="max-w-sm mx-auto px-4" data-oid="tt9e.ba">
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="eb63te2"
                >
                    <div className="text-center mb-4" data-oid="tkiavsc">
                        <p className="text-gray-600 text-sm mb-1" data-oid="1k40a_-">
                            {selectedPeriod === 'today' && 'أرباح اليوم'}
                            {selectedPeriod === 'week' && 'أرباح هذا الأسبوع'}
                            {selectedPeriod === 'month' && 'أرباح هذا الشهر'}
                            {selectedPeriod === 'total' && 'إجمالي الأرباح'}
                        </p>
                        <p className="text-4xl font-bold text-green-600 mb-2" data-oid="1i.butk">
                            {earningsData[selectedPeriod as keyof typeof earningsData].amount} ريال
                        </p>
                        <p className="text-gray-500 text-sm" data-oid="g:zp-sn">
                            من {earningsData[selectedPeriod as keyof typeof earningsData].orders}{' '}
                            طلب مكتمل
                        </p>
                    </div>

                    {/* Weekly Chart */}
                    {selectedPeriod === 'week' && (
                        <div className="mt-6" data-oid="o2p9wib">
                            <h3
                                className="text-sm font-semibold text-gray-800 mb-3"
                                data-oid="w5qdmsz"
                            >
                                الأرباح اليومية
                            </h3>
                            <div
                                className="flex items-end justify-between space-x-2 space-x-reverse h-32"
                                data-oid="2wu2sz-"
                            >
                                {weeklyStats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex flex-col items-center"
                                        data-oid="taimyo:"
                                    >
                                        <div
                                            className="bg-green-500 rounded-t w-full mb-2 transition-all duration-300"
                                            style={{
                                                height: `${(stat.amount / maxAmount) * 100}%`,
                                                minHeight: '8px',
                                            }}
                                            data-oid="vrsvmbq"
                                        ></div>
                                        <p
                                            className="text-xs text-gray-600 text-center"
                                            data-oid="._fs5ln"
                                        >
                                            {stat.day}
                                        </p>
                                        <p
                                            className="text-xs font-semibold text-gray-800"
                                            data-oid="u_lkvn9"
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
                <div className="mb-6" data-oid="n:t6iu2">
                    <div className="flex items-center justify-between mb-4" data-oid="h9vhlcq">
                        <h2 className="text-xl font-bold text-gray-800" data-oid="25sfs:.">
                            المعاملات الأخيرة
                        </h2>
                        <Link
                            href="/provider/transaction-history"
                            className="text-green-600 text-sm font-semibold"
                            data-oid="bfy0-e8"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-3" data-oid="cqk9l5p">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                data-oid="w-k8ukz"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="_8zsv:-"
                                >
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse"
                                        data-oid="eim_uy5"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                transaction.type === 'earning'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-blue-100 text-blue-600'
                                            }`}
                                            data-oid="cmrz9hq"
                                        >
                                            <span className="text-lg" data-oid="w1efnyh">
                                                {transaction.type === 'earning' ? '💰' : '🏦'}
                                            </span>
                                        </div>
                                        <div data-oid="_o0.0xo">
                                            <h3
                                                className="font-semibold text-gray-800"
                                                data-oid="v4fssk:"
                                            >
                                                {transaction.service}
                                            </h3>
                                            <p className="text-sm text-gray-600" data-oid="kzp2.7n">
                                                {transaction.customer}
                                            </p>
                                            <p className="text-xs text-gray-500" data-oid="0jv5onw">
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-left" data-oid="6ud.n-x">
                                        <p
                                            className={`text-lg font-bold ${
                                                transaction.type === 'earning'
                                                    ? 'text-green-600'
                                                    : 'text-blue-600'
                                            }`}
                                            data-oid="p3is2qv"
                                        >
                                            {transaction.amount} ريال
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                transaction.status === 'completed'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                            data-oid="uk_x4he"
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
                <div className="mb-6" data-oid="m142njc">
                    <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="pp-.-m4">
                        إجراءات سريعة
                    </h2>

                    <div className="grid grid-cols-2 gap-4" data-oid="b6vz0fv">
                        <button
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="lchlh:l"
                        >
                            <div className="text-3xl mb-2" data-oid="b6:xk_o">
                                💳
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="ewic5ti">
                                سحب الأموال
                            </p>
                            <p className="text-xs text-gray-500" data-oid="fr32b2h">
                                تحويل إلى البنك
                            </p>
                        </button>
                        <Link
                            href="/provider/transaction-history"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="lpz2qq7"
                        >
                            <div className="text-3xl mb-2" data-oid="9:1gs41">
                                📊
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="q_yoj5z">
                                تقرير مفصل
                            </p>
                            <p className="text-xs text-gray-500" data-oid="bpeb3eb">
                                جميع المعاملات
                            </p>
                        </Link>
                        <Link
                            href="/provider/tax-report"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="f24njlz"
                        >
                            <div className="text-3xl mb-2" data-oid="grupz:y">
                                📋
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="n--45pm">
                                التقرير الضريبي
                            </p>
                            <p className="text-xs text-gray-500" data-oid="9sssmh:">
                                للمحاسبة
                            </p>
                        </Link>
                        <Link
                            href="/provider/payment-methods"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                            data-oid="x963f__"
                        >
                            <div className="text-3xl mb-2" data-oid="q0e48:u">
                                ⚙️
                            </div>
                            <p className="font-semibold text-gray-800" data-oid="embrf16">
                                إعدادات الدفع
                            </p>
                            <p className="text-xs text-gray-500" data-oid="19ecb_y">
                                طرق الاستلام
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="mul_nw7"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="xc14e:q">
                    <div className="flex justify-around" data-oid="mdc1ra1">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="_jmdpg6"
                        >
                            <span className="text-xl" data-oid="e579c9v">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="3kxt2f6">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="phwml2d"
                        >
                            <span className="text-xl" data-oid="qvgkwlz">
                                📋
                            </span>
                            <span className="text-xs" data-oid="76y1qu:">
                                الطلبات
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="k6-a2vb"
                        >
                            <span className="text-xl" data-oid="_adypuc">
                                💰
                            </span>
                            <span className="text-xs font-semibold" data-oid="xnktt.c">
                                الأرباح
                            </span>
                        </button>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="joytg26"
                        >
                            <span className="text-xl" data-oid="tmfw_bb">
                                💬
                            </span>
                            <span className="text-xs" data-oid="tg9m29e">
                                الرسائل
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="egcu.jr"
                        >
                            <span className="text-xl" data-oid="2t32hzb">
                                👤
                            </span>
                            <span className="text-xs" data-oid="77fr4p1">
                                الملف الشخصي
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="536mxmm"></div>
        </div>
    );
}
