'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [stats] = useState({
        totalUsers: 1247,
        totalProviders: 342,
        totalOrders: 2156,
        totalRevenue: 125430,
        activeOrders: 89,
        pendingApprovals: 23,
        newRegistrations: 45,
        completedToday: 67,
    });

    const recentOrders = [
        {
            id: 1,
            customer: 'أحمد محمد',
            service: 'تنظيف المنزل',
            provider: 'فاطمة علي',
            status: 'مكتمل',
            amount: 45,
        },
        {
            id: 2,
            customer: 'سارة أحمد',
            service: 'صيانة السباكة',
            provider: 'محمد حسن',
            status: 'جاري التنفيذ',
            amount: 80,
        },
        {
            id: 3,
            customer: 'علي محمود',
            service: 'توصيل الطعام',
            provider: 'خالد عبدالله',
            status: 'في الانتظار',
            amount: 25,
        },
        {
            id: 4,
            customer: 'نور الدين',
            service: 'خدمات التجميل',
            provider: 'ليلى محمد',
            status: 'مكتمل',
            amount: 120,
        },
        {
            id: 5,
            customer: 'مريم سالم',
            service: 'تصليح الأجهزة',
            provider: 'عمر يوسف',
            status: 'ملغي',
            amount: 60,
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'مكتمل':
                return 'bg-green-100 text-green-800';
            case 'جاري التنفيذ':
                return 'bg-blue-100 text-blue-800';
            case 'في الانتظار':
                return 'bg-yellow-100 text-yellow-800';
            case 'ملغي':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="8u6e-b4">
            {/* Header */}
            <div className="bg-white shadow-sm border-b" data-oid="vl_qfhr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".yhedqc">
                    <div className="flex justify-between items-center py-4" data-oid="kpx8yzh">
                        <div
                            className="flex items-center space-x-4 space-x-reverse"
                            data-oid="yh_2d_v"
                        >
                            <h1 className="text-2xl font-bold text-gray-900" data-oid="ep6_7c4">
                                لوحة التحكم الإدارية
                            </h1>
                        </div>
                        <div
                            className="flex items-center space-x-4 space-x-reverse"
                            data-oid="9bxqpt2"
                        >
                            <div className="relative" data-oid="96-69j2">
                                <button
                                    className="p-2 text-gray-400 hover:text-gray-500"
                                    data-oid="eei2r-o"
                                >
                                    <span className="text-xl" data-oid="n5q.c55">
                                        🔔
                                    </span>
                                    <span
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                        data-oid="c2bco.w"
                                    >
                                        {stats.pendingApprovals}
                                    </span>
                                </button>
                            </div>
                            <div
                                className="flex items-center space-x-2 space-x-reverse"
                                data-oid="2sfv--w"
                            >
                                <div
                                    className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                                    data-oid="s8_b.:q"
                                >
                                    <span
                                        className="text-white text-sm font-semibold"
                                        data-oid=".1p66h7"
                                    >
                                        أ
                                    </span>
                                </div>
                                <span
                                    className="text-sm font-medium text-gray-700"
                                    data-oid="emx4ol8"
                                >
                                    المدير العام
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="30ilm3q">
                {/* Stats Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                    data-oid="04xc5-1"
                >
                    <div className="bg-white rounded-lg shadow p-6" data-oid="fugg.df">
                        <div className="flex items-center" data-oid="qupnd54">
                            <div className="flex-shrink-0" data-oid="gu8pgho">
                                <div
                                    className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center"
                                    data-oid=".5dzwms"
                                >
                                    <span className="text-white text-lg" data-oid="ceh-e3n">
                                        👥
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="cnhibbp">
                                <p className="text-sm font-medium text-gray-600" data-oid="hz5ye8p">
                                    إجمالي المستخدمين
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="uoc3pve"
                                >
                                    {stats.totalUsers.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6" data-oid="f169hw5">
                        <div className="flex items-center" data-oid="7be9qr:">
                            <div className="flex-shrink-0" data-oid="a6iezs6">
                                <div
                                    className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center"
                                    data-oid="vphbxpb"
                                >
                                    <span className="text-white text-lg" data-oid="9vzqbdx">
                                        🔧
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="mky:-w6">
                                <p className="text-sm font-medium text-gray-600" data-oid="-0_6zpb">
                                    مقدمي الخدمات
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="zw_:2wh"
                                >
                                    {stats.totalProviders.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6" data-oid="h0m0ayo">
                        <div className="flex items-center" data-oid="rtxvib9">
                            <div className="flex-shrink-0" data-oid="w:4p4kr">
                                <div
                                    className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center"
                                    data-oid="ikse0a-"
                                >
                                    <span className="text-white text-lg" data-oid="yr9ngzg">
                                        📋
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="a9etd_2">
                                <p className="text-sm font-medium text-gray-600" data-oid="bogb2lc">
                                    إجمالي الطلبات
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="2x3x7.5"
                                >
                                    {stats.totalOrders.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6" data-oid="65jvj7a">
                        <div className="flex items-center" data-oid="9qabt8s">
                            <div className="flex-shrink-0" data-oid="l_qmnjt">
                                <div
                                    className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center"
                                    data-oid="g720k08"
                                >
                                    <span className="text-white text-lg" data-oid="l74k98-">
                                        💰
                                    </span>
                                </div>
                            </div>
                            <div className="mr-4 flex-1" data-oid="2mfthuh">
                                <p className="text-sm font-medium text-gray-600" data-oid="i2r2gp-">
                                    إجمالي الإيرادات
                                </p>
                                <p
                                    className="text-2xl font-semibold text-gray-900"
                                    data-oid="sn7l-3w"
                                >
                                    {stats.totalRevenue.toLocaleString()} ريال
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-oid="t2svdw1">
                    <div className="bg-blue-50 rounded-lg p-4 text-center" data-oid="tdn_1.d">
                        <p className="text-2xl font-bold text-blue-600" data-oid="1j-wgn8">
                            {stats.activeOrders}
                        </p>
                        <p className="text-sm text-blue-800" data-oid="ld31qc2">
                            طلبات نشطة
                        </p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center" data-oid="xiq68s4">
                        <p className="text-2xl font-bold text-orange-600" data-oid="z2jm61r">
                            {stats.pendingApprovals}
                        </p>
                        <p className="text-sm text-orange-800" data-oid="qvg26js">
                            في انتظار الموافقة
                        </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center" data-oid="nqc0-ev">
                        <p className="text-2xl font-bold text-green-600" data-oid="l1oezni">
                            {stats.newRegistrations}
                        </p>
                        <p className="text-sm text-green-800" data-oid="p5sx:v4">
                            تسجيلات جديدة اليوم
                        </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center" data-oid="r3qdqik">
                        <p className="text-2xl font-bold text-purple-600" data-oid="40ydiv3">
                            {stats.completedToday}
                        </p>
                        <p className="text-sm text-purple-800" data-oid="5o-xbat">
                            مكتملة اليوم
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-oid="bshn003">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2" data-oid="5h55mz8">
                        <div className="bg-white rounded-lg shadow" data-oid="es-24j7">
                            <div className="px-6 py-4 border-b border-gray-200" data-oid="ziu3lt8">
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="sd3q1i_"
                                >
                                    <h3
                                        className="text-lg font-medium text-gray-900"
                                        data-oid="1ylygc9"
                                    >
                                        الطلبات الأخيرة
                                    </h3>
                                    <Link
                                        href="/admin/orders"
                                        className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                                        data-oid="tzozv46"
                                    >
                                        عرض الكل
                                    </Link>
                                </div>
                            </div>
                            <div className="overflow-x-auto" data-oid="bppn4tf">
                                <table
                                    className="min-w-full divide-y divide-gray-200"
                                    data-oid="w-:d1qn"
                                >
                                    <thead className="bg-gray-50" data-oid="mc5fxum">
                                        <tr data-oid="8t3dkr6">
                                            <th
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                data-oid="1ok08.r"
                                            >
                                                العميل
                                            </th>
                                            <th
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                data-oid=":5hnwwk"
                                            >
                                                الخدمة
                                            </th>
                                            <th
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                data-oid="sqehuem"
                                            >
                                                مقدم الخدمة
                                            </th>
                                            <th
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                data-oid="5d33onm"
                                            >
                                                الحالة
                                            </th>
                                            <th
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                data-oid="cahjg8h"
                                            >
                                                المبلغ
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y divide-gray-200"
                                        data-oid="3xsxxgt"
                                    >
                                        {recentOrders.map((order) => (
                                            <tr
                                                key={order.id}
                                                className="hover:bg-gray-50"
                                                data-oid="kjkshcl"
                                            >
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                                    data-oid="zsxydcy"
                                                >
                                                    {order.customer}
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                    data-oid="-91w0rt"
                                                >
                                                    {order.service}
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                    data-oid="gikvq15"
                                                >
                                                    {order.provider}
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap"
                                                    data-oid="lq_cd27"
                                                >
                                                    <span
                                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
                                                        data-oid="j0a1a1d"
                                                    >
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                    data-oid="w9:v1qw"
                                                >
                                                    {order.amount} ريال
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-6" data-oid="-8zien:">
                        <div className="bg-white rounded-lg shadow p-6" data-oid="rcr.a9-">
                            <h3
                                className="text-lg font-medium text-gray-900 mb-4"
                                data-oid="yv-5x3:"
                            >
                                إجراءات سريعة
                            </h3>
                            <div className="space-y-3" data-oid="hf:rqi4">
                                <Link
                                    href="/admin/users"
                                    className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                                    data-oid="_638qni"
                                >
                                    إدارة المستخدمين
                                </Link>
                                <Link
                                    href="/admin/providers"
                                    className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                                    data-oid="ngoyqon"
                                >
                                    إدارة مقدمي الخدمات
                                </Link>
                                <Link
                                    href="/admin/services"
                                    className="block w-full bg-purple-500 text-white text-center py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
                                    data-oid="dl5f2nf"
                                >
                                    إدارة الخدمات
                                </Link>
                                <Link
                                    href="/admin/orders"
                                    className="block w-full bg-orange-500 text-white text-center py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
                                    data-oid="c:kz9fp"
                                >
                                    إدارة الطلبات
                                </Link>
                                <Link
                                    href="/admin/analytics"
                                    className="block w-full bg-indigo-500 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
                                    data-oid="hzvc_mb"
                                >
                                    التقارير والإحصائيات
                                </Link>
                                <Link
                                    href="/admin/settings"
                                    className="block w-full bg-gray-500 text-white text-center py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                                    data-oid="vd.em2."
                                >
                                    الإعدادات
                                </Link>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="bg-white rounded-lg shadow p-6" data-oid="rg.v_94">
                            <h3
                                className="text-lg font-medium text-gray-900 mb-4"
                                data-oid="fcnvsq7"
                            >
                                حالة النظام
                            </h3>
                            <div className="space-y-3" data-oid="3em4erk">
                                <div
                                    className="flex items-center justify-between"
                                    data-oid=":-a_tl5"
                                >
                                    <span className="text-sm text-gray-600" data-oid="g330.6.">
                                        الخادم
                                    </span>
                                    <span
                                        className="flex items-center text-green-600"
                                        data-oid="2v3i:it"
                                    >
                                        <span
                                            className="w-2 h-2 bg-green-500 rounded-full mr-2"
                                            data-oid="b6b0o2l"
                                        ></span>
                                        متصل
                                    </span>
                                </div>
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="mka6enx"
                                >
                                    <span className="text-sm text-gray-600" data-oid="zaohsr8">
                                        قاعدة البيانات
                                    </span>
                                    <span
                                        className="flex items-center text-green-600"
                                        data-oid="w1q-fv."
                                    >
                                        <span
                                            className="w-2 h-2 bg-green-500 rounded-full mr-2"
                                            data-oid=".htxoi5"
                                        ></span>
                                        متصلة
                                    </span>
                                </div>
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="lljuxq2"
                                >
                                    <span className="text-sm text-gray-600" data-oid="do4.ef6">
                                        خدمة الدفع
                                    </span>
                                    <span
                                        className="flex items-center text-green-600"
                                        data-oid="pg5twc5"
                                    >
                                        <span
                                            className="w-2 h-2 bg-green-500 rounded-full mr-2"
                                            data-oid="vc9cmgt"
                                        ></span>
                                        نشطة
                                    </span>
                                </div>
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="j.1shwd"
                                >
                                    <span className="text-sm text-gray-600" data-oid="f7cp5qq">
                                        الإشعارات
                                    </span>
                                    <span
                                        className="flex items-center text-yellow-600"
                                        data-oid="s2.y6gy"
                                    >
                                        <span
                                            className="w-2 h-2 bg-yellow-500 rounded-full mr-2"
                                            data-oid="ixfz8-i"
                                        ></span>
                                        تحديث مطلوب
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
