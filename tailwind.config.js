/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { 50: '#f3f6fb', 100: '#e1e9f5', 200: '#c3d3ea', 500: '#3b6fb6', 600: '#234f93', 700: '#17396d', 800: '#102a54', 900: '#0a1c3a' },
        sun: { 400: '#f7b733', 500: '#e8960c' },
      },
    },
  },
  plugins: [],
}
