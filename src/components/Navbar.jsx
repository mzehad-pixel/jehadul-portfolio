import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Works', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 pointer-events-none transition-all duration-300">
      <nav 
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'glass-nav shadow-2xl shadow-black/80' 
            : 'bg-[#101010]/80 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-white/10 to-white/30 border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-white/40 group-hover:scale-105 transition-all shadow-inner">
            <img 
              src={portfolioData.personal.avatar} 
              alt={portfolioData.personal.name} 
              className="w-full h-full object-cover object-[center_32%]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="text-xs font-bold tracking-wider text-white">JI</span>
          </div>
          <span className="text-sm font-semibold text-white group-hover:text-white transition tracking-tight">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-subtext hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-[#eaeaea] transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-white/5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 glass-card p-6 rounded-3xl border border-white/15 shadow-2xl flex flex-col gap-3 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white/80 hover:text-white py-2 px-3 rounded-xl hover:bg-white/5 transition flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-white/30" />
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-white text-black font-semibold text-xs flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-white/10 text-white font-medium text-xs hover:bg-white/15 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
