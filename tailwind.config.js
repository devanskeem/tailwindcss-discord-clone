const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  darkMode: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865F2",
        gray: colors.trueGray,
      },
    },
  },
  plugins: [],
}