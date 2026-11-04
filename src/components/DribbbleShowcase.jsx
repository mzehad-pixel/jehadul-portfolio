import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { dribbbleShots } from '../data/dribbbleShots';
import { ArrowUpRight } from 'lucide-react';

function ShotCard({ shot, hidden }) {
  return (
    <a
      href={shot.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
      className="group shrink-0 w-[78vw] sm:w-[440px] lg:w-[520px]"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 border border-white/[0.06]">
        <img
          src={shot.image}
          alt={hidden ? '' : `${shot.title} – ${shot.subtitle}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white">{shot.title}</h3>
          <p className="text-sm text-muted">{shot.subtitle}</p>
        </div>
        <ArrowUpRight className="w-4 h-4 mt-1 text-muted group-hover:text-white transition" />
      </div>
    </a>
  );
}

export default function DribbbleShowcase() {
  const { personal } = portfolioData;

  return (
    <section id="shots" className="py-24 relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-14 sm:mb-20">
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
          <span aria-hidden="true">✳</span> Dribbble
        </span>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          UI Shots<br />&amp; Explorations
        </h2>
      </div>

      {/* Two copies of the list so the loop is seamless */}
      <div className="group/marquee">
        <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {dribbbleShots.map((shot) => (
                <ShotCard key={shot.href} shot={shot} hidden={copy === 1} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 sm:mt-20 flex justify-center">
        <a
          href={personal.dribbble}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-sm font-semibold text-white transition"
        >
          Explore Dribbble
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
