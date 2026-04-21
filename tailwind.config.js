/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{vue,js,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#795218",
          light: "#a98047",
          dark: "#462801",
        },
        secondary: {
          DEFAULT: "#3f7919",
          light: "#80b35f",
          dark: "#2f5219",
        },
      },
    },
  },
  plugins: [],
};
