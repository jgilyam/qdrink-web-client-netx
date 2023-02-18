import Link from "next/link";
import { ReactNode } from "react";

import { MdHome, MdPeopleAlt } from "react-icons/md";
import { CiBeerMugFull } from "react-icons/ci";
import { IconType } from "react-icons";

import SideNavContent from "./SideNavContent";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
interface User {
  name: string;
  rol: string;
}
const linkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: MdHome, path: "/" },
  { name: "Clientes", icon: MdPeopleAlt, path: "/clients" },
  { name: "Bebidas", icon: CiBeerMugFull, path: "/drinks" },
];
const user: User = {
  name: "Juan Pablo Gilyam",
  rol: "Admin",
};
interface Props {
  children?: ReactNode;
}
export default function SideNav({ children }: Props) {
  return <></>;
}
