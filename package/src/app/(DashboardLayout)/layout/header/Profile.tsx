import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
  ListItemIcon,
  ListItemButton,
  MenuItem,
  List,
  ListItemText,
} from "@mui/material";

import { IconDashboard, IconMail, IconUser } from '@tabler/icons-react';


const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const theme = useTheme();



  return (
    <Box display='flex' gap={1}>
      <Divider orientation="vertical" variant="middle" flexItem />
      <IconButton
        size="large"
        aria-label="menu"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            borderRadius: "9px",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={"/images/users/1.jpg"}
          alt={"ProfileImg"}
          sx={{
            width: 35,
            height: 35,
          }}
        />

      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="profile-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={(theme) => ({
          "& .MuiMenu-paper": {
            width: "250px",
            [theme.breakpoints.down("sm")]: {
              top: "60px"
            },
            [theme.breakpoints.up("md")]: {
              top: "140px"
            },
            [theme.breakpoints.up("lg")]: {
              top: "140px"
            },
          },
        })}
      >
        <MenuItem>
          <Link href='/utilities/forms'>
            <Box display='flex' alignItems='center'>
              <ListItemIcon>
                <IconUser width={20} />
              </ListItemIcon>
              <ListItemText><Typography variant='subtitle1' color='textPrimary'>My Profile</Typography></ListItemText>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/utilities/table'>
            <Box display='flex' alignItems='center'>
              <ListItemIcon>
                <IconMail width={20} />
              </ListItemIcon>
              <ListItemText><Typography variant='subtitle1' color='textPrimary'>Performance</Typography></ListItemText>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/'>
            <Box display='flex' alignItems='center'>
              <ListItemIcon>
                <IconDashboard width={20} />
              </ListItemIcon>
              <ListItemText><Typography variant='subtitle1' color='textPrimary'>My Dashboard</Typography></ListItemText>
            </Box>
          </Link>
        </MenuItem>
        <Box mt={1} py={1} px={2}>
          <Button href="/authentication/login" variant="outlined" color="primary" component={Link} fullWidth>
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
