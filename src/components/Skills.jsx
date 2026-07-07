import React from 'react';

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      items: [
        { name: "Java", icon: <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M1.7 13.9c0 .6.3 1.2.9 1.6 1.8 1.1 5.3 1.6 8.5 1.6 3.5 0 6.6-.6 8.1-1.7.6-.4.9-1 .9-1.5 0-1.2-1.9-2.1-5-2.6.8-.4 1.2-.9 1.2-1.4 0-1.5-2.6-2.5-6.1-2.5-2 0-3.9.3-5.1.8.4-.7.6-1.5.6-2.2 0-1.8-1.1-2.9-2.9-2.9-.6 0-1.2.2-1.7.5.5.1.9.4 1.1.8.3.4.4.9.4 1.5 0 1-.4 2.1-1.1 3-1.6 1-4.8 1.7-4.8 3.1 0 .6.3 1.2.9 1.6zm10.7 7.5c2.6 0 5-.4 6.3-1.1.4-.2.6-.5.6-.8 0-.5-.5-.9-1.5-1.2-1.4.5-3.4.8-5.4.8-2.3 0-4.5-.4-5.9-.9-1.1.3-1.7.7-1.7 1.2 0 .3.2.6.7.8 1.3.7 3.9 1.2 6.9 1.2z"/></svg> },
        { name: "SQL", icon: <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg> },
        { name: "JavaScript", icon: <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm11.5 11.5c-.5-.3-.8-.5-1.3-.5-.5 0-.8.3-.8.7 0 .9 2.3.8 2.3 2.7 0 .9-.7 1.6-1.8 1.6-1.1 0-1.7-.5-2-1.1l1-.6c.2.4.5.7.9.7.4 0 .7-.2.7-.6 0-1-2.3-.9-2.3-2.7 0-1 .8-1.7 1.9-1.7.9 0 1.5.4 1.8.9l-.7.5zm3.7.3c0-1.1-.6-1.6-1.5-1.6-.7 0-1.2.3-1.4.8l-.9-.5c.4-.8 1.2-1.3 2.3-1.3 1.5 0 2.5.8 2.5 2.4v4.2c0 .4.1.7.3.8v.3h-1.1c-.1-.2-.2-.5-.2-.7-.4.5-1 .8-1.7.8-1.1 0-1.8-.7-1.8-1.7 0-1.1.8-1.6 2.3-1.6h1.2v-.1zm-1.2 2.3c.6 0 1.1-.3 1.2-.8v-.7h-1.1c-.7 0-1.2.2-1.2.8 0 .4.3.7 1.1.7z"/></svg> }
      ]
    },
    {
      title: "Frameworks",
      items: [
        { name: "Spring Boot", icon: <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 12 10 10-4.48 10-12S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg> },
        { name: "React.js", icon: <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg> },
        { name: "Node.js", icon: <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7.5v11L12 22l10-5.5v-11L12 2zm-1 15.5l-5-2.7V10.2l5 2.8v4.5zm0-6.2L6 8.5l5-2.8v4.6zm7 3.5l-5 2.7v-4.5l5-2.8v4.6zm-5-6.3l5-2.7-5-2.8-5 2.8 5 2.7z"/></svg> }
      ]
    },
    {
      title: "Architecture & Data",
      items: [
        { name: "REST APIs", icon: <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M6 8h12M6 12h8M6 16h4"/></svg> },
        { name: "MongoDB", icon: <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s-5 4.5-5 9.5c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5C17 6.5 12 2zm0 14.5c-1.9 0-3.5-1.3-3.5-3.5 0-2.8 2.5-5.7 3.5-6.7 1 1 3.5 3.9 3.5 6.7 0 2.2-1.6 3.5-3.5 3.5z"/></svg> },
        { name: "Microservices", icon: <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> }
      ]
    }
  ];

  return (
    <div className="w-full text-left py-2 block visibility-visible opacity-100 animate-fadeIn">
      <div className="mb-10">
        <h2 className="m-0 text-3xl font-black text-white tracking-tight hover:text-cyan-400 transition-colors duration-300">
          Technical Assets
        </h2>
        <p className="m-0 text-sm text-slate-500 font-mono mt-2">Core toolsets and backend structures I configure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <div key={i} className="bg-slate-950/60 border border-slate-900 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/[0.02] group">
            <h3 className="m-0 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-5 group-hover:text-cyan-400 transition-colors duration-300">
              {group.title}
            </h3>
            <div className="space-y-3.5">
              {group.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-900/40 border border-slate-800/60 p-3 rounded-xl hover:bg-slate-900 transition-colors duration-200">
                  <div className="p-1.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}