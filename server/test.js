// test.js
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const apiKey = process.env.OPENROUTER_API_KEY;

async function test() {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo', // or try 'mistralai/mixtral-8x7b', 'anthropic/claude-3-opus-20240229', etc.
        messages: [{ role: 'user', content: 'Hello!' }],
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost', // Replace with your website URL if deployed
          'X-Title': 'My Chatbot',            // Optional custom name
        },
      }
    );

    console.log('AI Response:', response.data.choices[0].message.content);
  } catch (err) {
    console.error('OpenRouter Error:', err.response?.data || err.message);
  }
}

test();
