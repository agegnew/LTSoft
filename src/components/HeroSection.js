import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Scene from './Scene';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            NeoShooter: Future Warfare
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Dominate the battlefield with advanced tactics and weaponry
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Enter Combat
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;