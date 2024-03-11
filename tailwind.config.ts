import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#f89b1f',
        secondary: '#EBECF0',
        black:"	#000000"
      },
      screens: {
        'fold':'280px',
        'xs': '400px',  // Custom breakpoint for extra small screens
        'sm': '768px',
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    
      
      
    },
  },
  darkMode: "class",
  
  plugins: [
    require("daisyui"),
    nextui()
  ],
  
};
export default config;