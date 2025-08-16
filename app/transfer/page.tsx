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
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <Link
                            href="/wallet"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            <span className="text-lg">←</span>
                        </Link>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">تحويل الرصيد</h1>
                            <p className="text-sm text-white/90">حول الأموال بسهولة</p>
                        </div>
                        <div className="w-10 h-10"></div>
                    </div>

                    {/* Balance Display */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                        <p className="text-white/80 text-sm mb-1">رصيدك المتاح</p>
                        <h2 className="text-2xl font-bold">{currentBalance.toFixed(2)} ريال</h2>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg">
                    <div className="flex border-b border-gray-100">
                        <button
                            onClick={() => setActiveTab('transfer')}
                            className={`flex-1 py-4 text-sm font-semibold ${
                                activeTab === 'transfer'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500'
                            }`}
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
                        >
                            سجل التحويلات
                        </button>
                    </div>

                    {/* Transfer Tab */}
                    {activeTab === 'transfer' && (
                        <div className="p-6">
                            {/* Recipient Input */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    رقم الهاتف أو اسم المستلم
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={recipientPhone}
                                        onChange={(e) => setRecipientPhone(e.target.value)}
                                        placeholder="أدخل رقم الهاتف أو ابحث عن جهة اتصال"
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />

                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        📱
                                    </div>
                                </div>
                                {recipientName && (
                                    <p className="text-sm text-green-600 mt-2">✓ {recipientName}</p>
                                )}
                            </div>

                            {/* Recent Contacts */}
                            {recipientPhone === '' && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                                        جهات الاتصال الأخيرة
                                    </h3>
                                    <div className="space-y-2">
                                        {filteredContacts.slice(0, 3).map((contact) => (
                                            <button
                                                key={contact.id}
                                                onClick={() => handleContactSelect(contact)}
                                                className="w-full p-3 bg-gray-50 rounded-xl flex items-center space-x-3 space-x-reverse hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <span className="text-blue-600 font-semibold">
                                                        {contact.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div className="flex-1 text-right">
                                                    <p className="font-semibold text-gray-800 text-sm">
                                                        {contact.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {contact.phone}
                                                    </p>
                                                </div>
                                                <div className="text-gray-400">←</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Amount Input */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    المبلغ
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={transferAmount}
                                        onChange={(e) => setTransferAmount(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl font-bold"
                                    />

                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        ريال
                                    </div>
                                </div>
                            </div>

                            {/* Quick Amount Buttons */}
                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-700 mb-3">
                                    مبالغ سريعة
                                </p>
                                <div className="grid grid-cols-4 gap-2">
                                    {[25, 50, 100, 200].map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => handleQuickAmount(amount)}
                                            className="p-3 bg-gray-100 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                        >
                                            {amount}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Transfer Note */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    ملاحظة (اختيارية)
                                </label>
                                <textarea
                                    value={transferNote}
                                    onChange={(e) => setTransferNote(e.target.value)}
                                    placeholder="أضف ملاحظة للتحويل..."
                                    rows={3}
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
                            >
                                تحويل الرصيد
                            </button>
                        </div>
                    )}

                    {/* History Tab */}
                    {activeTab === 'history' && (
                        <div className="max-h-96 overflow-y-auto">
                            {transferHistory.length > 0 ? (
                                <div className="divide-y divide-gray-100">
                                    {transferHistory.map((transfer) => (
                                        <div key={transfer.id} className="p-4">
                                            <div className="flex items-center space-x-3 space-x-reverse">
                                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                    <span className="text-purple-600">💸</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-800 text-sm">
                                                        تحويل إلى {transfer.recipientName}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {transfer.recipientPhone}
                                                    </p>
                                                    <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 mt-1">
                                                        <span>{transfer.date}</span>
                                                        <span>•</span>
                                                        <span
                                                            className={getStatusColor(
                                                                transfer.status,
                                                            )}
                                                        >
                                                            {getStatusText(transfer.status)}
                                                        </span>
                                                        <span>•</span>
                                                        <span>{transfer.reference}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-red-600">
                                                        -{transfer.amount} ريال
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center">
                                    <div className="text-4xl mb-4">💸</div>
                                    <p className="text-gray-500">لا توجد تحويلات سابقة</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-sm mx-4 rounded-3xl p-6">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💸</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">تأكيد التحويل</h3>
                            <p className="text-gray-600 text-sm">
                                يرجى مراجعة تفاصيل التحويل قبل التأكيد
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">المستلم:</span>
                                    <span className="font-semibold">
                                        {recipientName || recipientPhone}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">رقم الهاتف:</span>
                                    <span className="font-semibold">{recipientPhone}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">المبلغ:</span>
                                    <span className="font-bold text-blue-600">
                                        {transferAmount} ريال
                                    </span>
                                </div>
                                {transferNote && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">الملاحظة:</span>
                                        <span className="font-semibold">{transferNote}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-3 space-x-reverse">
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold"
                            >
                                إلغاء
                            </button>
                            <button
                                onClick={confirmTransfer}
                                className="flex-1 py-3 bg-blue-500 text-white rounded-xl font-semibold"
                            >
                                تأكيد التحويل
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Processing Modal */}
            {isProcessingTransfer && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-sm mx-4 rounded-3xl p-8 text-center">
                        <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"></div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            جاري معالجة التحويل
                        </h3>
                        <p className="text-gray-600 text-sm">
                            يرجى الانتظار بينما نعالج عملية التحويل...
                        </p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Space */}
            <div className="h-20"></div>
        </div>
    );
}
