import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E8E6DF] dark:border-[#1E232B] bg-[#FBFBFA] dark:bg-[#0C0E11]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8E6DF] dark:border-[#1F242D]">
          
          {/* Colophon & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#131518] text-[#FBFBFA] dark:bg-[#EAECEF] dark:text-[#0C0E11] flex items-center justify-center font-editorial font-bold text-lg">
              R
            </div>
            <div>
              <span className="text-sm font-bold text-[#131518] dark:text-[#F4F2EB] block">
                {personal.name}
              </span>
              <span className="text-xs text-[#8A909D] font-mono">
                {personal.role}
              </span>
            </div>
          </div>

          {/* Colophon Note */}
          <div className="text-center md:text-left">
            <p className="text-xs text-[#6B7280] dark:text-[#8D96A5] font-mono">
              Designed with Editorial Neo-Minimalist aesthetics • Built with React & Tailwind CSS
            </p>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E3DB] dark:border-[#282E3A] bg-[#FFFFFF] dark:bg-[#15181E] text-xs font-mono text-[#585E6A] dark:text-[#9DA4B2] hover:text-[#131518] dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={13} />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A909D] dark:text-[#6C7483] font-mono gap-3">
          <span>
            © {new Date().getFullYear()} {personal.name}. Hak Cipta Dilindungi.
          </span>
          <div className="flex items-center gap-1">
            <span>Human-crafted with care & precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
