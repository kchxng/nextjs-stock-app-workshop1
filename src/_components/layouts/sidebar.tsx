"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { drawerWidth } from "@/utils/constants";
import DrawerHeader from "./drawer-header";
import { Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routesList } from "../common/admin-menu";
import theme from "../themeRegistry/theme";

// const drawerWidth = 240;
const CustomLink = styled(
  Link,
  {}
)(() => ({
  textDecoration: "none",
  color: "black",
}));

type Props = {
  open: boolean;
  handleDrawerClose: () => void;
};
export default function Sidebar({ open, handleDrawerClose }: Props) {
  // const theme = useTheme();
  const pathname = usePathname();
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
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ backgroundColor: blue }}
        >
          <Image
            src="/static/images/ngtech_logo.png"
            width={150}
            height={35}
            alt="logo"
            style={{ objectFit: "contain" }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />
      <List>
        {routesList.map((route) => {
          return (
            <CustomLink href={route.pathname} passHref key={route.text}>
              <ListItem
                className={pathname === route.pathname ? "Mui-selected" : ""}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItem>
            </CustomLink>
          );
        })}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
