import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {  
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'HOME', href: '#home', number: '01' },
    { label: 'ABOUT', href: '#about', number: '02' },
    { label: 'EXPERIENCE', href: '#experience', number: '03' },
    { label: 'PROJECTS', href: '#projects', number: '04' },
    { label: 'CERTIFICATES', href: '#certificates', number: '05' },
    { label: 'CONTACT', href: '#contact', number: '06' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Header */}
      <header
        className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 pointer-events-none transition-transform duration-500 ease-out"
        aria-label="Main navigation header"
      >
        {/* Left: Brand Monogram & Capsule */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="pointer-events-auto flex items-center gap-2.5 select-none group"
          aria-label="Back to home"
        >
          <div className="grid w-8 h-8 place-items-center rounded-full bg-[#111114] text-[#f4f4f1] font-serif text-base italic shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span>R</span>
          </div>
          <div className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full border border-[#111114]/15 bg-[#f4f4f1]/90 backdrop-blur-md font-mono text-[10px] font-semibold tracking-[0.2em] text-[#111114] uppercase shadow-xs transition-colors duration-300 group-hover:border-[#111114]/30">
            <span>Rezky / Portfolio</span>
          </div>
        </a>

        {/* Right: Menu Toggle Pill */}
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111114]/15 bg-[#e8e8e5] text-[#111114] font-mono text-xs font-bold tracking-[0.16em] uppercase shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md active:scale-95 cursor-pointer"
          aria-label="Open menu"
          aria-expanded={isOpen}
          type="button"
        >
          <span>MENU</span>
        </button>
      </header>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Dark Dim Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />

        {/* Layer 1 Sage backdrop */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[480px] lg:w-[500px] bg-[#aeb8b0] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'translate-x-0 delay-0' : 'translate-x-full delay-150'
          }`}
        />

        {/* Layer 2 Charcoal backdrop */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[480px] lg:w-[500px] bg-[#25282a] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'translate-x-0 delay-75' : 'translate-x-full delay-75'
          }`}
        />

        {/* Main Obsidian Menu Drawer */}
        <aside
          className={`absolute top-0 right-0 h-full w-full sm:w-[480px] lg:w-[500px] bg-[#19191c] text-white flex flex-col justify-between p-8 sm:p-10 lg:p-12 overflow-y-auto z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'translate-x-0 delay-150' : 'translate-x-full delay-0'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Drawer"
        >
          {/* Top Right CLOSE Button */}
          <div className="flex justify-end pt-1 pb-4">
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dcdcdc] text-[#111114] font-mono text-xs font-bold tracking-[0.16em] uppercase hover:bg-white transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Close navigation"
            >
              <span>CLOSE</span>
              <span className="text-xs font-bold leading-none">✕</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-6">
            <ul className="flex flex-col gap-1 sm:gap-2 list-none p-0 m-0">
              {navItems.map((item) => (
                <li key={item.href} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group relative flex items-baseline justify-between text-white text-[clamp(2.4rem,5.2vw,3.8rem)] font-bold uppercase leading-[0.96] tracking-[-0.04em] transition-all duration-300 hover:text-[#aeb8b0] hover:translate-x-1.5"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs font-normal text-white/40 tracking-wider group-hover:text-white transition-colors">
                      {item.number}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Socials in Drawer */}
          <div className="pt-6 flex flex-col gap-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              SOCIALS
            </span>
            <div className="flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-[0.14em] text-white/70">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="hover:text-white transition-colors"
              >
                RESUME
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GITHUB
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href={portfolioData.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
