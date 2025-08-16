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
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/provider" className="text-white">
                            <span className="text-2xl">←</span>
                        </Link>
                        <h1 className="text-xl font-bold">الأرباح والمحفظة</h1>
                        <div className="w-8"></div>
                    </div>

                    {/* Current Balance */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4">
                        <div className="text-center">
                            <p className="text-white/80 text-sm mb-1">الرصيد الحالي</p>
                            <p className="text-3xl font-bold mb-2">2,450 ريال</p>
                            <div className="flex items-center justify-center space-x-4 space-x-reverse">
                                <button className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
                                    سحب الأموال
                                </button>
                                <Link
                                    href="/provider/payment-methods"
                                    className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold"
                                >
                                    طرق الدفع
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Period Selector */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-2 mb-6">
                    <div className="flex space-x-2 space-x-reverse">
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
                            >
                                {period.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Earnings Summary */}
            <div className="max-w-sm mx-auto px-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                    <div className="text-center mb-4">
                        <p className="text-gray-600 text-sm mb-1">
                            {selectedPeriod === 'today' && 'أرباح اليوم'}
                            {selectedPeriod === 'week' && 'أرباح هذا الأسبوع'}
                            {selectedPeriod === 'month' && 'أرباح هذا الشهر'}
                            {selectedPeriod === 'total' && 'إجمالي الأرباح'}
                        </p>
                        <p className="text-4xl font-bold text-green-600 mb-2">
                            {earningsData[selectedPeriod as keyof typeof earningsData].amount} ريال
                        </p>
                        <p className="text-gray-500 text-sm">
                            من {earningsData[selectedPeriod as keyof typeof earningsData].orders}{' '}
                            طلب مكتمل
                        </p>
                    </div>

                    {/* Weekly Chart */}
                    {selectedPeriod === 'week' && (
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold text-gray-800 mb-3">
                                الأرباح اليومية
                            </h3>
                            <div className="flex items-end justify-between space-x-2 space-x-reverse h-32">
                                {weeklyStats.map((stat, index) => (
                                    <div key={index} className="flex-1 flex flex-col items-center">
                                        <div
                                            className="bg-green-500 rounded-t w-full mb-2 transition-all duration-300"
                                            style={{
                                                height: `${(stat.amount / maxAmount) * 100}%`,
                                                minHeight: '8px',
                                            }}
                                        ></div>
                                        <p className="text-xs text-gray-600 text-center">
                                            {stat.day}
                                        </p>
                                        <p className="text-xs font-semibold text-gray-800">
                                            {stat.amount}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Recent Transactions */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800">المعاملات الأخيرة</h2>
                        <Link
                            href="/provider/transaction-history"
                            className="text-green-600 text-sm font-semibold"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3 space-x-reverse">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                transaction.type === 'earning'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-blue-100 text-blue-600'
                                            }`}
                                        >
                                            <span className="text-lg">
                                                {transaction.type === 'earning' ? '💰' : '🏦'}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">
                                                {transaction.service}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {transaction.customer}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p
                                            className={`text-lg font-bold ${
                                                transaction.type === 'earning'
                                                    ? 'text-green-600'
                                                    : 'text-blue-600'
                                            }`}
                                        >
                                            {transaction.amount} ريال
                                        </p>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                transaction.status === 'completed'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                            }`}
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
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">إجراءات سريعة</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                            <div className="text-3xl mb-2">💳</div>
                            <p className="font-semibold text-gray-800">سحب الأموال</p>
                            <p className="text-xs text-gray-500">تحويل إلى البنك</p>
                        </button>
                        <Link
                            href="/provider/transaction-history"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        >
                            <div className="text-3xl mb-2">📊</div>
                            <p className="font-semibold text-gray-800">تقرير مفصل</p>
                            <p className="text-xs text-gray-500">جميع المعاملات</p>
                        </Link>
                        <Link
                            href="/provider/tax-report"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        >
                            <div className="text-3xl mb-2">📋</div>
                            <p className="font-semibold text-gray-800">التقرير الضريبي</p>
                            <p className="text-xs text-gray-500">للمحاسبة</p>
                        </Link>
                        <Link
                            href="/provider/payment-methods"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        >
                            <div className="text-3xl mb-2">⚙️</div>
                            <p className="font-semibold text-gray-800">إعدادات الدفع</p>
                            <p className="text-xs text-gray-500">طرق الاستلام</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="max-w-sm mx-auto px-4 py-3">
                    <div className="flex justify-around">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">🏠</span>
                            <span className="text-xs">الرئيسية</span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">📋</span>
                            <span className="text-xs">الطلبات</span>
                        </Link>
                        <button className="flex flex-col items-center space-y-1 text-green-600">
                            <span className="text-xl">💰</span>
                            <span className="text-xs font-semibold">الأرباح</span>
                        </button>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">💬</span>
                            <span className="text-xs">الرسائل</span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                        >
                            <span className="text-xl">👤</span>
                            <span className="text-xs">الملف الشخصي</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20"></div>
        </div>
    );
}
