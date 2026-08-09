import React, { useState, useRef } from 'react';
import { X, Copy, Download, Check, ExternalLink, Flame, Shield, Award, Code, Share2 } from 'lucide-react';

const PortfolioCardModal = ({ isOpen, onClose, studentData }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const cardRef = useRef(null);

  if (!isOpen) return null;

  const shareableUrl = `https://abtalks.me/${studentData.studentName.toLowerCase()}/streak`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadSVG = () => {
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340" fill="none">
        <rect width="600" height="340" rx="24" fill="#27322C"/>
        <rect x="20" y="20" width="560" height="300" rx="18" fill="#F4F7F4" stroke="#D0DAD2" stroke-width="2"/>
        
        <!-- Header -->
        <circle cx="50" cy="50" r="18" fill="#8EB89B"/>
        <text x="50" y="55" font-family="sans-serif" font-weight="900" font-size="12" fill="#27322C" text-anchor="middle">AB</text>
        <text x="80" y="50" font-family="sans-serif" font-weight="900" font-size="18" fill="#27322C">ABTalks Verified Proof of Work</text>
        <text x="80" y="65" font-family="sans-serif" font-weight="700" font-size="11" fill="#607367">60-DAY BUILD IN PUBLIC CHALLENGE</text>
        
        <!-- Student Info -->
        <text x="40" y="115" font-family="sans-serif" font-weight="900" font-size="24" fill="#27322C">${studentData.studentName}</text>
        <text x="40" y="135" font-family="sans-serif" font-weight="700" font-size="12" fill="#2F5D3D">Cohort Rank #${studentData.cohortRank} of ${studentData.totalStudents} Builders</text>
        
        <!-- Metrics Box -->
        <rect x="40" y="155" width="250" height="85" rx="14" fill="#E1E9E3" stroke="#D0DAD2"/>
        <text x="55" y="180" font-family="sans-serif" font-weight="800" font-size="10" fill="#607367" letter-spacing="1">STREAK STATUS</text>
        <text x="55" y="215" font-family="sans-serif" font-weight="900" font-size="22" fill="#D97706">🔥 ${studentData.currentStreak} DAYS ACTIVE</text>

        <rect x="310" y="155" width="250" height="85" rx="14" fill="#E1E9E3" stroke="#D0DAD2"/>
        <text x="325" y="180" font-family="sans-serif" font-weight="800" font-size="10" fill="#607367" letter-spacing="1">PROGRESS</text>
        <text x="325" y="215" font-family="sans-serif" font-weight="900" font-size="22" fill="#27322C">DAY ${studentData.currentDay} / 60</text>
        
        <!-- Verification Banner -->
        <rect x="40" y="255" width="520" height="45" rx="12" fill="#8EB89B"/>
        <text x="60" y="282" font-family="sans-serif" font-weight="800" font-size="12" fill="#1C3824">✓ Verified GitHub Commits &amp; LinkedIn Submissions</text>
        <text x="540" y="282" font-family="sans-serif" font-weight="700" font-size="11" fill="#1C3824" text-anchor="end">abtalks.me</text>
      </svg>
    `;

    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${studentData.studentName}-proof-of-work-card.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#27322c]/60 backdrop-blur-sm p-4">
      <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d0dad2] pb-4">
          <div>
            <h2 className="text-xl font-black text-[#27322c] flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" /> Recruiter Portfolio Card
            </h2>
            <p className="text-xs font-semibold text-[#607367]">Export your verified proof-of-work card to feature on LinkedIn or resumes.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-[#e1e9e3] hover:bg-[#d0dad2] text-[#27322c] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Card Live Preview */}
        <div ref={cardRef} className="bg-[#27322c] p-4 rounded-2xl border border-[#d0dad2]">
          <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-xl p-6 space-y-5">
            {/* Card Top */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8eb89b] text-[#27322c] font-black flex items-center justify-center text-sm">
                  AB
                </div>
                <div>
                  <h3 className="text-base font-black text-[#27322c]">ABTalks Verified Proof of Work</h3>
                  <span className="text-[10px] uppercase font-extrabold text-[#607367] tracking-wider">60-DAY BUILD IN PUBLIC CHALLENGE</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#a1c4ab] text-[#1c3824] text-[10px] font-extrabold rounded-full">
                VERIFIED STUDENT
              </span>
            </div>

            {/* Student Info */}
            <div>
              <h4 className="text-2xl font-black text-[#27322c]">{studentData.studentName}</h4>
              <p className="text-xs font-bold text-[#2f5d3d]">Cohort Rank #{studentData.cohortRank} of {studentData.totalStudents} Builders</p>
            </div>

            {/* Metric Blocks */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#e1e9e3] border border-[#d0dad2] rounded-xl p-3">
                <span className="text-[10px] font-bold text-[#607367] uppercase tracking-wider block">Streak Status</span>
                <div className="text-lg font-black text-amber-600 flex items-center gap-1 mt-1">
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{studentData.currentStreak} Days Active</span>
                </div>
              </div>

              <div className="bg-[#e1e9e3] border border-[#d0dad2] rounded-xl p-3">
                <span className="text-[10px] font-bold text-[#607367] uppercase tracking-wider block">Progress</span>
                <div className="text-lg font-black text-[#27322c] mt-1">
                  Day {studentData.currentDay} / 60
                </div>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="bg-[#8eb89b] rounded-xl p-3 flex items-center justify-between text-xs font-bold text-[#1c3824]">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 fill-[#1c3824]" /> Verified Commits &amp; Posts
              </span>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <Share2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 bg-[#e1e9e3] border border-[#d0dad2] p-2 rounded-xl">
            <input 
              type="text" 
              readOnly 
              value={shareableUrl} 
              className="bg-transparent text-xs font-bold text-[#27322c] w-full px-2 outline-none"
            />
            <button
              onClick={handleCopyLink}
              className="min-h-[48px] px-4 bg-[#27322c] hover:bg-[#1a231e] text-[#f4f7f4] text-xs font-bold rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleDownloadSVG}
              className="min-h-[48px] w-full bg-[#8eb89b] hover:bg-[#a1c4ab] text-[#1c3824] font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download High-Res SVG Badge</span>
            </button>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareableUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="min-h-[48px] w-full bg-[#27322c] hover:bg-[#1a231e] text-[#f4f7f4] font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Add to LinkedIn Feature Section</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioCardModal;