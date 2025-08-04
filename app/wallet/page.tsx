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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="84d98.0">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="s:h12q5"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid=".ni158b">
                    <div className="flex items-center justify-between mb-6" data-oid="n:24tx7">
                        <Link
                            href="/"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="i89w27:"
                        >
                            <span className="text-lg" data-oid="l27ha22">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="0iu0ul2">
                            <h1 className="text-lg font-bold" data-oid="r47cssw">
                                محفظتي
                            </h1>
                            <p className="text-sm text-white/90" data-oid="37pq-wq">
                                إدارة رصيدك
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="w1wkp90"></div>
                    </div>

                    {/* Balance Card */}
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                        data-oid="wez:haw"
                    >
                        <p className="text-white/80 text-sm mb-2" data-oid="viu0tb3">
                            الرصيد الحالي
                        </p>
                        <h2 className="text-3xl font-bold mb-4" data-oid="l8h8:mt">
                            {currentBalance.toFixed(2)} ريال
                        </h2>
                        <div className="flex space-x-3 space-x-reverse" data-oid="9x_c5hz">
                            <button
                                onClick={() => setShowTopUpModal(true)}
                                className="flex-1 bg-white text-green-600 py-3 rounded-xl font-semibold"
                                data-oid="x1jw.rc"
                            >
                                شحن المحفظة
                            </button>
                            <Link
                                href="/transfer"
                                className="flex-1 bg-white/20 text-white py-3 rounded-xl font-semibold text-center"
                                data-oid="uk0a_nw"
                            >
                                تحويل رصيد
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="wwewd:f">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-6" data-oid="wh0rxv1">
                    <div className="grid grid-cols-3 gap-4 text-center" data-oid="sh.3k:1">
                        <div data-oid="z.xbudv">
                            <p className="text-2xl font-bold text-green-600" data-oid="p3jty2l">
                                {transactions.filter((t) => t.type === 'credit').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="uf1hkfr">
                                عمليات إيداع
                            </p>
                        </div>
                        <div data-oid="xo_u.m9">
                            <p className="text-2xl font-bold text-red-600" data-oid="7a1b7g.">
                                {transactions.filter((t) => t.type === 'debit').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="1p4hwtr">
                                عمليات سحب
                            </p>
                        </div>
                        <div data-oid="_na..mj">
                            <p className="text-2xl font-bold text-blue-600" data-oid="1xlyebz">
                                {transactions.filter((t) => t.status === 'pending').length}
                            </p>
                            <p className="text-xs text-gray-500" data-oid="b7nwt75">
                                قيد المعالجة
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction History */}
            <div className="max-w-sm mx-auto px-4 pb-6" data-oid="48o4p4d">
                <div
                    className="bg-white rounded-2xl shadow-sm border border-gray-100"
                    data-oid="0mnb210"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-gray-100" data-oid="wk.:-jt">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'all'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="1q7a9:w"
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
                            data-oid="3hzuv8k"
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
                            data-oid="5udi6uf"
                        >
                            المدفوعات
                        </button>
                    </div>

                    {/* Transaction List */}
                    <div className="max-h-96 overflow-y-auto" data-oid="xlc1_ev">
                        {filteredTransactions.length > 0 ? (
                            <div className="divide-y divide-gray-100" data-oid="j9jlz9b">
                                {filteredTransactions.map((transaction) => (
                                    <div key={transaction.id} className="p-4" data-oid="eu4iyyr">
                                        <div
                                            className="flex items-center space-x-3 space-x-reverse"
                                            data-oid="h644y:u"
                                        >
                                            <div className="text-2xl" data-oid="-m.uhsm">
                                                {getTransactionIcon(transaction)}
                                            </div>
                                            <div className="flex-1" data-oid="unas9vy">
                                                <h4
                                                    className="font-semibold text-gray-800 text-sm"
                                                    data-oid="-05prlp"
                                                >
                                                    {transaction.description}
                                                </h4>
                                                <div
                                                    className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 mt-1"
                                                    data-oid="rhbk2ww"
                                                >
                                                    <span data-oid="b1j-vv9">
                                                        {transaction.date}
                                                    </span>
                                                    <span data-oid="65cwmp1">•</span>
                                                    <span
                                                        className={getStatusColor(
                                                            transaction.status,
                                                        )}
                                                        data-oid="3dbeniu"
                                                    >
                                                        {getStatusText(transaction.status)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right" data-oid="d-twgxc">
                                                <p
                                                    className={`font-bold ${
                                                        transaction.type === 'credit'
                                                            ? 'text-green-600'
                                                            : 'text-red-600'
                                                    }`}
                                                    data-oid="wyyliga"
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
                            <div className="p-8 text-center" data-oid="j2jfhon">
                                <div className="text-4xl mb-4" data-oid="w9jqfun">
                                    📊
                                </div>
                                <p className="text-gray-500" data-oid="ndghvi:">
                                    لا توجد عمليات في هذا القسم
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Top Up Modal */}
            {showTopUpModal && (
                <div className="fixed inset-0 bg-black/50 flex items-end z-50" data-oid="musrpl5">
                    <div
                        className="bg-white w-full max-w-sm mx-auto rounded-t-3xl max-h-[90vh] overflow-hidden"
                        data-oid="8h7-39c"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200" data-oid="-vztz0h">
                            <div
                                className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"
                                data-oid="4qpj3gx"
                            ></div>
                            <div className="flex items-center justify-between" data-oid="zra-rvq">
                                <h3 className="text-xl font-bold text-gray-800" data-oid="c37gm83">
                                    شحن المحفظة
                                </h3>
                                <button
                                    onClick={() => setShowTopUpModal(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                    data-oid="snt_2-m"
                                >
                                    <span className="text-gray-600" data-oid="oikuvru">
                                        ✕
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-2" data-oid="1cy.h:o">
                                اختر المبلغ المناسب لك
                            </p>
                        </div>

                        {/* Top Up Options */}
                        <div
                            className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]"
                            data-oid="fjo9duy"
                        >
                            <div className="space-y-3 mb-6" data-oid="8b5aby:">
                                {topUpOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSelectedTopUpAmount(option.amount)}
                                        className={`w-full p-4 rounded-xl border-2 transition-colors relative ${
                                            selectedTopUpAmount === option.amount
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 bg-white'
                                        }`}
                                        data-oid="lhcev9y"
                                    >
                                        {option.popular && (
                                            <div
                                                className="absolute -top-2 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full"
                                                data-oid="-kdm66z"
                                            >
                                                الأكثر شعبية
                                            </div>
                                        )}
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="2owltps"
                                        >
                                            <div className="text-right" data-oid="g12okvf">
                                                <p
                                                    className="text-lg font-bold text-gray-800"
                                                    data-oid="g.:t_x6"
                                                >
                                                    {option.amount} ريال
                                                </p>
                                                {option.bonus && (
                                                    <p
                                                        className="text-sm text-green-600"
                                                        data-oid="0-:e67j"
                                                    >
                                                        + {option.bonus} ريال مكافأة
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-2xl" data-oid=".0q:az-">
                                                💳
                                            </div>
                                        </div>
                                        {option.bonus && (
                                            <div
                                                className="mt-2 text-xs text-gray-500"
                                                data-oid="k.6bb.8"
                                            >
                                                المجموع: {option.amount + option.bonus} ريال
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Payment Methods */}
                            <div className="mb-6" data-oid="1e__:iv">
                                <h4 className="font-semibold text-gray-800 mb-3" data-oid=":41n.c4">
                                    طرق الدفع
                                </h4>
                                <div className="space-y-2" data-oid="i:q:48m">
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="ah.6xc3"
                                    >
                                        <div className="text-xl" data-oid="b2zuc0k">
                                            💳
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid="v_884j2">
                                            بطاقة ائتمانية
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid=":00o4ek"
                                    >
                                        <div className="text-xl" data-oid="ixsvsp1">
                                            📱
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid=".2b76kr">
                                            محفظة رقمية
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-xl"
                                        data-oid="ymo:of1"
                                    >
                                        <div className="text-xl" data-oid="a3stvh.">
                                            🏦
                                        </div>
                                        <span className="text-sm text-gray-700" data-oid="9hom75n">
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
                                data-oid="tq:j80b"
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
                    data-oid="rbf4gdf"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="y::6csh"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="_.wxqwj"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="d9:.hrl">
                            جاري معالجة الدفع
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="364rjn9">
                            يرجى الانتظار بينما نعالج عملية الدفع...
                        </p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Space */}
            <div className="h-20" data-oid="52:dz4o"></div>
        </div>
    );
}
