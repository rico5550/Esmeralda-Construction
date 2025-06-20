import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AccessibilityPage = () => {
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

            {/* Accessibility Content */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-lg shadow-lg p-8 lg:p-12">
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">♿</div>
                            <h1 className="text-4xl font-light text-text mb-4 font-cinzel">
                                Accessibility Statement
                            </h1>
                            <p className="text-lg text-text/80">Esmeralda Construction</p>
                            <p className="text-olive mt-2 font-medium">Effective Date: [Insert Date]</p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text mb-8 leading-relaxed">
                                Esmeralda Construction is committed to ensuring digital accessibility for all users,
                                including those with disabilities. We are continually improving the user experience
                                for everyone and applying relevant accessibility standards wherever possible.
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">1. Accessibility Features</h2>
                                    <p className="text-text mb-4 leading-relaxed">Our website includes:</p>
                                    <ul className="list-disc pl-6 text-text space-y-2">
                                        <li>Readable font sizes and clear color contrast meeting WCAG guidelines</li>
                                        <li>Full keyboard navigation support with visible focus indicators</li>
                                        <li>Properly labeled forms with screen reader compatible associations</li>
                                        <li>Alternative text for all images and meaningful content</li>
                                        <li>Skip links for efficient navigation to main content and contact form</li>
                                        <li>ARIA landmarks and proper semantic HTML structure</li>
                                        <li>Screen reader announcements for form submission status</li>
                                        <li>Accessible image gallery with proper dialog structure</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">2. Ongoing Improvements</h2>
                                    <p className="text-text leading-relaxed">
                                        We regularly review our site and content to enhance accessibility and stay aligned
                                        with WCAG 2.1 guidelines.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">3. Feedback & Support</h2>
                                    <p className="text-text mb-4 leading-relaxed">
                                        If you encounter any accessibility barriers on our site, please contact us:
                                    </p>
                                    <div className="bg-olive/10 rounded-lg p-6 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-2xl">📧</span>
                                            <span className="text-olive font-semibold">[Your Email Address]</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-2xl">📞</span>
                                            <span className="text-olive font-semibold">[Your Business Phone]</span>
                                        </div>
                                    </div>
                                    <p className="text-text mt-4 leading-relaxed">
                                        We will do our best to address your concerns and provide assistance.
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
                                    to="/privacy"
                                    className="inline-flex items-center text-text hover:text-energy transition-colors font-medium"
                                >
                                    📄 Privacy Policy
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

export default AccessibilityPage; 