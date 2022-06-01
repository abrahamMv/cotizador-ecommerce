import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { lightMode } from "../themes";
import { AuthProvider } from "../context/auth";
import { ProductsProvider } from "../context/products";
import { ShopProvider } from "../context/shop";
import { QuotationProvider } from "../context/quotation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuotationProvider>
      <ShopProvider>
        <ProductsProvider>
          <AuthProvider>
            <ThemeProvider theme={lightMode}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </AuthProvider>
        </ProductsProvider>
      </ShopProvider>
    </QuotationProvider>
  );
}

export default MyApp;
