import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import SideNav from "../components/layouts/sidenav/SideNav";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
import qDrinkTheme from "../theme/qDrinkTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={qDrinkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
