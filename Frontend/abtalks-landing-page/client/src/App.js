import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Flame, LayoutDashboard, Home, FileCode } from 'lucide-react';
import { ThemeProvider, useTheme } from './ThemeContext';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import DayPage from './pages/DayPage';

const Navigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#e1e9e3] dark:bg-gray-900 sticky top-0 z-50 border-b border-[#d0dad2]/60 dark:border-gray-800 backdrop-blur-md transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#8eb89b] text-[#27322c] font-extrabold flex items-center justify-center text-sm shadow-xs">
            AB
          </div>
          <div>
            <span className="text-lg font-black text-[#27322c] dark:text-gray-100 tracking-tight block leading-none">ABTalks</span>
            <span className="text-[10px] uppercase font-bold text-[#607367] dark:text-gray-400 tracking-wider block mt-1">BUILD IN PUBLIC</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Link 
            to="/" 
            className={`min-h-[48px] px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors ${
              isActive('/') 
                ? 'bg-[#27322c] text-[#f4f7f4] dark:bg-gray-100 dark:text-gray-900' 
                : 'bg-[#f4f7f4] dark:bg-gray-800 text-[#27322c] dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 border border-[#d0dad2] dark:border-gray-700'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link 
            to="/dashboard" 
            className={`min-h-[48px] px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors ${
              isActive('/dashboard') 
                ? 'bg-[#27322c] text-[#f4f7f4] dark:bg-gray-100 dark:text-gray-900' 
                : 'bg-[#f4f7f4] dark:bg-gray-800 text-[#27322c] dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 border border-[#d0dad2] dark:border-gray-700'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          <Link 
            to="/day/12" 
            className={`min-h-[48px] px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors ${
              isActive('/day/12') 
                ? 'bg-[#27322c] text-[#f4f7f4] dark:bg-gray-100 dark:text-gray-900' 
                : 'bg-[#f4f7f4] dark:bg-gray-800 text-[#27322c] dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 border border-[#d0dad2] dark:border-gray-700'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span className="hidden sm:inline">Day 12</span>
          </Link>

          <div className="hidden sm:flex items-center gap-1.5 bg-[#f4f7f4] dark:bg-gray-800 px-3 py-2 rounded-xl border border-[#d0dad2] dark:border-gray-700 text-xs font-bold text-[#27322c] dark:text-gray-200 min-h-[48px]">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>17 Days</span>
          </div>

          {/* Dynamic Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="min-h-[48px] min-w-[48px] p-2.5 rounded-xl bg-[#f4f7f4] dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-[#d0dad2] dark:border-gray-700 text-[#27322c] dark:text-amber-400 transition-colors cursor-pointer flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-[#27322c]" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

function MainApp() {
  return (
    <Router>
      <div className="min-h-screen bg-[#e1e9e3] dark:bg-gray-950 text-[#27322c] dark:text-gray-100 flex flex-col font-sans transition-colors duration-200">
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

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;