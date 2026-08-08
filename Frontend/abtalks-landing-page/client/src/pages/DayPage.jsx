import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Copy, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import mockData from '../mockData.json';

const DayPage = () => {
  const task = mockData.dayTask;
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(task.postTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (githubUrl && linkedinUrl) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Header & Navigation */}
      <div className="flex items-center justify-between">
        <Link to="/dashboard" className="min-h-[48px] px-3 flex items-center gap-2 text-sm font-bold text-[#607367] hover:text-[#27322c]">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-bold bg-[#f4f7f4] border border-[#d0dad2] px-3 py-1.5 rounded-full text-[#27322c]">
          {task.track}
        </span>
      </div>

      {/* Header & Progress Bar */}
      <div className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 space-y-4">
        <div className="flex justify-between items-center text-sm font-black text-[#27322c]">
          <span>DAY {task.day} / {task.totalDays}</span>
          <span>{Math.round((task.day / task.totalDays) * 100)}% Complete</span>
        </div>
        <div className="w-full h-3 bg-[#e1e9e3] rounded-full overflow-hidden border border-[#d0dad2]">
          <div 
            className="h-full bg-[#8eb89b] rounded-full transition-all duration-500"
            style={{ width: `${(task.day / task.totalDays) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Briefing Section */}
      <section className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase text-[#607367] tracking-wider block mb-1">Daily Task</span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#27322c]">BUILD: {task.title}</h1>
        </div>

        {/* Markdown problem description formatted */}
        <div className="prose text-sm text-[#27322c] leading-relaxed bg-[#e1e9e3] border border-[#d0dad2] rounded-2xl p-5 space-y-3">
          <p className="font-semibold">Build a Knowledge Base chatbot that indexes local markdown files and answers user queries using vector embeddings.</p>
          <h4 className="font-bold text-[#27322c] pt-2">Key Objectives:</h4>
          <ul className="list-disc pl-5 space-y-1 text-[#607367]">
            <li>Set up a vector storage pipeline (ChromaDB or FAISS).</li>
            <li>Implement similarity search for incoming queries.</li>
            <li>Wrap the response in a streamlined UI layer.</li>
          </ul>
        </div>

        {/* Architectural Diagram Placeholder */}
        <div className="border border-dashed border-[#d0dad2] bg-[#e1e9e3]/50 rounded-2xl p-6 text-center">
          <span className="text-xs font-bold text-[#607367] uppercase tracking-wider block mb-2">Architectural Blueprint</span>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#27322c]">
            <span className="bg-[#f4f7f4] px-3 py-1.5 rounded-lg border border-[#d0dad2]">User Query</span> → 
            <span className="bg-[#f4f7f4] px-3 py-1.5 rounded-lg border border-[#d0dad2]">Embedding Model</span> → 
            <span className="bg-[#f4f7f4] px-3 py-1.5 rounded-lg border border-[#d0dad2]">Vector Store</span> → 
            <span className="bg-[#f4f7f4] px-3 py-1.5 rounded-lg border border-[#d0dad2]">LLM Context</span>
          </div>
        </div>
      </section>

      {/* Dual Proof Submission Form */}
      <section className="bg-[#f4f7f4] border border-[#d0dad2] rounded-3xl p-6 sm:p-8">
        <h2 className="text-xl font-black text-[#27322c] mb-6">Submit Daily Proof of Work</h2>

        {submitted ? (
          <div className="bg-[#a1c4ab]/30 border border-[#8eb89b] rounded-2xl p-6 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-[#2f5d3d] mx-auto" />
            <h3 className="text-lg font-bold text-[#27322c]">Proof Submitted Successfully!</h3>
            <p className="text-xs font-medium text-[#607367]">Your streak has been extended. Keep building publicly!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input 1: GitHub Repo URL */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#27322c] uppercase tracking-wider flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub Commit / Repository URL
              </label>
              <input
                type="url"
                required
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/repo"
                className="w-full min-h-[48px] px-4 rounded-xl bg-[#e1e9e3] border border-[#d0dad2] text-sm text-[#27322c] focus:outline-none focus:ring-2 focus:ring-[#8eb89b]"
              />
              {githubUrl && (
                <p className="text-[11px] font-semibold text-[#2f5d3d] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Valid Repository Format Detected
                </p>
              )}
            </div>

            {/* Input 2: LinkedIn Post URL + Template Helper */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="block text-xs font-bold text-[#27322c] uppercase tracking-wider flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn Post URL
                </label>
                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="min-h-[48px] sm:min-h-0 py-2 px-3 bg-[#e1e9e3] hover:bg-[#d0dad2] text-[#27322c] text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{copied ? 'Copied Template!' : '1-Tap Post Template'}</span>
                </button>
              </div>
              <input
                type="url"
                required
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/posts/activity-123"
                className="w-full min-h-[48px] px-4 rounded-xl bg-[#e1e9e3] border border-[#d0dad2] text-sm text-[#27322c] focus:outline-none focus:ring-2 focus:ring-[#8eb89b]"
              />
            </div>

            {/* Sticky Submit Button */}
            <button
              type="submit"
              className="min-h-[48px] w-full bg-[#27322c] hover:bg-[#1a231e] text-[#f4f7f4] font-black rounded-2xl py-3 px-6 shadow-md flex items-center justify-center gap-2 transition-transform active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>SUBMIT PROOF OF WORK</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default DayPage;