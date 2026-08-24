import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const { experiences } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExp = experiences[activeIndex];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-20 min-h-[90vh] bg-[#111114] text-white px-6 sm:px-10 lg:px-24 py-20 overflow-hidden flex flex-col justify-between"
    >
      <h2 id="experience-heading" className="sr-only">
        Professional Experience Archive
      </h2>

      {/* Giant Blurred Watermark Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-center text-[clamp(4.5rem,16vw,16rem)] font-bold leading-none tracking-[-0.075em] text-white/[0.03] blur-[3px]"
      >
        EXPERIENCES
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col h-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex shrink-0 items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#aeb8b0]">
              Career Archive
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-semibold uppercase tracking-[-0.035em] text-white">
              Experiences
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest mr-2">Select milestone:</span>
            {experiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-[#f4f4f1] text-[#111114] shadow-md scale-105'
                    : 'border border-white/20 bg-white/5 text-white/60 hover:text-white hover:border-white/40'
                }`}
                aria-label={`View experience ${exp.number}: ${exp.company}`}
              >
                {exp.number} · {exp.company.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Split Card */}
        <article
          className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] overflow-hidden rounded-[2rem] border border-white/12 bg-[#17181c] text-white shadow-[0_32px_90px_rgba(0,0,0,0.45)] transition-all duration-500"
        >
          {/* Left Column: Details & Highlights */}
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-white/50">
                <span>Career milestone</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold text-[#aeb8b0]">
                  {activeExp.type}
                </span>
                <span className="text-white/40 font-mono">
                  {activeExp.period}
                </span>
              </div>

              {/* Title & Company */}
              <h3 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-bold uppercase leading-[1.02] tracking-[-0.04em] text-white">
                {activeExp.role}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-semibold uppercase tracking-[0.1em] text-[#aeb8b0]">
                {activeExp.company} · <span className="font-normal text-white/60 normal-case">{activeExp.location}</span>
              </p>

              {/* Summary */}
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl">
                {activeExp.summary}
              </p>

              {/* 4-Point Numbered Highlights Grid */}
              <div className="mt-8">
                <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#aeb8b0]">
                  Key Engineering Contributions
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeExp.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 border-t border-white/10 pt-3 pr-2"
                    >
                      <span className="font-mono text-xs font-semibold text-[#aeb8b0]">
                        0{hIdx + 1}
                      </span>
                      <span className="text-xs leading-snug text-white/85">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              {activeExp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-xs font-medium text-white/70 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Media & Watermark Numeral */}
          <div className="group relative min-h-[260px] lg:min-h-full overflow-hidden border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10 bg-black cursor-pointer">
            <img
              src={activeExp.image}
              alt={`${activeExp.role} at ${activeExp.company}`}
              className="h-full w-full object-cover grayscale-[35%] contrast-[1.03] brightness-[0.96] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] transform-gpu [backface-visibility:hidden] [transform:translateZ(0)] will-change-transform"
            />
            {/* Top/Bottom Shadow Overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 group-hover:from-black/70 group-hover:via-black/10 group-hover:to-black/25 transition-all duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]" />

            {/* Big Watermark Numeral */}
            <p className="absolute right-6 top-6 font-mono text-4xl sm:text-5xl font-bold text-white/50 group-hover:text-white/85 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none">
              {activeExp.number}
            </p>

            {/* Bottom Meta Pill */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs text-white/80">
              <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 group-hover:border-white/30 group-hover:bg-black/75 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
                {activeExp.period} · {activeExp.duration}
              </span>
              <span className="hidden sm:inline-block text-xs text-white/40 group-hover:text-white/70 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase tracking-wider">
                Archive {activeExp.number} / 03
              </span>
            </div>
          </div>
        </article>

        {/* Mobile/Tablet Pagination Controls */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <button
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : experiences.length - 1))}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-mono font-semibold"
          >
            ← Previous
          </button>
          <span className="font-mono text-xs text-white/60">
            {activeExp.number} / 0{experiences.length}
          </span>
          <button
            onClick={() => setActiveIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : 0))}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-mono font-semibold"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
