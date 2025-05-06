const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  availableTickets: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String, // URL to event banner/poster
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
