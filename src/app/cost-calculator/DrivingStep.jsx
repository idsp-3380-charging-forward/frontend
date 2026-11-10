"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, MenuItem, Select, Typography } from "@mui/material";

export default function DrivingStep({ onNext }) {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Your driving profile
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Use your location and driving habits to personalise the comparison.
            </Typography>

            <Accordion defaultExpanded elevation={0} sx={{ border: '1px solid #e0e0e0', mb: 3 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Your driving profile</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" sx={{ mb: 1 }}>Province / territory</Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Select defaultValue="bc" size="small">
                            <MenuItem value="bc">British Columbia</MenuItem>
                            <MenuItem value="mb">Manitoba</MenuItem>
                        </Select>
                    </FormControl>

                    <Typography variant="body2" sx={{ mb: 1 }}>How long will you keep the car?</Typography>
                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Select defaultValue="4" size="small">
                            <MenuItem value="4">4 years</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                        Range: less than 1 year to 14+ years - midpoint 7 years
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 1 }}>How far do you drive in a year?</Typography>
                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Select defaultValue="43000" size="small">
                            <MenuItem value="43000">43,000 km</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                        Range: less than 10,000 to 75,000 km
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 1 }}>How much driving is on the highway?</Typography>
                    <FormControl fullWidth sx={{ mb: 1 }}>
                        <Select defaultValue="50" size="small">
                            <MenuItem value="50">50%</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography variant="caption" color="text.secondary">
                        Range: less than 10% to approximately 100%
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Button
                variant="contained"
                fullWidth
                onClick={onNext}
                sx={{ bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, mb: 2, textTransform: 'none', justifyContent: 'space-between' }}
            >
                Continue: Check your energy prices <span>→</span>
            </Button>
            <Typography variant="caption" color="text.secondary">
                You can go back to review any step.
            </Typography>
        </Box>
    );
}