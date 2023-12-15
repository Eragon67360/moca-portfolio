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
      custom: "720px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-background": "url('/contact_background.png')",
        "contact-background_dark": "url('/contact_background_dark.png')",
        "bg-mobile-dark": "url('/bg_mobile_dark.png')",
        "bg-mobile-light": "url('/bg_mobile_light.png')",
        "landing-page": "url('/panda.jpg')",
        "landing-page-mobile": "url('/panda_mobile.jpg')",
      },
      colors: {
        //Light theme
        light_background: "#FFFFFF",
        light_surface: "#F2EBE3",
        light_primary: "#DF482B",
        light_secondary: "#742119",
        light_tertiary: "#310F0D",

        //Dark theme
        dark_background: "#310F0D",
        dark_surface: "#742119",
        dark_primary: "#F2EBE3",
        dark_secondary: "#310F0D",
        dark_tertiary: "#F2EBE3",

        //Ink
        light_headings: "#742119",
        dark_headings: "#F2EBE3",
        light_ink: "#000000",
        dark_ink: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme: (arg0: string) => any[]) => ({
        DEFAULT: {
          css: {
            fontFamily: `${theme("fontFamily.sans").join(", ")} !important`,
            // ... add other global styles if needed
          },
        },
      }),
      boxShadow: {
        lightBox: "0px 0px 20px 0px rgba(0, 0, 0, 0.6)",
        darkBox: "0px 0px 20px 0px rgba(255, 255, 255, 1)",
        itemLightBox: "-2px 2px 6px rgba(0, 0, 0, 0.8);",
        itemDarkBox: "-2px 2px 6px rgba(255, 255, 255, 1);",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

export default config;
