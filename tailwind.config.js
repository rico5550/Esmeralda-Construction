/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm luxury palette inspired by the outdoor space
        stone: {
          50: '#fdf8f3',   // lightest cream
          100: '#f5ebe0',  // warm cream
          200: '#e7d4c1',  // light stone
          300: '#d6b897',  // medium stone
          400: '#c49a6d',  // rich stone
          500: '#b37d47',  // main stone
          600: '#9a6837',  // darker stone
          700: '#7d532c',  // deep stone
          800: '#654024',  // darker brown
          900: '#523320',  // darkest brown
        },
        gold: {
          50: '#fffdf0',   // lightest gold
          100: '#fef7d0',  // light gold
          200: '#fceda1',  // warm gold
          300: '#f9dc68',  // medium gold
          400: '#f5c542',  // rich gold
          500: '#eda915',  // main gold
          600: '#cc890a',  // deeper gold
          700: '#a16207',  // dark gold
          800: '#7c4d03',  // bronze
          900: '#5a3601',  // darkest gold
        },
        sage: {
          50: '#f7f8f7',   // lightest sage
          100: '#e8ebe8',  // light sage
          200: '#d1d7d1',  // soft sage
          300: '#a8b5a8',  // medium sage
          400: '#7a8a7a',  // rich sage
          500: '#5c6b5c',  // main sage
          600: '#495549',  // deeper sage
          700: '#3a453a',  // dark sage
          800: '#2d352d',  // darker sage
          900: '#1f241f',  // darkest sage
        },
        warm: {
          50: '#fefcf9',   // cream white
          100: '#fdf6ed',  // warm white
          200: '#f9e8d2',  // light warm
          300: '#f2d4a7',  // medium warm
          400: '#e8b871',  // rich warm
          500: '#d69e48',  // main warm
          600: '#b8842d',  // deeper warm
          700: '#906721',  // dark warm
          800: '#6b4e1a',  // darker warm
          900: '#4a3614',  // darkest warm
        }
      }
    },
  },
  plugins: [],
};
