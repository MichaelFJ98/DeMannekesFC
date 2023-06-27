/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    patterns: {
      opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      }
  },
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