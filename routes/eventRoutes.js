const express = require('express');
const Event = require('../models/Event'); // Make sure the path is correct

const router = express.Router();

// GET all events
router.get('/events', async (req, res) => {
  try {
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

module.exports = router;
// POST endpoint for creating a new event
router.post('/events', async (req, res) => {
    const { name, date, location, description } = req.body;
  
    try {
      const newEvent = new Event({ name, date, location, description });
      await newEvent.save();
      res.status(201).json({ message: 'Event created successfully', newEvent });
    } catch (err) {
      res.status(500).json({ message: 'Error creating event', error: err });
    }
  });
  // Update an event
router.put('/events/:id', async (req, res) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedEvent);
    } catch (err) {
      res.status(500).json({ message: 'Error updating event', error: err });
    }
  });
  