import React from 'react';
import { X, CheckCircle2, Calendar, User, Tag, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 shadow-2xl relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-subtext border border-white/10">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-subtext border border-white/10">
            <User className="w-3.5 h-3.5" />
            {project.role}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          {project.title}
        </h2>
        <p className="text-subtext text-sm sm:text-base mb-6 font-medium">
          {project.subtitle}
        </p>

        {/* Hero Preview Image */}
        <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-muted font-bold mb-2">
            Project Overview
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-muted font-bold mb-3">
            Key Contributions & Impact
          </h3>
          <div className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-subtext leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-muted border border-white/5">
                #{tag}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition"
          >
            <span>Inquire About Similar Work</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
