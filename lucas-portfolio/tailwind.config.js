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
      animation: {
        pulse: "pulse 1s linear infinite", // Aumenta a duração do spin para 2 segundos
      },
      colors: {
        "purple-dark": "#1C1D2B",
        "purple-mid-dark": "#2C2E43",
        "purple-mid": "#7581F1",
        "purple-light": "#C3C9FF",
        "gray-dark": "#393E46",
        "gray-mid-dark": "#656A7B",
        "gray-light": "#BEBFC9",
        beige: "#EEEEEE",
        "light-white": "rgba(255, 255, 255, 0.3)",
      },
      // backgroundColor: {
      //   'multi-layer': 'linear-gradient(to bottom, white 0%, transparent 100%), rgba(0, 0, 0, 0.1)',
      //   'multi-layer': 'bg-gradient, rgba(0, 0, 0, 0.1)',
      // },
      boxShadow: {
        'long': "0 2px 15px rgba(137,145,220,0.3)",
      },
    },
  },
  plugins: [],
};
