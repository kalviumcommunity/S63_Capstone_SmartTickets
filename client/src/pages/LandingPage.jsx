import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedEvents from '../components/FeaturedEvents';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturedEvents />
    </div>
  );
};

export default LandingPage; 