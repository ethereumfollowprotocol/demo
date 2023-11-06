import type { Config } from 'tailwindcss'
import * as defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      serif: ['Roboto', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      fontFamily: {}
    }
  },
  plugins: []
} satisfies Config
