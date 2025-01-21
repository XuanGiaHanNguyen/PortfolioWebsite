/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        customBlue: '#CAD8E6', 
      },
      animation: {
        'up-down': 'upDown 2.5s ease-in-out infinite',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },},
    },
  },
  plugins: [],
}

