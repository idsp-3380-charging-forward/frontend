"use client";

import {
    ArrowForward as ArrowForwardIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Card, CardContent, Container, FormControl, MenuItem, Select, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import ChatbotLauncher from '../../components/features/chatbot/ChatbotLauncher';

export default function Zevs101Page() {
    const [topic, setTopic] = useState('');

    return (
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 10 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 3, '& .MuiBreadcrumbs-separator': { color: '#177574' } }}>
                <Link href="/" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Home
                </Link>
                <Link href="/learn" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Learn
                </Link>
                <Typography color="text.primary" sx={{ fontWeight: 'bold', color: '#1b4332' }}>
                    ZEVs 101
                </Typography>
            </Breadcrumbs>

            {/* Step Indicator */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="caption" fontWeight="bold" sx={{ color: '#177574', letterSpacing: 1, display: 'block', mb: 1 }}>
                    STEP 1 OF 3 / ZEVs 101
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 4, maxWidth: 300 }}>
                    <Box sx={{ flex: 1, height: 4, bgcolor: '#177574', borderRadius: 2 }} />
                    <Box sx={{ flex: 1, height: 4, bgcolor: '#e0e0e0', borderRadius: 2 }} />
                    <Box sx={{ flex: 1, height: 4, bgcolor: '#e0e0e0', borderRadius: 2 }} />
                </Box>
            </Box>

            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1.5, color: '#1b4332', fontSize: { xs: '2rem', md: '2.75rem' } }}>
                    Meet your electric options.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: 'text.secondary' }}>
                    Start with the essentials, then explore the details that matter to you.
                </Typography>

                {/* Browse Topics Dropdown */}
                <FormControl sx={{ width: '100%', mb: 4 }}>
                    <Select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        displayEmpty
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                            bgcolor: '#9fcddb',
                            borderRadius: 3,
                            color: '#1b4332',
                            fontWeight: 'bold',
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }
                        }}
                    >
                        <MenuItem value="" disabled>Browse topics</MenuItem>
                        <MenuItem value="whats-a-zev">What&apos;s a ZEV?</MenuItem>
                        <MenuItem value="how-evs-work">How do EVs work?</MenuItem>
                        <MenuItem value="why-choose-electric">Why choose electric?</MenuItem>
                        <MenuItem value="maintenance">Maintenance, simplified</MenuItem>
                        <MenuItem value="charge-at-home">Can I charge at home?</MenuItem>
                        <MenuItem value="plug-in-hybrids">What about plug-in hybrids?</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Topic Cards Grid */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 3,
                    mb: 4
                }}
            >
                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, color: '#1b4332' }}>
                                What&apos;s a ZEV?
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                ZEV means &quot;Zero Emission Vehicle&quot;. Explore electric vehicles, plug-in hybrids, and hydrogen vehicles.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/zevs-101/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, color: '#1b4332' }}>
                                How do EVs work?
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Charge when you&apos;re not using the car. On long trips, plan a stop at a fast charger.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/zevs-101/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, color: '#1b4332' }}>
                                Why choose electric?
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Lower fuel and maintenance costs, no tailpipe exhaust, fewer moving parts, and responsive performance.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/zevs-101/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, color: '#1b4332' }}>
                                Maintenance, simplified
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                No oil changes or tuneups. Regenerative braking means fewer brake jobs.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/zevs-101/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, color: '#1b4332' }}>
                                Can I charge at home?
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Access to a household outlet, workplace charging, or nearby public charging can help you decide.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/zevs-101/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, color: '#1b4332' }}>
                                What about plug-in hybrids?
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                PHEVs combine electric driving with a gas option, but have less electric-only range and more maintenance.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/zevs-101/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>
            </Box>

            {/* Complete Picture Banner */}
            <Box sx={{ bgcolor: '#9fcddb', borderRadius: 4, p: 4, mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332', mb: 1 }}>
                        Want the complete picture?
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1b4332' }}>
                        Find all the original information together in the ZEVs 101 full guide.
                    </Typography>
                </Box>
                <Button
                    component={Link}
                    href="/zevs-101/full-guide"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ color: '#1b4332', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
                >
                    Read the full guide
                </Button>
            </Box>

            {/* Continue Button */}
            <Button
                component={Link}
                href="/charging-basics"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                    bgcolor: '#177574',
                    color: 'white',
                    fontWeight: 'bold',
                    py: 2,
                    px: 4,
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: 'none',
                    width: { xs: '100%', sm: 'auto' },
                    justifyContent: 'space-between',
                    '&:hover': { bgcolor: '#125c5b', boxShadow: 'none' }
                }}
            >
                Continue to Charging Basics
            </Button>

            <ChatbotLauncher />
        </Container>
    );
}