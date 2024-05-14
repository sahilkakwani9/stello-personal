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
      },
      fontFamily: {
        "primary-light": ["DegularDisplay-Light"],
        "primary-regular": ["DegularDisplay-Regular"],
        "primary-medium": ["DegularDisplay-Medium"],
        "primary-semibold": ["DegularDisplay-Semibold"],
        "primary-bold": ["DegularDisplay-Bold"],
        "primary-black": ["DegularDisplay-Black"],
        "secondary-light": ["DegularDisplay-Light"],
        "secondary-regular": ["Degular-Regular"],
        "secondary-medium": ["Degular-Medium"],
        "secondary-semibold": ["Degular-Semibold"],
        "secondary-bold": ["Degular-Bold"],
        "secondary-black": ["Degular-Black"],
      },
      colors: {
        "start-gradient": "#FE756C",
        "end-gradient": "#DD1D63",
        "start-gradient-secondary": "#FFFFFF",
        "end-gradient-secondary": "#FFFFFF59",
        "secondary-text": "#FFFFFF99",
      },
    },
  },
  plugins: [],
};
export default config;
