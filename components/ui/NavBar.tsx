import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Typography from "@mui/material/Typography";

type NavBarProps = {
  drawerWidth: number;
};

export const NavBar = ({ drawerWidth }: NavBarProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Qdrink</Typography>
      </Toolbar>
    </AppBar>
  );
};
