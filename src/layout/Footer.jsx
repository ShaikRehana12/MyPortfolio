import React from 'react';

const CONTACT = {
  email: 'shaikrehanaofficial12@gmail.com',
  phone: '+91 91103 91388',
  location: 'Guntur, Andhra Pradesh',
  linkedin: '#', // TODO: replace with your actual LinkedIn profile URL
  github: '#',   // TODO: replace with your actual GitHub profile URL
};

const QUICK_LINKS = [
  { label: 'Home', tab: 'home' },
  { label: 'Projects', tab: 'projects' },
  { label: 'Skills', tab: 'skills' },
  { label: 'Contact', tab: 'contact' },
];

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.24h4V23h-4V8.24zM8.5 8.24h3.83v2.01h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.75c0-1.61-.03-3.68-2.24-3.68-2.25 0-2.6 1.75-2.6 3.56V23h-4V8.24z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.71 5.42-5.29 5.7.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
    </svg>
  );
}

export default function Footer({ setActiveTab }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#020408] overflow-hidden">

      {/* faint ambient glow, echoes the hero without competing with it */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* About */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <h3
            className="text-2xl"
            style={{ color: '#ffffff', fontWeight: 700, fontFamily: "'Playfair Display', 'Cinzel', 'Georgia', serif", letterSpacing: '0.04em' }}
          >
            Shaik Rehana
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-sm" style={{ fontWeight: 500 }}>
            Java Full Stack Developer mentoring the next wave of engineers while building
            production-grade systems of my own &mdash; one clean commit at a time.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="tech-symbol-hover w-11 h-11 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center text-cyan-300"
            >
              <MailIcon className="w-5 h-5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="tech-symbol-hover w-11 h-11 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center text-cyan-300"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="tech-symbol-hover w-11 h-11 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center text-cyan-300"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-black">Navigate</span>
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.tab}
                onClick={() => setActiveTab && setActiveTab(link.tab)}
                className="glow-text-hover text-left text-sm text-slate-300 w-fit"
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact details */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-black">Get in Touch</span>
          <div className="flex flex-col gap-2 text-sm text-slate-300" style={{ fontWeight: 500 }}>
            <a href={`mailto:${CONTACT.email}`} className="glow-text-hover w-fit break-all">
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="glow-text-hover w-fit">
              {CONTACT.phone}
            </a>
            <span className="text-slate-400">📍 {CONTACT.location}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            &copy; {year} Shaik Rehana. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}