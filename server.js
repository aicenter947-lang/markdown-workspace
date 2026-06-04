#!/usr/bin/env node

const express = require('express');
const path = require('path');
const app = express();

// Serve static front‑end
app.use(express.static(path.join(__dirname, 'src')));
// Serve markdown files
app.use('/data', express.static(path.join(__dirname, 'data')));

// Fallback for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
