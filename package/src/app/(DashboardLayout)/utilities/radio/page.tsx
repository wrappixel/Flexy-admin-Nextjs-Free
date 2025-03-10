'use client'
import React from "react";
import {
    Grid2 as Grid,
    Box,
    Radio,
    FormControlLabel,
    RadioGroup,
} from "@mui/material";

import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';


const ExRadio = () => {
    // 2
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setChecked(event.target.checked);
    };

    const [selectedValue, setSelectedValue] = React.useState("a");
    const handleChange2 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange2,
        value: item,
        name: "size-radio-button-demo",
        inputProps: { "aria-label": item },
    });
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
                    <BaseCard title="Default Radio">
                        <Box
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Radio
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ "aria-label": "primary checkbox" }}
                            />

                            <Radio
                                disabled
                                inputProps={{ "aria-label": "disabled checked checkbox" }}
                            />
                            <Radio
                                color="default"
                                inputProps={{ "aria-label": "checkbox with default color" }}
                            />
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
                    <BaseCard title="Default Colors">
                        <Box
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Radio
                                checked={checked}
                                onChange={handleChange}
                                color="primary"
                                inputProps={{ "aria-label": "primary checkbox" }}
                            />

                            <Radio
                                checked={checked}
                                onChange={handleChange}
                                color="secondary"
                                inputProps={{ "aria-label": "primary checkbox" }}
                            />

                            <Radio
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ "aria-label": "primary checkbox" }}
                                sx={{
                                    color: "success.main",
                                    "&.Mui-checked": {
                                        color: "success.main",
                                    },
                                }}
                            />

                            <Radio
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ "aria-label": "primary checkbox" }}
                                sx={{
                                    color: "error.main",
                                    "&.Mui-checked": {
                                        color: "error.main",
                                    },
                                }}
                            />

                            <Radio
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ "aria-label": "primary checkbox" }}
                                sx={{
                                    color: "warning.main",
                                    "&.Mui-checked": {
                                        color: "warning.main",
                                    },
                                }}
                            />

                            <Radio
                                checked={checked}
                                onChange={handleChange2}
                                inputProps={{ "aria-label": "primary checkbox" }}
                                sx={{
                                    color: "primary.main",
                                    "&.Mui-checked": {
                                        color: "primary.main",
                                    },
                                }}
                            />
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
                    <BaseCard title="Default Sizes">
                        <Box
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Radio {...controlProps("a")} size="small" />
                            <Radio {...controlProps("b")} />
                            <Radio
                                {...controlProps("c")}
                                sx={{
                                    "& .MuiSvgIcon-root": {
                                        fontSize: 28,
                                    },
                                }}
                            />
                        </Box>
                    </BaseCard>
                </Grid>

                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 6, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Default Placement">
                        <RadioGroup
                            row
                            aria-label="position"
                            name="position"
                            defaultValue="top"
                        >
                            <FormControlLabel
                                value="top"
                                control={<Radio />}
                                label="Top"
                                labelPlacement="top"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Radio />}
                                label="Start"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="bottom"
                                control={<Radio />}
                                label="Bottom"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel value="end" control={<Radio />} label="End" />
                        </RadioGroup>
                    </BaseCard>
                </Grid>

                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 6, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Default Color with Label">
                        <Box
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <FormControlLabel
                                value="end"
                                control={<Radio color="primary" checked />}
                                label="Primary"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Radio color="secondary" checked />}
                                label="Secondary"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={
                                    <Radio

                                        sx={{
                                            color: "success.main",
                                            "&.Mui-checked": {
                                                color: "success.main",
                                            },
                                        }}
                                    />
                                }
                                label="Success"
                                labelPlacement="end"
                            />

                            <FormControlLabel
                                value="end"
                                control={
                                    <Radio

                                        sx={{
                                            color: "error.main",
                                            "&.Mui-checked": {
                                                color: "error.main",
                                            },
                                        }}
                                    />
                                }
                                label="Danger"
                                labelPlacement="end"
                            />

                            <FormControlLabel
                                value="end"
                                control={
                                    <Radio

                                        sx={{
                                            color: "warning.main",
                                            "&.Mui-checked": {
                                                color: "warning.main",
                                            },
                                        }}
                                    />
                                }
                                label="Warning"
                                labelPlacement="end"
                            />
                        </Box>
                    </BaseCard>
                </Grid>
            </Grid>
        </Box>)
    );
};

export default ExRadio;
