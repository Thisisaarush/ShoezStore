module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#FFED4d",
        "custom-red": "#FF0000",
        "custom-light-grey": "#C5C5C5",
        "custom-dark-grey": "#757575",
      },
      width: {
        90: "22rem",
        100: "26rem",
        110: "28rem",
        128: "32rem",
      },
      height: {
        90: "22rem",
        100: "26rem",
        110: "28rem",
        128: "32rem",
        132: "38rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
    },
  },
  plugins: [],
};
