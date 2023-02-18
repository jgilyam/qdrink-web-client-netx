import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { LinkItem } from "./Sidebar";

export const SidebarItem = (linkItem: LinkItem) => {
  return (
    <Link href={linkItem.path} passHref legacyBehavior>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{linkItem.icon}</ListItemIcon>
          <ListItemText primary={linkItem.name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
