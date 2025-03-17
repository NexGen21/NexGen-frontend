/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {transform: "translateX(-1000px)", opacity: 0},
          "100%": {transform: "translateX(0px)", opacity: 90}
        }
      },
      animation: {
        appear: "appear 2s ease-in-out"
      }
    },
  },
  plugins: [],
}

