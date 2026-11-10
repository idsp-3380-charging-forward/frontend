"use client";

import { Box, Button, Typography } from "@mui/material";

export default function ReviewStep({ onEdit }) {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Review your comparison
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Check the inputs before comparing costs.
            </Typography>

            <Box sx={{ bgcolor: '#b2dfdb', p: 3, borderRadius: 2, mb: 3 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Vehicle</Typography>
                    <Typography fontWeight="bold">Compact sedan</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Fuel types</Typography>
                    <Typography fontWeight="bold">Electric vs plug-in hybrid</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Province / territory</Typography>
                    <Typography fontWeight="bold">British Columbia</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Ownership period</Typography>
                    <Typography fontWeight="bold">4 years</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Annual driving</Typography>
                    <Typography fontWeight="bold">43,000 km</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Highway driving</Typography>
                    <Typography fontWeight="bold">50%</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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

            <Box sx={{ border: '1px solid #e0e0e0', p: 2, borderRadius: 1, mb: 3 }}>
                <Typography fontWeight="bold" gutterBottom>Inputs ready to review</Typography>
                <Typography variant="body2">
                    The prototype does not include calculation formulas or results. No cost estimate is shown.
                </Typography>
            </Box>

            <Button
                variant="contained"
                fullWidth
                onClick={onEdit}
                sx={{ bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, mb: 2, textTransform: 'none', justifyContent: 'space-between' }}
            >
                Edit comparison inputs <span>→</span>
            </Button>

            <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: '#80cbc4', color: '#004d40', '&:hover': { bgcolor: '#4db6ac' }, py: 1.5, mb: 2, textTransform: 'none', justifyContent: 'space-between', boxShadow: 'none' }}
            >
                Explore the EV costs guide <span>→</span>
            </Button>

            <Typography variant="caption" color="text.secondary">
                You can go back to review any step.
            </Typography>
        </Box>
    );
}