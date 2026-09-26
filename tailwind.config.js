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
        canvas: "#F5F3EE",
        ink: {
          DEFAULT: "#101010",
          secondary: "#555555",
          muted: "#777777",
          border: "#101010",
        },
        accent: {
          DEFAULT: "#20C77A",
          hover: "#19ab67",
          soft: "#d7f7e7",
          secondary: "#6F5CFF",
        },
        warning: {
          DEFAULT: "#F2A900",
          soft: "#fff2cc",
        },
        danger: {
          DEFAULT: "#E85C65",
          soft: "#fde8e9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          warm: "#FAF9F5",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["DM Mono", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        hard: "3px 3px 0px #101010",
        "hard-sm": "2px 2px 0px #101010",
        "hard-md": "4px 4px 0px #101010",
        "hard-lg": "6px 6px 0px #101010",
        "hard-accent": "4px 4px 0px #20C77A",
        "hard-danger": "4px 4px 0px #E85C65",
        "hard-warning": "4px 4px 0px #F2A900",
      },
      borderRadius: {
        brutal: "10px",
        "brutal-sm": "6px",
        "brutal-lg": "14px",
      },
    },
  },
  plugins: [],
};
