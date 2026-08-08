// Header.jsx
import React from 'react';
import { Sun } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-950">AB TALKS</div>
        
        <div className="flex items-center gap-6">
          <Sun className="h-5 w-5 text-gray-600 cursor-pointer" />
          <button className="text-sm font-medium text-gray-700 hover:text-ab-purple">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;