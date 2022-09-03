/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(212, 100%, 50%)",
        gray: "hsl(217, 20%, 51%)",
        grayishBlue: "hsl(217, 35%, 45%)",
        darkBlue: "hsl(217, 21%, 21%)",
        lightGrayishBlue: "hsl(227, 100%, 98%)",
        white: "hsl(0, 0%, 100%)",
        darkDarkBlue: "hsl(220, 40%, 13%)",
        darkLightBlue: "hsl(222, 41%, 20%)",
      },
      fontFamily: {
        monospace: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
