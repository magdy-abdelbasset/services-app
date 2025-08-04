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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="8yeu.:6">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                data-oid="9vq:yfe"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="fbqc.my">
                    <div className="flex items-center justify-between mb-6" data-oid="qrsvabu">
                        <Link
                            href="/wallet"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                            data-oid="bat3aw4"
                        >
                            <span className="text-lg" data-oid="it_rx0r">
                                ←
                            </span>
                        </Link>
                        <div className="text-center" data-oid="p1voci0">
                            <h1 className="text-lg font-bold" data-oid="nzxxoqn">
                                تحويل الرصيد
                            </h1>
                            <p className="text-sm text-white/90" data-oid="38t9_mi">
                                حول الأموال بسهولة
                            </p>
                        </div>
                        <div className="w-10 h-10" data-oid="pxpsmiy"></div>
                    </div>

                    {/* Balance Display */}
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                        data-oid="dq7af_t"
                    >
                        <p className="text-white/80 text-sm mb-1" data-oid=":hb725c">
                            رصيدك المتاح
                        </p>
                        <h2 className="text-2xl font-bold" data-oid="m50h9de">
                            {currentBalance.toFixed(2)} ريال
                        </h2>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="n8b3opx">
                <div className="bg-white rounded-2xl shadow-lg" data-oid="ldwp1dl">
                    <div className="flex border-b border-gray-100" data-oid="f8a5ow4">
                        <button
                            onClick={() => setActiveTab('transfer')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'transfer'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500'
                            }`}
                            data-oid="h7e7ul7"
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
                            data-oid="3ujx5fs"
                        >
                            سجل التحويلات
                        </button>
                    </div>

                    {/* Transfer Tab */}
                    {activeTab === 'transfer' && (
                        <div className="p-6" data-oid="byv_48e">
                            {/* Recipient Input */}
                            <div className="mb-6" data-oid="5wbw1o.">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="vjzk:7l"
                                >
                                    رقم الهاتف أو اسم المستلم
                                </label>
                                <div className="relative" data-oid="t1vciz1">
                                    <input
                                        type="text"
                                        value={recipientPhone}
                                        onChange={(e) => setRecipientPhone(e.target.value)}
                                        placeholder="أدخل رقم الهاتف أو ابحث عن جهة اتصال"
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        data-oid="c0xfvog"
                                    />

                                    <div
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="j0es-s:"
                                    >
                                        📱
                                    </div>
                                </div>
                                {recipientName && (
                                    <p className="text-sm text-green-600 mt-2" data-oid="il5u:y4">
                                        ✓ {recipientName}
                                    </p>
                                )}
                            </div>

                            {/* Recent Contacts */}
                            {recipientPhone === '' && (
                                <div className="mb-6" data-oid="tg8n3ro">
                                    <h3
                                        className="text-sm font-semibold text-gray-700 mb-3"
                                        data-oid="9pe3i0y"
                                    >
                                        جهات الاتصال الأخيرة
                                    </h3>
                                    <div className="space-y-2" data-oid="sgeobbe">
                                        {filteredContacts.slice(0, 3).map((contact) => (
                                            <button
                                                key={contact.id}
                                                onClick={() => handleContactSelect(contact)}
                                                className="w-full p-3 bg-gray-50 rounded-xl flex items-center space-x-3 space-x-reverse hover:bg-gray-100 transition-colors"
                                                data-oid="gt56b-h"
                                            >
                                                <div
                                                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                                                    data-oid="f:dn02u"
                                                >
                                                    <span
                                                        className="text-blue-600 font-semibold"
                                                        data-oid="a7g727c"
                                                    >
                                                        {contact.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex-1 text-right"
                                                    data-oid="je9ube-"
                                                >
                                                    <p
                                                        className="font-semibold text-gray-800 text-sm"
                                                        data-oid="5bsw4lt"
                                                    >
                                                        {contact.name}
                                                    </p>
                                                    <p
                                                        className="text-xs text-gray-500"
                                                        data-oid="0xvhjfj"
                                                    >
                                                        {contact.phone}
                                                    </p>
                                                </div>
                                                <div className="text-gray-400" data-oid="d78igf1">
                                                    ←
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Amount Input */}
                            <div className="mb-6" data-oid="efyfmtj">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="y.hwjrl"
                                >
                                    المبلغ
                                </label>
                                <div className="relative" data-oid="i.y-rrb">
                                    <input
                                        type="number"
                                        value={transferAmount}
                                        onChange={(e) => setTransferAmount(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl font-bold"
                                        data-oid="zp2lc9j"
                                    />

                                    <div
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        data-oid="e4-fybp"
                                    >
                                        ريال
                                    </div>
                                </div>
                            </div>

                            {/* Quick Amount Buttons */}
                            <div className="mb-6" data-oid="1.cvcmj">
                                <p
                                    className="text-sm font-semibold text-gray-700 mb-3"
                                    data-oid="r.2k68_"
                                >
                                    مبالغ سريعة
                                </p>
                                <div className="grid grid-cols-4 gap-2" data-oid="0f7few5">
                                    {[25, 50, 100, 200].map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => handleQuickAmount(amount)}
                                            className="p-3 bg-gray-100 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                            data-oid="j:b7.c9"
                                        >
                                            {amount}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Transfer Note */}
                            <div className="mb-6" data-oid="7orae6c">
                                <label
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                    data-oid="pbn-z-m"
                                >
                                    ملاحظة (اختيارية)
                                </label>
                                <textarea
                                    value={transferNote}
                                    onChange={(e) => setTransferNote(e.target.value)}
                                    placeholder="أضف ملاحظة للتحويل..."
                                    rows={3}
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    data-oid="b6aomey"
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
                                data-oid="qds2:91"
                            >
                                تحويل الرصيد
                            </button>
                        </div>
                    )}

                    {/* History Tab */}
                    {activeTab === 'history' && (
                        <div className="max-h-96 overflow-y-auto" data-oid="tpzlipg">
                            {transferHistory.length > 0 ? (
                                <div className="divide-y divide-gray-100" data-oid="melqrmf">
                                    {transferHistory.map((transfer) => (
                                        <div key={transfer.id} className="p-4" data-oid="kfmygyo">
                                            <div
                                                className="flex items-center space-x-3 space-x-reverse"
                                                data-oid="0xfi4fc"
                                            >
                                                <div
                                                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"
                                                    data-oid="tre7kap"
                                                >
                                                    <span
                                                        className="text-purple-600"
                                                        data-oid="g_zj5m2"
                                                    >
                                                        💸
                                                    </span>
                                                </div>
                                                <div className="flex-1" data-oid="t_q7fyz">
                                                    <h4
                                                        className="font-semibold text-gray-800 text-sm"
                                                        data-oid="9e9j0w6"
                                                    >
                                                        تحويل إلى {transfer.recipientName}
                                                    </h4>
                                                    <p
                                                        className="text-xs text-gray-500 mt-1"
                                                        data-oid="h7b8ws1"
                                                    >
                                                        {transfer.recipientPhone}
                                                    </p>
                                                    <div
                                                        className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 mt-1"
                                                        data-oid="nnjg66b"
                                                    >
                                                        <span data-oid="v0e_e6q">
                                                            {transfer.date}
                                                        </span>
                                                        <span data-oid="95tbc6f">•</span>
                                                        <span
                                                            className={getStatusColor(
                                                                transfer.status,
                                                            )}
                                                            data-oid="ersx0eb"
                                                        >
                                                            {getStatusText(transfer.status)}
                                                        </span>
                                                        <span data-oid="p96zzbu">•</span>
                                                        <span data-oid="lln1.3g">
                                                            {transfer.reference}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right" data-oid="k56.1y:">
                                                    <p
                                                        className="font-bold text-red-600"
                                                        data-oid="7o14xuj"
                                                    >
                                                        -{transfer.amount} ريال
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center" data-oid="webjnn7">
                                    <div className="text-4xl mb-4" data-oid="7vwd1dt">
                                        💸
                                    </div>
                                    <p className="text-gray-500" data-oid="w0y4ry0">
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
                    data-oid="_l5bx1v"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-6"
                        data-oid="_j6:_vq"
                    >
                        <div className="text-center mb-6" data-oid="bu-r:h1">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                data-oid="aaxvgkf"
                            >
                                <span className="text-2xl" data-oid="ka:_yj9">
                                    💸
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="bg4h.p4">
                                تأكيد التحويل
                            </h3>
                            <p className="text-gray-600 text-sm" data-oid="l3npcur">
                                يرجى مراجعة تفاصيل التحويل قبل التأكيد
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-4 mb-6" data-oid="z417s28">
                            <div className="space-y-3" data-oid="yo8ok1s">
                                <div className="flex justify-between" data-oid="z:cyvxg">
                                    <span className="text-gray-600" data-oid="0h27r_3">
                                        المستلم:
                                    </span>
                                    <span className="font-semibold" data-oid="1s59_k-">
                                        {recipientName || recipientPhone}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="szzuusr">
                                    <span className="text-gray-600" data-oid="mjo3hgy">
                                        رقم الهاتف:
                                    </span>
                                    <span className="font-semibold" data-oid="_-ldqv1">
                                        {recipientPhone}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid=".uuiq46">
                                    <span className="text-gray-600" data-oid="fj2xxc8">
                                        المبلغ:
                                    </span>
                                    <span className="font-bold text-blue-600" data-oid="5a7gmvi">
                                        {transferAmount} ريال
                                    </span>
                                </div>
                                {transferNote && (
                                    <div className="flex justify-between" data-oid="fjxv2mb">
                                        <span className="text-gray-600" data-oid=":9ssf4m">
                                            الملاحظة:
                                        </span>
                                        <span className="font-semibold" data-oid="a0qkrq7">
                                            {transferNote}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-3 space-x-reverse" data-oid="7fjmjx0">
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold"
                                data-oid=":f0ss2f"
                            >
                                إلغاء
                            </button>
                            <button
                                onClick={confirmTransfer}
                                className="flex-1 py-3 bg-blue-500 text-white rounded-xl font-semibold"
                                data-oid="xicr2et"
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
                    data-oid="cw-k0xu"
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center"
                        data-oid="uh8cnqw"
                    >
                        <div
                            className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
                            data-oid="e0hcews"
                        ></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2" data-oid="c42-n8c">
                            جاري معالجة التحويل
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="z4.j_nl">
                            يرجى الانتظار بينما نعالج عملية التحويل...
                        </p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Space */}
            <div className="h-20" data-oid="51a:_wn"></div>
        </div>
    );
}
