import React from 'react';

const challenges = [
  {
    badge: 'Enrolling now',
    badgeColor: 'bg-[#a1c4ab] text-[#1c3824]',
    title: '60-Day Coding Challenge',
    desc: 'One real task every day across AI, Data Science, or Software Engineering. Build a streak and a public portfolio.',
    duration: '60 days',
    btnText: 'Join',
    btnColor: 'bg-[#27322c] hover:bg-[#1a231e] text-[#f4f7f4]',
  },
  {
    badge: 'New',
    badgeColor: 'bg-[#f0b28e] text-[#592b12]',
    title: 'AI & Data Science Challenge',
    desc: 'Build and deploy a production AI chatbot in 31 days. Learn RAG, agents, MCP, and get in front of recruiters.',
    duration: '31 days',
    btnText: 'Apply',
    btnColor: 'bg-[#8fa4ad] hover:bg-[#7c929c] text-[#1a2327]',
  },
  {
    badge: 'Registration closed',
    badgeColor: 'bg-[#e59087] text-[#4d1e19]',
    title: 'Vibe Code Hackathon',
    desc: 'Build anything using AI in 48 hours. Compete solo or with a team of up to three and ship something real.',
    duration: '48 hours',
    btnText: 'Registration Closed',
    btnColor: 'bg-[#d0dad2] text-[#819387] cursor-not-allowed',
    disabled: true,
  },
  {
    badge: 'New track',
    badgeColor: 'bg-[#f0b28e] text-[#592b12]',
    title: 'Claude & Gemini Mastery',
    desc: 'Master Claude through focused prompt-engineering tasks and build practical AI workflows.',
    duration: '60 days',
    btnText: 'Join',
    btnColor: 'bg-[#27322c] hover:bg-[#1a231e] text-[#f4f7f4]',
  },
];

const Challenges = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((c, i) => (
          <div key={i} className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
            <div>
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${c.badgeColor}`}>
                {c.badge}
              </span>
              <h3 className="text-xl font-bold text-[#27322c] mb-2">{c.title}</h3>
              <p className="text-[#607367] text-sm mb-6 leading-relaxed">{c.desc}</p>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[#e1e9e3] text-[#27322c] text-xs font-semibold rounded-full mb-4 border border-[#d0dad2]">
                {c.duration}
              </span>
              <button 
                disabled={c.disabled}
                className={`w-full py-2.5 px-4 rounded-2xl font-bold text-sm transition-colors ${c.btnColor}`}
              >
                {c.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;  