module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/download1.png')",
        contactBg: "url('/images/contactUs.png')",
      },
      fontFamily: {
        Syne: ["Inter", "sans-serif"],
      }, //end of fontFamily
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
