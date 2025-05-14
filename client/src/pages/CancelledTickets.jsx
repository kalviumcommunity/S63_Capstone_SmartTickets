import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaRegTimesCircle } from 'react-icons/fa';

const ACCENT = '#e11d48';
const ACCENT2 = '#ff758c';
const CARD_BG = '#fff';
const CARD_SHADOW = '0 2px 12px rgba(30,41,59,0.07)';
const STATUS_BG = '#fee2e2';
const STATUS_COLOR = '#b91c1c';
const STATUS_ICON = <FaRegTimesCircle style={{ marginRight: 8, fontSize: 18, verticalAlign: 'middle' }} />;

const Navbar = ({ profileOpen, setProfileOpen }) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 48px 0 48px', boxSizing: 'border-box', position: 'relative', zIndex: 100, background: '#111', minHeight: 70 }}>
    <Link to="/" style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 600, color: 'white', letterSpacing: 2, textShadow: '0 2px 8px #0008', textDecoration: 'none' }}>Smart Tickets</Link>
    <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.3rem', fontFamily: 'serif', alignItems: 'center', position: 'relative' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none' }}>My bookings</Link>
      <Link to="#" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
      <Link to="/cancelled-tickets" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 700 }}>Cancelled tickets</Link>
      <Link to="/rate-us" style={{ color: 'white', textDecoration: 'none' }}>Rate Us</Link>
      <div style={{ position: 'relative' }}>
        <FaUser style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} onClick={() => setProfileOpen(!profileOpen)} />
        {profileOpen && (
          <div style={{ position: 'absolute', right: 0, top: '2.5rem', background: '#181A2A', color: 'white', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', minWidth: 220, zIndex: 200, padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>John Doe</div>
            <div style={{ fontSize: '0.95rem', marginBottom: 8 }}>johndoe@email.com</div>
            <div style={{ fontSize: '0.95rem', marginBottom: 8 }}>Member since: Jan 2024</div>
            <div style={{ fontSize: '0.95rem', marginBottom: 16 }}>Bookings: 12</div>
            <button style={{ width: '100%', background: '#ef4444', color: 'white', border: 'none', borderRadius: 6, padding: '10px 0', fontWeight: 600, cursor: 'pointer' }}>Logout</button>
          </div>
        )}
      </div>
    </div>
  </div>
);

const cancelledBookings = [
  {
    event: 'Theater Night',
    date: '2024-06-01',
    venue: 'Grand Hall',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200',
  },
  {
    event: 'Football Show',
    date: '2024-07-10',
    venue: 'Stadium',
    img: 'https://static.toiimg.com/thumb/msid-100014504,width-400,resizemode-4/100014504.jpg',
  },
  {
    event: 'Comedy Gala',
    date: '2024-08-20',
    venue: 'Red Curtain Club',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=200',
  },
  {
    event: 'Music Festival',
    date: '2024-09-15',
    venue: 'Open Grounds',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200',
  },
  {
    event: 'Art Expo',
    date: '2024-10-05',
    venue: 'City Gallery',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=200',
  },
  {
    event: 'Science Fair',
    date: '2024-11-12',
    venue: 'Expo Center',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200',
  },
  {
    event: 'Dance Show',
    date: '2024-12-01',
    venue: 'Dance Hall',
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=facearea&w=400&h=200',
  },
];

const Footer = () => (
  <footer style={{ background: '#111', color: 'white', padding: '32px 0 16px 0', marginTop: 64, textAlign: 'center', fontSize: 16, letterSpacing: 1 }}>
    <div style={{ marginBottom: 8 }}>
      &copy; {new Date().getFullYear()} Smart Tickets. All rights reserved.
    </div>
    <div>
      <Link to="/about" style={{ color: ACCENT, textDecoration: 'underline', marginRight: 16 }}>About</Link>
      <Link to="/contact" style={{ color: ACCENT, textDecoration: 'underline', marginRight: 16 }}>Contact</Link>
      <Link to="/rate-us" style={{ color: ACCENT, textDecoration: 'underline' }}>Rate Us</Link>
    </div>
  </footer>
);

const CancelledTickets = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div style={{ minHeight: '100vh', background: '#f6f7fb', fontFamily: 'serif', position: 'relative' }}>
      <Navbar profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
      <div style={{ paddingTop: 48, maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ color: '#22223b', textAlign: 'center', fontSize: '2.3rem', margin: '48px 0 16px 0', fontWeight: 700, letterSpacing: 1, position: 'relative' }}>
          Cancelled bookings
          <div style={{
            width: 60,
            height: 3,
            background: ACCENT,
            borderRadius: 2,
            margin: '12px auto 0 auto'
          }} />
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {cancelledBookings.map((b, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: CARD_BG,
                borderRadius: 14,
                marginBottom: 0,
                padding: 20,
                boxShadow: CARD_SHADOW,
                minWidth: 320,
                gap: 28,
                borderLeft: `4px solid ${ACCENT}`,
                border: '1px solid #e5e7eb',
                transition: 'box-shadow 0.18s',
                position: 'relative',
                minHeight: 90,
                cursor: 'default',
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(30,41,59,0.10)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = CARD_SHADOW;
              }}
            >
              <img
                src={b.img}
                alt={b.event}
                style={{
                  width: 60,
                  height: 60,
                  objectFit: 'cover',
                  borderRadius: 10,
                  marginRight: 18,
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 1px 4px #e5e7eb55',
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#22223b', marginBottom: 2 }}>{b.event}</div>
                <div style={{ color: '#64748b', fontSize: '1rem', marginBottom: 1 }}>{b.date}</div>
                <div style={{ color: '#a1a1aa', fontSize: '0.98rem' }}>{b.venue}</div>
              </div>
              <div style={{
                background: STATUS_BG,
                color: STATUS_COLOR,
                fontWeight: 600,
                borderRadius: 999,
                padding: '7px 20px',
                fontSize: '1rem',
                marginLeft: 12,
                border: '1px solid #fecaca',
                letterSpacing: 0.2,
                minWidth: 120,
                textAlign: 'center',
              }}>
                Status: Cancelled
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CancelledTickets; 