/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: "#0E131F",
        secondBackground: "#39405F",
        borderCard: "#FF00E6",
        colorsButton: "#E6AF2E",
        textLigth: "#F0F0F0",  
        textBlack : "#0A0A0A",

        borderPastille: "#E6AF2E",
        Language: "#0A0A0A",
        xbox: "#107C10",
        playstation: "#003087",
        nintendoSwitch: "#E60012",
        pc: "#0A0A0A",
      },
    },
  },
  plugins: [],
};
