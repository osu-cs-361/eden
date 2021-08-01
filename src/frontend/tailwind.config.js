module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "1/12": "8.3%",
        "11/12": "91.7%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
