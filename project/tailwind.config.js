/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000',
          lighter: '#111111'
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          muted: '#888888'
        },
        accent: {
          DEFAULT: '#0070F3',
          hover: '#0761D1',
          light: 'rgba(0, 112, 243, 0.1)'
        },
        success: {
          DEFAULT: '#0CCE6B',
          light: 'rgba(12, 206, 107, 0.1)'
        },
        warning: {
          DEFAULT: '#F5A623',
          light: 'rgba(245, 166, 35, 0.1)'
        },
        error: {
          DEFAULT: '#FF0000',
          light: 'rgba(255, 0, 0, 0.1)'
        },
        border: {
          DEFAULT: '#333333',
          light: '#444444'
        },
        card: {
          DEFAULT: '#111111',
          hover: '#1E1E1E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};