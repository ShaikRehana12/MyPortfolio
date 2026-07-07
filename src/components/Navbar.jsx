import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-[#020408] border-b border-slate-800">
      {/* Brand - Larger Font */}
      <div className="text-2xl font-black text-white tracking-tighter cursor-pointer">
        SR<span className="text-cyan-400">.</span>
      </div>

      {/* Navigation Links - Larger & Bolder */}
      <div className="flex items-center gap-10">
        {['About', 'Projects', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-base font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}

        {/* Dark/Light Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 hover:bg-slate-800 transition-all"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}