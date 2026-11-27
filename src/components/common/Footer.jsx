"use client";

import {
  Box,
  Container,
  Link,
  Stack,
  Typography
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1b4332",
        color: "white",
        py: 4,
        mt: 6
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1.1fr 1.3fr"
            },
            gap: 5
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Charging Forward →
            </Typography>

            <Stack spacing={1.5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnOutlinedIcon fontSize="small" />

                <Typography variant="body2">
                  3700 Willingdon Ave
                  <br />
                  Burnaby, BC
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneOutlinedIcon fontSize="small" />

                <Typography variant="body2">
                  604-434-5734
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailOutlinedIcon fontSize="small" />

                <Link
                  href="mailto:chargingforward@bcit.ca"
                  color="inherit"
                  underline="hover"
                  variant="body2"
                >
                  chargingforward@bcit.ca
                </Link>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Our Partners
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              sx={{ alignItems: "center" }}
            >
              <Image
                src="/bcit-logo.png"
                alt="BCIT"
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "66px",
                  objectFit: "contain"
                }}
              />

              <Image
                src="/nrcan-logo.png"
                alt="Natural Resources Canada"
                width={220}
                height={100}
                style={{
                  width: "auto",
                  height: "66px",
                  objectFit: "contain"
                }}
              />
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Our Mission
            </Typography>

            <Typography
              variant="body2"
              sx={{ lineHeight: 1.6 }}
            >
              Charging Forward provides resources and opportunities
              to gather unbiased information about electric vehicles,
              in the context of rural community living to see if an EV
              would be functional for their lifestyle.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}