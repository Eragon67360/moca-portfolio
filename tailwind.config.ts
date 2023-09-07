import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "tekhelet": "#47366DF2",
        "secondary": "#FFFFFF",
        "third": "#000000",
        "magnolia":"#E7E6EF",
        "mint": "#B7E1D9",
        "payne" :"#49696E",
        "purple": "#2D0320"
      },
      fontFamily: {
        'impact': ['Impact', 'sans-serif']
      },
    },
  },

  plugins: [],
};

export default config;
