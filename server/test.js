import dotenv from 'dotenv';
import axios from 'axios';

// 1. Force reload .env from current directory
dotenv.config({ path: './.env' });

// 2. Debug environment
console.log('Environment:', {
  KeyPresent: !!process.env.OPENROUTER_API_KEY,
  KeyLength: process.env.OPENROUTER_API_KEY?.length,
  NodeEnv: process.env.NODE_ENV
});

// 3. Test with exact headers OpenRouter expects
async function test() {
  const headers = {
    'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
    'HTTP-Referer': 'http://localhost:5000', // Must match your dev URL
    'X-Title': 'API-Test'
  };

  console.log('Request Headers:', headers);

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hello!' }]
      },
      {
        headers,
        timeout: 5000
      }
    );
    console.log('Success:', response.data.choices[0].message.content);
  } catch (err) {
    console.error('Full Error:', {
      status: err.response?.status,
      headers: err.response?.headers,
      data: err.response?.data,
      config: {
        url: err.config?.url,
        headers: err.config?.headers
      }
    });
  }
}

test();