const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('../routes/eventRoutes');  // Adjust path to routes
const bookingRoutes = require('../routes/bookingRoutes');  // Adjust path to routes



const app = express();

// Middleware
app.use(express.json());

// Use Routes
app.use('/api', eventRoutes);
app.use('/api', bookingRoutes);

// Connect to MongoDB
mongoose.connect('your-mongo-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
