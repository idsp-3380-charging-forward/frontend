"use client";

import {
    ArrowForward as ArrowForwardIcon,
    CloseFullscreen as CloseFullscreenIcon,
    Close as CloseIcon,
    OpenInFull as OpenInFullIcon,
    SentimentSatisfiedAlt as SentimentSatisfiedAltIcon,
} from "@mui/icons-material"
import { Box, Button, Dialog, DialogContent, IconButton, InputAdornment, OutlinedInput, Paper, Typography } from "@mui/material"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function InputArea({ message, setMessage, isExpanded, onSend, isLoading }) {
    function handleSubmit(event) {
        event.preventDefault()

        if (!message.trim() || isLoading) {
            return
        }

        onSend(message)
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mt: "auto",
                pt: 2,
                pb: isExpanded ? 1 : 0,
                width: "100%"
            }}
        >
            <OutlinedInput
                fullWidth
                placeholder="Type your EV question..."
                value={message}
                disabled={isLoading}
                onChange={(e) => setMessage(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            type="submit"
                            disabled={isLoading || !message.trim()}
                            sx={{
                                bgcolor: "#1b4332",
                                color: "white",
                                "&:hover": {
                                    bgcolor: "#122c21"
                                },
                                width: 32,
                                height: 32,
                                borderRadius: 2
                            }}
                        >
                            <ArrowForwardIcon fontSize="small" />
                        </IconButton>
                    </InputAdornment>
                }
                sx={{
                    borderRadius: 4,
                    bgcolor: "white",
                    pr: 1,
                    border: "1px solid #e0e0e0",
                    "& fieldset": {
                        border: "none"
                    }
                }}
            />
        </Box>
    )
}

export default function ChatbotPanel({ onClose }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSend(text) {
        const trimmedMessage = text.trim()

        if (!trimmedMessage || isLoading) {
            return
        }

        const userMessage = {
            sender: "user",
            text: trimmedMessage
        }

        const updatedMessages = [...messages, userMessage]

        setMessages(updatedMessages)
        setMessage("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: updatedMessages
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data.error || "Unable to get chatbot response."
                )
            }

            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    sender: "bot",
                    text: data.reply
                }
            ])
        } catch (error) {
            console.error("Chatbot error:", error);

            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    sender: "bot",
                    text: "Sorry, I’m having trouble responding right now. Please try again."
                }
            ])
        } finally {
            setIsLoading(false)
        }
    }

    const topics = ["What's a ZEV?", "How can I charge an EV?", "How do costs compare?"];

    const Header = () => (
        <Box sx={{ bgcolor: "#1b4332", color: "white", display: "flex", alignItems: "center", p: 1.5, borderTopLeftRadius: isExpanded ? 0 : 16, borderTopRightRadius: isExpanded ? 0 : 16 }}>
            <IconButton size="small" onClick={() => setIsExpanded(!isExpanded)} sx={{ color: "white", bgcolor: "rgba(255,255,255,0.2)", borderRadius: 2, mr: 2 }}>
                {isExpanded ? <CloseFullscreenIcon fontSize="small" /> : <OpenInFullIcon fontSize="small" />}
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
                <Typography fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    Ask Charging Forward
                </Typography>
                {isExpanded && <Typography variant="caption" sx={{ color: "#a5d6a7" }}>Personalised help</Typography>}
            </Box>
            <IconButton size="small" onClick={onClose} sx={{ color: "white", bgcolor: "rgba(255,255,255,0.2)", borderRadius: 2 }}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
    );

    if (isExpanded) {
        return (
            <Dialog
                open
                fullScreen
                sx={{ "& .MuiDialog-paper": { bgcolor: "#f4f7f6" } }}
            >
                <Header />
                <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
                    <Box sx={{ width: "100%", maxWidth: 600 }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                            What would you like to know?
                        </Typography>

                        <Box sx={{ bgcolor: "#9fcddb", borderRadius: 4, p: 4, mb: 4 }}>
                            <SentimentSatisfiedAltIcon sx={{ fontSize: 40, color: "#1b4332", mb: 2 }} />
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#1b4332" }}>
                                Need your EV questions answered?
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#1b4332" }}>
                                Try our chatbot for personalised answers about how an EV could work for you.
                            </Typography>
                        </Box>

                        <Typography variant="caption" fontWeight="bold" sx={{ display: "block", mb: 2 }}>
                            Choose a topic to get started
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 6 }}>
                            {topics.map((topic) => (
                                <Button
                                    key={topic}
                                    onClick={() => handleSend(topic)}
                                    variant="outlined"
                                    endIcon={<ArrowForwardIcon sx={{ color: "#1b4332" }} />}
                                    sx={{ justifyContent: "space-between", color: "#000", borderColor: "#e0e0e0", bgcolor: "white", py: 1.5, px: 3, borderRadius: 2, textTransform: "none", "&:hover": { bgcolor: "#f5f5f5", borderColor: "#d0d0d0" } }}
                                >
                                    {topic}
                                </Button>
                            ))}
                        </Box>

                        {messages.map((item, index) => (
                            <Box key={`${item.sender}-${index}`}>
                                <Typography
                                    component="span"
                                    fontWeight="bold"
                                >
                                    {item.sender === "user" ? "You: " : "Bot: "}
                                </Typography>

                                {item.sender === "bot" ? (
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {item.text}
                                    </ReactMarkdown>
                                ) : (
                                    <Typography component="span">
                                        {item.text}
                                    </Typography>
                                )}
                            </Box>
                        ))}

                        {isLoading && (
                            <Typography>
                                Thinking...
                            </Typography>
                        )}

                        <InputArea message={message} setMessage={setMessage} isExpanded={isExpanded} onSend={handleSend} isLoading={isLoading} />
                        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 2, textAlign: "left" }}>
                            Or browse the full guides at your own pace.
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Paper
            elevation={6}
            sx={{
                position: "fixed",
                bottom: 24,
                right: 24,
                width: { xs: "calc(100% - 48px)", sm: 380 },
                height: 520,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                zIndex: 1100,
                bgcolor: "white"
            }}
        >
            <Header />
            <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1, overflowY: "auto" }}>
                <SentimentSatisfiedAltIcon sx={{ fontSize: 32, color: "#1b4332", mb: 2 }} />
                <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#1b4332" }} gutterBottom>
                    Need your EV questions answered?
                </Typography>
                <Typography variant="caption" sx={{ display: "block", mb: 2, color: "#1b4332" }}>
                    Choose a topic to get started
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
                    {topics.map((topic) => (
                        <Button
                            key={topic}
                            onClick={() => handleSend(topic)}
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ justifyContent: "space-between", bgcolor: "#9fcddb", color: "#1b4332", py: 1.5, px: 2, borderRadius: 2, textTransform: "none", boxShadow: "none", "&:hover": { bgcolor: "#8abdc9", boxShadow: "none" } }}
                        >
                            {topic}
                        </Button>
                    ))}
                </Box>

                {messages.map((item, index) => (
                    <Box key={`${item.sender}-${index}`}>
                        <Typography
                            component="span"
                            fontWeight="bold"
                        >
                            {item.sender === "user" ? "You: " : "Bot: "}
                        </Typography>

                        {item.sender === "bot" ? (
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {item.text}
                            </ReactMarkdown>
                        ) : (
                            <Typography component="span">
                                {item.text}
                            </Typography>
                        )}
                    </Box>
                ))}

                {isLoading && (
                    <Typography>
                        Thinking...
                    </Typography>
                )}

                <InputArea message={message} setMessage={setMessage} isExpanded={isExpanded} onSend={handleSend} isLoading={isLoading} />
            </Box>
        </Paper>
    );
}