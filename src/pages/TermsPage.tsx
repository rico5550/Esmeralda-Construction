import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
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

            {/* Terms Content */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-lg shadow-lg p-8 lg:p-12">
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-4">📄</div>
                            <h1 className="text-4xl font-light text-text mb-4 font-cinzel">
                                Terms of Service
                            </h1>
                            <p className="text-lg text-text/80">Esmeralda Construction</p>
                            <p className="text-olive mt-2 font-medium">Effective Date: [Insert Date]</p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-text mb-8 leading-relaxed">
                                By using this website, you agree to the following terms and conditions.
                                If you do not agree, please do not use the site.
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">1. Use of Website</h2>
                                    <p className="text-text leading-relaxed">
                                        This website provides information about our services and allows users to request quotes.
                                        You agree to use this site only for lawful purposes.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">2. No Guarantees</h2>
                                    <p className="text-text leading-relaxed">
                                        Submitting a quote request does not guarantee service availability, pricing, or project acceptance.
                                        We reserve the right to decline projects at our discretion.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">3. Intellectual Property</h2>
                                    <p className="text-text leading-relaxed">
                                        All text, images, and content on this site are the property of Esmeralda Construction
                                        and may not be reused without permission.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">4. Third-Party Links</h2>
                                    <p className="text-text leading-relaxed">
                                        Our site may contain links to third-party websites. We are not responsible for the
                                        content or practices of those sites.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">5. Limitation of Liability</h2>
                                    <p className="text-text leading-relaxed">
                                        Esmeralda Construction is not liable for any damages resulting from your use of this website.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-olive mb-4">6. Changes to These Terms</h2>
                                    <p className="text-text leading-relaxed">
                                        We may update these terms from time to time. Continued use of the site means you
                                        accept the updated terms.
                                    </p>
                                </section>
                            </div>
                        </div>

                        {/* Cross-links to other legal pages */}
                        <div className="mt-12 pt-8 border-t border-olive/20">
                            <h3 className="text-lg font-semibold text-olive mb-4">Related Information</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/privacy"
                                    className="inline-flex items-center text-text hover:text-energy transition-colors font-medium"
                                >
                                    📄 Privacy Policy
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

export default TermsPage; 