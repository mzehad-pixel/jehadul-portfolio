import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GitCommit, Sparkles } from 'lucide-react';

export default function ProcessSection() {
  const { process } = portfolioData;

  return (
    <section id="process" className="py-24 relative border-t border-white/[0.06] bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-subtext mb-4">
            <GitCommit className="w-3.5 h-3.5 text-white/70" />
            <span>Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            How Great Products <br />
            <span className="font-serif italic font-normal text-white/90">Come To Life</span>
          </h2>
          <p className="text-subtext text-sm sm:text-base">
            A battle-tested 5-step methodology from initial ambiguity to a high-converting, production-ready product launch.
          </p>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {process.map((step, index) => (
            <div
              key={step.step}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-emerald-400/50 transition" />

              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white/20 group-hover:text-emerald-400/80 transition duration-300 font-display block mb-4">
                  {step.step}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-subtext text-xs leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.04] text-[10px] text-muted uppercase tracking-wider font-semibold">
                Phase {index + 1} of 5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
