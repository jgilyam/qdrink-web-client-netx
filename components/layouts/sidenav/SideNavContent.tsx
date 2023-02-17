import Link from "next/link";

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

export default function SideNavContent() {
  return <></>;
}
