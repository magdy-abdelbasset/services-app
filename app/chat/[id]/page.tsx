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
                data-oid="om3:m0n"
            >
                <div className="text-center" data-oid="cnj86fj">
                    <div
                        className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                        data-oid="eac30w9"
                    ></div>
                    <p className="text-gray-600" data-oid="1r3m5d3">
                        جاري تحميل المحادثة...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl" data-oid="pcuwu_l">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3" data-oid="49guwp3">
                <div
                    className="max-w-sm mx-auto flex items-center justify-between"
                    data-oid="pxlk47x"
                >
                    <Link
                        href="/messages"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                        data-oid="4ljwl9_"
                    >
                        <span className="text-lg" data-oid="j0:51wd">
                            ←
                        </span>
                    </Link>

                    <div
                        className="flex items-center space-x-3 space-x-reverse flex-1 mx-4"
                        data-oid="_g-i0u7"
                    >
                        <div className="relative" data-oid="lm-3g6o">
                            <div className="text-2xl" data-oid="n70wqm0">
                                {otherUser.avatar}
                            </div>
                            {otherUser.isOnline && (
                                <div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                                    data-oid="xe9l1:4"
                                ></div>
                            )}
                        </div>
                        <div className="flex-1" data-oid="yfhm.7k">
                            <div
                                className="flex items-center space-x-2 space-x-reverse"
                                data-oid="3py:q9k"
                            >
                                <h3 className="font-semibold text-gray-800" data-oid="6b8:-e4">
                                    {otherUser.name}
                                </h3>
                                {otherUser.isServiceProvider && (
                                    <span
                                        className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                                        data-oid="6o2yya1"
                                    >
                                        مقدم خدمة
                                    </span>
                                )}
                            </div>
                            <div
                                className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600"
                                data-oid="8ay5qpa"
                            >
                                {otherUser.isOnline ? (
                                    <span className="text-green-600" data-oid="87jxcwi">
                                        متصل الآن
                                    </span>
                                ) : (
                                    <span data-oid="x0mtm.l">آخر ظهور: {otherUser.lastSeen}</span>
                                )}
                                {otherUser.rating && (
                                    <>
                                        <span data-oid=".5ybdpx">•</span>
                                        <div
                                            className="flex items-center space-x-1 space-x-reverse"
                                            data-oid="u:v_91y"
                                        >
                                            <span className="text-yellow-500" data-oid="phqryb2">
                                                ⭐
                                            </span>
                                            <span data-oid="peepcp0">{otherUser.rating}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                        data-oid="xjp9nw9"
                    >
                        <span className="text-lg" data-oid="chu22b7">
                            📞
                        </span>
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4" data-oid="5g-6nki">
                <div className="max-w-sm mx-auto space-y-4" data-oid="n62s_jx">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${
                                msg.senderId === currentUser.id ? 'justify-end' : 'justify-start'
                            }`}
                            data-oid="rwu20nu"
                        >
                            <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                    msg.senderId === currentUser.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-gray-800 border border-gray-200'
                                }`}
                                data-oid="i60oby3"
                            >
                                <p className="text-sm" data-oid="aq8j0xc">
                                    {msg.content}
                                </p>
                                <div
                                    className={`text-xs mt-1 ${
                                        msg.senderId === currentUser.id
                                            ? 'text-blue-100'
                                            : 'text-gray-500'
                                    }`}
                                    data-oid="4thrd1:"
                                >
                                    {msg.timestamp}
                                    {msg.senderId === currentUser.id && (
                                        <span className="mr-1" data-oid="krqfimi">
                                            {msg.isRead ? '✓✓' : '✓'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex justify-start" data-oid="sysic:c">
                            <div
                                className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl"
                                data-oid="bq0zjh_"
                            >
                                <div className="flex space-x-1" data-oid="rt0io_.">
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        data-oid="kou1i8q"
                                    ></div>
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: '0.1s' }}
                                        data-oid="nhsfi2i"
                                    ></div>
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: '0.2s' }}
                                        data-oid="mg-icbh"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} data-oid="kji776q" />
                </div>
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4" data-oid="nb:9bwg">
                <div className="max-w-sm mx-auto" data-oid="ht22t5d">
                    <div className="flex items-center space-x-3 space-x-reverse" data-oid="hqlc7lb">
                        <button
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                            data-oid="r_67867"
                        >
                            <span className="text-lg" data-oid="h-3ov8-">
                                📎
                            </span>
                        </button>

                        <div
                            className="flex-1 bg-gray-100 rounded-2xl px-4 py-2"
                            data-oid="v7wcolo"
                        >
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="اكتب رسالتك..."
                                className="w-full bg-transparent outline-none text-gray-800"
                                data-oid="wl62d3p"
                            />
                        </div>

                        <button
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                            data-oid="ob.ghl0"
                        >
                            <span className="text-lg" data-oid="7ez4b0e">
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
                            data-oid="eui3vak"
                        >
                            <span className="text-lg" data-oid="clj6_:r">
                                📤
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
