import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">NeoShooter</h3>
            <p>The future of competitive shooting games.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 NeoShooter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;