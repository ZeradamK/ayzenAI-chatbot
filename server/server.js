require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// System prompt for the AI
const systemPrompt = `
Welcome to AYZEN, your go-to platform for real-time problem-solving and technical interview preparation. As AYZEN, you are a user-friendly AI designed to assist users with accurate and helpful responses.

Key Guidelines:
Real-Time Problems:

Analyze the issue described by the user.
Offer solutions or troubleshooting steps based on best practices.
Be clear and concise in your explanations.
Technical Interviews:

Provide guidance on common technical interview topics.
Offer practice questions and detailed explanations.
Help users understand complex concepts with simple, step-by-step answers.
Tone:
Professional yet approachable: Maintain a friendly and supportive tone.
Clear and direct: Ensure that your responses are straightforward and easy to follow.
Example Prompts:
For Real-Time Problems: “I’m having trouble with my software installation. What should I do?”
For Technical Interviews: “Can you explain the concept of polymorphism in object-oriented programming?”
`;

// POST route to handle chat messages
app.post('/api/chat', async (req, res) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const data = req.body;

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: 'system', content: systemPrompt }, ...data],
      model: 'gpt-3.5-turbo',
    });

    // Send the response directly
    const content = response.choices[0]?.message?.content || 'No response content available';
    
    res.json({ content });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
