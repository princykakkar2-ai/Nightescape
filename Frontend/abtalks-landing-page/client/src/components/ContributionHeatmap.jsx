import React from 'react';

export default function ContributionHeatmap({ heatmapDays, currentDay }) {
  return (
    <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
        <h3 className="text-lg font-bold text-[#27322c] font-sans">60-Day Contribution Heatmap</h3>
        <div className="flex items-center space-x-4 text-xs font-semibold">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 bg-[#2f5d3d] rounded-sm"></span>
            <span className="text-[#607367]">Completed</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 bg-[#e59087] rounded-sm"></span>
            <span className="text-[#607367]">Missed</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 bg-[#d0dad2] rounded-sm"></span>
            <span className="text-[#607367]">Upcoming</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2">
        {heatmapDays.map((status, index) => {
          const dayNumber = index + 1;
          let bgColor = 'bg-[#d0dad2] text-[#819387]';
          
          if (dayNumber === currentDay) {
            bgColor = 'bg-[#f0b28e] text-[#592b12] ring-2 ring-[#2f5d3d]';
          } else if (status === 'completed') {
            bgColor = 'bg-[#2f5d3d] text-[#f4f7f4]';
          } else if (status === 'missed') {
            bgColor = 'bg-[#e59087] text-[#4d1e19]';
          }

          return (
            <div
              key={dayNumber}
              title={`Day ${dayNumber}: ${status}`}
              className={`${bgColor} h-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-transform hover:scale-105 cursor-pointer`}
            >
              {dayNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
}
