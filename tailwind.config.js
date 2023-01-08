/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./tailwind.config.js",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
