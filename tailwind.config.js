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
        // Povezano sa CSS varijablama radi lakše kasnijeg menjanja
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "muted-gray": "#f9f9f9", // Svetlo siva pozadina za kartice sa slika
      },
      borderRadius: {
        none: '0px', // Osiguravamo brutalistički oštar izgled
      },
      fontFamily: {
        // Standardni, čisti Sans fontovi koji daju inženjerski izgled bez učitavanja teških biblioteka
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};