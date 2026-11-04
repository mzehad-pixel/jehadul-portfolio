import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import DribbbleShowcase from './components/DribbbleShowcase';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070707] text-[#d6d6d6] selection:bg-white/20 selection:text-white font-sans antialiased relative">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <DribbbleShowcase />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
