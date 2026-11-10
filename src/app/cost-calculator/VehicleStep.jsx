"use client";

import { Box, Button, FormControlLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";

export default function VehicleStep({ onNext }) {
    const categories = ['Compact sedan', 'Compact SUV', 'Midsize SUV', 'Pickup truck', 'Luxury sedan', 'Minivan'];

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Choose your vehicle
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Choose a category to begin your cost comparison.
            </Typography>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>Choose a vehicle category</Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                    Choose the category you want to compare.
                </Typography>

                <RadioGroup defaultValue="compact-sedan">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                        {categories.map((cat) => (
                            <Box
                                key={cat}
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 1,
                                    p: 1,
                                    bgcolor: cat === 'Compact sedan' ? '#e0f2f1' : 'transparent'
                                }}
                            >
                                <FormControlLabel
                                    value={cat.toLowerCase().replace(' ', '-')}
                                    control={<Radio sx={{ color: '#177574', '&.Mui-checked': { color: '#177574' } }} />}
                                    label={cat}
                                    sx={{ width: '100%', m: 0 }}
                                />
                            </Box>
                        ))}
                    </Box>
                </RadioGroup>
            </Paper>

            <Typography variant="body2" sx={{ mb: 3, fontWeight: 'bold' }}>
                Selected: Compact sedan
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row-reverse' }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                    variant="contained"
                    onClick={onNext}
                    sx={{ width: { xs: '100%', sm: 'auto' }, bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, px: 4, textTransform: 'none' }}
                >
                    Continue: Compare fuel types <span>&nbsp;→</span>
                </Button>
                <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 2, sm: 0 } }}>
                    You can go back to review any step.
                </Typography>
            </Box>
        </Box>
    );
}