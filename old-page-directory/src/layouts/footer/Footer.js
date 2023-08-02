import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © 2022 All rights reserved by{" "}
        <Link href="https://www.wrappixel.com">
          <a>Wrappixel.com</a>
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
