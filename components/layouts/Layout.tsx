import Head from "next/head";
import { Box, Toolbar } from "@mui/material";
import { FC, ReactNode } from "react";
import { NavBar, Sidebar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}
const drawerWidth = 270;

export const Layout: FC<Props> = ({ title = "Qdrink", children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Head>
        <title>{title}</title>
      </Head>

      {/*<NavBar drawerWidth={drawerWidth} />*/}
      <Sidebar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/*<Toolbar />*/}
        {children}
      </Box>
    </Box>
  );
};
