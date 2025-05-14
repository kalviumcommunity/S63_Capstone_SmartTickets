import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const bookings = [
  { event: 'Tabla Concert', date: '2024-06-10', venue: 'City Hall', amount: '₹1200', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200' },
  { event: 'Sid the Science Kid', date: '2024-07-01', venue: 'Kids Arena', amount: '₹800', img: 'https://static.tvmaze.com/uploads/images/original_untouched/4/11341.jpg' },
  { event: 'Rock Night', date: '2024-08-15', venue: 'Stadium', amount: '₹1500', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200' },
  { event: 'Jazz Evening', date: '2024-09-05', venue: 'Jazz Club', amount: '₹1000', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=200' },
  { event: 'Comedy Fest', date: '2024-10-12', venue: 'Comedy Hall', amount: '₹900', img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200' },
  { event: 'Your Event', date: '2024-12-01', venue: 'Your Venue', amount: '₹999', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=200' },
];

const MyBookings = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'rgba(40,30,60,0.85)', padding: '32px', fontFamily: 'serif', position: 'relative' }}>
      <Navbar />
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem', margin: '32px 0 40px 0' }}>My Bookings</h1>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {bookings.map((b, i) => (
          <div key={i} onClick={() => navigate('/booking-info', { state: { booking: b } })} style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.7)', borderRadius: 16, marginBottom: 32, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', minWidth: 900, cursor: 'pointer', transition: 'box-shadow 0.2s', border: '2px solid transparent' }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(60,60,120,0.18)'}
            onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'}
          >
            <div style={{ width: 180, height: 120, background: '#b3b3b3', borderRadius: 8, marginRight: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#fff', overflow: 'hidden' }}>
              {b.img
                ? <img src={b.img} alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : 'IMG'}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 600, marginBottom: 10 }}>{b.event}</div>
              <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{b.date}</div>
              <div style={{ fontSize: '1.5rem' }}>{b.venue}</div>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 600, marginLeft: 24 }}>{b.amount ? `Amount Paid: ${b.amount}` : 'Amount Paid'}</div>
          </div>
        ))}
        <div style={{ color: 'white', fontSize: '1.3rem', margin: '32px 0 24px 8px' }}>No. of bookings: {bookings.length}</div>
      </div>
      {/* Fixed buttons in corners */}
      <button onClick={() => navigate('/rate-us')} style={{ position: 'fixed', left: 40, bottom: 40, background: 'black', color: 'white', fontSize: '2rem', borderRadius: 16, padding: '12px 40px', border: 'none', marginTop: 8, zIndex: 100 }}>Rate us</button>
      <button onClick={() => navigate('/cancel-booking', { state: { bookings } })} style={{ position: 'fixed', right: 40, bottom: 40, background: 'black', color: 'white', fontSize: '2rem', borderRadius: 16, padding: '12px 40px', border: 'none', marginTop: 8, zIndex: 100 }}>Cancel booking</button>
      <Footer />
    </div>
  );
};

export default MyBookings; 