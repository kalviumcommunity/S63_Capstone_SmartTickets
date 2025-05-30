# SmartTickets - Event Booking Platform

SmartTickets is a full-stack event booking platform that allows users to create, manage, and book tickets for various events. The platform includes features for event management, ticket booking, user authentication, and file uploads.

## Features

- 🔐 User Authentication (Register, Login, Profile Management)
- 🎫 Event Management (Create, Read, Update, Delete)
- 📅 Booking System (Book Tickets, View Bookings, Cancel Bookings)
- 📤 File Upload (Single and Multiple File Uploads)
- 🔒 Role-based Access Control
- 📱 Responsive Design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer (File Upload)

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

## Project Structure

```
SmartTickets/
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
└── bruno/
    └── SmartTickets/
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/SmartTickets.git
cd SmartTickets
```

2. Install Backend Dependencies
```bash
cd Backend
npm install
```

3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

4. Set up Environment Variables
Create a `.env` file in the Backend directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5050
```

### Running the Application

1. Start the Backend Server
```bash
cd Backend
npm run dev
```

2. Start the Frontend Development Server
```bash
cd client
npm run dev
```

## API Documentation

The API documentation is available in the `bruno` directory, which contains Bruno API templates for testing all endpoints. To use the API documentation:

1. Install Bruno from [brunoapp.com](https://www.brunoapp.com)
2. Import the `SmartTickets` collection from the `bruno` directory
3. Set up environment variables in Bruno:
   - `token`: JWT authentication token
   - `eventId`: Event ID for testing
   - `bookingId`: Booking ID for testing

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

#### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `GET /api/events/:id` - Get event by ID

#### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking
- `DELETE /api/bookings/:id` - Cancel booking

#### File Upload
- `POST /api/upload` - Upload single file
- `POST /api/upload/multiple` - Upload multiple files

## Testing

### API Testing with Bruno
The project includes Bruno API templates for testing all endpoints. See the `bruno` directory for detailed testing documentation.

### Testing Flow
1. Register a new user
2. Login to get authentication token
3. Use the token to test protected endpoints
4. Test event creation and management
5. Test booking functionality
6. Test file uploads

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/SmartTickets 