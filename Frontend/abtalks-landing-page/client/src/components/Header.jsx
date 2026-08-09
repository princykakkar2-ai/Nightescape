import React from 'react';
import { Sun, Moon, Flame } from 'lucide-react';
import { useTheme } from '../ThemeContext'; // Adjust path if ThemeContext is in src/ or src/context/

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-[#e1e9e3] dark:bg-gray-900 sticky top-0 z-50 border-b border-[#d0dad2]/60 dark:border-gray-800 backdrop-blur-md transition-colors">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8eb89b] text-[#27322c] font-bold flex items-center justify-center text-xs">
            AB
          </div>
          <div>
            <span className="text-lg font-bold text-[#27322c] dark:text-gray-100 tracking-tight block leading-tight">ABTalks</span>
            <span className="text-[10px] uppercase font-semibold text-[#607367] dark:text-gray-400 tracking-wider block">Full-Stack Software Engineering</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-[#f4f7f4] dark:bg-gray-800 px-3 py-1 rounded-full border border-[#d0dad2] dark:border-gray-700 text-xs font-semibold text-[#27322c] dark:text-gray-200">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>14 Days</span>
          </div>

          {/* Interactive Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-[#f4f7f4] dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-[#d0dad2] dark:border-gray-700 text-[#607367] dark:text-amber-400 transition-colors cursor-pointer flex items-center justify-center min-h-[40px] min-w-[40px]"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-[#27322c]" />
            )}
          </button>

          <button className="text-xs font-semibold text-[#27322c] dark:text-gray-200 hover:text-[#2f5d3d] dark:hover:text-[#8eb89b] bg-[#f4f7f4] dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 px-4 py-2 rounded-xl border border-[#d0dad2] dark:border-gray-700 transition-colors min-h-[40px] cursor-pointer">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;