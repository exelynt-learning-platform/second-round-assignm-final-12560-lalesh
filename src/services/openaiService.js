import axios from 'axios';
import { API_CONFIG } from '../utils/constants';

class OpenAIService {
  constructor() {
    this.apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    this.apiUrl = process.env.REACT_APP_API_URL || API_CONFIG.URL;

    if (!this.apiKey) {
      console.error('OpenAI API key is missing. Please check your .env file.');
    }
  }


async sendMessage(message) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant."
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    // ✅ safer error handling
    if (error.response?.status === 429) {
      throw new Error("Rate limit exceeded. Try again later.");
    }
    throw new Error("Failed to fetch AI response");
  }
}
}


export default new OpenAIService();
