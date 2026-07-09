import React from "react";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA) 🥇 Gold Medalist ",
    sub: "CGPA: 8.53",
    institution: "TJPS College, Guntur",
    year: "2022 - 2024",
    icon: "🎓",
  },
  {
    degree: "B.Sc. Mathematics, Statistics, Computer Science",
    sub: "CGPA: 9.6",
    institution: "TJPS College, Guntur",
    year: "2019 - 2022",
    icon: "💻",
  },
  {
    degree: "Intermediate (MPC)",
    sub: "GPA: 9.83",
    institution: "B.H.H.G Junior College, Guntur",
    year: "2017 - 2019",
    icon: "📚",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    sub: "GPA: 9.2",
    institution: "Sri Narendra High School, Guntur",
    year: "2016 - 2017",
    icon: "🏫",
  },
];

export default function Education() {
  return (
    <section className="w-full py-16 px-6">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .edu-card {
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
        }
      `}</style>

      {/* Section Heading */}
      {/* <h2 className="text-3xl md:text-4xl font-extrabold text-center !text-white mb-12">
        <span className="border-b-4 border-cyan-400 pb-2">
          Education
        </span>
      </h2> */}

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-5">
        {EDUCATION.map((item, index) => (
          <div
            key={index}
            className="edu-card bg-white/5 backdrop-blur-lg border border-slate-700 rounded-2xl p-5 flex items-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-4xl">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <h3 className="text-lg md:text-xl font-bold !text-white leading-snug">
                  {item.degree}
                </h3>

                <span className="text-xs font-bold !text-white bg-cyan-600 px-3 py-1 rounded-full whitespace-nowrap">
                  {item.year}
                </span>
              </div>

              <p className="mt-2 text-sm md:text-base font-semibold !text-white">
                {item.institution}
              </p>

              <span className="inline-block mt-3 text-xs font-semibold !text-white bg-emerald-600 px-3 py-1 rounded-full border border-emerald-400">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}