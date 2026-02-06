/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Mo' Magn - Street Food Gourmet
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#242424',
          500: '#2d2d2d',
        },
        gold: {
          400: '#d4a853',
          500: '#c9952f',
          600: '#b8860b',
        },
        cream: {
          100: '#faf8f5',
          200: '#f5f0e8',
          300: '#e8dfd0',
        },
        accent: {
          red: '#c41e3a',
          orange: '#e85d04',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        handwritten: ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
}
