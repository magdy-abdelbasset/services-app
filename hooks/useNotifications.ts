'use client';

import { useCallback } from 'react';

interface NotificationOptions {
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    duration?: number;
}

export function useNotifications() {
    const showNotification = useCallback((options: NotificationOptions) => {
        if (typeof window !== 'undefined' && (window as any).showNotification) {
            (window as any).showNotification(options);
        }
    }, []);

    const showSuccess = useCallback(
        (title: string, message: string, duration?: number) => {
            showNotification({ type: 'success', title, message, duration });
        },
        [showNotification],
    );

    const showError = useCallback(
        (title: string, message: string, duration?: number) => {
            showNotification({ type: 'error', title, message, duration });
        },
        [showNotification],
    );

    const showWarning = useCallback(
        (title: string, message: string, duration?: number) => {
            showNotification({ type: 'warning', title, message, duration });
        },
        [showNotification],
    );

    const showInfo = useCallback(
        (title: string, message: string, duration?: number) => {
            showNotification({ type: 'info', title, message, duration });
        },
        [showNotification],
    );

    return {
        showNotification,
        showSuccess,
        showError,
        showWarning,
        showInfo,
    };
}
