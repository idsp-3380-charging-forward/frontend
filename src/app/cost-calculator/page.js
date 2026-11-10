"use client";

import { Box, Container, CssBaseline, Step, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import DrivingStep from "./DrivingStep";
import FuelStep from "./FuelStep";
import PricingStep from "./PricingStep";
import ReviewStep from "./ReviewStep";
import VehicleStep from "./VehicleStep";

const steps = ['Choose vehicle', 'Fuel types', 'Driving profile', 'Energy prices', 'Review'];

export default function CostCalculatorPage() {
    const [step, setStep] = useState(1);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const nextStep = () => setStep((prev) => (prev < 5 ? prev + 1 : prev));
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
    const goToStep = (targetStep) => setStep(targetStep);

    return (
        <Container maxWidth="md" sx={{ minHeight: '100vh', pt: { xs: 4, md: 8 }, pb: 8, bgcolor: '#fafafa' }}>
            <CssBaseline />

            <Box sx={{ mb: { xs: 4, md: 6 } }}>
                <Typography variant="overline" sx={{ color: '#177574', fontWeight: 'bold' }}>
                    COST CALCULATOR / STEP {step} OF 5
                </Typography>

                {isMobile ? (
                    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Box
                                key={s}
                                sx={{
                                    height: 4,
                                    flex: 1,
                                    bgcolor: s <= step ? '#177574' : '#e0e0e0',
                                    borderRadius: 1
                                }}
                            />
                        ))}
                    </Box>
                ) : (
                    <Stepper activeStep={step - 1} alternativeLabel sx={{ mt: 3 }}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel
                                    sx={{
                                        '& .MuiStepIcon-root': {
                                            color: index < step ? '#177574' : '#e0e0e0',
                                        }
                                    }}
                                >
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                )}
            </Box>

            <Box sx={{ bgcolor: 'white', p: { xs: 0, md: 4 }, borderRadius: { xs: 0, md: 2 }, boxShadow: { xs: 'none', md: '0 4px 20px rgba(0,0,0,0.05)' } }}>
                {step === 1 && <VehicleStep onNext={nextStep} />}
                {step === 2 && <FuelStep onNext={nextStep} onPrev={prevStep} />}
                {step === 3 && <DrivingStep onNext={nextStep} onPrev={prevStep} />}
                {step === 4 && <PricingStep onNext={nextStep} onPrev={prevStep} />}
                {step === 5 && <ReviewStep onEdit={() => goToStep(1)} />}
            </Box>
        </Container>
    );
}