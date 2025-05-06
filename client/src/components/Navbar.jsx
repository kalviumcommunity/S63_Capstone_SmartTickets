import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog } from 'react-icons/fa';

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setProfileOpen(false);
    window.location.href = '/';
  };

  return (
    <nav style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 48px 0 48px',
      boxSizing: 'border-box',
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: '#000',
      backdropFilter: 'none',
      borderBottom: '1px solid #222',
    }}>
      {/* Logo */}
      <Link to="/" style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 500, color: 'white', letterSpacing: 2, textShadow: 'none', textDecoration: 'none' }}>Smart Tickets</Link>
      {/* Center - Navigation Links */}
      <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.3rem', fontFamily: 'serif', alignItems: 'center', position: 'relative' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none' }}>My bookings</Link>
        <Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>
        <Link to="/cancelled-tickets" style={{ color: 'white', textDecoration: 'none' }}>Cancelled tickets</Link>
        <Link to="/rate-us" style={{ color: 'white', textDecoration: 'none' }}>Rate Us</Link>
        {!isLoggedIn && (
          <Link to="/login" style={{
            color: 'white',
            textDecoration: 'none',
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>Sign In</Link>
        )}
        {/* Profile Dropdown */}
        <div style={{ position: 'relative' }}>
          <FaUser style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} onClick={() => setProfileOpen(!profileOpen)} />
          {profileOpen && (
            <div style={{ position: 'absolute', right: 0, top: '2.5rem', background: '#181A2A', color: 'white', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', minWidth: 220, zIndex: 200, padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>John Doe</div>
              <div style={{ fontSize: '0.95rem', marginBottom: 8 }}>johndoe@email.com</div>
              <div style={{ fontSize: '0.95rem', marginBottom: 8 }}>Member since: Jan 2024</div>
              <div style={{ fontSize: '0.95rem', marginBottom: 16 }}>Bookings: 12</div>
              <Link to="/settings" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', marginBottom: '16px' }}>
                <FaCog />
                <span>Settings</span>
              </Link>
              {isLoggedIn && (
                <button onClick={handleLogout} style={{ width: '100%', background: '#ef4444', color: 'white', border: 'none', borderRadius: 6, padding: '10px 0', fontWeight: 600, cursor: 'pointer' }}>Logout</button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;