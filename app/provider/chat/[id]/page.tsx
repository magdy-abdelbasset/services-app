'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProviderChat() {
    const params = useParams();
    const chatId = params.id;

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'customer',
            text: 'السلام عليكم، أحتاج خدمة تنظيف المنزل',
            time: '10:30 ص',
            type: 'text',
        },
        {
            id: 2,
            sender: 'provider',
            text: 'وعليكم السلام، أهلاً وسهلاً. يمكنني تقديم الخدمة لك',
            time: '10:32 ص',
            type: 'text',
        },
        {
            id: 3,
            sender: 'customer',
            text: 'كم المدة المتوقعة للتنظيف؟',
            time: '10:35 ص',
            type: 'text',
        },
        {
            id: 4,
            sender: 'provider',
            text: 'حوالي ساعتين لشقة من غرفتين وصالة',
            time: '10:36 ص',
            type: 'text',
        },
        {
            id: 5,
            sender: 'customer',
            text: 'ممتاز، متى يمكنك القدوم؟',
            time: '10:40 ص',
            type: 'text',
        },
    ]);

    // Sample customer data
    const customer = {
        name: 'سارة أحمد',
        phone: '+966501234567',
        location: 'الرياض - حي النرجس',
        service: 'تنظيف المنزل',
        price: '45 ريال',
        status: 'active',
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                sender: 'provider',
                text: message,
                time: new Date().toLocaleTimeString('ar-SA', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                }),
                type: 'text',
            };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    const quickReplies = [
        'في الطريق إليك',
        'سأصل خلال 15 دقيقة',
        'تم إنجاز العمل',
        'شكراً لك',
        'هل تحتاج شيء آخر؟',
    ];

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white sticky top-0 z-50">
                <div className="max-w-sm mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/provider/messages" className="text-white">
                            <span className="text-2xl">←</span>
                        </Link>

                        <div className="flex items-center space-x-3 space-x-reverse flex-1 mx-4">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-lg">👩</span>
                            </div>
                            <div className="flex-1">
                                <h1 className="font-semibold">{customer.name}</h1>
                                <p className="text-xs opacity-90">{customer.service}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 space-x-reverse">
                            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-lg">📞</span>
                            </button>
                            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-lg">ℹ️</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Info Banner */}
            <div className="max-w-sm mx-auto px-4 py-3">
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-blue-800">{customer.service}</h3>
                            <p className="text-sm text-blue-600">📍 {customer.location}</p>
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-bold text-green-600">{customer.price}</p>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                                نشط
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="max-w-sm mx-auto px-4 pb-32">
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'provider' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs px-4 py-3 rounded-2xl ${
                                    msg.sender === 'provider'
                                        ? 'bg-green-500 text-white rounded-br-md'
                                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                                }`}
                            >
                                <p className="text-sm">{msg.text}</p>
                                <p
                                    className={`text-xs mt-1 ${
                                        msg.sender === 'provider'
                                            ? 'text-green-100'
                                            : 'text-gray-500'
                                    }`}
                                >
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Replies */}
                <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-3">ردود سريعة:</p>
                    <div className="flex flex-wrap gap-2">
                        {quickReplies.map((reply, index) => (
                            <button
                                key={index}
                                onClick={() => setMessage(reply)}
                                className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-gray-50"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Message Input */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <div className="max-w-sm mx-auto">
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                            <span className="text-lg">📎</span>
                        </button>

                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="اكتب رسالتك..."
                                className="w-full bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                        </div>

                        <button
                            onClick={handleSendMessage}
                            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                        >
                            <span className="text-lg">📤</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
