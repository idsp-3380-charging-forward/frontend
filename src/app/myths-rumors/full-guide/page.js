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

export default function CostsGuideFullGuidePage() {
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
                <Link href="/myths-rumors" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Myths & Rumors
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
                    A closer look at EV costs
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
                            01 Are EVs too expensive?
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Collapsible Accordion */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
                <Accordion
                    id="panel1"
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    variant="outlined"
                    sx={{ borderRadius: '16px !important', borderColor: '#e0e0e0', bgcolor: '#fbfbfb', '&:before': { display: 'none' }, overflow: 'hidden' }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                            01 / Are EVs too expensive?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            EVs cost less than most people think. The sticker price on an EV can look high, but that&apos;s only part of the story. Once you factor in what you actually spend over time, EVs often come out ahead.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                            Electricity costs a fraction of what gasoline does. Charging an EV in Canada works out to roughly the same as paying about 40 cents per litre for gas. Most Canadian EV drivers save around $3,000 a year in fuel alone just by going electric.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Maintenance is also much cheaper: no oil changes, fewer brake jobs (EVs use regenerative braking, so brake pads last much longer), and far fewer moving parts to wear out or break. The upfront price gap between EVs and gas vehicles is also shrinking every year.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <ChatbotLauncher />
        </Container>
    );
}