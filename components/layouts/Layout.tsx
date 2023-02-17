import Head from "next/head";
import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import SideNav from "./sidenav/SideNav";
import { NavBar, Sidebar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ title = "Qdrink", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />
      <Sidebar />

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
