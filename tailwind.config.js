/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      logo: ['Ysabeau SC'],
      nav: ['Mukta'],
    },
    extend: {
      colors: {
        brand: '#4F4557',
      },
    },
  },
  plugins: [],
};
