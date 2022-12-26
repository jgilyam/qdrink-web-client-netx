import { Grid, GridItem, Box } from "@chakra-ui/react";
import Link from "next/link";
import { Divider, ListItem, ListIcon, List } from "@chakra-ui/react";
import { MdHome, MdPeopleAlt } from "react-icons/md";
import { CiBeerMugFull } from "react-icons/ci";

export default function SideNav() {
  return (
    <>
      <Box bg="tomato" w="90%" p={4} color="white">
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdHome} color="green.500" />
            <Link href="/">Dashboard</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <ListIcon as={MdPeopleAlt} color="green.500" />
            <Link href="/clients">Clientes</Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CiBeerMugFull} color="green.500" />
            <Link href="/drinks">Bebidas</Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
