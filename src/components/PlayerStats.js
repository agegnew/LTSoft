import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Trophy, BarChart2 } from 'lucide-react';
import HumanAvatarModel from './HumanAvatarModel';

const PlayerStats = () => {
  const [showBottomAvatar, setShowBottomAvatar] = useState(false);
  const bottomAvatarRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBottomAvatar(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (bottomAvatarRef.current) {
      observer.observe(bottomAvatarRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { stat: "Kills", value: "1,337", icon: <Trophy className="h-8 w-8 text-cyan-400" /> },
    { stat: "Accuracy", value: "87%", icon: <BarChart2 className="h-8 w-8 text-purple-400" /> },
    { stat: "Win Rate", value: "68%", icon: <Trophy className="h-8 w-8 text-cyan-400" /> },
    { stat: "Rank", value: "Diamond", icon: <Trophy className="h-8 w-8 text-purple-400" /> }
  ];

  return (
    <section className="py-16 bg-gray-900 relative" ref={bottomAvatarRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          Player Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">{stat.stat}</span>
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      {showBottomAvatar && (
        <div className="absolute inset-x-0 bottom-0 h-64">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <HumanAvatarModel position={[0, -2, 0]} rotation={[0, 0, 0]} delay={0} />
          </Canvas>
        </div>
      )}
    </section>
  );
};

export default PlayerStats;