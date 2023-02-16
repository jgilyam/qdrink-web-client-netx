import { Inter } from "@next/font/google";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box bg="tomato" w="100%" p={4} color="white">
        DashBoard
      </Box>
    </>
  );
}
