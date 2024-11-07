import React from 'react';
import { Trophy, Gamepad2, BarChart2 } from 'lucide-react';

const GameHighlights = () => {
  const highlights = [
    { title: "New Map: Neon City", icon: <Trophy className="h-8 w-8 text-cyan-400" /> },
    { title: "Weapon Upgrade: Plasma Rifle", icon: <Gamepad2 className="h-8 w-8 text-purple-400" /> },
    { title: "Tournament: Cyber League", icon: <BarChart2 className="h-8 w-8 text-cyan-400" /> }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          Game Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="flex items-center space-x-3 mb-4">
                {highlight.icon}
                <h3 className="text-xl font-bold text-cyan-400">{highlight.title}</h3>
              </div>
              <p className="text-gray-300">
                Experience the latest addition to NeoShooter. Dive into intense battles and showcase your skills!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameHighlights;