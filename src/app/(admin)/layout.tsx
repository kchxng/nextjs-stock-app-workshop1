"use client";

import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  return (
    <section>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </section>
  );
};
export default DefaultLayout;
