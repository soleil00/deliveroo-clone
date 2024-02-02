module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.{js,ts,jsx,tsx}"  // Fix: Remove the extra "/**/*" from this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
