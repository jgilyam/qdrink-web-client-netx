import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ligthTheme, darkTheme } from "../themes";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ligthTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
