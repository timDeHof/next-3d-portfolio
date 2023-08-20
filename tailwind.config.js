/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "darkTheme": "#050816",
        "primary": "#050816",
        "secondary": "#aaa6c3",
        "tertiary": "#151030",
        "lightTheme": "#f3f3f3",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/herobg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
