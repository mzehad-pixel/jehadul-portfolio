import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Smartphone,
  Target,
  ArrowRight,
  ExternalLink,
  Check,
  Minus,
  Lightbulb,
  Search,
  BookOpen,
  Zap,
  ShieldCheck,
  Repeat,
} from 'lucide-react';
import { sManagerCaseStudy as cs } from '../data/sManagerCaseStudy';

const NAV = [
  ['overview', 'Overview'],
  ['problem', 'Problem'],
  ['process', 'Process'],
  ['market', 'Market'],
  ['research', 'Research'],
  ['single', 'Single'],
  ['bulk', 'Bulk'],
  ['system', 'System'],
  ['decisions', 'Decisions'],
  ['learnings', 'Learnings'],
];

const img = (n) => `/smanager/${n}.jpg`;

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted mb-3">
      <span className="w-6 h-px bg-white/30" />
      {children}
    </div>
  );
}

function Section({ eyebrow, title, id, children }) {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border-t border-white/[0.06]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 id={id} className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight scroll-mt-24">
        {title}
      </h3>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Card({ children, className = '' }) {
  return <div className={`rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 ${className}`}>{children}</div>;
}

function Lead({ children }) {
  return <p className="max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{children}</p>;
}

function Shot({ src, alt, onClick, dark }) {
  return (
    <figure>
      <div
        onClick={onClick}
        className={`rounded-xl overflow-hidden border border-white/15 shadow-2xl shadow-black/50 cursor-zoom-in ${dark ? 'bg-black' : 'bg-white'}`}
      >
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
      </div>
      {alt && <figcaption className="mt-3 text-xs text-muted text-center">{alt}</figcaption>}
    </figure>
  );
}

function Phone({ src, alt, onClick }) {
  return (
    <figure className="w-[180px] shrink-0">
      <div
        onClick={onClick}
        className="rounded-[1.6rem] p-[6px] bg-gradient-to-b from-neutral-700 to-neutral-900 border border-white/15 shadow-2xl shadow-black/60 cursor-zoom-in"
      >
        <div className="rounded-[1.25rem] overflow-hidden bg-white">
          <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted text-center">{alt}</figcaption>
    </figure>
  );
}

function PhoneStrip({ screens, onZoom }) {
  return (
    <div className="mt-10 -mx-2 px-2 overflow-x-auto pb-4">
      <div className="flex items-start gap-5 min-w-max">
        {screens.map(([n, label], i) => (
          <div key={n} className="flex items-start gap-5">
            <Phone src={img(n)} alt={`${i + 1}. ${label}`} onClick={() => onZoom(img(n))} />
            {i < screens.length - 1 && <ArrowRight className="w-4 h-4 text-white/25 mt-[180px]" />}
          </div>
        ))}
      </div>
    </div>
  );
}

const GOAL_ICONS = [Zap, ShieldCheck, Repeat];

export default function SManagerCaseStudyModal({ onClose }) {
  const scrollRef = useRef(null);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (zoom) setZoom(null);
      else onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, zoom]);

  const jump = (id) => {
    const root = scrollRef.current;
    const el = root && root.querySelector(`#sm-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="sManager top-up case study"
    >
      <div
        className="relative w-full max-w-[1320px] h-full sm:h-[94vh] sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 inset-x-0 z-20 glass-nav flex items-center justify-between gap-4 px-4 sm:px-8 h-14">
          <div className="flex items-center gap-2.5 min-w-0">
            <Smartphone className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="text-sm font-semibold text-white truncate">sManager Top-up Case Study</span>
          </div>
          <nav className="hidden xl:flex items-center gap-1">
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
          <div className="relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-emerald-500/20 blur-[120px]" />
            <div className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-orange-400/10 blur-[120px]" />
            <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center px-6 sm:px-10 lg:px-14 pt-14 pb-16">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7 text-emerald-300" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-3">UX Case Study · sManager</div>
                <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02]">
                  {cs.hero.title}
                </h2>
                <p className="mt-6 text-base sm:text-lg text-white/75">{cs.hero.subtitle}</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <img src={cs.hero.image} alt="sManager top-up screens" className="block w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16">
            <Eyebrow>01 — Overview</Eyebrow>
            <h3 id="sm-overview" className="text-2xl sm:text-4xl font-bold text-white tracking-tight scroll-mt-24">
              Project at a Glance
            </h3>
            <p className="mt-6 max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{cs.intro}</p>
            <div className="mt-10 rounded-2xl border border-white/[0.08] overflow-hidden">
              {cs.glance.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 px-5 py-4 ${i ? 'border-t border-white/[0.06]' : ''}`}
                >
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted">{k}</div>
                  <div className="text-sm text-white/90 leading-relaxed">{v}</div>
                </div>
              ))}
            </div>
            <a
              href={cs.playStore}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition"
            >
              View sManager on Google Play <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </section>

          {/* Problem */}
          <Section eyebrow="02 — Background" title={cs.problem.title} id="sm-problem">
            <Lead>{cs.problem.text}</Lead>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {cs.problem.points.map(([h, t]) => (
                <Card key={h}>
                  <h5 className="text-white font-semibold">{h}</h5>
                  <p className="mt-2 text-sm text-subtext leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-500/[0.06] p-6 flex gap-4">
              <Target className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed">
                <strong className="text-white">The problem, in one line:</strong> {cs.problem.statement}
              </p>
            </div>
          </Section>

          {/* Process + PRD */}
          <Section eyebrow="03 — Process" title={cs.process.title} id="sm-process">
            <Lead>{cs.process.text}</Lead>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {cs.process.rows.map(([phase, q, out], i) => (
                <Card key={phase} className="!p-5">
                  <div className="text-[11px] font-bold tracking-widest text-emerald-300">{`0${i + 1}`}</div>
                  <h5 className="mt-1 text-white font-semibold">{phase}</h5>
                  <p className="mt-2 text-xs sm:text-[13px] text-subtext leading-relaxed">{q}</p>
                  <p className="mt-3 pt-3 border-t border-white/[0.06] text-xs text-white/70 leading-relaxed">{out}</p>
                </Card>
              ))}
            </div>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white">Phase 1 — {cs.prd.title}</h4>
            <p className="mt-3 max-w-3xl text-sm text-subtext leading-relaxed">{cs.prd.text}</p>
            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {cs.prd.items.map(([h, t]) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <p className="text-sm text-subtext leading-relaxed">
                    <strong className="text-white">{h}</strong> {t}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          {/* Competitive analysis */}
          <Section eyebrow="04 — Market" title={`Phase 2 — ${cs.competitors.title}`} id="sm-market">
            <Lead>{cs.competitors.text}</Lead>
            <div className="mt-8 rounded-2xl border border-white/[0.08] overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-widest text-muted">
                    <th className="px-5 py-3 font-semibold">App</th>
                    <th className="px-5 py-3 font-semibold">What worked</th>
                    <th className="px-5 py-3 font-semibold">What hurt</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.competitors.rows.map(([app, good, bad]) => (
                    <tr key={app} className="border-t border-white/[0.06] align-top">
                      <td className="px-5 py-4 font-semibold text-white whitespace-nowrap">{app}</td>
                      <td className="px-5 py-4 text-subtext">
                        <span className="inline-flex gap-2">
                          {good === '—' ? <Minus className="w-4 h-4 text-white/30 shrink-0 mt-0.5" /> : <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
                          {good === '—' ? 'No good points recorded' : good}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-subtext">
                        <span className="inline-flex gap-2">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          {bad}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {cs.competitors.rows.map(([app, , , key]) => (
                <Shot key={key} src={img(`mr-${key}`)} alt={app} dark onClick={() => setZoom(img(`mr-${key}`))} />
              ))}
              {cs.competitors.retail.map(([key, label]) => (
                <Shot key={key} src={img(`mr-${key}`)} alt={label} dark onClick={() => setZoom(img(`mr-${key}`))} />
              ))}
            </div>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white">What the comparison taught us</h4>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cs.competitors.lessons.map(([h, t]) => (
                <Card key={h}>
                  <Lightbulb className="w-5 h-5 text-emerald-300" />
                  <h5 className="mt-3 text-white font-semibold">{h}</h5>
                  <p className="mt-2 text-sm text-subtext leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* Research + goals */}
          <Section eyebrow="05 — Users" title={`Phase 3 — ${cs.research.title}`} id="sm-research">
            <Lead>{cs.research.text}</Lead>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {cs.research.findings.map(([h, t], i) => (
                <Card key={h}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                      <Search className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div className="text-[11px] font-bold tracking-widest text-emerald-300">FINDING {i + 1}</div>
                  </div>
                  <h5 className="mt-4 text-white font-semibold">{h}</h5>
                  <p className="mt-2 text-sm text-subtext leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white">Design goals — {cs.goals.title}</h4>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {cs.goals.items.map(([h, t], i) => {
                const Icon = GOAL_ICONS[i];
                return (
                  <Card key={h}>
                    <Icon className="w-5 h-5 text-emerald-300" />
                    <h5 className="mt-3 text-white font-semibold">
                      {i + 1}. {h}
                    </h5>
                    <p className="mt-2 text-sm text-subtext leading-relaxed">{t}</p>
                  </Card>
                );
              })}
            </div>
            <h5 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-muted">How Might We</h5>
            <ul className="mt-4 space-y-3 max-w-4xl">
              {cs.goals.hmw.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-300 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </Section>

          {/* Single top-up */}
          <Section eyebrow="06 — Redesign" title={cs.single.title} id="sm-single">
            <Lead>{cs.single.text}</Lead>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cs.single.steps.map(([h, t], i) => (
                <Card key={h} className="!p-5">
                  <div className="text-[11px] font-bold tracking-widest text-emerald-300">STEP {i + 1}</div>
                  <h5 className="mt-1 text-white font-semibold">{h}</h5>
                  <p className="mt-2 text-xs sm:text-[13px] text-subtext leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>
            <PhoneStrip screens={cs.single.screens} onZoom={setZoom} />
          </Section>

          {/* Bulk top-up */}
          <Section eyebrow="07 — Redesign" title={cs.bulk.title} id="sm-bulk">
            <Lead>{cs.bulk.text}</Lead>
            <PhoneStrip screens={cs.bulk.screens} onZoom={setZoom} />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cs.bulk.toolkit.map(([h, t]) => (
                <Card key={h} className="!p-5">
                  <h5 className="text-white font-semibold">{h}</h5>
                  <p className="mt-2 text-xs sm:text-[13px] text-subtext leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* Design system */}
          <Section eyebrow="08 — Design System" title={cs.system.title} id="sm-system">
            <Lead>{cs.system.text}</Lead>

            <div className="mt-12">
              <h4 className="text-xl sm:text-2xl font-bold text-white">{cs.system.numberStates.title}</h4>
              <p className="mt-3 max-w-3xl text-sm text-subtext leading-relaxed">{cs.system.numberStates.text}</p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cs.system.numberStates.items.map(([h, t]) => (
                  <div key={h} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <div className="text-sm font-semibold text-white">{h}</div>
                    <p className="mt-2 text-xs sm:text-[13px] text-subtext leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Shot
                  src={img(cs.system.numberStates.image[0])}
                  alt={cs.system.numberStates.image[1]}
                  onClick={() => setZoom(img(cs.system.numberStates.image[0]))}
                />
              </div>
            </div>

            {cs.system.blocks.map((b) => (
              <div key={b.title} className="mt-14">
                <h4 className="text-xl sm:text-2xl font-bold text-white">{b.title}</h4>
                <p className="mt-3 max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{b.text}</p>
                <div
                  className={`mt-8 grid gap-6 items-start ${b.cols || (b.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1')} ${
                    b.cols && b.cols.includes('max-w') ? 'mx-auto' : ''
                  }`}
                >
                  {b.images.map(([n, alt]) => (
                    <Shot key={n} src={img(n)} alt={alt} onClick={() => setZoom(img(n))} />
                  ))}
                </div>
              </div>
            ))}
          </Section>

          {/* Decisions + outcome */}
          <Section eyebrow="09 — Decisions" title={cs.decisions.title} id="sm-decisions">
            <div className="rounded-2xl border border-white/[0.08] overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-widest text-muted">
                    <th className="px-5 py-3 font-semibold">Decision</th>
                    <th className="px-5 py-3 font-semibold">Traced to</th>
                    <th className="px-5 py-3 font-semibold">What it changed</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.decisions.rows.map(([d, src, what]) => (
                    <tr key={d} className="border-t border-white/[0.06] align-top">
                      <td className="px-5 py-4 font-semibold text-white">{d}</td>
                      <td className="px-5 py-4 text-emerald-200/80">{src}</td>
                      <td className="px-5 py-4 text-subtext">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white">Outcome — {cs.outcome.title}</h4>
            <p className="mt-3 max-w-3xl text-sm text-subtext leading-relaxed">{cs.outcome.text}</p>
            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {cs.outcome.items.map(([h, t]) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <p className="text-sm text-subtext leading-relaxed">
                    <strong className="text-white">{h}.</strong> {t}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          {/* Learnings */}
          <Section eyebrow="10 — Wrap-up" title={cs.learnings.title} id="sm-learnings">
            <div className="grid md:grid-cols-2 gap-5">
              {cs.learnings.items.map(([h, t]) => (
                <Card key={h} className="flex gap-4">
                  <BookOpen className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed">
                    <strong className="text-white">{h}</strong> {t}
                  </p>
                </Card>
              ))}
            </div>
            <p className="mt-10 max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{cs.learnings.next}</p>
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

        {zoom && (
          <div
            className="absolute inset-0 z-30 bg-black/90 overflow-auto p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setZoom(null)}
          >
            <img src={zoom} alt="" className="mx-auto max-w-full h-auto rounded-lg bg-white" />
          </div>
        )}
      </div>
    </div>
  );
}
