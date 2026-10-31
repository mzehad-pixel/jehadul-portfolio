import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import KycCaseStudyModal from './KycCaseStudyModal';
import QuickPayCaseStudyModal from './QuickPayCaseStudyModal';
import BookiddoCaseStudyModal from './BookiddoCaseStudyModal';
import MikeSportCaseStudyModal from './MikeSportCaseStudyModal';
import { kycProject } from '../data/kycCaseStudy';
import { quickPayProject } from '../data/quickPayCaseStudy';
import { bookiddoProject } from '../data/bookiddoCaseStudy';
import { mikeSportProject } from '../data/mikeSportCaseStudy';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export default function ProjectsSection() {
  // Only the case studies below are shown for now. The other projects remain in portfolioData.js.
  const projects = [bookiddoProject, kycProject, quickPayProject, mikeSportProject];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const matchesCategory = (p, cat) =>
    p.category.toLowerCase().includes(cat.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(cat.toLowerCase()));

  // Only show filter tabs that have at least one project
  const categories = ['All', 'Fintech', 'Marketplace', 'Design System', 'E-Commerce', 'Enterprise SaaS']
    .filter(cat => cat === 'All' || projects.some(p => matchesCategory(p, cat)));

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => matchesCategory(p, activeCategory));

  return (
    <section id="works" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-subtext mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>Selected Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Transforming Ideas Into <br />
            <span className="font-serif italic font-normal text-white/90">Functional Realities</span>
          </h2>
          <p className="text-subtext text-sm sm:text-base">
            A curated selection of core projects across fintech ecosystems, scalable design systems, and consumer-facing applications.
          </p>
        </div>

        {/* Filter Tabs */}
        {projects.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-white/[0.03] text-subtext hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        )}

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 gap-8 ${projects.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl mx-auto mt-14'}`}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Year & Category floating chip */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>
                  {project.year && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white/70 border border-white/10">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Hover Trigger Action Button */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  {(project.client || project.role) && (
                    <div className="text-xs text-muted font-medium mb-1.5 uppercase tracking-wider">
                      {[project.client, project.role].filter(Boolean).join(' • ')}
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-white transition">
                    {project.title}
                  </h3>
                  <p className="text-subtext text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6 font-normal">
                    {project.overview}
                  </p>
                </div>

                {/* Tags list */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-muted border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && selectedProject.caseStudy === 'kyc' && (
        <KycCaseStudyModal onClose={() => setSelectedProject(null)} />
      )}
      {selectedProject && selectedProject.caseStudy === 'quickpay' && (
        <QuickPayCaseStudyModal onClose={() => setSelectedProject(null)} />
      )}
      {selectedProject && selectedProject.caseStudy === 'bookiddo' && (
        <BookiddoCaseStudyModal onClose={() => setSelectedProject(null)} />
      )}
      {selectedProject && selectedProject.caseStudy === 'mikesport' && (
        <MikeSportCaseStudyModal
          onClose={() => setSelectedProject(null)}
          onNext={() => setSelectedProject(kycProject)}
          nextTitle={kycProject.title}
        />
      )}
      {selectedProject && !selectedProject.caseStudy && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
