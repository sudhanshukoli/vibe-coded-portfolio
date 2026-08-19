import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        mist: "#F6F9FB",
        glass: "#5FE3C4",
        line: "rgba(11, 18, 32, 0.10)",
      },
      fontFamily: {
        sans: ['"Albert Sans"', "system-ui", "sans-serif"],
        mono: ['"Fragment Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
