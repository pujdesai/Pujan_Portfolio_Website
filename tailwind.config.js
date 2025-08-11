/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nexora: ["Nexora", "sans-serif"],
        preospe: ["Preospe", "sans-serif"],
      },
    },
  },
  plugins: [],
};
