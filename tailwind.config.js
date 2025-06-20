/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tinos', 'ui-serif', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'ui-serif', 'Georgia', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        // New color theme
        'olive': {
          DEFAULT: '#708238',  // Primary buttons/headers
          dark: '#556B2F',     // Hover/highlights
        },
        'cream': '#FAF9F6',    // Page background
        'card': '#F2ECE4',     // Cards/forms
        'text': '#4A4A4A',     // Main text
        'energy': '#E97451',   // Energy highlights
      }
    },
  },
  plugins: [],
};
