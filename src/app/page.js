"use client";

import Link from 'next/link';
// import { fetchPage } from '../api/services/pages';
// import { WP_SLUGS } from '../constants/routes';
import {
  ArrowForward as ArrowForwardIcon,
  CalculateOutlined as CalculateOutlinedIcon,
  CalendarToday as CalendarTodayIcon,
  ElectricCar as ElectricCarIcon,
  EvStationOutlined as EvStationOutlinedIcon,
  HelpOutlined as HelpOutlinedIcon,
  MenuBookOutlined as MenuBookOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon
} from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import ChatbotLauncher from '../components/features/chatbot/ChatbotLauncher';

export default function Home() {
  /*
  try {
    const pageData = await fetchPage(WP_SLUGS.HOME);

    if (!pageData) return <div>No content found</div>;

    return (
      <>
        <main>
          <h1>{pageData.title?.rendered}</h1>
          <article dangerouslySetInnerHTML={{ __html: pageData.content?.rendered }} />
        </main>

        <ChatbotLauncher />
      </>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
  */

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#1b4332',
          borderRadius: 4,
          p: { xs: 3, md: 6 },
          mb: 6,
          color: 'white',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ fontWeight: 'bold', display: 'block', mb: 1, letterSpacing: 1 }}>
            CHARGING FORWARD
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}>
            Your journey to driving electric.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', maxWidth: 450, opacity: 0.9 }}>
            An open, community-centred learning hub for informed choices about ZEVs and EV charging.
          </Typography>
          <Button
            component={Link}
            href="/zevs-101"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#9fcddb',
              color: '#1b4332',
              fontWeight: 'bold',
              py: 1.5,
              px: 3,
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              width: { xs: '100%', sm: 'auto' },
              justifyContent: 'space-between',
              '&:hover': { bgcolor: '#8abdc9', boxShadow: 'none' }
            }}
          >
            Start with ZEVs 101
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: '#9fcddb',
            borderRadius: 4,
            height: { xs: 220, md: 280 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ElectricCarIcon sx={{ fontSize: 120, color: '#1b4332', opacity: 0.8 }} />
        </Box>
      </Box>

      {/* One step at a time Section */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: '#1b4332' }}>
        One step at a time
      </Typography>

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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <MenuBookOutlinedIcon sx={{ color: '#177574' }} />
                <Typography variant="h6" fontWeight="bold">01 ZEVs 101</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                Understand electric vehicles and explore whether one could work for you.
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <EvStationOutlinedIcon sx={{ color: '#177574' }} />
                <Typography variant="h6" fontWeight="bold">02 Charging Basics</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                Get to know charging levels, connectors, and public charging.
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <CalculateOutlinedIcon sx={{ color: '#177574' }} />
                <Typography variant="h6" fontWeight="bold">03 Cost Calculator</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                Compare vehicle types, your driving profile, and energy prices.
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

      {/* Bottom Section (Keep exploring & Chatbot) */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3
        }}
      >
        <Box sx={{ bgcolor: '#9fcddb', borderRadius: 4, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#1b4332', mb: 3 }}>
            Keep exploring
          </Typography>
          <Stack spacing={2}>
            <Button
              component={Link}
              href="/myths-rumors"
              endIcon={<HelpOutlinedIcon sx={{ color: '#1b4332' }} />}
              sx={{ bgcolor: 'white', color: 'black', py: 1.5, px: 2, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'medium', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', '&:hover': { bgcolor: '#f5f5f5' } }}
            >
              Myths & Rumors
            </Button>
            <Button
              component={Link}
              href="/community-perks"
              endIcon={<PeopleOutlinedIcon sx={{ color: '#1b4332' }} />}
              sx={{ bgcolor: 'white', color: 'black', py: 1.5, px: 2, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'medium', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', '&:hover': { bgcolor: '#f5f5f5' } }}
            >
              Community Perks
            </Button>
            <Button
              component={Link}
              href="/events"
              endIcon={<CalendarTodayIcon sx={{ color: '#1b4332' }} />}
              sx={{ bgcolor: 'white', color: 'black', py: 1.5, px: 2, borderRadius: 2, justifyContent: 'space-between', textTransform: 'none', fontWeight: 'medium', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', '&:hover': { bgcolor: '#f5f5f5' } }}
            >
              Events
            </Button>
          </Stack>
        </Box>

        <Box sx={{ bgcolor: '#1b4332', borderRadius: 4, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: 'white', mb: 2 }}>
            Need your EV questions answered?
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', mb: 4, opacity: 0.9 }}>
            Try our chatbot for personalised answers about how an EV could work for you.
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: '#9fcddb', color: '#1b4332', fontWeight: 'bold', py: 1.5, borderRadius: 2, textTransform: 'none', boxShadow: 'none', '&:hover': { bgcolor: '#8abdc9', boxShadow: 'none' } }}
          >
            Ask Charging Forward
          </Button>
        </Box>
      </Box>

      <ChatbotLauncher />
    </Container>
  );
}