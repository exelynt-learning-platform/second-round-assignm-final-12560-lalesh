import React from 'react';
import styles from './Message.module.css';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`${styles.message} ${isUser ? styles.userMessage : styles.aiMessage}`}>
      <div className={styles.messageAvatar}>
        {isUser ? '👤' : '🤖'}
      </div>
      <div className={styles.messageContent}>
        <div className={styles.messageHeader}>
          <span className={styles.messageSender}>
            {isUser ? 'You' : 'AI Assistant'}
          </span>
          <span className={styles.messageTime}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
        <div className={styles.messageText}>
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default Message;
