"use client";

import {
    ArrowForward as ArrowForwardIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Card, CardContent, Container, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import ChatbotLauncher from '../../components/features/chatbot/ChatbotLauncher';

export default function EventsPage() {
    const [eventType, setEventType] = useState('all');

    return (
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 10 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 3, '& .MuiBreadcrumbs-separator': { color: '#177574' } }}>
                <Link href="/" style={{ color: '#177574', textDecoration: 'none', fontWeight: '500' }}>
                    Home
                </Link>
                <Typography color="text.primary" sx={{ fontWeight: 'bold', color: '#1b4332' }}>
                    Events
                </Typography>
            </Breadcrumbs>

            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="overline" sx={{ fontWeight: 'bold', display: 'block', mb: 1, letterSpacing: 1, color: '#177574' }}>
                    CONNECT & LEARN
                </Typography>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 3, color: '#1b4332', fontSize: { xs: '2rem', md: '2.75rem' } }}>
                    Upcoming events
                </Typography>

                <FormControl sx={{ width: '100%', mb: 4 }}>
                    <Select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
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
                        <MenuItem value="all">All events</MenuItem>
                        <MenuItem value="upcoming">Upcoming events</MenuItem>
                        <MenuItem value="past">Past events</MenuItem>
                    </Select>
                </FormControl>

                {/* No Event Details Card */}
                <Card variant="outlined" sx={{ borderRadius: 4, p: 2, borderColor: '#e0e0e0', bgcolor: '#fbfbfb', mb: 6 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: '#1b4332' }}>
                            No event details listed yet
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This prototype does not include event dates or locations.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Keep learning in the meantime Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: '#1b4332' }}>
                    Keep learning in the meantime
                </Typography>
                <Stack spacing={2}>
                    <Button
                        component={Link}
                        href="/zevs-101"
                        endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                        sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                    >
                        Explore ZEVs 101
                    </Button>
                    <Button
                        component={Link}
                        href="/charging-basics"
                        endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                        sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                    >
                        Explore Charging Basics
                    </Button>
                    <Button
                        component={Link}
                        href="/community-perks"
                        endIcon={<ArrowForwardIcon sx={{ color: '#1b4332' }} />}
                        sx={{ bgcolor: '#9fcddb', color: '#1b4332', py: 2, px: 3, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'bold', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9' } }}
                    >
                        Community Perks
                    </Button>
                </Stack>
            </Box>

            <ChatbotLauncher />
        </Container>
    );
}