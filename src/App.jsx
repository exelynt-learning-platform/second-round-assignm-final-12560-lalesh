import React from 'react';
import ChatBox from './components/ChatBox/ChatBox';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>AI Chat Assistant</h1>
          <p>Powered by OpenAI GPT-3.5 Turbo</p>
        </header>
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
