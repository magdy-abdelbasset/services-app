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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="9nklm0.">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="4ri9d.r"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="sln6ecd">
                    <div className="flex items-center justify-between mb-4" data-oid="8hv6m.l">
                        <Link href="/provider" className="text-white" data-oid="gmcmlve">
                            <span className="text-2xl" data-oid="9ahz98a">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="b5dg7pq">
                            الملف الشخصي
                        </h1>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-white"
                            data-oid="v3n2w19"
                        >
                            <span className="text-xl" data-oid="ne0pfo7">
                                {isEditing ? '💾' : '✏️'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="ld-iz9w">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="7t410p1">
                    <div className="text-center mb-6" data-oid="5nvsvue">
                        <div
                            className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="d:8obc6"
                        >
                            <span className="text-4xl text-white" data-oid="sn0pv5w">
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
                                data-oid="vwn4s6."
                            />
                        ) : (
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="pgk_xoc">
                                {profileData.name}
                            </h2>
                        )}

                        <p className="text-gray-600 text-sm" data-oid="aqh-fiv">
                            مقدم خدمة محترف
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse mt-4"
                            data-oid="ppoujt_"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="pvlsdta"
                            >
                                <span className="text-yellow-500" data-oid="h-fos:0">
                                    ⭐
                                </span>
                                <span className="font-semibold" data-oid="3fye85v">
                                    {stats.rating}
                                </span>
                            </div>
                            <div className="text-gray-400" data-oid="b3eof-j">
                                •
                            </div>
                            <span className="text-gray-600" data-oid="xaseq0v">
                                {stats.totalJobs} خدمة مكتملة
                            </span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4" data-oid="unizs05">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="_m6i_-w"
                        >
                            <span className="text-xl" data-oid="2uv:4es">
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
                                    data-oid="1897-i9"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="7qg5n6j">
                                    {profileData.phone}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="r6p3k6d"
                        >
                            <span className="text-xl" data-oid="ezzjorm">
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
                                    data-oid="r8xxk.u"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="x6atrve">
                                    {profileData.email}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="m2in4fh"
                        >
                            <span className="text-xl" data-oid="254_ve-">
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
                                    data-oid="0.kj_n5"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="my5gf04">
                                    {profileData.location}
                                </span>
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 flex space-x-3 space-x-reverse" data-oid=".35vsqv">
                            <button
                                onClick={handleSaveProfile}
                                className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                data-oid="h8-o9je"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                data-oid="n3vjh7a"
                            >
                                إلغاء
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-sm mx-auto px-4" data-oid="rdcw55g">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid=":_25pgb">
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="6qmesdc"
                    >
                        <p className="text-2xl font-bold text-blue-600" data-oid="hmgs0p2">
                            {stats.responseTime}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="5-jcfvk">
                            متوسط وقت الاستجابة
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="ma5:xwv"
                    >
                        <p className="text-2xl font-bold text-green-600" data-oid="z0fss-y">
                            {stats.completionRate}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="redi4h_">
                            معدل إتمام الطلبات
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="cf752x9"
                    >
                        <p className="text-2xl font-bold text-purple-600" data-oid=":5jkll1">
                            {stats.customerSatisfaction}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="nktvu5e">
                            رضا العملاء
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="nq_v9nn"
                    >
                        <p className="text-2xl font-bold text-orange-600" data-oid="-c..jqo">
                            {stats.yearsOfExperience}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="x49g5va">
                            سنوات الخبرة
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="2oi4bl1"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="bj6e7xh">
                        الخدمات المقدمة
                    </h3>
                    <div className="flex flex-wrap gap-2" data-oid="6bv-:4d">
                        {profileData.services.map((service, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
                                data-oid="g_yhxq9"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100" data-oid="964tls:">
                        <div
                            className="flex items-center justify-between text-sm text-gray-600"
                            data-oid="vayrjir"
                        >
                            <span data-oid="wt7r-pr">ساعات العمل:</span>
                            <span data-oid="y_:mk1s">{profileData.workingHours}</span>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid=".qylazr"
                >
                    <div className="flex items-center justify-between mb-4" data-oid="r4uphio">
                        <h3 className="text-lg font-bold text-gray-800" data-oid="jvn0e1v">
                            آخر التقييمات
                        </h3>
                        <Link
                            href="/provider/reviews"
                            className="text-blue-600 text-sm font-semibold"
                            data-oid="_r1di-a"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-4" data-oid="rek_qj3">
                        {recentReviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-b border-gray-100 pb-4 last:border-b-0"
                                data-oid="rakc:bv"
                            >
                                <div
                                    className="flex items-start justify-between mb-2"
                                    data-oid="p_zs125"
                                >
                                    <div data-oid="0ctqd_8">
                                        <h4
                                            className="font-semibold text-gray-800"
                                            data-oid="w896ghx"
                                        >
                                            {review.customer}
                                        </h4>
                                        <p className="text-xs text-gray-500" data-oid="im4dfr-">
                                            {review.service} • {review.date}
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="r5nx6k5"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-sm ${
                                                    i < review.rating
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                                data-oid="puvf.z_"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700" data-oid="mbsjw..">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings & Actions */}
                <div className="mb-6" data-oid="_1e2qr7">
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="0oda.uu">
                        الإعدادات والخيارات
                    </h3>

                    <div className="space-y-3" data-oid="_i0k-5o">
                        <Link
                            href="/provider/services-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="2fur3px"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="72a_.2l"
                            >
                                <span className="text-2xl" data-oid="xrqbgvd">
                                    🛠️
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="thzsxqs">
                                    إدارة الخدمات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="tkubto1">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/availability"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="7rs0xuu"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="bqc2ih0"
                            >
                                <span className="text-2xl" data-oid="_uz0ird">
                                    📅
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="xrd6kvz">
                                    أوقات التوفر
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="-g_w3s_">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/documents"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="9.0_mmd"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="ugofo6o"
                            >
                                <span className="text-2xl" data-oid="8:yxy:f">
                                    📄
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="8ez6_l_">
                                    الوثائق والتراخيص
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="jynzyni">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/notifications-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="5pee2ps"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="2d7-_ol"
                            >
                                <span className="text-2xl" data-oid="3ner5rm">
                                    🔔
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="2zq2fjt">
                                    إعدادات الإشعارات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="g-m8ivx">
                                ←
                            </span>
                        </Link>

                        <button
                            className="w-full bg-red-50 rounded-2xl p-4 shadow-sm border border-red-100 flex items-center justify-between"
                            data-oid="lxdc:2o"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="0zq6_ph"
                            >
                                <span className="text-2xl" data-oid="h:17ikl">
                                    🚪
                                </span>
                                <span className="font-semibold text-red-600" data-oid="pf_pwnc">
                                    تسجيل الخروج
                                </span>
                            </div>
                            <span className="text-red-400" data-oid="dj8_ey:">
                                ←
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="0kxhy1p"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="fj1d:-7">
                    <div className="flex justify-around" data-oid="zcbkfwl">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="csjxtai"
                        >
                            <span className="text-xl" data-oid=":i:a6lv">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="5mt05o9">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="0ki3to:"
                        >
                            <span className="text-xl" data-oid="qa5dydh">
                                📋
                            </span>
                            <span className="text-xs" data-oid="1tgfst8">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="iba9:1g"
                        >
                            <span className="text-xl" data-oid="7sckaz9">
                                💰
                            </span>
                            <span className="text-xs" data-oid="vbzdqh1">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="3bx6zi9"
                        >
                            <span className="text-xl" data-oid="3cb:qm_">
                                💬
                            </span>
                            <span className="text-xs" data-oid="7f16cqx">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="5n-7bnz"
                        >
                            <span className="text-xl" data-oid="ux7l481">
                                👤
                            </span>
                            <span className="text-xs font-semibold" data-oid="midi-c9">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="a55:mul"></div>
        </div>
    );
}
