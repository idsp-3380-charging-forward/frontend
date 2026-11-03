'use client';

import { useState } from 'react';
import styles from './Chatbot.module.css';
import ChatbotPanel from './ChatbotPanel';

export default function ChatbotLauncher() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen && (
                <button
                    type="button"
                    className={styles.launcher}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open chatbot"
                >
                    💬
                </button>
            )}

            {isOpen && <ChatbotPanel onClose={() => setIsOpen(false)} />}
        </>
    );
}