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
        // 수심달 디자인 시스템 v1.0.0
        coral: {
          DEFAULT: "#FF6971",
          strong: "#C21124",
          pressed: "#E0505C",
          soft: "#FFEDEE",
        },
        violet: {
          DEFAULT: "#7C5CFC",
          strong: "#4423A8",
          pressed: "#6849E8",
          soft: "#EFEAFE",
        },
        page: "#F4F4F3",
        card: "#FFFFFF",
        subtle: "#F7F7F7",
        ink: {
          90: "#2F2F31",
          70: "#4A4A4D",
          50: "#85898A",
          30: "#C3C3C3",
        },
        border: {
          soft: "#ECECEC",
          DEFAULT: "#E1E1E1",
        },
        divider: "#EFEFEF",
        navy: "#16274B",
        gold: {
          DEFAULT: "#CFA95C",
          deep: "#9F6F2E",
        },
        good: {
          DEFAULT: "#2BB673",
          soft: "#E6F7EE",
        },
        warn: {
          DEFAULT: "#F5A623",
          soft: "#FFF4E0",
        },
        info: {
          DEFAULT: "#4F8CFF",
          soft: "#E6EEFF",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "Apple SD Gothic Neo",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        display: ["34px", { lineHeight: "1.3", fontWeight: "700" }],
        "title-l": ["28px", { lineHeight: "1.35", fontWeight: "700" }],
        "title-m": ["22px", { lineHeight: "1.4", fontWeight: "700" }],
        "title-s": ["19px", { lineHeight: "1.45", fontWeight: "600" }],
        "body-l": ["18px", { lineHeight: "1.55", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        micro: ["12px", { lineHeight: "1.4", fontWeight: "500" }],
      },
      borderRadius: {
        card: "14px",
        inner: "7px",
        input: "10px",
        pill: "30px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(20,20,20,0.04), 0 1px 2px rgba(20,20,20,0.04)",
        elevated: "0 8px 24px rgba(20,20,20,0.08)",
        coral: "0 8px 24px -8px rgba(255, 105, 113, 0.45)",
        violet: "0 8px 24px -8px rgba(124, 92, 252, 0.45)",
        tablet: "0 30px 60px -20px rgba(20,20,20,0.18), 0 0 0 1px rgba(20,20,20,0.04)",
      },
      spacing: {
        "page-pad": "32px",
      },
      keyframes: {
        "ink-bob": {
          "0%,100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        "matty-hop": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "page-curl": {
          "0%": { transform: "rotateY(0deg)", opacity: "1" },
          "100%": { transform: "rotateY(-180deg)", opacity: "0" },
        },
      },
      animation: {
        "ink-bob": "ink-bob 5s ease-in-out infinite",
        "matty-hop": "matty-hop 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
