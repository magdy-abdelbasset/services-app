'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: 'لوحة التحكم', href: '/admin', icon: '📊' },
        { name: 'إدارة المستخدمين', href: '/admin/users', icon: '👥' },
        { name: 'مقدمي الخدمات', href: '/admin/providers', icon: '🔧' },
        { name: 'إدارة الخدمات', href: '/admin/services', icon: '⚙️' },
        { name: 'إدارة الطلبات', href: '/admin/orders', icon: '📋' },
        { name: 'سجل معاملات المحفظة', href: '/admin/wallet-transactions', icon: '💰' },
        { name: 'التقارير والإحصائيات', href: '/admin/analytics', icon: '📈' },
        { name: 'الإعدادات', href: '/admin/settings', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="_8iwadz">
            {/* Mobile sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 lg:hidden" data-oid="-5gr1_.">
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-75"
                        onClick={() => setSidebarOpen(false)}
                        data-oid="2mord07"
                    ></div>
                    <div
                        className="relative flex flex-col w-full max-w-xs bg-white"
                        data-oid="7ebywsf"
                    >
                        <div className="absolute top-0 left-0 -mr-12 pt-2" data-oid="29i7hcp">
                            <button
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                                data-oid="7b3b750"
                            >
                                <span className="sr-only" data-oid="xbd_v5u">
                                    إغلاق الشريط الجانبي
                                </span>
                                <span className="text-white text-xl" data-oid="o6rwaer">
                                    ✕
                                </span>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto" data-oid="_lzrj-l">
                            <div
                                className="flex-shrink-0 flex items-center px-4"
                                data-oid="_2ej.7x"
                            >
                                <h1 className="text-xl font-bold text-gray-900" data-oid="q51x0fz">
                                    لوحة التحكم
                                </h1>
                            </div>
                            <nav className="mt-5 px-2 space-y-1" data-oid="zq263hm">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`${
                                            pathname === item.href
                                                ? 'bg-blue-100 text-blue-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                                        data-oid="wf1nhlz"
                                    >
                                        <span className="ml-3 text-lg" data-oid="7vujlr:">
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop sidebar */}
            <div className="hidden lg:flex lg:flex-shrink-0" data-oid="n74bt7i">
                <div className="flex flex-col w-64" data-oid="k750mpg">
                    <div
                        className="flex flex-col h-0 flex-1 bg-white border-l border-gray-200"
                        data-oid=".6m41xs"
                    >
                        <div
                            className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"
                            data-oid="1s_1ntw"
                        >
                            <div
                                className="flex items-center flex-shrink-0 px-4"
                                data-oid="9i4e1cw"
                            >
                                <h1 className="text-xl font-bold text-gray-900" data-oid="eec2m5r">
                                    لوحة التحكم الإدارية
                                </h1>
                            </div>
                            <nav className="mt-5 flex-1 px-2 space-y-1" data-oid="in4.jiy">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`${
                                            pathname === item.href
                                                ? 'bg-blue-100 text-blue-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                                        data-oid="grzc9m."
                                    >
                                        <span className="ml-3 text-lg" data-oid="6icq75y">
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div
                            className="flex-shrink-0 flex border-t border-gray-200 p-4"
                            data-oid="bqnc1k:"
                        >
                            <Link
                                href="/"
                                className="flex-shrink-0 w-full group block"
                                data-oid="_c_vrfw"
                            >
                                <div className="flex items-center" data-oid="mtk46c7">
                                    <div className="ml-3" data-oid="-ki4aid">
                                        <p
                                            className="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                                            data-oid="q735md:"
                                        >
                                            العودة للتطبيق الرئيسي
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pr-64 flex flex-col flex-1" data-oid="6:guhdt">
                {/* Mobile header */}
                <div
                    className="sticky top-0 z-10 lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white border-b border-gray-200"
                    data-oid="pb4m2mt"
                >
                    <button
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        onClick={() => setSidebarOpen(true)}
                        data-oid="w6t3x9g"
                    >
                        <span className="sr-only" data-oid="ttxv389">
                            فتح الشريط الجانبي
                        </span>
                        <span className="text-xl" data-oid="xkvhio5">
                            ☰
                        </span>
                    </button>
                </div>

                <main className="flex-1" data-oid="axhr2gp">
                    {children}
                </main>
            </div>
        </div>
    );
}
