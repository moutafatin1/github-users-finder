/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#141d2f',
        'dark-blue': '#1e2a47',
        primary: '#0079ff',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
