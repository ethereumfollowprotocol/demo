import type { Config } from 'tailwindcss'
import * as defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      serif: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.serif],
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-ibm-plex-mono)']
      }
    }
  },
  plugins: []
} satisfies Config
