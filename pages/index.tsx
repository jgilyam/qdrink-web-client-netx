import { Inter } from "@next/font/google";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Box bg="tomato" w="20%" p={4} color="white">
        DashBoard
      </Box>
    </>
  );
}
