import React from 'react';
import Navbar from '../components/Navbar';
import { FaUserCog, FaEnvelope, FaMobileAlt, FaLock, FaShieldAlt, FaPalette, FaLanguage } from 'react-icons/fa';

const Settings = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
      padding: '40px 0',
      fontFamily: 'Inter, Arial, sans-serif',
    }}>
      <Navbar />
      <div style={{ maxWidth: 600, margin: '0 auto', background: 'white', borderRadius: 24, boxShadow: '0 8px 32px rgba(60,60,120,0.10)', padding: 36, marginTop: 40 }}>
        {/* Profile Summary */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, color: '#6366f1', fontWeight: 700 }}>
            <FaUserCog />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 22, color: '#1e293b' }}>John Doe</div>
            <div style={{ color: '#64748b', fontSize: 16 }}>johndoe@email.com</div>
          </div>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: '#3730a3', marginBottom: 24, letterSpacing: 1 }}>Settings</h1>
        {/* Account Settings */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <FaEnvelope style={{ color: '#6366f1' }} />
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#3730a3', margin: 0 }}>Account Settings</h2>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#1e293b' }}>Email Notifications</div>
            <div style={{ color: '#64748b', fontSize: 15 }}>Receive email updates about your bookings</div>
            <button style={{ background: '#6366f1', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, marginTop: 8, cursor: 'pointer', fontSize: 15, boxShadow: '0 2px 8px #6366f133' }}>Enable</button>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: '#1e293b' }}>SMS Notifications</div>
            <div style={{ color: '#64748b', fontSize: 15 }}>Receive SMS updates about your bookings</div>
            <button style={{ background: '#6366f1', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, marginTop: 8, cursor: 'pointer', fontSize: 15, boxShadow: '0 2px 8px #6366f133' }}>Enable</button>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #e0e7ff', margin: '32px 0' }} />
        {/* Privacy Settings */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <FaShieldAlt style={{ color: '#10b981' }} />
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#047857', margin: 0 }}>Privacy Settings</h2>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: '#1e293b' }}>Profile Visibility</div>
            <div style={{ color: '#64748b', fontSize: 15 }}>Control who can see your profile</div>
            <select style={{ border: '1px solid #e0e7ff', borderRadius: 8, padding: '8px 16px', marginTop: 8, fontSize: 15, color: '#1e293b', background: '#f1f5f9', fontWeight: 500 }}>
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #e0e7ff', margin: '32px 0' }} />
        {/* Security Settings */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <FaLock style={{ color: '#f59e42' }} />
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#b45309', margin: 0 }}>Security Settings</h2>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#1e293b' }}>Change Password</div>
            <div style={{ color: '#64748b', fontSize: 15 }}>Update your account password</div>
            <button style={{ background: '#f59e42', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, marginTop: 8, cursor: 'pointer', fontSize: 15, boxShadow: '0 2px 8px #f59e4233' }}>Change</button>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: '#1e293b' }}>Two-Factor Authentication</div>
            <div style={{ color: '#64748b', fontSize: 15 }}>Add an extra layer of security to your account</div>
            <button style={{ background: '#f59e42', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, marginTop: 8, cursor: 'pointer', fontSize: 15, boxShadow: '0 2px 8px #f59e4233' }}>Enable</button>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #e0e7ff', margin: '32px 0' }} />
        {/* Preferences */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <FaPalette style={{ color: '#6366f1' }} />
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#3730a3', margin: 0 }}>Preferences</h2>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#1e293b' }}>Language</div>
            <div style={{ color: '#64748b', fontSize: 15 }}>Choose your preferred language</div>
            <select style={{ border: '1px solid #e0e7ff', borderRadius: 8, padding: '8px 16px', marginTop: 8, fontSize: 15, color: '#1e293b', background: '#f1f5f9', fontWeight: 500 }}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: '#1e293b' }}>Theme</div>
            <div style={{ color: '#64748b', fontSize: 15 }}>Choose your preferred theme</div>
            <select style={{ border: '1px solid #e0e7ff', borderRadius: 8, padding: '8px 16px', marginTop: 8, fontSize: 15, color: '#1e293b', background: '#f1f5f9', fontWeight: 500 }}>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 