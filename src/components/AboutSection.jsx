import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, Briefcase, GraduationCap, Award, Download, MapPin, Wrench, Search, Layout, Users, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { personal, career, skillsCategorized, education, certifications } = portfolioData;
  const [activeSkillTab, setActiveSkillTab] = useState('all');

  const skillTabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'research', label: 'Research', icon: Search },
    { id: 'prototype', label: 'Prototyping', icon: Layout },
    { id: 'design', label: 'Design', icon: Sparkles },
    { id: 'collaboration', label: 'Collaboration', icon: Users },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-subtext mb-4">
            <User className="w-3.5 h-3.5 text-white/70" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Empowering Products With <br />
            <span className="font-serif italic font-normal text-white/90">Purpose & Usability</span>
          </h2>
          <p className="text-subtext text-sm sm:text-base leading-relaxed">
            {personal.goal}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-2.5 mb-8 pb-4 border-b border-white/10">
              <Briefcase className="w-5 h-5 text-white/80" />
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Work Experience
                </h3>
                <p className="text-xs text-muted">Chronological career history</p>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/[0.08]">
              {career.map((job, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-neutral-950 border-2 border-white/40 group-hover:border-emerald-400 group-hover:scale-125 transition-all duration-200" />
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition">
                        {job.role}
                      </h4>
                      <span className="text-xs text-muted font-medium shrink-0">
                        {job.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-white/80 mb-2">
                      <span>{job.company}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-muted flex items-center gap-1 font-normal">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-subtext leading-relaxed font-normal">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Categorized Skills, Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Categorized Skills Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs uppercase tracking-wider text-muted font-bold">
                  Skills & Proficiencies
                </h3>
                <span className="text-[11px] text-white/60">From Resume</span>
              </div>

              {/* Skill Tabs */}
              <div className="flex flex-wrap gap-1.5 mb-5 pb-3 border-b border-white/[0.06]">
                {skillTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSkillTab(tab.id)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg transition-all ${
                      activeSkillTab === tab.id
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/5 text-subtext hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Skills Cloud */}
              <div className="space-y-4">
                {(activeSkillTab === 'all' || activeSkillTab === 'research') && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                      Research & Validation
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsCategorized.research.map((s, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/90 border border-white/[0.06]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(activeSkillTab === 'all' || activeSkillTab === 'prototype') && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                      Information Architecture & Prototyping
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsCategorized.prototype.map((s, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/90 border border-white/[0.06]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(activeSkillTab === 'all' || activeSkillTab === 'design') && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                      UI & Interaction Design
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsCategorized.design.map((s, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/90 border border-white/[0.06]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(activeSkillTab === 'all' || activeSkillTab === 'collaboration') && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                      Collaboration & Strategy
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsCategorized.collaboration.map((s, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/90 border border-white/[0.06]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(activeSkillTab === 'all' || activeSkillTab === 'tools') && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                      Technical Design Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsCategorized.tools.map((s, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Education & Certifications Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 space-y-5">
              
              {/* Google UX Certificate */}
              <div>
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Google UX Design Professional Certificate</span>
                </div>
                <p className="text-xs text-muted pl-6">
                  Certified foundation in user research, wireframing, high-fidelity Figma prototyping, and usability testing.
                </p>
              </div>

              {/* Education List */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                  <GraduationCap className="w-4 h-4 text-white/70" />
                  <span className="uppercase tracking-wider text-muted">Education</span>
                </div>

                {education.map((edu, idx) => (
                  <div key={idx} className="pl-6">
                    <div className="flex items-baseline justify-between text-xs text-white font-medium">
                      <span>{edu.degree}</span>
                      <span className="text-muted text-[11px]">{edu.period}</span>
                    </div>
                    <p className="text-[11px] text-muted leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>

              {/* Download CV CTA */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
