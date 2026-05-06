const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// The "Health Check" route for your pinger
app.get('/health', (req, res) => {
  res.status(200).send('OpenClaw is active');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Your OpenClaw logic goes here