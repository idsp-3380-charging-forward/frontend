"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, MenuItem, Select, Typography } from "@mui/material";

export default function FuelStep({ onNext }) {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Compare fuel types
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Select the two fuel types you want to compare.
            </Typography>

            <Accordion defaultExpanded elevation={0} sx={{ border: '1px solid #e0e0e0', mb: 3 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Compare fuel types</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" sx={{ mb: 1 }}>First fuel type</Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Select defaultValue="electric" size="small">
                            <MenuItem value="electric">Electric</MenuItem>
                            <MenuItem value="gasoline">Gasoline</MenuItem>
                        </Select>
                    </FormControl>

                    <Typography variant="caption" color="#177574" sx={{ display: 'block', mb: 1, fontWeight: 'bold' }}>
                        versus
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 1 }}>Compare with</Typography>
                    <FormControl fullWidth>
                        <Select defaultValue="plugin" size="small">
                            <MenuItem value="plugin">Plug-in hybrid</MenuItem>
                            <MenuItem value="gasoline">Gasoline</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Button
                variant="contained"
                fullWidth
                onClick={onNext}
                sx={{ bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, mb: 2, textTransform: 'none', justifyContent: 'space-between' }}
            >
                Continue: Your driving profile <span>→</span>
            </Button>
            <Typography variant="caption" color="text.secondary">
                You can go back to review any step.
            </Typography>
        </Box>
    );
}