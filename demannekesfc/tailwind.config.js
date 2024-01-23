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
        background: "#FFFFFF",
        text: "#000000",
        error: "#FF0000",
        success: "#00FF00",
        l1: "#ecf2f5",
        c1: "#24313a",
        c2: "#121b21",
        c3: "#172027",
        dark: {
          primary: "#1F4E79",
          secondary: "#1D2B45",
          accent: "#1D2B45",
          background: "#1A202C",
          text: "#FFFFFF",
          error: "#FF6347",
          success: "#00FF7F",
          l1: "#ecf2f5",
          c1: "#24313a",
          c2: "#121b21",
          c3: "#172027",
        },
        temp: {
          primary: "#5E2CA5",
          secondary: "#F9A03F",
          accent: "#EBC17E",
          background: "#161616",
          text: "#FFFFFF",
          gray: "#7F7F7F",
          error: "#FF5353",
          success: "#7ED957",
          l1: "#ecf2f5",
          c1: "#24313a",
          c2: "#121b21",
          c3: "#172027",
        },
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
