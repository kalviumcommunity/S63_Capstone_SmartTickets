import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 48px 0 48px', boxSizing: 'border-box', position: 'relative', zIndex: 100, background: 'transparent' }}>
    <Link to="/" style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 500, color: 'white', letterSpacing: 2, textShadow: '0 2px 8px rgba(0,0,0,0.5)', textDecoration: 'none' }}>Smart Tickets</Link>
    <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.3rem', fontFamily: 'serif' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Home</Link>
      <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>My bookings</Link>
      <Link to="#" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Events</Link>
      <Link to="/cancelled-tickets" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Cancelled tickets</Link>
      <Link to="/rate-us" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Rate Us</Link>
    </div>
  </div>
);

const CancelBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookings = location.state?.bookings || [];
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#f6f7fb', fontFamily: 'serif' }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 60 }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, margin: '32px 0 24px 0', color: '#22223b' }}>Select a Booking to Cancel</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {bookings.map((b, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: selected === i ? '#fee2e2' : '#fff',
                borderRadius: 14,
                padding: 20,
                boxShadow: '0 2px 12px rgba(30,41,59,0.07)',
                border: selected === i ? '2px solid #e11d48' : '1px solid #e5e7eb',
                cursor: 'pointer',
                minHeight: 90,
                transition: 'all 0.18s',
              }}
            >
              <img src={b.img} alt={b.event} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 10, marginRight: 18, border: '2px solid #e5e7eb' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#22223b', marginBottom: 2 }}>{b.event}</div>
                <div style={{ color: '#64748b', fontSize: '1rem', marginBottom: 1 }}>{b.date}</div>
                <div style={{ color: '#a1a1aa', fontSize: '0.98rem' }}>{b.venue}</div>
              </div>
              <div style={{ fontWeight: 600, color: '#22223b', fontSize: '1.1rem' }}>{b.amount}</div>
            </div>
          ))}
        </div>
        <button
          disabled={selected === null}
          onClick={() => selected !== null && navigate('/cancellation-confirmed', { state: { cancelled: bookings[selected] } })}
          style={{
            margin: '40px auto 0 auto',
            display: 'block',
            background: selected === null ? '#e5e7eb' : '#e11d48',
            color: selected === null ? '#a1a1aa' : 'white',
            fontSize: '1.3rem',
            borderRadius: 10,
            padding: '12px 48px',
            border: 'none',
            fontWeight: 600,
            cursor: selected === null ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 8px rgba(30,41,59,0.07)',
            transition: 'all 0.18s',
          }}
        >
          Confirm Cancellation
        </button>
      </div>
    </div>
  );
};

export default CancelBooking; 