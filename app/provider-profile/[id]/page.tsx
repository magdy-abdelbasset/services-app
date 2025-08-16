'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ServiceProvider {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    completedJobs: number;
    price: string;
    estimatedTime: string;
    description: string;
    verified: boolean;
    responseTime: string;
    distance: string;
    isOnline: boolean;
    joinDate: string;
    specialties: string[];
    workingHours: string;
    languages: string[];
    location: string;
    bio: string;
    gallery: string[];
    reviews: Review[];
    services: ServiceOffering[];
}

interface Review {
    id: number;
    customerName: string;
    customerAvatar: string;
    rating: number;
    comment: string;
    date: string;
    serviceName: string;
}

interface ServiceOffering {
    id: number;
    name: string;
    price: string;
    duration: string;
    description: string;
}

export default function ProviderProfilePage() {
    const params = useParams();
    const providerId = params.id as string;

    const [provider, setProvider] = useState<ServiceProvider | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'services' | 'gallery'>(
        'overview',
    );
    const [showContactModal, setShowContactModal] = useState(false);

    // Mock provider data - in real app, this would come from API
    const mockProvider: ServiceProvider = {
        id: parseInt(providerId),
        name: 'أحمد علي محمد',
        avatar: '👨‍💼',
        rating: 4.9,
        completedJobs: 156,
        price: '45 ريال',
        estimatedTime: '25 دقيقة',
        description: 'خبرة 5 سنوات في تنظيف المنازل، أستخدم مواد تنظيف صديقة للبيئة',
        verified: true,
        responseTime: '5 دقائق',
        distance: '2.5 كم',
        isOnline: true,
        joinDate: '2019-03-15',
        specialties: ['تنظيف عام', 'تنظيف السجاد', 'تنظيف النوافذ', 'تنظيف المطابخ'],
        workingHours: 'السبت - الخميس: 8:00 ص - 10:00 م',
        languages: ['العربية', 'الإنجليزية'],
        location: 'الرياض، حي النرجس',
        bio: 'مرحباً! أنا أحمد، متخصص في خدمات التنظيف المنزلي منذ أكثر من 5 سنوات. أؤمن بأن النظافة هي أساس الراحة والصحة، لذلك أحرص على تقديم خدمة متميزة باستخدام أفضل المواد والأدوات. أعمل بدقة واهتمام بالتفاصيل لضمان رضا عملائي الكرام.',
        gallery: ['🏠', '🧽', '🪟', '🚿', '🍽️', '🛋️'],
        reviews: [
            {
                id: 1,
                customerName: 'سارة أحمد',
                customerAvatar: '👩‍💼',
                rating: 5,
                comment:
                    'خدمة ممتازة جداً! أحمد محترف ودقيق في عمله. المنزل أصبح نظيفاً بشكل مثالي.',
                date: '2024-01-15',
                serviceName: 'تنظيف عام',
            },
            {
                id: 2,
                customerName: 'محمد عبدالله',
                customerAvatar: '👨‍💻',
                rating: 5,
                comment: 'سرعة في الاستجابة ودقة في المواعيد. أنصح بالتعامل معه بقوة.',
                date: '2024-01-10',
                serviceName: 'تنظيف المطبخ',
            },
            {
                id: 3,
                customerName: 'فاطمة علي',
                customerAvatar: '👩‍🏫',
                rating: 4,
                comment:
                    'عمل جيد ونظافة ممتازة. الوقت كان أطول قليلاً من المتوقع لكن النتيجة مرضية.',
                date: '2024-01-05',
                serviceName: 'تنظيف السجاد',
            },
        ],

        services: [
            {
                id: 1,
                name: 'تنظيف عام للمنزل',
                price: '45 ريال',
                duration: '2-3 ساعات',
                description: 'تنظيف شامل لجميع غرف المنزل',
            },
            {
                id: 2,
                name: 'تنظيف المطبخ',
                price: '35 ريال',
                duration: '1-2 ساعة',
                description: 'تنظيف عميق للمطبخ والأجهزة',
            },
            {
                id: 3,
                name: 'تنظيف الحمامات',
                price: '25 ريال',
                duration: '30-45 دقيقة',
                description: 'تنظيف وتعقيم الحمامات',
            },
            {
                id: 4,
                name: 'تنظيف النوافذ',
                price: '20 ريال',
                duration: '30 دقيقة',
                description: 'تنظيف النوافذ من الداخل والخارج',
            },
        ],
    };

    useEffect(() => {
        // Simulate API call
        setProvider(mockProvider);
    }, [providerId]);

    const handleRequestService = (service?: ServiceOffering) => {
        if (typeof window !== 'undefined' && (window as any).showNotification) {
            (window as any).showNotification({
                type: 'info',
                title: 'جاري تحضير طلبك',
                message: `سيتم توجيهك لصفحة طلب الخدمة من ${provider?.name}`,
                duration: 3000,
            });
        }

        const serviceName = service ? service.name : 'خدمة عامة';
        setTimeout(() => {
            window.location.href = `/request-service?provider=${providerId}&service=${encodeURIComponent(serviceName)}`;
        }, 1000);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const getJoinDuration = () => {
        const joinDate = new Date(provider?.joinDate || '');
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - joinDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const years = Math.floor(diffDays / 365);
        const months = Math.floor((diffDays % 365) / 30);

        if (years > 0) {
            return `${years} ${years === 1 ? 'سنة' : 'سنوات'}`;
        } else if (months > 0) {
            return `${months} ${months === 1 ? 'شهر' : 'أشهر'}`;
        } else {
            return 'أقل من شهر';
        }
    };

    if (!provider) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
                <div className="text-center">
                    <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">جاري تحميل الملف الشخصي...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-sm mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <Link
                            href="/services"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            <span className="text-lg">←</span>
                        </Link>
                        <h1 className="text-lg font-bold">الملف الشخصي</h1>
                        <button
                            onClick={() => setShowContactModal(true)}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                            <span className="text-lg">📞</span>
                        </button>
                    </div>

                    {/* Provider Header Info */}
                    <div className="text-center">
                        <div className="relative inline-block mb-4">
                            <div className="text-6xl">{provider.avatar}</div>
                            {provider.isOnline && (
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                            )}
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{provider.name}</h2>
                        <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
                            <div className="flex items-center space-x-1 space-x-reverse">
                                <span className="text-yellow-400">⭐</span>
                                <span className="font-semibold">{provider.rating}</span>
                            </div>
                            <span>({provider.completedJobs} خدمة مكتملة)</span>
                            {provider.verified && (
                                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                                    موثق ✓
                                </span>
                            )}
                        </div>
                        <p className="text-white/90 text-sm mb-4">{provider.description}</p>
                        <div className="flex items-center justify-center space-x-6 space-x-reverse text-sm">
                            <div className="text-center">
                                <div className="font-bold">{provider.distance}</div>
                                <div className="text-white/80">المسافة</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold">{provider.responseTime}</div>
                                <div className="text-white/80">وقت الاستجابة</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold">{getJoinDuration()}</div>
                                <div className="text-white/80">في الخدمة</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-sm mx-auto px-4 -mt-4 relative z-10">
                <div className="bg-white rounded-2xl shadow-lg p-1 mb-6">
                    <div className="grid grid-cols-4 gap-1">
                        {[
                            { key: 'overview', label: 'نظرة عامة', icon: '📋' },
                            { key: 'services', label: 'الخدمات', icon: '🛠️' },
                            { key: 'reviews', label: 'التقييمات', icon: '⭐' },
                            { key: 'gallery', label: 'المعرض', icon: '📸' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as any)}
                                className={`p-3 rounded-xl text-xs font-semibold transition-colors ${
                                    activeTab === tab.key
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <div className="text-lg mb-1">{tab.icon}</div>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-sm mx-auto px-4 pb-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-4">
                        {/* Bio */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">نبذة شخصية</h3>
                            <p className="text-gray-700 leading-relaxed">{provider.bio}</p>
                        </div>

                        {/* Specialties */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">التخصصات</h3>
                            <div className="flex flex-wrap gap-2">
                                {provider.specialties.map((specialty, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                تفاصيل إضافية
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <span className="text-xl">📍</span>
                                    <div>
                                        <div className="font-semibold text-gray-800">الموقع</div>
                                        <div className="text-gray-600 text-sm">
                                            {provider.location}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <span className="text-xl">🕒</span>
                                    <div>
                                        <div className="font-semibold text-gray-800">
                                            ساعات العمل
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            {provider.workingHours}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <span className="text-xl">🗣️</span>
                                    <div>
                                        <div className="font-semibold text-gray-800">اللغات</div>
                                        <div className="text-gray-600 text-sm">
                                            {provider.languages.join(', ')}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <span className="text-xl">📅</span>
                                    <div>
                                        <div className="font-semibold text-gray-800">
                                            تاريخ الانضمام
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            {formatDate(provider.joinDate)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Services Tab */}
                {activeTab === 'services' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                الخدمات المتاحة
                            </h3>
                            <div className="space-y-4">
                                {provider.services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="border border-gray-100 rounded-xl p-4"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-gray-800">
                                                {service.name}
                                            </h4>
                                            <span className="text-blue-600 font-bold">
                                                {service.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {service.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 text-sm">
                                                ⏱️ {service.duration}
                                            </span>
                                            <button
                                                onClick={() => handleRequestService(service)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                                            >
                                                طلب الخدمة
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">التقييمات</h3>
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <span className="text-yellow-500">⭐</span>
                                    <span className="font-bold">{provider.rating}</span>
                                    <span className="text-gray-500">
                                        ({provider.reviews.length})
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {provider.reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="border-b border-gray-100 pb-4 last:border-b-0"
                                    >
                                        <div className="flex items-start space-x-3 space-x-reverse mb-2">
                                            <div className="text-2xl">{review.customerAvatar}</div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4 className="font-semibold text-gray-800">
                                                        {review.customerName}
                                                    </h4>
                                                    <div className="flex items-center space-x-1 space-x-reverse">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`text-sm ${
                                                                    i < review.rating
                                                                        ? 'text-yellow-500'
                                                                        : 'text-gray-300'
                                                                }`}
                                                            >
                                                                ⭐
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 text-sm mb-2">
                                                    {review.comment}
                                                </p>
                                                <div className="flex justify-between items-center text-xs text-gray-500">
                                                    <span>{review.serviceName}</span>
                                                    <span>{formatDate(review.date)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                معرض الأعمال
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {provider.gallery.map((image, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-4xl"
                                    >
                                        {image}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Fixed Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <div className="max-w-sm mx-auto flex space-x-3 space-x-reverse">
                    <button
                        onClick={() => handleRequestService()}
                        className="flex-1 bg-blue-500 text-white py-4 rounded-2xl font-semibold"
                    >
                        طلب خدمة - {provider.price}
                    </button>
                    <Link
                        href={`/chat/${provider.id}`}
                        className="px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center"
                    >
                        💬
                    </Link>
                </div>
            </div>

            {/* Contact Modal */}
            {showContactModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setShowContactModal(false)}
                >
                    <div
                        className="bg-white w-full max-w-sm mx-4 rounded-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                            معلومات التواصل
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl">
                                <span className="text-2xl">📱</span>
                                <div>
                                    <div className="font-semibold text-gray-800">رقم الهاتف</div>
                                    <div className="text-gray-600">+966 50 123 4567</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <div className="font-semibold text-gray-800">
                                        البريد الإلكتروني
                                    </div>
                                    <div className="text-gray-600">ahmed.ali@example.com</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl">
                                <span className="text-2xl">💬</span>
                                <div>
                                    <div className="font-semibold text-gray-800">واتساب</div>
                                    <div className="text-gray-600">+966 50 123 4567</div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowContactModal(false)}
                            className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold mt-6"
                        >
                            إغلاق
                        </button>
                    </div>
                </div>
            )}

            {/* Padding for bottom actions */}
            <div className="h-24"></div>
        </div>
    );
}
