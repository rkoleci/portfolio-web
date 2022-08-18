import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const theme = extendTheme({
  config: config,
  colors: {
    primary: {
      100: "#111827",
    },
    secondary: {},
    gray: {
      100: "#6B7280",
      200: "#F3F4F6",
      300: "#d1d5db",
      400: "#9CA3AF",
      500: "#E5E7EB",
      600: "#4b5563",
      700: "#F3F4F6 ",
    },
    blue: {
      600: "#2563Eb",
      500: "#7C3AED",
      400: "#4F46E5",
      300: "#0284C7",
      200: "#0891B2",
      100: "#E0F2FE",
    },
    red: {
      200: "#E11D48",
      300: "#EA580C",
    },
    green: {
      100: "#D1FAE5",
      200: "#16A34A",
      300: "#059669",
      400: "#0D9488",
    },
    orange: {
      300: "#D97706",
    },
    black: {
      400: "#475569",
      300: "#1f2937",
      200: "#374151",
      100: "#000000",
    },
    white: {
      100: "#FFFFFF",
    },
  },
  semanticTokens: {
    colors: {
      "primary.100": {
        default: "#111827",
        _dark: "",
      },
      "white.100": {
        default: "#FFF",
        _dark: "#1E293B",
      },
      "black.100": {
        default: "#000",
        _dark: "#fff",
      },
      "black.200": {
        default: "black.200",
        _dark: "white.100",
      },
      "black.300": {
        default: "black.300",
        _dark: "white.100",
      },
      "black.400": {
        default: "black.400",
        _dark: "white.100",
      },
      "orange.300": {
        default: "#D97706",
        _dark: "blue",
      },
      "green.100": {
        default: "#D1FAE5",
        _dark: "red",
      },
      "green.200": {
        default: "#16A34A",
        _dark: "red",
      },
      "green.300": {
        default: "#059669",
        _dark: "red",
      },
      "green.400": {
        default: "#0D9488",
        _dark: "red",
      },
      "red.200": {
        default: "#E11D48",
        __dark: "",
      },
      "red.300": {
        default: "#EA580C",
        __dark: "",
      },
      "blue.100": {
        default: "#E0F2FE",
        _dark: "",
      },
      "blue.200": {
        default: "#0891B2",
        _dark: "",
      },
      "blue.300": {
        default: "#0284C7",
        _dark: "",
      },
      "blue.400": {
        default: "#4F46E5",
        _dark: "",
      },
      "blue.500": {
        default: "#7C3AED",
        _dark: "",
      },
      "blue.600": {
        default: "#2563Eb",
        _dark: "",
      },
      "gray.100": {
        default: "#6B7280",
        _dark: "",
      },
      "gray.200": {
        default: "#F3F4F6",
        _dark: "",
      },
      "gray.300": {
        default: "#d1d5db",
        _dark: "",
      },
      "gray.400": {
        default: "#9CA3AF",
        _dark: "",
      },
      "gray.500": {
        default: "#E5E7EB",
        _dark: "",
      },
      "gray.600": {
        default: "#4b5563",
        _dark: "",
      },
      "gray.700": {
        default: "#F3F4F6",
        _dark: "",
      },

      "footer-bg": {
        default: "gray.700",
        _dark: "white.100",
      },
      "footer-text": {
        default: "gray.600",
        _dark: "#fff",
      },
      "footer-icon": {
        default: "gray.100",
        _dark: "#fff",
      },
    },
  },
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
    mono: `'Nunito', sans-serif`,
  },
});

export default theme;
