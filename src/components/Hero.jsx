import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Download, Award, ShieldCheck, Layers, Sparkles, Building2 } from 'lucide-react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Splits "1M+" into { num: 1, suffix: "M+" } so only the number counts up.
function parseValue(value) {
  const m = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  return m ? { num: parseFloat(m[1]), suffix: m[2] } : { num: null, suffix: value };
}

function MetricCard({ item, index, visible }) {
  const { num, suffix } = parseValue(item.value);
  const [reduced] = useState(prefersReducedMotion);
  const [count, setCount] = useState(num === null ? null : 0);

  useEffect(() => {
    if (!visible || num === null || reduced) return;
    const duration = 1600;
    const delay = index * 150;
    let frame;
    let start;
    const tick = (t) => {
      if (start === undefined) start = t + delay;
      const p = Math.min(Math.max((t - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * num));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, num, index, reduced]);

  return (
    // Outer div handles the staggered reveal; inner card handles hover, so the stagger delay never slows hover.
    <div
      style={{ transitionDelay: visible ? `${index * 150}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
    <div className="group relative h-full overflow-hidden glass-card rounded-2xl p-5 text-center border border-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
      {/* Shine sweep on hover */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
      {/* Accent glow that rises once the number lands */}
      <span
        style={{ transitionDelay: visible ? `${index * 150 + 900}ms` : '0ms' }}
        className={`pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full bg-emerald-400/20 blur-2xl transition-opacity duration-1000 group-hover:opacity-100 ${
          visible ? 'opacity-60' : 'opacity-0'
        }`}
      />
      <div className="relative text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-display tabular-nums">
        {num === null ? item.value : `${reduced ? num : count}${suffix}`}
      </div>
      <div className="relative text-xs text-muted uppercase tracking-wider font-medium">{item.label}</div>
    </div>
    </div>
  );
}

function MetricsBar({ metrics }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
      {metrics.map((item, index) => (
        <MetricCard key={index} item={item} index={index} visible={visible} />
      ))}
    </div>
  );
}

export default function Hero() {
  const { personal, metrics } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-emerald-500/[0.04] blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Availability Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner text-xs text-subtext hover:border-white/20 transition-all cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.availability}</span>
          </div>
        </div>

        {/* Main Specter-Style Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            I am <span className="font-serif italic font-medium text-white/95 tracking-normal">Jehadul</span>, <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              {personal.role}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-subtext max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            {personal.goal}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#works"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 text-white/70" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Card (Specter Style Showcase) */}
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="glass-card rounded-3xl p-4 sm:p-8 relative overflow-hidden border border-white/15 shadow-2xl">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo Frame */}
              <div className="md:col-span-5 relative group">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">{personal.name}</p>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-3 -right-3 glass-card px-3.5 py-2 rounded-xl border border-white/20 shadow-xl flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white">Google Certified UX</span>
                </div>
              </div>

              {/* Showcase Info / Credentials */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400/90 bg-emerald-500/10 px-3 py-1 rounded-full mb-4 border border-emerald-500/20">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Currently Sr. UX Designer at Technohaven</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
                    Architecting high-converting digital products from MVP to enterprise scale.
                  </h3>

                  <p className="text-subtext text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Extensive experience across mobile applications, SAAS dashboards, e-commerce platforms, and transaction-critical fintech ecosystems. Combining rigorous user research with atomic design systems.
                  </p>
                </div>

                {/* Domain Focus Card */}
                <div className="pt-4 border-t border-white/10">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-white font-medium text-xs">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-semibold tracking-tight">Core Industry Focus</span>
                      </div>
                      <span className="text-[10px] text-muted uppercase tracking-wider font-medium">Domain Expertise</span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-subtext leading-relaxed mb-3 font-normal">
                      Designing mission-critical workflows, scalable MVPs, and high-conversion experiences across:
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-white hover:border-white/25 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Fintech
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-white hover:border-white/25 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        Digital Bank
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-white hover:border-white/25 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        EdTech
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-white hover:border-white/25 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                        HealthTech
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-white hover:border-white/25 transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        E-Commerce
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Metrics Counter Bar */}
        <MetricsBar metrics={metrics} />

      </div>
    </section>
  );
}
