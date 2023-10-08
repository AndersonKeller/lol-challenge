import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "yellow-600": "#f4c258",
        "yellow-700": "#c89b3c",
        "blue-600": "#0866B0",
        "cyan-400": "#46CAE9",
        "gray-50": "#F9FAFB",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-500": "#6B7280",
        "gray-600": "#4B5563",
        "gray-700": "#374151",
        "gray-800": "#1F2937",
        "gray-900": "#090D15",
        "gray-950": "#030712",
      },
      fontFamily: {
        spiegel: "Spiegel",
        spiegelItalic: "Spiegel-Italic",
      },
      fontSize: {
        "display-2xl": "72px",
        "display-xl": "60px",
        "display-lg": "48px",
        "display-md": "36px",
        "display-sm": "30px",
        "display-xs": "24px",
        "text-xl": "20px",
        "text-lg": "18px",
        "text-md": "16px",
        "text-sm": "14px",
        "text:xs": "12px",
      },
    },
  },
  plugins: [],
};
export default config;
