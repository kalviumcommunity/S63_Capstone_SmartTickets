import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { API_URL } from '../config/api';

const ACCENT = '#2563eb';
const GRADIENT = 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)';
const CARD_SHADOW = '0 4px 32px rgba(37,99,235,0.08)';

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          phoneNumber: form.phone,
          password: form.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful! Please check your email to verify your account.');
        navigate('/login');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: GRADIENT, position: 'relative' }}>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        position: 'relative',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 24,
          boxShadow: CARD_SHADOW,
          padding: 48,
          maxWidth: 420,
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 700,
            color: ACCENT,
            marginBottom: 24,
            fontFamily: 'serif',
            letterSpacing: 1,
          }}>Create Account</h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Username"
              style={{ padding: '14px', borderRadius: 10, border: `1.5px solid ${ACCENT}`, fontSize: 16, marginBottom: 2 }}
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email"
              style={{ padding: '14px', borderRadius: 10, border: `1.5px solid ${ACCENT}`, fontSize: 16, marginBottom: 2 }}
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]{10,15}"
              style={{ padding: '14px', borderRadius: 10, border: `1.5px solid ${ACCENT}`, fontSize: 16, marginBottom: 2 }}
            />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              type="password"
              placeholder="Password"
              style={{ padding: '14px', borderRadius: 10, border: `1.5px solid ${ACCENT}`, fontSize: 16, marginBottom: 2 }}
            />
            <input
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              type="password"
              placeholder="Confirm Password"
              style={{ padding: '14px', borderRadius: 10, border: `1.5px solid ${ACCENT}`, fontSize: 16, marginBottom: 2 }}
            />
            <button type="submit" style={{
              background: ACCENT,
              color: 'white',
              border: 'none',
              borderRadius: 10,
              padding: '16px 0',
              fontWeight: 700,
              fontSize: 18,
              marginTop: 8,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
              transition: 'background 0.2s',
              letterSpacing: 1,
            }}>Register</button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 18 }}>
            <span style={{ color: '#64748b', fontSize: 15 }}>Already have an account?{' '}
              <Link to="/login" style={{ color: ACCENT, textDecoration: 'underline', fontWeight: 500 }}>Sign In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
