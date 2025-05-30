import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FaUser, FaCog, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CategoryIcons, IconWrapper } from '../components/Icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>
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

  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Navbar */}
      <Navbar profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
      {/* Hero Section */}
      <div className="hero-section parallax-hero">
        {/* Parallax Background */}
        <div 
          className="hero-background parallax-bg"
          style={{
            backgroundImage: "url('/concert-crowd.jpg')",
            backgroundPosition: 'center 30%'
          }}
        >
          {/* Glassmorphism overlay */}
          <div className="glass-overlay absolute inset-0"></div>
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
            <div className="search-wrapper glass-overlay" style={{ borderRadius: '12px', padding: '4px' }}>
              <input
                type="text"
                placeholder="Search for live events in your city..."
                className="search-input"
                style={{ fontSize: '1.25rem', padding: '1rem 1.5rem', width: '100%' }}
              />
              <button className="search-button" style={{ fontSize: '1.25rem', padding: '1rem 2rem', background: '#2563eb' }}>
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add Event Countdown Banner above categories */}
      <section className="countdown-section" style={{ maxWidth: 1200, margin: '2rem auto 1.5rem auto', padding: '1.5rem 0', textAlign: 'center', background: 'linear-gradient(90deg, #f59e42 0%, #f43f5e 100%)', borderRadius: 18, color: '#fff', boxShadow: '0 2px 12px #f59e4240' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 8 }}>Next Big Event Starts In:</h2>
        <CountdownTimer eventDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 45)} />
        <div style={{ fontSize: '1.1rem', marginTop: 6 }}>Don't miss out! Book your spot now.</div>
      </section>
      {/* Featured Events Section */}
      <section className="featured-section">
        <h2 className="featured-title" style={{ textAlign: 'left', fontSize: '2.2rem', fontWeight: 700, marginBottom: 32, marginLeft: 8, letterSpacing: 1 }}>
          Explore Categories
        </h2>
        <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', marginBottom: 40 }}>
          <div onClick={() => navigate('/music-shows')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.music} image="/column-1st.jpg" title="Music Shows" location="Concerts, Gigs, Festivals" bg="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" badge="Trending" count={12} />
          </div>
          <div onClick={() => navigate('/sports-events')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.sports} image="/Column-2.jpg" title="Sports Events" location="Matches, Tournaments" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" badge="Popular" count={8} />
          </div>
          <div onClick={() => navigate('/comedy-shows')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.comedy} image="/column-3.jpg" title="Comedy Shows" location="Standup, Improv" bg="linear-gradient(135deg, #f857a6 0%, #ff5858 100%)" badge="New" count={5} />
          </div>
          <div onClick={() => navigate('/educational-shows')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.education} image="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=200" title="Educational Shows" location="Talks, Seminars" bg="linear-gradient(135deg, #43cea2 0%, #185a9d 100%)" count={7} />
          </div>
          <div onClick={() => navigate('/art-craft-shows')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.art} image="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200" title="Art & Craft" location="Workshops, Fairs" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" count={4} />
          </div>
          <div onClick={() => navigate('/theatre-shows')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.theatre} image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200" title="Theatre Shows" location="Drama, Plays" bg="linear-gradient(135deg, #7f53ac 0%, #647dee 100%)" badge="Popular" count={6} />
          </div>
          <div onClick={() => navigate('/kids-events')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.kids} image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200" title="Kids Events" location="Fun, Learning" bg="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" count={3} />
          </div>
          <div onClick={() => navigate('/food-drink-events')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.food} image="/food.jpg" title="Food & Drink" location="Fests, Tastings" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" count={9} />
          </div>
          <div onClick={() => navigate('/outdoor-events')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.outdoor} image="/outdoor.jpg" title="Outdoor/Nature" location="Treks, Camps" bg="linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" count={2} />
          </div>
          <div onClick={() => navigate('/tech-innovation')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.tech} image="/tech.jpg" title="Tech & Innovation" location="Expos, Hackathons" bg="linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)" badge="Trending" count={10} />
          </div>
          <div onClick={() => navigate('/literature-books')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.literature} image="/books.jpg" title="Literature & Books" location="Book Fairs, Readings" bg="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" count={4} />
          </div>
          <div onClick={() => navigate('/fashion-lifestyle')} style={{ cursor: 'pointer' }}>
            <EventCard icon={CategoryIcons.fashion} image="/fashion.jpg" title="Fashion & Lifestyle" location="Shows, Expos" bg="linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)" badge="New" count={3} />
          </div>
        </div>
      </section>
      {/* Trust Badges below categories */}
      <section className="trust-badges-section" style={{ maxWidth: 1200, margin: '2rem auto 1.5rem auto', display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
        <div className="trust-badge"><span role="img" aria-label="secure">🔒</span> Payment Secure</div>
        <div className="trust-badge"><span role="img" aria-label="verified">✔️</span> Verified Organizer</div>
        <div className="trust-badge"><span role="img" aria-label="refund">💯</span> 100% Refund</div>
      </section>
      {/* Achievements/Badges section */}
      <section className="achievements-section" style={{ maxWidth: 1200, margin: '2rem auto 1.5rem auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 18, color: '#1a202c', letterSpacing: 1 }}>Your Achievements</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div className="user-badge"><span role="img" aria-label="explorer">🌟</span> Event Explorer</div>
          <div className="user-badge"><span role="img" aria-label="reviewer">📝</span> Top Reviewer</div>
          <div className="user-badge"><span role="img" aria-label="early">⏰</span> Early Bird</div>
        </div>
      </section>
      {/* Social Media Feed Section */}
      <section className="social-feed-section" style={{ maxWidth: 1200, margin: '0 auto 3rem auto', padding: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18, color: '#1a202c', letterSpacing: 1 }}>Follow Us on Social Media</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {/* Twitter Feed Embed */}
          <div style={{ minWidth: 320, maxWidth: 400, flex: 1 }}>
            <a className="twitter-timeline" data-height="400" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
          </div>
          {/* You can add Instagram embed here if you have a business account */}
        </div>
      </section>
      {/* Blog/News Section above the social feed/footer */}
      <section className="blog-section" style={{ maxWidth: 1200, margin: '2rem auto 2.5rem auto', padding: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18, color: '#1a202c', letterSpacing: 1 }}>Event News & Tips</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div className="blog-card" style={{ background: '#fff8f1', borderRadius: 16, boxShadow: '0 2px 12px #f59e4240', padding: '1.2rem 1.5rem', maxWidth: 340, minWidth: 240 }}>
            <h4 style={{ color: '#f43f5e', marginBottom: 8 }}>How to Get the Best Seats at Concerts</h4>
            <p style={{ color: '#1a202c', fontSize: '1.05rem' }}>Tips and tricks for booking the best spots at your favorite shows.</p>
          </div>
          <div className="blog-card" style={{ background: '#fff8f1', borderRadius: 16, boxShadow: '0 2px 12px #f59e4240', padding: '1.2rem 1.5rem', maxWidth: 340, minWidth: 240 }}>
            <h4 style={{ color: '#f43f5e', marginBottom: 8 }}>Why Early Bird Tickets Matter</h4>
            <p style={{ color: '#1a202c', fontSize: '1.05rem' }}>Save money and secure your spot by booking early. Here's why it's smart!</p>
          </div>
          <div className="blog-card" style={{ background: '#fff8f1', borderRadius: 16, boxShadow: '0 2px 12px #f59e4240', padding: '1.2rem 1.5rem', maxWidth: 340, minWidth: 240 }}>
            <h4 style={{ color: '#f43f5e', marginBottom: 8 }}>Meet Our Verified Organizers</h4>
            <p style={{ color: '#1a202c', fontSize: '1.05rem' }}>Learn about the people and teams behind your favorite events.</p>
          </div>
        </div>
      </section>
      {/* Interactive Map below categories */}
      <section className="map-section" style={{ maxWidth: 1200, margin: '2rem auto', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 12px #f59e4240' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, margin: '1.5rem 0 1rem 0', color: '#1a202c' }}>Event Locations</h2>
        <MapContainer center={[28.6139, 77.2090]} zoom={5} style={{ height: 350, width: '100%' }} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[28.6139, 77.2090]}><Popup>New Delhi: Tech Expo</Popup></Marker>
          <Marker position={[19.0760, 72.8777]}><Popup>Mumbai: Music Fest</Popup></Marker>
          <Marker position={[12.9716, 77.5946]}><Popup>Bangalore: Comedy Night</Popup></Marker>
        </MapContainer>
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
            <p style={{ color: '#f43f5e', fontWeight: 700, marginBottom: 10, fontSize: '1.1rem' }}>Subscribe & get <span style={{ color: '#f59e42' }}>10% OFF</span> your first booking!</p>
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
      {/* Floating FAQ/Help Widget */}
      <FAQWidget />
    </div>
  );
};

// Event Card Component
const EventCard = ({ icon, image, title, location, bg, badge, count }) => {
  return (
    <div className="event-card enhanced-card" style={{ background: bg, position: 'relative' }}>
      {badge && (
        <span className="event-badge">{badge}</span>
      )}
      <div 
        className="event-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="event-content glass-overlay" style={{ textAlign: 'center' }}>
        {icon && <IconWrapper icon={icon} size={38} style={{ marginBottom: 8 }} />}
        <h3>{title}</h3>
        <p>{location}</p>
        {typeof count === 'number' && (
          <div className="event-count">{count} events</div>
        )}
      </div>
    </div>
  );
};

// Floating FAQ/Help Widget
const FAQWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="faq-fab"
        onClick={() => setOpen(o => !o)}
        aria-label="Help & FAQ"
      >
        ?
      </button>
      {open && (
        <div className="faq-popup">
          <h4>Need Help?</h4>
          <ul>
            <li><b>How do I book a ticket?</b><br />Click on any event and follow the booking steps.</li>
            <li><b>Can I cancel my booking?</b><br />Yes, go to My Bookings and select Cancel.</li>
            <li><b>How do I get my discount?</b><br />Subscribe to our newsletter and use the code sent to your email.</li>
            <li><b>Need more help?</b><br />Email us at <a href="mailto:support@smarttickets.com">support@smarttickets.com</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

// Countdown Timer Component
const CountdownTimer = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);
  if (timeLeft.total <= 0) return <span style={{ fontWeight: 700 }}>Event Started!</span>;
  return (
    <div style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 1 }}>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};
function getTimeLeft(eventDate) {
  const total = Math.max(0, eventDate - new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default HomePage; 