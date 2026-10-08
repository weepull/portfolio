import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// Every colour resolves to a channel triplet defined in src/app/globals.css.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      // Type scale. Display is Instrument Serif and used for the hero name
      // only; label is the mono section-label style.
      fontSize: {
        display: ["3.5rem", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "display-sm": [
          "2.5rem",
          { lineHeight: "2.75rem", letterSpacing: "-0.01em" },
        ],
        heading: ["1.25rem", { lineHeight: "1.75rem" }],
        lead: ["1.125rem", { lineHeight: "1.75rem" }],
        title: ["1rem", { lineHeight: "1.5rem" }],
        body: ["0.9375rem", { lineHeight: "1.5rem" }],
        "body-sm": ["0.875rem", { lineHeight: "1.375rem" }],
        mono: ["0.8125rem", { lineHeight: "1.25rem" }],
        label: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
      },
      colors: {
        page: token("surface-page"),
        raised: token("surface-raised"),
        hairline: {
          DEFAULT: "rgb(var(--hairline) / 0.09)",
          strong: "rgb(var(--hairline) / 0.18)",
        },
        fg: {
          DEFAULT: token("text-primary"),
          muted: token("text-secondary"),
        },
        accent: token("accent"),

        // Legacy shadcn names, mapped onto the tokens above until the
        // remaining components are migrated.
        border: "rgb(var(--hairline) / 0.09)",
        input: "rgb(var(--hairline) / 0.09)",
        ring: token("accent"),
        background: token("surface-page"),
        foreground: token("text-primary"),
        primary: {
          DEFAULT: token("text-primary"),
          foreground: token("surface-page"),
        },
        secondary: {
          DEFAULT: token("surface-raised"),
          foreground: token("text-primary"),
        },
        muted: {
          DEFAULT: token("surface-raised"),
          foreground: token("text-secondary"),
        },
        popover: {
          DEFAULT: token("surface-raised"),
          foreground: token("text-primary"),
        },
        card: {
          DEFAULT: token("surface-raised"),
          foreground: token("text-primary"),
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 2px)",
      },
      spacing: {
        dock: "var(--dock-height)",
      },
      keyframes: {
        enter: {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        enter: "enter 200ms ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
