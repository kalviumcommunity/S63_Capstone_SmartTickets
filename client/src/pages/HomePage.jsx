import React, { useState } from 'react';
import './HomePage.css';
import { FaUser, FaCog, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ profileOpen, setProfileOpen }) => (
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
    background: '#000',
    backdropFilter: 'none'
  }}>
    <Link to="/" style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 500, color: 'white', letterSpacing: 2, textShadow: 'none', textDecoration: 'none' }}>Smart Tickets</Link>
    <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.3rem', fontFamily: 'serif', alignItems: 'center', position: 'relative' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none' }}>My bookings</Link>
      <Link to="#" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
      <Link to="/cancelled-tickets" style={{ color: 'white', textDecoration: 'none' }}>Cancelled tickets</Link>
      <Link to="/rate-us" style={{ color: 'white', textDecoration: 'none' }}>Rate Us</Link>
      <Link to="/login" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>Sign In</Link>
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

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Navbar */}
      <Navbar profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
      {/* Hero Section */}
      <div className="hero-section">
        {/* Background Image */}
        <div 
          className="hero-background"
          style={{
            backgroundImage: "url('/concert-crowd.jpg')",
            backgroundPosition: 'center 30%'
          }}
        >
          {/* Blue overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-cyan-800/20 to-black/50"></div>
        </div>
        {/* Content */}
        <div className="hero-content">
          <div className="hero-title-container">
            <h1 className="welcome-title" style={{ fontSize: '4rem', padding: '1rem 2rem', color: 'white', background: 'none', borderRadius: 0 }}>
              Welcome, Smart Tickets
            </h1>
            <p className="hero-description" style={{ fontSize: '1.5rem', maxWidth: '800px' }}>
              Book tickets for the most exciting concerts, conferences, and exhibitions happening around you.
            </p>
          </div>
          {/* Search Bar */}
          <div className="search-container" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            <div className="search-wrapper" style={{ 
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              padding: '4px'
            }}>
              <input
                type="text"
                placeholder="Search for live events in your city..."
                className="search-input"
                style={{ 
                  fontSize: '1.25rem',
                  padding: '1rem 1.5rem',
                  width: '100%'
                }}
              />
              <button className="search-button" style={{ 
                fontSize: '1.25rem',
                padding: '1rem 2rem',
                background: '#2563eb'
              }}>
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Events Section */}
      <section className="featured-section">
        <h2 className="featured-title" style={{ textAlign: 'left', fontSize: '2.2rem', fontWeight: 700, marginBottom: 32, marginLeft: 8, letterSpacing: 1 }}>
          Explore Categories
        </h2>
        <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', marginBottom: 40 }}>
          <div onClick={() => navigate('/music-shows')} style={{ cursor: 'pointer' }}>
            <EventCard image="/column-1st.jpg" title="Music Shows" location="Concerts, Gigs, Festivals" bg="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" />
          </div>
          <div onClick={() => navigate('/sports-events')} style={{ cursor: 'pointer' }}>
            <EventCard image="/Column-2.jpg" title="Sports Events" location="Matches, Tournaments" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" />
          </div>
          <div onClick={() => navigate('/comedy-shows')} style={{ cursor: 'pointer' }}>
            <EventCard image="/column-3.jpg" title="Comedy Shows" location="Standup, Improv" bg="linear-gradient(135deg, #f857a6 0%, #ff5858 100%)" />
          </div>
          <div onClick={() => navigate('/educational-shows')} style={{ cursor: 'pointer' }}>
            <EventCard image="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=200" title="Educational Shows" location="Talks, Seminars" bg="linear-gradient(135deg, #43cea2 0%, #185a9d 100%)" />
          </div>
          <div onClick={() => navigate('/art-craft-shows')} style={{ cursor: 'pointer' }}>
            <EventCard image="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200" title="Art & Craft" location="Workshops, Fairs" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" />
          </div>
          <div onClick={() => navigate('/theatre-shows')} style={{ cursor: 'pointer' }}>
            <EventCard image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200" title="Theatre Shows" location="Drama, Plays" bg="linear-gradient(135deg, #7f53ac 0%, #647dee 100%)" />
          </div>
          <div onClick={() => navigate('/kids-events')} style={{ cursor: 'pointer' }}>
            <EventCard image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200" title="Kids Events" location="Fun, Learning" bg="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" />
          </div>
          <div onClick={() => navigate('/food-drink-events')} style={{ cursor: 'pointer' }}>
            <EventCard image="/food.jpg" title="Food & Drink" location="Fests, Tastings" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" />
          </div>
          <div onClick={() => navigate('/outdoor-events')} style={{ cursor: 'pointer' }}>
            <EventCard image="/outdoor.jpg" title="Outdoor/Nature" location="Treks, Camps" bg="linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" />
          </div>
          <div onClick={() => navigate('/tech-innovation')} style={{ cursor: 'pointer' }}>
            <EventCard image="/tech.jpg" title="Tech & Innovation" location="Expos, Hackathons" bg="linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)" />
          </div>
          <div onClick={() => navigate('/literature-books')} style={{ cursor: 'pointer' }}>
            <EventCard image="/books.jpg" title="Literature & Books" location="Book Fairs, Readings" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" />
          </div>
          <div onClick={() => navigate('/fashion-lifestyle')} style={{ cursor: 'pointer' }}>
            <EventCard image="/fashion.jpg" title="Fashion & Lifestyle" location="Shows, Expos" bg="linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer" style={{ background: '#181A2A', color: '#fff', padding: '3rem 0 1.5rem 0', marginTop: 60 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 48 }}>
          {/* About */}
          <div style={{ flex: '1 1 260px', minWidth: 220 }}>
            <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: '2rem', marginBottom: 12, color: '#60a5fa' }}>Smart Tickets</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: 18 }}>
              Your one-stop platform for booking tickets to concerts, sports, comedy, theatre, and more. Discover, book, and experience the best events in your city with ease and security.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: 24 }}><i className="fab fa-facebook-f"></i>FB</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: 24 }}><i className="fab fa-twitter"></i>TW</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: 24 }}><i className="fab fa-instagram"></i>IG</a>
              <a href="mailto:support@smarttickets.com" style={{ color: '#60a5fa', fontSize: 24 }}><i className="fas fa-envelope"></i>Mail</a>
            </div>
          </div>
          {/* Quick Links */}
          <div style={{ flex: '1 1 180px', minWidth: 180 }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 10, color: '#60a5fa' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1', fontSize: '1.08rem' }}>
              <li><Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/my-bookings" style={{ color: '#cbd5e1', textDecoration: 'none' }}>My Bookings</Link></li>
              <li><Link to="/login" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Sign In</Link></li>
              <li><Link to="/rate-us" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Rate Us</Link></li>
              <li><Link to="/cancelled-tickets" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Cancelled Tickets</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div style={{ flex: '1 1 220px', minWidth: 220 }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 10, color: '#60a5fa' }}>Contact</h3>
            <p style={{ color: '#cbd5e1', marginBottom: 6 }}>Email: <a href="mailto:support@smarttickets.com" style={{ color: '#60a5fa' }}>support@smarttickets.com</a></p>
            <p style={{ color: '#cbd5e1', marginBottom: 6 }}>Phone: <a href="tel:+911234567890" style={{ color: '#60a5fa' }}>+91 12345 67890</a></p>
            <p style={{ color: '#cbd5e1', marginBottom: 6 }}>Address: 123 Event Lane, Mumbai, India</p>
            <p style={{ color: '#cbd5e1', marginBottom: 6 }}>Support: 24/7 Live Chat</p>
          </div>
          {/* Newsletter Signup */}
          <div style={{ flex: '1 1 260px', minWidth: 220 }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 10, color: '#60a5fa' }}>Newsletter</h3>
            <p style={{ color: '#cbd5e1', marginBottom: 10 }}>Get updates on the latest events and offers:</p>
            <form onSubmit={e => { e.preventDefault(); alert('Subscribed!'); }} style={{ display: 'flex', gap: 8 }}>
              <input type="email" required placeholder="Your email" style={{ padding: '10px 14px', borderRadius: 8, border: 'none', fontSize: '1rem', flex: 1 }} />
              <button type="submit" style={{ background: '#60a5fa', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 18px', fontWeight: 600, cursor: 'pointer' }}>Subscribe</button>
            </form>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #334155', marginTop: 36, paddingTop: 18, textAlign: 'center', color: '#94a3b8', fontSize: '1.05rem' }}>
          &copy; {new Date().getFullYear()} Smart Tickets. All rights reserved. | <Link to="/terms" style={{ color: '#60a5fa' }}>Terms & Conditions</Link> | <Link to="/privacy" style={{ color: '#60a5fa' }}>Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

// Event Card Component
const EventCard = ({ image, title, location, bg }) => {
  return (
    <div className="event-card" style={{ background: bg }}>
      <div 
        className="event-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="event-content">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default HomePage; 