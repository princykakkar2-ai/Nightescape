import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, ExternalLink, ShieldCheck, Flame } from 'lucide-react';
import mockData from '../mockData.json';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto py-8">
        <div className="inline-flex items-center gap-2 bg-[#f4f7f4] border border-[#d0dad2] px-4 py-2 rounded-full mb-6">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span className="text-xs font-bold text-[#27322c]">60-Day Proof of Work Challenge</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-[#27322c] tracking-tight leading-none mb-6">
          BUILD IN PUBLIC. <br />
          <span className="text-[#2f5d3d]">UNLOCK YOUR POTENTIAL.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#607367] max-w-2xl mx-auto font-medium leading-relaxed mb-8">
          Build 1 real-world project every day across AI, Data Science, or Software Engineering. Submit your daily GitHub commit and LinkedIn breakdown to build an unshakeable proof-of-work portfolio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/dashboard"
            className="min-h-[48px] px-8 py-3 bg-[#27322c] hover:bg-[#1a231e] text-[#f4f7f4] font-bold rounded-2xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            Start Your 60-Day Streak 🔥
          </Link>
        </div>
      </section>

      {/* Track Selector Cards */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-black text-[#27322c]">Choose Your Track</h2>
          <p className="text-sm font-medium text-[#607367]">Select a daily track tailored to your career trajectory.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockData.tracks.map((track) => (
            <div key={track.id} className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-[#a1c4ab] text-[#1c3824] text-xs font-bold rounded-full">
                    {track.badge}
                  </span>
                  <span className="text-xs font-bold text-[#607367] bg-[#e1e9e3] px-2.5 py-1 rounded-lg border border-[#d0dad2]">
                    {track.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#27322c] mb-2">{track.title}</h3>
                <p className="text-sm text-[#607367] leading-relaxed mb-6">{track.desc}</p>
              </div>
              <Link
                to="/day/12"
                className="min-h-[48px] w-full bg-[#e1e9e3] hover:bg-[#27322c] hover:text-white text-[#27322c] border border-[#d0dad2] rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Proof Wall */}
      <section className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-[#27322c] flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#2f5d3d]" /> Live Proof Wall
            </h2>
            <p className="text-sm font-medium text-[#607367]">Real submissions from students completing daily challenges.</p>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#2f5d3d] bg-[#a1c4ab]/30 px-3 py-1.5 rounded-full self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#2f5d3d] animate-pulse"></span>
            Updating Live
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockData.proofWall.map((item) => (
            <div key={item.id} className="bg-[#e1e9e3] border border-[#d0dad2] rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#27322c]">{item.student}</span>
                  <span className="text-[10px] font-semibold text-[#607367]">{item.time}</span>
                </div>
                <div className="text-xs font-bold text-[#2f5d3d] mb-1">
                  Day {item.day} • {item.track}
                </div>
                <p className="text-sm font-bold text-[#27322c] mb-4">{item.project}</p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#d0dad2]">
                <a href={item.github} target="_blank" rel="noreferrer" className="min-h-[48px] px-3 flex items-center gap-1.5 text-xs font-bold text-[#27322c] hover:text-[#2f5d3d]">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={item.linkedin} target="_blank" rel="noreferrer" className="min-h-[48px] px-3 flex items-center gap-1.5 text-xs font-bold text-[#27322c] hover:text-[#2f5d3d]">
                  <Linkedin className="w-4 h-4" /> Post <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto">
        <Link
          to="/dashboard"
          className="min-h-[48px] w-full bg-[#27322c] hover:bg-[#1a231e] text-[#f4f7f4] font-black rounded-2xl py-3 px-6 shadow-xl border border-[#d0dad2] flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <span>Start Your 60-Day Streak</span>
          <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
