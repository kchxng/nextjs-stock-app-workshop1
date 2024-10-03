"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Box, Menu, MenuItem } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TranslateIcon from '@mui/icons-material/Translate';
import AccountCircle from "@mui/icons-material/AccountCircle";
import { drawerWidth } from "@/utils/constants";
import { useRouter } from "next/navigation";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

type Props = {
  open: boolean;
  handleDrawerOpen: () => void;
};
export default function Header({ open, handleDrawerOpen }: Props) {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const router = useRouter();
  const handleClose = () => {
    setShowProfileMenu(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            NextJS Stock Mangement (TS) V.
            {process.env.NEXT_PUBLIC_APP_VERSION}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          {/* <Typography variant="h6" noWrap component="div" fontWeight="300">
            Updated 2023
          </Typography> */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              // edge="end"
            >
                <TranslateIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              // edge="end"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              // edge="end"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              // edge="end"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={showProfileMenu}
              onClose={handleClose}
            >
              <MenuItem
                onClick={async () => {
                  // const response = await dispatch(signOut());
                  // if (response.meta.requestStatus === "fulfilled")
                    router.push("/login");
                }}
              >
                Logout
              </MenuItem>
              <MenuItem onClick={() => handleClose}>My account</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
