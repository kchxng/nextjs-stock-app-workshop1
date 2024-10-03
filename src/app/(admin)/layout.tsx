"use client";
import * as React from "react";
import DrawerHeader from "@/_components/layouts/drawer-header";
import Header from "@/_components/layouts/header";
import Sidebar from "@/_components/layouts/sidebar";
import { Box, styled } from "@mui/material";
import { drawerWidth } from "@/utils/constants";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

// **************Properties configuration********************************
type Props = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  const [open, setOpen] = React.useState<boolean>(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <section>
      <Box sx={{ display: "flex" }}>
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Content */}
          <Main open={open}>
            <DrawerHeader />
            {children}
          </Main>
        </Box>
      </Box>
    </section>
  );
};
export default DefaultLayout;
