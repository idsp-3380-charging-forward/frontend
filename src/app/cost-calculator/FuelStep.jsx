"use client";

import { Box, Button, FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";

export default function FuelStep({ onNext }) {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Compare fuel types
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Select the two fuel types you want to compare.
            </Typography>

            <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', p: 3, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>Compare fuel types</Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: 3, mt: 2 }}>
                    <Box sx={{ flex: 1, width: '100%' }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>First fuel type</Typography>
                        <FormControl fullWidth>
                            <Select defaultValue="electric" size="small">
                                <MenuItem value="electric">Electric</MenuItem>
                                <MenuItem value="gasoline">Gasoline</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Typography variant="caption" color="#177574" sx={{ fontWeight: 'bold', alignSelf: { md: 'flex-end' }, pb: { md: 1 } }}>
                        versus
                    </Typography>

                    <Box sx={{ flex: 1, width: '100%' }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>Compare with</Typography>
                        <FormControl fullWidth>
                            <Select defaultValue="plugin" size="small">
                                <MenuItem value="plugin">Plug-in hybrid</MenuItem>
                                <MenuItem value="gasoline">Gasoline</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Paper>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row-reverse' }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                    variant="contained"
                    onClick={onNext}
                    sx={{ width: { xs: '100%', sm: 'auto' }, bgcolor: '#177574', '&:hover': { bgcolor: '#125c5b' }, py: 1.5, px: 4, textTransform: 'none' }}
                >
                    Continue: Your driving profile <span>&nbsp;→</span>
                </Button>
                <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 2, sm: 0 } }}>
                    You can go back to review any step.
                </Typography>
            </Box>
        </Box>
    );
}