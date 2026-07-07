import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const modules = [
    {
      name: "SportsConnect",
      type: "Online Sports Tournament Platform",
      badge: "MERN Architecture",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Engine", "RBAC Access"],
      points: [
        "Engineered a production tournament hub supporting geospatial queries and dynamic tournament brackets generation patterns.",
        "Configured security gates via structured JSON Web Token authentication combined with granular Role-Based Access Controls.",
        "Optimized Express middleware routes to guarantee fast database record updates and smooth operational runtime loops."
      ]
    },
    {
      name: "Secure IoT Blockchain Sharing Engine",
      type: "Data Architecture & Crypto Security",
      badge: "Java Enterprise",
      tech: ["Enterprise Java", "JSP View Engine", "MySQL", "Proxy Re-Encryption", "Blockchain Core", "JUnit Frameworks"],
      points: [
        "Crafted telemetry distribution channels leveraging Java servlet controllers paired with optimized relational database setups.",
        "Applied cryptographic Proxy Re-Encryption configurations on top of blockchain ledgers to safeguard device endpoints data.",
        "Maintained robust coverage requirements and verification pipelines using written JUnit automated scripts."
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % modules.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [modules.length]);

  return (
    <section className="animate-fadeIn text-left max-w-2xl mx-auto py-4">
      <div className="mb-10 text-center">
        <h2 className="m-0 text-3xl font-black text-white tracking-tight">Software Portals</h2>
        <p className="m-0 text-sm text-slate-500 mt-1">Interactive live slider showing core applications code.</p>
      </div>

      <div className="relative min-h-[400px] border border-slate-900 bg-slate-950/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl">
        
        <div className="transition-all duration-500 ease-in-out transform">
          <div className="flex justify-between items-start gap-4 mb-3">
            <div>
              <h3 className="m-0 text-2xl font-black text-white tracking-tight">
                {modules[activeIndex].name}
              </h3>
              <p className="m-0 text-xs font-semibold text-[#06b6d4] font-mono mt-1 italic">
                {modules[activeIndex].type}
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-3 py-1 rounded-full whitespace-nowrap">
              {modules[activeIndex].badge}
            </span>
          </div>

          <ul className="text-sm text-slate-400 space-y-3.5 pl-0 list-none mt-6 border-t border-slate-900 pt-6">
            {modules[activeIndex].points.map((pt, idx) => (
              <li key={idx} className="relative pl-5 before:content-['▪'] before:absolute before:left-0 before:text-[#06b6d4]/70 leading-relaxed">
                {pt}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-1.5 pb-5 border-b border-slate-900">
            {modules[activeIndex].tech.map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono font-bold text-slate-200 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4">
            <div className="flex gap-2">
              {modules.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 border-none ${
                    activeIndex === i ? 'w-6 bg-[#06b6d4]' : 'w-2 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % modules.length)}
              className="text-xs font-mono font-bold tracking-wider text-[#06b6d4] bg-[#06b6d4]/5 hover:bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-4 py-2 rounded-xl cursor-pointer transition-colors duration-200"
            >
              Next Project →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}