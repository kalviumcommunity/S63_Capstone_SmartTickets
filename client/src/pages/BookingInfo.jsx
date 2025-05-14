import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BookingInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;
  // Generate a fake ticket ID for demo
  const ticketId = booking ? `TKT${booking.date.replace(/-/g, '')}${booking.event.replace(/\s/g, '').slice(0, 4).toUpperCase()}` : '';
  // Demo attendee and time
  const attendee = 'John Doe';
  const eventTime = '7:00 PM';

  if (!booking) {
    return (
      <div style={{ minHeight: '100vh', background: 'rgba(40,30,60,0.85)' }}>
        <Navbar />
        <div style={{ maxWidth: 600, margin: '100px auto', background: 'rgba(255,255,255,0.07)', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.18)', padding: 40, textAlign: 'center', color: 'white' }}>
          <h2 style={{ color: '#f87171', fontWeight: 700, fontSize: 28 }}>No booking data found.</h2>
          <button onClick={() => navigate('/my-bookings')} style={{ marginTop: 24, background: '#6366f1', color: 'white', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 18, cursor: 'pointer' }}>Back to My Bookings</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'rgba(40,30,60,0.85)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: 480, width: '100%', background: 'rgba(255,255,255,0.10)', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.18)', padding: 36, margin: '60px 0', color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button onClick={() => navigate('/my-bookings')} style={{ marginBottom: 24, background: '#6366f1', color: 'white', border: 'none', borderRadius: 8, padding: '8px 22px', fontWeight: 600, fontSize: 16, cursor: 'pointer', alignSelf: 'flex-start' }}>← Back</button>
          <div style={{ width: 160, height: 100, borderRadius: 12, overflow: 'hidden', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px auto' }}>
            {booking.img ? <img src={booking.img} alt={booking.event} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : 'IMG'}
          </div>
          <div style={{ fontWeight: 700, fontSize: 28, color: '#a5b4fc', marginBottom: 2 }}>{booking.event}</div>
          <div style={{ color: '#cbd5e1', fontSize: 18, marginBottom: 18 }}>{booking.venue}</div>
          <div style={{ fontSize: 18, color: 'white', marginBottom: 8 }}><b>Date:</b> {booking.date}</div>
          <div style={{ fontSize: 18, color: 'white', marginBottom: 8 }}><b>Time:</b> {eventTime}</div>
          <div style={{ fontSize: 18, color: 'white', marginBottom: 8 }}><b>Venue:</b> {booking.venue}</div>
          <div style={{ fontSize: 18, color: 'white', marginBottom: 8 }}><b>Attendee:</b> {attendee}</div>
          <div style={{ fontSize: 18, color: 'white', marginBottom: 8 }}><b>Amount Paid:</b> {booking.amount}</div>
          <div style={{ fontSize: 18, color: 'white', marginBottom: 8 }}><b>Ticket ID:</b> {ticketId}</div>
          {/* QR Code Placeholder */}
          <div style={{ margin: '24px 0 16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 100, height: 100, background: 'white', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <span style={{ color: '#6366f1', fontWeight: 700, fontSize: 32 }}>QR</span>
            </div>
            <div style={{ color: '#cbd5e1', fontSize: 14 }}>Show this QR at the event entrance</div>
          </div>
          <button style={{ background: '#22d3ee', color: '#18181b', border: 'none', borderRadius: 8, padding: '10px 32px', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 10, boxShadow: '0 2px 8px #22d3ee33' }} onClick={() => alert('Download feature coming soon!')}>Download Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo; 