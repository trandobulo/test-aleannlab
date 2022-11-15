/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": [
          "0px 1px 1px rgba(0, 0, 0, 0.14)",
          "0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
          "0px 1px 3px rgba(0, 0, 0, 0.2)",
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
