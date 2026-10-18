import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Check, Compass } from 'lucide-react';

export default function ServicesSection() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-subtext mb-4">
              <Compass className="w-3.5 h-3.5 text-white/70" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Crafted With Precision, <br />
              <span className="font-serif italic font-normal text-white/90">Engineered For Scale</span>
            </h2>
          </div>
          <p className="text-subtext text-sm sm:text-base max-w-sm">
            End-to-end design services dedicated to transforming complex domain workflows into intuitive, conversion-focused digital products.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="glass-card rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white/20 group-hover:text-white/60 transition duration-300 font-display">
                    {service.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-subtext text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-white/[0.06] space-y-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-muted block mb-3">
                  Deliverables
                </span>
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
