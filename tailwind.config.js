/** @type {import('tailwindcss').Config} */
export default {
  content: ["./main.tsx", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [],
};
