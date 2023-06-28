/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
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
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        lightBlue: "#EFF5FF",
        babyBlue: "#DBE8FE",
        skyBlue: "#BFD7FE",
        cornflowerBlue: "#93BBFD",
        royalBlue: "#609AFA",
        primaryBlue: "#3B82F6",
        deepBlue: "#2570EB",
        darkBlue: "#1D64D8",
        navyBlue: "#1E55AF",
        midnightBlue: "#1E478A",
        inkBlue: "#172E54",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
