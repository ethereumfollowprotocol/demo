import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import radixPlugin from 'tailwindcss-radix'
import * as defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.serif],
      mono: ['JetBrains', '"JetBrains Mono"', ...defaultTheme.fontFamily.mono]
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-ibm-plex-mono)']
      }
    }
  },
  plugins: [
    radixPlugin,
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('radix-side-top', '&[data-side="top"]')
      addVariant('radix-side-bottom', '&[data-side="bottom"]')
    })
  ]
} satisfies Config
