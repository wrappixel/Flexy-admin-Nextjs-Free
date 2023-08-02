import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import sidebarBuynowsvg from "../../../assets/images/backgrounds/sidebar-buynow-bg.svg";

const Buynow = () => (
  <Box pb={5} mt={5}>
    <Box
      pl={3}
      pr={3}
      m={1}
      textAlign="center"
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Image
        src={sidebarBuynowsvg}
        alt={sidebarBuynowsvg}
        className="buyNowImg"
      />
      <Box pb={3} pt={3}>
        <Typography variant="h4" fontWeight="700" mb={2}>
          Get This for Free
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          target="_blank"
          href="https://www.wrappixel.com/templates/flexy-next-js-free-admin-template/"
          sx={{ marginBottom: "10px" }}
        >
          Download Free
        </Button>

        <Button
          color="secondary"
          href="https://www.wrappixel.com/templates/flexy-react-material-dashboard-admin/"
          fullWidth
          target="_blank"
          disableElevation
          variant="contained"
        >
          Check Pro
        </Button>
      </Box>
    </Box>
  </Box>
);
export default Buynow;
