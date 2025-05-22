# SmartTickets API Documentation

This directory contains Bruno API templates for testing the SmartTickets API endpoints.

## Setup Instructions

1. Install Bruno from [brunoapp.com](https://www.brunoapp.com)
2. Open Bruno and import the `SmartTickets` collection
3. Set up environment variables:
   - `token`: Your JWT authentication token (obtained after login)
   - `eventId`: ID of an event (for testing event-specific endpoints)
   - `bookingId`: ID of a booking (for testing booking-specific endpoints)

## Available Endpoints

### Authentication
- Register User
- Login User
- Get Current User

### Events
- Get All Events
- Create Event
- Get Event by ID

### Bookings
- Get User Bookings
- Create Booking
- Cancel Booking

### File Upload
- Upload Single File
- Upload Multiple Files

## Testing Flow

1. First, use the Register endpoint to create a new user
2. Then, use the Login endpoint to get your authentication token
3. Set the token in Bruno's environment variables
4. You can now test all other endpoints that require authentication

## Notes

- All authenticated endpoints require a valid JWT token in the Authorization header
- File upload endpoints expect multipart/form-data
- The API runs on port 5050 by default 