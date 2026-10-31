'use client';

import { useState } from 'react';
import styles from './Chatbot.module.css';

export default function ChatInput({ onSend }) {
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return;
        }

        onSend(trimmedMessage);
        setMessage('');
    }

    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type your message..."
                aria-label="Chat message"
            />

            <button
                className={styles.sendButton}
                type="submit"
                aria-label="Send message"
            >
                Send
            </button>
        </form>
    );
}