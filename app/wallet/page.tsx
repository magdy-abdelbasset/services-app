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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="wu304l:">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="2:fd9ob"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="_91:0ep">
                    <div className="flex items-center justify-between mb-6" data-oid="tznd3.5">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="81rguzx"
                        >
                            <span className="text-lg" data-oid="ozf-n70">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid=":ofb2hk">
                            <h1 className="text-lg font-bold" data-oid="s:tdqs5">
                                محفظتي
                            </h1>
                            <p className="text-sm text-white/90" data-oid="fl6shsj">
                                إدارة رصيدك
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="i1vsqgh"></div>
                    </div>

                    {/* Balance Card */}
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                        data-oid="ftclwvd"
                    >
                        <p className="text-white/80 text-sm mb-2" data-oid="t7ybn.a">
                            الرصيد الحالي
                        </p>
                        <h2 className="text-3xl font-bold mb-4" data-oid="n8_.-l9">
                            {currentBalance.toFixed(2)} ريال
                        </h2>
                        <div className="flex space-x-3 space-x-reverse" data-oid="j4omo__">
                            <button
                                onClick={() => setShowTopUpModal(true)}
                                className="flex-1 bg-white text-green-600 py-3 rounded-xl font-semibold"
                                data-oid="sv1-y30"
                            >
                                شحن المحفظة
                            </button>
                            <Link
                                href="/transfer"
                                className="flex-1 bg-white/20 text-white py-3 rounded-xl font-semibold text-center"
                                data-oid="voxvq4m"
                            >
                                تحويل رصيد
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="1_9w1:l">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="y7dbgie">
                    <div className="grid grid-cols-3 gap-4 text-center" data-oid="8yo-3ro">
                        <div data-oid="9tgfp2k">
                            <p className="text-2xl font-bold text-green-600" data-oid="8bfcy8x">
                                {transactions.filter((t) => t.type === 'credit').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="9tw.lbz">
                                عمليات إيداع
                            </p>
                        </div>
                        <div data-oid="2s3xt47">
                            <p className="text-2xl font-bold text-red-600" data-oid="3mwwbwi">
                                {transactions.filter((t) => t.type === 'debit').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="x6fvsl6">
                                عمليات سحب
                            </p>
                        </div>
                        <div data-oid="l323yn_">
                            <p className="text-2xl font-bold text-blue-600" data-oid="fer_8qm">
                                {transactions.filter((t) => t.status === 'pending').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="qf8msbi">
                                قيد المعالجة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction History */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="h97i7cu">
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100"
                    data-oid="eylrkuf"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-gray-100" data-oid="m72j62e">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'all'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="pt54-kr"
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
                            data-oid="s278qz."
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
                            data-oid="rtw9wf4"
                        >
                            المدفوعات
                        </button>
                    </div>

                    {/* Transaction List */}
                    <div className="max-h-96 overflow-y-auto" data-oid="a7oten1">
                        {filteredTransactions.length > 0 ? (
                            <div className="divide-y divide-gray-100" data-oid="g-oirs-">
                                {filteredTransactions.map((transaction) => (
                                    <div key={transaction.id} className="p-4" data-oid="3ady0nc">
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse"
                                            data-oid="qx4h_s1"
                                        >
                                            <div className="text-2xl" data-oid=".apttrv">
                                                {getTransactionIcon(transaction)}
                                            </div>
                                            <div className="flex-1" data-oid="ox1m25w">
                                                <h4
                                                    className="font-semibold text-gray-800 text-sm"
                                                    data-oid="4i4lu1q"
                                                >
                                                    {transaction.description}
                                                </h4>
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 mt-1"
                                                    data-oid="j7e_nxo"
                                                >
                                                    <span data-oid="o.6cftc">
                                                        {transaction.date}
                                                    </span>
                                                    <span data-oid="_2wt_7-">•</span>
                                                    <span
                                                        className={getStatusColor(
                                                            transaction.status,
                                                        )}
                                                        data-oid="hhqqy2."
                                                    >
                                                        {getStatusText(transaction.status)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right" data-oid="tzyb:nf">
                                                <p
                                                    className={`font-bold ${
                                                        transaction.type === 'credit'
                                                            ? 'text-green-600'
                                                            : 'text-red-600'
                                                    }`}
                                                    data-oid="skw0h0v"
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
                            <div className="p-8 text-center" data-oid="_x152a0">
                                <div className="text-4xl mb-4" data-oid="qbmoitb">
                                    📊
                                </div>
                                <p className="text-gray-500" data-oid="yuu07fe">
                                    لا توجد عمليات في هذا القسم
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Top Up Modal */}
            {showTopUpModal && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="gzr:.dm">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="oe0_0ey"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="isvr980">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid=".3wysbz"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="93ok-wx">
                                <h3 className="text-xl font-bold text-gray-800" data-oid=":kjzz5u">
                                    شحن المحفظة
                                </h3>
                                <button
                                    onClick={() => setShowTopUpModal(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="mdhmr1q"
                                >
                                    <span className="text-gray-600" data-oid=":t38wlz">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="rvm_0mm">
                                اختر المبلغ المناسب لك
                            </p>
                        </div>

                        {/* Top Up Options */}
                        <div
                            className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]"
                            data-oid=".jxn0a-"
                        >
                            <div className="space-y-3 mb-6" data-oid=".v61bf-">
                                {topUpOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSelectedTopUpAmount(option.amount)}
                                        className={`w-full p-4 rounded-xl border-2 transition-colors relative ${
                                            selectedTopUpAmount === option.amount
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 bg-white'
                                        }`}
                                        data-oid="m_i:af4"
                                    >
                                        {option.popular && (
                                            <div
                                                className="absolute -top-2 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid="34zrurp"
                                            >
                                                الأكثر شعبية
                                            </div>
                                        )}
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="qlv59at"
                                        >
                                            <div className="text-right" data-oid="hf6j3_8">
                                                <p
                                                    className="text-lg font-bold text-gray-800"
                                                    data-oid="h49so4m"
                                                >
                                                    {option.amount} ريال
                                                </p>
                                                {option.bonus && (
                                                    <p
                                                        className="text-sm text-green-600"
                                                        data-oid="wt5ppz_"
                                                    >
                                                        + {option.bonus} ريال مكافأة
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-2xl" data-oid=".c3:zuy">
                                                💳
                                            </div>
                                        </div>
                                        {option.bonus && (
                                            <div
                                                className="mt-2 text-xs text-gray-500"
                                                data-oid="50d7d:s"
                                            >
                                                المجموع: {option.amount + option.bonus} ريال
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Payment Methods */}
                            <div className="mb-6" data-oid="c:r_:g0">
                                <h4 className="font-semibold text-gray-800 mb-3" data-oid="9xm-:i2">
                                    طرق الدفع
                                </h4>
                                <div className="space-y-2" data-oid="rksta0v">
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="5tjumv5"
                                    >
                                        <div className="text-xl" data-oid="chmvd.i">
                                            💳
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid="qkvf.4:">
                                            بطاقة ائتمانية
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="_ejpqd_"
                                    >
                                        <div className="text-xl" data-oid="mqpba:p">
                                            📱
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid="4w5363v">
                                            محفظة رقمية
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="ofio0j0"
                                    >
                                        <div className="text-xl" data-oid="3.:.5vc">
                                            🏦
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid=":m8vins">
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
                                data-oid="ic13pwa"
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
                    data-oid="gsr4fvn"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="rkcjill"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="3w-3qng"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="mud.5c7">
                            جاري معالجة الدفع
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="9hbij:o">
                            يرجى الانتظار بينما نعالج عملية الدفع...
                        </p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Space */}
            <div className="h-20" data-oid="s5s9_5k"></div>
        </div>
    );
}
