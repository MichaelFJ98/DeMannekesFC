/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        typing: "typing 1.7s steps(21), blink .9s infinite"
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "21ch" }
        },
        blink: {
          from: { "border-right-color": "black" },
          to: { "border-right-color": "transparent" },
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
};