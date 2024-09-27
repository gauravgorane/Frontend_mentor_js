tailwind.config = {
  theme: {
    extend: {
      colors: {
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",
        blue: "hsl(248, 32%, 49%)",
        darkBlue: "hsl(249, 10%, 26%)",
        grayishBlue: "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('./images/bg-intro-mobile.png')",
        desktop: "url('./images/bg-intro-desktop.png')",
      }
    },
  },
};