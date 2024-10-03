"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};
export default function ThemeRegistry({ children }: Props) {
//   const theme = createTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
