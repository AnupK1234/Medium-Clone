/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: "rgba(0,0,0,0.8)",
        banner: "rgb(255,192,23)",
        btnGreen: "rgb(26, 137, 23)"
      },
      fontFamily: {
        title: `gt-super, Gerogia, Cambria, Times New Roman, Times, serif;`,
        texts: `sohne, Helvetica Neue, Helvetica, Arial,sans-serif`,
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(200px, 1fr))"
      }
    },
  },
  plugins: [],
}