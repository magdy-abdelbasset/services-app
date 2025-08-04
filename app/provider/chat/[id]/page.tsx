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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="dbxnwyn">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white sticky top-0 z-50"
                data-oid="xtwjwfc"
            >
                <div className="max-w-sm mx-auto px-4 py-4" data-oid="7g4mp71">
                    <div className="flex items-center justify-between" data-oid="__9-.1o">
                        <Link href="/provider/messages" className="text-white" data-oid="cl7cl1s">
                            <span className="text-2xl" data-oid="iq54i7m">
                                ←
                            </span>
                        </Link>

                        <div
                            className="flex items-center space-x-3 space-x-reverse flex-1 mx-4"
                            data-oid=".itu5sj"
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="wng-2qd"
                            >
                                <span className="text-lg" data-oid="cl33ynn">
                                    👩
                                </span>
                            </div>
                            <div className="flex-1" data-oid="30k4.ef">
                                <h1 className="font-semibold" data-oid="8ivdqii">
                                    {customer.name}
                                </h1>
                                <p className="text-xs opacity-90" data-oid="eq4:upu">
                                    {customer.service}
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex items-center space-x-2 space-x-reverse"
                            data-oid="8lm1hf9"
                        >
                            <button
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="yy:ydwo"
                            >
                                <span className="text-lg" data-oid="hx_o22o">
                                    📞
                                </span>
                            </button>
                            <button
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="i:55ca8"
                            >
                                <span className="text-lg" data-oid="etv6w_v">
                                    ℹ️
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Info Banner */}
            <div className="max-w-sm mx-auto px-4 py-3" data-oid="rm:hrjc">
                <div
                    className="bg-blue-50 rounded-2xl p-4 border border-blue-100"
                    data-oid="ebyia_x"
                >
                    <div className="flex items-center justify-between" data-oid="t2yl2i0">
                        <div data-oid="8r-xclc">
                            <h3 className="font-semibold text-blue-800" data-oid="e7jvs96">
                                {customer.service}
                            </h3>
                            <p className="text-sm text-blue-600" data-oid="3tgu898">
                                📍 {customer.location}
                            </p>
                        </div>
                        <div className="text-left" data-oid="tvhwab1">
                            <p className="text-lg font-bold text-green-600" data-oid="9-0g.g4">
                                {customer.price}
                            </p>
                            <span
                                className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full"
                                data-oid="7fvfm49"
                            >
                                نشط
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="max-w-sm mx-auto px-4 pb-32" data-oid="cguhr7c">
                <div className="space-y-4" data-oid="ehn-:0a">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'provider' ? 'justify-end' : 'justify-start'}`}
                            data-oid="zf4ee-y"
                        >
                            <div
                                className={`max-w-xs px-4 py-3 rounded-2xl ${
                                    msg.sender === 'provider'
                                        ? 'bg-green-500 text-white rounded-br-md'
                                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                                }`}
                                data-oid="xupf8n2"
                            >
                                <p className="text-sm" data-oid="5m.7izd">
                                    {msg.text}
                                </p>
                                <p
                                    className={`text-xs mt-1 ${
                                        msg.sender === 'provider'
                                            ? 'text-green-100'
                                            : 'text-gray-500'
                                    }`}
                                    data-oid="ewn689x"
                                >
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Replies */}
                <div className="mt-6" data-oid="5su4.rp">
                    <p className="text-sm text-gray-600 mb-3" data-oid="5moe-3d">
                        ردود سريعة:
                    </p>
                    <div className="flex flex-wrap gap-2" data-oid="aitb3-l">
                        {quickReplies.map((reply, index) => (
                            <button
                                key={index}
                                onClick={() => setMessage(reply)}
                                className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-gray-50"
                                data-oid="a9_-.:_"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Message Input */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4"
                data-oid=".c02eoz"
            >
                <div className="max-w-sm mx-auto" data-oid="m0w5jdy">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="sd5z7jn">
                        <button
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"
                            data-oid="t-_8b6w"
                        >
                            <span className="text-lg" data-oid="2podh9q">
                                📎
                            </span>
                        </button>

                        <div className="flex-1 relative" data-oid="ki324bd">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="اكتب رسالتك..."
                                className="w-full bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                data-oid="nb1qzr0"
                            />
                        </div>

                        <button
                            onClick={handleSendMessage}
                            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                            data-oid="m03dlby"
                        >
                            <span className="text-lg" data-oid="_ty4z.i">
                                📤
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
