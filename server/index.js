import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables FIRST
dotenv.config({ path: './.env' }); // Explicit path

const app = express();
const PORT = process.env.PORT || 5000;

// Debug: Verify environment loading
console.log('Environment:', {
  PORT: process.env.PORT,
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY ? '*****' : 'MISSING!'
});

app.use(cors({
  origin: process.env.NODE_ENV === 'development' 
    ? '*' 
    : 'https://your-production-domain.com' // Tighten for production
}));

app.use(express.json());

app.post('/chat', async (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: req.body.message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.FRONTEND_URL || 'http://localhost:3000',
          'X-Title': process.env.APP_NAME || 'Portfolio-Chatbot'
        },
        timeout: 10000 // 10-second timeout
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    console.error('API Error:', {
      status: err.response?.status,
      data: err.response?.data,
      message: err.message
    });
    
    res.status(err.response?.status || 500).json({
      error: err.response?.data?.error?.message || 'AI service unavailable'
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});