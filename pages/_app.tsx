import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { lightMode } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightMode}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
