'use strict';

require('dotenv').config();

const express = require('express');
const path    = require('path');          // FIX 1: was require('express') — wrong module
const app     = express();
const PORT    = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));

// CORS — only needed in development (e.g. a separate frontend dev server)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });
}

// ── API routes (registered BEFORE static serving) ────────────────────────────
const chatRoute = require('./routes/chat');
app.use('/api/chat', chatRoute);

// ── Static file serving ───────────────────────────────────────────────────────
// FIX 2: was `const { static: serveStatic } = require('express')` — duplicate
//         require and destructure after app is already created; just use
//         express.static directly.
// FIX 3: path.join now works because `path` is correctly imported above.
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Memoar API is running' });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('[unhandled error]', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Memoar backend listening on http://localhost:${PORT}`);
  console.log(`   NODE_ENV : ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Groq key : ${process.env.GROQ_API_KEY ? '✓ set' : '✗ MISSING — set GROQ_API_KEY in .env'}`);
});
