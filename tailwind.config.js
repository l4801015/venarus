/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			screens: {
        "desktop": {"min": "1440px"},
				"laptop" : {"min": "1100px"},
        "tablet" : {"min": "850px "},
        "mobile" : {"min": "600px "},
				// => @media (max-width: 1319px) { ... }
			},
      fontFamily: {
        MerriweatherBold: ["MerriweatherBold,sans-serif"],
        RobotoLight: ["RobotoLight,sans-serif"],
        RobotoRegular: ["RobotoRegular,sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        fadeIn: "fadeIn .5s linear",
        fadeOut: "fadeOut .5s linear",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0%, -50%)" },
          "100%": { transform: "translate(-100%, -50%)" },
        },
        marquee2: {
          "0%": { transform: "translate(100%, -50%)" },
          "100%": { transform: "translate(0%, -50%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          to: { opacity: 0 }
        },
      },
    },
  },
  plugins: [],
};
