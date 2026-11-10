"use client";

import {
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ChatbotLauncher from '../../components/features/chatbot/ChatbotLauncher';

export default function LearnPage() {
    return (
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 10 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 3, '& .MuiBreadcrumbs-separator': { color: '#177574' } }}>
                <Link href="/" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Home
                </Link>
                <Typography color="text.primary" sx={{ fontWeight: 'bold', color: '#1b4332' }}>
                    Learn
                </Typography>
            </Breadcrumbs>

            {/* Header Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="overline" sx={{ fontWeight: 'bold', display: 'block', mb: 1, letterSpacing: 1, color: '#177574' }}>
                    YOUR LEARNING PATH
                </Typography>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#1b4332', fontSize: { xs: '2rem', md: '2.75rem' } }}>
                    Get confident about going electric.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', maxWidth: 650, color: 'text.secondary' }}>
                    Follow the steps below, or choose a topic that answers your question.
                </Typography>

                {/* Learning Path Progress Banner */}
                <Box
                    sx={{
                        bgcolor: '#9fcddb',
                        borderRadius: 3,
                        py: 2,
                        px: 3,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1.5,
                        width: { xs: '100%', sm: 'auto' },
                        justifyContent: { xs: 'center', sm: 'flex-start' }
                    }}
                >
                    <Typography variant="body2" fontWeight="bold" sx={{ color: '#1b4332' }}>
                        01 Understand → 02 Charge → 03 Compare your options
                    </Typography>
                </Box>
            </Box>

            {/* One step at a time Cards */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 3,
                    mb: 6
                }}
            >
                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: '#1b4332' }}>
                                01 ZEVs 101
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Vehicle types, benefits, maintenance, and charging at home.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/zevs-101"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Explore ZEVs 101
                        </Button>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: '#1b4332' }}>
                                02 Charging Basics
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Power and energy, charging levels, connectors, and planning.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/charging-basics"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Explore Charging Basics
                        </Button>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', p: 1, borderColor: '#e0e0e0', bgcolor: '#fbfbfb' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: '#1b4332' }}>
                                03 Cost Calculator
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Choose a category and compare costs using your driving profile.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/cost-calculator"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Explore Cost Calculator
                        </Button>
                    </CardContent>
                </Card>
            </Box>

            {/* More ways to learn Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: '#1b4332' }}>
                    More ways to learn
                </Typography>
                <Stack spacing={2}>
                    <Button
                        component={Link}
                        href="/myths-rumors"
                        endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                        sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                    >
                        Myths & Rumors
                    </Button>
                    <Button
                        component={Link}
                        href="/community-perks"
                        endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                        sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                    >
                        Community Perks
                    </Button>
                    <Button
                        component={Link}
                        href="/events"
                        endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                        sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                    >
                        Upcoming Events
                    </Button>
                </Stack>
            </Box>

            <ChatbotLauncher />
        </Container>
    );
}