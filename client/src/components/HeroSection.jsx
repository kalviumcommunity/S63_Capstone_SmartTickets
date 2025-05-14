import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl font-serif mb-4 bg-black bg-opacity-50 px-6 py-2 rounded">
          Welcome, Smart Tickets
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Book tickets for the most exciting concerts, conferences, and exhibitions happening around you.
        </p>
        
        {/* Search Bar */}
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for live events in your city..."
            className="flex-1 px-6 py-3 rounded-l-lg text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;