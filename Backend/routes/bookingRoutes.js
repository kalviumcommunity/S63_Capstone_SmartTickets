const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Event = require('../models/Event');
const User = require('../models/User');
const mongoose = require('mongoose');

// Sample data
const sampleUsers = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

const sampleEvents = [
  { name: 'Concert A', date: '2025-05-10', location: 'Venue A' },
  { name: 'Concert B', date: '2025-05-15', location: 'Venue B' },
];

const sampleBookings = [
  { user: 'user1', event: 'event1', seats: 2 },
  { user: 'user2', event: 'event2', seats: 4 },
];

// Get all bookings (admin) - with sample data
router.get('/', async (req, res) => {
  try {
    // Inserting sample data for testing
    const users = await User.insertMany(sampleUsers);
    const events = await Event.insertMany(sampleEvents);

    // Mapping sample data for bookings
    const bookings = sampleBookings.map((booking, index) => ({
      user: users[index]._id,
      event: events[index]._id,
      seats: booking.seats,
    }));

    // Insert sample bookings into the database
    await Booking.insertMany(bookings);

    // Fetching bookings from the database
    const allBookings = await Booking.find().populate('user').populate('event');
    res.status(200).json(allBookings);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
});

// Get booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user').populate('event');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving booking', error });
  }
});

// Create new booking
router.post('/', async (req, res) => {
  try {
    const { user, event, seats } = req.body;

    if (!user || !event || !seats) {
      return res.status(400).json({ message: 'Missing required fields: user, event, seats' });
    }

    const newBooking = new Booking({ user, event, seats });
    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
});

module.exports = router;
