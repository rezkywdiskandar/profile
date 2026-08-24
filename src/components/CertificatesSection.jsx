import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesSection() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="relative z-20 bg-[#f4f4f1] text-[#111114] px-6 sm:px-10 lg:px-24 py-20 border-t border-[#111114]/10"
    >
      <h2 id="certificates-heading" className="sr-only">
        Industry Certifications & Credentials
      </h2>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#111114]/10 pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#111114]/60">
              Verified Credentials
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-semibold uppercase tracking-[-0.035em] text-[#111114]">
              Certifications
            </p>
          </div>
          <p className="text-sm text-[#111114]/65 max-w-md sm:text-right">
            Dokumentasi sertifikasi resmi dan keahlian yang telah tervalidasi secara profesional.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#111114]/12 bg-white/80 backdrop-blur-xs shadow-sm transition-all duration-300 hover:border-[#111114]/35 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div>
                {/* Certificate Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#111114]/10 bg-[#111114]/5 mb-5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                  {/* Top Issuer Badge Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#111114] text-[#f4f4f1] font-mono font-semibold text-[10px] tracking-wider uppercase shadow-sm">
                      {cert.issuerCode}
                    </span>
                  </div>

                  {/* Top Date Badge Overlay */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] tracking-wide">
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111114] font-mono text-xs font-bold tracking-wider uppercase shadow-lg">
                      <span>Lihat Sertifikat</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#111114] group-hover:text-[#111114]/80 transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#111114]/65">
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-full border border-[#111114]/10 bg-[#f4f4f1] font-mono text-[10px] text-[#111114]/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Trigger */}
              <div className="mt-6 pt-4 border-t border-[#111114]/10 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#111114]/60 group-hover:text-[#111114] transition-colors">
                <span>View Details & Verification</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
