"use client";

import { Box, Button, FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";
import { ELECTRICITY_RATE_OPTIONS, GAS_PRICE_OPTIONS } from "./prototypeData";

export default function PricingStep({ formData, onChange, onNext }) {
    const gasOptions = GAS_PRICE_OPTIONS.some((opt) => opt.value === formData.gasPrice)
        ? GAS_PRICE_OPTIONS
        : [...GAS_PRICE_OPTIONS, { value: formData.gasPrice, label: `$${formData.gasPrice} / L` }].sort(
            (a, b) => Number(a.value) - Number(b.value)
        );

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Check your energy prices
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Review the values from your province or territory and adjust as needed.
            </Typography>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 2 }}>
                <Typography fontWeight="bold" gutterBottom>Energy & fuel pricing</Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                    Auto-filled from your province or territory. You can override these selections.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>Electricity rate</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.electricityRate}
                                onChange={(e) => onChange('electricityRate', e.target.value)}
                                size="small"
                            >
                                {ELECTRICITY_RATE_OPTIONS.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>Gasoline price</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={formData.gasPrice}
                                onChange={(e) => onChange('gasPrice', e.target.value)}
                                size="small"
                            >
                                {gasOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Paper>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 2 }}>
                <Typography fontWeight="bold" gutterBottom>Incentives & rebates</Typography>
                <Typography variant="body2">No incentive or rebate amounts are listed in this prototype.</Typography>
            </Paper>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>Advanced options</Typography>
                <Typography variant="body2">Advanced calculation settings here.</Typography>
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