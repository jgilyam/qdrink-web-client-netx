import Link from "next/link";

import {
  ListItem,
  ListIcon,
  List,
  BoxProps,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { MdHome, MdPeopleAlt } from "react-icons/md";
import { CiBeerMugFull } from "react-icons/ci";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const linkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: MdHome, path: "/" },
  { name: "Clientes", icon: MdPeopleAlt, path: "/clients" },
  { name: "Bebidas", icon: CiBeerMugFull, path: "/drinks" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function SideNavContent({ onClose, ...rest }: SidebarProps) {
  return (
    <>
      <Flex
        color="#75777A"
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Image
          src="images/favicon.png"
          alt="Dan Abramov"
          boxSize="50px"
        ></Image>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          qDrink
        </Text>
      </Flex>
      <List spacing={2} ml="4" color="#75777A" fontSize="16px" w="90%">
        {linkItems.map((link) => (
          <ListItem
            key={link.name}
            p="3"
            borderRadius={"3xl"}
            _hover={{
              background: "#CFA12C",
              color: "white",
            }}
          >
            <ListIcon as={link.icon} color="#75777A" />
            <Link href={link.path}>{link.name}</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
