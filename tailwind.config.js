/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F6F2",
        ink: {
          DEFAULT: "#111111",
          secondary: "#666666",
          muted: "#888888",
          border: "#111111",
        },
        accent: {
          DEFAULT: "#20C979",
          hover: "#18b56b",
          soft: "#DDF8EA",
          secondary: "#6F5CFF",
        },
        warning: {
          DEFAULT: "#D97706",
          border: "#F59E0B",
          soft: "#FEF3C7",
        },
        danger: {
          DEFAULT: "#D9414B",
          border: "#EF4444",
          soft: "#FEE2E2",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          warm: "#FAF9F6",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["DM Mono", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        hard: "3px 3px 0px #111111",
        "hard-sm": "2px 2px 0px #111111",
        "hard-md": "4px 4px 0px #111111",
        "hard-lg": "5px 5px 0px #111111",
        "hard-accent": "3px 3px 0px #20C979",
        "hard-danger": "3px 3px 0px #D9414B",
        "hard-warning": "3px 3px 0px #D97706",
      },
      borderRadius: {
        brutal: "10px",
        "brutal-sm": "6px",
        "brutal-lg": "12px",
      },
    },
  },
  plugins: [],
};
