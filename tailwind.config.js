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
        reroute: {
          green: "#54e38e",
          "green-soft": "#dff8e9",
          ink: "#101010",
          card: "#fffef8",
          bg: "#f5f5f0",
          amber: "#ffd166",
          red: "#ff5c5c",
          blue: "#bcd8ff",
          muted: "#686868",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      boxShadow: {
        brutal: "5px 5px 0px #171717",
        "brutal-sm": "3px 3px 0px #171717",
        "brutal-lg": "8px 8px 0px #171717",
      },
    },
  },
  plugins: [],
};
