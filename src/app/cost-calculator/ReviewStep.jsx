"use client";

import { Box, Button, Typography } from "@mui/material";

export default function ReviewStep({ onEdit }) {
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
                        <Typography fontWeight="bold">Compact sedan</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Fuel types</Typography>
                        <Typography fontWeight="bold">Electric vs plug-in hybrid</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Province / territory</Typography>
                        <Typography fontWeight="bold">British Columbia</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Ownership period</Typography>
                        <Typography fontWeight="bold">4 years</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Annual driving</Typography>
                        <Typography fontWeight="bold">43,000 km</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Highway driving</Typography>
                        <Typography fontWeight="bold">50%</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Electricity rate</Typography>
                        <Typography fontWeight="bold">12.7 cents/kWh</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Gasoline price</Typography>
                        <Typography fontWeight="bold">$1.740 / L</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ border: '1px solid #e0e0e0', p: 3, borderRadius: 1, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>Inputs ready to review</Typography>
                <Typography variant="body2">
                    The prototype does not include calculation formulas or results. No cost estimate is shown.
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