"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, MenuItem, Select, Typography } from "@mui/material";

export default function PricingStep({ onNext }) {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Check your energy prices
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Review the values from your province or territory and adjust as needed.
            </Typography>

            <Accordion defaultExpanded elevation={0} sx={{ border: '1px solid #e0e0e0', mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Energy & fuel pricing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Auto-filled from your province or territory. You can override these selections.
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 1 }}>Electricity rate</Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Select defaultValue="12.7" size="small">
                            <MenuItem value="12.7">12.7 cents/kWh</MenuItem>
                        </Select>
                    </FormControl>

                    <Typography variant="body2" sx={{ mb: 1 }}>Gasoline price</Typography>
                    <FormControl fullWidth>
                        <Select defaultValue="1.740" size="small">
                            <MenuItem value="1.740">$1.740 / L</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion elevation={0} sx={{ border: '1px solid #e0e0e0', mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Incentives & rebates</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">No incentive or rebate amounts are listed in this prototype.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion elevation={0} sx={{ border: '1px solid #e0e0e0', mb: 3 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Advanced options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">Advanced calculation settings here.</Typography>
                </AccordionDetails>
            </Accordion>

            <Button
                variant="contained"
                fullWidth
                onClick={onNext}
                sx={{ bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, mb: 2, textTransform: 'none', justifyContent: 'space-between' }}
            >
                Continue: Review your comparison <span>→</span>
            </Button>
            <Typography variant="caption" color="text.secondary">
                You can go back to review any step.
            </Typography>
        </Box>
    );
}