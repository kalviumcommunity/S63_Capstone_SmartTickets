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
// POST endpoint for creating a new booking
router.post('/bookings', async (req, res) => {
    const { userId, eventId, date, numberOfTickets } = req.body;
  
    try {
      const newBooking = new Booking({
        userId,
        eventId,
        date,
        numberOfTickets
      });
  
      await newBooking.save();
      res.status(201).json({ message: 'Booking created successfully', newBooking });
    } catch (err) {
      res.status(500).json({ message: 'Error creating booking', error: err });
    }
  });
  // Update a booking
router.put('/bookings/:id', async (req, res) => {
    try {
      const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedBooking);
    } catch (err) {
      res.status(500).json({ message: 'Error updating booking', error: err });
    }
  });
  