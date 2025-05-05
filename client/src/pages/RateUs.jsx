import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 48px 0 48px', boxSizing: 'border-box', position: 'relative', zIndex: 100, background: 'transparent' }}>
    <Link to="/" style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 500, color: 'white', letterSpacing: 2, textShadow: '0 2px 8px rgba(0,0,0,0.5)', textDecoration: 'none' }}>Smart Tickets</Link>
    <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.3rem', fontFamily: 'serif' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Home</Link>
      <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>My bookings</Link>
      <Link to="#" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Events</Link>
      <Link to="/cancelled-tickets" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Cancelled tickets</Link>
    </div>
  </div>
);

const RateUs = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <div style={{ minHeight: '100vh', background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=1200&h=800)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      {/* Navbar */}
      <Navbar />
      {/* Card */}
      <div style={{ maxWidth: 700, margin: '60px auto 0 auto', background: 'rgba(0, 0, 0, 0.7)', borderRadius: 16, padding: '40px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'serif', marginBottom: 24, color: 'white' }}>Rate The Events</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>
            {[1,2,3,4,5].map(star => (
              <span
                key={star}
                style={{ cursor: 'pointer', color: (hover || rating) >= star ? '#fff' : '#bbb', fontSize: '2.5rem', transition: 'color 0.2s' }}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <div style={{ fontSize: '1.5rem', fontFamily: 'serif', marginBottom: 4, color: 'white' }}>Concert Night</div>
          <div style={{ fontSize: '1.2rem', color: '#eee', fontFamily: 'serif' }}>May 12 &nbsp; 7:00 AM</div>
        </div>
        <div style={{ fontSize: '1.2rem', marginBottom: 8, fontFamily: 'serif', color: 'white' }}>Feedback</div>
        <textarea
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          style={{ width: '100%', minHeight: 120, background: 'black', color: 'white', border: 'none', borderRadius: 6, fontSize: '1.2rem', padding: 16, marginBottom: 24, fontFamily: 'serif', resize: 'vertical' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ background: 'white', color: 'black', fontSize: '1.3rem', borderRadius: 8, padding: '8px 48px', border: 'none', fontWeight: 500, fontFamily: 'serif', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateUs; 