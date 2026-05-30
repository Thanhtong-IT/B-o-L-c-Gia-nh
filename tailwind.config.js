/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soviet: {
          red: "#da251d",
          gold: "#ffcd00",
          orange: "#f59e0b",
          white: "#ffffff",
          offwhite: "#fff9f9",
          darkred: "#b01d16",
        },
        dv: {
          bg: "#f8f9fc",
          card: "#ffffff",
          muted: "#9ca3af",
          text: "#1a202c",
          "text-light": "#4a5568",
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(218, 37, 29, 0.2)',
        'gold-glow': '0 0 15px rgba(245, 158, 11, 0.2)',
        'card-lift': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 16px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
