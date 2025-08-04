'use client';

import { useState, useCallback } from 'react';
import { NotificationToast } from './NotificationToast';

interface Toast {
    id: number;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    duration?: number;
}

export function NotificationManager() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { ...toast, id }]);
    }, []);

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    // Expose methods globally
    if (typeof window !== 'undefined') {
        (window as any).showNotification = addToast;
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none" data-oid="uzle4ve">
            <div className="space-y-2 p-4" data-oid="o:ypv9m">
                {toasts.map((toast) => (
                    <div key={toast.id} className="pointer-events-auto" data-oid="6hm6-.u">
                        <NotificationToast {...toast} onClose={removeToast} data-oid="1tva_al" />
                    </div>
                ))}
            </div>
        </div>
    );
}
