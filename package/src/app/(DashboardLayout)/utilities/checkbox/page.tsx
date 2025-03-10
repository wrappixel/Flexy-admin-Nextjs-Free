"use client"
import React from "react";
import {
    Grid2 as Grid,
    Box,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormControl,
} from "@mui/material";

import BaseCard from "../../components/shared/BaseCard";


import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const ExCheckbox = () => {
    // 2
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setChecked(event.target.checked);
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
                    <BaseCard title="Default Checkbox">
                        <Box
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ "aria-label": "primary checkbox" }}
                            />

                            <Checkbox
                                disabled
                                checked
                                inputProps={{ "aria-label": "disabled checked checkbox" }}
                            />
                            <Checkbox
                                defaultChecked
                                indeterminate
                                inputProps={{ "aria-label": "indeterminate checkbox" }}
                            />
                            <Checkbox
                                defaultChecked
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
                    <BaseCard title="Default with Colors">
                        <Box
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ "aria-label": "checkbox with default color" }}
                            />
                            <Checkbox
                                defaultChecked
                                color="secondary"
                                inputProps={{ "aria-label": "checkbox with default color" }}
                            />
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "success.main",
                                    "&.Mui-checked": {
                                        color: "success.main",
                                    },
                                }}
                            />
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "error.main",
                                    "&.Mui-checked": {
                                        color: "error.main",
                                    },
                                }}
                            />
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "warning.main",
                                    "&.Mui-checked": {
                                        color: "warning.main",
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
                    <BaseCard title="Sizes & Custom icon">
                        <Box>
                            <FormGroup
                                row
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankOutlinedIcon />}
                                            checkedIcon={<CheckBoxOutlinedIcon />}
                                            name="checkednormal"
                                        />
                                    }
                                    label="Normal Size"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankOutlinedIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxOutlinedIcon fontSize="small" />}
                                            name="checkedsmall"
                                        />
                                    }
                                    label="Small size"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteOutlinedIcon />}
                                            checkedIcon={<FavoriteBorderOutlinedIcon />}
                                            name="checkedH"
                                        />
                                    }
                                    label="Heart"
                                />
                            </FormGroup>
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
                    <BaseCard title="Placement">
                        <FormControl
                            component="fieldset"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <FormGroup
                                aria-label="position"
                                row
                                sx={{
                                    justifyContent: "center",
                                }}
                            >
                                <FormControlLabel
                                    value="top"
                                    control={<Checkbox color="primary" />}
                                    label="Top"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="start"
                                    control={<Checkbox color="primary" />}
                                    label="Start"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="bottom"
                                    control={<Checkbox color="primary" />}
                                    label="Bottom"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="End"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </BaseCard>
                </Grid>

                {/* ------------------------- row 1 ------------------------- */}
                <Grid
                    size={{ xs: 12, lg: 6, sm: 6 }}
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                    <BaseCard title="Color with Label">
                        <Box
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" defaultChecked />}
                                label="Primary"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="secondary" defaultChecked />}
                                label="Secondary"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={
                                    <Checkbox
                                        defaultChecked
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
                                    <Checkbox
                                        defaultChecked
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
                                    <Checkbox
                                        defaultChecked
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

export default ExCheckbox;
