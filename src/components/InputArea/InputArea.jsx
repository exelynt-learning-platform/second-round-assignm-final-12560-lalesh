import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/actions/messageActions';
import { FiSend, FiSmile } from 'react-icons/fi';
import styles from './InputArea.module.css';
import { EMOJIS } from '../../utils/constants';


const InputArea = ({ disabled }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim() && !disabled) {
      dispatch(sendMessage(message.trim()));
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEmoji = () => {
    const emojis = ['😊', '😂', '❤️', '👍', '🎉', '🤔', '😢', '😎'];
    const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    setMessage(prev => prev + randomEmoji);
  };

  return (
    <div className={styles.inputArea}>
      <div className={styles.inputContainer}>
        <button 
          className={styles.emojiButton}
          onClick={handleEmoji}
          disabled={disabled}
        >
          <FiSmile />
        </button>
        
        <textarea
          className={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={disabled ? "AI is thinking..." : "Type your message..."}
          disabled={disabled}
          rows={1}
        />
        
        <button 
          className={`${styles.sendButton} ${!message.trim() || disabled ? styles.disabled : ''}`}
          onClick={handleSend}
          disabled={!message.trim() || disabled}
        >
          <FiSend />
        </button>
      </div>
      <div className={styles.inputHint}>
        Press Enter to send, Shift+Enter for new line
      </div>
    </div>
  );
};

export default InputArea;
