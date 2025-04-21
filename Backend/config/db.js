// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Check if MONGO_URI is loaded
    console.log('MongoDB URI:', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

module.exports = connectDB;
