import React from 'react';
import Message from '../Message/Message';
import styles from './MessageList.module.css';

const MessageList = ({ messages }) => {
  return (
    <div className={styles.messageList}>
      {messages.map((message, index) => (
        <Message 
          key={message.id || index}
          message={message}
          isLast={index === messages.length - 1}
        />
      ))}
    </div>
  );
};

export default MessageList;
