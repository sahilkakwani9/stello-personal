import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        introToOrbs: 'url("/IntroToOrbsBg.svg")',
      },
      fontFamily: {
        'primary-light': ['var(--font-degular-display-light)', 'sans-serif'],
        'primary-regular': ['var(--font-degular-display-regular)', 'sans-serif'],
        'primary-medium': ['var(--font-degular-display-medium)', 'sans-serif'],
        'primary-semibold': ['var(--font-degular-display-semibold)', 'sans-serif'],
        'primary-bold': ['var(--font-degular-display-bold)', 'sans-serif'],
        'primary-black': ['var(--font-degular-display-black)', 'sans-serif'],
        'secondary-light': ['var(--font-degular-light)', 'sans-serif'],
        'secondary-regular': ['var(--font-degular-regular)', 'sans-serif'],
        'secondary-medium': ['var(--font-degular-medium)', 'sans-serif'],
        'secondary-semibold': ['var(--font-degular-semibold)', 'sans-serif'],
        'secondary-bold': ['var(--font-degular-bold)', 'sans-serif'],
        'secondary-black': ['var(--font-degular-black)', 'sans-serif'],
      },
      colors: {
        "start-gradient": "#FE756C",
        "end-gradient": "#DD1D63",
        "start-gradient-secondary": "#FFFFFF",
        "end-gradient-secondary": "#FFFFFF59",
        "secondary-text": "#FFFFFF99",
        "wallet-card-start-gradient": "#2D2D2DC4",
        "wallet-card-end-gradient": "#08080800",
      },
    },
  },
  plugins: [],
};
export default config;