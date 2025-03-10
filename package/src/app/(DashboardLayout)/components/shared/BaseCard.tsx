import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = (props: any) => {
  return (
    <Card
      variant="elevation"
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      <Box p={2} display="flex" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight='500'>{props.title}</Typography>
        </Box>
        {props.chiptitle ? (
          <Chip
            label={props.chiptitle}
            size="small"
            sx={{
              ml: "auto",
              fontSize: "12px",
              fontWeight: "500",
            }}
          ></Chip>
        ) : (
          ""
        )}
      </Box>
      <Divider />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
