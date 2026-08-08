
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Serve static files from the React frontend build directory
// Note: We'll create the 'client/build' directory when we build the React app.
app.use(express.static(path.join(__dirname, 'client/build')));

// -- API ROUTES (placeholder) --
// In a full application, you would add API routes here to serve data.
// app.get('/api/challenge-details', (req, res) => {
//   // fetch and send challenge data
// });

// -- FRONTEND ROUTES --
// Anything that doesn't match an API route above should be handled by React Router.
// This is essential for single-page applications.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});