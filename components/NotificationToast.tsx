'use client';

import { useState, useEffect } from 'react';

interface NotificationToastProps {
    id: number;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    duration?: number;
    onClose: (id: number) => void;
}

export function NotificationToast({
    id,
    type,
    title,
    message,
    duration = 5000,
    onClose,
}: NotificationToastProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose(id);
        }, 300);
    };

    const getTypeStyles = () => {
        switch (type) {
            case 'success':
                return {
                    bg: 'bg-green-500',
                    icon: '✅',
                    border: 'border-green-200',
                };
            case 'error':
                return {
                    bg: 'bg-red-500',
                    icon: '❌',
                    border: 'border-red-200',
                };
            case 'warning':
                return {
                    bg: 'bg-yellow-500',
                    icon: '⚠️',
                    border: 'border-yellow-200',
                };
            case 'info':
                return {
                    bg: 'bg-blue-500',
                    icon: 'ℹ️',
                    border: 'border-blue-200',
                };
            default:
                return {
                    bg: 'bg-gray-500',
                    icon: '📢',
                    border: 'border-gray-200',
                };
        }
    };

    const styles = getTypeStyles();

    if (!isVisible) return null;

    return (
        <div
            className={`fixed top-4 right-4 left-4 max-w-sm mx-auto z-50 transform transition-all duration-300 ${
                isLeaving ? 'translate-y-[-100px] opacity-0' : 'translate-y-0 opacity-100'
            }`}
            dir="rtl"
            data-oid="d4qkvzb"
        >
            <div
                className={`bg-white rounded-2xl shadow-lg border-2 ${styles.border} p-4`}
                data-oid="4-9kmbt"
            >
                <div className="flex items-start space-x-3 space-x-reverse" data-oid="b7s7hlq">
                    <div
                        className={`w-10 h-10 ${styles.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                        data-oid="1kmvqs6"
                    >
                        <span className="text-lg" data-oid="ibg97ik">
                            {styles.icon}
                        </span>
                    </div>
                    <div className="flex-1 min-w-0" data-oid="k9xbsx5">
                        <h4 className="font-semibold text-gray-800 mb-1" data-oid="ofyzlwn">
                            {title}
                        </h4>
                        <p className="text-sm text-gray-600" data-oid="njpnep_">
                            {message}
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        data-oid="dr2_ie_"
                    >
                        <span className="text-lg" data-oid="4zn8wk3">
                            ✕
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
