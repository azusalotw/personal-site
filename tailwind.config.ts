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
        background: "#FAFAFA",
        surface: "#FFFFFF",
        text: "#09090B",
        muted: "#71717A",
        border: "#E4E4E7",
        accent: "#2563EB",
        "accent-muted": "#DBEAFE",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-noto)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#09090B",
            a: { color: "#2563EB", textDecoration: "underline" },
            "h1,h2,h3,h4": { color: "#09090B", fontWeight: "700" },
            code: {
              backgroundColor: "#F4F4F5",
              padding: "0.2em 0.4em",
              borderRadius: "4px",
              fontFamily: "var(--font-jetbrains), monospace",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
