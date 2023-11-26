/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'darkGreen': '#040d12' ,
        'platinumSilver': '#EAEAEA',
        'forestGreen' : '#18564C',
      },
      backgroundImage: {
        'hero-curves': "url('/assets/hero-curves.svg')",
      }
    },
  },
  plugins: [],
};
