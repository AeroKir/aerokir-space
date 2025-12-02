import Colors from './app/design-system/theme/Colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: Colors,
      fontFamily: {
        heading: ['Play', 'sans-serif'], // H1, H2, etc.
        body: ['Inter', 'sans-serif'], // Paragraphs, default text
      },
      screens: {
        '3xl': '120rem', // 1920px
      },
    },
  },
  plugins: [],
};
