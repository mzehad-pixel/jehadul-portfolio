import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, Briefcase, GraduationCap, Award, Download, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const { personal, career, skills } = portfolioData;

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-subtext mb-4">
            <User className="w-3.5 h-3.5 text-white/70" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Passionate About Solving <br />
            <span className="font-serif italic font-normal text-white/90">Real Human Problems</span>
          </h2>
          <p className="text-subtext text-sm sm:text-base">
            Over half a decade of designing mission-critical products for high-growth tech companies and enterprise clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Career Timeline */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/10">
              <Briefcase className="w-4 h-4 text-white/80" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/[0.08]">
              {career.map((job, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-neutral-900 border-2 border-white/40 group-hover:border-emerald-400 group-hover:scale-125 transition-all duration-200" />
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition">
                        {job.company}
                      </h4>
                      <span className="text-xs text-muted font-medium">
                        {job.period}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-white/70 mb-2">
                      {job.role}
                    </div>

                    <p className="text-xs sm:text-sm text-subtext leading-relaxed font-normal">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills, Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Skills & Tools Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10">
              <h3 className="text-sm uppercase tracking-wider text-muted font-bold mb-4">
                Core Skills & Proficiencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-xl bg-white/[0.04] text-white/90 border border-white/[0.08] hover:border-white/20 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Certifications Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Google UX Design Professional Certificate</span>
                </div>
                <p className="text-xs text-muted pl-6">
                  Foundations of UX, Empathize, Define, Ideate, Prototype & Test.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                  <GraduationCap className="w-4 h-4 text-white/70" />
                  <span>B.Sc in Textile Engineering</span>
                </div>
                <p className="text-xs text-muted pl-6">
                  National Institute of Textile Engineering & Research — University of Dhaka (2019)
                </p>
              </div>

              {/* CV Download CTA */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Curriculum Vitae</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
