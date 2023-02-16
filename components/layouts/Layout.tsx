import { Box, GridItem, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import SideNav from "./sidenav/SideNav";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Box h="7.5vh">header</Box>
      <Flex w="100vw" bg="#191F22">
        <SideNav></SideNav>
        <Box w="80vw" bg="#75777A">
          <main>{children}</main>
        </Box>
      </Flex>
    </>
  );
}
