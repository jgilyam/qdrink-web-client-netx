import { Inter } from "@next/font/google";
import Head from "next/head";

import { Typography } from "@mui/material";
import { Layout } from "../components/layouts";
const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Typography>Hola Hola</Typography>
      </Layout>
    </>
  );
}
