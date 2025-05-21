"use client";
import React from 'react';
import Link from 'next/link';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";

import AuthRegister from '../auth/AuthRegister';

const Register = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                '&:before': {
                    content: '""',
                    background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient 15s ease infinite',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    opacity: '0.3',
                },
            }}
        >
            <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
                <Grid
                    size={{ xs: 12, lg: 4, xl: 3, sm: 12 }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Card elevation={2} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            {/* <Logo /> */}
                            <Logo />
                        </Box>
                        <AuthRegister
                            subtext={
                                <Typography variant="subtitle2" textAlign="center" color="textSecondary" my={1}>
                                    Your Social Campaigns
                                </Typography>
                            }
                            subtitle={
                                <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                                    <Typography color="textSecondary" variant="subtitle1" fontWeight="500">
                                        Already have an Account?
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        href="/authentication/login"
                                        fontWeight="500"
                                        sx={{
                                            textDecoration: 'none',
                                            color: 'primary.main',
                                        }}
                                    >
                                        Sign in
                                    </Typography>
                                </Stack>
                            }
                        />
                    </Card>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Register