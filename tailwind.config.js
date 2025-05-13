/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#161616",
        secondaryLight: "#5E5E5E",
        border: "#1A1A1A",
        black: "#070707",
        red: "#AD2419",
        green: "#3BB33B",
        textPrimary: "#E8E8E8",
        textSecondary: "#707070",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
      },
      fontSize: {
        "48px": "48px",
        "20px": "20px",
        "14px": "14px",
        "12px": "12px",
        "10px": "10px",
      },
      borderRadius: {
        "16px": "16px",
        "8px": "8px",
        full: "50%",
      },
      backgroundColor: {
        primary: "#0F0F0F",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
