'use client'
import React from "react";
import { Grid2 as Grid, Box, Slider } from "@mui/material";
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';

const valuetext = (value: number | any) => {
    return `${value}°C`;
};

const valuetext2 = (value: number) => {
    return `${value}°C`;
};

const ExSlider = () => {
    // 2
    const [value, setValue] = React.useState(30);


    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    }

    const [value2, setValue2] = React.useState<number[]>([20, 37]);

    const handleChange2 = (event: any, newValue2: number | number[]) => {
        setValue2(newValue2 as number[]);
    };

    return (
        (<Box>
            <Grid container spacing={3}>
                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 4, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Default Slider">
                        <Slider defaultValue={30} aria-label="slider" />
                    </BaseCard>
                </Grid>

                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 4, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Default Disabled Slider">
                        <Slider disabled defaultValue={30} aria-label="slider" />
                    </BaseCard>
                </Grid>

                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 4, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Default Volumn Slider">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <VolumeDownOutlinedIcon />
                            <Slider
                                aria-label="Volume"
                                value={value}
                                onChange={handleChange}

                            />
                            <VolumeUpOutlinedIcon />
                        </Box>
                    </BaseCard>
                </Grid>

                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 4, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Default Discrete Slider">
                        <Slider
                            aria-label="Temperature"
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={110}
                        />
                    </BaseCard>
                </Grid>

                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 4, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Default Range  Slider">
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={value2}
                            onChange={handleChange2}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext2}
                        />
                    </BaseCard>
                </Grid>
            </Grid>
        </Box>)
    );
};

export default ExSlider;
