"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

export default function VehicleStep({ onNext }) {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Choose your vehicle
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Choose a category to begin your cost comparison.
            </Typography>

            <Accordion defaultExpanded elevation={0} sx={{ border: '1px solid #e0e0e0', mb: 3 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Choose a vehicle category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Choose the category you want to compare.
                    </Typography>
                    <RadioGroup defaultValue="compact-sedan">
                        {['Compact sedan', 'Compact SUV', 'Midsize SUV', 'Pickup truck', 'Luxury sedan', 'Minivan'].map((cat) => (
                            <Box
                                key={cat}
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 1,
                                    mb: 1,
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
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>

            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>
                Selected: Compact sedan
            </Typography>

            <Button
                variant="contained"
                fullWidth
                onClick={onNext}
                sx={{ bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, mb: 2, textTransform: 'none', justifyContent: 'space-between' }}
            >
                Continue: Compare fuel types <span>→</span>
            </Button>
            <Typography variant="caption" color="text.secondary">
                You can go back to review any step.
            </Typography>
        </Box>
    );
}