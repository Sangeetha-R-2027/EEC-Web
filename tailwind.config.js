/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eec: {
          forest: '#174A32',
          deep: '#245B3A',
          leaf: '#4F8A52',
          natural: '#6FA96F',
          light: '#EAF4E8',
          warm: '#F8FAF4',
          text: '#1F2923',
          muted: '#65736A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
