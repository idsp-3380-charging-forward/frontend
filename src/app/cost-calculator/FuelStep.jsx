"use client";

import { Box, Button, FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";
import { FUEL_OPTIONS } from "./calculatorData";

export default function FuelStep({ formData, onChange, onNext }) {
    const handleFirstFuelChange = (e) => {
        const newFuel = e.target.value;
        if (newFuel === formData.secondFuel) {
            onChange("secondFuel", formData.firstFuel);
        }
        onChange("firstFuel", newFuel);
    };

    const handleSecondFuelChange = (e) => {
        const newFuel = e.target.value;
        if (newFuel === formData.firstFuel) {
            onChange("firstFuel", formData.secondFuel);
        }
        onChange("secondFuel", newFuel);
    };

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Compare fuel types
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Select the two fuel types you want to compare.
            </Typography>

            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", p: 3, mb: 4, borderRadius: 2 }}>
                <Typography fontWeight="bold" sx={{ mb: 2.5 }}>
                    Compare fuel types
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                            First fuel type
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.firstFuel}
                                onChange={handleFirstFuelChange}
                                sx={{ borderRadius: 1.5 }}
                            >
                                {FUEL_OPTIONS.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Typography variant="body2" color="#177574" fontWeight="bold">
                        versus
                    </Typography>

                    <Box>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                            Compare with
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.secondFuel}
                                onChange={handleSecondFuelChange}
                                sx={{ borderRadius: 1.5 }}
                            >
                                {FUEL_OPTIONS.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Paper>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row-reverse" }, alignItems: "center", justifyContent: "space-between" }}>
                <Button
                    variant="contained"
                    onClick={onNext}
                    sx={{
                        width: { xs: "100%", sm: "auto" },
                        bgcolor: "#177574",
                        "&:hover": { bgcolor: "#125c5b" },
                        py: 1.5,
                        px: 4,
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    Continue: Your driving profile <span>&nbsp;→</span>
                </Button>
                <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 2, sm: 0 } }}>
                    You can go back to review any step.
                </Typography>
            </Box>
        </Box>
    );
}