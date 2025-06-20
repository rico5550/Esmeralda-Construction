import React, { useState, useEffect } from 'react';
import { X, Shield, Eye } from 'lucide-react';

const PrivacyBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already acknowledged the privacy notice
        const hasAcknowledged = localStorage.getItem('privacy_acknowledged');
        if (!hasAcknowledged) {
            setIsVisible(true);
        }
    }, []);

    const handleAcknowledge = () => {
        localStorage.setItem('privacy_acknowledged', 'true');
        localStorage.setItem('privacy_acknowledged_date', new Date().toISOString());
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-olive shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                        <div className="bg-olive/10 p-2 rounded-lg">
                            <Shield size={20} className="text-olive" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-text mb-1 text-sm">Privacy-First Website</h3>
                            <p className="text-text/80 text-sm leading-relaxed">
                                This website <span className="font-medium text-olive">does not use cookies</span>.
                                We only collect information when you submit our contact form, which is used solely to respond to your inquiry.
                                Your data is processed securely via Brevo and is never shared with third parties.
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-text/60">
                                <div className="flex items-center gap-1">
                                    <Eye size={12} />
                                    <span>No tracking</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Shield size={12} />
                                    <span>No cookies</span>
                                </div>
                                <a
                                    href="/privacy"
                                    className="text-olive hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleAcknowledge}
                        className="bg-olive hover:bg-olive-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                    >
                        Got it
                    </button>
                    <button
                        onClick={handleAcknowledge}
                        className="text-text/60 hover:text-text p-1 rounded transition-colors"
                        aria-label="Close privacy notice"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyBanner; 