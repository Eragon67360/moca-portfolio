import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      //Phone
      sm:"480px",
      //Phablet
      md: "1024px",
      //Tablet
      lg: "1440px",
      //PC
      xl:"1920px",
      //Large screen
      "2xl":"2560px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-background": "url('../public/contact_background.png')",
      },
      colors: {
        secondary: "#FFFFFF",
        third: "#000000",
        linen: "#F2EBE3",
        falured: "#742119",
        blackbean: "#310F0D",
        cinnabar: "#DF482B",
      },
      fontFamily: {
        impact: ["Impact", "sans-serif"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};

export default config;
