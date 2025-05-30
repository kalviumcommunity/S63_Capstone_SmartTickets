import express from 'express';
import Event from '../models/Event.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error: error.message });
  }
});

// GET event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event', error: error.message });
  }
});

// POST endpoint for creating a new event
router.post('/', protect, authorize('admin'), async (req, res) => {
  try {
    const { name, date, location, description, price, capacity } = req.body;

    // Validate required fields
    if (!name || !date || !location || !description || !price || !capacity) {
      return res.status(400).json({ 
        message: 'Please provide all required fields: name, date, location, description, price, capacity' 
      });
    }

    const newEvent = new Event({
      name,
      date,
      location,
      description,
      price,
      capacity,
      organizer: req.user.id
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error: error.message });
  }
});

// PUT endpoint for updating an event
router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const { name, date, location, description, price, capacity } = req.body;

    // Find the event
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the user is the organizer
    if (event.organizer.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this event' });
    }

    // Update only the fields that are provided
    const updateFields = {};
    if (name) updateFields.name = name;
    if (date) updateFields.date = date;
    if (location) updateFields.location = location;
    if (description) updateFields.description = description;
    if (price) updateFields.price = price;
    if (capacity) updateFields.capacity = capacity;

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    res.json({
      message: 'Event updated successfully',
      event: updatedEvent
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
});

// DELETE endpoint for deleting an event
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the user is the organizer
    if (event.organizer.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this event' });
    }

    await event.deleteOne();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
});

export default router;
