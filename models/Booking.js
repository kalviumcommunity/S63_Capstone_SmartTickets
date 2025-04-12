const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: String, // Replace with ObjectId and ref: 'User' if you have a User model and login system
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  numberOfTickets: {
    type: Number,
    required: true,
    min: 1,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled'],
    default: 'confirmed',
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
