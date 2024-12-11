/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ccffcc",
        "secondary": "#b3ffb3",
        "tertiary": "#00e600",
        "quaternery": "#00ff00",
        "white-100": "#ffffff88",
        "light": "#ecffeb",
        "secondary-hover": "#9fe79f"
      },
    },
  },
  plugins: [],
};
