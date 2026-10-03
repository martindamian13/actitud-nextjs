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
        // Brand colors from manual de marca v1.0 (2026)
        'primary-blue': '#3E5166', // Azul acero
        'primary-dark-blue': '#304254', // Azul acero oscuro (hover / gradientes)
        'deep-blue-black': '#101314', // Grafito
        'light-gray': '#F0F0F0', // Blanco de marca
        // Supporting colors
        'soft-steel-blue': '#3F5873',
        'dark-gray': '#4A4F57',
        'medium-gray': '#8C9097',
        'warm-beige': '#D6CBB8',
        // Third-party brand color (not part of the Actitud palette)
        'whatsapp': '#27AE60',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'Arial', 'sans-serif'],
        display: ['var(--font-funnel)', 'var(--font-poppins)', 'system-ui', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-beige': 'linear-gradient(135deg, #D6CBB8 0%, #E8DED0 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3E5166 0%, #304254 100%)',
        'gradient-dark': 'linear-gradient(135deg, #304254 0%, #101314 100%)',
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
