/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Nexora", "sans-serif"],
        secondary: ["Preospe", "sans-serif"],
      },
      screens: {
        'xs': '480px',
        'sm': '600px',
        'md': '800px',
        'lg': '1096px',
        'xl': '1366px',
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
};
