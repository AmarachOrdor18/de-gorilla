const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint — browser calls this, server adds the API key
app.post('/api/claude', async (req, res) => {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY not set. Check your terminal.' });
  }

  try {
    // Forward request to OpenRouter
    const openrouterRes = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'DE Gorilla'
        },
        body: JSON.stringify({
          model: 'openrouter/auto',
          messages: req.body.messages || [],
          max_tokens: 1000,
          temperature: 0.7
        })
      }
    );

    const data = await openrouterRes.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    // OpenRouter returns OpenAI-compatible format
    res.json({ content: [{ type: 'text', text: data.choices?.[0]?.message?.content || '' }] });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n✅  DE Gorilla Prep is running (powered by OpenRouter)!`);
  console.log(`👉  Open this in your browser: http://localhost:${PORT}\n`);
});
