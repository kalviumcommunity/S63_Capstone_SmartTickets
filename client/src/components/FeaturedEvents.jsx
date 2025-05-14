import React from 'react';

const EventCard = ({ image, title, location }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
};

const FeaturedEvents = () => {
  const events = [
    {
      title: "Upcoming music shows in March",
      location: "Your city",
      image: "https://source.unsplash.com/featured/?concert",
    },
    {
      title: "Upcoming live sports events in March",
      location: "Your city",
      image: "https://source.unsplash.com/featured/?stadium",
    },
    {
      title: "Upcoming comedy shows in March",
      location: "Your city",
      image: "https://source.unsplash.com/featured/?comedy,standup",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents; 