import React from 'react';
import { Gamepad2, Search, User, Menu } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Gamepad2 className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              NeoShooter
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            {['Home', 'Highlights', 'Stats', 'Community'].map((item) => (
              <button
                key={item}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-300" />
            <User className="h-6 w-6 text-gray-300" />
            <Menu className="h-6 w-6 text-gray-300 md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;