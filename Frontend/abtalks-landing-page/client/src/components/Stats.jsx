import React from 'react';
import { Users, Code, Briefcase } from 'lucide-react';

const Stats = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50/50 rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center justify-center gap-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-gray-900">10,000+</div>
            <div className="text-sm font-medium text-gray-500">members</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <Code className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-gray-900">500+</div>
            <div className="text-sm font-medium text-gray-500">projects</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-gray-900">100+</div>
            <div className="text-sm font-medium text-gray-500">hiring partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;