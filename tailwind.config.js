/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'main': "hsl(217, 28%, 15%)",
          'intro': "hsl(218, 28%, 13%)",
          'signup': "hsl(218, 28%, 13%)",
          'footer': "hsl(216, 53%, 9%)",
          'testimonials': "hsl(219, 30%, 18%)"
        },
        accent: {
          'cyan': "hsl(176, 68%, 64%)",
          'blue': "hsl(198, 60%, 50%)",
          'red': "hsl(0, 100%, 63%)"
        }
      },
      fontFamily: {
        'raleway': ["'Raleway Variable', 'sans-serif'"],
        'opensans': ["'Open Sans Variable', 'sans-serif'"]
      },
      screens: {
        'mobile': "375px",
        'desktop': "1440px"
      }
    },
  },
  plugins: [],
}

