import React, { useEffect } from 'react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#111114]/15 bg-[#f4f4f1] text-[#111114] shadow-2xl p-6 sm:p-8 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#111114]/15 hover:bg-white text-[#111114] transition-colors shadow-sm cursor-pointer"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Certificate Image Banner */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#111114]/10 bg-black mb-6">
          <img
            src={cert.image}
            alt={cert.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 font-mono text-xs mb-3">
          <span className="px-3 py-1 rounded-full bg-[#111114] text-[#f4f4f1] font-semibold text-[10px] tracking-wider uppercase">
            {cert.issuerCode}
          </span>
          <span className="text-[#111114]/50 text-xs">{cert.issueDate}</span>
          <span>·</span>
          <span className="text-[#111114]/50 text-xs">Expires: {cert.expiryDate}</span>
        </div>

        {/* Title */}
        <h3 id="cert-modal-title" className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#111114]">
          {cert.title}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#111114]/65">
          {cert.issuer}
        </p>

        {/* Description */}
        <div className="mt-5 text-sm leading-relaxed text-[#111114]/80 bg-white/70 p-5 rounded-xl border border-[#111114]/10">
          <p>{cert.description}</p>
        </div>

        {/* Credential ID & Skills */}
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs font-mono border-b border-[#111114]/10 pb-3">
            <span className="text-[#111114]/50 uppercase tracking-wider">Credential ID</span>
            <span className="font-semibold text-[#111114]">{cert.credentialId}</span>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#111114]/50 mb-2">
              Demonstrated Competencies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-full bg-[#111114]/5 border border-[#111114]/10 font-mono text-xs text-[#111114]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 pt-4 border-t border-[#111114]/10 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-[#111114]/20 font-mono text-xs uppercase tracking-wider text-[#111114] hover:bg-[#111114]/5 transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#111114] text-[#f4f4f1] font-mono text-xs uppercase tracking-wider hover:bg-[#27272c] transition-colors shadow-md cursor-pointer"
          >
            <span>Verify Issuer</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
