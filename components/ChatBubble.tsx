interface ChatBubbleProps {
    message: {
        id: number;
        senderId: string;
        senderName: string;
        content: string;
        timestamp: string;
        isRead: boolean;
    };
    currentUserId: string;
}

export function ChatBubble({ message, currentUserId }: ChatBubbleProps) {
    const isOwnMessage = message.senderId === currentUserId;

    return (
        <div
            className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
            data-oid="k5j9nbw"
        >
            <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    isOwnMessage
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                }`}
                data-oid="feaae1i"
            >
                <p className="text-sm" data-oid="t_a8q-g">
                    {message.content}
                </p>
                <div
                    className={`text-xs mt-1 ${isOwnMessage ? 'text-blue-100' : 'text-gray-500'}`}
                    data-oid="iwkb:9l"
                >
                    {message.timestamp}
                    {isOwnMessage && (
                        <span className="mr-1" data-oid="w5eh0ka">
                            {message.isRead ? '✓✓' : '✓'}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
