"use client";

import { ContactSupport as ContactSupportIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useState } from "react";
import ChatbotPanel from "./ChatbotPanel";

export default function ChatbotLauncher() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen && (
                <Fab
                    onClick={() => setIsOpen(true)}
                    sx={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        bgcolor: "#1b4332",
                        color: "white",
                        "&:hover": { bgcolor: "#122c21" },
                        zIndex: 1000
                    }}
                >
                    <ContactSupportIcon />
                </Fab>
            )}
            {isOpen && <ChatbotPanel onClose={() => setIsOpen(false)} />}
        </>
    );
}