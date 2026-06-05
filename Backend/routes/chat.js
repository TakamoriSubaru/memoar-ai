'use strict';

const express = require('express');
const router  = express.Router();
const Groq    = require('groq-sdk');
const { getSystemPrompt } = require('../ai/aiPersonality');

// Groq client — key comes from .env, never from the frontend
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * POST /api/chat
 *
 * Body:
 *   message  {string}  — the new user message (required)
 *   persona  {string}  — persona name, e.g. "Teman Hangat"
 *   history  {Array}   — previous messages [{role, content}, ...]
 *
 * Response:
 *   200  { reply: string }
 *   400  { error: string }
 *   500  { error: string }
 */
router.post('/', async (req, res) => {
  const { message, persona, history } = req.body;

  // Validate input
  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ error: 'Field "message" harus diisi.' });
  }

  const systemPrompt = getSystemPrompt(persona || 'Teman Hangat');

  // Build the message list Groq expects
  const pastMessages = Array.isArray(history)
    ? history.filter(m => m.role && m.content).slice(-20) // limit context window
    : [];

  const messages = [
    ...pastMessages,
    { role: 'user', content: message.trim() }
  ];

  try {
    const completion = await groq.chat.completions.create({
      model:       process.env.GROQ_MODEL || 'llama3-8b-8192',
      messages:    [{ role: 'system', content: systemPrompt }, ...messages],
      max_tokens:  512,
      temperature: 0.8
    });

    const reply = completion.choices?.[0]?.message?.content;
    if (!reply) throw new Error('Empty response from Groq');

    return res.json({ reply });

  } catch (err) {
    console.error('[/api/chat error]', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan pada server. Coba lagi.' });
  }
});

module.exports = router;