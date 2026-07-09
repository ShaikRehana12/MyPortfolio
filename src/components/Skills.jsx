import React, { useEffect, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Generic monoline glyphs (not brand logos) — one per shape key      */
/* ------------------------------------------------------------------ */
const Glyph = ({ shape, color }) => {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (shape) {
    case 'cup': return <svg {...common}><path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3c-.7.9-.7 1.6 0 2.4M12 3c-.7.9-.7 1.6 0 2.4"/></svg>;
    case 'coil': return <svg {...common}><path d="M9 4h4a2 2 0 0 1 2 2v3H8a2 2 0 0 0-2 2v2"/><path d="M15 20h-4a2 2 0 0 1-2-2v-3h7a2 2 0 0 0 2-2v-2"/><circle cx="9" cy="6" r=".6" fill={color}/><circle cx="15" cy="18" r=".6" fill={color}/></svg>;
    case 'plusplus': return <svg {...common}><path d="M15 8a5 5 0 1 0 0 8"/><path d="M18 11v3M16.5 12.5h3M21 11v3M19.5 12.5h3" strokeWidth="1.4"/></svg>;
    case 'cletter': return <svg {...common}><path d="M15 8a5 5 0 1 0 0 8"/></svg>;
    case 'cylinder': return <svg {...common}><ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6"/></svg>;
    case 'gearcyl': return <svg {...common}><ellipse cx="10" cy="6" rx="5.5" ry="2"/><path d="M4.5 6v10c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2" /><path d="M19 13.2v3.6M17.3 15h3.4M20.4 13.9l-2.7 2.6M17.7 13.9l2.7 2.6" strokeWidth="1.3"/></svg>;
    case 'leaf': return <svg {...common}><path d="M5 19c8-1 12-6 13-13-8 0-13 4-13 13Z"/><path d="M6.5 17.5c2-3 4.5-5.5 8-7.5"/></svg>;
    case 'orbit': return <svg {...common}><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.4" fill={color}/></svg>;
    case 'hexA': return <svg {...common}><path d="M12 3l8 3-1.2 9.5L12 21l-6.8-5.5L4 6l8-3Z"/><path d="M9 15l3-7 3 7M10 12.5h4"/></svg>;
    case 'hexNode': return <svg {...common}><path d="M12 3l8 4.6v8.8L12 21l-8-4.6V7.6L12 3Z"/></svg>;
    case 'arrowRight': return <svg {...common}><path d="M4 12h13M13 7l5 5-5 5"/></svg>;
    case 'chevrons': return <svg {...common}><path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 5l-4 14"/></svg>;
    case 'brush': return <svg {...common}><path d="M4 20c0-4 2-5 4-5s3 2 5 2c3 0 4-3 4-6"/><path d="M13 5c2 0 4 2 4 4M17 3l3 3-2 2-3-3Z"/></svg>;
    case 'jsBadge': return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9v6.2c0 1.1-.6 1.6-1.5 1.6S6 16 6 15" /><path d="M13 9h3c1 0 1.6.6 1.6 1.5S17 12 16 12h-1.5c-1 0-1.5.6-1.5 1.5s.5 1.5 1.5 1.5H17"/></svg>;
    case 'link': return <svg {...common}><path d="M9 15l6-6"/><path d="M10 6.5 12 4.7A3.4 3.4 0 1 1 16.8 9.5L15 11.3M14 17.5 12 19.3A3.4 3.4 0 1 1 7.2 14.5L9 12.7"/></svg>;
    case 'nodes': return <svg {...common}><circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.6 8.3 10.6 16M16.4 8.3 13.4 16M8 7h8"/></svg>;
    case 'braces': return <svg {...common}><path d="M9 4c-2 0-2.5 1-2.5 2.5v2c0 1.2-.5 2-1.5 2.5 1 .5 1.5 1.3 1.5 2.5v2C6.5 17 7 18 9 18"/><path d="M15 4c2 0 2.5 1 2.5 2.5v2c0 1.2.5 2 1.5 2.5-1 .5-1.5 1.3-1.5 2.5v2c0 1.5-.5 2.5-2.5 2.5"/></svg>;
    case 'drop': return <svg {...common}><path d="M12 3c3.5 4 5.5 7.4 5.5 10.5a5.5 5.5 0 1 1-11 0C6.5 10.4 8.5 7 12 3Z"/><path d="M12 12v6"/></svg>;
    case 'wave': return <svg {...common}><ellipse cx="12" cy="6" rx="7" ry="2.4"/><path d="M5 6v6c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V6"/><path d="M5 12.2c1.5 3.3 3 5.5 4 7.6.6-1 1-1.8 1.8-1.8s1.2 1.6 2.2 1.6 1-1 1.6-2.4c.7 1 1.4 2 2.2 2.2"/></svg>;
    case 'diamond': return <svg {...common}><path d="M12 3 21 12 12 21 3 12Z"/><path d="M12 8v8M8 12h8" strokeWidth="1.3"/></svg>;
    case 'branch': return <svg {...common}><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8M6 8c0 4 4 3 6 3h4"/></svg>;
    case 'repo': return <svg {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v3h3M9 12h6M9 15h6M9 9h3"/></svg>;
    case 'wrench': return <svg {...common}><path d="M14.5 6.5a3.5 3.5 0 0 0-4.6 4.2L4 16.6V19h2.4l5.9-5.9a3.5 3.5 0 0 0 4.2-4.6l-2.3 2.3-1.8-.6-.6-1.8Z"/></svg>;
    case 'codebox': return <svg {...common}><rect x="3.5" y="4" width="17" height="16" rx="2.2"/><path d="M9.5 9 7 12l2.5 3M14.5 9 17 12l-2.5 3"/></svg>;
    case 'tree': return <svg {...common}><circle cx="12" cy="4.5" r="1.8"/><circle cx="6" cy="12" r="1.8"/><circle cx="18" cy="12" r="1.8"/><circle cx="4" cy="19.5" r="1.6"/><circle cx="8" cy="19.5" r="1.6"/><path d="M12 6.3 6 10.5M12 6.3l6 4.2M6 13.8l-2 4M6 13.8l2 4"/></svg>;
    case 'cube': return <svg {...common}><path d="M12 3 20 7.5v9L12 21 4 16.5v-9Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/></svg>;
    case 'cycle': return <svg {...common}><path d="M4 12a8 8 0 0 1 13.6-5.7M20 12a8 8 0 0 1-13.6 5.7"/><path d="M17.6 3.5v3.2h-3.2M6.4 20.5v-3.2h3.2"/></svg>;
    case 'infinity': return <svg {...common}><path d="M7 9a3.5 3.5 0 1 0 0 7c2 0 3-1.3 5-3.5S15 9 17 9a3.5 3.5 0 1 1 0 7c-2 0-3-1.3-5-3.5S10 9 7 9Z"/></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="8"/></svg>;
  }
};

/* ------------------------------------------------------------------ */
/* Real tech-brand logos via Devicon (https://devicon.dev) — loaded    */
/* below. Concepts with no brand (DSA, OOP, Agile, SDLC, REST, JSON,   */
/* Microservices, plain SQL) keep the custom monoline Glyph above.     */
/* ------------------------------------------------------------------ */
const DeviconIcon = ({ name, size = 18 }) => (
  <i className={`devicon-${name} colored`} style={{ fontSize: size, lineHeight: 1 }} />
);

const IconTile = ({ item, color }) =>
  item.devicon ? <DeviconIcon name={item.devicon} size={18} /> : <Glyph shape={item.shape} color={color} />;

const SKILL_GROUPS = [
  { title: 'Languages', symbol: '{ }', accent: '#fb923c', glow: 'rgba(251,146,60,0.35)', items: [{ name: 'Java', devicon: 'java-plain' }, { name: 'Python', devicon: 'python-plain' }, { name: 'C++', devicon: 'cplusplus-plain' }, { name: 'C', devicon: 'c-plain' }, { name: 'SQL', shape: 'cylinder' }, { name: 'PL/SQL', shape: 'gearcyl' }] },
  { title: 'Frameworks & Libraries', symbol: '⚙', accent: '#4ade80', glow: 'rgba(74,222,128,0.35)', items: [{ name: 'Spring Boot', devicon: 'spring-plain' }, { name: 'Spring MVC', devicon: 'spring-plain' }, { name: 'React.js', devicon: 'react-original' }, { name: 'Angular', devicon: 'angularjs-plain' }, { name: 'Node.js', devicon: 'nodejs-plain' }, { name: 'Express.js', devicon: 'express-original' }] },
  { title: 'Web & APIs', symbol: '</>', accent: '#38bdf8', glow: 'rgba(56,189,248,0.35)', items: [{ name: 'HTML5', devicon: 'html5-plain' }, { name: 'CSS3', devicon: 'css3-plain' }, { name: 'JavaScript (ES6+)', devicon: 'javascript-plain' }, { name: 'REST APIs', shape: 'link' }, { name: 'Microservices', shape: 'nodes' }, { name: 'JSON', shape: 'braces' }] },
  { title: 'Databases & Storage', symbol: '⛁', accent: '#a78bfa', glow: 'rgba(167,139,250,0.35)', items: [{ name: 'MongoDB', devicon: 'mongodb-plain' }, { name: 'MySQL', devicon: 'mysql-plain' }, { name: 'Oracle SQL', devicon: 'oracle-original' }] },
  { title: 'Tools & DevOps', symbol: '⚒', accent: '#f472b6', glow: 'rgba(244,114,182,0.35)', items: [{ name: 'Git', devicon: 'git-plain' }, { name: 'GitHub', devicon: 'github-original' }, { name: 'GitLab', devicon: 'gitlab-plain' }, { name: 'Postman', devicon: 'postman-plain' }, { name: 'VS Code', devicon: 'vscode-plain' }] },
  { title: 'Core Competencies', symbol: '✦', accent: '#facc15', glow: 'rgba(250,204,21,0.35)', items: [{ name: 'DSA', shape: 'tree' }, { name: 'Object-Oriented Programming', shape: 'cube' }, { name: 'Agile / Scrum', shape: 'cycle' }, { name: 'SDLC', shape: 'infinity' }] },
];

const STARS = Array.from({ length: 28 }, (_, i) => ({ top: (i * 37) % 100, left: (i * 61) % 100, size: 1 + (i % 3), delay: (i % 10) * 0.3, duration: 2.5 + (i % 5) * 0.6 }));

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 50); return () => clearTimeout(t); }, []);

  // Load Devicon (real brand logos for Java, React, MySQL, Git, etc.) once.
  useEffect(() => {
    const id = 'devicon-cdn-stylesheet';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="relative w-full text-left py-2 block overflow-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes twinkle { 0%, 100% { opacity: 0.15; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.3); } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes underlineGrow { from { width: 0; } to { width: 48px; } }
        @keyframes caretBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .star { position: absolute; border-radius: 9999px; background: #fff; animation: twinkle ease-in-out infinite; pointer-events: none; }
        .gradient-heading { font-family: 'Space Grotesk', sans-serif; background: linear-gradient(90deg, #ffffff, #67e8f9, #ffffff); background-size: 200% auto; -webkit-background-clip: text; color: transparent; animation: gradientShift 4s ease-in-out infinite; letter-spacing: -0.02em; }
        .underline-bar { animation: underlineGrow 900ms cubic-bezier(0.22,1,0.36,1) 300ms both; }
        .caret { display: inline-block; width: 2px; margin-left: 2px; background: #67e8f9; animation: caretBlink 1s step-end infinite; }
        .skill-card { opacity: 0; } .skill-card.mounted { animation: fadeSlideUp 600ms cubic-bezier(0.22,1,0.36,1) forwards; }
        .group-title { font-family: 'JetBrains Mono', monospace; }
        .chip { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s, i) => <span key={i} className="star" style={{ top: `${s.top}%`, left: `${s.left}%`, width: `${s.size}px`, height: `${s.size}px`, animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }} />)}
      </div>

      <div className="relative mb-10">
        {/* <h2 className="gradient-heading m-0 text-[2.75rem] leading-tight font-bold">Technical Skills</h2> */}
        {/* <div className="underline-bar h-1 bg-cyan-500 mt-3 rounded-full shadow-lg shadow-cyan-500/50" /> */}
        <p className="m-0 text-[15px] mt-4 font-medium tracking-wide" style={{ color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
          The languages, frameworks, and tools I build with day to day<span className="caret">&nbsp;</span>
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i} className={`skill-card ${mounted ? 'mounted' : ''} bg-slate-950/70 border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 group`} style={{ borderColor: 'rgba(148,163,184,0.15)', animationDelay: `${i * 110}ms` }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = group.accent; e.currentTarget.style.boxShadow = `0 12px 40px -8px ${group.glow}`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-base font-mono font-bold w-9 h-9 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" style={{ color: group.accent, backgroundColor: `${group.accent}1a`, border: `1px solid ${group.accent}55` }}>{group.symbol}</span>
              <h3 className="group-title m-0 text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300" style={{ color: '#94a3b8' }} onMouseEnter={(e) => (e.currentTarget.style.color = group.accent)} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, idx) => (
                <div key={idx} className="chip flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-xl transition-all duration-200 hover:scale-105 cursor-default" onMouseEnter={(e) => { e.currentTarget.style.borderColor = group.accent; e.currentTarget.style.backgroundColor = `${group.accent}14`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.backgroundColor = 'rgba(15,23,42,0.6)'; }}>
                  <IconTile item={item} color={group.accent} />
                  <span className="text-[13px] font-semibold tracking-tight whitespace-nowrap" style={{ color: '#f1f5f9' }}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}