import React from 'react';
import EventCard from '../components/EventCard';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Upcoming Events</h1>
      <EventCard title="Concert A" date="2025-05-10" location="Venue A" />
      <EventCard title="Concert B" date="2025-05-15" location="Venue B" />
    </div>
  );
};

export default Home;
