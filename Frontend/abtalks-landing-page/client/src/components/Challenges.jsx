import React from 'react';

const challenges = [
  {
    badge: 'Enrolling now',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: '60-Day Coding Challenge',
    desc: 'One real task every day across AI, Data Science, or Software Engineering. Build a streak and a public portfolio.',
    duration: '60 days',
    btnText: 'Join',
    btnColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
  {
    badge: 'New',
    badgeColor: 'bg-amber-100 text-amber-800',
    title: 'AI & Data Science Challenge',
    desc: 'Build and deploy a production AI chatbot in 31 days. Learn RAG, agents, MCP, and get in front of recruiters.',
    duration: '31 days',
    btnText: 'Apply',
    btnColor: 'bg-purple-900 hover:bg-purple-950 text-white',
  },
  {
    badge: 'Registration closed',
    badgeColor: 'bg-gray-100 text-gray-600',
    title: 'Vibe Code Hackathon',
    desc: 'Build anything using AI in 48 hours. Compete solo or with a team of up to three and ship something real.',
    duration: '48 hours',
    btnText: 'Registration Closed',
    btnColor: 'bg-gray-200 text-gray-500 cursor-not-allowed',
    disabled: true,
  },
  {
    badge: 'New track',
    badgeColor: 'bg-orange-100 text-orange-700',
    title: 'Claude & Gemini Mastery',
    desc: 'Master Claude through focused prompt-engineering tasks and build practical AI workflows.',
    duration: '60 days',
    btnText: 'Join',
    btnColor: 'bg-orange-500 hover:bg-orange-600 text-white',
  },
];

const Challenges = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((c, i) => (
          <div key={i} className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between bg-white shadow-xs hover:shadow-md transition-shadow">
            <div>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${c.badgeColor}`}>
                {c.badge}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{c.desc}</p>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-4">
                {c.duration}
              </span>
              <button 
                disabled={c.disabled}
                className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors ${c.btnColor}`}
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