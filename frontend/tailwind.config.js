/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily: {
      'code': ['"Source Code Pro"', 'monospace'], 
      'Poppins': ['"Poppins"', 'monospace'], 
    },},
    animation: {
      'spin-slow': 'spin 10s linear infinite',
      'rotate-icons': 'rotate-icons 10s linear infinite',
    }
    ,
    keyframes: {
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
      'rotate-icons': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    }
  },
  plugins: [],
};
