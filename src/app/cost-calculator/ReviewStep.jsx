"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import {
    calculateTcoComparison,
    FUEL_OPTIONS,
    INITIAL_FORM_DATA,
    PROVINCES_DATA,
    VEHICLES_DATA,
} from "./calculatorData";
import ResultsView from "./ResultsView";

export default function ReviewStep({
    formData = INITIAL_FORM_DATA,
    viewMode = "review",
    onShowResults,
    onBackToReview,
    onEdit,
}) {
    const vehicleObj = VEHICLES_DATA.find((v) => v.id === formData.vehicle) || VEHICLES_DATA[0];
    const firstFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === formData.firstFuel)?.shortLabel || formData.firstFuel;
    const secondFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === formData.secondFuel)?.shortLabel || formData.secondFuel;
    const provinceName =
        PROVINCES_DATA[formData.province]?.name || "British Columbia";

    const result = calculateTcoComparison(formData);
    if (!result) return null;

    if (viewMode === "results") {
        return (
            <ResultsView
                formData={formData}
                result={result}
                vehicleLabel={vehicleObj.label}
                provinceName={provinceName}
                firstFuelLabel={firstFuelLabel}
                secondFuelLabel={secondFuelLabel}
                onBackToReview={onBackToReview}
                onEdit={onEdit}
            />
        );
    }

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Review your comparison
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Confirm your selections before viewing your full Total Cost of Ownership (TCO) results.
            </Typography>

            <Box sx={{ bgcolor: "#b2dfdb", p: { xs: 3, md: 4 }, borderRadius: 2, mb: 4 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Vehicle
                        </Typography>
                        <Typography fontWeight="bold">{vehicleObj.label}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Fuel types
                        </Typography>
                        <Typography fontWeight="bold">
                            {firstFuelLabel} vs {secondFuelLabel.toLowerCase()}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Province / territory
                        </Typography>
                        <Typography fontWeight="bold">{provinceName}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Ownership period
                        </Typography>
                        <Typography fontWeight="bold">{formData.ownershipYears} years</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Annual driving
                        </Typography>
                        <Typography fontWeight="bold">
                            {Number(formData.annualKm).toLocaleString("en-CA")} km
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Highway driving
                        </Typography>
                        <Typography fontWeight="bold">{formData.highwayPct}%</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Electricity rate
                        </Typography>
                        <Typography fontWeight="bold">{formData.electricityRate} cents/kWh</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Gasoline price
                        </Typography>
                        <Typography fontWeight="bold">${Number(formData.gasPrice).toFixed(3)} / L</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, alignItems: "center", mb: 3 }}>
                <Button
                    variant="outlined"
                    onClick={onEdit}
                    sx={{
                        width: { xs: "100%", md: "auto" },
                        borderColor: "#177574",
                        color: "#177574",
                        py: 1.5,
                        px: 3,
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    ← Edit comparison inputs
                </Button>

                <Button
                    variant="contained"
                    onClick={onShowResults}
                    sx={{
                        width: { xs: "100%", md: "auto" },
                        bgcolor: "#177574",
                        "&:hover": { bgcolor: "#125c5b" },
                        py: 1.5,
                        px: 3.5,
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    Comparison charts: See your results <span>&nbsp;→</span>
                </Button>

                <Button
                    component={Link}
                    href="/learn"
                    variant="contained"
                    sx={{
                        width: { xs: "100%", md: "auto" },
                        bgcolor: "#80cbc4",
                        color: "#004d40",
                        "&:hover": { bgcolor: "#4db6ac" },
                        py: 1.5,
                        px: 3,
                        textTransform: "none",
                        fontWeight: "bold",
                        boxShadow: "none",
                    }}
                >
                    Explore the EV costs guide <span>&nbsp;→</span>
                </Button>
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: { md: "right" } }}>
                You can go back to review any step.
            </Typography>
        </Box>
    );
}