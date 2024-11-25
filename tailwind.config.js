/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        chinese: ['"ZCOOL XiaoWei"', 'serif'],
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          light: '#f8f9fa',
          DEFAULT: '#343a40',
          dark: '#212529',
        },
      },
    },
  },
  plugins: [],
};