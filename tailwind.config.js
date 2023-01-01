/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        appear: 'appear 0.3s ease',
      },
      keyframes: {
        appear: {
          '0%': { tranlateY: '-22%' },
          '100%': { tranlateY: '0%' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
};
