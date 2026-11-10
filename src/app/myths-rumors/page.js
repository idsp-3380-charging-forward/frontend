"use client";

import {
    ArrowForward as ArrowForwardIcon,
    Check as CheckIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ChatbotLauncher from '../../components/features/chatbot/ChatbotLauncher';

export default function MythsRumorsPage() {
    return (
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 10 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 3, '& .MuiBreadcrumbs-separator': { color: '#177574' } }}>
                <Link href="/" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Home
                </Link>
                <Typography color="text.primary" sx={{ fontWeight: 'bold', color: '#1b4332' }}>
                    Myths & Rumors
                </Typography>
            </Breadcrumbs>

            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="overline" sx={{ fontWeight: 'bold', display: 'block', mb: 1, letterSpacing: 1, color: '#177574' }}>
                    MYTHS & RUMORS
                </Typography>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1.5, color: '#1b4332', fontSize: { xs: '2rem', md: '2.75rem' } }}>
                    Look beyond the sticker price.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    Explore the costs of driving electric, from the purchase price to fuel and maintenance.
                </Typography>
            </Box>

            {/* A common concern Section */}
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: '#1b4332' }}>
                A common concern
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                {/* Dropdown Card */}
                <Card variant="outlined" sx={{ borderRadius: 4, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                Electric vehicles are too expensive
                            </Typography>
                            <KeyboardArrowUpIcon sx={{ color: '#177574' }} />
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                            The sticker price is only part of the story. Compare upfront costs with fuel and maintenance over time.
                        </Typography>
                        <Button
                            component={Link}
                            href="/myths-rumors/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>

                {/* Compare Card */}
                <Card variant="outlined" sx={{ borderRadius: 4, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ color: '#177574', display: 'flex', alignItems: 'center' }}>
                            <CheckIcon />
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#1b4332', mb: 0.5 }}>
                                Compare your own situation
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Choose a vehicle category, driving profile, and energy prices in the Cost Calculator.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            {/* Action Buttons Stack */}
            <Stack spacing={2} sx={{ mb: 4 }}>
                <Button
                    component={Link}
                    href="/cost-calculator"
                    endIcon={<ArrowForwardIcon sx={{ color: 'white' }} />}
                    sx={{ bgcolor: '#177574', color: 'white', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#125c5b' } }}
                >
                    Open Cost Calculator
                </Button>
                <Button
                    component={Link}
                    href="/myths-rumors/full-guide"
                    endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                    sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                >
                    Read the full costs explanation
                </Button>
            </Stack>

            <ChatbotLauncher />
        </Container>
    );
}