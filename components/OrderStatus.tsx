interface OrderStatusProps {
    status: 'pending' | 'accepted' | 'in_progress' | 'on_way' | 'completed' | 'cancelled';
}

export function OrderStatus({ status }: OrderStatusProps) {
    const getStatusInfo = () => {
        switch (status) {
            case 'pending':
                return {
                    text: 'في انتظار الموافقة',
                    color: 'bg-yellow-500',
                    icon: '⏳',
                };
            case 'accepted':
                return {
                    text: 'تم قبول الطلب',
                    color: 'bg-green-500',
                    icon: '✅',
                };
            case 'in_progress':
                return {
                    text: 'جاري التنفيذ',
                    color: 'bg-blue-500',
                    icon: '🔄',
                };
            case 'on_way':
                return {
                    text: 'في الطريق',
                    color: 'bg-orange-500',
                    icon: '🚗',
                };
            case 'completed':
                return {
                    text: 'مكتمل',
                    color: 'bg-green-500',
                    icon: '✅',
                };
            case 'cancelled':
                return {
                    text: 'ملغي',
                    color: 'bg-red-500',
                    icon: '❌',
                };
            default:
                return {
                    text: 'غير محدد',
                    color: 'bg-gray-500',
                    icon: '❓',
                };
        }
    };

    const statusInfo = getStatusInfo();

    return (
        <span
            className={`${statusInfo.color} text-white px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center space-x-1 space-x-reverse`}
            data-oid="4q56d.m"
        >
            <span data-oid="0_ysycf">{statusInfo.icon}</span>
            <span data-oid="_a6kcw4">{statusInfo.text}</span>
        </span>
    );
}
