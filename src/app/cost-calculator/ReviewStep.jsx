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
    onGoToStep,
}) {
    const handleGoTo = onGoToStep || onEdit;
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

    const reviewItems = [
        { label: "Vehicle", value: vehicleObj.label, step: 1 },
        { label: "Fuel types", value: `${firstFuelLabel} vs ${secondFuelLabel.toLowerCase()}`, step: 2 },
        { label: "Province / territory", value: provinceName, step: 3 },
        { label: "Ownership period", value: `${formData.ownershipYears} years`, step: 3 },
        { label: "Annual driving", value: `${Number(formData.annualKm).toLocaleString("en-CA")} km`, step: 3 },
        { label: "Highway driving", value: `${formData.highwayPct}%`, step: 3 },
        { label: "Electricity rate", value: `${formData.electricityRate} cents/kWh`, step: 4 },
        { label: "Gasoline price", value: `$${Number(formData.gasPrice).toFixed(3)} / L`, step: 4 },
    ];

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Review your comparison
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Check the inputs before comparing costs.
            </Typography>

            <Box
                sx={{
                    bgcolor: "#cce5e2",
                    p: { xs: 2.5, md: 3.5 },
                    borderRadius: 2.5,
                    mb: 4,
                }}
            >
                {reviewItems.map((item, idx) => (
                    <Box
                        key={item.label}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            py: 1.5,
                            borderBottom: idx < reviewItems.length - 1 ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
                        }}
                    >
                        <Box>
                            <Typography variant="caption" sx={{ color: "#37474f", display: "block" }}>
                                {item.label}
                            </Typography>
                            <Typography fontWeight="bold" sx={{ color: "#0f2f2e", fontSize: { xs: "0.95rem", md: "1.05rem" } }}>
                                {item.value}
                            </Typography>
                        </Box>

                        <Button
                            variant="text"
                            size="small"
                            onClick={() => handleGoTo(item.step)}
                            sx={{
                                color: "#0d5c58",
                                textTransform: "none",
                                fontWeight: "bold",
                                "&:hover": { textDecoration: "underline", bgcolor: "transparent" },
                            }}
                        >
                            Edit
                        </Button>
                    </Box>
                ))}
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, alignItems: "center", mb: 3 }}>
                <Button
                    variant="contained"
                    onClick={onEdit}
                    sx={{
                        width: { xs: "100%", md: "auto" },
                        bgcolor: "#b0bec5",
                        color: "#263238",
                        "&:hover": { bgcolor: "#90a4ae" },
                        py: 1.5,
                        px: 3,
                        textTransform: "none",
                        fontWeight: "bold",
                        boxShadow: "none",
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