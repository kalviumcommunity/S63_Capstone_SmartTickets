import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa';

const ACCENT = '#2563eb';
const GRADIENT = 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)';
const CARD_SHADOW = '0 4px 16px rgba(37,99,235,0.08)';

const MoreInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  // Mock event details (can be replaced with real data)
  const eventDetails = {
    price: 49.99,
    duration: '2 hours',
    ageRestriction: 'All ages',
    amenities: ['Free Parking', 'Wheelchair Access', 'Food & Drinks Available']
  };

  if (!event) {
    return (
      <div style={{ minHeight: '100vh', background: GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: ACCENT, fontSize: 24, fontWeight: 600 }}>No event selected. <span style={{ color: '#333' }}>Go back and choose an event.</span></div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, position: 'relative' }}>
      <Navbar />
      <div style={{
        background: 'rgba(255,255,255,0.97)',
        borderRadius: 24,
        boxShadow: CARD_SHADOW,
        padding: 48,
        maxWidth: 700,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 80
      }}>
        {/* Event Details Card */}
        <img src={event.img} alt={event.name} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 16, marginBottom: 18, boxShadow: '0 2px 8px #2563eb22' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <span style={{ background: ACCENT, color: 'black', fontWeight: 600, borderRadius: 8, padding: '4px 14px', fontSize: 13, letterSpacing: 0.5, boxShadow: '0 1px 4px #2563eb22' }}>{event.tag || 'Event'}</span>
          {event.category && <span style={{ color: ACCENT, fontWeight: 500, fontSize: 13 }}>{event.category}</span>}
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: ACCENT, marginBottom: 2 }}>{event.name}</h1>
        <div style={{ color: '#374151', fontSize: 16, marginBottom: 2 }}>Date: <b>{event.date}</b></div>
        <div style={{ color: '#374151', fontSize: 16, marginBottom: 2 }}>Time: <b>{event.time}</b></div>
        <div style={{ color: '#374151', fontSize: 16, marginBottom: 2 }}>Location: <b>{event.location}</b></div>
        {event.description && <div style={{ color: '#64748b', fontSize: 15, marginTop: 4 }}>{event.description}</div>}

        {/* Event Highlights */}
        <div style={{ 
          background: 'white', 
          borderRadius: 16, 
          padding: 20, 
          margin: '32px 0 24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ color: ACCENT, fontSize: 18, marginBottom: 16 }}>Event Highlights</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaClock style={{ color: ACCENT }} />
              <span>Duration: {eventDetails.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaUsers style={{ color: ACCENT }} />
              <span>Age: {eventDetails.ageRestriction}</span>
            </div>
            {eventDetails.amenities.map((amenity, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FaCheckCircle style={{ color: ACCENT }} />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Now Button */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <button
            onClick={() => navigate('/book-now', { state: { event } })}
            style={{
              background: ACCENT,
              color: 'white',
              border: 'none',
              borderRadius: 12,
              padding: '16px 48px',
              fontWeight: 700,
              fontSize: 20,
              cursor: 'pointer',
              boxShadow: '0 2px 8px #2563eb22',
              letterSpacing: 1,
              transition: 'background 0.2s',
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo; 