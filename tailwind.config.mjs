/** @type {import('tailwindcss').Config} */

/*
 * Potli design system — enamel signboard palette
 * Paper #F4EADB · Turquoise #6CB7B1 · Deep turquoise #2E7D77
 * Saffron #E99814 · Orange #D4611A · Lime #9DB33F · Red #DA101D · Charcoal #252525
 * Brand red is never a background or a button — heading rules, the potli icon,
 * spice levels and the advance-notice badge only.
 * Never place white text on turquoise or saffron — use charcoal or brown.
 * Alfa Slab One (headings) · Yatra One (short accents) · Karma (information)
 */

export default {
  content: ["./src/**/*.{astro,html,js,json,md,mdx,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#f4eadb",
        foreground: "#252525",
        card: {
          DEFAULT: "#f4eadb",
          foreground: "#252525",
        },
        popover: {
          DEFAULT: "#f4eadb",
          foreground: "#252525",
        },
        primary: {
          DEFAULT: "#e99814",
          foreground: "#252525",
        },
        secondary: {
          DEFAULT: "#6cb7b1",
          foreground: "#252525",
        },
        muted: {
          DEFAULT: "#e7d9c6",
          foreground: "#5a5046",
        },
        accent: {
          DEFAULT: "#2e7d77",
          foreground: "#f4eadb",
        },
        destructive: {
          DEFAULT: "#c0392b",
          foreground: "#f4eadb",
        },
        border: "color-mix(in srgb, #252525 35%, #f4eadb)",
        input: "color-mix(in srgb, #252525 35%, #f4eadb)",
        ring: "#e99814",
        charcoal: "#252525",
        turquoise: {
          DEFAULT: "#6cb7b1",
          deep: "#2e7d77",
        },
        "turquoise-deep": "#2e7d77",
        saffron: "#e99814",
        "brand-red": "#da101d",
        orange: "#d4611a",
        lime: "#9db33f",
      },
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      fontFamily: {
        display: ['"Alfa Slab One"', "Georgia", "serif"],
        hindi: ['"Alfa Slab One"', "Georgia", "serif"],
        hand: ['"Yatra One"', "cursive"],
        sans: ['"Karma"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
