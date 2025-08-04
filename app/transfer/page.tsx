'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Contact {
    id: number;
    name: string;
    phone: string;
    avatar?: string;
    lastTransfer?: string;
}

interface TransferHistory {
    id: number;
    recipientName: string;
    recipientPhone: string;
    amount: number;
    date: string;
    status: 'completed' | 'pending' | 'failed';
    reference: string;
}

export default function TransferPage() {
    const [currentBalance] = useState(245.5);
    const [transferAmount, setTransferAmount] = useState('');
    const [recipientPhone, setRecipientPhone] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [transferNote, setTransferNote] = useState('');
    const [isProcessingTransfer, setIsProcessingTransfer] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [activeTab, setActiveTab] = useState<'transfer' | 'history'>('transfer');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock recent contacts
    const recentContacts: Contact[] = [
        {
            id: 1,
            name: 'أحمد علي',
            phone: '+966501234567',
            lastTransfer: '2024-01-15',
        },
        {
            id: 2,
            name: 'فاطمة محمد',
            phone: '+966507654321',
            lastTransfer: '2024-01-12',
        },
        {
            id: 3,
            name: 'محمد حسن',
            phone: '+966509876543',
            lastTransfer: '2024-01-10',
        },
        {
            id: 4,
            name: 'سارة أحمد',
            phone: '+966502468135',
            lastTransfer: '2024-01-08',
        },
    ];

    // Mock transfer history
    const transferHistory: TransferHistory[] = [
        {
            id: 1,
            recipientName: 'أحمد علي',
            recipientPhone: '+966501234567',
            amount: 50,
            date: '2024-01-15',
            status: 'completed',
            reference: 'TXN001234',
        },
        {
            id: 2,
            recipientName: 'فاطمة محمد',
            recipientPhone: '+966507654321',
            amount: 75,
            date: '2024-01-12',
            status: 'completed',
            reference: 'TXN001235',
        },
        {
            id: 3,
            recipientName: 'محمد حسن',
            recipientPhone: '+966509876543',
            amount: 100,
            date: '2024-01-10',
            status: 'pending',
            reference: 'TXN001236',
        },
    ];

    const filteredContacts = recentContacts.filter(
        (contact) => contact.name.includes(searchQuery) || contact.phone.includes(searchQuery),
    );

    const handleQuickAmount = (amount: number) => {
        setTransferAmount(amount.toString());
    };

    const handleContactSelect = (contact: Contact) => {
        setRecipientPhone(contact.phone);
        setRecipientName(contact.name);
    };

    const handleTransferSubmit = () => {
        const amount = parseFloat(transferAmount);

        if (!recipientPhone || !transferAmount || amount <= 0) {
            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'error',
                    title: 'خطأ في البيانات',
                    message: 'يرجى التأكد من إدخال جميع البيانات المطلوبة',
                    duration: 4000,
                });
            }
            return;
        }

        if (amount > currentBalance) {
            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'error',
                    title: 'رصيد غير كافي',
                    message: 'المبلغ المطلوب تحويله أكبر من رصيدك الحالي',
                    duration: 4000,
                });
            }
            return;
        }

        setShowConfirmModal(true);
    };

    const confirmTransfer = async () => {
        setIsProcessingTransfer(true);
        setShowConfirmModal(false);

        // Simulate transfer processing
        setTimeout(() => {
            setIsProcessingTransfer(false);

            // Reset form
            setTransferAmount('');
            setRecipientPhone('');
            setRecipientName('');
            setTransferNote('');

            // Show success notification
            if (typeof window !== 'undefined' && (window as any).showNotification) {
                (window as any).showNotification({
                    type: 'success',
                    title: 'تم التحويل بنجاح!',
                    message: `تم تحويل ${transferAmount} ريال إلى ${recipientName || recipientPhone}`,
                    duration: 4000,
                });
            }
        }, 3000);
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
                return 'مكتمل';
            case 'pending':
                return 'قيد المعالجة';
            case 'failed':
                return 'فاشل';
            default:
                return 'غير معروف';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="sf3tgao">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="0k:hq.h"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="_-sj0bx">
                    <div className="flex items-center justify-between mb-6" data-oid="npzq5ce">
                        <Link
                            href="/wallet"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid=":-c4nb."
                        >
                            <span className="text-lg" data-oid="y63enzv">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="6t_oihs">
                            <h1 className="text-lg font-bold" data-oid="oh5p5cc">
                                تحويل الرصيد
                            </h1>
                            <p className="text-sm text-white/90" data-oid="nlvjx3-">
                                حول الأموال بسهولة
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="k6239gt"></div>
                    </div>

                    {/* Balance Display */}
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                        data-oid="qz-yq1o"
                    >
                        <p className="text-white/80 text-sm mb-1" data-oid="ow071dn">
                            رصيدك المتاح
                        </p>
                        <h2 className="text-2xl font-bold" data-oid="75gb_5g">
                            {currentBalance.toFixed(2)} ريال
                        </h2>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="-w-o_bj">
                <div className="bg-white rounded-2xl shadow-lg" data-oid="1cdm2zp">
                    <div className="flex border-b border-gray-100" data-oid="kyq3.yo">
                        <button
                            onClick={() => setActiveTab('transfer')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'transfer'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="fkuq9h_"
                        >
                            تحويل جديد
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'history'
                                    ? 'text-purple-600 border-b-2 border-purple-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="ru18ibg"
                        >
                            سجل التحويلات
                        </button>
                    </div>

                    {/* Transfer Tab */}
                    {activeTab === 'transfer' && (
                        <div className="p-6" data-oid="9sp3enj">
                            {/* Recipient Input */}
                            <div className="mb-6" data-oid="zlsydvh">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="w70lj29"
                                >
                                    رقم الهاتف أو اسم المستلم
                                </label>
                                <div className="relative" data-oid="i9xa97l">
                                    <input
                                        type="text"
                                        value={recipientPhone}
                                        onChange={(e) => setRecipientPhone(e.target.value)}
                                        placeholder="أدخل رقم الهاتف أو ابحث عن جهة اتصال"
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        data-oid="oetpvbr"
                                    />

                                    <div
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="t4vpl2k"
                                    >
                                        📱
                                    </div>
                                </div>
                                {recipientName && (
                                    <p className="text-sm text-green-600 mt-2" data-oid="2zc04um">
                                        ✓ {recipientName}
                                    </p>
                                )}
                            </div>

                            {/* Recent Contacts */}
                            {recipientPhone === '' && (
                                <div className="mb-6" data-oid="fv7su2v">
                                    <h3
                                        className="text-sm font-semibold text-gray-700 mb-3"
                                        data-oid="05ehi1q"
                                    >
                                        جهات الاتصال الأخيرة
                                    </h3>
                                    <div className="space-y-2" data-oid="oiq6jn_">
                                        {filteredContacts.slice(0, 3).map((contact) => (
                                            <button
                                                key={contact.id}
                                                onClick={() => handleContactSelect(contact)}
                                                className="w-full p-3 bg-gray-50 rounded-xl flex items-center space-x-3 space-x-reverse hover:bg-gray-100 transition-colors"
                                                data-oid="fz_hn__"
                                            >
                                                <div
                                                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                                                    data-oid="5bsx7-o"
                                                >
                                                    <span
                                                        className="text-blue-600 font-semibold"
                                                        data-oid="28ya..g"
                                                    >
                                                        {contact.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex-1 text-right"
                                                    data-oid="43yfkl2"
                                                >
                                                    <p
                                                        className="font-semibold text-gray-800 text-sm"
                                                        data-oid="h2ruj9t"
                                                    >
                                                        {contact.name}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="f8xjbq-"
                                                    >
                                                        {contact.phone}
                                                    </p>
                                                </div>
                                                <div className="text-gray-400" data-oid=".ba-z66">
                                                    ←
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Amount Input */}
                            <div className="mb-6" data-oid="d.yg231">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="ls30aqw"
                                >
                                    المبلغ
                                </label>
                                <div className="relative" data-oid="9nkoy3k">
                                    <input
                                        type="number"
                                        value={transferAmount}
                                        onChange={(e) => setTransferAmount(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl font-bold"
                                        data-oid=".ebn4b."
                                    />

                                    <div
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="9vg98q2"
                                    >
                                        ريال
                                    </div>
                                </div>
                            </div>

                            {/* Quick Amount Buttons */}
                            <div className="mb-6" data-oid="u8tfny6">
                                <p
                                    className="text-sm font-semibold text-gray-700 mb-3"
                                    data-oid="vk5r..z"
                                >
                                    مبالغ سريعة
                                </p>
                                <div className="grid grid-cols-4 gap-2" data-oid="t92edao">
                                    {[25, 50, 100, 200].map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => handleQuickAmount(amount)}
                                            className="p-3 bg-gray-100 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                            data-oid="q48qxm9"
                                        >
                                            {amount}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Transfer Note */}
                            <div className="mb-6" data-oid="d3.5d6h">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="abc7bp3"
                                >
                                    ملاحظة (اختيارية)
                                </label>
                                <textarea
                                    value={transferNote}
                                    onChange={(e) => setTransferNote(e.target.value)}
                                    placeholder="أضف ملاحظة للتحويل..."
                                    rows={3}
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    data-oid="gj7qj2z"
                                />
                            </div>

                            {/* Transfer Button */}
                            <button
                                onClick={handleTransferSubmit}
                                disabled={
                                    !recipientPhone ||
                                    !transferAmount ||
                                    parseFloat(transferAmount) <= 0
                                }
                                className={`w-full py-4 rounded-2xl font-semibold ${
                                    recipientPhone &&
                                    transferAmount &&
                                    parseFloat(transferAmount) > 0
                                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                } transition-colors`}
                                data-oid="nwz_kui"
                            >
                                تحويل الرصيد
                            </button>
                        </div>
                    )}

                    {/* History Tab */}
                    {activeTab === 'history' && (
                        <div className="max-h-96 overflow-y-auto" data-oid="s_d3qpr">
                            {transferHistory.length > 0 ? (
                                <div className="divide-y divide-gray-100" data-oid="dvpvpwl">
                                    {transferHistory.map((transfer) => (
                                        <div key={transfer.id} className="p-4" data-oid="wvlmhr9">
                                            <div
                                                className="flex items-center space-x-3 space-x-reverse"
                                                data-oid="7hh1y72"
                                            >
                                                <div
                                                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"
                                                    data-oid="xs27sq8"
                                                >
                                                    <span
                                                        className="text-purple-600"
                                                        data-oid="jgpsej8"
                                                    >
                                                        💸
                                                    </span>
                                                </div>
                                                <div className="flex-1" data-oid="jm.lafb">
                                                    <h4
                                                        className="font-semibold text-gray-800 text-sm"
                                                        data-oid="t_b0e_0"
                                                    >
                                                        تحويل إلى {transfer.recipientName}
                                                    </h4>
                                                    <p
                                                        className="text-xs text-gray-500 mt-1"
                                                        data-oid="ai7urdd"
                                                    >
                                                        {transfer.recipientPhone}
                                                    </p>
                                                    <div
                                                        className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 mt-1"
                                                        data-oid="vh8f1_w"
                                                    >
                                                        <span data-oid="25-ys7.">
                                                            {transfer.date}
                                                        </span>
                                                        <span data-oid="03rhjrw">•</span>
                                                        <span
                                                            className={getStatusColor(
                                                                transfer.status,
                                                            )}
                                                            data-oid="7_bd0uo"
                                                        >
                                                            {getStatusText(transfer.status)}
                                                        </span>
                                                        <span data-oid="e4eptb7">•</span>
                                                        <span data-oid="tcepsx0">
                                                            {transfer.reference}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right" data-oid="xxp73z:">
                                                    <p
                                                        className="font-bold text-red-600"
                                                        data-oid="7azf0_p"
                                                    >
                                                        -{transfer.amount} ريال
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center" data-oid="jw5qn6o">
                                    <div className="text-4xl mb-4" data-oid="iirym4j">
                                        💸
                                    </div>
                                    <p className="text-gray-500" data-oid="1-428vk">
                                        لا توجد تحويلات سابقة
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    data-oid="e9zhn48"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-6"
                        data-oid="zjhnf5k"
                    >
                        <div className="text-center mb-6" data-oid="nlbomyk">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                data-oid="c.mx1_e"
                            >
                                <span className="text-2xl" data-oid="g24-gqp">
                                    💸
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid=":zgbpan">
                                تأكيد التحويل
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="cv1tuco">
                                يرجى مراجعة تفاصيل التحويل قبل التأكيد
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-4 mb-6" data-oid="4sg:v4m">
                            <div className="space-y-3" data-oid="zt2wzf3">
                                <div className="flex justify-between" data-oid="-z_3y38">
                                    <span className="text-gray-600" data-oid="duugkn.">
                                        المستلم:
                                    </span>
                                    <span className="font-semibold" data-oid="iee-2p0">
                                        {recipientName || recipientPhone}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="ngsoyn7">
                                    <span className="text-gray-600" data-oid="g_bo0cb">
                                        رقم الهاتف:
                                    </span>
                                    <span className="font-semibold" data-oid="r:14x79">
                                        {recipientPhone}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="01_t412">
                                    <span className="text-gray-600" data-oid="70i:91d">
                                        المبلغ:
                                    </span>
                                    <span className="font-bold text-blue-600" data-oid=".enq1by">
                                        {transferAmount} ريال
                                    </span>
                                </div>
                                {transferNote && (
                                    <div className="flex justify-between" data-oid="rgt0t8p">
                                        <span className="text-gray-600" data-oid="y5h7wbt">
                                            الملاحظة:
                                        </span>
                                        <span className="font-semibold" data-oid="3mw26qo">
                                            {transferNote}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-3 space-x-reverse" data-oid="h36irz6">
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold"
                                data-oid="9peu-l1"
                            >
                                إلغاء
                            </button>
                            <button
                                onClick={confirmTransfer}
                                className="flex-1 py-3 bg-blue-500 text-white rounded-xl font-semibold"
                                data-oid="vt3bt9y"
                            >
                                تأكيد التحويل
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Processing Modal */}
            {isProcessingTransfer && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    data-oid="x0kp6.y"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="zd264gp"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="vnxvzox"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="h-6bjti">
                            جاري معالجة التحويل
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="pxqcfib">
                            يرجى الانتظار بينما نعالج عملية التحويل...
                        </p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Space */}
            <div className="h-20" data-oid="xovtsq1"></div>
        </div>
    );
}
