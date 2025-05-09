import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUtensils, FaCalendarAlt, FaClock, FaSort } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const ACCENT = '#eab308';
const GRADIENT = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #fef9c3 100%)';
const CARD_BG = '#ffffff';
const CARD_SHADOW = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
const CARD_HOVER_SHADOW = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&h=200';
const CONTAINER_SHADOW = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';

const initialEvents = [
  {
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&h=200',
    name: 'Food Festival',
    date: '2024-09-10',
    time: '12:00',
    location: 'Central Park',
    tag: 'Festival',
  },
  {
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=400&h=200',
    name: 'Wine Tasting',
    date: '2024-09-12',
    time: '18:00',
    location: 'Vineyard',
    tag: 'Wine',
  },
  {
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=400&h=200',
    name: 'Coffee Lovers Meetup',
    date: '2024-09-15',
    time: '10:00',
    location: 'Cafe Aroma',
    tag: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=400&h=200',
    name: 'Baking Workshop',
    date: '2024-09-18',
    time: '14:00',
    location: 'Bakery Studio',
    tag: 'Baking',
  },
  {
    img: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=facearea&w=400&h=200',
    name: 'Street Food Night',
    date: '2024-09-20',
    time: '19:00',
    location: 'Downtown',
    tag: 'Street Food',
  },
  {
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=facearea&w=400&h=200',
    name: 'Brewery Tour',
    date: '2024-08-18',
    time: '15:00',
    location: 'Brewery Lane',
    tag: 'Beer',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200',
    name: 'Dessert Carnival',
    date: '2024-08-20',
    time: '14:00',
    location: 'Sweet Tooth Arena',
    tag: 'Dessert',
  },
  {
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=facearea&w=400&h=200',
    name: 'Coffee Lovers Meetup',
    date: '2024-08-22',
    time: '10:00',
    location: 'Cafe Central',
    tag: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200',
    name: 'Vegan Food Fair',
    date: '2024-08-24',
    time: '13:00',
    location: 'Green Park',
    tag: 'Vegan',
  },
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=200',
    name: 'BBQ Cookout',
    date: '2024-08-26',
    time: '16:00',
    location: 'BBQ Grounds',
    tag: 'BBQ',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=400&h=200',
    name: 'Chocolate Tasting',
    date: '2024-08-28',
    time: '11:00',
    location: 'Choco Studio',
    tag: 'Chocolate',
  },
  {
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=200',
    name: 'Farmers Market',
    date: '2024-08-30',
    time: '09:00',
    location: 'Market Square',
    tag: 'Market',
  },
];

const sortOptions = [
  { value: 'date', label: 'Date' },
  { value: 'time', label: 'Time' },
  { value: 'name', label: 'Name' },
];

const FoodDrinkEvents = () => {
  const [events, setEvents] = useState(initialEvents);
  const [filterDate, setFilterDate] = useState('');
  const [filterTime, setFilterTime] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  // Get unique categories from event tags
  const categories = Array.from(new Set(initialEvents.map(e => e.tag)));

  const filteredEvents = events
    .filter(event => {
      return (
        (!filterDate || event.date === filterDate) &&
        (!filterTime || event.time === filterTime) &&
        (!category || event.tag === category)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'date') return a.date.localeCompare(b.date);
      if (sortBy === 'time') return a.time.localeCompare(b.time);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div style={{ 
      minHeight: '100vh', 
      position: 'relative', 
      background: GRADIENT,
      paddingBottom: 80,
    }}>
      <Navbar />
      <div style={{ 
        paddingTop: 120, 
        maxWidth: 1400, 
        margin: '0 auto',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 32,
          boxShadow: CONTAINER_SHADOW,
          padding: '48px',
          margin: '0 24px',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }}>
          <h1 style={{ 
            textAlign: 'center', 
            fontSize: '3.5rem', 
            fontFamily: 'serif', 
            marginBottom: 24, 
            color: '#92400e', 
            letterSpacing: 1, 
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '0 32px',
          }}>
            <FaUtensils style={{ 
              color: ACCENT, 
              marginRight: 16, 
              verticalAlign: 'middle',
              fontSize: '2.5rem',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            }} />
            Food & Drink Events
          </h1>
          <div style={{
            width: '100px',
            height: '4px',
            background: ACCENT,
            margin: '0 auto 40px',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }} />
          {/* Filters */}
          <div style={{ 
            display: 'flex', 
            gap: 32, 
            justifyContent: 'center', 
            marginBottom: 40, 
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 20,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            padding: '24px 32px',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '12px 16px',
              borderRadius: 12,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}>
              <FaCalendarAlt style={{ color: ACCENT, fontSize: '1.2rem' }} />
              <label style={{ fontWeight: 500, color: '#b45309' }}>Date:</label>
              <input 
                type="date" 
                value={filterDate} 
                onChange={e => setFilterDate(e.target.value)} 
                style={{ 
                  padding: '8px 12px', 
                  borderRadius: 8, 
                  border: `1px solid ${ACCENT}`, 
                  color: '#b45309',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={e => e.target.style.borderColor = '#eab308'}
                onBlur={e => e.target.style.borderColor = ACCENT}
              />
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '12px 16px',
              borderRadius: 12,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}>
              <FaClock style={{ color: ACCENT, fontSize: '1.2rem' }} />
              <label style={{ fontWeight: 500, color: '#b45309' }}>Time:</label>
              <input 
                type="time" 
                value={filterTime} 
                onChange={e => setFilterTime(e.target.value)} 
                style={{ 
                  padding: '8px 12px', 
                  borderRadius: 8, 
                  border: `1px solid ${ACCENT}`, 
                  color: '#b45309',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={e => e.target.style.borderColor = '#eab308'}
                onBlur={e => e.target.style.borderColor = ACCENT}
              />
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '12px 16px',
              borderRadius: 12,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}>
              <FaSort style={{ color: ACCENT, fontSize: '1.2rem' }} />
              <label style={{ fontWeight: 500, color: '#b45309' }}>Sort by:</label>
              <select 
                value={sortBy} 
                onChange={e => setSortBy(e.target.value)} 
                style={{ 
                  padding: '8px 12px', 
                  borderRadius: 8, 
                  border: `1px solid ${ACCENT}`, 
                  color: '#b45309',
                  fontSize: '1rem',
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'white',
                }}
                onFocus={e => e.target.style.borderColor = '#eab308'}
                onBlur={e => e.target.style.borderColor = ACCENT}
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value} style={{ padding: '8px' }}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '12px 16px',
              borderRadius: 12,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}>
              <label style={{ fontWeight: 500, color: ACCENT }}>Category:</label>
              <select 
                value={category} 
                onChange={e => setCategory(e.target.value)} 
                style={{ 
                  padding: '8px 12px', 
                  borderRadius: 8, 
                  border: `1px solid ${ACCENT}`,
                  color: '#4b5563',
                  fontSize: '1rem',
                  outline: 'none',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                }}
              >
                <option value="">All</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Event Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px 48px',
            justifyContent: 'center',
            marginBottom: 40
          }}>
            {filteredEvents.map((event, idx) => (
              <div key={idx} style={{
                minHeight: 480,
                maxWidth: 420,
                margin: '0 auto',
                background: CARD_BG,
                borderRadius: 24,
                boxShadow: CARD_SHADOW,
                padding: 32,
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                border: `1px solid rgba(0, 0, 0, 0.1)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseOver={e => { 
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; 
                e.currentTarget.style.boxShadow = CARD_HOVER_SHADOW;
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={e => { 
                e.currentTarget.style.transform = 'none'; 
                e.currentTarget.style.boxShadow = CARD_SHADOW;
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
              }}
              >
                {/* Badge */}
                <span style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  background: ACCENT,
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 12,
                  padding: '6px 16px',
                  letterSpacing: 0.5,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}>{event.tag}</span>
                <img 
                  src={event.img || FALLBACK_IMG} 
                  alt={event.name} 
                  style={{ 
                    width: '100%', 
                    height: 220, 
                    objectFit: 'cover', 
                    borderRadius: 16, 
                    marginBottom: 18,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                  }} 
                  onError={e => { e.target.src = FALLBACK_IMG; }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  marginBottom: 8, 
                  color: ACCENT,
                  transition: 'color 0.3s ease',
                }}>{event.name}</div>
                <div style={{ 
                  fontSize: '1.15rem', 
                  marginBottom: 4, 
                  color: '#b45309',
                  transition: 'color 0.3s ease',
                }}>Date: {event.date}</div>
                <div style={{ 
                  fontSize: '1.15rem', 
                  marginBottom: 4, 
                  color: '#b45309',
                  transition: 'color 0.3s ease',
                }}>Time: {event.time}</div>
                <div style={{ 
                  fontSize: '1.15rem', 
                  marginBottom: 12, 
                  color: '#a16207',
                  transition: 'color 0.3s ease',
                }}>Location: {event.location}</div>
                <div style={{ 
                  display: 'flex', 
                  gap: 16, 
                  justifyContent: 'center', 
                  marginTop: 18 
                }}>
                  <button style={{ 
                    background: ACCENT, 
                    color: 'white', 
                    borderRadius: 12, 
                    padding: '12px 32px', 
                    border: 'none', 
                    fontWeight: 600, 
                    fontFamily: 'serif', 
                    cursor: 'pointer', 
                    fontSize: '1.1rem', 
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => navigate('/more-info', { state: { event } })}
                  onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'none'}
                  >More info.</button>
                  <button
                    style={{ background: '#fff', color: ACCENT, borderRadius: 12, padding: '12px 32px', border: `2px solid ${ACCENT}`, fontWeight: 600, fontFamily: 'serif', cursor: 'pointer', fontSize: '1.1rem', transition: 'all 0.3s ease' }}
                    onClick={() => navigate('/book-now', { state: { event } })}
                    onMouseOver={e => {
                      e.currentTarget.style.background = ACCENT;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.color = ACCENT;
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDrinkEvents; 