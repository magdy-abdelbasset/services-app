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
            data-oid="osexmfl"
        >
            <div
                className={`bg-white rounded-2xl shadow-lg border-2 ${styles.border} p-4`}
                data-oid="4gbnpwv"
            >
                <div className="flex items-start space-x-3 space-x-reverse" data-oid="zwif.8a">
                    <div
                        className={`w-10 h-10 ${styles.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                        data-oid="nc3.ujr"
                    >
                        <span className="text-lg" data-oid="qe517hb">
                            {styles.icon}
                        </span>
                    </div>
                    <div className="flex-1 min-w-0" data-oid="g9z9b74">
                        <h4 className="font-semibold text-gray-800 mb-1" data-oid="-dkyxuf">
                            {title}
                        </h4>
                        <p className="text-sm text-gray-600" data-oid="yxsph52">
                            {message}
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        data-oid=":m.rylo"
                    >
                        <span className="text-lg" data-oid="3z02uqq">
                            ✕
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
