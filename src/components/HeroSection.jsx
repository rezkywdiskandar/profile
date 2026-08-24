import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const { personal } = portfolioData;

  // Typewriter effect for roles
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = personal.roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText === fullText) {
      // Pause at full word before backspacing
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayedText === '') {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % personal.roles.length);
    } else {
      // Typing or deleting speed with natural cadence
      const speed = isDeleting ? 30 : 65;
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, personal.roles]);

  // Smooth 3D Card tilt & specular glare effect
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Smooth tilt angles
    const tiltX = (x - 0.5) * 10;
    const tiltY = -(y - 0.5) * 10;

    setTilt({
      x: tiltX,
      y: tiltY,
      glareX: x * 100,
      glareY: y * 100,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      x: 0,
      y: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false
    });
  };

  return (
    <section
      id="home"
      className="hero-section relative min-h-[calc(100vh-2rem)] grid content-start items-start gap-12 px-6 sm:px-10 lg:px-24 pt-32 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:content-center lg:items-center lg:gap-16"
    >
      {/* Background Subtle Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(17,17,20,0.06)_1.5px,transparent_1.5px)] [background-size:32px_32px]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, white 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, white 40%, transparent 100%)'
        }}
      />

      {/* Left Column: Socials, Location, Greeting, Typewriter, CTA */}
      <div className="relative z-10 max-w-4xl flex flex-col items-start">
        {/* Social Icons Row */}
        <div className="flex items-center gap-5 mb-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111114]/50 hover:text-[#111114] transition-all duration-300 hover:-translate-y-0.5 p-1"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111114]/50 hover:text-[#111114] transition-all duration-300 hover:-translate-y-0.5 p-1"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111114]/50 hover:text-[#111114] transition-all duration-300 hover:-translate-y-0.5 p-1"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-[#111114]/50 hover:text-[#111114] transition-all duration-300 hover:-translate-y-0.5 p-1"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* Location Subtitle */}
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[#111114]/60 mb-3">
          {personal.location}
        </p>

        {/* Massive Greeting */}
        <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl leading-[0.95] tracking-tight text-[#111114] my-2">
          Hi, I’m <span className="italic font-serif font-normal">Rezky.</span>
        </h1>

        {/* Animated Typewriter Role */}
        <div className="mt-3 sm:mt-4 min-h-[3rem] sm:min-h-[3.5rem] flex items-center">
          <p className="font-sans text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#111114]/85">
            <span>{displayedText}</span>
            <span className="inline-block ml-1.5 w-2 sm:w-2.5 h-6 sm:h-8 bg-[#111114] rounded-xs align-middle transition-opacity duration-300 animate-pulse" />
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#111114] text-[#f4f4f1] font-mono text-xs font-semibold uppercase tracking-[0.18em] shadow-[0_8px_20px_rgba(17,17,20,0.12)] transition-all duration-300 hover:bg-[#2c2c31] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(17,17,20,0.22)]"
          >
            <span>Get in touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#111114]/20 bg-transparent text-[#111114] font-mono text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#111114] hover:bg-[#111114]/5 hover:-translate-y-0.5"
          >
            <span>View Projects</span>
          </a>
        </div>
      </div>

      {/* Right Column: 3D Perspective Floating Profile Card */}
      <div
        className="relative z-10 flex w-full justify-center lg:justify-end [perspective:1400px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          className="group relative h-[480px] w-full max-w-[380px] sm:h-[560px] sm:max-w-[440px] lg:h-[620px] lg:max-w-[500px] overflow-hidden rounded-[2.2rem] border border-white/20 bg-[#0b0b0d] shadow-[0_24px_60px_rgba(17,17,20,0.18)] hover:shadow-[0_36px_85px_rgba(17,17,20,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform cursor-pointer"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateZ(0)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Base Card Gradient Overlays */}
          <div className="absolute inset-0 rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_34%),linear-gradient(180deg,#25252a_0%,#131418_48%,#050506_100%)]" />
          <div className="absolute inset-x-8 top-8 h-px bg-white/10" />

          {/* Decorative Code Brackets SVG */}
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-8 top-20 h-20 w-20 -rotate-12 text-white/10 pointer-events-none transition-transform duration-700 group-hover:scale-105"
          >
            <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" fill="currentColor" />
            <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" fill="currentColor" />
            <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" fill="currentColor" />
          </svg>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-8 top-16 h-24 w-24 rotate-12 text-white/10 pointer-events-none transition-transform duration-700 group-hover:scale-105"
          >
            <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" fill="currentColor" />
            <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" fill="currentColor" />
            <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" fill="currentColor" />
          </svg>

          {/* Full Color Base Portrait (Reveals smoothly on hover) */}
          <img
            src={personal.avatar || "/profile.jpg"}
            alt="Rezky Widi Iskandar Portrait"
            className="absolute inset-0 h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />

          {/* Monochrome B&W Overlay Portrait (Fades out flawlessly on hover) */}
          <img
            src={personal.avatar || "/profile.jpg"}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[center_15%] grayscale contrast-[1.12] brightness-[0.96] opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Dynamic Specular Light Glare Overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[2.2rem] transition-opacity duration-500 ease-out mix-blend-overlay"
            style={{
              background: `radial-gradient(600px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.22), transparent 50%)`,
              opacity: tilt.isHovered ? 1 : 0
            }}
          />

          {/* Bottom Shadow Gradient */}
          <div className="absolute inset-x-0 bottom-0 z-20 h-44 rounded-b-[2.2rem] bg-gradient-to-t from-[#050506] via-[#050506]/85 to-transparent pointer-events-none" />

          {/* Floating Status Pill Overlay */}
          <div className="absolute inset-x-5 bottom-5 z-30 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:bg-white/15 group-hover:border-white/25">
            <div>
              <p className="text-sm font-semibold tracking-tight">{personal.name}</p>
              <p className="mt-0.5 text-xs text-white/70 font-mono tracking-wide">{personal.statusBadge}</p>
            </div>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 pointer-events-none opacity-50 hover:opacity-100 transition-opacity duration-300">
        <div className="w-5 h-8 border border-[#111114]/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#111114] rounded-full animate-scroll-glide" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#111114]/70">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
