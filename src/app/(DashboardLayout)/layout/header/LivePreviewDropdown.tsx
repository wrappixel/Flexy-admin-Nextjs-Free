import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconDeviceLaptop, IconExternalLink } from '@tabler/icons-react';
import Link from "next/link";


interface MenuItemType {
    id: number;
    title: string;
    href: string;
}

const StyledMenu = styled((props: any) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '10px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        ...theme.applyStyles?.('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    padding: '6px 16px',
    textTransform: 'none',
    display: 'flex',
    borderRadius: '7px',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    '& .MuiButton-startIcon': {
        marginRight: '4px',
    },
    '& .MuiButton-endIcon': {
        marginLeft: '4px',
    },
}));

const MenuItems: MenuItemType[] = [
    { id: 1, title: 'Bootstrap Preview', href: 'https://www.wrappixel.com/templates/flexy-bootstrap-admin-template/?ref=376' },
    { id: 2, title: 'Angular Preview', href: 'https://www.wrappixel.com/templates/flexy-material-angular-admin/?ref=376' },
    { id: 3, title: 'VueJs Preview', href: 'https://www.wrappixel.com/templates/flexy-vuetify-dashboard/?ref=376' },
    { id: 4, title: 'NextJs Preview', href: 'https://www.wrappixel.com/templates/flexy-nextjs-dashboard-material-ui/?ref=376' },
    { id: 5, title: 'Bootstrap Preview', href: 'https://www.wrappixel.com/templates/flexy-bootstrap-admin-template/?ref=376' },
    { id: 6, title: 'ReactJs Preview', href: ' https://www.wrappixel.com/templates/flexy-react-material-dashboard-admin/?ref=376' },
    { id: 7, title: 'NuxtJs Preview', href: ' https://www.wrappixel.com/templates/flexy-nuxt-js-vuetify-admin-template/?ref=376' },

];

const LivePreviewDropdown: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <StyledButton
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                startIcon={<IconDeviceLaptop size={18} />}
            >
                Live Preview
            </StyledButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {MenuItems.map((item) => (
                    <StyledLink key={item.id} href={item.href} target='blank'>
                        <MenuItem sx={{ gap: '4px', padding: '8px 16px' }} onClick={handleClose} disableRipple>
                            <IconExternalLink size={18} />
                            {item.title}
                        </MenuItem>
                    </StyledLink>
                ))}
            </StyledMenu>
        </div>
    );
};

export default LivePreviewDropdown;
