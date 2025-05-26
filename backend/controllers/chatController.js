const Chat = require('../models/Chat');
const fetch = require('node-fetch');

exports.sendChat = async (req, res) => {
  const { message } = req.body;

  const aiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mistralai/mistral-7b-instruct',
      messages: [{ role: 'user', content: message }],
    }),
  });

  const data = await aiRes.json();
  const reply = data?.choices?.[0]?.message?.content || 'No response';

  const chat = await Chat.create({
    user: req.user._id,
    messages: [
      { role: 'user', content: message },
      { role: 'assistant', content: reply },
    ],
  });

  res.json({ reply });
};

exports.getHistory = async (req, res) => {
  const chats = await Chat.find({ user: req.user._id });
  res.json(chats);
};
