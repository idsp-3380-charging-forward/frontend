"use client";

import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import ElectricCarOutlinedIcon from "@mui/icons-material/ElectricCarOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";

export default function Navigation({ open, onClose }) {
    const menuItems = [
        { label: "Home", href: "/", icon: <HomeOutlinedIcon /> },
        { label: "Learn", href: "/learn", icon: <MenuBookOutlinedIcon /> },
        { label: "Cost Calculator", href: "/cost-calculator", icon: <CalculateOutlinedIcon /> },
        { label: "Events", href: "/events", icon: <EventOutlinedIcon /> },
        { label: "ZEVs 101", href: "/zevs-101", icon: <ElectricCarOutlinedIcon /> },
        { label: "Charging Basics", href: "/charging-basics", icon: <EvStationOutlinedIcon /> },
        { label: "Community Perks", href: "/community-perks", icon: <PeopleOutlinedIcon /> },
        { label: "Myths & Rumors", href: "/myths-rumors", icon: <HelpOutlineOutlinedIcon /> },
    ];

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
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
                    Menu
                </Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <List disablePadding>
                {menuItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            component={Link}
                            href={item.href}
                            onClick={onClose}
                            sx={{ borderRadius: 2 }}
                        >
                            <ListItemIcon sx={{ minWidth: 40, color: "#1b4332" }}>
                                {item.icon}
                            </ListItemIcon>
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
    );
}