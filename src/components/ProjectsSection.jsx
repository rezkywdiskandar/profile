import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function ProjectMediaSlider({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = project.images || [{ src: project.image, label: 'Overview', description: project.summary }];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const activeImage = images[currentSlide];

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image Box */}
      <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#111114]/12 bg-[#17181c] shadow-lg">
        <img
          src={activeImage.src}
          alt={activeImage.label}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Watermark Big Number */}
        <p className="pointer-events-none absolute right-5 top-4 z-20 font-mono text-3xl sm:text-4xl font-bold text-white/80 select-none">
          {project.number}
        </p>

        {/* Slide Navigation Buttons */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={prevSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Caption & Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1 font-mono">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold tracking-wider text-[#111114]/50">
              0{currentSlide + 1} / 0{images.length}
            </span>
            <span className="text-xs font-bold tracking-wider text-[#111114] uppercase">
              {activeImage.label}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-[#111114]/65 font-sans leading-snug line-clamp-1">
            {activeImage.description}
          </p>
        </div>

        {/* Pill Indicators */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 shrink-0" aria-label="Project slide navigation">
            {images.map((_, sIdx) => (
              <button
                key={sIdx}
                type="button"
                onClick={() => setCurrentSlide(sIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === sIdx
                    ? 'w-7 bg-[#111114]'
                    : 'w-3 bg-[#111114]/20 hover:bg-[#111114]/40'
                }`}
                aria-label={`Go to slide ${sIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="projects-section relative z-30 -mt-[6vh] sm:-mt-[8vh] rounded-t-[2.5rem] bg-[#f4f4f1] text-[#111114] px-6 sm:px-10 lg:px-24 pt-20 pb-28 shadow-[0_-24px_60px_rgba(0,0,0,0.18)]"
    >
      <h2 id="projects-heading" className="sr-only">
        Selected Engineering Projects Showcase
      </h2>

      {/* Giant Blurred Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 hidden md:flex select-none items-center justify-center text-center text-[clamp(5rem,17vw,17rem)] font-bold leading-none tracking-[-0.075em] text-[#111114]/[0.035] blur-[3px]"
      >
        PROJECTS
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#111114]/12 pb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#111114]/60">
              Portfolio Showcase
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-semibold uppercase tracking-[-0.035em] text-[#111114]">
              Selected Projects
            </p>
          </div>
          <p className="max-w-md text-sm text-[#111114]/70 sm:text-right">
            Featured enterprise web applications, design systems, and full-stack software products.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={project.id} className="contents">
                <article
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                    isEven ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Media Column */}
                  <div className="min-w-0 lg:[direction:ltr]">
                    <ProjectMediaSlider project={project} />
                  </div>

                  {/* Details Column */}
                  <div className="flex flex-col justify-center lg:[direction:ltr]">
                    {/* Meta category & role */}
                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-[#111114]/55">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span className="text-[#111114] font-semibold">{project.role}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-tight tracking-[-0.035em] text-[#111114] group">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#111114]/75">
                      {project.summary}
                    </p>

                    {/* Highlights 4-point Grid */}
                    {project.highlights && (
                      <div className="mt-6">
                        <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#111114]/50">
                          Highlights & Architecture
                        </p>
                        <ul className="space-y-2">
                          {project.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#111114]/80">
                              <span className="font-mono text-xs font-semibold text-[#111114]/40 mt-0.5">
                                0{hIdx + 1}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-full border border-[#111114]/15 bg-white/60 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#111114]/75 transition-colors hover:border-[#111114] hover:text-[#111114]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-8 flex items-center gap-6">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 border-b border-[#111114]/30 pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#111114] transition-colors hover:border-[#111114]"
                        >
                          <span>{project.liveUrlLabel || 'Live Demo'}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 border-b border-[#111114]/30 pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#111114]/70 transition-colors hover:text-[#111114] hover:border-[#111114]"
                        >
                          <span>{project.githubUrlLabel || 'Source Code'}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>

                {/* Section Divider Between Projects */}
                {index < projects.length - 1 && (
                  <div className="flex items-center gap-4 py-4 sm:py-8 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#111114]/40">
                    <span className="h-px flex-1 bg-[#111114]/10" />
                    <span className="shrink-0">Next project / 0{index + 2} / 0{projects.length}</span>
                    <span className="h-px flex-1 bg-[#111114]/10" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
