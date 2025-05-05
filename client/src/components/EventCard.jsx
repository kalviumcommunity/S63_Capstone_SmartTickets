import React from 'react';

const EventCard = ({ title, location, image }) => {
  return (
    <div className="w-full sm:w-[calc(33.333%-1rem)] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;