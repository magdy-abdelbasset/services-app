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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="pfg8ig1">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="6r.j8kd"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="e38n7uu">
                    <div className="flex items-center justify-between mb-4" data-oid="m7-uwy9">
                        <Link href="/provider-dashboard" className="text-white" data-oid="4q5y_bg">
                            <span className="text-2xl" data-oid="4b1q.ct">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="f1nqtw1">
                            الملف الشخصي
                        </h1>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-white"
                            data-oid="qqzmtkd"
                        >
                            <span className="text-xl" data-oid="92isgt7">
                                {isEditing ? '💾' : '✏️'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="rq6ye_u">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="fp9.lu1">
                    <div className="text-center mb-6" data-oid="vsm9pow">
                        <div
                            className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="xjit03f"
                        >
                            <span className="text-4xl text-white" data-oid="kmyzcg_">
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
                                data-oid="30e8qpm"
                            />
                        ) : (
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="wg8g:y2">
                                {profileData.name}
                            </h2>
                        )}

                        <p className="text-gray-600 text-sm" data-oid="fa63v63">
                            مقدم خدمة محترف
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse mt-4"
                            data-oid="gntg_b4"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="9.y4b2o"
                            >
                                <span className="text-yellow-500" data-oid="rry-0b9">
                                    ⭐
                                </span>
                                <span className="font-semibold" data-oid="0_.bn2_">
                                    {stats.rating}
                                </span>
                            </div>
                            <div className="text-gray-400" data-oid="4nc2mu7">
                                •
                            </div>
                            <span className="text-gray-600" data-oid="ep1hd97">
                                {stats.totalJobs} خدمة مكتملة
                            </span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4" data-oid="oo-e:r7">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="lnvy1ee"
                        >
                            <span className="text-xl" data-oid="0p9vmy8">
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
                                    data-oid="kx3ah74"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid=":3_we0u">
                                    {profileData.phone}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="602c5oh"
                        >
                            <span className="text-xl" data-oid="0h3_.xq">
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
                                    data-oid="x:f-u6n"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="uc8hwlo">
                                    {profileData.email}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="k5y2qab"
                        >
                            <span className="text-xl" data-oid="masvnx2">
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
                                    data-oid="rt5.8ya"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid=".xwjdz_">
                                    {profileData.location}
                                </span>
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 flex space-x-3 space-x-reverse" data-oid="l1o.a4m">
                            <button
                                onClick={handleSaveProfile}
                                className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                data-oid="mkd31.."
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                data-oid="gok2am1"
                            >
                                إلغاء
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-sm mx-auto px-4" data-oid="lc_0fo1">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="fkfc.:f">
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="ln1db_c"
                    >
                        <p className="text-2xl font-bold text-blue-600" data-oid="ll25408">
                            {stats.responseTime}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="8zz:7s:">
                            متوسط وقت الاستجابة
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="5dtk7:y"
                    >
                        <p className="text-2xl font-bold text-green-600" data-oid="49w613h">
                            {stats.completionRate}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="ohnnsmj">
                            معدل إتمام الطلبات
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="3wghzua"
                    >
                        <p className="text-2xl font-bold text-purple-600" data-oid="24:re.6">
                            {stats.customerSatisfaction}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="-_ycxvq">
                            رضا العملاء
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="n-ncev1"
                    >
                        <p className="text-2xl font-bold text-orange-600" data-oid="rbj-ynj">
                            {stats.yearsOfExperience}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="bxeoka2">
                            سنوات الخبرة
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="egvlht1"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="er6q_w2">
                        الخدمات المقدمة
                    </h3>
                    <div className="flex flex-wrap gap-2" data-oid="czq3qrw">
                        {profileData.services.map((service, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
                                data-oid="rppiafe"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100" data-oid="l7z:jcw">
                        <div
                            className="flex items-center justify-between text-sm text-gray-600"
                            data-oid="45n.3ne"
                        >
                            <span data-oid="ubu-l:l">ساعات العمل:</span>
                            <span data-oid="rweuvqy">{profileData.workingHours}</span>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="kk9pegr"
                >
                    <div className="flex items-center justify-between mb-4" data-oid=":00zylq">
                        <h3 className="text-lg font-bold text-gray-800" data-oid="tjaidj3">
                            آخر التقييمات
                        </h3>
                        <Link
                            href="/provider-reviews"
                            className="text-blue-600 text-sm font-semibold"
                            data-oid="l_:kz2u"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-4" data-oid="1_v6.vo">
                        {recentReviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-b border-gray-100 pb-4 last:border-b-0"
                                data-oid="qck7hpi"
                            >
                                <div
                                    className="flex items-start justify-between mb-2"
                                    data-oid="px_fyv2"
                                >
                                    <div data-oid="r_6emh7">
                                        <h4
                                            className="font-semibold text-gray-800"
                                            data-oid="eeu7woq"
                                        >
                                            {review.customer}
                                        </h4>
                                        <p className="text-xs text-gray-500" data-oid="xka0zcd">
                                            {review.service} • {review.date}
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="ug7bt01"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-sm ${
                                                    i < review.rating
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                                data-oid="xmdxke:"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700" data-oid="dx.so50">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings & Actions */}
                <div className="mb-6" data-oid="9oeo29v">
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="gv5vmd0">
                        الإعدادات والخيارات
                    </h3>

                    <div className="space-y-3" data-oid="e.iingf">
                        <Link
                            href="/provider-services-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="1yf40h."
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="19ajcws"
                            >
                                <span className="text-2xl" data-oid=":sjo6n0">
                                    🛠️
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="8h7kdia">
                                    إدارة الخدمات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="scs7-xx">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider-availability"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="xzzxqs5"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="jzlju4r"
                            >
                                <span className="text-2xl" data-oid="0pvctqq">
                                    📅
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="9ewo.9_">
                                    أوقات التوفر
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="lm_vb04">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider-documents"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="s70p96r"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="szpur:s"
                            >
                                <span className="text-2xl" data-oid="wj56cy3">
                                    📄
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="1nue50-">
                                    الوثائق والتراخيص
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="zgqvbum">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider-notifications-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="-edt7ql"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="mifng8k"
                            >
                                <span className="text-2xl" data-oid="-4xomzr">
                                    🔔
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="g263czh">
                                    إعدادات الإشعارات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="zqpxs4a">
                                ←
                            </span>
                        </Link>

                        <button
                            className="w-full bg-red-50 rounded-2xl p-4 shadow-sm border border-red-100 flex items-center justify-between"
                            data-oid="q9ci-ok"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="nk:3.p1"
                            >
                                <span className="text-2xl" data-oid="e3nxy7j">
                                    🚪
                                </span>
                                <span className="font-semibold text-red-600" data-oid=":z6_9u9">
                                    تسجيل الخروج
                                </span>
                            </div>
                            <span className="text-red-400" data-oid="l_bn:8o">
                                ←
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="-2ptu_w"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="15sen4-">
                    <div className="flex justify-around" data-oid="vywk1nj">
                        <Link
                            href="/provider-dashboard"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="7pglm2h"
                        >
                            <span className="text-xl" data-oid="1spj0w6">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="k0d7x90">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider-requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="z9muru-"
                        >
                            <span className="text-xl" data-oid="jl5a5al">
                                📋
                            </span>
                            <span className="text-xs" data-oid="902film">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider-earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="wu99v-t"
                        >
                            <span className="text-xl" data-oid="n2td17b">
                                💰
                            </span>
                            <span className="text-xs" data-oid=".-690y8">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider-messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="wzwxb__"
                        >
                            <span className="text-xl" data-oid="x35cn6q">
                                💬
                            </span>
                            <span className="text-xs" data-oid="d2l5b78">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="xq.jb2q"
                        >
                            <span className="text-xl" data-oid="q1j6gtt">
                                👤
                            </span>
                            <span className="text-xs font-semibold" data-oid="d68or0k">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="r0za8we"></div>
        </div>
    );
}
