const express = require('express');
const { authMiddelware } = require('./authMiddelware');

const app = express();

app.get('/admin', authMiddelware, (req, res) => {
  res.json({ mensae: 'ok' });
});

module.exports = app;
