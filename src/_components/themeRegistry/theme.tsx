import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import { drawerWidth } from "@/utils/constants";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const theme = createTheme({
  components: {
    // **** ButtonMUI *******

    // **** DrawerMui *******
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'url("/static/images/background_menu.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          width: drawerWidth,
        },
      },
    },

    // ****** AlertMui ******
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
  // ****** Span FontFamily ******
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  spacing: 8,
  // ******* Palette & Mode *******  
  palette: {
    mode: "light",
    primary: process.env.NEXT_PUBLIC_IS_PRODUCTION == "1" ? red : blue,
    background: {
      default: "#FFF",
    },
  },
});

export default theme;
