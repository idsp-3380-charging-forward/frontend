"use client";

import {
    ArrowForward as ArrowForwardIcon,
    MapOutlined as MapOutlinedIcon,
    PeopleAltOutlined as PeopleAltOutlinedIcon,
    Work as WorkIcon,
} from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ChatbotLauncher from '../../components/features/chatbot/ChatbotLauncher';

export default function CommunityPerksPage() {
    return (
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 10 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 3, '& .MuiBreadcrumbs-separator': { color: '#177574' } }}>
                <Link href="/" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Home
                </Link>
                <Typography color="text.primary" sx={{ fontWeight: 'bold', color: '#1b4332' }}>
                    Community Perks
                </Typography>
            </Breadcrumbs>

            {/* Header Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="overline" sx={{ fontWeight: 'bold', display: 'block', mb: 1, letterSpacing: 1, color: '#177574' }}>
                    PEOPLE & PLACE
                </Typography>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#1b4332', fontSize: { xs: '2rem', md: '2.75rem' } }}>
                    Electric can benefit the whole community.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    Supporting people, place, and local priorities.
                </Typography>
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
                                <PeopleAltOutlinedIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    Community well-being
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Lower transportation costs, cleaner air, and reduced winter idling can benefit more than individual drivers.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/community-perks/full-guide"
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
                                <WorkIcon sx={{ color: '#177574' }} />
                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332' }}>
                                    Local opportunities
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                ZEVs can create opportunities for local jobs, training, and decisions about charging infrastructure.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/community-perks/full-guide"
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
                                    Shape local solutions
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                                Communities can plan accessible charging in town and on routes out of town, and consider electric municipal fleets.
                            </Typography>
                        </Box>
                        <Button
                            component={Link}
                            href="/community-perks/full-guide"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ p: 0, justifyContent: 'flex-start', color: '#177574', textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                        >
                            Learn more
                        </Button>
                    </CardContent>
                </Card>
            </Box>

            {/* Action Buttons Stack */}
            <Stack spacing={2} sx={{ mb: 4 }}>
                <Button
                    component={Link}
                    href="/community-perks/full-guide"
                    endIcon={<ArrowForwardIcon sx={{ color: 'white' }} />}
                    sx={{ bgcolor: '#177574', color: 'white', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#125c5b' } }}
                >
                    Read the full community guide
                </Button>
                <Button
                    component={Link}
                    href="/learn"
                    endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                    sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                >
                    Back to your learning path
                </Button>
            </Stack>

            <ChatbotLauncher />
        </Container>
    );
}