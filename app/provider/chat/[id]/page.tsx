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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid=".944oh:">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white sticky top-0 z-50"
                data-oid="nu8hm6q"
            >
                <div className="max-w-sm mx-auto px-4 py-4" data-oid="47d29ac">
                    <div className="flex items-center justify-between" data-oid="nsv6uhq">
                        <Link href="/provider/messages" className="text-white" data-oid="vupifwp">
                            <span className="text-2xl" data-oid="474jysv">
                                ←
                            </span>
                        </Link>

                        <div
                            className="flex items-center space-x-3 space-x-reverse flex-1 mx-4"
                            data-oid="_0gh1g."
                        >
                            <div
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="jp1ovho"
                            >
                                <span className="text-lg" data-oid="z-9zx06">
                                    👩
                                </span>
                            </div>
                            <div className="flex-1" data-oid="z18.hjv">
                                <h1 className="font-semibold" data-oid="tp3m__-">
                                    {customer.name}
                                </h1>
                                <p className="text-xs opacity-90" data-oid="sq::g2v">
                                    {customer.service}
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex items-center space-x-2 space-x-reverse"
                            data-oid="2j6t87k"
                        >
                            <button
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid=":u3wb-v"
                            >
                                <span className="text-lg" data-oid="h6:45ve">
                                    📞
                                </span>
                            </button>
                            <button
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                                data-oid="fw68i90"
                            >
                                <span className="text-lg" data-oid="robvsek">
                                    ℹ️
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Info Banner */}
            <div className="max-w-sm mx-auto px-4 py-3" data-oid=":2ds31x">
                <div
                    className="bg-blue-50 rounded-2xl p-4 border border-blue-100"
                    data-oid="v53_jsh"
                >
                    <div className="flex items-center justify-between" data-oid="0vofdmq">
                        <div data-oid=":fqa.xd">
                            <h3 className="font-semibold text-blue-800" data-oid="mwz7w.8">
                                {customer.service}
                            </h3>
                            <p className="text-sm text-blue-600" data-oid="-u8c49f">
                                📍 {customer.location}
                            </p>
                        </div>
                        <div className="text-left" data-oid="k-g0z:u">
                            <p className="text-lg font-bold text-green-600" data-oid="oum_g6n">
                                {customer.price}
                            </p>
                            <span
                                className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full"
                                data-oid="bldkbx4"
                            >
                                نشط
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="max-w-sm mx-auto px-4 pb-32" data-oid="gkltg1z">
                <div className="space-y-4" data-oid="905cb2w">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'provider' ? 'justify-end' : 'justify-start'}`}
                            data-oid="nq5:r3x"
                        >
                            <div
                                className={`max-w-xs px-4 py-3 rounded-2xl ${
                                    msg.sender === 'provider'
                                        ? 'bg-green-500 text-white rounded-br-md'
                                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                                }`}
                                data-oid="k10iw0l"
                            >
                                <p className="text-sm" data-oid="ovcx83.">
                                    {msg.text}
                                </p>
                                <p
                                    className={`text-xs mt-1 ${
                                        msg.sender === 'provider'
                                            ? 'text-green-100'
                                            : 'text-gray-500'
                                    }`}
                                    data-oid="52njyp."
                                >
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Replies */}
                <div className="mt-6" data-oid="ca1axv4">
                    <p className="text-sm text-gray-600 mb-3" data-oid="hg07ukg">
                        ردود سريعة:
                    </p>
                    <div className="flex flex-wrap gap-2" data-oid="-x4:nqb">
                        {quickReplies.map((reply, index) => (
                            <button
                                key={index}
                                onClick={() => setMessage(reply)}
                                className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-gray-50"
                                data-oid="xo7nnvp"
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
                data-oid="z_z31:k"
            >
                <div className="max-w-sm mx-auto" data-oid="_z4s8w.">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="p6re5ab">
                        <button
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"
                            data-oid="p3z_u-4"
                        >
                            <span className="text-lg" data-oid="gh_3fow">
                                📎
                            </span>
                        </button>

                        <div className="flex-1 relative" data-oid="ntiudt8">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="اكتب رسالتك..."
                                className="w-full bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                data-oid="7jmsocc"
                            />
                        </div>

                        <button
                            onClick={handleSendMessage}
                            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                            data-oid="45kdv2m"
                        >
                            <span className="text-lg" data-oid="wflox_f">
                                📤
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
