import React, { useState, useEffect, useCallback, useRef } from 'react';

const INTRO = "A quick look at where I've been, where I am, and where I'm headed.";

const CARDS = [
  {
    icon: '🎓',
    label: 'Education',
    title: 'Master of Computer Applications',
    points: [
      'Graduated as Gold Medalist — top of the entire MCA batch',
      'MCA from T.J.P.S College, Guntur — 8.53 CGPA',
      'B.Sc. in Mathematics, Statistics & Computer Science — 9.6 CGPA',
      'Multiple institutional merit certificates for academic excellence',
    ],
    tags: ['MCA (Gold Medalist)', 'B.Sc. MSCs'],
  },
  {
    icon: '💼',
    label: 'Current',
    title: 'Full Stack Development Mentor',
    points: [
      'Currently working as a Java Full Stack Development Mentor (Contract), client-deployed at Accenture Solutions, since Dec 2025',
      'Trained & mentored 65+ engineers in Java, Spring Boot and React across 5 curriculums',
      'Guided 12+ engineering cohorts through the Google India Apprenticeship Program (GIAP)',
      'While mentoring, also actively open to and interviewing for full-time Full Stack Developer roles',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'MERN'],
  },
  {
    icon: '🚀',
    label: 'Future',
    title: 'Building Scalable, Real-World Software',
    points: [
      'Aiming to join a fast-moving product engineering team',
      'Growing deeper into system design and distributed architecture',
      'Shipping production-grade, maintainable features end to end',
      'Continuously learning new frameworks and best practices',
    ],
    tags: ['Growth', 'System Design', 'Full Stack'],
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 60; // horizontal distance between card centers, prevents overlap

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

export default function About() {
  const reducedMotion = useReducedMotion();
  const [typed, setTyped] = useState(reducedMotion ? INTRO : '');
  const [showCursor, setShowCursor] = useState(!reducedMotion);
  const [ready, setReady] = useState(reducedMotion);
  const [centerIndex, setCenterIndex] = useState(1);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) return undefined;
    let charIndex = 0;
    let timeoutId;
    const typeStep = () => {
      charIndex += 1;
      setTyped(INTRO.slice(0, charIndex));
      if (charIndex >= INTRO.length) {
        setShowCursor(false);
        setTimeout(() => setReady(true), 200);
        return;
      }
      timeoutId = setTimeout(typeStep, 16 + Math.random() * 22);
    };
    timeoutId = setTimeout(typeStep, 250);
    return () => clearTimeout(timeoutId);
  }, [reducedMotion]);

  const goTo = useCallback((i) => {
    setCenterIndex(((i % CARDS.length) + CARDS.length) % CARDS.length);
  }, []);

  useEffect(() => {
    if (!ready || reducedMotion) return undefined;
    autoplayRef.current = setInterval(() => {
      setCenterIndex((i) => (i + 1) % CARDS.length);
    }, 4500);
    return () => clearInterval(autoplayRef.current);
  }, [ready, reducedMotion]);

  const pause = () => clearInterval(autoplayRef.current);
  const resume = () => {
    if (reducedMotion) return;
    pause();
    autoplayRef.current = setInterval(() => {
      setCenterIndex((i) => (i + 1) % CARDS.length);
    }, 4500);
  };

  return (
    <div className="w-full text-left max-w-5xl mx-auto py-2 block visibility-visible opacity-100 animate-fadeIn">
      <style>{`
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.4) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.1) rotate(20deg); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px 0 rgba(34,211,238,0.25), 0 0 0 1px rgba(34,211,238,0.35); }
          50% { box-shadow: 0 0 40px 4px rgba(34,211,238,0.45), 0 0 0 1px rgba(34,211,238,0.6); }
        }
        .sparkle {
          position: absolute;
          font-size: 18px;
          pointer-events: none;
          animation: sparkleTwinkle 1.8s ease-in-out infinite;
        }
        .card-center {
          animation: glowPulse 2.4s ease-in-out infinite;
        }
        @media (max-width: 767px) {
          .side-card { display: none !important; }
        }
      `}</style>

      <div className="mb-10">
        {/* <h2 className="m-0 text-3xl font-black tracking-tight" style={{ color: '#ffffff' }}>
          About Me
        </h2> */}
        {/* <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full shadow-lg shadow-cyan-500/50" /> */}
        <p
          className="mt-4 text-base sm:text-lg font-medium leading-relaxed min-h-[1.5em]"
          style={{ color: '#ffffff' }}
        >
          {typed}
          {showCursor && (
            <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 ml-0.5 align-middle animate-pulse" />
          )}
        </p>
      </div>

      <div
        className="relative"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 500ms ease', minHeight: '480px' }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div className="relative w-full flex justify-center" style={{ height: '460px' }}>
          {CARDS.map((card, i) => {
            const offset = (((i - centerIndex + 1) % CARDS.length) + CARDS.length) % CARDS.length - 1;
            const isCenter = offset === 0;
            const shiftPx = offset * (CARD_WIDTH + CARD_GAP);

            return (
              <div
                key={card.label}
                className={`absolute top-0 left-1/2 ${isCenter ? '' : 'side-card'}`}
                style={{
                  width: `${CARD_WIDTH}px`,
                  transform: `translateX(calc(-50% + ${shiftPx}px)) scale(${isCenter ? 1.06 : 0.88})`,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 20 : 10,
                  transition: 'transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 700ms ease',
                }}
              >
                <div
                  className={`relative rounded-2xl border p-6 h-full flex flex-col ${
                    isCenter
                      ? 'card-center border-cyan-400/60 bg-slate-900/95'
                      : 'border-white/10 bg-slate-900/80'
                  }`}
                  style={{ backdropFilter: 'blur(6px)', minHeight: '430px' }}
                >
                  {isCenter && (
                    <>
                      <span className="sparkle" style={{ top: '-10px', left: '-8px', animationDelay: '0s' }}>✨</span>
                      <span className="sparkle" style={{ top: '-6px', right: '10%', animationDelay: '0.6s' }}>✨</span>
                      <span className="sparkle" style={{ bottom: '10%', right: '-10px', animationDelay: '1.1s' }}>✨</span>
                    </>
                  )}

                  <div className="text-4xl mb-3">{card.icon}</div>
                  <span
                    className="text-xs font-bold tracking-[0.2em] uppercase font-mono"
                    style={{ color: '#22d3ee' }}
                  >
                    {card.label}
                  </span>
                  <h3
                    className="mt-2 mb-3 text-lg sm:text-xl font-extrabold tracking-tight"
                    style={{ color: '#ffffff' }}
                  >
                    {card.title}
                  </h3>
                  <ul className="m-0 mb-4 pl-4 space-y-2 list-disc">
                    {card.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-sm font-semibold leading-relaxed"
                        style={{ color: '#ffffff' }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-2.5 py-1 rounded-full font-mono tracking-wide"
                        style={{
                          color: '#67e8f9',
                          backgroundColor: 'rgba(34,211,238,0.12)',
                          border: '1px solid rgba(34,211,238,0.35)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {CARDS.map((card, i) => (
            <button
              key={card.label}
              type="button"
              aria-label={`Highlight ${card.label} card`}
              onClick={() => goTo(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: centerIndex === i ? '22px' : '8px',
                backgroundColor: centerIndex === i ? '#22d3ee' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}