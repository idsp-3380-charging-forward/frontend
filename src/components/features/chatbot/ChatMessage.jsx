import styles from './Chatbot.module.css';

export default function ChatMessage({ sender, text }) {
    const isUser = sender === 'user';

    return (
        <div
            className={`${styles.message} ${
                isUser ? styles.userMessage : styles.botMessage
            }`}
        >
            {text}
        </div>
    );
}