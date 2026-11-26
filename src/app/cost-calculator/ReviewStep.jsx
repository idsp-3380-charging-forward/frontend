"use client";

import { Box, Button, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Link from "next/link";
import {
    calculateTcoComparison,
    FUEL_OPTIONS,
    INITIAL_FORM_DATA,
    PROVINCES_DATA,
    VEHICLES_DATA,
} from "./calculatorData";

const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        maximumFractionDigits: 0,
    }).format(amount);

export default function ReviewStep({ formData = INITIAL_FORM_DATA, onEdit }) {
    const vehicleObj = VEHICLES_DATA.find((v) => v.id === formData.vehicle) || VEHICLES_DATA[0];
    const firstFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === formData.firstFuel)?.shortLabel || formData.firstFuel;
    const secondFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === formData.secondFuel)?.shortLabel || formData.secondFuel;
    const provinceName =
        PROVINCES_DATA[formData.province]?.name || "British Columbia";

    const result = calculateTcoComparison(formData);
    if (!result) return null;

    const { vehicleA, vehicleB, years, savings, cheaperFuel, breakEvenYear } = result;
    const cheaperFuelLabel =
        FUEL_OPTIONS.find((f) => f.value === cheaperFuel)?.shortLabel || firstFuelLabel;

    const breakdownRows = [
        { label: "Purchase price (net of rebates)", a: vehicleA.netPrice, b: vehicleB.netPrice },
        { label: `Fuel / electricity (${years} yrs)`, a: vehicleA.totalFuel, b: vehicleB.totalFuel },
        { label: `Maintenance (${years} yrs)`, a: vehicleA.totalMaint, b: vehicleB.totalMaint },
        { label: `Insurance (${years} yrs)`, a: vehicleA.totalInsur, b: vehicleB.totalInsur },
        { label: "Resale value (credit)", a: -vehicleA.resale, b: -vehicleB.resale },
        { label: `Total Cost of Ownership (${years} yrs)`, a: vehicleA.total, b: vehicleB.total, isTotal: true },
    ];

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Review your comparison
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Review your inputs and full Total Cost of Ownership (TCO) breakdown.
            </Typography>

            <Box sx={{ bgcolor: '#b2dfdb', p: { xs: 3, md: 4 }, borderRadius: 2, mb: 4 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Vehicle</Typography>
                        <Typography fontWeight="bold">{vehicleObj.label}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Fuel types</Typography>
                        <Typography fontWeight="bold">
                            {firstFuelLabel} vs {secondFuelLabel.toLowerCase()}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Province / territory</Typography>
                        <Typography fontWeight="bold">{provinceName}</Typography>
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
                    Total Cost of Ownership (TCO) comparison
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Includes average MSRP, federal/provincial rebates, fuel, maintenance, insurance, and estimated resale value.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 3 }}>
                    <Box sx={{ p: 2.5, bgcolor: '#e0f2f1', borderRadius: 1.5, border: '1px solid #b2dfdb' }}>
                        <Typography variant="caption" color="#177574" fontWeight="bold" display="block">
                            {firstFuelLabel.toUpperCase()}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                            e.g., {vehicleA.examples.slice(0, 2).join(", ")}
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5 }}>
                            {formatCurrency(vehicleA.total)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            {formatCurrency(vehicleA.monthlyAvg)}/mo · {(vehicleA.perKm * 100).toFixed(1)}¢/km
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Annual fuel: {formatCurrency(vehicleA.annualFuel)} · CO₂: {Math.round(vehicleA.annualCo2Kg).toLocaleString("en-CA")} kg/yr
                        </Typography>
                    </Box>

                    <Box sx={{ p: 2.5, bgcolor: '#fafafa', borderRadius: 1.5, border: '1px solid #e0e0e0' }}>
                        <Typography variant="caption" color="text.secondary" fontWeight="bold" display="block">
                            {secondFuelLabel.toUpperCase()}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                            e.g., {vehicleB.examples.slice(0, 2).join(", ")}
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5 }}>
                            {formatCurrency(vehicleB.total)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            {formatCurrency(vehicleB.monthlyAvg)}/mo · {(vehicleB.perKm * 100).toFixed(1)}¢/km
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Annual fuel: {formatCurrency(vehicleB.annualFuel)} · CO₂: {Math.round(vehicleB.annualCo2Kg).toLocaleString("en-CA")} kg/yr
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ overflowX: 'auto', mb: 2.5 }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#fafafa' }}>
                                <TableCell sx={{ fontWeight: 'bold' }}>Cost Category</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>{firstFuelLabel}</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>{secondFuelLabel}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {breakdownRows.map((row) => (
                                <TableRow
                                    key={row.label}
                                    sx={row.isTotal ? { bgcolor: '#f5fafa' } : undefined}
                                >
                                    <TableCell sx={{ fontWeight: row.isTotal ? 'bold' : 'normal' }}>
                                        {row.label}
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontWeight: row.isTotal ? 'bold' : 'normal' }}>
                                        {row.a < 0 ? `-${formatCurrency(Math.abs(row.a))}` : formatCurrency(row.a)}
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontWeight: row.isTotal ? 'bold' : 'normal' }}>
                                        {row.b < 0 ? `-${formatCurrency(Math.abs(row.b))}` : formatCurrency(row.b)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Typography variant="body2" fontWeight="bold" color="#177574">
                    {savings < 100
                        ? `${firstFuelLabel} and ${secondFuelLabel} cost about the same over ${years} years.`
                        : `${cheaperFuelLabel} saves an estimated ${formatCurrency(savings)} over ${years} years`}
                    {breakEvenYear ? ` (break-even at Year ${breakEvenYear}).` : "."}
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