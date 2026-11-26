"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, FormControlLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { VEHICLES_DATA } from "./calculatorData";

export default function VehicleStep({ formData, onChange, onNext }) {
    const selectedVehicle = VEHICLES_DATA.find((item) => item.id === formData.vehicle);

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Choose your vehicle
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Choose a category to begin your cost comparison.
            </Typography>

            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", p: 3, mb: 3, borderRadius: 2 }}>
                <Typography fontWeight="bold" gutterBottom>
                    Choose a vehicle category
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Choose the category you want to compare.
                </Typography>

                <RadioGroup
                    value={formData.vehicle}
                    onChange={(e) => onChange("vehicle", e.target.value)}
                >
                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                        {VEHICLES_DATA.map((option) => {
                            const isSelected = option.id === formData.vehicle;
                            return (
                                <Box
                                    key={option.id}
                                    sx={{
                                        border: isSelected ? "1.5px solid #177574" : "1px solid #e0e0e0",
                                        borderRadius: 1.5,
                                        px: 1.5,
                                        py: 0.75,
                                        bgcolor: isSelected ? "#e0f2f1" : "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <FormControlLabel
                                        value={option.id}
                                        control={
                                            <Radio
                                                sx={{
                                                    color: "#177574",
                                                    "&.Mui-checked": { color: "#177574" },
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography fontWeight={isSelected ? "bold" : "normal"}>
                                                {option.label}
                                            </Typography>
                                        }
                                        sx={{ flex: 1, m: 0 }}
                                    />
                                    {isSelected && (
                                        <CheckCircleIcon sx={{ color: "#177574", fontSize: 20, mr: 0.5 }} />
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                </RadioGroup>
            </Paper>

            <Box sx={{ bgcolor: "#f5fafa", border: "1px solid #b2dfdb", borderRadius: 1.5, px: 2.5, py: 1.5, mb: 3 }}>
                <Typography variant="body2" fontWeight="bold" sx={{ color: "#0f2f2e" }}>
                    Selected: {selectedVehicle ? selectedVehicle.label : "Compact sedan"}
                </Typography>
            </Box>

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
                    Continue: Compare fuel types <span>&nbsp;→</span>
                </Button>
                <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 2, sm: 0 } }}>
                    You can go back to review any step.
                </Typography>
            </Box>
        </Box>
    );
}