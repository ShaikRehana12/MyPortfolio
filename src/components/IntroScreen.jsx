import React, { useEffect, useState } from 'react';

export default function IntroScreen({ onEnter }) {
  const [shimmerStars, setShimmerStars] = useState([]);

  useEffect(() => {
    const stars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 3}s`
    }));
    setShimmerStars(stars);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020408] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
      
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {shimmerStars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-cyan-400 rounded-full opacity-0"
            style={{
              left: star.left, top: star.top, width: `${star.size}px`, height: `${star.size}px`,
              boxShadow: '0 0 8px rgba(34, 211, 238, 0.85)',
              animation: `twinkleAndDrift ${star.duration} infinite ease-in-out`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center justify-center relative z-10">
        
        {/* HELLO WORLD - White & Bold */}
        <p
          className="m-0 text-sm md:text-base tracking-[0.35em] uppercase flex items-center justify-center gap-2 mb-8 animate-[contentFadeIn_1.2s_ease_forwards] delay-[400ms] opacity-0"
          style={{ color: '#ffffff', fontWeight: 900 }}
        >
          <span>HELLO WORLD</span> 
          <span className="animate-[waveHand_2s_infinite] inline-block origin-[70%_70%]">👋</span> 
          <span>✨</span>
        </p>

        {/* I'M - White & Bold */}
        <p
          className="m-0 text-base md:text-lg tracking-[0.4em] uppercase mb-4 animate-[contentFadeIn_1.4s_ease_forwards] delay-[700ms] opacity-0"
          style={{ color: '#ffffff', fontWeight: 900 }}
        >
          I'm
        </p>

        {/* SHAIK REHANA - solid white, bold, no transparent gradient */}
        <h1 
          className="m-0 text-5xl md:text-7xl font-black tracking-[0.25em] text-white uppercase select-none relative overflow-hidden whitespace-nowrap mb-6 animate-[theatricalReveal_2s_cubic-bezier(0.2,0.8,0.2,1)_forwards]"
          style={{ fontFamily: "'Playfair Display', 'Cinzel', 'Georgia', serif", textShadow: '0 0 40px rgba(34, 211, 238, 0.55), 0 0 2px rgba(255,255,255,0.9)' }}
        >
          <span className="relative text-white font-black inline-block">
            SHAIK REHANA
            {/* subtle animated shine overlay, purely additive so base text stays fully opaque white */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100/70 to-transparent bg-[length:200%_auto] mix-blend-overlay animate-[textShineSweep_4s_linear_infinite] pointer-events-none"
            />
          </span>
        </h1>
        
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8 animate-[lineWidthReveal_1.8s_cubic-bezier(0.2,0.8,0.2,1)_forwards] w-[65%]" />

        {/* DEVELOPER INFO - White & Bold */}
        <p
          className="m-0 text-base md:text-lg tracking-wider whitespace-nowrap flex items-center justify-center gap-3 mb-12 animate-[contentFadeIn_1.6s_ease_forwards] delay-[1300ms] opacity-0"
          style={{ color: '#ffffff', fontWeight: 900 }}
        >
          <span>Frontend & Software Developer</span> 
          <span className="text-cyan-400 text-xl">💻</span> 
          <span style={{ color: '#e2e8f0', fontWeight: 900 }}>|</span>
          <span>Crafting clean digital web applications</span> 
          <span className="text-cyan-400 text-xl">🚀</span>
        </p>

        {/* Button */}
        <div className="animate-[contentFadeIn_1.8s_ease_forwards] delay-[1700ms] opacity-0">
          <button
            onClick={onEnter}
            className="inline-flex items-center gap-3 px-12 py-4 text-[10px] font-mono font-black uppercase tracking-[0.25em] border border-cyan-500/40 text-white bg-transparent rounded-full cursor-pointer overflow-hidden relative group transition-all duration-500 hover:border-cyan-400"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[loopingShine_2s_linear_infinite] pointer-events-none" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-950 to-slate-950 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            
            <span className="relative z-10 flex items-center gap-3 font-black text-xs text-white">
              Click Here
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes textShineSweep { 0% { background-position: -100% center; } 100% { background-position: 200% center; } }
        @keyframes loopingShine { 0% { transform: translateX(-150%) skewX(-25deg); } 50%, 100% { transform: translateX(250%) skewX(-25deg); } }
        @keyframes twinkleAndDrift { 0%, 100% { opacity: 0; transform: scale(0.7) translateY(0px); } 50% { opacity: 0.8; transform: scale(1.25) translateY(-15px); } }
        @keyframes waveHand { 0%, 100% { transform: rotate(0deg) } 10%, 20%, 30% { transform: rotate(14deg) } 40%, 50% { transform: rotate(-4deg) } }
        @keyframes theatricalReveal { 0% { opacity: 0; letter-spacing: 0.45em; filter: blur(14px); transform: scale(0.97); } 100% { opacity: 1; letter-spacing: 0.25em; filter: blur(0px); transform: scale(1); } }
        @keyframes lineWidthReveal { 0% { width: 0%; opacity: 0; } 100% { width: 65%; opacity: 1; } }
        @keyframes contentFadeIn { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}