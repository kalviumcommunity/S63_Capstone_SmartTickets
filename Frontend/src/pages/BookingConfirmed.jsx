import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaTicketAlt, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const ACCENT = '#2563eb';
const CARD_SHADOW = '0 4px 16px rgba(37,99,235,0.08)';
const GRADIENT = 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #bfdbfe 100%)';

const BookingConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event, form } = location.state || {};
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!event || !form) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ color: ACCENT, fontSize: 24, fontWeight: 600 }}>No booking data. <span style={{ color: '#333' }}>Go back and book an event.</span></div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: GRADIENT, position: 'relative', paddingBottom: 80 }}>
      <Navbar />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <div style={{
          background: 'white',
          borderRadius: 32,
          boxShadow: CARD_SHADOW,
          padding: 48,
          maxWidth: 480,
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          border: '1.5px solid #e0e7ef',
        }}>
          <button onClick={() => navigate('/')} style={{ position: 'absolute', left: 24, top: 24, background: 'none', border: 'none', color: ACCENT, fontSize: 22, cursor: 'pointer' }}><FaArrowLeft /></button>
          <h2 style={{ textAlign: 'center', color: ACCENT, fontWeight: 700, fontSize: '2rem', marginBottom: 18, letterSpacing: 1 }}>Booking Confirmed!</h2>
          <div style={{ width: '100px', height: '4px', background: ACCENT, margin: '0 auto 24px', borderRadius: '2px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <FaCheckCircle style={{ fontSize: 48, color: ACCENT, marginBottom: 16 }} />
            <div style={{ color: '#374151', fontSize: 16, marginBottom: 8 }}>Your tickets have been booked successfully!</div>
            <div style={{ color: ACCENT, fontWeight: 600, fontSize: 18 }}>Booking ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</div>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <FaTicketAlt style={{ fontSize: 20, color: ACCENT }} />
              <div style={{ fontSize: 18, fontWeight: 600, color: '#374151' }}>{event.name}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <FaCalendarAlt style={{ fontSize: 16, color: ACCENT }} />
              <div style={{ color: '#374151' }}>{event.date}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <FaClock style={{ fontSize: 16, color: ACCENT }} />
              <div style={{ color: '#374151' }}>{event.time}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaMapMarkerAlt style={{ fontSize: 16, color: ACCENT }} />
              <div style={{ color: '#374151' }}>{event.location}</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: '#374151', fontSize: 14, marginBottom: 24 }}>
            A confirmation email has been sent to <b>{form.email}</b>
          </div>
          <button onClick={() => navigate('/my-bookings')} style={{ background: ACCENT, color: 'white', border: 'none', borderRadius: 10, padding: '14px 0', fontWeight: 700, fontSize: 18, width: '100%', cursor: 'pointer', boxShadow: '0 2px 8px rgba(37,99,235,0.08)', transition: 'background 0.2s' }}>
            View My Bookings
          </button>
          {showConfetti && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: ACCENT, animation: 'progress 2s linear' }}>
              <style>
                {`
                  @keyframes progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                  }
                `}
              </style>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed; 