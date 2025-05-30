import mongoose from 'mongoose';

 feature/database-relationships
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    date: {
      type: Date,
      required: [true, 'Please add a date'],
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },
    capacity: {
      type: Number,
      required: [true, 'Please add capacity'],
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bookings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }],
    imageUrl: {
      type: String,
      default: 'default-event.jpg'
    }
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;

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
main
