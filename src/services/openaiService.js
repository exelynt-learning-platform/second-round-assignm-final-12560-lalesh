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
        messages": [{"role": "user", "content": "Hello, AI!"}],
        input: message
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`
        }
      }
    );

    return response.data.output[0].content[0].text;

  } catch (error) {
    console.error("OpenAI Error:", error.response?.data || error.message);

    if (error.response?.status === 429) {
      throw new Error("Rate limit exceeded OR no credits left.");
    }

    throw new Error("Failed to get response");
  }
}
}

export default new OpenAIService();
