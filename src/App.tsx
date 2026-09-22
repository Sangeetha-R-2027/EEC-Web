import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Events } from './components/sections/Events';
import { Coordinators } from './components/sections/Coordinators';

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAF6] text-[#243525]">
      {/* Reusable Navigation Bar */}
      <Navbar />

      {/* Main Content Area in exact requested order: Hero -> About -> Events -> Coordinators */}
      <main className="flex-grow">
        {/* Stage 1: Hero / Video Placeholder */}
        <Hero />

        {/* Stage 1: Editorial About Section */}
        <About />

        {/* Stage 3: Events Section (Directly below About) */}
        <Events />

        {/* Stage 2: Coordinators Section */}
        <Coordinators />
      </main>
    </div>
  );
};

export default App;
