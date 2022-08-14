import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

const theme = extendTheme({
  config: config,
  colors: {
    primary: {
      100: '#111827',

    },
    secondary: {

    },
    gray: {
      100: '#6B7280',
      200: '#F3F4F6',
      300: '#d1d5db',
      400: '#9CA3AF',
      500: '#E5E7EB',
      600: '#4b5563',
      700: '#F3F4F6 ',
    },
    blue: {
      600: '#2563Eb',
      500: '#7C3AED',
      400: '#4F46E5',
      300: '#0284C7',
      200: '#0891B2',
      100: '#E0F2FE',
    },
    red: {
      200: '#E11D48',
      300: '#EA580C',
    },
    green: {
      100: '#D1FAE5',
      200: '#16A34A',
      300: '#059669',
      400: '#0D9488',
    },
    black: { 
      400: '#475569',
      300: '#1f2937',
      200: '#374151',
      100: "#000000",
    },
    white: {
      100: "#FFFFFF",
    },
  },
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
    mono: `'Nunito', sans-serif`,
  },
})

export default theme