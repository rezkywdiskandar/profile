import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { personal, skills } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-20 flex flex-col items-center justify-center bg-[#111114] text-white px-6 sm:px-10 lg:px-24 pt-28 pb-32 overflow-hidden"
    >
      {/* Top Geometric Curved Header */}
      <div
        className="absolute left-1/2 -top-28 h-[160px] w-[140vw] -translate-x-1/2 rounded-[50%] bg-[#111114] pointer-events-none"
        aria-hidden="true"
      />

      <h2 id="about-heading" className="sr-only">
        About Rezky Widi Iskandar, Senior Frontend Engineer & UI/UX Specialist
      </h2>

      {/* Kinetic Word-by-Word Manifesto Statement */}
      <div className="relative z-10 max-w-5xl text-center my-8">
        <p className="font-sans text-[clamp(1.75rem,3.8vw,3.5rem)] leading-[1.22] tracking-[-0.035em]">
          {personal.manifesto.map((item, index) => (
            <span
              key={index}
              className={`mr-[0.25em] inline-block transition-colors duration-300 ${
                item.highlight
                  ? 'font-semibold text-white'
                  : 'font-normal text-white/45'
              }`}
            >
              {item.text}
            </span>
          ))}
        </p>
      </div>

      {/* Infinite Tech Stack Marquee Ticker */}
      <div
        className="relative z-10 mt-16 mb-8 w-full max-w-6xl overflow-hidden border-y border-white/10 py-6"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)'
        }}
      >
        <div className="animate-marquee flex gap-12 sm:gap-20 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white/60 select-none">
          {/* First set */}
          {skills.map((skill, i) => (
            <div key={`skill-1-${i}`} className="flex items-center gap-4 sm:gap-6">
              <span className="text-white hover:text-[#aeb8b0] transition-colors cursor-default">
                {skill}
              </span>
              <span className="text-white/25 select-none font-serif">✦</span>
            </div>
          ))}
          {/* Second duplicate set for seamless infinite loop */}
          {skills.map((skill, i) => (
            <div key={`skill-2-${i}`} className="flex items-center gap-4 sm:gap-6">
              <span className="text-white hover:text-[#aeb8b0] transition-colors cursor-default">
                {skill}
              </span>
              <span className="text-white/25 select-none font-serif">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
