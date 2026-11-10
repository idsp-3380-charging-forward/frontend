"use client";

import {
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Breadcrumbs,
    Container,
    Stack,
    Typography
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import ChatbotLauncher from '../../../components/features/chatbot/ChatbotLauncher';

export default function ChargingBasicsFullGuidePage() {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                <Link href="/charging-basics" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Charging Basics
                </Link>
                <Typography color="text.primary" sx={{ fontWeight: 'bold', color: '#1b4332' }}>
                    Full guide
                </Typography>
            </Breadcrumbs>

            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="caption" fontWeight="bold" sx={{ color: '#177574', letterSpacing: 1, display: 'block', mb: 1 }}>
                    FULL GUIDE
                </Typography>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1.5, color: '#1b4332', fontSize: { xs: '2rem', md: '2.75rem' } }}>
                    Charging, explained
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: 'text.secondary' }}>
                    All the detail, in one place. Read in order or find the topic you need.
                </Typography>

                {/* In this guide Box */}
                <Box sx={{ bgcolor: '#9fcddb', borderRadius: 4, p: 3, mb: 6 }}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#1b4332', mb: 2 }}>
                        In this guide
                    </Typography>
                    <Stack spacing={1}>
                        <Typography variant="body2" component="a" href="#panel1" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            01 The essentials
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel2" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            02 Power vs energy
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel3" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            03 Charging levels
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel4" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            04 Connectors & adapters
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel5" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            05 What affects charging speed?
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel6" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            06 Finding public charging
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel7" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            07 Choosing your charging routine
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Collapsible Accordions */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
                {/* Panel 1 */}
                <Accordion
                    id="panel1"
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            01 / The essentials
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Electric vehicles (EVs) are charged using different charger types, speeds, and connectors. Understanding a few core concepts helps you choose the most practical charging option for your needs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Panel 2 */}
                <Accordion
                    id="panel2"
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            02 / Power vs energy
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Kilowatts (kW) measure charging power — how fast electricity flows into the vehicle.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Kilowatt-hours (kWh) measure energy — how much electricity a battery can store.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Higher kW means faster charging, while higher kWh means more driving range.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Panel 3 */}
                <Accordion
                    id="panel3"
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            03 / Charging levels
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332', mb: 1 }}>
                            Level 1 (120 V)
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            • Adds roughly 5–8 km of range per hour<br />
                            • Uses a standard household outlet<br />
                            • Best for overnight home charging and low daily driving
                        </Typography>

                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332', mb: 1, mt: 2 }}>
                            Level 2 (208–240 V)
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            • Adds about 20–60 km of range per hour<br />
                            • Common at homes, workplaces, and public locations<br />
                            • Ideal for daily charging during work or errands
                        </Typography>

                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332', mb: 1, mt: 2 }}>
                            DC Fast Charging (Level 3)
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            • Can add 300–400 km of range per hour<br />
                            • Often found along highways and major travel routes<br />
                            • Best for road trips and quick recharging stops
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Panel 4 */}
                <Accordion
                    id="panel4"
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            04 / Connectors & adapters
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332' }}>Type 1 / J1772</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Standard for Level 1 & Level 2 charging.</Typography>

                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332' }}>Tesla (NACS)</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Used by Tesla and increasingly adopted by other manufacturers Supports Level 1, 2 and DC fast charging.</Typography>

                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332' }}>CCS Type 1</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Widely used for DC fast charging.</Typography>

                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332' }}>CHAdeMO</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>An older fast-charging option being phased out.</Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Adapters may allow vehicles to use chargers with different connector types.</Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Panel 5 */}
                <Accordion
                    id="panel5"
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            05 / What affects charging speed?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Charging speed affects how much driving range is added per hour of charging, but real-world results vary depending on:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            • Battery state of charge; charging slows as the battery fills<br />
                            • Vehicle charging limits<br />
                            • Charger capacity<br />
                            • Battery management systems that protect battery health<br />
                            • Cold weather impacts; colder temperatures may temporarily slow charging speed
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Panel 6 */}
                <Accordion
                    id="panel6"
                    expanded={expanded === 'panel6'}
                    onChange={handleChange('panel6')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            06 / Finding public charging
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Public charging is widely available and getting easier to locate:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            • In-vehicle navigation systems can show nearby chargers, availability, and compatible connector types.<br />
                            • Charging network mobile apps allow drivers to search for stations, check charging speeds, see real-time status, and start charging sessions.<br />
                            • Mapping apps and online tools, such as PlugShare, can be used to locate public chargers and do trip planning.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Public chargers are commonly found at shopping centres, workplaces, municipal parking, recreation facilities, and along highways.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Before plugging in, it&apos;s a good idea to confirm the charger&apos;s connector type, charging level, and availability to avoid delays.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Panel 7 */}
                <Accordion
                    id="panel7"
                    expanded={expanded === 'panel7'}
                    onChange={handleChange('panel7')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            07 / Choosing your charging routine
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Most everyday charging happens at Level 1 or Level 2.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            DC fast charging is best used for long trips or when time is limited.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            The right choice depends on driving habits, vehicle capability, and access to charging infrastructure.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This page is under construction. Check back soon for updates.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <ChatbotLauncher />
        </Container>
    );
}