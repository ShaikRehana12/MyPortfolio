import React, { useState, useEffect } from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 ${
        isScrolled 
          ? 'bg-[#020408]/90 backdrop-blur-md border-b border-cyan-900/30 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        
        {/* Name with elegant serif styling */}
        <button 
          onClick={() => setActiveTab('home')} 
          className="text-2xl font-serif font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
        >
          Shaik Rehana
        </button>
        
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-1 bg-[#0a0f18]/80 p-1.5 rounded-full border border-slate-700/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}