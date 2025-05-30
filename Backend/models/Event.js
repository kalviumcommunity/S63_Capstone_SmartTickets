import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide event name'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Please provide event date']
  },
  location: {
    type: String,
    required: [true, 'Please provide event location'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide event description'],
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide ticket price'],
    min: [0, 'Price cannot be negative']
  },
  availableTickets: {
    type: Number,
    required: [true, 'Please provide number of available tickets'],
    min: [0, 'Available tickets cannot be negative']
  }
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema); 