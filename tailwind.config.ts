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
        primary: "#4F46E5",
        secondary: "#7C3AED",
        accent: "#F43F5E",
        ink: "#0B0B16",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: ["Pretendard", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 30px 80px -20px rgba(79, 70, 229, 0.45)",
        "glow-rose": "0 30px 80px -20px rgba(244, 63, 94, 0.45)",
        card: "0 24px 60px -28px rgba(15, 23, 42, 0.25)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 80%)",
        aurora:
          "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 50%), radial-gradient(circle at 80% 30%, rgba(244,63,94,0.25), transparent 50%), radial-gradient(circle at 50% 80%, rgba(124,58,237,0.35), transparent 55%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "drift": {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(20px,-10px,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "drift": "drift 10s ease-in-out infinite",
        "shimmer": "shimmer 4s linear infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
