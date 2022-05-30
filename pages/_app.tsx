import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { lightMode } from "../themes";
import { AuthProvider } from "../context/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={lightMode}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
