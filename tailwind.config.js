/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00AEEF',
          'cyan-hover': '#0097D1',
          'cyan-dark': '#0084B7',
          'cyan-light': '#E5F7FD',
          'cyan-soft': '#F0F9FF',
          red: '#ED1C24',
          'red-hover': '#D9141B',
          'red-dark': '#B80D13',
          'red-light': '#FDF2F2',
          navy: '#102D4B',
          'navy-dark': '#0A1E33',
          'navy-deep': '#071F38',
          charcoal: '#1E293B',
          muted: '#64748B',
          border: '#E2E8F0',
          surface: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'nav': '0 2px 8px -2px rgba(16, 45, 75, 0.06)',
        'card': '0 10px 25px -5px rgba(16, 45, 75, 0.04), 0 8px 10px -6px rgba(16, 45, 75, 0.04)',
        'product': '0 20px 35px -10px rgba(0, 174, 239, 0.12), 0 10px 20px -8px rgba(16, 45, 75, 0.08)'
      }
    },
  },
  plugins: [],
}
