exports.createBooking = (req, res) => {
    res.send('Create booking');
  };
  
  exports.getAllBookings = (req, res) => {
    res.send('Get all bookings');
  };
  
  exports.getBookingById = (req, res) => {
    res.send(`Get booking by ID: ${req.params.id}`);
  };
  
  exports.updateBooking = (req, res) => {
    res.send(`Update booking ID: ${req.params.id}`);
  };
  
  exports.deleteBooking = (req, res) => {
    res.send(`Delete booking ID: ${req.params.id}`);
  };
  