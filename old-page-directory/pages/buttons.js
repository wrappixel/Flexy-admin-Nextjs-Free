import {
  Grid,
  Button,
  Box,
  Stack,
  IconButton,
  Fab,
  ButtonGroup,
} from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import FeatherIcon from "feather-icons-react";

const Buttons = () => {
  return (
    <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Color Buttons">
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">
              Contained
            </Button>
            <Button variant="contained" color="error">
              Contained
            </Button>
            <Button variant="contained" color="secondary">
              Contained
            </Button>
            <Button variant="contained" color="success">
              Contained
            </Button>
            <Button variant="contained" color="warning">
              Contained
            </Button>
          </Stack>
        </BaseCard>
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Text Buttons">
          <Stack spacing={2} direction="row">
            <Button color="primary">Text</Button>
            <Button color="error">Text</Button>
            <Button color="secondary">Text</Button>
            <Button color="success">Text</Button>
            <Button color="warning">Text</Button>
          </Stack>
        </BaseCard>
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Outline Buttons">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" color="primary">
              outlined
            </Button>
            <Button variant="outlined" color="error">
              outlined
            </Button>
            <Button variant="outlined" color="secondary">
              outlined
            </Button>
            <Button variant="outlined" color="success">
              outlined
            </Button>
            <Button variant="outlined" color="warning">
              outlined
            </Button>
          </Stack>
        </BaseCard>
      </Grid>

      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Size Buttons">
          <Box sx={{ "& button": { mx: 1 } }}>
            <Button color="primary" size="small" variant="contained">
              small
            </Button>
            <Button color="error" size="medium" variant="contained">
              medium
            </Button>
            <Button color="secondary" size="large" variant="contained">
              large
            </Button>
          </Box>
        </BaseCard>
      </Grid>

      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Icon Buttons">
          <Stack spacing={2} direction="row">
            <IconButton aria-label="delete" color="success">
              <FeatherIcon icon="home" width="20" height="20" />
            </IconButton>
            <IconButton aria-label="delete" color="error">
              <FeatherIcon icon="trash" width="20" height="20" />
            </IconButton>
            <IconButton aria-label="user" color="warning">
              <FeatherIcon icon="user" width="20" height="20" />
            </IconButton>
          </Stack>
        </BaseCard>
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Fab Buttons">
          <Stack spacing={2} direction="row">
            <Fab color="primary" aria-label="add">
              <FeatherIcon icon="home" width="20" height="20" />
            </Fab>
            <Fab color="secondary" aria-label="add">
              <FeatherIcon icon="trash" width="20" height="20" />
            </Fab>
            <Fab color="secondary" disabled aria-label="add">
              <FeatherIcon icon="user" width="20" height="20" />
            </Fab>
          </Stack>
        </BaseCard>
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Group Buttons">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </BaseCard>
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <BaseCard title="Group Outline Buttons">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Buttons;
