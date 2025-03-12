import React from "react";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import {
  Logo,
  Sidebar as MUI_Sidebar,
  Menu,
  MenuItem,
  Submenu,
} from "react-mui-sidebar";

import Menuitems from "./MenuItems";
import Link from "next/link";


import { IconPoint } from "@tabler/icons-react";
import Upgrade from "./Updrade";

const renderMenuItems = (items: any[], pathDirect: string) => {
  return items.map((item) => {
    const Icon = item.icon ? item.icon : IconPoint;
    const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

    if (item.subheader) {
      // Display Subheader
      return (
        <Box sx={{ margin: "0 -24px" }} key={item.subheader}>
          <Menu subHeading={item.subheader} key={item.subheader}>
            <></>
          </Menu>
        </Box>
      );
    }

    //If the item has children (submenu)
    if (item.children) {
      return (
        <Submenu key={item.id} title={item.title} icon={itemIcon}>
          {renderMenuItems(item.children, pathDirect)}
        </Submenu>
      );
    }

    // If the item has no children, render a MenuItem

    return (
      <MenuItem
        key={item.id}
        isSelected={pathDirect === item?.href}
        icon={itemIcon}
        component="div"
        link={item.href && item.href !== "" ? item.href : undefined}
        target={item.href && item.href.startsWith("https") ? "_blank" : "_self"}
        badge={item.chip ? true : false}
        badgeContent={item.chip || ""}
        badgeColor="secondary"
        badgeTextColor="#1a9bfc"
        disabled={item.disabled}
      >
        <Link href={item.href} passHref legacyBehavior >
          <a target={item.href.startsWith("https") ? "_blank" : "_self"} rel="noopener noreferrer">
            <Typography component='span' color={pathDirect === item?.href ? '#fff' : 'inherit'}>
              {item.title}</Typography>
          </a>
        </Link>
        {/* {item.title} */}
      </MenuItem>
    );
  });
};

const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: "20px", overflowX: "hidden" }}>
      <MUI_Sidebar
        width={"100%"}
        showProfile={false}
        themeColor="#1e4db7"
        themeSecondaryColor="#1a97f51a"
      >
        <Box sx={{ margin: "0 -24px" }}>
          <Logo img="/images/logos/logo-dark.svg" component={Link} href="/">
            Spike
          </Logo>
        </Box>

        {renderMenuItems(Menuitems, pathDirect)}

      </MUI_Sidebar>

    </Box>
  );
};

export default SidebarItems;
