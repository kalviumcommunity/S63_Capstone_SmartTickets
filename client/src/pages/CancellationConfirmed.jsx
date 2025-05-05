import React from 'react';
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

const CancellationConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cancelled = location.state?.cancelled;

  if (!cancelled) {
    return (
      <div style={{ minHeight: '100vh', background: '#f6f7fb', fontFamily: 'serif' }}>
        <Navbar />
        <div style={{ maxWidth: 600, margin: '0 auto', paddingTop: 80, textAlign: 'center' }}>
          <h1 style={{ color: '#e11d48', fontSize: '2.2rem', fontWeight: 700 }}>No booking selected for cancellation.</h1>
          <button onClick={() => navigate('/my-bookings')} style={{ marginTop: 32, background: '#e11d48', color: 'white', fontSize: '1.1rem', borderRadius: 8, padding: '10px 36px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Back to My Bookings</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f6f7fb', fontFamily: 'serif' }}>
      <Navbar />
      <div style={{ maxWidth: 600, margin: '0 auto', paddingTop: 80 }}>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,41,59,0.07)', padding: 36, textAlign: 'center', border: '1px solid #e5e7eb' }}>
          <h1 style={{ color: '#e11d48', fontSize: '2.2rem', fontWeight: 700, marginBottom: 18 }}>Cancellation Confirmed</h1>
          <p style={{ color: '#22223b', fontSize: '1.2rem', marginBottom: 32 }}>Your booking has been successfully cancelled. Details below:</p>
          <img src={cancelled.img} alt={cancelled.event} style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 10, marginBottom: 18, border: '2px solid #e5e7eb' }} />
          <div style={{ fontWeight: 600, fontSize: '1.3rem', color: '#22223b', marginBottom: 6 }}>{cancelled.event}</div>
          <div style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: 2 }}>{cancelled.date}</div>
          <div style={{ color: '#a1a1aa', fontSize: '1.05rem', marginBottom: 8 }}>{cancelled.venue}</div>
          <div style={{ color: '#e11d48', fontWeight: 600, fontSize: '1.1rem', marginBottom: 18 }}>{cancelled.amount ? `Amount Paid: ${cancelled.amount}` : ''}</div>
          <div style={{ background: '#fee2e2', color: '#b91c1c', fontWeight: 600, borderRadius: 999, padding: '7px 20px', fontSize: '1rem', border: '1px solid #fecaca', letterSpacing: 0.2, minWidth: 120, textAlign: 'center', margin: '0 auto 18px auto' }}>
            Status: Cancelled
          </div>
          <button onClick={() => navigate('/my-bookings')} style={{ marginTop: 24, background: '#e11d48', color: 'white', fontSize: '1.1rem', borderRadius: 8, padding: '10px 36px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Back to My Bookings</button>
        </div>
      </div>
    </div>
  );
};

export default CancellationConfirmed; 