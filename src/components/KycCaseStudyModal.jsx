import React, { useEffect, useRef } from 'react';
import {
  X,
  ScanFace,
  ShieldAlert,
  ShieldCheck,
  Accessibility,
  Clock,
  Users,
  Zap,
  Quote,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';
import { kycCaseStudy as cs } from '../data/kycCaseStudy';

const ICONS = {
  shield: ShieldAlert,
  access: Accessibility,
  clock: Clock,
  users: Users,
  'shield-check': ShieldCheck,
  zap: Zap,
};

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted mb-3">
      <span className="w-6 h-px bg-white/30" />
      {children}
    </div>
  );
}

function SectionTitle({ children, id }) {
  return (
    <h3 id={id} className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight scroll-mt-24">
      {children}
    </h3>
  );
}

function Section({ eyebrow, title, id, children, className = '' }) {
  return (
    <section className={`px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border-t border-white/[0.06] ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle id={id}>{title}</SectionTitle>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function IconBox({ icon }) {
  const Icon = ICONS[icon] || ShieldCheck;
  return (
    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-white/85" />
    </div>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 ${className}`}>
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-sm text-subtext leading-relaxed">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
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

function YesNo({ value }) {
  const v = value.trim().toLowerCase();
  if (v === 'yes') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
        <CheckCircle2 className="w-3 h-3" /> Yes
      </span>
    );
  }
  if (v === 'n/a' || v === 'no') {
    return (
      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-muted border border-white/[0.06]">
        {value}
      </span>
    );
  }
  return <span className="text-white/85 text-sm">{value}</span>;
}

const NAV = [
  ['overview', 'Overview'],
  ['problem', 'Problem'],
  ['goals', 'Goals'],
  ['research', 'Research'],
  ['persona', 'Persona'],
  ['competitive', 'Competitors'],
  ['solution', 'Solution'],
  ['screens', 'Screens'],
  ['conclusion', 'Conclusion'],
];

export default function KycCaseStudyModal({ onClose }) {
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
    const el = root && root.querySelector(`#kyc-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="e-KYC case study"
    >
      <div
        className="relative w-full max-w-[1280px] h-full sm:h-[94vh] sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky top bar */}
        <div className="absolute top-0 inset-x-0 z-20 glass-nav flex items-center justify-between gap-4 px-4 sm:px-8 h-14">
          <div className="flex items-center gap-2.5 min-w-0">
            <ScanFace className="w-4 h-4 text-white/80 shrink-0" />
            <span className="text-sm font-semibold text-white truncate">e-KYC Case Study</span>
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

        {/* Scroll area */}
        <div ref={scrollRef} className="h-full overflow-y-auto pt-14">
          {/* Hero */}
          <div className="relative min-h-[380px] sm:min-h-[460px] flex items-end overflow-hidden">
            <img src={cs.hero.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/10" />
            <div className="relative px-6 sm:px-10 lg:px-14 pb-10 sm:pb-14 pt-24 max-w-4xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-6">
                <ScanFace className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                {cs.hero.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/75 font-medium max-w-xl">
                {cs.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Overview */}
          <section className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
            <Eyebrow>01 — Context</Eyebrow>
            <SectionTitle id="kyc-overview">{cs.overview.title}</SectionTitle>
            <div className="mt-8 grid lg:grid-cols-[1.35fr_1fr] gap-10 items-center">
              <div className="space-y-5 text-sm sm:text-[15px] text-subtext leading-relaxed">
                {cs.overview.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 p-6 flex items-center justify-center">
                <img src={cs.overview.image} alt="e-KYC illustration" className="w-full max-w-sm h-auto" />
              </div>
            </div>
          </section>

          {/* Problem */}
          <Section eyebrow="02 — Challenge" title={cs.problem.title} id="kyc-problem">
            <p className="max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed mb-8">{cs.problem.intro}</p>
            <div className="grid md:grid-cols-3 gap-5">
              {cs.problem.items.map((it) => (
                <Card key={it.title}>
                  <IconBox icon={it.icon} />
                  <h4 className="text-white font-semibold mb-2">{it.title}</h4>
                  <p className="text-sm text-subtext leading-relaxed">{it.text}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* Goals + Scope */}
          <Section eyebrow="03 — Direction" title={cs.goals.title} id="kyc-goals">
            <div className="grid md:grid-cols-3 gap-5">
              {cs.goals.items.map((it) => (
                <Card key={it.title}>
                  <IconBox icon={it.icon} />
                  <h4 className="text-white font-semibold mb-2">{it.title}</h4>
                  <p className="text-sm text-subtext leading-relaxed">{it.text}</p>
                </Card>
              ))}
            </div>

            <div className="mt-14">
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-5">{cs.scope.title}</h4>
              <div className="grid md:grid-cols-2 gap-5">
                {[cs.scope.user, cs.scope.market].map((s) => (
                  <Card key={s.label}>
                    <div className="text-xs uppercase tracking-wider text-muted font-semibold mb-2">{s.label}</div>
                    <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed">{s.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          {/* Field research */}
          <Section eyebrow="04 — Discovery" title={cs.research.title} id="kyc-research">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <ol className="relative space-y-7 ml-4 border-l border-white/15 pl-8">
                  {cs.research.steps.map((s, i) => (
                    <li key={s} className="relative text-sm sm:text-[15px] text-white/90 leading-relaxed">
                      <span className="absolute -left-[3.05rem] top-0 w-7 h-7 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center ring-4 ring-[#0a0a0a]">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
                <p className="mt-8 ml-4 pl-8 text-sm text-muted">{cs.research.note}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cs.research.images.map((src, i) => (
                  <div
                    key={src}
                    className={`rounded-2xl overflow-hidden border border-white/10 ${i === 1 ? 'mt-8' : ''}`}
                  >
                    <img src={src} alt="Field research" loading="lazy" className="w-full h-full object-cover aspect-[3/4]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quotes */}
            <div className="mt-16">
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">{cs.quotes.title}</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cs.quotes.items.map((q) => (
                  <figure key={q} className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5 flex flex-col gap-3">
                    <Quote className="w-5 h-5 text-white/30" />
                    <blockquote className="text-sm text-white/85 italic leading-relaxed">“{q}”</blockquote>
                  </figure>
                ))}
              </div>
            </div>
          </Section>

          {/* Persona */}
          <Section eyebrow="05 — Audience" title={cs.persona.title} id="kyc-persona">
            <div className="grid lg:grid-cols-[300px_1fr] gap-6">
              <Card className="h-fit">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                  MS
                </div>
                <dl className="divide-y divide-white/[0.06]">
                  {cs.persona.facts.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between py-3 text-sm">
                      <dt className="text-muted">{k}</dt>
                      <dd className="text-white font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="md:col-span-2">
                  <h4 className="text-white font-semibold mb-3">About</h4>
                  <p className="text-sm text-subtext leading-relaxed">{cs.persona.about}</p>
                </Card>
                <Card>
                  <h4 className="text-white font-semibold mb-4">{cs.persona.goalsA.title}</h4>
                  <BulletList items={cs.persona.goalsA.items} />
                </Card>
                <Card>
                  <h4 className="text-white font-semibold mb-4">{cs.persona.goalsB.title}</h4>
                  <BulletList items={cs.persona.goalsB.items} />
                </Card>
                <Card className="md:col-span-2">
                  <h4 className="text-white font-semibold mb-4">{cs.persona.frustrations.title}</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {cs.persona.frustrations.items.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-subtext leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </Section>

          {/* Competitive analysis */}
          <Section eyebrow="06 — Market" title={cs.competitive.title} id="kyc-competitive">
            <p className="max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed mb-8">{cs.competitive.intro}</p>
            <div className="rounded-2xl border border-white/10 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="bg-white/[0.05]">
                    {cs.competitive.columns.map((c) => (
                      <th key={c} className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/80 whitespace-nowrap">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cs.competitive.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/[0.06] hover:bg-white/[0.02] transition">
                      {row.map((cell, i) => (
                        <td key={i} className={`px-5 py-4 ${i === 0 ? 'text-white font-semibold text-sm' : ''}`}>
                          {i === 0 ? cell : <YesNo value={cell} />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Solution + flow */}
          <Section eyebrow="07 — Outcome" title={cs.solution.title} id="kyc-solution">
            <p className="max-w-4xl text-sm sm:text-[15px] text-subtext leading-relaxed">{cs.solution.text}</p>

            <div className="mt-10 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8">
              <div className="flex justify-center mb-6">
                <span className="px-4 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {cs.solution.banner}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-stretch gap-3">
                {cs.solution.flow.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm text-white/90 flex items-center justify-center min-h-[84px]">
                      <span className="text-muted text-xs font-bold mr-2">{String(i + 1).padStart(2, '0')}</span>
                      {step}
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30 self-center rotate-90 lg:rotate-0 shrink-0" />
                  </React.Fragment>
                ))}
                <div className="flex-1 rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] px-4 py-5 text-center text-sm text-amber-100 flex items-center justify-center min-h-[84px]">
                  {cs.solution.decision}
                </div>
                <div className="self-center shrink-0 flex lg:flex-col items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/25">Yes</span>
                  <ChevronRight className="w-4 h-4 text-white/30 rotate-90 lg:rotate-0" />
                </div>
                <div className="flex-1 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.07] px-4 py-5 text-center text-sm text-emerald-100 flex items-center justify-center gap-2 min-h-[84px]">
                  <span aria-hidden="true">🎉</span> {cs.solution.yes}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">{cs.solution.no}</span>
                <span>returns to “{cs.solution.flow[2]}”</span>
              </div>
            </div>

            {/* Wireframe */}
            <div className="mt-16">
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">{cs.wireframe.title}</h4>
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 max-w-3xl">
                <img src={cs.wireframe.image} alt="Hand-drawn wireframe sketches" loading="lazy" className="w-full h-auto" />
              </div>
            </div>
          </Section>

          {/* Screens */}
          <section id="kyc-screens" className="scroll-mt-14 px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border-t border-white/[0.06]">
            <Eyebrow>08 — Interface</Eyebrow>
            <SectionTitle>Final screens</SectionTitle>
            <div className="mt-12 space-y-20">
              {cs.screens.map((s, i) => (
                <div
                  key={s.title}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.035] to-transparent p-6 sm:p-10"
                >
                  <div className={`flex justify-center gap-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                    {s.images.map((src) => (
                      <Phone
                        key={src}
                        src={src}
                        alt={s.title}
                        className={s.images.length > 1 ? 'w-[44%] max-w-[230px]' : 'w-[60%] max-w-[260px]'}
                      />
                    ))}
                  </div>
                  <div className={i % 2 ? 'lg:order-1' : ''}>
                    <div className="text-xs font-bold text-muted tracking-widest mb-3">{String(i + 1).padStart(2, '0')}</div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-5">{s.title}</h4>
                    <div className="space-y-4 text-sm sm:text-[15px] text-subtext leading-relaxed">
                      {s.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                      {s.list && (
                        <ol className="space-y-2">
                          {s.list.map((l, n) => (
                            <li key={l} className="flex items-center gap-3 text-white/90">
                              <span className="w-6 h-6 rounded-full bg-white/10 border border-white/10 text-xs flex items-center justify-center">{n + 1}</span>
                              {l}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <Section eyebrow="09 — Wrap-up" title={cs.conclusion.title} id="kyc-conclusion">
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
