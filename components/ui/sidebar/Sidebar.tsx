import { Box, Drawer, Typography, List } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactNode } from "react";
import Link from "next/link";
import { type } from "os";
import { SidebarItem } from "./SidebarItem";
import Divider from "@mui/material/Divider";

export interface LinkItem {
  name: string;
  icon: any;
  path: string;
}
interface User {
  name: string;
  rol: string;
}
const linkItems: Array<LinkItem> = [
  { name: "Home", icon: <HomeOutlinedIcon />, path: "/" },
  { name: "Clientes", icon: <AccountCircleOutlinedIcon />, path: "/clients" },
  { name: "Bebidas", icon: <SportsBarOutlinedIcon />, path: "/drinks" },
];
type SidebarProps = {
  drawerWidth: number;
};
export const Sidebar = ({ drawerWidth }: SidebarProps) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      variant="permanent"
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ padding: "5px 10px", marginBottom: "50 px" }}>
          <Typography variant="h4">Qdrink</Typography>
        </Box>

        <Divider />

        <List>
          {linkItems.map((link) => (
            <SidebarItem
              key={link.name}
              name={link.name}
              icon={link.icon}
              path={link.path}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
