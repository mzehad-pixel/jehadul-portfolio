import React, { useEffect, useRef } from 'react';
import {
  X,
  Wallet,
  Target,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Send,
  Zap,
  ExternalLink,
  ChevronRight,
  MousePointerClick,
} from 'lucide-react';
import { quickPayCaseStudy as cs } from '../data/quickPayCaseStudy';

const NAV = [
  ['about', 'About'],
  ['problems', 'Problems'],
  ['solution', 'Solution'],
  ['sitemap', 'Sitemap'],
  ['flows', 'Flows'],
  ['home', 'Screens'],
  ['conclusion', 'Conclusion'],
];

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted mb-3">
      <span className="w-6 h-px bg-white/30" />
      {children}
    </div>
  );
}

function SectionTitle({ children, id, className = '' }) {
  return (
    <h3
      id={id}
      className={`text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight scroll-mt-24 ${className}`}
    >
      {children}
    </h3>
  );
}

function Section({ eyebrow, title, id, children }) {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border-t border-white/[0.06]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle id={id}>{title}</SectionTitle>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 ${className}`}>{children}</div>
  );
}

function Phone({ src, alt, className = '' }) {
  return (
    <div
      className={`relative shrink-0 rounded-[2rem] p-[7px] bg-gradient-to-b from-neutral-700 to-neutral-900 border border-white/15 shadow-2xl shadow-black/60 ${className}`}
    >
      <div className="rounded-[1.6rem] overflow-hidden bg-white">
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
      </div>
    </div>
  );
}

function FlowRow({ images, label }) {
  return (
    <div className="mt-8 -mx-2 px-2 overflow-x-auto pb-4">
      <div className="flex items-start justify-start lg:justify-center gap-5 min-w-max lg:min-w-0">
        {images.map((src, i) => (
          <div key={src} className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-3">
              <Phone src={src} alt={`${label} step ${i + 1}`} className="w-[170px] sm:w-[190px]" />
              <span className="text-[11px] font-bold tracking-widest text-muted">{String(i + 1).padStart(2, '0')}</span>
            </div>
            {i < images.length - 1 && <ChevronRight className="w-4 h-4 text-white/25 -mt-8 shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function QuickPayCaseStudyModal({ onClose }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const jump = (id) => {
    const root = scrollRef.current;
    const el = root && root.querySelector(`#qp-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const maxStat = Math.max(...cs.problems.stats.map((s) => s.value));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Pay case study"
    >
      <div
        className="relative w-full max-w-[1280px] h-full sm:h-[94vh] sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 z-20 glass-nav flex items-center justify-between gap-4 px-4 sm:px-8 h-14">
          <div className="flex items-center gap-2.5 min-w-0">
            <Wallet className="w-4 h-4 text-white/80 shrink-0" />
            <span className="text-sm font-semibold text-white truncate">Quick Pay Case Study</span>
          </div>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(([id, label]) => (
              <button
                key={id}
                onClick={() => jump(id)}
                className="px-3 py-1.5 rounded-full text-xs text-subtext hover:text-white hover:bg-white/[0.07] transition"
              >
                {label}
              </button>
            ))}
          </nav>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="w-9 h-9 shrink-0 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div ref={scrollRef} className="h-full overflow-y-auto pt-14">
          {/* Hero */}
          <div className="relative min-h-[420px] sm:min-h-[520px] flex items-center overflow-hidden">
            <img src={cs.hero.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <div className="relative px-6 sm:px-10 lg:px-14 py-16 max-w-2xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-6">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02] uppercase">
                {cs.hero.title}
              </h2>
              <p className="mt-6 text-base sm:text-lg text-white/80">
                {cs.hero.subtitle}
                <br />
                <em className="font-bold text-white">{cs.hero.subtitleStrong}</em>
              </p>
            </div>
            <div className="hidden md:block absolute right-[6%] top-10 w-[250px] lg:w-[290px] rotate-[14deg] drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]">
              <Phone src={cs.hero.phone} alt="Quick Pay home screen" />
            </div>
          </div>

          {/* About + challenge + objectives */}
          <section className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
            <Eyebrow>01 — Context</Eyebrow>
            <SectionTitle id="qp-about">{cs.about.title}</SectionTitle>
            <p className="mt-6 max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{cs.about.text}</p>

            <div className="mt-12 grid lg:grid-cols-2 gap-6">
              <Card className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white/85" />
                </div>
                <h4 className="text-xl font-bold text-white">{cs.challenge.title}</h4>
                <p className="text-sm text-subtext leading-relaxed">{cs.challenge.text}</p>
              </Card>
              <Card className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white/85" />
                </div>
                <h4 className="text-xl font-bold text-white">{cs.objectives.title}</h4>
                <ul className="space-y-3">
                  {cs.objectives.items.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-subtext leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Problems */}
          <Section eyebrow="02 — Research" title={cs.problems.title} id="qp-problems">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-end">
              {cs.problems.stats.map((s) => (
                <div key={s.value} className="flex flex-col gap-4">
                  <div
                    className="relative rounded-2xl border border-violet-400/20 bg-gradient-to-t from-violet-500/30 via-violet-500/10 to-violet-500/[0.03] flex items-end p-5"
                    style={{ height: `${70 + (s.value / maxStat) * 130}px` }}
                  >
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{s.value}%</span>
                  </div>
                  <p className="text-sm text-subtext leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Ideal solution */}
          <Section eyebrow="03 — Direction" title={cs.solution.title} id="qp-solution">
            <div className="grid md:grid-cols-3 gap-5">
              {cs.solution.items.map((it, i) => {
                const Icon = [ShieldCheck, Send, Zap][i] || Lightbulb;
                return (
                  <Card key={it.title}>
                    <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-violet-300" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{it.title}</h4>
                    {it.text && <p className="text-sm text-subtext leading-relaxed">{it.text}</p>}
                  </Card>
                );
              })}
            </div>
          </Section>

          {/* Sitemap */}
          <Section eyebrow="04 — Structure" title={cs.sitemap.title} id="qp-sitemap">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8 overflow-x-auto">
              <div className="flex flex-col lg:flex-row gap-8 min-w-0">
                <div className="flex lg:flex-col gap-3 flex-wrap lg:w-44 shrink-0">
                  {cs.sitemap.onboarding.map((t) => (
                    <div
                      key={t}
                      className="px-4 py-3 rounded-xl text-sm font-semibold bg-violet-500/15 text-violet-100 border border-violet-400/25"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
                  {cs.sitemap.columns.map((col) => (
                    <div key={col.title} className="flex flex-col gap-2.5">
                      <div className="px-4 py-3 rounded-xl text-sm font-bold bg-white text-black">{col.title}</div>
                      {col.items.map((it) => (
                        <div
                          key={it}
                          className="px-4 py-2.5 rounded-xl text-xs sm:text-sm text-subtext border border-white/10 bg-white/[0.02]"
                        >
                          {it}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Flows */}
          {cs.flows.map((f, i) => (
            <Section key={f.id} eyebrow={`0${5 + i} — Flow`} title={f.title} id={i === 0 ? 'qp-flows' : `qp-${f.id}`}>
              {f.text && <p className="max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{f.text}</p>}
              <FlowRow images={f.images} label={f.title} />
            </Section>
          ))}

          {/* Home screen */}
          <Section eyebrow="07 — Interface" title={cs.home.title} id="qp-home">
            <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.035] to-transparent p-6 sm:p-10">
              <div>
                <p className="text-sm sm:text-[15px] text-subtext leading-relaxed max-w-md">{cs.home.text}</p>
                <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-violet-500/10 border border-violet-400/25 text-sm text-violet-100">
                  <MousePointerClick className="w-4 h-4 shrink-0" />
                  {cs.home.callout}
                </div>
              </div>
              <div className="flex justify-center">
                <Phone src={cs.home.image} alt="Home screen" className="w-[230px] sm:w-[270px]" />
              </div>
            </div>
          </Section>

          {cs.more.map((f, i) => (
            <Section key={f.id} eyebrow={`0${8 + i} — Flow`} title={f.title} id={`qp-${f.id}`}>
              <p className="max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{f.text}</p>
              <FlowRow images={f.images} label={f.title} />
            </Section>
          ))}

          {/* Conclusion */}
          <Section eyebrow="10 — Wrap-up" title={cs.conclusion.title} id="qp-conclusion">
            <div className="max-w-3xl space-y-5 text-sm sm:text-[15px] text-subtext leading-relaxed">
              {cs.conclusion.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition"
              >
                Back to portfolio
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition"
              >
                <span>Inquire About Similar Work</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
