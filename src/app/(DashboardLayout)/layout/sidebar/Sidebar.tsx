import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { DashboardContext } from "@/app/context/DashboardContext";
import { useContext } from "react";
import Upgrade from "./Updrade";
import Scrollbar from "../../components/custom-scroll/Scrollbar";


const Sidebar = ({
}) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);
  const sidebarWidth = "270px";


  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              top: '64px'
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
            <Box
            >
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
              <Upgrade />
            </Box>
          </Scrollbar>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebar}
      onClose={() => setIsMobileSidebar(!isMobileSidebar)}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >

      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
        <SidebarItems />
      </Scrollbar>
      <Upgrade />
    </Drawer>
  );
};

export default Sidebar;

