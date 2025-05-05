import React, { useState } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => (
  <div style={{ 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '32px 48px 0 48px', 
    boxSizing: 'border-box', 
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100, 
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)'
  }}>
    <Link to="/" style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 500, color: 'white', letterSpacing: 2, textShadow: '0 2px 8px rgba(0,0,0,0.5)', textDecoration: 'none' }}>Smart Tickets</Link>
    <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.3rem', fontFamily: 'serif', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Home</Link>
      <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>My bookings</Link>
      <Link to="#" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Events</Link>
      <Link to="/cancelled-tickets" style={{ color: 'white', textDecoration: 'none', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Cancelled tickets</Link>
    </div>
  </div>
);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPhone: ${phone}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section with background */}
      <div className="hero-section">
        <div 
          className="hero-background"
          style={{
            backgroundImage: "url('/bg1.jpg')",
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-cyan-800/20 to-black/50"></div>
        </div>
        
        {/* Login Form Content */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.85)',
            padding: 40,
            borderRadius: 12,
            minWidth: 350,
            boxShadow: '0 4px 32px rgba(0,0,0,0.4)'
          }}>
            <form
              className="login-form"
              style={{
                width: '100%',
                background: 'none',
                padding: 0,
                borderRadius: 0
              }}
              onSubmit={handleSubmit}
            >
              <div>
                <label style={{ color: '#fff', fontWeight: 500 }}>Email</label>
                <input
                  type="email"
                  className="search-input"
                  style={{ marginBottom: 16, width: '100%' }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label style={{ color: '#fff', fontWeight: 500 }}>Phone Number</label>
                <input
                  type="tel"
                  className="search-input"
                  style={{ marginBottom: 16, width: '100%' }}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  pattern="[0-9]{10,15}"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label style={{ color: '#fff', fontWeight: 500 }}>Password</label>
                <input
                  type="password"
                  className="search-input"
                  style={{ marginBottom: 16, width: '100%' }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <Link to="/register" style={{ color: '#60a5fa', fontSize: 14, textDecoration: 'underline', cursor: 'pointer' }}>Create new account? Register</Link>
              </div>
              <button type="submit" className="sign-in-button" style={{ marginTop: 8, width: '100%' }}>Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
