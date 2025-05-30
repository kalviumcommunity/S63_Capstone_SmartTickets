import express from 'express';
import Booking from '../models/Booking.js';
import Event from '../models/Event.js';
import User from '../models/User.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Get all bookings for a user
router.get('/', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('event')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get a single booking
router.get('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user.id
    }).populate('event');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create a new booking
router.post('/', protect, async (req, res) => {
  try {
    const { eventId, seats } = req.body;

    if (!eventId || !seats) {
      return res.status(400).json({ message: 'Missing required fields: eventId, seats' });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if there are enough seats available
    const totalBookedSeats = await Booking.aggregate([
      { $match: { event: event._id } },
      { $group: { _id: null, total: { $sum: '$seats' } } }
    ]);

    const bookedSeats = totalBookedSeats[0]?.total || 0;
    if (bookedSeats + seats > event.capacity) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    const booking = new Booking({
      user: req.user.id,
      event: eventId,
      seats
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a booking
router.put('/:id', protect, async (req, res) => {
  try {
    const { seats } = req.body;

    if (!seats) {
      return res.status(400).json({ message: 'Please provide the number of seats' });
    }

    // Find the booking
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user.id
    }).populate('event');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if the event is still available
    const event = await Event.findById(booking.event._id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Calculate the difference in seats
    const seatDifference = seats - booking.seats;

    // Check if there are enough seats available for the update
    const totalBookedSeats = await Booking.aggregate([
      { $match: { event: event._id } },
      { $group: { _id: null, total: { $sum: '$seats' } } }
    ]);

    const bookedSeats = totalBookedSeats[0]?.total || 0;
    if (bookedSeats + seatDifference > event.capacity) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    // Update the booking
    booking.seats = seats;
    await booking.save();

    res.json({
      message: 'Booking updated successfully',
      booking
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Cancel a booking
router.delete('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await booking.deleteOne();
    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
