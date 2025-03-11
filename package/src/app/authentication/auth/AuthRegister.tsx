import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { Stack } from '@mui/system';

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';


interface registerType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
            <Stack mb={3}>
                <Typography variant="subtitle2"
                    fontWeight={500} component="label" htmlFor='name' mb="5px">Name</Typography>
                <CustomTextField id="name" size="small" variant="outlined" fullWidth />

                <Typography variant="subtitle2"
                    fontWeight={500} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                <CustomTextField id="email" size="small" variant="outlined" fullWidth />

                <Typography variant="subtitle2"
                    fontWeight={500} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <CustomTextField id="password" size="small" variant="outlined" fullWidth />
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} href="/authentication/login">
                Sign Up
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthRegister;