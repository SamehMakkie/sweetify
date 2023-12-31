import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "body-text": "#a3a3a3",
        "card-text": "#666666",
        "dark-primary": "#a17b39",
        "dark-secondary": "#1D1E21",
        "lighter-dark-secondary": "#474951"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#CBA86C",
          "secondary": "#2F3136",
          "error": "#9C3030",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
