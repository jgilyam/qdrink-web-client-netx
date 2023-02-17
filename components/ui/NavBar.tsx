import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Typography from "@mui/material/Typography";

export const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Qdrink</Typography>
      </Toolbar>
    </AppBar>
  );
};
