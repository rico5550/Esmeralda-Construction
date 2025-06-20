import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setupGlobalErrorHandling, performanceMonitoring } from './utils/monitoring';

// Initialize monitoring
setupGlobalErrorHandling();
performanceMonitoring.trackPageLoad();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
