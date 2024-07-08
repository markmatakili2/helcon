/** @type {import('tailwindcss').Config} */
import { colors } from 'tailwindcss/colors'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#6f6af8',
        blue: '#0693e3',
        green: '#00c476',
        red: '#ef4444',
        lightGreen: '#22c55e',
      },
      screens: {
        sm1: '350px',
        sm3: '400px',
        sm2: '600px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
