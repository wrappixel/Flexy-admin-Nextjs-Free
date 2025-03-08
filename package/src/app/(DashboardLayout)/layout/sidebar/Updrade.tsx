"use client";
import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

const Upgrade = () => (
  <Box pb={5} mt={5} px={4}>
    <Box
      p={2}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.light,
        borderRadius: "10px",
      }}
      style={{ position: "relative" }}
    >
      <img
        src="/images/backgrounds/sidebar-buynow.png"
        alt="sidebarBuynow"
        style={{
          position: "absolute",
          right: "-10px",
          top: "-18px",
        }}
      />
      <Box pb={1} pt={2} sx={{ width: "100%" }}>
        <Typography
          variant="h5"
          mb={2}
          sx={{
            color: (theme) => theme.palette.secondary.main,
            zIndex: "9",
            position: "relative",
          }}
        >
          Built with <br /> Material-UI
        </Typography>
        <Button
          color="secondary"
          href="https://www.wrappixel.com/templates/flexy-nextjs-dashboard-material-ui/?ref=376"
          fullWidth
          disableElevation
          sx={{ width: "fit-content" }}
          variant="contained"
        >
          Upgrade
        </Button>
      </Box>
    </Box>
  </Box>
);
export default Upgrade;
