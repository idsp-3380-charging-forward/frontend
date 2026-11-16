"use client";

import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import {
    calculateDemoEstimate,
    FUEL_OPTIONS,
    INITIAL_FORM_DATA,
    PROVINCE_OPTIONS,
    VEHICLE_OPTIONS,
} from "./prototypeData";

const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        maximumFractionDigits: 0,
    }).format(amount);

export default function ReviewStep({ formData = INITIAL_FORM_DATA, onEdit }) {
    const vehicleLabel =
        VEHICLE_OPTIONS.find((v) => v.value === formData.vehicle)?.label || "Compact sedan";
    const firstFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === formData.firstFuel)?.label || "Electric";
    const secondFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === formData.secondFuel)?.label || "Plug-in hybrid";
    const provinceLabel =
        PROVINCE_OPTIONS.find((p) => p.value === formData.province)?.label || "British Columbia";

    const estimate = calculateDemoEstimate(formData);
    const cheaperFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === estimate.cheaperFuel)?.label || firstFuelLabel;

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Review your comparison
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Check the inputs before comparing costs.
            </Typography>

            <Box sx={{ bgcolor: '#b2dfdb', p: { xs: 3, md: 4 }, borderRadius: 2, mb: 4 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Vehicle</Typography>
                        <Typography fontWeight="bold">{vehicleLabel}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Fuel types</Typography>
                        <Typography fontWeight="bold">
                            {firstFuelLabel} vs {secondFuelLabel.toLowerCase()}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Province / territory</Typography>
                        <Typography fontWeight="bold">{provinceLabel}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Ownership period</Typography>
                        <Typography fontWeight="bold">{formData.ownershipYears} years</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Annual driving</Typography>
                        <Typography fontWeight="bold">
                            {Number(formData.annualKm).toLocaleString("en-CA")} km
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Highway driving</Typography>
                        <Typography fontWeight="bold">{formData.highwayPct}%</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Electricity rate</Typography>
                        <Typography fontWeight="bold">{formData.electricityRate} cents/kWh</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Gasoline price</Typography>
                        <Typography fontWeight="bold">${Number(formData.gasPrice).toFixed(3)} / L</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ border: '1px solid #e0e0e0', p: 3, borderRadius: 2, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>
                    Estimated energy &amp; fuel cost comparison
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Demo estimate based on your selected vehicle, driving profile, and local energy rates.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 3 }}>
                    <Box sx={{ p: 2.5, bgcolor: '#e0f2f1', borderRadius: 1.5, border: '1px solid #b2dfdb' }}>
                        <Typography variant="caption" color="#177574" fontWeight="bold" display="block" gutterBottom>
                            {firstFuelLabel.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5 }}>
                            {formatCurrency(estimate.totalFirst)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Total over {estimate.years} years ({formatCurrency(estimate.annualFirst)} / yr)
                        </Typography>
                    </Box>

                    <Box sx={{ p: 2.5, bgcolor: '#fafafa', borderRadius: 1.5, border: '1px solid #e0e0e0' }}>
                        <Typography variant="caption" color="text.secondary" fontWeight="bold" display="block" gutterBottom>
                            {secondFuelLabel.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5 }}>
                            {formatCurrency(estimate.totalSecond)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Total over {estimate.years} years ({formatCurrency(estimate.annualSecond)} / yr)
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Typography variant="body2" fontWeight="bold" color="#177574">
                    {estimate.totalSavings === 0
                        ? `Both fuel options have the same estimated ${estimate.years}-year energy cost.`
                        : `Estimated ${estimate.years}-year savings: ${formatCurrency(estimate.totalSavings)} with ${cheaperFuelLabel}`}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center', mb: 3 }}>
                <Button
                    variant="contained"
                    onClick={onEdit}
                    sx={{ width: { xs: '100%', md: 'auto' }, minWidth: { md: 250 }, bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, textTransform: 'none' }}
                >
                    Edit comparison inputs <span>&nbsp;→</span>
                </Button>

                <Button
                    component={Link}
                    href="/learn"
                    variant="contained"
                    sx={{ width: { xs: '100%', md: 'auto' }, minWidth: { md: 250 }, bgcolor: '#80cbc4', color: '#004d40', '&:hover': { bgcolor: '#4db6ac' }, py: 1.5, textTransform: 'none', boxShadow: 'none' }}
                >
                    Explore the EV costs guide <span>&nbsp;→</span>
                </Button>
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: { md: 'right' } }}>
                You can go back to review any step.
            </Typography>
        </Box>
    );
}