import React from 'react';
import { Sun, Flame } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#e1e9e3] sticky top-0 z-50 border-b border-[#d0dad2]/60 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8eb89b] text-[#27322c] font-bold flex items-center justify-center text-xs">
            AB
          </div>
          <div>
            <span className="text-lg font-bold text-[#27322c] tracking-tight block leading-tight">ABTalks</span>
            <span className="text-[10px] uppercase font-semibold text-[#607367] tracking-wider block">Full-Stack Software Engineering</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-[#f4f7f4] px-3 py-1 rounded-full border border-[#d0dad2] text-xs font-semibold text-[#27322c]">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>14 Days</span>
          </div>

          <Sun className="h-5 w-5 text-[#607367] hover:text-[#27322c] cursor-pointer transition-colors" />
          <button className="text-xs font-semibold text-[#27322c] hover:text-[#2f5d3d] bg-[#f4f7f4] hover:bg-white px-4 py-2 rounded-xl border border-[#d0dad2] transition-colors">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;  