export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope-light': ['var(--font-manrope-light)', 'sans-serif'],
        'manrope-medium': ['var(--font-manrope-medium)', 'sans-serif'],
        'manrope-bold': ['var(--font-manrope-bold)', 'sans-serif'],
      },
    },
  },
};