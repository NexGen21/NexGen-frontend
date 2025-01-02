/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatbtn: {
          '0%, 100%': { transform: "translateY(0)"},
          '50%':{ transform: "translateY(-0.5rem)"}
        }
      },
      animation: {
        floatbtn: 'floatbtn 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

