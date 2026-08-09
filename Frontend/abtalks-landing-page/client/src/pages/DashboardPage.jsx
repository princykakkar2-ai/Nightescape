import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Flame, ArrowRight, Award } from 'lucide-react';
import mockData from '../mockData.json';
import PortfolioCardModal from '../components/PortfolioCardModal';
import AccountabilityPod from '../components/AccountabilityPod';

const DashboardPage = () => {
  const [profileState, setProfileState] = useState('active'); // active | empty | missed
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeData = mockData.dashboard;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
      {/* Portfolio Card Modal Component */}
      <PortfolioCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        studentData={activeData}
      />

      {/* Demo Profile State Controls */}
      <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs font-bold text-[#607367] uppercase tracking-wider">Demo Profile State:</span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setProfileState('active')}
            className={`min-h-[48px] px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              profileState === 'active' ? 'bg-[#27322c] text-white' : 'bg-[#e1e9e3] text-[#27322c] border border-[#d0dad2]'
            }`}
          >
            Active Streak
          </button>
          <button
            onClick={() => setProfileState('empty')}
            className={`min-h-[48px] px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              profileState === 'empty' ? 'bg-[#27322c] text-white' : 'bg-[#e1e9e3] text-[#27322c] border border-[#d0dad2]'
            }`}
          >
            Empty Profile (Day 1)
          </button>
          <button
            onClick={() => setProfileState('missed')}
            className={`min-h-[48px] px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              profileState === 'missed' ? 'bg-[#e78479] text-white' : 'bg-[#e1e9e3] text-[#27322c] border border-[#d0dad2]'
            }`}
          >
            Missed Day State
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6">
        <div>
          <h1 className="text-3xl font-black text-[#27322c]">
            Welcome back, {profileState === 'empty' ? 'New Builder' : activeData.studentName} 👋
          </h1>
          <p className="text-sm font-medium text-[#607367] mt-1">
            {profileState === 'missed' 
              ? 'You missed yesterday! Use your Streak Shield to recover your streak.'
              : profileState === 'empty' 
              ? 'Start your day 1 challenge to kick off your 60-day portfolio streak.' 
              : `Cohort Rank #${activeData.cohortRank} of ${activeData.totalStudents} students.`}
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[48px] px-5 py-2.5 bg-[#8eb89b] hover:bg-[#a1c4ab] text-[#1c3824] font-black rounded-2xl flex items-center gap-2 transition-colors border border-[#d0dad2] self-start sm:self-auto"
        >
          <Award className="w-5 h-5 text-[#1c3824]" />
          <span>Recruiter Portfolio Card</span>
        </button>
      </div>

      {/* Top Metric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 flex flex-col justify-between shadow-xs">
          <div>
            <span className="text-xs font-bold uppercase text-[#607367] tracking-wider block mb-2">Challenge Progress</span>
            <div className="text-4xl font-black text-[#27322c] tracking-tight">
              {profileState === 'empty' ? 'DAY 1 / 60' : `DAY ${activeData.currentDay} / 60`}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#d0dad2]">
            <div className="text-2xl font-black text-amber-600 flex items-center gap-2">
              <Flame className="w-7 h-7 text-amber-500 fill-amber-500" />
              <span>{profileState === 'empty' ? '0' : profileState === 'missed' ? '0' : activeData.currentStreak} CURRENT STREAK</span>
            </div>
            <p className="text-xs font-medium text-[#607367] mt-1">Keep building daily to keep your streak glowing.</p>
          </div>
        </div>

        <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-[#2f5d3d] mb-2">
              <Shield className="w-5 h-5 fill-[#a1c4ab]" />
              <span className="text-xs font-bold uppercase tracking-wider">Streak Protection</span>
            </div>
            <h2 className="text-2xl font-bold text-[#27322c]">
              {profileState === 'empty' ? '0 Shields Available' : `${activeData.shieldsAvailable} Shield Available`}
            </h2>
            <p className="text-sm font-medium text-[#607367] mt-2 leading-relaxed">
              Shields automatically absorb 1 missed daily check-in to preserve your streak record.
            </p>
          </div>
          <div className="mt-4">
            <span className={`inline-block px-3 py-1.5 rounded-xl text-xs font-bold ${
              profileState === 'missed' ? 'bg-[#e78479] text-white' : 'bg-[#a1c4ab] text-[#1c3824]'
            }`}>
              Status: {profileState === 'missed' ? 'Shield Trigger Needed' : 'Active & Armed'}
            </span>
          </div>
        </div>

        <div className="bg-[#27322c] text-[#f4f7f4] rounded-3xl p-6 flex flex-col justify-between shadow-md">
          <div>
            <span className="text-xs font-bold uppercase text-[#a1c4ab] tracking-wider block mb-2">Today's Focus</span>
            <h3 className="text-xl font-bold mb-2">
              {profileState === 'empty' ? 'Day 1: Set Up Portfolio & GitHub' : activeData.todayTask.title}
            </h3>
            <p className="text-sm text-[#d0dad2] leading-relaxed">
              {profileState === 'empty' 
                ? 'Initialize your repository, install essential packages, and prepare your daily build template.'
                : activeData.todayTask.desc}
            </p>
          </div>
          <Link
            to="/day/12"
            className="mt-6 min-h-[48px] w-full bg-[#8eb89b] hover:bg-[#a1c4ab] text-[#1c3824] font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
          >
            <span>View Task</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* NEW FEATURE: Accountability Pod Component */}
      <AccountabilityPod squadData={activeData.squad} />

      {/* 60-Day Contribution Heatmap */}
      <section className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-black text-[#27322c]">60-Day Contribution Heatmap</h2>
            <p className="text-sm font-medium text-[#607367]">Click any block to inspect proof status for that day.</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-[#607367]">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-[#8eb89b]"></span> Completed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-[#e78479]"></span> Missed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-[#d0dad2]"></span> Upcoming
            </span>
          </div>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2 sm:gap-3">
          {activeData.heatmapDays.map((status, index) => {
            const dayNum = index + 1;
            let bgColor = 'bg-[#d0dad2] text-[#607367]';
            if (profileState !== 'empty') {
              if (status === 'completed') bgColor = 'bg-[#8eb89b] text-[#1c3824] font-bold';
              if (status === 'missed') bgColor = 'bg-[#e78479] text-white font-bold';
            }

            return (
              <Link
                key={index}
                to="/day/12"
                className={`h-10 sm:h-12 rounded-xl flex items-center justify-center text-xs transition-transform hover:scale-105 border border-[#d0dad2]/40 ${bgColor}`}
                title={`Day ${dayNum}: ${status}`}
              >
                {dayNum}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;