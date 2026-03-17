import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--bg-primary)",
          subtle: "var(--bg-card)",
          hover: "var(--bg-hover)",
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
        border: {
          subtle: "var(--border-subtle)",
          accent: "var(--border-accent)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        code: ["var(--font-code)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "hud-soft": "0 0 0 1px rgba(0, 212, 255, 0.2)",
        "hud-strong":
          "0 0 0 1px rgba(0, 212, 255, 0.35), 0 0 40px rgba(0, 212, 255, 0.18)",
      },
      borderRadius: {
        hud: "18px",
        sm: "2px",
      },
      transitionTimingFunction: {
        industrial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
