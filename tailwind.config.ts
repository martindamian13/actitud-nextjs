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
        'primary-dark-blue': '#0A1A2F',
        'primary-blue': '#1F3A5A',
        'soft-steel-blue': '#3F5873',
        'dark-gray': '#4A4F57',
        'medium-gray': '#8C9097',
        'light-gray': '#E6E8EB',
        'warm-beige': '#D6CBB8',
        'deep-blue-black': '#0A0F14',
        'accent-green': '#3CD278',
        'accent-blue': '#4A9FF5',
        'accent-orange': '#FF9C52',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-beige': 'linear-gradient(135deg, #D6CBB8 0%, #E8DED0 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1F3A5A 0%, #0A1A2F 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A1A2F 0%, #0A0F14 100%)',
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
