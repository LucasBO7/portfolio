/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      "titles-jost": ["jost", "sans-serif"],
      "titles-kumbh-sans": ["kumbh-sans", "sans-serif"],
      "subtitles-roboto": ["roboto", "sans-serif"],
      "paragraphes-koulen": ["koulen", "cursive"],
    },
    extend: {
      colors: {
        "purple-dark": "#1C1D2B",
        "purple-mid-dark": "#2C2E43",
        "purple-mid": "#7581F1",
        "purple-light": "#C3C9FF",
        "gray-dark": "#393E46",
        "gray-mid-dark": "#656A7B",
        "gray-light": "#BEBFC9",
        beige: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
