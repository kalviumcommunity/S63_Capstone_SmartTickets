import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaInfoCircle, FaTicketAlt, FaChair, FaClock, FaUsers, FaCreditCard, FaLock } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';

const ACCENT = '#2563eb';
const GRADIENT = 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)';
const CARD_SHADOW = '0 4px 16px rgba(37,99,235,0.08)';

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    tickets: 1,
    seats: []
  });

  // Mock seat data
  const availableSeats = [
    { id: 'A1', status: 'available' },
    { id: 'A2', status: 'available' },
    { id: 'A3', status: 'available' },
    { id: 'B1', status: 'available' },
    { id: 'B2', status: 'available' },
    { id: 'B3', status: 'available' },
  ];

  const handleSeatSelect = (seatId) => {
    if (form.seats.length < form.tickets) {
      setForm(prev => ({
        ...prev,
        seats: [...prev.seats, seatId]
      }));
    }
  };

  const handleTicketChange = (e) => {
    const newCount = parseInt(e.target.value);
    setForm(prev => ({
      ...prev,
      tickets: newCount,
      seats: prev.seats.slice(0, newCount)
    }));
  };

  // Mock event details
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

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/payment', { state: { event, form } });
  };

  return (
    <div style={{ minHeight: '100vh', background: GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, position: 'relative' }}>
      <div style={{
        background: 'rgba(255,255,255,0.97)',
        borderRadius: 24,
        boxShadow: CARD_SHADOW,
        padding: 48,
        maxWidth: 800,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Progress Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32, gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaTicketAlt style={{ color: ACCENT, fontSize: 22 }} />
            <span style={{ color: ACCENT, fontWeight: 700 }}>Event Details</span>
          </div>
          <span style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 18 }}>→</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaUser style={{ color: ACCENT, fontSize: 20 }} />
            <span style={{ color: ACCENT, fontWeight: 700 }}>Your Info</span>
          </div>
          <span style={{ color: '#cbd5e1', fontWeight: 700, fontSize: 18 }}>→</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaCheckCircle style={{ color: ACCENT, fontSize: 20 }} />
            <span style={{ color: ACCENT, fontWeight: 700 }}>Confirmation</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 32 }}>
          {/* Left Column - Event Details and Form */}
          <div style={{ flex: 1 }}>
            {/* Event Details Card */}
            <div style={{
              background: 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)',
              borderRadius: 16,
              boxShadow: '0 2px 8px rgba(37,99,235,0.06)',
              padding: 20,
              marginBottom: 24,
              position: 'relative',
            }}>
              <img src={event.img} alt={event.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 16, boxShadow: '0 2px 8px #2563eb22' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <span style={{ background: ACCENT, color: 'black', fontWeight: 600, borderRadius: 8, padding: '4px 14px', fontSize: 13, letterSpacing: 0.5, boxShadow: '0 1px 4px #2563eb22' }}>{event.tag || 'Event'}</span>
                {event.category && <span style={{ color: ACCENT, fontWeight: 500, fontSize: 13 }}>{event.category}</span>}
              </div>
              <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: ACCENT, marginBottom: 2 }}>{event.name}</h1>
              <div style={{ color: '#374151', fontSize: 15, marginBottom: 2 }}>Date: <b>{event.date}</b></div>
              <div style={{ color: '#374151', fontSize: 15, marginBottom: 2 }}>Time: <b>{event.time}</b></div>
              <div style={{ color: '#374151', fontSize: 15, marginBottom: 2 }}>Location: <b>{event.location}</b></div>
              {event.description && <div style={{ color: '#64748b', fontSize: 14, marginTop: 4 }}>{event.description}</div>}
            </div>

            {/* Event Highlights */}
            <div style={{ 
              background: 'white', 
              borderRadius: 16, 
              padding: 20, 
              marginBottom: 24,
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

            {/* Divider */}
            <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)', margin: '18px 0 24px' }} />

            {/* Booking Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: 8, color: ACCENT, fontWeight: 500 }}>Number of Tickets</label>
                  <select 
                    name="tickets" 
                    value={form.tickets} 
                    onChange={handleTicketChange}
                    style={{ 
                      width: '100%', 
                      padding: 12, 
                      borderRadius: 8, 
                      border: `1.5px solid ${ACCENT}`,
                      fontSize: 16,
                      background: 'white'
                    }}
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Ticket' : 'Tickets'}</option>
                    ))}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: 8, color: ACCENT, fontWeight: 500 }}>Price per Ticket</label>
                  <div style={{ 
                    padding: 12, 
                    borderRadius: 8, 
                    border: `1.5px solid ${ACCENT}`,
                    fontSize: 16,
                    background: 'white',
                    textAlign: 'center'
                  }}>
                    ${eventDetails.price}
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <FaUser style={{ position: 'absolute', left: 14, top: 14, color: ACCENT, fontSize: 18, opacity: 0.7 }} />
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" style={{ padding: '12px 12px 12px 40px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16, width: '100%' }} />
              </div>
              <div style={{ position: 'relative' }}>
                <FaEnvelope style={{ position: 'absolute', left: 14, top: 14, color: ACCENT, fontSize: 18, opacity: 0.7 }} />
                <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" style={{ padding: '12px 12px 12px 40px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16, width: '100%' }} />
              </div>
              <div style={{ position: 'relative' }}>
                <FaPhone style={{ position: 'absolute', left: 14, top: 14, color: ACCENT, fontSize: 18, opacity: 0.7 }} />
                <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="Phone Number" style={{ padding: '12px 12px 12px 40px', borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16, width: '100%' }} />
              </div>

              {/* Payment Methods */}
              <div style={{ marginTop: 16 }}>
                <label style={{ display: 'block', marginBottom: 8, color: ACCENT, fontWeight: 500 }}>Payment Methods</label>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', padding: '12px 0' }}>
                  <SiVisa style={{ fontSize: 32, color: '#1a1f71' }} />
                  <SiMastercard style={{ fontSize: 32, color: '#eb001b' }} />
                  <SiPaypal style={{ fontSize: 32, color: '#003087' }} />
                </div>
              </div>

              <button type="submit" style={{ 
                background: ACCENT, 
                color: 'white', 
                border: 'none', 
                borderRadius: 10, 
                padding: '14px 0', 
                fontWeight: 700, 
                fontSize: 18, 
                marginTop: 12, 
                cursor: 'pointer', 
                boxShadow: '0 2px 8px rgba(37,99,235,0.08)', 
                transition: 'background 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8
              }}>
                <FaLock style={{ fontSize: 16 }} />
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Right Column - Seat Selection and Summary */}
          <div style={{ width: 300 }}>
            {/* Seat Selection */}
            <div style={{ 
              background: 'white', 
              borderRadius: 16, 
              padding: 20, 
              marginBottom: 24,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: ACCENT, fontSize: 18, marginBottom: 16 }}>Select Seats</h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: 12,
                marginBottom: 16
              }}>
                {availableSeats.map(seat => (
                  <div
                    key={seat.id}
                    onClick={() => handleSeatSelect(seat.id)}
                    style={{
                      background: form.seats.includes(seat.id) ? ACCENT : '#e2e8f0',
                      color: form.seats.includes(seat.id) ? 'white' : '#64748b',
                      padding: 8,
                      borderRadius: 8,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      opacity: form.seats.length >= form.tickets && !form.seats.includes(seat.id) ? 0.5 : 1
                    }}
                  >
                    <FaChair style={{ marginBottom: 4 }} />
                    <div>{seat.id}</div>
                  </div>
                ))}
              </div>
              <div style={{ color: '#64748b', fontSize: 14, textAlign: 'center' }}>
                Selected: {form.seats.length} of {form.tickets} seats
              </div>
            </div>

            {/* Booking Summary */}
            <div style={{ 
              background: 'white', 
              borderRadius: 16, 
              padding: 20,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: ACCENT, fontSize: 18, marginBottom: 16 }}>Booking Summary</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Tickets ({form.tickets})</span>
                  <span style={{ fontWeight: 600 }}>${(eventDetails.price * form.tickets).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Service Fee</span>
                  <span style={{ fontWeight: 600 }}>$2.99</span>
                </div>
                <div style={{ height: 1, background: '#e2e8f0', margin: '8px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 18 }}>
                  <span>Total</span>
                  <span>${(eventDetails.price * form.tickets + 2.99).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow; 