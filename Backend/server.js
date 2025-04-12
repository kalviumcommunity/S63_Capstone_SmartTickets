// Import necessary modules
const express = require('express');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Set up a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
