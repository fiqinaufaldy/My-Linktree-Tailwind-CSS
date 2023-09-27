/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      keyframes : {
        'fade-in-down' : {
          '0%' : {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%' : {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation : {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-Down': 'fade-in-down 2s ease-out',
        'fade-in-dOwn': 'fade-in-down 3s ease-out'
      },
      fontFamily : {
        inter : 'Inter'
      },
    },
  },
  plugins: [],
}
