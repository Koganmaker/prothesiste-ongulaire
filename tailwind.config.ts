import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#fdf6f3",
          100: "#fbe9e2",
          200: "#f5cdbf",
          300: "#eab09c",
          400: "#d99680",
          500: "#c47e66",
          600: "#b56a52",
          700: "#8e4f3d",
          900: "#5a2f23",
        },
        sand: {
          50: "#faf7f2",
          100: "#f3ece1",
          200: "#e7d9c5",
        },
        champagne: {
          200: "#ecdcc6",
          400: "#d4b48a",
          600: "#a88451",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(90,47,35,0.18)",
        glow: "0 25px 60px -25px rgba(180,106,82,0.45)",
      },
      backgroundImage: {
        "rose-radial":
          "radial-gradient(ellipse at top right, rgba(245,205,191,0.5), transparent 60%)",
        "sand-grain":
          "linear-gradient(180deg, #faf7f2 0%, #f3ece1 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
