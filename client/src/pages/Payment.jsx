import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCreditCard, FaCheckCircle, FaMoneyCheckAlt, FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const ACCENT = '#2563eb';
const CARD_SHADOW = '0 4px 16px rgba(37,99,235,0.08)';
const GRADIENT = 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #bfdbfe 100%)';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event, form } = location.state || {};
  const [method, setMethod] = useState('card');
  const [processing, setProcessing] = useState(false);

  if (!event || !form) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ color: ACCENT, fontSize: 24, fontWeight: 600 }}>No booking data. <span style={{ color: '#333' }}>Go back and book an event.</span></div>
      </div>
    );
  }

  const handlePayment = e => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate('/booking-confirmed', { state: { event, form } });
    }, 1800);
  };

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
          <button onClick={() => navigate(-1)} style={{ position: 'absolute', left: 24, top: 24, background: 'none', border: 'none', color: ACCENT, fontSize: 22, cursor: 'pointer' }}><FaArrowLeft /></button>
          <h2 style={{ textAlign: 'center', color: ACCENT, fontWeight: 700, fontSize: '2rem', marginBottom: 18, letterSpacing: 1 }}>Payment</h2>
          <div style={{ width: '100px', height: '4px', background: ACCENT, margin: '0 auto 24px', borderRadius: '2px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
          <div style={{ marginBottom: 24, textAlign: 'center', color: '#374151', fontSize: 16 }}>
            <b>{event.name}</b> <br />
            {event.date} &bull; {event.time} <br />
            <span style={{ color: ACCENT }}>{event.location}</span>
          </div>
          <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 12 }}>
              <button type="button" onClick={() => setMethod('card')} style={{ background: method === 'card' ? ACCENT : '#e0e7ef', color: method === 'card' ? 'white' : '#374151', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 1px 4px #2563eb22', display: 'flex', alignItems: 'center', gap: 8 }}><FaCreditCard />Card</button>
              <button type="button" onClick={() => setMethod('upi')} style={{ background: method === 'upi' ? ACCENT : '#e0e7ef', color: method === 'upi' ? 'white' : '#374151', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 1px 4px #2563eb22', display: 'flex', alignItems: 'center', gap: 8 }}><FaMoneyCheckAlt />UPI</button>
            </div>
            <div style={{ width: '100%', height: 1, background: '#e0e7ef', margin: '8px 0 8px 0' }} />
            {method === 'card' ? (
              <>
                <input required placeholder="Card Number" maxLength={19} style={{ padding: 12, borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16 }} />
                <div style={{ display: 'flex', gap: 12 }}>
                  <input required placeholder="MM/YY" maxLength={5} style={{ flex: 1, padding: 12, borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16 }} />
                  <input required placeholder="CVV" maxLength={3} style={{ flex: 1, padding: 12, borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16 }} />
                </div>
                <input required placeholder="Name on Card" style={{ padding: 12, borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16 }} />
              </>
            ) : (
              <input required placeholder="Enter UPI ID" style={{ padding: 12, borderRadius: 8, border: `1.5px solid ${ACCENT}`, fontSize: 16 }} />
            )}
            <button type="submit" disabled={processing} style={{ background: ACCENT, color: 'white', border: 'none', borderRadius: 10, padding: '14px 0', fontWeight: 700, fontSize: 18, marginTop: 12, cursor: processing ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px rgba(37,99,235,0.08)', transition: 'background 0.2s', opacity: processing ? 0.7 : 1 }}>
              {processing ? 'Processing...' : 'Pay & Confirm'}
            </button>
          </form>
          {processing && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: ACCENT, animation: 'progress 1.8s linear' }}>
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

export default Payment; 