import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] relative bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs text-white">
              JI
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                {personal.name}
              </span>
              <span className="text-xs text-muted">
                {personal.role} • Dhaka, Bangladesh
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-subtext">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#works" className="hover:text-white transition">Works</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-subtext hover:text-white px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Md Jehadul Islam. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with precision & engineered with React + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
