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

//   async sendMessage(message) {
//     try {
//       const response = await axios.post(
//         this.apiUrl,
//         {
//           model: API_CONFIG.MODEL,
//           messages: [
//             {
//               role: 'system',
//               content: 'You are a helpful AI assistant. Provide clear, concise, and helpful responses.'
//             },
//             {
//               role: 'user',
//               content: message
//             }
//           ],
//           max_tokens: API_CONFIG.MAX_TOKENS,
//           temperature: API_CONFIG.TEMPERATURE
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${this.apiKey}`
//           }
//         }
//       );

//       if (response.data && response.data.choices && response.data.choices[0]) {
//         return response.data.choices[0].message.content.trim();
//       } else {
//         throw new Error('Invalid response from OpenAI API');
//       }
//     } catch (error) {
//       console.error('OpenAI API Error:', error.response?.data || error.message);

//       if (error.response) {
//         switch (error.response.status) {
//           case 401:
//             throw new Error('Invalid API key. Please check your configuration.');
//           case 429:
//             throw new Error('Rate limit exceeded. Please try again later.');
//           case 500:
//             throw new Error('OpenAI server error. Please try again later.');
//           default:
//             throw new Error(error.response.data?.error?.message || 'Failed to get response from AI');
//         }
//       } else if (error.request) {
//         throw new Error('Network error. Please check your internet connection.');
//       } else {
//         throw new Error('An unexpected error occurred.');
//       }
//     }
//   }
// }

async sendMessage(message) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/responses",   // ✅ NEW API
      {
        model: "gpt-4o-mini",
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
