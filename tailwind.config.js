/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        light: "#3EAEF580",
        brand: {
          50: "#647995",
          100: "#676E7E",
          200: "#1D2433",
        },
        warning: "#ECBB2E",
      },
      backgroundColor: {
        default: "#F0F2F5",
        primary: "#0D6EFD",
        'primary-dark': "#000031",
        light: "#E7F0FF",
        peach: "#FBEAE9"
      },
      boxShadow: {
        default: "5px 11px 40.43px rgba(211, 209, 216, 0.3)",
      },
      borderColor: {
        default: "hsla(5, 51%, 55%, 0.2)",
        light: "#EECCCF",
      },
      fontFamily: {
        poppins: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
