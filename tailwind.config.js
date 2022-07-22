/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
        Oswald: ["Oswald", "sans-serif"],
        Yellowtail: ["Yellowtail", "cursive"],
      },
      colors: {
        personal: {
          primary: "#F24150",
          secondary: "#D93636",
          tertiary: "#731F1F",
          neutralDark: "#261C1F",
          neutralLight: "#A69286",

          textPrimary: "#261C1F",

          buttonPrimary: "#F24150",
          buttonHover: "#D93636",
        },
      },
    },
  },
  plugins: [],
};
