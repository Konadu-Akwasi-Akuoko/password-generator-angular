/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        "jetbrains-italic": ["JetBrains Mono Italic", "monospace"],
        "jetbrains-bold": ["JetBrains Mono Bold", "monospace"],
        "jetbrains-bold-italic": ["JetBrains Mono Bold Italic", "monospace"],
      },
      colors: {
        "dark-grey": "#24232C",
        grey: "#817D92",
        "very-dark-grey": "#18171F",
        "almost-white": "#E6E5EA",
        "neon-green": "#A4FFAF",
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
      },
    },
  },
  plugins: [],
};
