import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from manual
        'primary-blue': '#2F80ED', // Azul Luque
        'primary-dark-blue': '#1a4d8f', // Darker variation for contrast
        'accent-green': '#27AE60', // Verde Chaco
        'accent-orange': '#E67E22', // Terracota claro
        'light-gray': '#ECF0F1', // Gris claro
        // Supporting colors
        'soft-steel-blue': '#3F5873',
        'dark-gray': '#4A4F57',
        'medium-gray': '#8C9097',
        'warm-beige': '#D6CBB8',
        'deep-blue-black': '#0A0F14',
        'accent-blue': '#2F80ED', // Same as primary
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-beige': 'linear-gradient(135deg, #D6CBB8 0%, #E8DED0 100%)',
        'gradient-blue': 'linear-gradient(135deg, #2F80ED 0%, #1a4d8f 100%)', // Using brand Azul Luque
        'gradient-dark': 'linear-gradient(135deg, #1a4d8f 0%, #0A0F14 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
