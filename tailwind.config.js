/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#4A7C59',
        'light-green': '#6B9C7A',
        'forest-green': '#2E5933',
        'sky-blue': '#64B5F6',
        'warm-beige': '#F5F1EB',
        'soft-orange': '#FFA726',
      },
    },
  },
  plugins: [],
};
