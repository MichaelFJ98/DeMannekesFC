/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 1.7s steps(21), blink .9s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "21ch" },
        },
        blink: {
          from: { "border-right-color": "black" },
          to: { "border-right-color": "transparent" },
        },
      },
      fontFamily: {
        main: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: "#3B82F6",
        secondary: "#DBE8FE",
        accent: "#DBE8FE",
        background: "#FFFFFF"
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
