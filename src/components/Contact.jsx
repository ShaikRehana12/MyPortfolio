import React from 'react';

export default function Contact() {
  return (
    <div className="w-full max-w-xl mx-auto py-4 block visibility-visible opacity-100 animate-fadeIn text-center">
      <div className="mb-8">
        <h2 className="m-0 text-3xl font-black text-white tracking-tight hover:text-cyan-400 transition-colors duration-300">
          Secure Gateway
        </h2>
        <p className="m-0 text-xs font-mono text-slate-500 mt-2">Let's align capabilities for full stack development deployments.</p>
      </div>

      <div className="bg-slate-950/80 border border-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Connection Terminal Grid Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8 text-left">
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl">
            <span className="block text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold mb-1">Target Endpoint</span>
            <span className="text-xs font-mono text-cyan-400 font-semibold">shaikrehanaofficial12@gmail.com</span>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl">
            <span className="block text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold mb-1">Availability</span>
            <span className="text-xs font-mono text-green-400 font-semibold">Immediate / Open</span>
          </div>
        </div>

        {/* Action Call Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="mailto:shaikrehanaofficial12@gmail.com" 
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500 text-slate-950 rounded-xl no-underline hover:bg-cyan-400 shadow-lg shadow-cyan-500/10 cursor-pointer transform active:scale-[0.98] transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
            Send Message
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider border border-slate-800 bg-slate-900/60 text-slate-200 rounded-xl no-underline hover:bg-slate-800 cursor-pointer transform active:scale-[0.98] transition-all duration-150"
          >
            <svg className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            LinkedIn Matrix
          </a>
        </div>
      </div>
    </div>
  );
}