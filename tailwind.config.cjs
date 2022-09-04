/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      lg: "1020px",
      desktop: "1440px",
    },
    fontSize: {
      13: "13px",
      15: "15px",
      16: "16px",
      22: "22px",
      26: "26px",
    },
    lineHeight: {
      38: "38px",
      33: "33px",
      25: "25px",
      24: "24px",
      20: "20px",
    },
    extend: {
      colors: {
        blue: "hsl(212, 100%, 50%)",
        gray: "hsl(217, 20%, 51%)",
        grayishBlue: "hsl(217, 35%, 45%)",
        darkBlue: "hsl(217, 21%, 21%)",
        lightGrayishBlue: "hsl(227, 100%, 98%)",
        white: "hsl(0, 0%, 100%)",
        darkDarkBlue: "hsl(220, 40%, 13%)",
        darkLighterDarkBlue: "hsl(222, 41%, 20%)",
      },
      fontFamily: {
        monospace: ["Space Mono", "monospace"],
      },
    },
    variants: {
      extend: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [],
};
