import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        "ivy-presto": ["var(--font-ivy-presto)"],
        "area-normal": ["var(--font-area-normal)"],
        "area-extended": ["var(--font-area-extended)"],
        gotham: ["var(--font-gotham)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        red: {
          50: "hsl(var(--red-50))",
          100: "hsl(var(--red-100))",
          300: "hsl(var(--red-300))",
        },
        stone: {
          50: "hsl(var(--stone-50))",
          100: "hsl(var(--stone-100))",
          200: "hsl(var(--stone-200))",
        },
        neutral: {
          800: "hsl(var(--neutral-800))",
        },
        zinc: {
          800: "hsl(var(--zinc-800))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        "lg.5": "33.75rem",
        "xl.5": "40.625rem",
        "3xl.5": "52rem",
        "5xl.5": "70rem",
      },
      transitionTimingFunction: {
        "in-out-episode": "cubic-bezier(.455,.03,.515,.955)",
      },
      boxShadow: {
        button: "2px 2px 0px 1px #000000",
        "button-hover": "-2px -2px 0 1px #000000",
      },
      backgroundImage: {
        "gallery-card-pattern": "linear-gradient(#0000,#000 82%)",
      },
      animation: {
        "bg-shine": "bg-shine 2.1s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        pulse: "pulse var(--duration) ease-out infinite",
        marquee: "marquee var(--duration) linear infinite",
      },

      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "bg-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
          "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
