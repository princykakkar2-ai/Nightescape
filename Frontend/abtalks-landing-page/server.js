const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Serve static files from the React frontend build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// -- API ROUTES (placeholder) --
// app.get('/api/challenge-details', (req, res) => {
//   res.json({ message: "API connected" });
// });

// -- FRONTEND ROUTES --
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Only listen on a port if running locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export Express app for Vercel Serverless Functions
module.exports = app;