import {
  Box,
  Drawer,
  Typography,
  List,
  SvgIconTypeMap,
  SvgIcon,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactNode } from "react";

interface LinkItemProps {
  name: string;
  icon: any;
  path: string;
}
interface User {
  name: string;
  rol: string;
}
const linkItems: Array<LinkItemProps> = [
  { name: "Home", icon: <HomeOutlinedIcon />, path: "/" },
  { name: "Clientes", icon: <AccountCircleOutlinedIcon />, path: "/clients" },
  { name: "Bebidas", icon: <SportsBarOutlinedIcon />, path: "/drinks" },
];
const drawerWidth = 240;

export const Sidebar = () => {
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
      open={true}
      onClose={() => {
        console.log("cerrando");
      }}
    >
      <Box sx={{ width: 300 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h5">Dashboard</Typography>
        </Box>

        <List>
          {linkItems.map((link) => (
            <ListItem key={link.name}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText>{link.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
