import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        bounce_right: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: {
        'bounce-right': 'bounce_right 1s infinite alternate ease-in-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: false,
      layout: {},
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: '#C6C3F5',
            transparent: 'transparent',
            white: '#ffffff',
            black: '#000000',
            purple: '#633786',
            greenStatus: '#5EAEA5',
            redStatus: '#AE5E6D',
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: '#C6C3F5',
            transparent: 'transparent',
            white: '#ffffff',
            black: '#000000',
            purple: '#633786',
            greenStatus: '#5EAEA5',
            redStatus: '#AE5E6D',
          }, // dark theme colors
        },
      },
    }),
  ],
}
export default config
