/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/core/**/*.{js,ts,jsx,tsx}",
    "./app/core/components/**/*.{js,ts,jsx,tsx}",
    "./app/auth/**/*.{js,ts,jsx,tsx}",
    "./app/home/**/*.{js,ts,jsx,tsx}",
    "./app/dashboard/**/*.{js,ts,tsx,jsx}",
    "./app/recipes/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#54B435",
        dark: "#282a36",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
