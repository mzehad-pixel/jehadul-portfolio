import React, { useEffect, useRef, useState } from 'react';
import { X, Wallet, Target, ArrowRight, ExternalLink, Check, BookOpen } from 'lucide-react';
import { deshiPayCaseStudy as cs } from '../data/deshiPayCaseStudy';

const NAV = [
  ['overview', 'Overview'],
  ['problem', 'Problem'],
  ['scope', 'Scope'],
  ...cs.flows.map((f) => [f.id, f.nav]),
  ['decisions', 'Decisions'],
  ['learnings', 'Learnings'],
];

const img = cs.img;

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

// Source screens are 188px wide, so phones render at that width to stay sharp.
function Phone({ src, alt, onClick }) {
  return (
    <figure className="w-[200px] shrink-0">
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
            {i < screens.length - 1 && <ArrowRight className="w-4 h-4 text-white/25 mt-[200px]" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DeshiPayCaseStudyModal({ onClose }) {
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
    const el = root && root.querySelector(`#dp-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="DeshiPay case study"
    >
      <div
        className="relative w-full max-w-[1320px] h-full sm:h-[94vh] sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 inset-x-0 z-20 glass-nav flex items-center justify-between gap-4 px-4 sm:px-8 h-14">
          <div className="flex items-center gap-2.5 min-w-0">
            <Wallet className="w-4 h-4 text-green-300 shrink-0" />
            <span className="text-sm font-semibold text-white truncate">DeshiPay Case Study</span>
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
            <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-green-500/20 blur-[120px]" />
            <div className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-lime-300/10 blur-[120px]" />
            <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center px-6 sm:px-10 lg:px-14 pt-14 pb-16">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-6">
                  <Wallet className="w-7 h-7 text-green-300" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">UX Case Study · DeshiPay</div>
                <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02]">
                  {cs.hero.title}
                </h2>
                <p className="mt-6 text-base sm:text-lg text-white/75">{cs.hero.subtitle}</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <img src={cs.hero.image} alt="DeshiPay app screens" className="block w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16">
            <Eyebrow>01 — Overview</Eyebrow>
            <h3 id="dp-overview" className="text-2xl sm:text-4xl font-bold text-white tracking-tight scroll-mt-24">
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
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-green-300 hover:text-green-200 transition"
            >
              View the live app on Google Play <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </section>

          {/* Problem */}
          <Section eyebrow="02 — Background" title={cs.problem.title} id="dp-problem">
            <Lead>{cs.problem.text}</Lead>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {cs.problem.points.map(([h, t]) => (
                <Card key={h}>
                  <h5 className="text-white font-semibold">{h}</h5>
                  <p className="mt-2 text-sm text-subtext leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-green-400/25 bg-green-500/[0.06] p-6 flex gap-4">
              <Target className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed">
                <strong className="text-white">The problem, in one line:</strong> {cs.problem.statement}
              </p>
            </div>
          </Section>

          {/* Scope */}
          <Section eyebrow="03 — Scope" title={cs.scope.title} id="dp-scope">
            <Lead>{cs.scope.text}</Lead>
            <div className="mt-8 rounded-2xl border border-white/[0.08] overflow-hidden">
              {cs.scope.rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid sm:grid-cols-[240px_1fr] gap-1 sm:gap-6 px-5 py-4 ${i ? 'border-t border-white/[0.06]' : ''}`}
                >
                  <div className="text-sm font-semibold text-white">{k}</div>
                  <div className="text-sm text-subtext leading-relaxed">{v}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* Flows */}
          {cs.flows.map((f, idx) => (
            <Section key={f.id} eyebrow={`${String(idx + 4).padStart(2, '0')} — ${f.eyebrow}`} title={f.title} id={`dp-${f.id}`}>
              <Lead>{f.text}</Lead>
              <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${f.points.length === 4 ? 'lg:grid-cols-4' : f.points.length > 2 ? 'lg:grid-cols-3' : ''}`}>
                {f.points.map(([h, t]) => (
                  <Card key={h} className="!p-5">
                    <h5 className="text-white font-semibold">{h}</h5>
                    <p className="mt-2 text-xs sm:text-[13px] text-subtext leading-relaxed">{t}</p>
                  </Card>
                ))}
              </div>
              {f.feature && (
                <div className="mt-10 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">{f.feature.title}</h4>
                    <p className="mt-3 max-w-xl text-sm sm:text-[15px] text-subtext leading-relaxed">{f.feature.text}</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-10">
                    {f.feature.screens.map(([n, label]) => (
                      <figure key={n} className="w-[240px]">
                        <div
                          onClick={() => setZoom(img(n))}
                          className="rounded-[1.9rem] p-[7px] bg-gradient-to-b from-neutral-700 to-neutral-900 border border-white/15 shadow-2xl shadow-black/60 cursor-zoom-in"
                        >
                          <div className="rounded-[1.5rem] overflow-hidden bg-white">
                            <img src={img(n)} alt={label} loading="lazy" className="block w-full h-auto" />
                          </div>
                        </div>
                        <figcaption className="mt-3 text-xs font-semibold text-green-200/90 text-center">{label}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
              <PhoneStrip screens={f.screens} onZoom={setZoom} />
              {f.id === 'access' && (
                <>
                  <h4 className="mt-12 text-lg font-bold text-white">{cs.settings.title}</h4>
                  <PhoneStrip screens={cs.settings.screens} onZoom={setZoom} />
                </>
              )}
            </Section>
          ))}

          {/* Decisions + outcome */}
          <Section eyebrow="10 — Decisions" title={cs.decisions.title} id="dp-decisions">
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
                      <td className="px-5 py-4 text-green-200/80">{src}</td>
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
                  <Check className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                  <p className="text-sm text-subtext leading-relaxed">
                    <strong className="text-white">{h}.</strong> {t}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          {/* Learnings */}
          <Section eyebrow="11 — Wrap-up" title={cs.learnings.title} id="dp-learnings">
            <div className="grid md:grid-cols-2 gap-5">
              {cs.learnings.items.map(([h, t]) => (
                <Card key={h} className="flex gap-4">
                  <BookOpen className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
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
            className="absolute inset-0 z-30 bg-black/90 overflow-auto p-4 sm:p-8 cursor-zoom-out flex items-start justify-center"
            onClick={() => setZoom(null)}
          >
            <img src={zoom} alt="" className="w-[376px] max-w-full h-auto rounded-2xl bg-white" />
          </div>
        )}
      </div>
    </div>
  );
}
