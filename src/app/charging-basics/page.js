"use client";

import {
    ArrowForward as ArrowForwardIcon,
    ElectricalServices as ElectricalServicesIcon,
    ElectricBolt as ElectricBoltIcon,
    EvStationOutlined as EvStationOutlinedIcon,
    HomeOutlined as HomeOutlinedIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    MapOutlined as MapOutlinedIcon,
    Speed as SpeedIcon
} from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Card, CardContent, Container, FormControl, MenuItem, Select, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import ChatbotLauncher from '../../components/features/chatbot/ChatbotLauncher';

export default function ChargingBasicsPage() {
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
                    Charging Basics
                </Typography>
            </Breadcrumbs>

            {/* Step Indicator */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="caption" fontWeight="bold" sx={{ color: '#177574', letterSpacing: 1, display: 'block', mb: 1 }}>
                    STEP 2 OF 3 / CHARGING BASICS
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 4, maxWidth: 300 }}>
                    <Box sx={{ flex: 1, height: 4, bgcolor: '#177574', borderRadius: 2 }} />
                    <Box sx={{ flex: 1, height: 4, bgcolor: '#177574', borderRadius: 2 }} />
                    <Box sx={{ flex: 1, height: 4, bgcolor: '#e0e0e0', borderRadius: 2 }} />
                </Box>
            </Box>

            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1.5, color: '#1b4332', fontSize: { xs: '2rem', md: '2.75rem' } }}>
                    Make charging fit your life.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: 'text.secondary' }}>
                    Understand your options at home, at work, and on the road.
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
                        <MenuItem value="power-vs-energy">Power vs energy</MenuItem>
                        <MenuItem value="charging-level">Choose a charging level</MenuItem>
                        <MenuItem value="connector">Know your connector</MenuItem>
                        <MenuItem value="affects-speed">What affects speed?</MenuItem>
                        <MenuItem value="public-charging">Find public charging</MenuItem>
                        <MenuItem value="routine">Build your routine</MenuItem>
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                <ElectricBoltIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    Power vs energy
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                kW measures charging power. kWh measures stored energy. Higher kW means faster charging; higher kWh means more range.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/charging-basics/full-guide"
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                <EvStationOutlinedIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    Choose a charging level
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Level 1: household outlets. Level 2: homes, workplaces, and public locations. DC fast: road trips and quick stops.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/charging-basics/full-guide"
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                <ElectricalServicesIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    Know your connector
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Explore J1772, NACS, CCS Type 1, and CHAdeMO. Connector compatibility matters before you plug in.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/charging-basics/full-guide"
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                <SpeedIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    What affects speed?
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Battery charge, vehicle limits, charger capacity, battery management, and cold weather affect charging speed.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/charging-basics/full-guide"
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                <MapOutlinedIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    Find public charging
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Use in-vehicle navigation, charging network apps, or tools such as PlugShare. Check connector type and availability.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/charging-basics/full-guide"
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                <HomeOutlinedIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    Build your routine
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Level 1 or 2 suits everyday charging. DC fast charging is useful on longer trips or when time is limited.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/charging-basics/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'none' } }}
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
                        Find all the original information together in the Charging Basics full guide.
                    </Typography>
                </Box>
                <Button
                    component={Link}
                    href="/charging-basics/full-guide"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ color: '#1b4332', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
                >
                    Read the full guide
                </Button>
            </Box>

            {/* Continue Button */}
            <Button
                component={Link}
                href="/cost-calculator"
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
                Continue to Cost Calculator
            </Button>

            <ChatbotLauncher />
        </Container>
    );
}