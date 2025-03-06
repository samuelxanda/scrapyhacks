/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moonblossom:' #337D78',
        blue: '#1e3a8a', // Add your desired blue color here
        yellow: '#fbbf24', // Add your desired yellow color here
        pink: '#ff69b4', // Add your desired pink color here
      },
     
    },
  },
  plugins: [],
}