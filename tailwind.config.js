/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#040d12",
        platinumSilver: "#EAEAEA",
        forestGreen: "#18564C",
      },
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
      },
      backgroundImage: {
        "hero-curves": "url('/assets/hero-curves.svg')",
        "about-bg": "url('/assets/test-bg.svg')",
      },
    },
  },
  plugins: [],
};
