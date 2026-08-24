import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="contact-section relative z-20 w-full bg-[#111114] text-white flex flex-col justify-between overflow-hidden px-6 sm:px-10 lg:px-24 pt-28 pb-16 text-center min-h-[90vh]"
    >
      {/* Giant Blurred Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-center text-[clamp(6rem,22vw,22rem)] font-bold leading-none tracking-[-0.075em] text-white/[0.025] blur-[3px]"
      >
        CONTACT
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between items-center gap-12">
        {/* Top Tag */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#aeb8b0]">
            Get In Touch
          </p>
        </div>

        {/* Giant Headline & Interactive Email */}
        <div className="flex flex-col items-center gap-8">
          <h2
            id="contact-heading"
            className="text-[clamp(3.2rem,9vw,8rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-white"
          >
            <span className="inline-block mr-[0.25em]">Let's</span>
            <span className="inline-block">Work</span>
            <br />
            <span className="inline-block text-[#aeb8b0] italic font-serif lowercase text-[1.1em]">together.</span>
          </h2>

          <div className="mt-6 flex flex-col items-center gap-8">
            {/* Email with animated underline & Copy Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="group relative inline-flex items-center gap-3 font-sans text-xl sm:text-3xl lg:text-4xl font-light text-white/80 transition-colors duration-300 hover:text-white"
              >
                <span>{personal.email}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#aeb8b0] transition-all duration-300 group-hover:w-full" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 font-mono text-[0.65rem] uppercase tracking-wider text-white/70 hover:text-white hover:border-white/40 transition-all active:scale-95"
              >
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>

            {/* Social Links List */}
            <div className="flex flex-wrap justify-center gap-8 font-mono text-xs uppercase tracking-wider text-white/50 pt-6">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-white transition-colors"
              >
                Direct Message
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Footer Bottom */}
        <div className="flex flex-col items-center gap-4 pt-12 border-t border-white/10 w-full">
          <div className="text-white/50 hover:text-white transition-colors">
            <div className="grid w-8 h-8 place-items-center rounded-full border border-white/20 font-serif text-sm italic">
              R
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Rezky Widi Iskandar · Built with React 19, Tailwind CSS & Impeccable Craft.
          </p>
        </div>
      </div>
    </footer>
  );
}
