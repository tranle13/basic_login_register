/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      olive: "#606c38",
      "off-white": "#fefae0",
      tangerine: "#ffb703",
      "grey-blue": "#669bbc",
      "offish-white": "#fdf0d5",
      bubblegum: "#C38FFF",
    },
    borderWidth: {
      1: "1px",
      2: "2px",
    },
    zIndex: {
      "-1": "-1",
    },
    extend: {},
  },
  plugins: [],
};
