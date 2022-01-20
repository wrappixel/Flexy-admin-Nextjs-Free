import React from "react";
import { Grid, Rating, Box, Typography } from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import FeatherIcon from "feather-icons-react";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const Ratings = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Basic rating">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" value={value} disabled />
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
          </Box>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Hover Feedback">
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <FeatherIcon
                icon="star"
                style={{ opacity: 0.55 }}
                fontSize="inherit"
              />
            }
          />
          {value !== null && <Box>{labels[hover !== -1 ? hover : value]}</Box>}
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Ratings;
