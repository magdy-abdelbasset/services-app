'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Message {
    id: number;
    senderId: string;
    senderName: string;
    senderAvatar: string;
    content: string;
    timestamp: string;
    type: 'text' | 'offer' | 'image' | 'location';
    isRead: boolean;
}

interface ChatUser {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
    lastSeen?: string;
    isServiceProvider: boolean;
    rating?: number;
    completedJobs?: number;
}

export default function ChatPage() {
    const params = useParams();
    const chatId = params.id as string;
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [otherUser, setOtherUser] = useState<ChatUser | null>(null);
    const [isTyping, setIsTyping] = useState(false);

    // Mock current user
    const currentUser = {
        id: 'user1',
        name: 'أحمد محمد',
        avatar: '👤',
    };

    // Mock data based on chat ID
    useEffect(() => {
        // Simulate loading chat data
        const mockOtherUser: ChatUser = {
            id: 'provider1',
            name: 'أحمد علي',
            avatar: '👨‍💼',
            isOnline: true,
            isServiceProvider: true,
            rating: 4.9,
            completedJobs: 156,
        };

        const mockMessages: Message[] = [
            {
                id: 1,
                senderId: 'provider1',
                senderName: 'أحمد علي',
                senderAvatar: '👨‍💼',
                content: 'مرحباً! شكراً لاختيارك خدماتي. متى تفضل أن أبدأ بتنظيف منزلك؟',
                timestamp: '10:30 ص',
                type: 'text',
                isRead: true,
            },
            {
                id: 2,
                senderId: 'user1',
                senderName: 'أحمد محمد',
                senderAvatar: '👤',
                content: 'مرحباً أحمد، يمكنك البدء اليوم بعد الظهر إذا كان ذلك مناسباً لك',
                timestamp: '10:32 ص',
                type: 'text',
                isRead: true,
            },
            {
                id: 3,
                senderId: 'provider1',
                senderName: 'أحمد علي',
                senderAvatar: '👨‍💼',
                content: 'ممتاز! سأكون هناك في الساعة 2:00 م. هل تحتاج مني إحضار مواد تنظيف خاصة؟',
                timestamp: '10:35 ص',
                type: 'text',
                isRead: true,
            },
            {
                id: 4,
                senderId: 'user1',
                senderName: 'أحمد محمد',
                senderAvatar: '👤',
                content: 'لا، لدي جميع المواد المطلوبة. فقط أحضر معداتك',
                timestamp: '10:37 ص',
                type: 'text',
                isRead: true,
            },
        ];

        setOtherUser(mockOtherUser);
        setMessages(mockMessages);
    }, [chatId]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage: Message = {
                id: messages.length + 1,
                senderId: currentUser.id,
                senderName: currentUser.name,
                senderAvatar: currentUser.avatar,
                content: message,
                timestamp: new Date().toLocaleTimeString('ar-SA', {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
                type: 'text',
                isRead: false,
            };

            setMessages([...messages, newMessage]);
            setMessage('');

            // Simulate typing indicator and response
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                // Add a mock response
                const response: Message = {
                    id: messages.length + 2,
                    senderId: otherUser?.id || 'provider1',
                    senderName: otherUser?.name || 'مقدم الخدمة',
                    senderAvatar: otherUser?.avatar || '👨‍💼',
                    content: 'شكراً لك، سأتواصل معك قريباً',
                    timestamp: new Date().toLocaleTimeString('ar-SA', {
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    type: 'text',
                    isRead: false,
                };
                setMessages((prev) => [...prev, response]);
            }, 2000);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!otherUser) {
        return (
            <div
                className="min-h-screen bg-gray-50 flex items-center justify-center"
                data-oid="gnp.px4"
            >
                <div className="text-center" data-oid="rp6sq8e">
                    <div
                        className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                        data-oid="vndyu5n"
                    ></div>
                    <p className="text-gray-600" data-oid="zat6qzo">
                        جاري تحميل المحادثة...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl" data-oid="a.fbz-o">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3" data-oid="054mcl:">
                <div
                    className="max-w-sm mx-auto flex items-center justify-between"
                    data-oid="uhky5w5"
                >
                    <Link
                        href="/messages"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                        data-oid="701crx_"
                    >
                        <span className="text-lg" data-oid="2oakvon">
                            ←
                        </span>
                    </Link>

                    <div
                        className="flex items-center space-x-3 space-x-reverse flex-1 mx-4"
                        data-oid="zc:ojlp"
                    >
                        <div className="relative" data-oid="d_auoqo">
                            <div className="text-2xl" data-oid="p9a0s6n">
                                {otherUser.avatar}
                            </div>
                            {otherUser.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="o60ox-4"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid=":k1nffm">
                            <div
                                className="flex items-center space-x-2 space-x-reverse"
                                data-oid="1xgf11q"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="f3jxoa2">
                                    {otherUser.name}
                                </h3>
                                {otherUser.isServiceProvider && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                        data-oid="59_q_zn"
                                    >
                                        مقدم خدمة
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600"
                                data-oid="zlpx4u."
                            >
                                {otherUser.isOnline ? (
                                    <span className="text-green-600" data-oid="bnq0qbf">
                                        متصل الآن
                                    </span>
                                ) : (
                                    <span data-oid="dhpk2rs">آخر ظهور: {otherUser.lastSeen}</span>
                                )}
                                {otherUser.rating && (
                                    <>
                                        <span data-oid="em2g2id">•</span>
                                        <div
                                            className="flex items-center space-x-1 space-x-reverse"
                                            data-oid="tm:s33l"
                                        >
                                            <span className="text-yellow-500" data-oid="xo26sa.">
                                                ⭐
                                            </span>
                                            <span data-oid="0vlgoa1">{otherUser.rating}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                        data-oid="d:de_ac"
                    >
                        <span className="text-lg" data-oid="6ygjk81">
                            📞
                        </span>
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4" data-oid="-ekq8bo">
                <div className="max-w-sm mx-auto space-y-4" data-oid="d5iq1bk">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${
                                msg.senderId === currentUser.id ? 'justify-end' : 'justify-start'
                            }`}
                            data-oid="nsk8n32"
                        >
                            <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                    msg.senderId === currentUser.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-gray-800 border border-gray-200'
                                }`}
                                data-oid="tozk4j5"
                            >
                                <p className="text-sm" data-oid="_383pyi">
                                    {msg.content}
                                </p>
                                <div
                                    className={`text-xs mt-1 ${
                                        msg.senderId === currentUser.id
                                            ? 'text-blue-100'
                                            : 'text-gray-500'
                                    }`}
                                    data-oid="bq-x.m9"
                                >
                                    {msg.timestamp}
                                    {msg.senderId === currentUser.id && (
                                        <span className="mr-1" data-oid="d74f9k4">
                                            {msg.isRead ? '✓✓' : '✓'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex justify-start" data-oid="8i2u8b9">
                            <div
                                className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl"
                                data-oid="3l.hj0w"
                            >
                                <div className="flex space-x-1" data-oid="y4xzymt">
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        data-oid=":5dux63"
                                    ></div>
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: '0.1s' }}
                                        data-oid="iydjh43"
                                    ></div>
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: '0.2s' }}
                                        data-oid="49l4kxi"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} data-oid="r1evg.s" />
                </div>
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4" data-oid="-vfiip9">
                <div className="max-w-sm mx-auto" data-oid="-d_j4be">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="8un7se1">
                        <button
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                            data-oid="83-tmif"
                        >
                            <span className="text-lg" data-oid="9z7x4yn">
                                📎
                            </span>
                        </button>

                        <div
                            className="flex-1 bg-gray-100 rounded-2xl px-4 py-2"
                            data-oid="5vhp6zo"
                        >
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="اكتب رسالتك..."
                                className="w-full bg-transparent outline-none text-gray-800"
                                data-oid="b8hyj43"
                            />
                        </div>

                        <button
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                            data-oid="g6qvf44"
                        >
                            <span className="text-lg" data-oid="_8:2vcs">
                                😊
                            </span>
                        </button>

                        <button
                            onClick={handleSendMessage}
                            disabled={!message.trim()}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                message.trim()
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-400'
                            }`}
                            data-oid=".mh_vvx"
                        >
                            <span className="text-lg" data-oid="d6l0xqq">
                                📤
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
