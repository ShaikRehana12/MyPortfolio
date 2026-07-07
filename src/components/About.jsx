import React from 'react';

export default function About() {
  return (
    <div className="w-full text-left max-w-3xl mx-auto py-2 block visibility-visible opacity-100 animate-fadeIn">
      <div className="mb-8">
        <h2 className="m-0 text-3xl font-black text-white tracking-tight hover:text-cyan-400 transition-colors duration-300">
          Professional Bio
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full shadow-lg shadow-cyan-500/50" />
      </div>

      <div className="space-y-6 text-slate-400 text-base leading-relaxed font-normal">
        <p className="m-0">
          I am a driven computer science post-graduate holding a <strong className="text-slate-200 font-semibold">Master of Computer Applications (MCA)</strong> from T.J.P.S College, Guntur, where I achieved the honor of graduating as a <strong className="text-cyan-400 font-bold">Gold Medalist</strong> with an 8.53 CGPA.
        </p>
        <p className="m-0">
          My blended background as a full stack engineer and technical instructor has given me a deep grasp of core runtime operations. I bridge the gap between architectural systems and crisp implementation code, writing clean, reusable structures across both Java enterprise stacks and reactive modern web environments.
        </p>
        <p className="m-0">
          I enjoy troubleshooting runtime limitations, building microservice integrations, and orchestrating full-scale database mutations. I am actively preparing to integrate with a high-velocity development ecosystem to ship software solutions.
        </p>
      </div>
    </div>
  );
}