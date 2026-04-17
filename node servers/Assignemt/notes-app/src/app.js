const express = require('express');
const noteRoutes = require('./routes/note.routes');

const app = express();

app.use(express.json());
app.use('/api/notes', noteRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;
