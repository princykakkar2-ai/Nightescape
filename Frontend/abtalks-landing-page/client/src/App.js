import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Flame, LayoutDashboard, Home, FileCode } from 'lucide-react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import DayPage from './pages/DayPage';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#e1e9e3] sticky top-0 z-50 border-b border-[#d0dad2]/60 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#8eb89b] text-[#27322c] font-extrabold flex items-center justify-center text-sm shadow-xs">
            AB
          </div>
          <div>
            <span className="text-lg font-black text-[#27322c] tracking-tight block leading-none">ABTalks</span>
            <span className="text-[10px] uppercase font-bold text-[#607367] tracking-wider block mt-1">BUILD IN PUBLIC</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Link 
            to="/" 
            className={`min-h-[48px] px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors ${
              isActive('/') ? 'bg-[#27322c] text-[#f4f7f4]' : 'bg-[#f4f7f4] text-[#27322c] hover:bg-white border border-[#d0dad2]'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link 
            to="/dashboard" 
            className={`min-h-[48px] px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors ${
              isActive('/dashboard') ? 'bg-[#27322c] text-[#f4f7f4]' : 'bg-[#f4f7f4] text-[#27322c] hover:bg-white border border-[#d0dad2]'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          <Link 
            to="/day/12" 
            className={`min-h-[48px] px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors ${
              isActive('/day/12') ? 'bg-[#27322c] text-[#f4f7f4]' : 'bg-[#f4f7f4] text-[#27322c] hover:bg-white border border-[#d0dad2]'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span className="hidden sm:inline">Day 12</span>
          </Link>

          <div className="hidden sm:flex items-center gap-1.5 bg-[#f4f7f4] px-3 py-2 rounded-xl border border-[#d0dad2] text-xs font-bold text-[#27322c] min-h-[48px]">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>17 Days</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#e1e9e3] text-[#27322c] flex flex-col font-sans">
        <Navigation />
        <main className="flex-1 pb-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/day/12" element={<DayPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;