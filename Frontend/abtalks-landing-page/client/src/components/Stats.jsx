import React from 'react';
import { Users, Code, Briefcase } from 'lucide-react';

const Stats = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#f4f7f4] rounded-3xl p-6 border border-[#d0dad2]">
        <div className="flex items-center justify-center gap-4 p-2">
          <div className="p-3 bg-[#a1c4ab] text-[#1c3824] rounded-2xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#27322c]">10,000+</div>
            <div className="text-xs font-semibold text-[#607367]">members</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 p-2">
          <div className="p-3 bg-[#8fa4ad] text-[#1a2327] rounded-2xl">
            <Code className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#27322c]">500+</div>
            <div className="text-xs font-semibold text-[#607367]">projects</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 p-2">
          <div className="p-3 bg-[#f0b28e] text-[#592b12] rounded-2xl">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#27322c]">100+</div>
            <div className="text-xs font-semibold text-[#607367]">hiring partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;