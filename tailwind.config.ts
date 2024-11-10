import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "pages/**/*.{js,ts,jsx,tsx,mdx}",
    "components/**/*.{jsx,tsx,}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screen: {
      
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1535px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

