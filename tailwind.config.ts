import type { Config } from 'tailwindcss'
import radixPlugin from 'tailwindcss-radix'
import * as defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

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
  plugins: [
    radixPlugin,
    plugin(({ addVariant }) => {
      addVariant('radix-side-top', '&[data-side="top"]')
      addVariant('radix-side-bottom', '&[data-side="bottom"]')
    })
  ]
} satisfies Config
