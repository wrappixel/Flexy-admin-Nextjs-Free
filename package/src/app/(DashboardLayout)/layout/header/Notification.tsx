import React, { useState } from 'react';
import { IconButton, Badge, Menu, MenuItem, Typography } from '@mui/material';
import { IconBell } from "@tabler/icons-react";

export default function Notification() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="notification-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="large"
      >
        <Badge variant="dot" color="primary">
          <IconBell size="21" stroke="1.5" />
        </Badge>
      </IconButton>

      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <MenuItem onClick={handleClose}>
          <Typography variant="body2">Item 1</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body2">Item 2</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
