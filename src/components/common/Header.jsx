"use client";

import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import ElectricCarOutlinedIcon from "@mui/icons-material/ElectricCarOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ bgcolor: "#1b4332", p: { xs: 1.5, md: 2 } }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "auto !important", p: "0 !important" }}>
                    <Typography
                        component={Link}
                        href="/"
                        variant="h6"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "bold",
                            lineHeight: 1.2,
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: { md: 1 },
                            letterSpacing: 1,
                        }}
                    >
                        <span>CHARGING</span>
                        <span>FORWARD</span>
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1.5 }}>
                        <IconButton
                            onClick={() => setIsSearchOpen(true)}
                            sx={{
                                bgcolor: "#9fcddb",
                                color: "#1b4332",
                                borderRadius: 2,
                                p: 1.2,
                                "&:hover": { bgcolor: "#8abdc9" },
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                        <Button
                            onClick={() => setIsNavOpen(true)}
                            sx={{
                                bgcolor: "#9fcddb",
                                color: "#1b4332",
                                borderRadius: 2,
                                px: { xs: 1.2, md: 2 },
                                minWidth: { xs: 0, md: 90 },
                                "&:hover": { bgcolor: "#8abdc9" },
                            }}
                        >
                            <Box sx={{ display: { xs: "none", md: "block" }, mr: 1, fontWeight: "bold", textTransform: "none" }}>
                                Menu
                            </Box>
                            <MenuIcon />
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: { xs: "100%", sm: 360 },
                        p: 3,
                        borderRadius: { sm: "24px 0 0 24px" }
                    }
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Search
                    </Typography>
                    <IconButton onClick={() => setIsSearchOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <TextField
                    fullWidth
                    placeholder="Search EV topics..."
                    variant="outlined"
                    sx={{
                        mb: 4,
                        "& .MuiOutlinedInput-root": {
                            bgcolor: "#9fcddb",
                            borderRadius: 2,
                            "& fieldset": { border: "none" },
                        },
                    }}
                />

                <Typography variant="caption" color="#1b4332" fontWeight="bold" sx={{ mb: 2, display: "block" }}>
                    Explore a topic
                </Typography>

                <List disablePadding>
                    {[
                        { label: "ZEVs 101", href: "/zevs-101", icon: <ElectricCarOutlinedIcon /> },
                        { label: "Charging Basics", href: "/charging-basics", icon: <EvStationOutlinedIcon /> },
                        { label: "Cost Calculator", href: "/cost-calculator", icon: <CalculateOutlinedIcon /> },
                    ].map((item) => (
                        <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                component={Link}
                                href={item.href}
                                onClick={() => setIsSearchOpen(false)}
                                sx={{ borderRadius: 2 }}
                            >
                                <ListItemIcon sx={{ minWidth: 40, color: "#1b4332" }}>{item.icon}</ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    sx={{ "& .MuiListItemText-primary": { fontWeight: "medium" } }}
                                />
                                <ChevronRightIcon sx={{ color: "text.secondary" }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Navigation open={isNavOpen} onClose={() => setIsNavOpen(false)} />
        </>
    );
}