import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import GithubSection from './components/GithubSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f1] text-[#111114] font-sans antialiased flex flex-col selection:bg-[#111114] selection:text-[#f4f4f1]">
      {/* Floating Staggered Navigation */}
      <Navbar />

      {/* Main Experience Stream */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <GithubSection />
        <ContactSection />
      </main>
    </div>
  );
}
