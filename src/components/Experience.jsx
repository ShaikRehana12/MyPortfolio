import React, { useState, useEffect } from 'react';
import profilePhoto from '../assets/Profile.png';
const EXPERIENCES = [
  {
    role: "Full Stack Development Mentor (Contract)",
    company: "V5 Global Services (Client Deployment: Accenture Solutions)",
    duration: "Dec 2025 – Present",
    bullets: [
      "Authored 5 production-grade technical blueprints training 65+ software engineers across Core Java, Spring Boot microservices architectures, and modern React.js layouts.",
      "Managed standard code-review loops for the Google India Apprenticeship Program (GIAP), steering 12 engineering cohorts through critical validation gates.",
      "Reviewed and authenticated repository layouts for 18 complex, end-to-end student modular enterprise web builds.",
      "Conducted 40+ coding assessments and Data Structures & Algorithms (DSA) problem-solving sessions to evaluate engineering proficiency across cohorts."
    ]
  },
  {
    role: "Full Stack Development Mentor",
    company: "TalentSprint (Managed via V5 Global Services)",
    duration: "Sep 2025 – Nov 2025",
    bullets: [
      "Conducted 120+ hours of advanced developer labs on Spring Boot architectures, Microservices, and REST API systems.",
      "Delivered hands-on client-side development modules alongside REST API and Microservices coursework to strengthen trainee full-stack fluency.",
      "Optimized developer workspace environments, drastically mitigating dependency errors and localized environment latency profiles.",
      "Formulated 50+ localized assessments checking capability across complex structures, algorithms, and Java layers."
    ]
  }
];

// Same gradient-shine treatment used for project titles, reused here for role
// titles so both pages read as one consistent visual language.
const shineTextStyle = {
  backgroundImage: 'linear-gradient(90deg, #22d3ee, #ffffff, #22d3ee)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: '#67e8f9',
  WebkitTextFillColor: 'transparent',
  animation: 'textShineSweep 5s linear infinite'
};

function Typewriter({ text, speed = 35 }) {
  const [shown, setShown] = useState('');

  useEffect(() => {
    setShown('');
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {shown}
      <span
        className="inline-block w-[2px] h-[1em] align-middle ml-0.5 bg-cyan-300"
        style={{ animation: 'caretBlink 0.9s steps(1) infinite' }}
      />
    </span>
  );
}

// Small fixed spark offsets reused around every company name — cheap and
// deterministic so it doesn't recalculate positions on every render.
const NAME_SPARKS = [
  { top: '-6px', left: '-10px', size: 4, color: '#67e8f9', delay: '0s' },
  { top: '2px', left: '104%', size: 3, color: '#fcd34d', delay: '0.7s' },
  { top: '80%', left: '92%', size: 3, color: '#c4b5fd', delay: '1.3s' },
];

function FloatingCompanyName({ name }) {
  return (
    <h4 className="relative inline-block m-0 mt-2 mb-4">
      <span
        className="relative inline-block text-sm font-extrabold uppercase tracking-wider"
        style={{
          color: '#fbbf24',
          textShadow: '0 0 12px rgba(251,191,36,0.4)',
          animation: 'floatText 4s ease-in-out infinite'
        }}
      >
        {name}
        {NAME_SPARKS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
              boxShadow: `0 0 6px 1px ${s.color}`,
              animation: `sparkScale 2.4s ease-in-out ${s.delay} infinite`
            }}
          />
        ))}
      </span>
    </h4>
  );
}
function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-white/5 backdrop-blur-lg shadow-2xl aspect-[4/5]">
        {!imgError ? (
           <img
            src={profilePhoto}
            alt="Shaik Rehana"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-6xl font-black"
            style={shineTextStyle}
          >
            SR
          </div>
        )}
        {/* subtle cyan glow ring */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-cyan-400/20" />
      </div>

      {/* small floating spark accents around the photo */}
      <span
        className="absolute -top-2 -left-2 w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: '#67e8f9', boxShadow: '0 0 8px 2px rgba(103,232,249,0.6)', animation: 'sparkScale 2.6s ease-in-out infinite' }}
      />
      <span
        className="absolute top-1/3 -right-2 w-2 h-2 rounded-full"
        style={{ backgroundColor: '#fcd34d', boxShadow: '0 0 8px 2px rgba(252,211,77,0.6)', animation: 'sparkScale 2.6s ease-in-out 0.8s infinite' }}
      />
      <span
        className="absolute -bottom-2 left-1/3 w-2 h-2 rounded-full"
        style={{ backgroundColor: '#c4b5fd', boxShadow: '0 0 8px 2px rgba(196,181,253,0.6)', animation: 'sparkScale 2.6s ease-in-out 1.5s infinite' }}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section className="w-full py-16 px-6 md:px-12">
      <style>{`
        @keyframes textShineSweep { to { background-position: 200% center; } }
        @keyframes sparkScale {
          0% { transform: scale(0); opacity: 0; }
          15% { transform: scale(1.25); opacity: 1; }
          80% { transform: scale(1); opacity: 0.85; }
          100% { transform: scale(0.8); opacity: 0; }
        }
        @keyframes caretBlink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes floatText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Professional History */}
        <div className="mb-12">
          <p
            className="m-0 text-lg md:text-xl font-bold text-white text-center tracking-wide"
            style={{ textShadow: '0 0 18px rgba(255,255,255,0.35)' }}
          >
            <Typewriter text="My background in software engineering instruction and deployment gates." />
          </p>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* LEFT: photo */}
          <div className="md:sticky md:top-24">
            <ProfilePhoto />
          </div>

          {/* RIGHT: experience timeline */}
          <div className="space-y-12 relative border-l border-slate-800 pl-6 md:pl-8">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border border-slate-800 group-hover:border-[#06b6d4] flex items-center justify-center transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors duration-300" />
                </div>

                <span className="inline-block text-[10px] font-mono font-bold tracking-wider text-[#67e8f9] bg-[#06b6d4]/10 border border-[#06b6d4]/30 px-2.5 py-0.5 rounded-md mb-2">
                  {exp.duration}
                </span>

                <h3 className="m-0 text-2xl font-extrabold tracking-tight" style={shineTextStyle}>
                  {exp.role}
                </h3>

                <FloatingCompanyName name={exp.company} />

                <ul className="space-y-3 pl-0 list-none text-base text-slate-200">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-[#22d3ee] font-medium leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}