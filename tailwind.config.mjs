/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',  // Muy claro, casi blanco con tinte azul
          100: '#cce1f5', // Claro suave
          200: '#99c3eb', // Azul claro
          300: '#66a5e1', // Azul medio claro
          400: '#3387d7', // Azul intermedio
          500: '#0069cd', // Azul base (similar a #004aad pero más brillante)
          600: '#005cb4', // Azul ligeramente más oscuro
          700: '#004aad', // El color exacto que pediste
          800: '#003d8f', // Azul oscuro
          900: '#003071', // Muy oscuro
          950: '#001d47', // Casi negro con tinte azul
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#f5faff',  // Casi blanco con un toque azul muy sutil
          100: '#e6f2ff', // Azul extremadamente claro
          200: '#cce6ff', // Azul claro brillante
          300: '#b3daff', // Azul suave y luminoso
          400: '#99ceff', // Azul intermedio claro
          500: '#80c2ff', // Azul base, más claro que antes
          600: '#66abff', // Azul un poco más profundo pero aún claro
          700: '#4c94e6', // Azul medio claro
          800: '#337dcc', // Azul más oscuro pero brillante
          900: '#1966b3', // Azul oscuro claro
          950: '#0d4a8c', // Tono más oscuro con tinte azul
        },
        warning: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}