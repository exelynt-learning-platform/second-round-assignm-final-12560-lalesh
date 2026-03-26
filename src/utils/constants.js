export const API_CONFIG = {
  URL: 'https://api.openai.com/v1/chat/completions',
  MODEL: 'gpt-4o-mini',
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7
};

export const UI_CONFIG = {
  MAX_MESSAGE_LENGTH: 2000,
  SCROLL_BEHAVIOR: 'smooth',
  TYPING_DELAY: 100
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  API_KEY_ERROR: 'Invalid API key. Please check your configuration.',
  RATE_LIMIT: 'Rate limit exceeded. Please try again later.',
  SERVER_ERROR: 'Server error. Please try again later.',
  DEFAULT: 'Failed to get response. Please try again.'
};
