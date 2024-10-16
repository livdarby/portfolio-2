/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths where your JSX files live
  ],
  theme: {
    extend: {
      fontSize: { largest: "16rem", md: "10rem" },
      fontFamily: { title: "Bebas Neue", body: "Montserrat" },
    },
  },
  plugins: [],
};
