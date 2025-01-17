"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { button } from "./custom-themes/button";

const theme = createTheme({
  components: {
    ...button, // Integrate the custom button styles
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#1976d2",
    },
    success: {
      main: "#1976d2",
    },
    info: {
      main: "#1976d2",
    },
    warning: {
      main: "#1976d2",
    },
    error: {
      main: "#ff0000",
    },
  },
});

export default function ThemeProviderWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
