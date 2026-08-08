import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Stats from './components/Stats';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <Stats />
      </main>
    </div>
  );
}

export default App;