import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pill: "#555555",
        "pill-bg": "rgb(246, 246, 246)",
        "pill-shadow": "rgb(231, 231, 231)",
        heading: "#3d3d3d",
      },
      padding: {
        modal: "52px 50px 52px 32px",
      },
    },
  },
  plugins: [],
};
export default config;
