'use client';

import { useState } from 'react';
import styles from './Chatbot.module.css';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatbotPanel({ onClose }) {
    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: 'Hi! How can I help you with your EV questions today?',
        },
    ]);

    function handleSend(message) {
        const userMessage = {
            sender: 'user',
            text: message,
        };

        const botReply = {
            sender: 'bot',
            text: 'Thanks for your message. I am still being built, but I will be able to help with EV questions soon.',
        };

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
            botReply,
        ]);
    }

    return (
        <div className={styles.panel}>
            <div className={styles.panelHeader}>
                <h2>Charging Forward Assistant</h2>

                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close chatbot"
                >
                    ×
                </button>
            </div>

            <div className={styles.messages}>
                {messages.map((message, index) => (
                    <ChatMessage
                        key={`${message.sender}-${index}`}
                        sender={message.sender}
                        text={message.text}
                    />
                ))}
            </div>

            <div className={styles.inputContainer}>
                <ChatInput onSend={handleSend} />
            </div>
        </div>
    );
}