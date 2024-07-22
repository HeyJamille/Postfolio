/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      width: {
        'clamp': 'clamp(300px, 50vw, 300px)',
      },
      height: {
        'clamp': 'clamp(450px, 50vh, 800px)',
      },
      backgroundColor: {
        button_color: '#cd51ff',
        background_card: '#212121'
      },
    },
    keyframes: {
      writeRight: {
        '0%': { opacity: '0', transform: 'translateX(1rem)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      writeLeft: {
        '100%': { opacity: '1', transform: 'translateX(1rem)' },
        '0%': { opacity: '0', transform: 'translateX(0)' },
      }
    },
    animation: {
      'write-right': 'writeRight 2s ease',
      'write-left': 'writeLeft 2s ease',
    }
  },
  plugins: [],
}