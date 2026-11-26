"use client";

import {
    Box,
    Button,
    Container,
    CssBaseline,
    Step,
    StepLabel,
    Stepper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { INITIAL_FORM_DATA, PROVINCE_OPTIONS } from "./calculatorData";
import DrivingStep from "./DrivingStep";
import FuelStep from "./FuelStep";
import PricingStep from "./PricingStep";
import ReviewStep from "./ReviewStep";
import VehicleStep from "./VehicleStep";

const steps = ["Choose vehicle", "Fuel types", "Driving profile", "Energy prices", "Review"];

const stepTitles = {
    1: "Choose your vehicle",
    2: "Compare fuel types",
    3: "Your driving profile",
    4: "Check your energy prices",
    5: "Review",
};

export default function CostCalculatorPage() {
    const [step, setStep] = useState(1);
    const [viewMode, setViewMode] = useState("wizard");
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const nextStep = () => {
        if (step < 4) {
            setStep((prev) => prev + 1);
            setViewMode("wizard");
        } else if (step === 4) {
            setStep(5);
            setViewMode("review");
        }
    };

    const prevStep = () => {
        if (viewMode === "results") {
            setViewMode("review");
            return;
        }
        if (step > 1) {
            setStep((prev) => prev - 1);
            setViewMode("wizard");
        }
    };

    const goToStep = (targetStep) => {
        setStep(targetStep);
        setViewMode(targetStep === 5 ? "review" : "wizard");
    };

    const handleFormChange = (field, value) => {
        setFormData((prev) => {
            if (field === "province") {
                const selectedProvince = PROVINCE_OPTIONS.find((p) => p.value === value);
                return {
                    ...prev,
                    province: value,
                    electricityRate: selectedProvince ? selectedProvince.elecRate : prev.electricityRate,
                    gasPrice: selectedProvince ? selectedProvince.gasPrice : prev.gasPrice,
                };
            }
            return { ...prev, [field]: value };
        });
    };

    const isResultsView = viewMode === "results";
    const activeBreadcrumbLabel =
        isResultsView ? "Results" : stepTitles[step] || "Choose your vehicle";

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#fafafa", pb: 8 }}>
            <CssBaseline />

            <Box sx={{ bgcolor: "#e0f2f1", borderBottom: "1px solid #b2dfdb", py: { xs: 4, md: 5 }, mb: 4 }}>
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight="bold" sx={{ color: "#0f2f2e", mb: 1 }}>
                        Cost Calculator
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Input your current vehicle expenses and receive an EV cost comparison report.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="md">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: isResultsView ? 3 : 2 }}>
                    <Typography variant="caption" color="text.secondary">
                        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
                        {" / "}
                        <Box
                            component="span"
                            onClick={() => goToStep(1)}
                            sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
                        >
                            Cost Calculator
                        </Box>
                        {" / "}
                        <Box component="span" sx={{ color: "#0f2f2e", fontWeight: "bold" }}>
                            {activeBreadcrumbLabel}
                        </Box>
                    </Typography>

                    {(step > 1 || isResultsView) && (
                        <Button
                            variant="text"
                            size="small"
                            onClick={prevStep}
                            sx={{ color: "#177574", textTransform: "none", px: 1 }}
                        >
                            ← back
                        </Button>
                    )}
                </Box>

                {!isResultsView && (
                    <Box sx={{ mb: { xs: 4, md: 5 } }}>
                        <Typography variant="overline" sx={{ color: "#177574", fontWeight: "bold" }}>
                            COST CALCULATOR / STEP {step} OF 5
                        </Typography>

                        {isMobile ? (
                            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Box
                                        key={s}
                                        sx={{
                                            height: 4,
                                            flex: 1,
                                            bgcolor: s <= step ? "#177574" : "#e0e0e0",
                                            borderRadius: 1,
                                        }}
                                    />
                                ))}
                            </Box>
                        ) : (
                            <Stepper activeStep={step - 1} alternativeLabel sx={{ mt: 2.5 }}>
                                {steps.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel
                                            sx={{
                                                "& .MuiStepIcon-root": {
                                                    color: index < step ? "#177574" : "#e0e0e0",
                                                },
                                            }}
                                        >
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        )}
                    </Box>
                )}

                <Box
                    sx={{
                        bgcolor: "white",
                        p: { xs: 2.5, md: 4 },
                        borderRadius: 2,
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                    }}
                >
                    {step === 1 && (
                        <VehicleStep formData={formData} onChange={handleFormChange} onNext={nextStep} />
                    )}
                    {step === 2 && (
                        <FuelStep formData={formData} onChange={handleFormChange} onNext={nextStep} />
                    )}
                    {step === 3 && (
                        <DrivingStep formData={formData} onChange={handleFormChange} onNext={nextStep} />
                    )}
                    {step === 4 && (
                        <PricingStep formData={formData} onChange={handleFormChange} onNext={nextStep} />
                    )}
                    {step === 5 && (
                        <ReviewStep
                            formData={formData}
                            viewMode={viewMode}
                            onShowResults={() => setViewMode("results")}
                            onBackToReview={() => setViewMode("review")}
                            onEdit={() => goToStep(1)}
                        />
                    )}
                </Box>
            </Container>
        </Box>
    );
}