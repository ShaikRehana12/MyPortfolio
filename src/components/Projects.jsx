import React, { useState, useEffect, useRef } from 'react';

const PROJECTS = {
  current: {
    name: "Prompt2Project",
    type: "AI-Driven Scaffold Generator",
    tech: ["Spring Boot", "Java", "AI/ML Integration", "Maven", "REST APIs"],
    points: [
      "Building an intelligent engine that automatically generates full-stack project structures from simple user prompts.",
      "Implementing deep integration with LLM APIs to interpret developer intent into functional, production-ready codebases.",
      "Developing robust Spring Boot backend services to manage file system operations and dependency injection.",
      "Ensuring clean, modular code generation adhering to industry-standard architecture patterns.",
      "Architecting scalable API endpoints to handle high-frequency AI prompt requests with low latency.",
      "Optimizing dependency management systems for rapid integration of third-party libraries.",
     // "Designing a user-friendly interface that streamlines the developer workflow from prototype to deployment.",
     // "Writing comprehensive unit tests to ensure code reliability and security across generated project modules."
    ]
  },
  past: [
    {
      name: "SportsConnect",
      type: "Tournament Platform",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      points: [
        "Engineered a production-level tournament hub supporting geospatial queries and dynamic bracket generation.",
        "Configured secure JSON Web Token authentication with granular Role-Based Access Controls.",
        "Optimized Express middleware routes to guarantee fast database record updates and smooth runtime loops.",
        "Implemented real-time match scheduling algorithms that reduced administrative overhead by 40%.",
        "Integrated AWS S3 for secure, high-speed media storage of user-uploaded tournament highlights.",
        "Developed custom RESTful API architecture following clean code and SOLID principles.",
       "Applied Redis caching layers to drastically minimize database query response times.",
        "Built a fully responsive dashboard compatible with all modern mobile and desktop browsers."
      ]
    },
    {
      name: "Secure IoT Blockchain Engine",
      type: "Data Architecture & Security",
      tech: ["Java", "MySQL", "Blockchain", "JUnit"],
      points: [
        "Crafted telemetry distribution channels leveraging Java servlet controllers paired with optimized relational database setups.",
        "Applied cryptographic Proxy Re-Encryption on blockchain ledgers to safeguard device endpoint data.",
        "Maintained robust test coverage requirements and verification pipelines using written JUnit automated scripts.",
        "Designed a decentralized consensus mechanism to ensure immutable data integrity across distributed network nodes.",
        "Architected secure handshake protocols to effectively prevent man-in-the-middle attacks in IoT environments.",
        "Utilized Spring Boot microservices to decouple data processing from the primary UI thread.",
        //"Implemented comprehensive system logging and monitoring using the ELK stack for rapid debugging.",
        //"Optimized MySQL schema indexing to handle high-velocity sensor data ingestion without performance bottlenecks."
      ]
    }
  ]
};

// Fixed palette so every tech tag gets its own color, deterministic by name
// (same tag = same color everywhere), instead of one flat color for all.
const TECH_PALETTE = [
  { text: "#67e8f9", bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.5)" },   // cyan
  { text: "#c4b5fd", bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.5)" }, // violet
  { text: "#fcd34d", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.5)" }, // amber
  { text: "#f9a8d4", bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.5)" }, // pink
  { text: "#6ee7b7", bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.5)" }, // emerald
  { text: "#93c5fd", bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.5)" }, // blue
];

function techColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return TECH_PALETTE[Math.abs(hash) % TECH_PALETTE.length];
}

// Fixed set of twinkling stars/sparks scattered across the card — deterministic
// positions so they don't jump around on re-render.
const STARS = [
  { top: '6%', left: '8%', size: 6, delay: '0s', color: '#67e8f9' },
  { top: '14%', left: '92%', size: 4, delay: '0.6s', color: '#ffffff' },
  { top: '28%', left: '48%', size: 3, delay: '1.2s', color: '#c4b5fd' },
  { top: '40%', left: '4%', size: 5, delay: '0.3s', color: '#fcd34d' },
  { top: '55%', left: '88%', size: 4, delay: '1.6s', color: '#67e8f9' },
  { top: '68%', left: '18%', size: 3, delay: '2.1s', color: '#ffffff' },
  { top: '78%', left: '95%', size: 5, delay: '0.9s', color: '#f9a8d4' },
  { top: '85%', left: '35%', size: 4, delay: '1.4s', color: '#6ee7b7' },
  { top: '10%', left: '65%', size: 3, delay: '1.9s', color: '#93c5fd' },
  { top: '92%', left: '70%', size: 4, delay: '0.2s', color: '#67e8f9' },
  { top: '48%', left: '96%', size: 3, delay: '2.4s', color: '#ffffff' },
  { top: '35%', left: '22%', size: 3, delay: '1.1s', color: '#fcd34d' },
];

function Sparks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            boxShadow: `0 0 6px 1px ${s.color}`,
            animation: `sparkScale 2.6s ease-in-out ${s.delay} infinite`
          }}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const allProjects = [PROJECTS.current, ...PROJECTS.past];
  const timerRef = useRef(null);

  const goTo = (i) => {
    setIndex(i);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % allProjects.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [allProjects.length]);

  const proj = allProjects[index];

  return (
    <section className="w-full py-16 px-6 md:px-12">
      <style>{`
        @keyframes zoomFadeIn {
          0% { opacity: 0; transform: scale(0.92) translateY(16px); filter: blur(6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .project-slide {
          animation: zoomFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes lineReveal {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .point-line {
          opacity: 0;
          animation: lineReveal 0.5s ease-out forwards;
        }
      `}</style>

      {/* Software Projects */}

      <div className="max-w-7xl mx-auto">
        <div
          key={animKey}
          className="project-slide relative bg-white/5 backdrop-blur-lg border border-slate-700 rounded-3xl p-10 shadow-2xl min-h-[550px] overflow-hidden"
        >
          <Sparks />

          {/* Currently Building Indicator */}
          {index === 0 && (
            <div className="relative flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
              <span
                className="font-bold uppercase tracking-widest text-xs"
                style={{ color: '#22d3ee' }}
              >
                Currently Building
              </span>
            </div>
          )}

          <div className="relative grid md:grid-cols-[420px_1fr] gap-12">
            {/* LEFT: title (big) + tech stack */}
            <div className="flex flex-col md:border-r border-slate-700/60 md:pr-10 min-w-0">
              <h4
                className="text-3xl md:text-4xl font-extrabold mb-3 leading-snug"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #22d3ee, #ffffff, #22d3ee)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: '#67e8f9',
                  WebkitTextFillColor: 'transparent',
                  animation: 'textShineSweep 5s linear infinite'
                }}
              >
                {proj.name}
              </h4>
              <p
                className="font-extrabold mb-8 text-sm uppercase tracking-wider"
                style={{ color: '#fbbf24', textShadow: '0 0 12px rgba(251,191,36,0.35)' }}
              >
                {proj.type}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => {
                  const c = techColor(t);
                  return (
                    <span
                      key={i}
                      className="text-xs font-bold px-3 py-1.5 rounded-full border"
                      style={{ color: c.text, backgroundColor: c.bg, borderColor: c.border }}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: points */}
            <ul className="space-y-3 overflow-y-auto max-h-[460px] pr-2">
              {proj.points.map((pt, i) => (
                <li
                  key={i}
                  className="point-line text-base font-medium !text-white flex gap-3"
                  style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  <span className="text-cyan-400 mt-1 shrink-0">●</span> {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {allProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show project ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === index ? '28px' : '8px',
                backgroundColor: i === index ? '#22d3ee' : 'rgba(148,163,184,0.4)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}