/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths where your JSX files live
  ],
  theme: {
    extend: {
      fontSize: { largest: "13rem", md: "10rem" },
      fontFamily: {
        title: ['"Bebas Neue"', "sans-serif"], // Ensure other fonts are arrays too
        body: ['"Montserrat"', "sans-serif"],
        script: ['"BrittanySignature"', "cursive"], // Reference the font-family from @font-face },
      },
      colors: {
        blue: "#357ab7",
      },
    },
    plugins: [],
  },
};
