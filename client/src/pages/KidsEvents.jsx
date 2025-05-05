import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChild, FaCalendarAlt, FaClock, FaSort } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const ACCENT = '#7c3aed';
const GRADIENT = 'linear-gradient(135deg, #f8fafc 0%, #ede9fe 60%, #c7d2fe 100%)';
const CARD_BG = '#fafafa';
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=200';

const initialEvents = [
  { img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200', name: 'Magic Show', date: '2024-10-05', time: '11:00', location: 'Kids Arena', tag: 'Magic' },
  { img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=200', name: 'Puppet Theatre', date: '2024-10-07', time: '10:30', location: 'Puppet House', tag: 'Puppet' },
  { img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=facearea&w=400&h=200', name: 'Cartoon Carnival', date: '2024-10-09', time: '12:00', location: 'Cartoon Club', tag: 'Cartoon' },
  { img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=400&h=200', name: 'Storytelling', date: '2024-10-11', time: '13:00', location: 'Library', tag: 'Story' },
  { img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=200', name: 'Kids Science Fair', date: '2024-10-13', time: '14:00', location: 'Science Center', tag: 'Science' },
  { img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200', name: 'Art Workshop', date: '2024-10-15', time: '15:00', location: 'Art Studio', tag: 'Art' },
  { img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=facearea&w=400&h=200', name: 'Dance Party', date: '2024-10-17', time: '16:00', location: 'Dance Hall', tag: 'Dance' },
  { img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=200', name: 'Kids Yoga', date: '2024-10-19', time: '09:30', location: 'Yoga Center', tag: 'Yoga' },
  { img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=200', name: 'Treasure Hunt', date: '2024-10-21', time: '10:00', location: 'Adventure Park', tag: 'Adventure' },
  { img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=200', name: 'LEGO Building', date: '2024-10-23', time: '11:30', location: 'LEGO Zone', tag: 'LEGO' },
  { img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=facearea&w=400&h=200', name: 'Superhero Day', date: '2024-10-25', time: '12:30', location: 'Superhero HQ', tag: 'Superhero' },
  { img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=200', name: 'Kids Cooking', date: '2024-10-27', time: '13:30', location: 'Cooking Studio', tag: 'Cooking' },
];

const sortOptions = [
  { value: 'date', label: 'Date' },
  { value: 'time', label: 'Time' },
  { value: 'name', label: 'Name' },
];

const KidsEvents = () => {
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
    <div style={{ minHeight: '100vh', position: 'relative', background: GRADIENT }}>
      <Navbar />
      <div style={{ paddingTop: 120, maxWidth: 1400, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '3rem', fontFamily: 'serif', marginBottom: 16, color: '#2d3748', letterSpacing: 1, textShadow: '0 2px 8px #fff8' }}>
          <FaChild style={{ color: ACCENT, marginRight: 12, verticalAlign: 'middle' }} />
          Upcoming Kids Events
        </h1>
        {/* Filters */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 40, alignItems: 'center',
          background: 'rgba(255,255,255,0.5)',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(124,58,237,0.10)',
          padding: '18px 32px',
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaCalendarAlt style={{ color: ACCENT }} />
            <label style={{ fontWeight: 500, color: ACCENT }}>Date:</label>
            <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} style={{ padding: 8, borderRadius: 6, border: `1px solid ${ACCENT}` }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaClock style={{ color: ACCENT }} />
            <label style={{ fontWeight: 500, color: ACCENT }}>Time:</label>
            <input type="time" value={filterTime} onChange={e => setFilterTime(e.target.value)} style={{ padding: 8, borderRadius: 6, border: `1px solid ${ACCENT}` }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FaSort style={{ color: ACCENT }} />
            <label style={{ fontWeight: 500, color: ACCENT }}>Sort by:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: 8, borderRadius: 6, border: `1px solid ${ACCENT}` }}>
              {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <label style={{ fontWeight: 500, color: ACCENT }}>Category:</label>
            <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: 8, borderRadius: 6, border: `1px solid ${ACCENT}` }}>
              <option value="">All</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
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
              borderRadius: 22,
              boxShadow: '0 8px 32px rgba(124,58,237,0.13)',
              padding: 32,
              textAlign: 'center',
              position: 'relative',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              border: `2px solid #e0e7ef`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 16px 40px #43e97b'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.13)'; }}
            >
              {/* Badge */}
              <span style={{
                position: 'absolute',
                top: 24,
                left: 24,
                background: ACCENT,
                color: 'white',
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 10,
                padding: '4px 16px',
                letterSpacing: 1,
                boxShadow: '0 2px 8px #43e97b44',
              }}>{event.tag}</span>
              <img src={event.img || FALLBACK_IMG} alt={event.name} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 16, marginBottom: 18, boxShadow: '0 2px 12px #43e97b55' }} onError={e => { e.target.src = FALLBACK_IMG; }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8, color: ACCENT }}>{event.name}</div>
              <div style={{ fontSize: '1.15rem', marginBottom: 4, color: ACCENT }}>Date: {event.date}</div>
              <div style={{ fontSize: '1.15rem', marginBottom: 4, color: ACCENT }}>Time: {event.time}</div>
              <div style={{ fontSize: '1.15rem', marginBottom: 12, color: '#64748b' }}>Location: {event.location}</div>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 18 }}>
                <button style={{ background: ACCENT, color: 'white', borderRadius: 10, padding: '12px 32px', border: 'none', fontWeight: 600, fontFamily: 'serif', cursor: 'pointer', fontSize: '1.1rem', transition: 'background 0.2s' }}
                  onClick={() => navigate('/more-info', { state: { event } })}
                >More info.</button>
                <button
                  style={{ background: '#fff', color: ACCENT, borderRadius: 10, padding: '12px 32px', border: `2px solid ${ACCENT}`, fontWeight: 600, fontFamily: 'serif', cursor: 'pointer', fontSize: '1.1rem', transition: 'background 0.2s' }}
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
  );
};

export default KidsEvents; 