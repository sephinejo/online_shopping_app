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
      backgroundImage: {
        banner:
          "url('https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      },
    },
  },
  plugins: [],
};
