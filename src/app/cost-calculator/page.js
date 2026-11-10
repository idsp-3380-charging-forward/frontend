"use client";

import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import DrivingStep from "./DrivingStep";
import FuelStep from "./FuelStep";
import PricingStep from "./PricingStep";
import ReviewStep from "./ReviewStep";
import VehicleStep from "./VehicleStep";

export default function CostCalculatorPage() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => (prev < 5 ? prev + 1 : prev));
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
    const goToStep = (targetStep) => setStep(targetStep);

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', pt: 4, pb: 8, bgcolor: '#fafafa' }}>
            <CssBaseline />

            <Box sx={{ mb: 4 }}>
                <Typography variant="overline" sx={{ color: '#177574', fontWeight: 'bold' }}>
                    COST CALCULATOR / STEP {step} OF 5
                </Typography>
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
            </Box>

            {step === 1 && <VehicleStep onNext={nextStep} />}
            {step === 2 && <FuelStep onNext={nextStep} onPrev={prevStep} />}
            {step === 3 && <DrivingStep onNext={nextStep} onPrev={prevStep} />}
            {step === 4 && <PricingStep onNext={nextStep} onPrev={prevStep} />}
            {step === 5 && <ReviewStep onEdit={() => goToStep(1)} />}
        </Container>
    );
}