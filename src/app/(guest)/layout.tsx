"use client";
import * as React from "react";
// import DrawerHeader from "@/_components/layouts/drawer-header";
// import Header from "@/_components/layouts/header";
// import Sidebar from "@/_components/layouts/sidebar";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  //   const [open, setOpen] = React.useState<boolean>(true);
  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };
  return (
    // <section>
    <Box sx={{ display: "flex" }}>
      {/* <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} /> */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </Box>
    </Box>
    // </section>
  );
};
export default DefaultLayout;
