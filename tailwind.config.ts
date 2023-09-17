import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'md': '480px',
      //Tablet
      'lg': '1024px',
      //PC
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "secondary": "#FFFFFF",
        "third": "#000000",
        "linen":"#F2EBE3",
        "falured":"#742119",
        "blackbean":"#310F0D",
        "cinnabar":"#DF482B",
      },
      fontFamily: {
        'impact': ['Impact', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
      },
    },
  },

  plugins: [],
};

export default config;
