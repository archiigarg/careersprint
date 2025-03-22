import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      ptserif: ["PT_Serif", "serif"],
      abeezee: ["ABeeZee", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#e2e8f0", // Change to a real color instead of hsl(var(--border))
        input: "#e2e8f0",
        ring: "#4c51bf",
        background: "#ffffff",
        foreground: "#1a202c",
        primary: {
          DEFAULT: "#4c51bf",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#e2e8f0",
          foreground: "#1a202c",
        },
        destructive: {
          DEFAULT: "#e53e3e",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#718096",
          foreground: "#a0aec0",
        },
        accent: {
          DEFAULT: "#f6ad55",
          foreground: "#1a202c",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1a202c",
        },
        card: {
          DEFAULT: "#edf2f7",
          foreground: "#1a202c",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
