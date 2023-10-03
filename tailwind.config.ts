import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      //Phone
      sm: "768px",
      //Phablet
      md: "1024px",
      //Tablet
      lg: "1280px",
      //PC
      xl: "1920px",
      //Large screen
      "2xl": "2560px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-background": "url('/contact_background.png')",
        "bg-mobile-dark": "url('/bg_mobile_dark.png')",
        "bg-mobile-light": "url('/bg_mobile_light.png')",
      },
      colors: {
        secondary: "#FFFFFF",
        third: "#000000",
        linen: "#F2EBE3",
        falured: "#742119",
        blackbean: "#310F0D",
        cinnabar: "#DF482B",
      },
      fontFamily: {},
      boxShadow: {
        lightBox: '0px 0px 20px 0px rgba(0, 0, 0, 0.6)',
        darkBox: "0px 0px 20px 0px rgba(255, 255, 255, 1)",
        itemLightBox: '-2px 2px 6px rgba(0, 0, 0, 0.8);',
        itemDarkBox:'-2px 2px 6px rgba(255, 255, 255, 1);',
      },
    },
  },

  plugins: [],
};

export default config;
