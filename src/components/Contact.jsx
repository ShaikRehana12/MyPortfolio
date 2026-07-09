import React from 'react';

const CHANNELS = [
  {
    key: "email",
    label: "Email",
    handle: "shaikrehanaofficial12@gmail.com",
    href: "mailto:shaikrehanaofficial12@gmail.com",
    external: false,
    message: "Best for role details, JD's, and scheduling calls.",
    accent: { fg: "#22d3ee", glow: "rgba(34,211,238,0.55)", bg: "rgba(34,211,238,0.1)", bd: "rgba(34,211,238,0.4)" },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    )
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "/in/shaik-rehana",
    href: "https://linkedin.com",
    external: true,
    message: "Let's connect — open to full-stack & mentoring roles.",
    accent: { fg: "#60a5fa", glow: "rgba(96,165,250,0.55)", bg: "rgba(96,165,250,0.1)", bd: "rgba(96,165,250,0.4)" },
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    )
  },
  {
    key: "github",
    label: "GitHub",
    handle: "/shaikrehana",
    href: "https://github.com",
    external: true,
    message: "Browse real commits — see how the code is built.",
    accent: { fg: "#34d399", glow: "rgba(52,211,153,0.55)", bg: "rgba(52,211,153,0.1)", bd: "rgba(52,211,153,0.4)" },
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    )
  }
];

export default function Contact() {
  return (
    <div className="contact-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .contact-wrap {
          width: 100%;
          max-width: 640px;
          margin: 0 auto;
          padding: 1rem 0;
          text-align: center;
          font-family: 'Inter', sans-serif;
          animation: fadeUp 0.6s ease both;
        }

        .contact-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6ee7b7;
          margin: 0 0 0.9rem;
          text-shadow: 0 0 16px rgba(110,231,183,0.55);
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 0 rgba(52,211,153,0.6), 0 0 10px 2px rgba(52,211,153,0.8);
          animation: dotPulse 1.6s ease-in-out infinite;
        }

        .contact-headline {
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          line-height: 1.15;
          letter-spacing: -0.01em;
          background: linear-gradient(100deg, #ffffff 0%, #a5f3fc 35%, #6ee7b7 65%, #ffffff 100%);
          background-size: 240% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 5s linear infinite;
        }

        .contact-sub {
          margin: 0.7rem 0 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: #e2e8f0;
        }

        .panel {
          margin-top: 2rem;
          background: rgba(2,6,16,0.85);
          border: 1px solid #1e2530;
          border-radius: 24px;
          padding: 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 60px -30px rgba(0,0,0,0.7);
          animation: fadeUp 0.7s ease both 0.15s;
        }
        .panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #22d3ee, #6ee7b7, transparent);
          background-size: 200% auto;
          opacity: 0.85;
          animation: shine 4s linear infinite;
        }

        .recruiter-note {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          color: #f1f5f9;
          text-align: left;
          margin: 0 0 1.5rem;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(52,211,153,0.1);
          border: 1px solid rgba(52,211,153,0.35);
        }
        .recruiter-note b {
          color: #6ee7b7;
          text-shadow: 0 0 10px rgba(110,231,183,0.5);
        }

        .channel-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .channel-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #1e2530;
          background: #0d1117;
          text-decoration: none;
          text-align: left;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          opacity: 0;
          animation: cardIn 0.5s ease both;
        }
        .channel-card:nth-child(1) { animation-delay: 0.25s; }
        .channel-card:nth-child(2) { animation-delay: 0.38s; }
        .channel-card:nth-child(3) { animation-delay: 0.51s; }

        .channel-card:hover {
          transform: translateY(-3px);
          background: #10141c;
          box-shadow: 0 12px 28px -14px var(--glow, rgba(34,211,238,0.5));
        }

        .icon-badge {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .channel-card:hover .icon-badge {
          transform: scale(1.1) rotate(-4deg);
          box-shadow: 0 0 18px var(--glow, rgba(34,211,238,0.5));
        }

        .channel-text { flex: 1; min-width: 0; }
        .channel-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.98rem;
          color: #ffffff;
          margin: 0;
          transition: color 0.25s ease, text-shadow 0.25s ease;
        }
        .channel-card:hover .channel-label {
          color: var(--fg, #67e8f9);
          text-shadow: 0 0 14px var(--glow, rgba(34,211,238,0.5));
        }
        .channel-handle {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.74rem;
          color: #b6c2d4;
          margin: 2px 0 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .channel-msg {
          font-size: 0.85rem;
          color: #dbe4f0;
          margin: 0;
        }

        .arrow {
          flex-shrink: 0;
          color: #475569;
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .channel-card:hover .arrow {
          transform: translateX(4px);
          color: var(--fg, #22d3ee);
        }

        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.55), 0 0 10px 2px rgba(52,211,153,0.8); }
          50% { box-shadow: 0 0 0 6px rgba(52,211,153,0), 0 0 14px 4px rgba(52,211,153,1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shine {
          to { background-position: -240% center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-wrap, .panel, .channel-card, .status-dot, .contact-headline, .panel::before {
            animation: none !important;
          }
        }
      `}</style>

      <p className="contact-kicker">
        <span className="status-dot" />
        Open to opportunities
      </p>
      <h2 className="contact-headline">Let's build something great, together.</h2>
      <p className="contact-sub">Let's align capabilities for full-stack development deployments.</p>

      <div className="panel">
        <p className="recruiter-note">
          <b>For recruiters:</b>&nbsp;actively open to full-stack roles — email for the fastest response, LinkedIn to connect, GitHub to review real code.
        </p>

        <div className="channel-list">
          {CHANNELS.map((c) => (
            <a
              key={c.key}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              className="channel-card"
              style={{ borderColor: c.accent.bd, "--glow": c.accent.glow, "--fg": c.accent.fg }}
            >
              <span
                className="icon-badge"
                style={{ color: c.accent.fg, background: c.accent.bg, borderColor: c.accent.bd }}
              >
                {c.icon}
              </span>
              <span className="channel-text">
                <p className="channel-label">{c.label}</p>
                <p className="channel-handle">{c.handle}</p>
                <p className="channel-msg">{c.message}</p>
              </span>
              <svg className="arrow w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}