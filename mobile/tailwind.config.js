/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter_400Regular", "sans-serif"],
        "sans-medium": ["Inter_500Medium", "sans-serif"],
        "sans-semibold": ["Inter_600SemiBold", "sans-serif"],
        "sans-bold": ["Inter_700Bold", "sans-serif"],
        mono: ["SpaceMono_400Regular", "monospace"],
        "mono-medium": ["SpaceMono_700Bold", "monospace"],
      },
      colors: {
        background: "#050506",
        surface: "#111114",
        "surface-elevated": "#17181B",
        border: "#26272B",
        foreground: "#F5F5F7",
        muted: "#8B8D93",
        chrome: {
          DEFAULT: "#C9CDD3",
          light: "#F2F3F5",
          dim: "#6C6E73",
        },
        glow: "#E9EBF0",
        positive: "#8FE3B0",
        negative: "#E38F8F",
      },
    },
  },
  plugins: [],
};
