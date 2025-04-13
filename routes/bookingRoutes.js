const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// GET all bookings for a user
router.get('/user-bookings/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
});

module.exports = router;
