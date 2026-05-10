import { animate, keyframes, transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'app-bg': 'var(--app-bg)',
                'nav-bg': 'var(--nav-bg)',
                'panel-bg': 'var(--panel-bg)',
                'surface-bg': 'var(--surface-bg)',
                'surface-alt': 'var(--surface-alt)',
                'text-main': 'var(--text-main)',
                'text-muted': 'var(--text-muted)',
                'accent': 'var(--accent)',
                'accent-2': 'var(--accent-2)',
            },
            keyframes: {
                blob: {
                    '0%': {transform: 'scale(1)' },
                    '33%': {transform: 'scale(1.2)' },
                    '66%': {transform: 'scale(0.8)' },
                    '100%': {transform: 'scale(1)' },
                },
            },
            animation: {
                blob: 'blob 7s infinite',
            },
            backgroundImage: {
                'skills-gradient': 'linear-gradient(38.73deg, #9929EA 0%, #4BC0C8 100%), linear-gradient(141.27deg, (rgba(0, 70. 209, 0) 50%, rgba(0, 70. 209, 0) 50%)',
            }
        },
    },
    plugins: [],
};
        