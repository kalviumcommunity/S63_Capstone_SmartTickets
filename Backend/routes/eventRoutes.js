const express = require('express');
const Event = require('../models/Event'); // Make sure the path is correct
const router = express.Router();

// Sample data
const sampleEvents = [
  {
    name: 'Concert A',
    date: '2025-05-10',
    location: 'Venue A',
    description: 'An exciting concert with live performances.',
  },
  {
    name: 'Concert B',
    date: '2025-05-15',
    location: 'Venue B',
    description: 'A thrilling experience with popular bands.',
  },
  {
    name: 'Conference 2025',
    date: '2025-06-01',
    location: 'Conference Center',
    description: 'A global conference on technology and innovation.',
  },
];

// GET all events
router.get('/events', async (req, res) => {
  try {
    // Inserting sample data for testing
    await Event.insertMany(sampleEvents); // Insert sample events into the database

    // Fetching events from the database
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
});

// GET event by ID
router.get('/event/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event', error });
  }
});

// POST endpoint for creating a new event
// router.post('/events', async (req, res) => {
//   const { name, date, location, description } = req.body;

//    try {
//      const newEvent = new Event({ name, date, location, description });
//      await newEvent.save();
//      res.status(201).json({ message: 'Event created successfully', newEvent });
//    } catch (err) {
//      res.status(500).json({ message: 'Error creating event', error: err });
//    }
//  });

 module.exports = router;
