"use client";

import { Box, Button, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { FUEL_OPTIONS, getIncentives, getVariant, INCENTIVES_DATA, PROVINCES_DATA } from "./calculatorData";

const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        maximumFractionDigits: 0,
    }).format(amount);

export default function PricingStep({ formData, onChange, onNext }) {
    const provinceData = PROVINCES_DATA[formData.province] || PROVINCES_DATA.BC;
    const varA = getVariant(formData.vehicle, formData.firstFuel);
    const varB = getVariant(formData.vehicle, formData.secondFuel);

    const incA = getIncentives(formData.firstFuel, formData.province);
    const incB = getIncentives(formData.secondFuel, formData.province);

    const labelA = FUEL_OPTIONS.find((f) => f.value === formData.firstFuel)?.shortLabel || formData.firstFuel;
    const labelB = FUEL_OPTIONS.find((f) => f.value === formData.secondFuel)?.shortLabel || formData.secondFuel;

    const msrpCap = INCENTIVES_DATA.federal.msrp_cap;
    const eligibleA = varA && (msrpCap == null || varA.msrp_avg <= msrpCap);
    const eligibleB = varB && (msrpCap == null || varB.msrp_avg <= msrpCap);

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Check your energy prices
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Review the values from your province or territory and adjust as needed.
            </Typography>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 2 }}>
                <Typography fontWeight="bold" gutterBottom>Energy &amp; fuel pricing</Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                    Auto-filled from {provinceData.name}. You can override these values.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>Electricity rate</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="number"
                            inputProps={{ step: "0.1", min: "0" }}
                            value={formData.electricityRate}
                            onChange={(e) => onChange('electricityRate', e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cents/kWh</InputAdornment>,
                            }}
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.75 }}>
                            Source: {provinceData.source} · {provinceData.updated}
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>Gasoline price</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="number"
                            inputProps={{ step: "0.001", min: "0" }}
                            value={formData.gasPrice}
                            onChange={(e) => onChange('gasPrice', e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                endAdornment: <InputAdornment position="end">/ L</InputAdornment>,
                            }}
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.75 }}>
                            Source: {provinceData.source} · {provinceData.updated}
                        </Typography>
                    </Box>
                </Box>
            </Paper>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 2 }}>
                <Typography fontWeight="bold" gutterBottom>Incentives &amp; rebates</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
                    {INCENTIVES_DATA.federal.notes} (MSRP cap: {formatCurrency(msrpCap)}).
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Box sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 1, border: '1px solid #eeeeee' }}>
                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                            {labelA} (Avg. MSRP {formatCurrency(varA?.msrp_avg || 0)})
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                            Federal rebate: <strong>{eligibleA ? formatCurrency(incA.federal) : '$0 (above MSRP cap)'}</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Provincial rebate ({provinceData.name}): <strong>{formatCurrency(incA.provincial)}</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 0.75 }}>Other incentives ({labelA})</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="number"
                            inputProps={{ step: "100", min: "0" }}
                            value={formData.otherIncentivesA}
                            onChange={(e) => onChange('otherIncentivesA', e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Box>

                    <Box sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 1, border: '1px solid #eeeeee' }}>
                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                            {labelB} (Avg. MSRP {formatCurrency(varB?.msrp_avg || 0)})
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                            Federal rebate: <strong>{eligibleB ? formatCurrency(incB.federal) : '$0 (above MSRP cap)'}</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Provincial rebate ({provinceData.name}): <strong>{formatCurrency(incB.provincial)}</strong>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 0.75 }}>Other incentives ({labelB})</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="number"
                            inputProps={{ step: "100", min: "0" }}
                            value={formData.otherIncentivesB}
                            onChange={(e) => onChange('otherIncentivesB', e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Box>
                </Box>
            </Paper>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>Advanced options</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
                    Leave blank to use category averages, or enter custom annual estimates.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1.5 }}>{labelA}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                label="Annual maintenance (CAD)"
                                placeholder={String(varA?.maintenance_cad_annual || '')}
                                value={formData.maintenanceOverrideA}
                                onChange={(e) => onChange('maintenanceOverrideA', e.target.value)}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                label="Annual insurance (CAD)"
                                placeholder={String(varA?.insurance_cad_annual || '')}
                                value={formData.insuranceOverrideA}
                                onChange={(e) => onChange('insuranceOverrideA', e.target.value)}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                label="Annual depreciation (%)"
                                placeholder={String(varA?.depreciation_pct_annual || '')}
                                value={formData.depreciationOverrideA}
                                onChange={(e) => onChange('depreciationOverrideA', e.target.value)}
                            />
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1.5 }}>{labelB}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                label="Annual maintenance (CAD)"
                                placeholder={String(varB?.maintenance_cad_annual || '')}
                                value={formData.maintenanceOverrideB}
                                onChange={(e) => onChange('maintenanceOverrideB', e.target.value)}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                label="Annual insurance (CAD)"
                                placeholder={String(varB?.insurance_cad_annual || '')}
                                value={formData.insuranceOverrideB}
                                onChange={(e) => onChange('insuranceOverrideB', e.target.value)}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                label="Annual depreciation (%)"
                                placeholder={String(varB?.depreciation_pct_annual || '')}
                                value={formData.depreciationOverrideB}
                                onChange={(e) => onChange('depreciationOverrideB', e.target.value)}
                            />
                        </Box>
                    </Box>
                </Box>
            </Paper>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row-reverse' }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                    variant="contained"
                    onClick={onNext}
                    sx={{ width: { xs: '100%', sm: 'auto' }, bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, px: 4, textTransform: 'none' }}
                >
                    Continue: Review your comparison <span>&nbsp;→</span>
                </Button>
                <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 2, sm: 0 } }}>
                    You can go back to review any step.
                </Typography>
            </Box>
        </Box>
    );
}