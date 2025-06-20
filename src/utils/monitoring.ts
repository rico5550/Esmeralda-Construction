// Security and Form Monitoring Utilities
export interface SecurityEvent {
    type: 'honeypot_triggered' | 'rate_limit_exceeded' | 'recaptcha_failed' | 'form_submission' | 'error';
    ip?: string;
    userAgent?: string;
    timestamp: string;
    details: Record<string, any>;
}

export interface FormSubmissionEvent {
    success: boolean;
    services: string[];
    timestamp: string;
    userAgent?: string;
    recaptchaScore?: number;
    processingTime?: number;
    error?: string;
}

class MonitoringService {
    private static instance: MonitoringService;
    private eventQueue: SecurityEvent[] = [];
    private maxQueueSize = 100;

    static getInstance(): MonitoringService {
        if (!MonitoringService.instance) {
            MonitoringService.instance = new MonitoringService();
        }
        return MonitoringService.instance;
    }

    // Log security events
    logSecurityEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
        const securityEvent: SecurityEvent = {
            ...event,
            timestamp: new Date().toISOString(),
        };

        // Add to queue
        this.eventQueue.push(securityEvent);

        // Keep queue size manageable
        if (this.eventQueue.length > this.maxQueueSize) {
            this.eventQueue.shift();
        }

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
            console.warn('🔒 Security Event:', securityEvent);
        }

        // In production, you could send to analytics service
        this.sendToAnalytics(securityEvent);
    }

    // Log form submissions
    logFormSubmission(event: FormSubmissionEvent): void {
        const submissionEvent: SecurityEvent = {
            type: 'form_submission',
            timestamp: new Date().toISOString(),
            details: event,
        };

        this.logSecurityEvent(submissionEvent);

        // Track successful submissions separately
        if (event.success) {
            this.trackSuccessfulSubmission(event);
        }
    }

    // Track successful form submissions for analytics
    private trackSuccessfulSubmission(event: FormSubmissionEvent): void {
        // Google Analytics 4 event tracking (if GA is added)
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'form_submission', {
                event_category: 'engagement',
                event_label: 'contact_form',
                services_count: event.services.length,
                recaptcha_score: event.recaptchaScore,
                processing_time: event.processingTime,
            });
        }

        // Custom analytics endpoint (optional)
        this.sendFormAnalytics(event);
    }

    // Log JavaScript errors
    logError(error: Error, context?: Record<string, any>): void {
        const errorEvent: SecurityEvent = {
            type: 'error',
            timestamp: new Date().toISOString(),
            details: {
                message: error.message,
                stack: error.stack,
                name: error.name,
                context: context || {},
                url: typeof window !== 'undefined' ? window.location.href : 'unknown',
                userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
            },
        };

        this.logSecurityEvent(errorEvent);
    }

    // Send events to analytics service
    private async sendToAnalytics(event: SecurityEvent): Promise<void> {
        try {
            // In production, send to your analytics service
            // For now, we'll just log high-priority events
            if (event.type !== 'form_submission') {
                console.log('📊 Analytics Event:', {
                    type: event.type,
                    timestamp: event.timestamp,
                    details: event.details,
                });
            }

            // Optional: Send to external service like Mixpanel, Amplitude, etc.
            // await fetch('/api/analytics', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(event),
            // });
        } catch (error) {
            console.error('Failed to send analytics:', error);
        }
    }

    // Send form analytics
    private async sendFormAnalytics(event: FormSubmissionEvent): Promise<void> {
        try {
            // Track form conversion metrics
            console.log('📈 Form Analytics:', {
                timestamp: event.timestamp,
                services_selected: event.services.length,
                recaptcha_score: event.recaptchaScore,
                processing_time: event.processingTime,
            });

            // Optional: Send to business intelligence service
            // This helps track form completion rates, popular services, etc.
        } catch (error) {
            console.error('Failed to send form analytics:', error);
        }
    }

    // Get recent security events (for debugging)
    getRecentEvents(limit = 10): SecurityEvent[] {
        return this.eventQueue.slice(-limit);
    }

    // Clear event queue
    clearEvents(): void {
        this.eventQueue = [];
    }
}

// Export singleton instance
export const monitoring = MonitoringService.getInstance();

// Global error handler setup
export const setupGlobalErrorHandling = (): void => {
    if (typeof window === 'undefined') return;

    // Catch unhandled JavaScript errors
    window.addEventListener('error', (event) => {
        monitoring.logError(new Error(event.message), {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
        });
    });

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
        monitoring.logError(new Error(`Unhandled Promise Rejection: ${event.reason}`), {
            reason: event.reason,
        });
    });

    // Monitor form errors specifically
    document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        if (form && form.id === 'contact-form') {
            // Track form submission attempts
            monitoring.logSecurityEvent({
                type: 'form_submission',
                details: {
                    attempted: true,
                    formId: form.id,
                    timestamp: new Date().toISOString(),
                },
            });
        }
    });
};

// Privacy compliance helpers
export const privacyCompliance = {
    // Check if user has consented to cookies
    hasConsentedToCookies(): boolean {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('cookie_consent') === 'accepted';
    },

    // Set cookie consent
    setConsentStatus(status: 'accepted' | 'declined'): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem('cookie_consent', status);
        localStorage.setItem('consent_date', new Date().toISOString());
    },

    // Check if we need to show cookie banner
    needsConsentBanner(): boolean {
        if (typeof window === 'undefined') return false;
        return !localStorage.getItem('cookie_consent');
    },

    // Clear user data (for GDPR compliance)
    clearUserData(): void {
        if (typeof window === 'undefined') return;
        localStorage.clear();
        sessionStorage.clear();
    },
};

// Performance monitoring
export const performanceMonitoring = {
    // Track form submission performance
    trackFormPerformance(startTime: number, success: boolean): void {
        const endTime = performance.now();
        const duration = endTime - startTime;

        monitoring.logSecurityEvent({
            type: 'form_submission',
            details: {
                performance: true,
                duration_ms: Math.round(duration),
                success,
                timestamp: new Date().toISOString(),
            },
        });
    },

    // Track page load performance
    trackPageLoad(): void {
        if (typeof window === 'undefined') return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

                monitoring.logSecurityEvent({
                    type: 'form_submission', // Reusing existing type for simplicity
                    details: {
                        page_load: true,
                        load_time: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
                        dom_ready: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
                        timestamp: new Date().toISOString(),
                    },
                });
            }, 1000);
        });
    },
};

export default monitoring; 