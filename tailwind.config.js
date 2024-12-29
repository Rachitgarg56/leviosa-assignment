/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'max-1240': { 'max': '1240px' },
      'max-1000': { 'max': '1000px' },
      'max-885': { 'max': '885px' },
      'max-700': { 'max': '700px' },
      'max-426': { 'max': '426px' },
    },
    extend: {
      colors: {
        'dark-chocolate': '#180700',
        'non-active-brown': '#665544',
        'active-brown': '#D6CBC7',
        'course-card-topic': '#515151',
        'courses-section': '#F9F9F9',
        'course': '#383838',
      }
    },
  },
  plugins: [],
}

