import React, { useEffect, useState } from 'react';

const ROLES = [
  'Java Full Stack Developer',
  'Full Stack Development Mentor',
  'Spring Boot & React Engineer',
];

const PATH_STEPS = [
  { label: 'Where I Started', sub: 'Learning Java, DSA, and full stack fundamentals' },
  { label: 'Where I Am', sub: 'Mentoring 65+ engineers, building production systems' },
  { label: "Where I'm Headed", sub: 'A full-time Full Stack Developer role' },
];

// Photo carousel — add more image paths here any time; the carousel adapts automatically.
const PHOTOS = ['/rehana.png'];

export default function Hero({ setActiveTab }) {
  const [magicStars, setMagicStars] = useState([]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const stars = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 4}s`,
      duration: `${Math.random() * 4 + 2}s`
    }));
    setMagicStars(stars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setRoleVisible(true);
      }, 400);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (PHOTOS.length <= 1) return;
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-left py-16 lg:py-24 overflow-hidden">

      {/* Background Sparks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {magicStars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-cyan-400 rounded-full opacity-0"
            style={{
              left: star.left, top: star.top, width: `${star.size}px`, height: `${star.size}px`,
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
              animation: `conceptTwinkle ${star.duration} infinite ease-in-out`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 px-6 md:px-12">

        {/* LEFT: Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 rounded-full font-black text-xs uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Open to Full Stack Developer Roles
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h1
              className="uppercase drop-shadow-lg whitespace-nowrap flex items-center gap-3 animate-[theatricalReveal_1.6s_cubic-bezier(0.2,0.8,0.2,1)_forwards]"
              style={{ color: '#ffffff', fontWeight: 700, fontFamily: "'Playfair Display', 'Cinzel', 'Georgia', serif", fontSize: 'clamp(2.25rem, 6vw, 5.5rem)', letterSpacing: '0.06em', textShadow: '0 0 40px rgba(34, 211, 238, 0.35)' }}
            >
              Shaik Rehana
              <span className="text-cyan-300 text-[0.4em] align-top">✦</span>
            </h1>

            {/* Rotating role with fade/slide, same serif family as the name */}
            <h2
              className="text-2xl md:text-4xl min-h-[1.4em] flex items-center gap-1"
              style={{ fontFamily: "'Playfair Display', 'Cinzel', 'Georgia', serif" }}
            >
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-[length:200%_auto] animate-[textShineSweep_5s_linear_infinite] transition-all duration-300"
                style={{ opacity: roleVisible ? 1 : 0, transform: roleVisible ? 'translateY(0px)' : 'translateY(6px)' }}
              >
                {ROLES[roleIndex]}
              </span>
            </h2>
          </div>

          {/* PARAGRAPH — clean justified block, blur-fade entrance, two shimmering highlights.
              A single flowing paragraph (rather than per-word spans) is what lets text-align:
              justify actually work, and keeps the closing emoji sitting naturally in-line. */}
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl animate-[blurFadeIn_1s_ease_forwards] opacity-0"
            style={{ color: '#ffffff', fontWeight: 500, textAlign: 'justify', textJustify: 'inter-word', animationDelay: '300ms' }}
          >
            A Java Full Stack Developer who's spent the last year on both sides of the code
            review &mdash; building production-grade systems, and teaching others to do the
            same. Currently mentoring engineers through the{' '}
            <span className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-[length:200%_auto] animate-[textShineSweep_5s_linear_infinite]">
              Google India Apprenticeship Program
            </span>{' '}
            at Accenture, designing curriculum around{' '}
            <span className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-[length:200%_auto] animate-[textShineSweep_5s_linear_infinite]">
              Java, Spring Boot, and React.js
            </span>
            . Now looking to bring that same rigor to a full-time Full Stack Developer role{' '}
            <span className="text-cyan-300">💻</span>
          </p>

          {/* Signature: real career-progression path, a genuine sequence */}
          <div className="w-full max-w-2xl mt-2">
            <div className="flex items-center gap-2">
              {PATH_STEPS.map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                        i === 1
                          ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-pulse'
                          : i < 1
                          ? 'bg-slate-400 border-slate-300'
                          : 'bg-transparent border-amber-400'
                      }`}
                    />
                    <span
                      className="text-[11px] uppercase tracking-widest text-center"
                      style={{ color: i === 1 ? '#67e8f9' : i === 0 ? '#cbd5e1' : '#fbbf24', fontWeight: 800 }}
                    >
                      {step.label}
                    </span>
                    <span className="text-[11px] text-slate-400 text-center hidden md:block">
                      {step.sub}
                    </span>
                  </div>
                  {i < PATH_STEPS.length - 1 && (
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400/60 to-slate-600/40 -mt-6" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <button
              onClick={() => setActiveTab('projects')}
              className="px-10 py-4 font-black text-sm uppercase tracking-widest rounded-full bg-cyan-500 text-slate-950 transition-all hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              See What I've Built
            </button>
            <button
              className="px-10 py-4 font-black text-sm uppercase tracking-widest rounded-full border-2 border-white text-white transition-all hover:bg-white hover:text-slate-950"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* RIGHT: Photo carousel — crossfades between images, with dot indicators */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] group">
            {PHOTOS.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Shaik Rehana"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
                style={{
                  opacity: i === photoIndex ? 1 : 0,
                  transform: i === photoIndex ? 'scale(1)' : 'scale(1.06)',
                }}
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"; }}
              />
            ))}

            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            {PHOTOS.length > 1 && (
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2">
                {PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPhotoIndex(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === photoIndex ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Cinzel:wght@700&display=swap');

        @keyframes conceptTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.7) translateY(0px); }
          50% { opacity: 0.8; transform: scale(1.2) translateY(-10px); }
        }
        @keyframes textShineSweep {
          to { background-position: 200% center; }
        }
        @keyframes blurFadeIn {
          0% { opacity: 0; filter: blur(6px); transform: translateY(8px); }
          100% { opacity: 1; filter: blur(0px); transform: translateY(0); }
        }
        @keyframes theatricalReveal {
          0% { opacity: 0; letter-spacing: 0.35em; filter: blur(14px); transform: scale(0.97); }
          100% { opacity: 1; letter-spacing: 0.06em; filter: blur(0px); transform: scale(1); }
        }
      `}</style>
    </section>
  );
}