import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Development Mentor (Contract)",
      company: "V5 Global Services (Client Deployment: Accenture Solutions)",
      duration: "Dec 2025 – Present",
      bullets: [
        "Authored 5 production-grade technical blueprints training 65+ software engineers across Core Java, Spring Boot microservices architectures, and modern React.js layouts.",
        "Managed standard code-review loops for the Google India Apprenticeship Program (GIAP), steering 12 engineering cohorts through critical validation gates.",
        "Reviewed and authenticated repository layouts for 18 complex, end-to-end student modular enterprise web builds."
      ]
    },
    {
      role: "Assistant Trainer",
      company: "TalentSprint (Managed via V5 Global Services)",
      duration: "Sep 2025 – Nov 2025",
      bullets: [
        "Conducted 120+ hours of advanced developer labs on Spring Boot architectures, Microservices, and REST API systems.",
        "Optimized developer workspace environments, drastically mitigating dependencies errors and localized environment latency profiles.",
        "Formulated 50+ localized assessments checking capability across complex structures, algorithms, and Java layers."
      ]
    }
  ];

  return (
    <section className="animate-fadeIn text-left max-w-3xl mx-auto py-4">
      <div className="mb-10">
        <h2 className="m-0 text-3xl font-black text-white tracking-tight">Professional History</h2>
        <p className="m-0 text-sm text-slate-500 mt-1">My background in software engineering instructions and deployment gates.</p>
      </div>

      <div className="space-y-12 relative border-l border-slate-900 pl-6 md:pl-8 ml-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border border-slate-800 group-hover:border-[#06b6d4] flex items-center justify-center transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors duration-300" />
            </div>
            
            <span className="inline-block text-[10px] font-mono font-bold tracking-wider text-[#06b6d4] bg-[#06b6d4]/5 border border-[#06b6d4]/20 px-2.5 py-0.5 rounded-md mb-2">
              {exp.duration}
            </span>
            <h3 className="m-0 text-xl font-bold text-white tracking-tight">{exp.role}</h3>
            <h4 className="m-0 text-sm font-semibold text-slate-400 mt-1 mb-4">{exp.company}</h4>
            
            <ul className="space-y-3 pl-0 list-none text-sm text-slate-400">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-[#06b6d4] font-normal leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}