'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProviderProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'أحمد محمد',
        phone: '+966501234567',
        email: 'ahmed@example.com',
        location: 'الرياض - حي النرجس',
        bio: 'مقدم خدمة محترف مع خبرة 5 سنوات في مجال التنظيف والصيانة',
        services: ['تنظيف المنزل', 'صيانة السباكة', 'تصليح الأجهزة'],
        workingHours: 'من 8 صباحاً إلى 8 مساءً',
        languages: ['العربية', 'الإنجليزية'],
    });

    const stats = {
        rating: 4.9,
        totalJobs: 156,
        responseTime: '5 دقائق',
        completionRate: '98%',
        customerSatisfaction: '96%',
        yearsOfExperience: 5,
    };

    const recentReviews = [
        {
            id: 1,
            customer: 'سارة أحمد',
            rating: 5,
            comment: 'خدمة ممتازة وسريعة، أنصح بالتعامل معه',
            date: 'منذ يومين',
            service: 'تنظيف المنزل',
        },
        {
            id: 2,
            customer: 'محمد علي',
            rating: 5,
            comment: 'محترف جداً وأسعاره معقولة',
            date: 'منذ 3 أيام',
            service: 'صيانة السباكة',
        },
        {
            id: 3,
            customer: 'فاطمة محمد',
            rating: 4,
            comment: 'خدمة جيدة ولكن تأخر قليلاً',
            date: 'منذ أسبوع',
            service: 'تصليح الأجهزة',
        },
    ];

    const handleSaveProfile = () => {
        setIsEditing(false);
        alert('تم حفظ التغييرات بنجاح');
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="nmpwz3p">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="oyno:-5"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="ja6il:q">
                    <div className="flex items-center justify-between mb-4" data-oid="25rpfkq">
                        <Link href="/provider" className="text-white" data-oid="2dxo5t7">
                            <span className="text-2xl" data-oid="mk4-7qb">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="jcwvmwn">
                            الملف الشخصي
                        </h1>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-white"
                            data-oid="5m6r09g"
                        >
                            <span className="text-xl" data-oid="ne1i22m">
                                {isEditing ? '💾' : '✏️'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="_pn2uhr">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="bd-cyj-">
                    <div className="text-center mb-6" data-oid="xd2tio-">
                        <div
                            className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="tviuba7"
                        >
                            <span className="text-4xl text-white" data-oid="j8o:dzx">
                                👨‍💼
                            </span>
                        </div>

                        {isEditing ? (
                            <input
                                type="text"
                                value={profileData.name}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, name: e.target.value })
                                }
                                className="text-2xl font-bold text-gray-800 text-center border-b border-gray-300 bg-transparent outline-none"
                                data-oid="jbh6ogn"
                            />
                        ) : (
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="z9iacua">
                                {profileData.name}
                            </h2>
                        )}

                        <p className="text-gray-600 text-sm" data-oid="s0fvzu:">
                            مقدم خدمة محترف
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse mt-4"
                            data-oid="c79bil0"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="h9w:ckg"
                            >
                                <span className="text-yellow-500" data-oid="vml5im2">
                                    ⭐
                                </span>
                                <span className="font-semibold" data-oid="ssgzf94">
                                    {stats.rating}
                                </span>
                            </div>
                            <div className="text-gray-400" data-oid="04wp-sq">
                                •
                            </div>
                            <span className="text-gray-600" data-oid="9_.ov1l">
                                {stats.totalJobs} خدمة مكتملة
                            </span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4" data-oid="y0hvs9d">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid=".jv0sj5"
                        >
                            <span className="text-xl" data-oid="a:_cfwr">
                                📱
                            </span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.phone}
                                    onChange={(e) =>
                                        setProfileData({ ...profileData, phone: e.target.value })
                                    }
                                    className="flex-1 border-b border-gray-300 bg-transparent outline-none"
                                    data-oid="m--m8jz"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="7iidk1r">
                                    {profileData.phone}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid=":af5a0i"
                        >
                            <span className="text-xl" data-oid="aj0oaud">
                                📧
                            </span>
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={profileData.email}
                                    onChange={(e) =>
                                        setProfileData({ ...profileData, email: e.target.value })
                                    }
                                    className="flex-1 border-b border-gray-300 bg-transparent outline-none"
                                    data-oid="a4aqdlp"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="tzl-ic0">
                                    {profileData.email}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="6o9ldu6"
                        >
                            <span className="text-xl" data-oid="_8z6dyn">
                                📍
                            </span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.location}
                                    onChange={(e) =>
                                        setProfileData({ ...profileData, location: e.target.value })
                                    }
                                    className="flex-1 border-b border-gray-300 bg-transparent outline-none"
                                    data-oid="qw.4-wq"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="2:7m3ok">
                                    {profileData.location}
                                </span>
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 flex space-x-3 space-x-reverse" data-oid=":ve1ycz">
                            <button
                                onClick={handleSaveProfile}
                                className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                data-oid="7.g4kys"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                data-oid="wh74jj3"
                            >
                                إلغاء
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-sm mx-auto px-4" data-oid="h.m23r9">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="7m0lkw.">
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="y24ebf3"
                    >
                        <p className="text-2xl font-bold text-blue-600" data-oid="_727zvf">
                            {stats.responseTime}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="8e8e3y6">
                            متوسط وقت الاستجابة
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="sqtcwho"
                    >
                        <p className="text-2xl font-bold text-green-600" data-oid="7innsxg">
                            {stats.completionRate}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="lgggcc_">
                            معدل إتمام الطلبات
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="x_694ij"
                    >
                        <p className="text-2xl font-bold text-purple-600" data-oid="j7gwm:5">
                            {stats.customerSatisfaction}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="dx-7u4y">
                            رضا العملاء
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid=":08tfa6"
                    >
                        <p className="text-2xl font-bold text-orange-600" data-oid="-fumz98">
                            {stats.yearsOfExperience}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="m_56elh">
                            سنوات الخبرة
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="eod-s9h"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="dmxs8v_">
                        الخدمات المقدمة
                    </h3>
                    <div className="flex flex-wrap gap-2" data-oid="gr9t3ld">
                        {profileData.services.map((service, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
                                data-oid="ulje1x-"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100" data-oid="dvzbkdc">
                        <div
                            className="flex items-center justify-between text-sm text-gray-600"
                            data-oid="4x:yxfa"
                        >
                            <span data-oid="iu0irpu">ساعات العمل:</span>
                            <span data-oid="wih9d1q">{profileData.workingHours}</span>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="k7znq11"
                >
                    <div className="flex items-center justify-between mb-4" data-oid="uun9:gw">
                        <h3 className="text-lg font-bold text-gray-800" data-oid="d47nde0">
                            آخر التقييمات
                        </h3>
                        <Link
                            href="/provider/reviews"
                            className="text-blue-600 text-sm font-semibold"
                            data-oid="mbeq09y"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-4" data-oid="x_xsgfn">
                        {recentReviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-b border-gray-100 pb-4 last:border-b-0"
                                data-oid="g7kdcq8"
                            >
                                <div
                                    className="flex items-start justify-between mb-2"
                                    data-oid="tsvb50x"
                                >
                                    <div data-oid="r6dg16w">
                                        <h4
                                            className="font-semibold text-gray-800"
                                            data-oid="lxdzqet"
                                        >
                                            {review.customer}
                                        </h4>
                                        <p className="text-xs text-gray-500" data-oid="0vwibv5">
                                            {review.service} • {review.date}
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="xruk39s"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-sm ${
                                                    i < review.rating
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                                data-oid="qh959p0"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700" data-oid="v5iki6z">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings & Actions */}
                <div className="mb-6" data-oid="vuvm9k0">
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="9_-4lf6">
                        الإعدادات والخيارات
                    </h3>

                    <div className="space-y-3" data-oid="3qx7yde">
                        <Link
                            href="/provider/services-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="d__0enx"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="qwp3i7a"
                            >
                                <span className="text-2xl" data-oid="95bn6uq">
                                    🛠️
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="p-p5won">
                                    إدارة الخدمات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="m.3so2p">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/availability"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="-1fs78p"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="p0o20sm"
                            >
                                <span className="text-2xl" data-oid="d3uoywf">
                                    📅
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="7umo:wx">
                                    أوقات التوفر
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="9j1e-_b">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/documents"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="dtov-hm"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="c2o04t5"
                            >
                                <span className="text-2xl" data-oid=":jw_1m8">
                                    📄
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="mrps4.k">
                                    الوثائق والتراخيص
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="t-5l7km">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/notifications-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="0hg.m42"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="riw:ov2"
                            >
                                <span className="text-2xl" data-oid="x7g03pr">
                                    🔔
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="5vwu2kw">
                                    إعدادات الإشعارات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid=".zy_d:e">
                                ←
                            </span>
                        </Link>

                        <button
                            className="w-full bg-red-50 rounded-2xl p-4 shadow-sm border border-red-100 flex items-center justify-between"
                            data-oid="9vf433b"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="hd54gfe"
                            >
                                <span className="text-2xl" data-oid="fazs0vz">
                                    🚪
                                </span>
                                <span className="font-semibold text-red-600" data-oid="ohh3__3">
                                    تسجيل الخروج
                                </span>
                            </div>
                            <span className="text-red-400" data-oid="6vrgat4">
                                ←
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="fkxbaal"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="u:ho.nm">
                    <div className="flex justify-around" data-oid="6:efklq">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="9y06c10"
                        >
                            <span className="text-xl" data-oid="wpivb9.">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="m7::ubr">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="m.ogah1"
                        >
                            <span className="text-xl" data-oid=":.paqv6">
                                📋
                            </span>
                            <span className="text-xs" data-oid="b893:kf">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="z0r0.rk"
                        >
                            <span className="text-xl" data-oid="788h.kl">
                                💰
                            </span>
                            <span className="text-xs" data-oid="m3j510p">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="5.ld7i9"
                        >
                            <span className="text-xl" data-oid="ak-kaug">
                                💬
                            </span>
                            <span className="text-xs" data-oid="cg5lcu0">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="9kcd9cy"
                        >
                            <span className="text-xl" data-oid="pae4eej">
                                👤
                            </span>
                            <span className="text-xs font-semibold" data-oid="vi2::wt">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="z57df26"></div>
        </div>
    );
}
