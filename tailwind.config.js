/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        organic: {
          50: "#F0FAF0",
          100: "#D7F0D7",
          200: "#B4E3B4",
          300: "#86CF86",
          400: "#5CB85C",
          500: "#3FA13F",
        },
        inorganic: {
          50: "#EFF6FF",
          100: "#D6E8FB",
          200: "#A8CEF5",
          300: "#7BB3EE",
          400: "#5499E6",
          500: "#3B7CC9",
        },
        bunny: {
          fur: "#FFF7EE",
          shadow: "#F2DFCB",
          cheek: "#FFB6B6",
          nose: "#F4A1A1",
        },
        canvas: "#FFF8F0",
      },
      fontFamily: {
        round: ["Fredoka", "Quicksand", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        pop: "0 8px 0 rgba(0,0,0,0.08)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "96%": { transform: "scaleY(0.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1.4s ease-in-out infinite",
        blink: "blink 4s infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
