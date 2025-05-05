import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Eventify</h2>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p className="text-xs text-gray-400">&copy; 2025 Eventify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
