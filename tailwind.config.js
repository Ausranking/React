/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url(/src/images/bg-header.jpg)",
        "main-bg": "url(/src/images/home-bg.jpg)",
      },
      height: {
        "screen-half": "70vh",
        "1/3": "30vh",
      },
      textColor: {
        "primary-dark": "#5651e5",
      },
    },
  },
  plugins: [],
};


