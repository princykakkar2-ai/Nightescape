import React, { useState } from 'react';
import { Users, CheckCircle2, Clock, Send, Sparkles } from 'lucide-react';  

const AccountabilityPod = ({ squadData }) => {
  const [nudged, setNudged] = useState(false);

  const completionPercentage = Math.round(
    (squadData.completedToday / squadData.totalMembers) * 100
  );

  const handleNudge = () => {
    setNudged(true);
    setTimeout(() => setNudged(false), 3000);
  };

  return (
    <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 bg-[#a1c4ab] text-[#1c3824] rounded-lg">
              <Users className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-[#607367] uppercase tracking-wider">
              Accountability Pod • {squadData.track}
            </span>
          </div>
          <h2 className="text-2xl font-black text-[#27322c]">
            {squadData.id} ({squadData.completedToday}/{squadData.totalMembers} Completed Today)
          </h2>
        </div>

        <button
          onClick={handleNudge}
          className="min-h-[48px] px-4 py-2.5 bg-[#e1e9e3] hover:bg-[#d0dad2] text-[#27322c] border border-[#d0dad2] rounded-2xl font-bold text-xs flex items-center gap-2 transition-colors self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>{nudged ? 'Nudge Sent to Squad!' : 'Nudge Incomplete Members'}</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-[#27322c]">
          <span>Today's Squad Completion Rate</span>
          <span>{completionPercentage}% Target Reached</span>
        </div>
        <div className="w-full h-3 bg-[#e1e9e3] rounded-full overflow-hidden border border-[#d0dad2]">
          <div
            className="h-full bg-[#8eb89b] rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* 5-Member Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
        {squadData.members.map((member, i) => (
          <div
            key={i}
            className={`p-4 rounded-2xl border flex flex-col justify-between transition-all ${
              member.submitted
                ? 'bg-[#a1c4ab]/20 border-[#8eb89b]'
                : 'bg-[#e1e9e3]/60 border-[#d0dad2]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-full bg-[#27322c] text-[#f4f7f4] font-black text-xs flex items-center justify-center">
                {member.initials}
              </div>
              {member.submitted ? (
                <CheckCircle2 className="w-4 h-4 text-[#2f5d3d]" />
              ) : (
                <Clock className="w-4 h-4 text-amber-600" />
              )}
            </div>

            <div>
              <p className="text-xs font-bold text-[#27322c] truncate">{member.name}</p>
              <p className="text-[10px] font-semibold text-[#607367]">
                {member.submitted ? `Submitted Day ${member.day}` : 'Pending Submission'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountabilityPod;