/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ab-purple': '#6D28D9', // Deep Purple (Buttons)
        'ab-purple-light': '#F5F3FF', // Very Light Purple (Backgrounds)
        'ab-orange': '#EA580C', // Orange (Secondary buttons)
        'ab-gray-text': '#4B5563', // Dark Gray Text
        'ab-card-bg': '#FAF8FF', // Slightly Off-White Card Background
        'ab-light-green': '#D1FAE5', // Light Green banner
        'ab-green-text': '#047857' // Green Join button
      },
    },
  },
  plugins: [],
}