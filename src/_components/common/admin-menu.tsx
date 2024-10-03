import {
  Layers,
  BarChart,
  Person,
  Shop,
} from "@mui/icons-material";
// ************ Admin Menu **********
export const routesList = [
  { pathname: "/stock", text: "Stock", icon: <Layers /> },
  { pathname: "/report", text: "Report", icon: <BarChart /> },
  { pathname: "/shop", text: "Shop", icon: <Shop /> },
  { pathname: "/abouts", text: "About us", icon: <Person /> },
];
