/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

