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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="osc7a0l">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="yehq1h5"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="4h7s18l">
                    <div className="flex items-center justify-between mb-4" data-oid="py2x4no">
                        <Link href="/provider" className="text-white" data-oid="eet.nd3">
                            <span className="text-2xl" data-oid="fc6fv1a">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="zlbblpn">
                            الملف الشخصي
                        </h1>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-white"
                            data-oid="e5c_ttg"
                        >
                            <span className="text-xl" data-oid="zcig671">
                                {isEditing ? '💾' : '✏️'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="71e.6ys">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="lay7j2u">
                    <div className="text-center mb-6" data-oid="t-gsg.2">
                        <div
                            className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="drl9.cc"
                        >
                            <span className="text-4xl text-white" data-oid="jwd-ysw">
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
                                data-oid="rcd8ng-"
                            />
                        ) : (
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="f73:y1:">
                                {profileData.name}
                            </h2>
                        )}

                        <p className="text-gray-600 text-sm" data-oid=":c3u3f2">
                            مقدم خدمة محترف
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse mt-4"
                            data-oid=":g5qk-6"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="k7urt00"
                            >
                                <span className="text-yellow-500" data-oid="y_8ka9_">
                                    ⭐
                                </span>
                                <span className="font-semibold" data-oid="jc..pxz">
                                    {stats.rating}
                                </span>
                            </div>
                            <div className="text-gray-400" data-oid="vztbu:2">
                                •
                            </div>
                            <span className="text-gray-600" data-oid="s2pw4yl">
                                {stats.totalJobs} خدمة مكتملة
                            </span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4" data-oid="n_e.lmg">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="q0ok0t."
                        >
                            <span className="text-xl" data-oid="bcqe62q">
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
                                    data-oid=":iwn5a9"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="b4sku19">
                                    {profileData.phone}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="_gw3nuv"
                        >
                            <span className="text-xl" data-oid="3sltx2r">
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
                                    data-oid="x0gf8xn"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="-bnq5:u">
                                    {profileData.email}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="6vcif67"
                        >
                            <span className="text-xl" data-oid="_pcwqh1">
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
                                    data-oid="rcwgtba"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="mjz59fl">
                                    {profileData.location}
                                </span>
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 flex space-x-3 space-x-reverse" data-oid="k25w6eu">
                            <button
                                onClick={handleSaveProfile}
                                className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                data-oid="55i:p0:"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                data-oid="sdsx3qt"
                            >
                                إلغاء
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-sm mx-auto px-4" data-oid="c0o-q2u">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="-.q5-82">
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="6hvy82s"
                    >
                        <p className="text-2xl font-bold text-blue-600" data-oid="ik_e54_">
                            {stats.responseTime}
                        </p>
                        <p className="text-sm text-gray-600" data-oid=":q-qr9t">
                            متوسط وقت الاستجابة
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="-rsme6e"
                    >
                        <p className="text-2xl font-bold text-green-600" data-oid="dm0b1ng">
                            {stats.completionRate}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="rtn:bnw">
                            معدل إتمام الطلبات
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="zhyrxd:"
                    >
                        <p className="text-2xl font-bold text-purple-600" data-oid="b4y7vwp">
                            {stats.customerSatisfaction}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="3pkpg0u">
                            رضا العملاء
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="s:qj2a2"
                    >
                        <p className="text-2xl font-bold text-orange-600" data-oid="1jpoj0f">
                            {stats.yearsOfExperience}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="y1-xbsv">
                            سنوات الخبرة
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="oj6ya4g"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="xkfr3_k">
                        الخدمات المقدمة
                    </h3>
                    <div className="flex flex-wrap gap-2" data-oid="3_0kp-8">
                        {profileData.services.map((service, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
                                data-oid="1ravjxf"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100" data-oid=":bfvvj7">
                        <div
                            className="flex items-center justify-between text-sm text-gray-600"
                            data-oid="8i3cn2t"
                        >
                            <span data-oid="gjphe82">ساعات العمل:</span>
                            <span data-oid="bio-f6d">{profileData.workingHours}</span>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="s_gy9hf"
                >
                    <div className="flex items-center justify-between mb-4" data-oid="bafd3::">
                        <h3 className="text-lg font-bold text-gray-800" data-oid="ltpi-_m">
                            آخر التقييمات
                        </h3>
                        <Link
                            href="/provider/reviews"
                            className="text-blue-600 text-sm font-semibold"
                            data-oid="x1zeb5f"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-4" data-oid="1u29avb">
                        {recentReviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-b border-gray-100 pb-4 last:border-b-0"
                                data-oid="unq5-45"
                            >
                                <div
                                    className="flex items-start justify-between mb-2"
                                    data-oid="gny8_km"
                                >
                                    <div data-oid="v79prau">
                                        <h4
                                            className="font-semibold text-gray-800"
                                            data-oid="_ybx4e3"
                                        >
                                            {review.customer}
                                        </h4>
                                        <p className="text-xs text-gray-500" data-oid="gk:_-lz">
                                            {review.service} • {review.date}
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="r-7y9m_"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-sm ${
                                                    i < review.rating
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                                data-oid="s828ahm"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700" data-oid="-_c:2_j">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings & Actions */}
                <div className="mb-6" data-oid="3f_9jn_">
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="6y-bwsx">
                        الإعدادات والخيارات
                    </h3>

                    <div className="space-y-3" data-oid="4az5c-7">
                        <Link
                            href="/provider/services-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="7_bd15g"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="t_j.vye"
                            >
                                <span className="text-2xl" data-oid="a.7vkbx">
                                    🛠️
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="97oj9ck">
                                    إدارة الخدمات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="ef_d9av">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/availability"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="6pvfi18"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="pgcgxsm"
                            >
                                <span className="text-2xl" data-oid="m5:6lqh">
                                    📅
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="dtb_s64">
                                    أوقات التوفر
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="28iqdlj">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/documents"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="vrydirf"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="86k4x1_"
                            >
                                <span className="text-2xl" data-oid="79:gogk">
                                    📄
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="rbiupdc">
                                    الوثائق والتراخيص
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="h5z_0v.">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/notifications-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="ormhd5f"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="48ccujm"
                            >
                                <span className="text-2xl" data-oid="om713yj">
                                    🔔
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="dy53och">
                                    إعدادات الإشعارات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="j8p7dha">
                                ←
                            </span>
                        </Link>

                        <button
                            className="w-full bg-red-50 rounded-2xl p-4 shadow-sm border border-red-100 flex items-center justify-between"
                            data-oid="-pi5fb5"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid=":57qjm-"
                            >
                                <span className="text-2xl" data-oid="hd2g4f8">
                                    🚪
                                </span>
                                <span className="font-semibold text-red-600" data-oid="_m-5qmk">
                                    تسجيل الخروج
                                </span>
                            </div>
                            <span className="text-red-400" data-oid="iccv-9b">
                                ←
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="20j1kul"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="k7_g.r4">
                    <div className="flex justify-around" data-oid="6nk1-tg">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="fyhyxsv"
                        >
                            <span className="text-xl" data-oid="4bjjmdv">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="txkgxcp">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="4te3fb4"
                        >
                            <span className="text-xl" data-oid="2kt92i9">
                                📋
                            </span>
                            <span className="text-xs" data-oid="vgcdoss">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="7hlaug4"
                        >
                            <span className="text-xl" data-oid="jj4.t:z">
                                💰
                            </span>
                            <span className="text-xs" data-oid="4-9_to5">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="cs_4kcp"
                        >
                            <span className="text-xl" data-oid="q.1hsme">
                                💬
                            </span>
                            <span className="text-xs" data-oid="p9qfg6m">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="997arq:"
                        >
                            <span className="text-xl" data-oid="tj3ptw1">
                                👤
                            </span>
                            <span className="text-xs font-semibold" data-oid="mb3roap">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="l:tq1s2"></div>
        </div>
    );
}
