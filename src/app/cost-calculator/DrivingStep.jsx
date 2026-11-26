"use client";

import { Box, Button, FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";
import { ANNUAL_KM_OPTIONS, HIGHWAY_OPTIONS, OWNERSHIP_OPTIONS, PROVINCE_OPTIONS } from "./calculatorData";

export default function DrivingStep({ formData, onChange, onNext }) {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Your driving profile
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Use your location and driving habits to personalise the comparison.
            </Typography>

            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", p: 3, mb: 4, borderRadius: 2 }}>
                <Typography fontWeight="bold" sx={{ mb: 3 }}>
                    Your driving profile
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                            Province / territory
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.province}
                                onChange={(e) => onChange("province", e.target.value)}
                                sx={{ borderRadius: 1.5 }}
                            >
                                {PROVINCE_OPTIONS.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                            How long will you keep the car?
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.ownershipYears}
                                onChange={(e) => onChange("ownershipYears", e.target.value)}
                                sx={{ borderRadius: 1.5 }}
                            >
                                {OWNERSHIP_OPTIONS.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.75 }}>
                            Range: less than 1 year to 14+ years · midpoint 7 years
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                            How far do you drive in a year?
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.annualKm}
                                onChange={(e) => onChange("annualKm", e.target.value)}
                                sx={{ borderRadius: 1.5 }}
                            >
                                {ANNUAL_KM_OPTIONS.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.75 }}>
                            Range: less than 10,000 to 75,000 km
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                            How much driving is on the highway?
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.highwayPct}
                                onChange={(e) => onChange("highwayPct", e.target.value)}
                                sx={{ borderRadius: 1.5 }}
                            >
                                {HIGHWAY_OPTIONS.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.75 }}>
                            Range: less than 10% to approximately 100%
                        </Typography>
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
                    Continue: Check your energy prices <span>&nbsp;→</span>
                </Button>
                <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 2, sm: 0 } }}>
                    You can go back to review any step.
                </Typography>
            </Box>
        </Box>
    );
}