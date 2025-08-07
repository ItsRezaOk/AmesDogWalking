/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A7C59',
        secondary: '#6B9C7A',
        beige: '#F5F1EB',
        accent: '#FFA726',
        sky: '#87CEEB',
        brown: '#8B5E3C',
      },
    },
  },
  plugins: [],
};
