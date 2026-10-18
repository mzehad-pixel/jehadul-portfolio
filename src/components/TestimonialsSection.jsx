import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MessageSquare, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-subtext mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-white/70" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Trusted by Product Leaders <br />
            <span className="font-serif italic font-normal text-white/90">& Engineering Teams</span>
          </h2>
          <p className="text-subtext text-sm sm:text-base">
            Feedback from engineering partners, founders, and product managers I have collaborated with.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-white/20 mb-3" />

                <p className="text-sm text-subtext leading-relaxed font-normal mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-muted">
                    {t.role}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/80">
                  {t.author[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
