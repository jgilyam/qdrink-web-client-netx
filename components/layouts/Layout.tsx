import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import SideNav from "./sidenav/SideNav";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Grid
        templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"300px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="brand.200" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          <SideNav />
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <main>{children}</main>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}
