const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors, // include Tailwind's default palette
      border: 'var(--color-sidebar-border)',
      ring: 'var(--color-sidebar-ring)',
      background: 'var(--color-sidebar)',
      foreground: 'var(--color-sidebar-foreground)',
      primary: 'var(--color-sidebar-primary)',
      'primary-foreground': 'var(--color-sidebar-primary-foreground)',
      accent: 'var(--color-sidebar-accent)',
      'accent-foreground': 'var(--color-sidebar-accent-foreground)',
    },
  },
  plugins: [],
}
