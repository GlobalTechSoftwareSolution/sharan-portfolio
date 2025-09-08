/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // <--- this line is critical

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
}
