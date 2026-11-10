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

export default function ZevsFullGuidePage() {
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
                <Link href="/zevs-101" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    ZEVs 101
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
                    Your guide to ZEVs
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
                            01 What&apos;s a ZEV?
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel2" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            02 How do EVs work?
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel3" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            03 Why choose electric?
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel4" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            04 Maintenance
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel5" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            05 Can I charge at home?
                        </Typography>
                        <Typography variant="body2" component="a" href="#panel6" sx={{ color: '#1b4332', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>
                            06 Plug-in hybrids
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
                            01 / What&apos;s a ZEV?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            ZEV stands for &quot;Zero Emission Vehicle&quot;.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            And includes:<br />
                            • Electric Vehicles (EVs)<br />
                            • Plug-in Hybrids (PHEVs)<br />
                            • Hydrogen Vehicles
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            We&apos;ll mainly be discussing EVs with some discussion of PHEVs and not hydrogen as it remains a relatively difficult fuel to obtain, especially in remote and northern areas.
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
                            02 / How do EVs work?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            In some ways, they&apos;re more convenient than gas cars because generally, people charge them up at night or other times when they&apos;re not using them rather than having to stop and fuel them up as you would with a gas car. The exception to this is for long trips, when you need to stop at a fast charger to fuel up.
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
                            03 / Why choose electric?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            There are several reasons people choose to buy an EV. For some, it&apos;s an economic decision. EVs are cheaper to fuel and maintain.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Gas prices have consistently risen over time, and recent crises haven&apos;t helped. BC has among the lowest electricity prices in North America, making EVs an even more attractive choice.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            For some, concern for the environment is a major motivation. EVs are better for the environment. No tailpipe means no harmful exhaust fumes.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            For others, reliability is a reason to choose electric. EVs have far fewer moving parts than a gas or diesel car, so there&apos;s less to go wrong.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Early EVs did not have much range before they&apos;d need to be charged up. Today, most new EVs have 400+ kms of range, which is getting close to the same range as a gas car.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Some choose EVs for their performance. EVs are fast and fun to drive.
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
                            04 / Maintenance
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            EVs cost less to maintain than gas or diesel cars because they:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            • Don&apos;t need oil changes<br />
                            • Don&apos;t need tuneups<br />
                            • Have no exhaust system<br />
                            • Don&apos;t have a radiator & cooling system<br />
                            • Have no transmission<br />
                            • Use regenerative braking, so require fewer brake jobs
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Regular maintenance for an EV is mainly checking tire pressure, filling up the washer fluid, and remembering to plug it in.
                        </Typography>
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
                            05 / Can I charge at home?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            A major consideration to decide if an EV is right for you depends on whether you can charge at home.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            If you have a driveway or garage and have access to a standard electrical outlet, generally you are good to go. If not, an EV may still be right for you if you have access to a Level 2 charger at your workplace or at a public charger near where you live or work.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            If neither of those are options for you, a plug-in hybrid may be a better choice.
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
                            06 / Plug-in hybrids
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Plug-in hybrids (PHEVs) can make sense for people who aren&apos;t quite ready to switch over to a fully electric vehicle, or who don&apos;t have access to charging at home.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            PHEVs can give you the best of both worlds. You can fuel using electricity whenever you can to reduce your fuel costs, and use gas for long trips, or when charging isn&apos;t available.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            PHEVs typically have smaller batteries than EVs, so have less electric-only range. PHEVs are more complex than EVs and have all the maintenance issues of gas cars.
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