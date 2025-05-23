/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gold': {
          50: '#FDF9E7',
          100: '#FCF3CF',
          200: '#F9E7A0',
          300: '#F6DB71',
          400: '#F3CF41',
          500: '#D4AF37', // Primary gold
          600: '#B08E2E',
          700: '#8D6E25',
          800: '#6A4F1C',
          900: '#473013',
        },
        'black': {
          50: '#EAEAEA',
          100: '#D6D6D6',
          200: '#ADADAD',
          300: '#838383',
          400: '#5A5A5A',
          500: '#303030',
          600: '#282828',
          700: '#202020',
          800: '#181818',
          900: '#111111', // Primary black
        },
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};