'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Transaction {
    id: number;
    type: 'credit' | 'debit';
    amount: number;
    description: string;
    date: string;
    status: 'completed' | 'pending' | 'failed';
    category: 'service' | 'topup' | 'refund' | 'bonus';
}

interface TopUpOption {
    id: number;
    amount: number;
    bonus?: number;
    popular?: boolean;
}

export default function WalletPage() {
    const [currentBalance, setCurrentBalance] = useState(245.5);
    const [showTopUpModal, setShowTopUpModal] = useState(false);
    const [selectedTopUpAmount, setSelectedTopUpAmount] = useState<number | null>(null);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [activeTab, setActiveTab] = useState<'all' | 'credit' | 'debit'>('all');

    // Mock transaction data
    const transactions: Transaction[] = [
        {
            id: 1,
            type: 'debit',
            amount: 45,
            description: 'خدمة تنظيف المنزل - أحمد علي',
            date: '2024-01-15',
            status: 'completed',
            category: 'service',
        },
        {
            id: 2,
            type: 'credit',
            amount: 100,
            description: 'شحن المحفظة',
            date: '2024-01-14',
            status: 'completed',
            category: 'topup',
        },
        {
            id: 3,
            type: 'credit',
            amount: 25,
            description: 'مكافأة العضو الجديد',
            date: '2024-01-13',
            status: 'completed',
            category: 'bonus',
        },
        {
            id: 4,
            type: 'debit',
            amount: 60,
            description: 'خدمة صيانة السباكة - محمد حسن',
            date: '2024-01-12',
            status: 'completed',
            category: 'service',
        },
        {
            id: 5,
            type: 'credit',
            amount: 30,
            description: 'استرداد خدمة ملغية',
            date: '2024-01-11',
            status: 'completed',
            category: 'refund',
        },
        {
            id: 6,
            type: 'debit',
            amount: 35,
            description: 'خدمة توصيل الطعام - فاطمة محمد',
            date: '2024-01-10',
            status: 'pending',
            category: 'service',
        },
    ];

    const topUpOptions: TopUpOption[] = [
        { id: 1, amount: 50 },
        { id: 2, amount: 100, bonus: 5 },
        { id: 3, amount: 200, bonus: 15, popular: true },
        { id: 4, amount: 500, bonus: 50 },
        { id: 5, amount: 1000, bonus: 120 },
    ];

    const filteredTransactions = transactions.filter((transaction) => {
        if (activeTab === 'all') return true;
        return transaction.type === activeTab;
    });

    const handleTopUp = async (amount: number) => {
        setIsProcessingPayment(true);

        // Simulate payment processing
        setTimeout(() => {
            const bonus = topUpOptions.find((option) => option.amount === amount)?.bonus || 0;
            const totalAmount = amount + bonus;

            setCurrentBalance((prev) => prev + totalAmount);
            setIsProcessingPayment(false);
            setShowTopUpModal(false);
            setSelectedTopUpAmount(null);

            // Show success notification
            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'success',
                    title: 'تم شحن المحفظة بنجاح!',
                    message: `تم إضافة ${totalAmount} ريال إلى محفظتك`,
                    duration: 4000,
                });
            }
        }, 2000);
    };

    const getTransactionIcon = (transaction: Transaction) => {
        switch (transaction.category) {
            case 'service':
                return transaction.type === 'debit' ? '🛠️' : '💼';
            case 'topup':
                return '💳';
            case 'refund':
                return '↩️';
            case 'bonus':
                return '🎁';
            default:
                return '💰';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'text-green-600';
            case 'pending':
                return 'text-orange-600';
            case 'failed':
                return 'text-red-600';
            default:
                return 'text-gray-600';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'مكتملة';
            case 'pending':
                return 'قيد المعالجة';
            case 'failed':
                return 'فاشلة';
            default:
                return 'غير معروف';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="am1olmj">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="sbzq59e"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="4pulka_">
                    <div className="flex items-center justify-between mb-6" data-oid="02ux_9d">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="aqn0v73"
                        >
                            <span className="text-lg" data-oid="xa-bdor">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="qwjjr7t">
                            <h1 className="text-lg font-bold" data-oid="d_w_bha">
                                محفظتي
                            </h1>
                            <p className="text-sm text-white/90" data-oid="ayde0l_">
                                إدارة رصيدك
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="aygrm5e"></div>
                    </div>

                    {/* Balance Card */}
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                        data-oid="8k9yux6"
                    >
                        <p className="text-white/80 text-sm mb-2" data-oid="8weddib">
                            الرصيد الحالي
                        </p>
                        <h2 className="text-3xl font-bold mb-4" data-oid="aic2yo_">
                            {currentBalance.toFixed(2)} ريال
                        </h2>
                        <div className="flex space-x-3 space-x-reverse" data-oid=".v-ycj3">
                            <button
                                onClick={() => setShowTopUpModal(true)}
                                className="flex-1 bg-white text-green-600 py-3 rounded-xl font-semibold"
                                data-oid="d0oh.vt"
                            >
                                شحن المحفظة
                            </button>
                            <Link
                                href="/transfer"
                                className="flex-1 bg-white/20 text-white py-3 rounded-xl font-semibold text-center"
                                data-oid="1bonhpe"
                            >
                                تحويل رصيد
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="pj:.j6x">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="pw4nft7">
                    <div className="grid grid-cols-3 gap-4 text-center" data-oid="ew007rs">
                        <div data-oid=":lxq6qj">
                            <p className="text-2xl font-bold text-green-600" data-oid="7r5nmd4">
                                {transactions.filter((t) => t.type === 'credit').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="e783ke8">
                                عمليات إيداع
                            </p>
                        </div>
                        <div data-oid="l3:bay9">
                            <p className="text-2xl font-bold text-red-600" data-oid="sdcoxk-">
                                {transactions.filter((t) => t.type === 'debit').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="im_fzq:">
                                عمليات سحب
                            </p>
                        </div>
                        <div data-oid="xq1kkd.">
                            <p className="text-2xl font-bold text-blue-600" data-oid=":tmdn4a">
                                {transactions.filter((t) => t.status === 'pending').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="qir64eo">
                                قيد المعالجة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction History */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="sg.da23">
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100"
                    data-oid="5l.:7cd"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-gray-100" data-oid="khgg2gm">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'all'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="dxu:j:1"
                        >
                            جميع العمليات
                        </button>
                        <button
                            onClick={() => setActiveTab('credit')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'credit'
                                    ? 'text-green-600 border-b-2 border-green-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="rpna2p7"
                        >
                            الإيداعات
                        </button>
                        <button
                            onClick={() => setActiveTab('debit')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'debit'
                                    ? 'text-red-600 border-b-2 border-red-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="vabb.vz"
                        >
                            المدفوعات
                        </button>
                    </div>

                    {/* Transaction List */}
                    <div className="max-h-96 overflow-y-auto" data-oid="05gmhpb">
                        {filteredTransactions.length > 0 ? (
                            <div className="divide-y divide-gray-100" data-oid="z5k3t5_">
                                {filteredTransactions.map((transaction) => (
                                    <div key={transaction.id} className="p-4" data-oid="k3e8oh5">
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse"
                                            data-oid="amdfc2f"
                                        >
                                            <div className="text-2xl" data-oid="qez6rq8">
                                                {getTransactionIcon(transaction)}
                                            </div>
                                            <div className="flex-1" data-oid="o93.onw">
                                                <h4
                                                    className="font-semibold text-gray-800 text-sm"
                                                    data-oid="dilo5_6"
                                                >
                                                    {transaction.description}
                                                </h4>
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 mt-1"
                                                    data-oid="qfy3k4n"
                                                >
                                                    <span data-oid="e1hx:fm">
                                                        {transaction.date}
                                                    </span>
                                                    <span data-oid="goz-__a">•</span>
                                                    <span
                                                        className={getStatusColor(
                                                            transaction.status,
                                                        )}
                                                        data-oid="16ozhma"
                                                    >
                                                        {getStatusText(transaction.status)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right" data-oid="z6-xw3v">
                                                <p
                                                    className={`font-bold ${
                                                        transaction.type === 'credit'
                                                            ? 'text-green-600'
                                                            : 'text-red-600'
                                                    }`}
                                                    data-oid="hfkviv6"
                                                >
                                                    {transaction.type === 'credit' ? '+' : '-'}
                                                    {transaction.amount} ريال
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 text-center" data-oid="etw0p2q">
                                <div className="text-4xl mb-4" data-oid="90bmjgq">
                                    📊
                                </div>
                                <p className="text-gray-500" data-oid="spjfwte">
                                    لا توجد عمليات في هذا القسم
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Top Up Modal */}
            {showTopUpModal && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid=".kad5ue">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="z8llsso"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="v6l71yh">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="qrkyi:b"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="n2in_f.">
                                <h3 className="text-xl font-bold text-gray-800" data-oid="p-8fiq5">
                                    شحن المحفظة
                                </h3>
                                <button
                                    onClick={() => setShowTopUpModal(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="r7ucimg"
                                >
                                    <span className="text-gray-600" data-oid="34e6k7_">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="-sn:xmm">
                                اختر المبلغ المناسب لك
                            </p>
                        </div>

                        {/* Top Up Options */}
                        <div
                            className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]"
                            data-oid="pgzji9k"
                        >
                            <div className="space-y-3 mb-6" data-oid="l.brh4u">
                                {topUpOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSelectedTopUpAmount(option.amount)}
                                        className={`w-full p-4 rounded-xl border-2 transition-colors relative ${
                                            selectedTopUpAmount === option.amount
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 bg-white'
                                        }`}
                                        data-oid=":csw3qt"
                                    >
                                        {option.popular && (
                                            <div
                                                className="absolute -top-2 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid="bxqf4o."
                                            >
                                                الأكثر شعبية
                                            </div>
                                        )}
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="sd_p-f9"
                                        >
                                            <div className="text-right" data-oid="g7a5y9j">
                                                <p
                                                    className="text-lg font-bold text-gray-800"
                                                    data-oid="y6j:bjk"
                                                >
                                                    {option.amount} ريال
                                                </p>
                                                {option.bonus && (
                                                    <p
                                                        className="text-sm text-green-600"
                                                        data-oid="ste0dvo"
                                                    >
                                                        + {option.bonus} ريال مكافأة
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-2xl" data-oid="kbzftg2">
                                                💳
                                            </div>
                                        </div>
                                        {option.bonus && (
                                            <div
                                                className="mt-2 text-xs text-gray-500"
                                                data-oid="rbl7tjb"
                                            >
                                                المجموع: {option.amount + option.bonus} ريال
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Payment Methods */}
                            <div className="mb-6" data-oid="gy_niog">
                                <h4 className="font-semibold text-gray-800 mb-3" data-oid="i1h:.4e">
                                    طرق الدفع
                                </h4>
                                <div className="space-y-2" data-oid="okk02pd">
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="pjjqzt7"
                                    >
                                        <div className="text-xl" data-oid="glrzj.v">
                                            💳
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid="2.w8cho">
                                            بطاقة ائتمانية
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="c99h.dp"
                                    >
                                        <div className="text-xl" data-oid="tctqnuw">
                                            📱
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid=":sxtpbu">
                                            محفظة رقمية
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="_2zfg_8"
                                    >
                                        <div className="text-xl" data-oid="xp_ru1j">
                                            🏦
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid="22q7o0:">
                                            تحويل بنكي
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Confirm Button */}
                            <button
                                onClick={() =>
                                    selectedTopUpAmount && handleTopUp(selectedTopUpAmount)
                                }
                                disabled={!selectedTopUpAmount}
                                className={`w-full py-4 rounded-2xl font-semibold ${
                                    selectedTopUpAmount
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                                data-oid="w87c1:h"
                            >
                                {selectedTopUpAmount
                                    ? `شحن ${selectedTopUpAmount} ريال`
                                    : 'اختر المبلغ أولاً'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Payment Processing Modal */}
            {isProcessingPayment && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    data-oid="j4-xbi7"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="w6izgs8"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="cuh6_3-"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="nj._xkz">
                            جاري معالجة الدفع
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="jcx6_5q">
                            يرجى الانتظار بينما نعالج عملية الدفع...
                        </p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Space */}
            <div className="h-20" data-oid="dq3md4r"></div>
        </div>
    );
}
