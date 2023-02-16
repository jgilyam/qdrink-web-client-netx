import Link from "next/link";
import { ReactNode } from "react";
import {
  useDisclosure,
  Box,
  Text,
  Flex,
  Heading,
  Avatar,
  Divider,
  Center,
} from "@chakra-ui/react";
import { MdHome, MdPeopleAlt } from "react-icons/md";
import { CiBeerMugFull } from "react-icons/ci";
import { IconType } from "react-icons";

import SideNavContent from "./SideNavContent";

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
interface Props {
  children?: ReactNode;
}
export default function SideNav({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        left="5"
        h="90vh"
        w="250px"
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex flexDir="column" w="100%" alignItems="flex-start" as="nav">
          <SideNavContent onClose={onClose} />
        </Flex>
        <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
          <Divider display="flex" />
          <Flex mt={4} align="center">
            <Avatar size="sm" src="avatar-1.jpg" />
            <Flex flexDir="column" ml={4} display="flex">
              <Heading as="h3" size="sm" color="white">
                Sylwia Weller
              </Heading>
              <Text color="gray">Admin</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
