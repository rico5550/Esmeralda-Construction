import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-cream">
            {/* Header Navigation */}
            <header className="bg-white shadow-sm border-b border-olive/20 sticky top-0 z-40">
                <div className="container mx-auto px-6 lg:px-12 py-4">
                    <div className="flex items-center justify-between">
                        {/* Back to Home */}
                        <Link
                            to="/"
                            className="inline-flex items-center text-olive hover:text-energy transition-colors font-medium"
                        >
                            <ArrowLeft className="mr-2 w-5 h-5" />
                            Back to Home
                        </Link>

                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src="/images/EC_logo_masked.png"
                                alt="Esmeralda Construction Logo"
                                className="h-12 w-auto"
                            />
                        </div>

                        {/* Close/Menu placeholder */}
                        <div className="w-24"></div>
                    </div>
                </div>
            </header>

            {/* Privacy Policy Content */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-lg shadow-lg p-8 lg:p-12">
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">📄</div>
                            <h1 className="text-4xl font-light text-text mb-4 font-cinzel">
                                Privacy Policy
                            </h1>
                            <p className="text-lg text-text/80">Esmeralda Construction</p>
                            <p className="text-olive mt-2 font-medium">Effective Date: [Insert Date]</p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text mb-8 leading-relaxed">
                                At Esmeralda Construction, we value your privacy. This Privacy Policy explains how we
                                collect, use, and protect the information you share with us when using our website.
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">1. Information We Collect</h2>
                                    <p className="text-text mb-4 leading-relaxed">
                                        When you submit a quote request or contact form, we may collect:
                                    </p>
                                    <ul className="list-disc pl-6 text-text space-y-2">
                                        <li>Your name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Project details or other information you provide</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">2. How We Use Your Information</h2>
                                    <p className="text-text mb-4 leading-relaxed">We use this information to:</p>
                                    <ul className="list-disc pl-6 text-text space-y-2">
                                        <li>Respond to your inquiries and provide quotes</li>
                                        <li>Communicate with you about your project</li>
                                        <li>Improve our services</li>
                                    </ul>
                                    <p className="text-text mt-4 leading-relaxed">
                                        We do not sell or share your personal information with third parties, except when legally required.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">3. Data Security</h2>
                                    <p className="text-text leading-relaxed">
                                        We take appropriate measures to protect your information from unauthorized access,
                                        disclosure, or misuse.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">4. Cookies</h2>
                                    <p className="text-text leading-relaxed">
                                        Our website may use cookies for basic functionality or analytics. You can disable
                                        cookies in your browser settings.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">5. Your Rights</h2>
                                    <p className="text-text mb-4 leading-relaxed">You may contact us at any time to:</p>
                                    <ul className="list-disc pl-6 text-text space-y-2">
                                        <li>Access or update your information</li>
                                        <li>Request deletion of your data</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">6. Contact Us</h2>
                                    <p className="text-text leading-relaxed">
                                        If you have questions about this policy, please contact us at:<br />
                                        <span className="text-energy font-medium">[Your Email Address]</span>
                                    </p>
                                </section>
                            </div>
                        </div>

                        {/* Cross-links to other legal pages */}
                        <div className="mt-12 pt-8 border-t border-olive/20">
                            <h3 className="text-lg font-semibold text-olive mb-4">Related Information</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/terms"
                                    className="inline-flex items-center text-text hover:text-energy transition-colors font-medium"
                                >
                                    📄 Terms of Service
                                </Link>
                                <Link
                                    to="/accessibility"
                                    className="inline-flex items-center text-text hover:text-energy transition-colors font-medium"
                                >
                                    ♿ Accessibility Statement
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="bg-slate-800 text-white py-8">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link
                                to="/"
                                className="inline-flex items-center text-white hover:text-energy transition-colors font-medium"
                            >
                                <ArrowLeft className="mr-2 w-4 h-4" />
                                Return to Main Site
                            </Link>
                        </div>
                        <div className="text-white/60 text-sm">
                            © 2024 Esmeralda Construction. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage; 