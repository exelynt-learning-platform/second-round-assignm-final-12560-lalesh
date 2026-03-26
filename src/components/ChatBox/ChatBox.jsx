import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageList from '../MessageList/MessageList';
import InputArea from '../InputArea/InputArea';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { clearError } from '../../store/actions/messageActions';
import styles from './ChatBox.module.css';

const ChatBox = () => {
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector(state => state.messages);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  return (
    <div className={styles.chatBox}>
      <div className={styles.chatHeader}>
        <h2>Chat Conversation</h2>
        {messages.length > 0 && (
          <span className={styles.messageCount}>
            {messages.length} messages
          </span>
        )}
      </div>

      <div className={styles.chatContainer} ref={chatContainerRef}>
        {messages.length === 0 ? (
          <div className={styles.welcomeMessage}>
            <h3>Welcome to AI Chat Assistant! 🎉</h3>
            <p>Start a conversation by typing a message below.</p>
            <p className={styles.examplePrompt}>
              Try asking: "What's the weather like today?" or "Tell me a joke!"
            </p>
          </div>
        ) : (
          <MessageList messages={messages} />
        )}

        {loading && (
          <div className={styles.loadingWrapper}>
            <LoadingSpinner />
            <p>AI is thinking...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorMessage}>
            <span>⚠️ {error}</span>
            <button onClick={() => dispatch(clearError())}>Dismiss</button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <InputArea disabled={loading} />
    </div>
  );
};

export default ChatBox;
