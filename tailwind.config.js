/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        sen: "Sen",
      },
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#fff",
        secondary: "#01EEFF",
        lightdark: "#34404C",
        dark: "#151525",
        semidark: "#34404C",
        navdark: "#323846",
      },

      borderWidth: {
        3: "3px",
        10: "10px",
      },
      width: {
        70: "285px",
        600: "600px",
      },
      height: {
        300: "300px",
      },
      screens: {
        "2xl": "1320px",
      },
      padding: {
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
