/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        light: '#FFFFFF',
        navy: '#1A2332',
        brown: '#A35A3A',
        cream: '#FAF7EF',
        orange:'#EC840C',

        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },

        surface: {
          DEFAULT: '#282828',
          card: '#3C3C3C',
          border: '#4a4a4a',
          hover: '#454545',
          muted: '#6b6b6b',
        },
      },

      fontFamily: {
        inter_regular: ['Inter-Regular', 'sans-serif'],
        fraunces_regular: ['Fraunces-Regular', 'serif'],
        fraunces_italic: ['Fraunces-Italic', 'serif'],
      },

      boxShadow: {
        glow: '0 0 20px rgba(99,102,241,0.25)',
        'orange-glow': '0 4px 16px rgba(239,135,13,0.35)',
        'orange-glow-lg': '0 6px 24px rgba(239,135,13,0.45)',
      },

      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-in': 'slideIn 0.25s ease-out',
        'scale-in': 'scaleIn 0.15s ease-out',
        'spin-slow': 'spin 2s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        slideIn: { 
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } },
        pulseDot: { '0%, 100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.6', transform: 'scale(1.3)' } },
        shimmer: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
      },
    },
  },
  plugins: [],
}
