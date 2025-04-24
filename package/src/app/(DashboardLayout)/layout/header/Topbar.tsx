import { Box, AppBar, Toolbar, styled, Stack, Button } from "@mui/material";

import { IconLifebuoy, IconGift, IconBriefcase } from "@tabler/icons-react";
import { Typography } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";
import LivePreviewDropdown from "./LivePreviewDropdown";

const Topbar = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "linear-gradient(90deg,#0f0533 0,#1b0a5c 100%)",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "72px",
    },
    zIndex: 9,
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  const GhostButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: "#ffffff00",
    boxShadow: "none",
    borderRadius: "7px",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiButton-startIcon": {
      marginRight: "4px",
    },
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled sx={{ padding: "16px 24px", justifyContent: "space-between", flexDirection: { md: "row", xs: "column" }, gap: "16px", display: { md: "flex" } }}>
        <Stack
          spacing={{ xs: 1, sm: 2.5 }}
          direction="row"
          useFlexGap
          sx={{
            alignItems: "center",
            display: { xs: "none", md: "flex" }
          }}
        >
          <Link href="https://www.wrappixel.com/" style={{ display: "flex" }}>
            <img src="/images/logos/logo-wrappixel.svg" width={147} alt="logo" />
          </Link>
          <Stack

            direction="row"
            sx={{ gap: "16px", paddingLeft: "20px", borderLeft: "1px solid rgba(255,255,255,.4)", display: { xs: "none", lg: "flex" } }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                href="https://www.wrappixel.com/templates/category/bootstrap-templates/"
                style={{ display: "flex", height: "fit-content" }}
                target="_blank"
              >
                <GhostButton sx={{ gap: "8px", padding: "0", fontSize: "16px", ":hover": { color: "#714bff", backgroundColor: "transparent" } }}>
                  <Icon icon="solar:window-frame-linear" width={20} />

                  Templates
                </GhostButton>
              </Link>

            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                href="https://support.wrappixel.com/"
                style={{ display: "flex", height: "fit-content" }}
                target="_blank"
              >
                <GhostButton sx={{ gap: "8px", padding: "0", fontSize: "16px", ":hover": { color: "#714bff", backgroundColor: "transparent" } }}>
                  <Icon icon="solar:question-circle-linear" width={20} />

                  Help
                </GhostButton>
              </Link>

            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                href="https://www.wrappixel.com/hire-us/"
                style={{ display: "flex", height: "fit-content" }}
                target="_blank"
              >
                <GhostButton sx={{ gap: "8px", padding: "0", fontSize: "16px", ":hover": { color: "#714bff", backgroundColor: "transparent" } }}>
                  <Icon icon="solar:case-round-linear" width={20} />

                  Hire Us
                </GhostButton>
              </Link>

            </Box>
          </Stack>
        </Stack>
        
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" }, gap: "16px", display: { md: "flex" }
          }}
        >
          <Typography
            variant="h6"
            sx={{ textTransform: "uppercase", fontSize: "14px", background: "linear-gradient(90deg,#fff 0,#8d70f8 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: (theme) => theme.palette.primary.contrastText }}
          >
            Checkout Pro Version
          </Typography>
          {/* <DropdownMenu/> */}

          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              flexDirection: { md: "row", xs: "column" }, gap: "10px", display: { md: "flex" }
            }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                gap: "10px",
              }}
            >
              <LivePreviewDropdown />

              <Button sx={{ gap: "8px", borderRadius: "7px", backgroundColor: "#8d70f8", fontSize: "16px", ":hover": { backgroundColor: "#714bff" } }} variant="contained" href="https://www.wrappixel.com/templates/flexy-nextjs-dashboard-material-ui/?ref=376" target="_blank">
                <Icon icon="solar:crown-linear" width={18} />
                Get Pro
              </Button>
            </Stack>

            <Button sx={{ gap: "8px", borderRadius: "7px", color: "#000000", backgroundColor: "#b3f143", fontSize: "16px", ":hover": { backgroundColor: "#90de03" } }} variant="contained" href="https://www.wrappixel.com/all-access-pass/?ref=376" target="_blank">
              <Icon icon="solar:bolt-linear" width={18} />
              All Access Pass
            </Button>
          </Stack>

        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Topbar;
