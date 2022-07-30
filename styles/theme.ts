import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      100: '#111827',

    },
    secondary: {

    },
    gray: {
      100: '#6B7280',

    },
    blue: {
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
      200: '#37451',
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