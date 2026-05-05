/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#404040',
          600: '#525252',
          500: '#666666',
          400: '#878787',
          300: '#a8a8a8',
        },
        cream: {
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#f0f0f0',
          300: '#e8e8e8',
        },
        amber: {
          eco: '#d97706',
          light: '#f59e0b',
          pale: '#fef3c7',
        },
        slate: {
          eco: '#f3f4f6',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Times New Roman"', 'Times', 'serif'],
        serif: ['"Playfair Display"', '"Times New Roman"', 'Times', 'serif'],
        body: ['"Poppins"', 'system-ui', 'sans-serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-left': 'slideLeft 0.8s ease forwards',
        counter: 'counter 2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
