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
        <div className="min-h-screen bg-gray-50" dir="rtl" data-oid="sqof:2u">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                data-oid="q5y3.zu"
            >
                <div className="max-w-sm mx-auto px-4 py-6" data-oid="h1kgdpj">
                    <div className="flex items-center justify-between mb-4" data-oid="ssh2crx">
                        <Link href="/provider" className="text-white" data-oid="p9vb59z">
                            <span className="text-2xl" data-oid="td4kfvr">
                                ←
                            </span>
                        </Link>
                        <h1 className="text-xl font-bold" data-oid="67d2uy9">
                            الملف الشخصي
                        </h1>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-white"
                            data-oid="w_e.k10"
                        >
                            <span className="text-xl" data-oid="wrj9-ub">
                                {isEditing ? '💾' : '✏️'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10" data-oid="j0cafr1">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6" data-oid="pmg8.n1">
                    <div className="text-center mb-6" data-oid="jipx0i9">
                        <div
                            className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="3gfzoei"
                        >
                            <span className="text-4xl text-white" data-oid="60nu20i">
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
                                data-oid="0rbwejs"
                            />
                        ) : (
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="n0qazq4">
                                {profileData.name}
                            </h2>
                        )}

                        <p className="text-gray-600 text-sm" data-oid="kukxb.f">
                            مقدم خدمة محترف
                        </p>

                        <div
                            className="flex items-center justify-center space-x-4 space-x-reverse mt-4"
                            data-oid="_fuxtps"
                        >
                            <div
                                className="flex items-center space-x-1 space-x-reverse"
                                data-oid="wqi-1si"
                            >
                                <span className="text-yellow-500" data-oid="2mtl7c2">
                                    ⭐
                                </span>
                                <span className="font-semibold" data-oid="fc0cw27">
                                    {stats.rating}
                                </span>
                            </div>
                            <div className="text-gray-400" data-oid="_sgydgn">
                                •
                            </div>
                            <span className="text-gray-600" data-oid="hu4iwka">
                                {stats.totalJobs} خدمة مكتملة
                            </span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4" data-oid="gdfw6..">
                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="ac4zhoy"
                        >
                            <span className="text-xl" data-oid="rmr4_uh">
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
                                    data-oid="hrpd-dm"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid=":665-y.">
                                    {profileData.phone}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="pfn9ecs"
                        >
                            <span className="text-xl" data-oid="iqjhn7e">
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
                                    data-oid="3ti6a-q"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="_ocu63c">
                                    {profileData.email}
                                </span>
                            )}
                        </div>

                        <div
                            className="flex items-center space-x-3 space-x-reverse"
                            data-oid="47vru.i"
                        >
                            <span className="text-xl" data-oid="cr8y2wd">
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
                                    data-oid="v-ub9.a"
                                />
                            ) : (
                                <span className="text-gray-700" data-oid="9tvn169">
                                    {profileData.location}
                                </span>
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-6 flex space-x-3 space-x-reverse" data-oid="2j:e8y_">
                            <button
                                onClick={handleSaveProfile}
                                className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold"
                                data-oid="nwl.ep7"
                            >
                                حفظ التغييرات
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold"
                                data-oid="ijtp:mh"
                            >
                                إلغاء
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-sm mx-auto px-4" data-oid="4rhe2ud">
                <div className="grid grid-cols-2 gap-4 mb-6" data-oid="ln.gl-v">
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="nhu-yls"
                    >
                        <p className="text-2xl font-bold text-blue-600" data-oid="92-61bv">
                            {stats.responseTime}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="u:1so7-">
                            متوسط وقت الاستجابة
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="5bww4ua"
                    >
                        <p className="text-2xl font-bold text-green-600" data-oid="61orvph">
                            {stats.completionRate}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="f0k9_ba">
                            معدل إتمام الطلبات
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="1sdi.du"
                    >
                        <p className="text-2xl font-bold text-purple-600" data-oid="vn1cljf">
                            {stats.customerSatisfaction}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="o1rn9va">
                            رضا العملاء
                        </p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                        data-oid="5sl0jc-"
                    >
                        <p className="text-2xl font-bold text-orange-600" data-oid=":p8hl4_">
                            {stats.yearsOfExperience}
                        </p>
                        <p className="text-sm text-gray-600" data-oid="gloj5vw">
                            سنوات الخبرة
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="nmij31t"
                >
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="alid14_">
                        الخدمات المقدمة
                    </h3>
                    <div className="flex flex-wrap gap-2" data-oid="7_._tg5">
                        {profileData.services.map((service, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
                                data-oid="eh9j1mw"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100" data-oid=":xzd9d1">
                        <div
                            className="flex items-center justify-between text-sm text-gray-600"
                            data-oid="w6ua.8o"
                        >
                            <span data-oid="cq:3t:d">ساعات العمل:</span>
                            <span data-oid=":t7-ite">{profileData.workingHours}</span>
                        </div>
                    </div>
                </div>

                {/* Recent Reviews */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
                    data-oid="y11uhr1"
                >
                    <div className="flex items-center justify-between mb-4" data-oid="t4qobj.">
                        <h3 className="text-lg font-bold text-gray-800" data-oid="e5kg0jj">
                            آخر التقييمات
                        </h3>
                        <Link
                            href="/provider/reviews"
                            className="text-blue-600 text-sm font-semibold"
                            data-oid="o::mpmj"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="space-y-4" data-oid="th3oasv">
                        {recentReviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-b border-gray-100 pb-4 last:border-b-0"
                                data-oid="k1e5i8l"
                            >
                                <div
                                    className="flex items-start justify-between mb-2"
                                    data-oid="1yqtq40"
                                >
                                    <div data-oid="_4ag.i-">
                                        <h4
                                            className="font-semibold text-gray-800"
                                            data-oid="f0k6mqk"
                                        >
                                            {review.customer}
                                        </h4>
                                        <p className="text-xs text-gray-500" data-oid="fi7r1i_">
                                            {review.service} • {review.date}
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-center space-x-1 space-x-reverse"
                                        data-oid="vffo7ny"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-sm ${
                                                    i < review.rating
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                                data-oid="aemec8z"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700" data-oid="e.byrdc">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings & Actions */}
                <div className="mb-6" data-oid=".rvfq6v">
                    <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="-i9pat.">
                        الإعدادات والخيارات
                    </h3>

                    <div className="space-y-3" data-oid="jzdet.0">
                        <Link
                            href="/provider/services-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="9:58y0t"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="c500n68"
                            >
                                <span className="text-2xl" data-oid="6r_8qed">
                                    🛠️
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="1unlpwa">
                                    إدارة الخدمات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="fbz04oo">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/availability"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid=":wtn_uo"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="pvsfsmf"
                            >
                                <span className="text-2xl" data-oid="08n8wcq">
                                    📅
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="-y.18sn">
                                    أوقات التوفر
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="k.x4jhf">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/documents"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="3ix51.q"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="ap5dm-k"
                            >
                                <span className="text-2xl" data-oid=":95bcmg">
                                    📄
                                </span>
                                <span className="font-semibold text-gray-800" data-oid="rhrrv0e">
                                    الوثائق والتراخيص
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="v0pqsbe">
                                ←
                            </span>
                        </Link>

                        <Link
                            href="/provider/notifications-settings"
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                            data-oid="_79whzb"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="33pa_m1"
                            >
                                <span className="text-2xl" data-oid="ck-8jd0">
                                    🔔
                                </span>
                                <span className="font-semibold text-gray-800" data-oid=".l.03a:">
                                    إعدادات الإشعارات
                                </span>
                            </div>
                            <span className="text-gray-400" data-oid="inywdyt">
                                ←
                            </span>
                        </Link>

                        <button
                            className="w-full bg-red-50 rounded-2xl p-4 shadow-sm border border-red-100 flex items-center justify-between"
                            data-oid="hu49w0c"
                        >
                            <div
                                className="flex items-center space-x-3 space-x-reverse"
                                data-oid="-j.jj0q"
                            >
                                <span className="text-2xl" data-oid="zlxygp:">
                                    🚪
                                </span>
                                <span className="font-semibold text-red-600" data-oid="us1f4f3">
                                    تسجيل الخروج
                                </span>
                            </div>
                            <span className="text-red-400" data-oid="kk1dbi-">
                                ←
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
                data-oid="cu2i9m0"
            >
                <div className="max-w-sm mx-auto px-4 py-3" data-oid="ldz7fqc">
                    <div className="flex justify-around" data-oid="-:iphfq">
                        <Link
                            href="/provider"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="yicw2l7"
                        >
                            <span className="text-xl" data-oid="x7:ae_r">
                                🏠
                            </span>
                            <span className="text-xs" data-oid="ps4-b_1">
                                الرئيسية
                            </span>
                        </Link>
                        <Link
                            href="/provider/requests"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="nnw.x34"
                        >
                            <span className="text-xl" data-oid="bdrxk1b">
                                📋
                            </span>
                            <span className="text-xs" data-oid="b_59z_e">
                                الطلبات
                            </span>
                        </Link>
                        <Link
                            href="/provider/earnings"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="afz44c7"
                        >
                            <span className="text-xl" data-oid="so5a_xp">
                                💰
                            </span>
                            <span className="text-xs" data-oid="w7wtxql">
                                الأرباح
                            </span>
                        </Link>
                        <Link
                            href="/provider/messages"
                            className="flex flex-col items-center space-y-1 text-gray-400"
                            data-oid="4dc24-1"
                        >
                            <span className="text-xl" data-oid="3:guwxo">
                                💬
                            </span>
                            <span className="text-xs" data-oid="5g.zo1u">
                                الرسائل
                            </span>
                        </Link>
                        <button
                            className="flex flex-col items-center space-y-1 text-green-600"
                            data-oid="-pxwawo"
                        >
                            <span className="text-xl" data-oid="vr534kr">
                                👤
                            </span>
                            <span className="text-xs font-semibold" data-oid="qnpox2r">
                                الملف الشخصي
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Padding for bottom navigation */}
            <div className="h-20" data-oid="y09fop3"></div>
        </div>
    );
}
