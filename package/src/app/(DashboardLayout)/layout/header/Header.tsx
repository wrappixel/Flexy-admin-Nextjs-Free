import React, { useContext } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { DashboardContext } from '@/app/context/DashboardContext';
// components
import Profile from './Profile';
import Notification from './Notification';
import { IconMenu2 } from '@tabler/icons-react';



const Header = () => {



  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
    zIndex: 'unset'
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={() => setIsMobileSidebar(!isMobileSidebar)}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu2 width="20" height="20" />
        </IconButton>

        <Notification />

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">

          <Button variant="contained" color="primary" target="_blank" href="https://www.wrappixel.com/templates/flexy-nextjs-dashboard-material-ui/?ref=376#demos">
            Check Pro Template
          </Button>

          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;


