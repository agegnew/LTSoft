import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import GameHighlights from './components/GameHighlights';
import PlayerStats from './components/PlayerStats';
import CommunityForums from './components/CommunityForums';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeroSection />
      <GameHighlights />
      <PlayerStats />
      <CommunityForums />
      <Footer />
    </div>
  );
}

export default App;