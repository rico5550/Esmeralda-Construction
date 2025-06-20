import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
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

            {/* Projects Content */}
            <Projects />

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

export default ProjectsPage; 