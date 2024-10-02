"use client";

import { Button, IconButton, Badge,Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsIcon from "@mui/icons-material/Notifications";

type Props = {
  searchParams: {
    id?: string;
    name?: string;
  };
};

export default function ProductPage({ searchParams }: Readonly<Props>) {
  return (
    <div>
      <h2>Product Query</h2>
      <Stack direction="row" spacing={2}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" endIcon={<DeleteIcon />}>
        Outlined
      </Button>
      </Stack>
      <br />
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <br />
      <span>
        Id: {searchParams.id}, Name: {searchParams.name}
      </span>
    </div>
  );
}
