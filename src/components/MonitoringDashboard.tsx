import React, { useState, useEffect } from 'react';
import { Shield, Activity, Mail, Clock, AlertTriangle } from 'lucide-react';
import { monitoring } from '../utils/monitoring';

interface MonitoringStats {
    totalSubmissions: number;
    successfulSubmissions: number;
    securityEvents: number;
    averageResponseTime: number;
    lastSubmission?: string;
}

const MonitoringDashboard = () => {
    const [stats, setStats] = useState<MonitoringStats>({
        totalSubmissions: 0,
        successfulSubmissions: 0,
        securityEvents: 0,
        averageResponseTime: 0
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show if specifically enabled by developers (never show by default)
        const showDashboard = localStorage.getItem('show_monitoring') === 'true';
        setIsVisible(showDashboard);

        if (isVisible) {
            calculateStats();
        }
    }, [isVisible]);

    const calculateStats = () => {
        const events = monitoring.getRecentEvents(100);

        const submissions = events.filter(e => e.type === 'form_submission');
        const successful = submissions.filter(e => e.details.success === true);
        const security = events.filter(e =>
            e.type === 'honeypot_triggered' ||
            e.type === 'rate_limit_exceeded' ||
            e.type === 'recaptcha_failed'
        );

        const responseTimes = submissions
            .filter(e => e.details.processingTime)
            .map(e => e.details.processingTime);

        const avgResponseTime = responseTimes.length > 0
            ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
            : 0;

        const lastSubmission = submissions.length > 0
            ? submissions[submissions.length - 1].timestamp
            : undefined;

        setStats({
            totalSubmissions: submissions.length,
            successfulSubmissions: successful.length,
            securityEvents: security.length,
            averageResponseTime: Math.round(avgResponseTime),
            lastSubmission
        });
    };

    const toggleDashboard = () => {
        const newVisibility = !isVisible;
        setIsVisible(newVisibility);
        localStorage.setItem('show_monitoring', newVisibility.toString());

        if (newVisibility) {
            calculateStats();
        }
    };

    // Keyboard shortcut to toggle dashboard (Ctrl+Shift+M)
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'M') {
                e.preventDefault();
                toggleDashboard();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isVisible]);

    if (!isVisible) {
        return null; // Completely hidden from users
    }

    const successRate = stats.totalSubmissions > 0
        ? Math.round((stats.successfulSubmissions / stats.totalSubmissions) * 100)
        : 0;

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-white/95 backdrop-blur-sm border border-olive/30 rounded-lg shadow-lg p-4 w-80">
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-olive flex items-center gap-2">
                    <Shield size={16} />
                    Security Monitoring
                </h3>
                <button
                    onClick={toggleDashboard}
                    className="text-text/60 hover:text-text transition-colors"
                >
                    ×
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-olive/10 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-olive mb-1">
                        <Mail size={14} />
                        <span className="font-medium">Submissions</span>
                    </div>
                    <div className="text-2xl font-bold text-text">{stats.totalSubmissions}</div>
                    <div className="text-xs text-text/60">
                        {successRate}% success rate
                    </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                        <Activity size={14} />
                        <span className="font-medium">Successful</span>
                    </div>
                    <div className="text-2xl font-bold text-text">{stats.successfulSubmissions}</div>
                    <div className="text-xs text-text/60">
                        Emails sent
                    </div>
                </div>

                <div className="bg-red-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-red-600 mb-1">
                        <AlertTriangle size={14} />
                        <span className="font-medium">Security</span>
                    </div>
                    <div className="text-2xl font-bold text-text">{stats.securityEvents}</div>
                    <div className="text-xs text-text/60">
                        Blocked attempts
                    </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-600 mb-1">
                        <Clock size={14} />
                        <span className="font-medium">Response</span>
                    </div>
                    <div className="text-2xl font-bold text-text">{stats.averageResponseTime}ms</div>
                    <div className="text-xs text-text/60">
                        Avg time
                    </div>
                </div>
            </div>

            {stats.lastSubmission && (
                <div className="mt-3 pt-3 border-t border-olive/20">
                    <div className="text-xs text-text/60">
                        Last submission: {new Date(stats.lastSubmission).toLocaleString()}
                    </div>
                </div>
            )}

            <div className="mt-3 pt-3 border-t border-olive/20">
                <div className="flex gap-2">
                    <button
                        onClick={calculateStats}
                        className="flex-1 bg-olive/10 hover:bg-olive/20 text-olive px-3 py-1 rounded text-xs font-medium transition-colors"
                    >
                        Refresh
                    </button>
                    <button
                        onClick={() => {
                            monitoring.clearEvents();
                            calculateStats();
                        }}
                        className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1 rounded text-xs font-medium transition-colors"
                    >
                        Clear
                    </button>
                </div>
            </div>

            <div className="mt-2 text-xs text-text/60 text-center">
                Press Ctrl+Shift+M to toggle
            </div>
        </div>
    );
};

export default MonitoringDashboard; 