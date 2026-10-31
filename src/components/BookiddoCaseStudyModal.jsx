import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  PartyPopper,
  Target,
  Users,
  ArrowRight,
  ExternalLink,
  Check,
  Lightbulb,
  Wrench,
  BookOpen,
} from 'lucide-react';
import { bookiddoCaseStudy as cs } from '../data/bookiddoCaseStudy';

const NAV = [
  ['overview', 'Overview'],
  ['problem', 'Problem'],
  ['users', 'Users'],
  ['flows', 'Flows'],
  ['screens', 'Screens'],
  ['onboarding', 'Onboarding'],
  ['dashboard', 'Dashboards'],
  ['system', 'System'],
  ['learnings', 'Learnings'],
];

const img = (n) => `/bookiddo/${n}.webp`;

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

function Browser({ src, alt, className = '', onClick }) {
  return (
    <figure className={className}>
      <div
        className={`rounded-xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl shadow-black/50 ${
          onClick ? 'cursor-zoom-in' : ''
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-1.5 px-3 h-7 bg-neutral-800 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto bg-white" />
      </div>
      {alt && <figcaption className="mt-3 text-xs text-muted text-center">{alt}</figcaption>}
    </figure>
  );
}

function Gallery({ images, onZoom, cols }) {
  const grid = cols || (images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3');
  return (
    <div className={`mt-8 grid gap-6 items-start ${grid}`}>
      {images.map(([src, alt]) => (
        <Browser key={src} src={src.startsWith('/') ? src : img(src)} alt={alt} onClick={() => onZoom(src.startsWith('/') ? src : img(src))} />
      ))}
    </div>
  );
}

function Block({ title, text, images, onZoom, cols }) {
  return (
    <div className="mt-14 first:mt-0">
      <h4 className="text-xl sm:text-2xl font-bold text-white">{title}</h4>
      <p className="mt-3 max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{text}</p>
      <Gallery images={images} onZoom={onZoom} cols={cols} />
    </div>
  );
}

export default function BookiddoCaseStudyModal({ onClose }) {
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
    const el = root && root.querySelector(`#bk-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const w = cs.walkthrough;
  const dashImgs = w.dashboard.images.map(([n, a]) => [img(n), a]);
  const adminImgs = w.admin.images.map(([n, a]) => [img(n), a]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Bookiddo case study"
    >
      <div
        className="relative w-full max-w-[1320px] h-full sm:h-[94vh] sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 inset-x-0 z-20 glass-nav flex items-center justify-between gap-4 px-4 sm:px-8 h-14">
          <div className="flex items-center gap-2.5 min-w-0">
            <PartyPopper className="w-4 h-4 text-rose-300 shrink-0" />
            <span className="text-sm font-semibold text-white truncate">Bookiddo Case Study</span>
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
            <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-rose-500/20 blur-[120px]" />
            <div className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-teal-400/10 blur-[120px]" />
            <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center px-6 sm:px-10 lg:px-14 pt-14 pb-16">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-6">
                  <PartyPopper className="w-7 h-7 text-rose-300" />
                </div>
                <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02]">
                  {cs.hero.title}
                </h2>
                <p className="mt-6 text-base sm:text-lg text-white/75">{cs.hero.subtitle}</p>
              </div>
              <div className="relative max-h-[430px] overflow-hidden rounded-xl">
                <Browser src={cs.hero.image} alt="" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16">
            <Eyebrow>01 — Overview</Eyebrow>
            <h3 id="bk-overview" className="text-2xl sm:text-4xl font-bold text-white tracking-tight scroll-mt-24">
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
          </section>

          {/* Problem */}
          <Section eyebrow="02 — Context" title={cs.problem.title} id="bk-problem">
            <div className="grid lg:grid-cols-2 gap-6">
              {cs.problem.paragraphs.map((p, i) => (
                <Card key={i} className="flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-400/20 flex items-center justify-center">
                    {i === 0 ? <Target className="w-5 h-5 text-rose-300" /> : <Lightbulb className="w-5 h-5 text-rose-300" />}
                  </div>
                  <p className="text-sm text-subtext leading-relaxed">{p}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* Users */}
          <Section eyebrow="03 — Audience" title={cs.roles.title} id="bk-users">
            <div className="grid md:grid-cols-2 gap-5">
              {cs.roles.rows.map((r) => (
                <Card key={r.role}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white/85" />
                    </div>
                    <h4 className="text-white font-semibold">{r.role}</h4>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{r.who}</p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-muted">What they need to do</p>
                  <p className="mt-1 text-sm text-subtext leading-relaxed">{r.needs}</p>
                </Card>
              ))}
            </div>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white">{cs.goals.title}</h4>
            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {cs.goals.items.map(([h, t]) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <p className="text-sm text-subtext leading-relaxed">
                    <strong className="text-white">{h}</strong> {t}
                  </p>
                </li>
              ))}
            </ul>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white">{cs.scope.title}</h4>
            <p className="mt-3 max-w-3xl text-sm text-subtext">{cs.scope.text}</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cs.scope.items.map(([h, t]) => (
                <div key={h} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <div className="text-sm font-semibold text-white">{h}</div>
                  <p className="mt-2 text-xs sm:text-[13px] text-subtext leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Flows */}
          <Section eyebrow="04 — Flows" title={cs.flows.title} id="bk-flows">
            <div className="space-y-10">
              {cs.flows.items.map((f, i) => (
                <div key={f.title} className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8">
                  <div className="text-[11px] font-bold tracking-widest text-rose-300">{`0${i + 1}`}</div>
                  <h4 className="mt-1 text-xl font-bold text-white">{f.title}</h4>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {f.steps.map((s, j) => (
                      <React.Fragment key={s}>
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-100 border border-rose-400/25">
                          {s}
                        </span>
                        {j < f.steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-white/30" />}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="mt-6 max-w-4xl text-sm text-subtext leading-relaxed">{f.text}</p>
                  {f.intent && <p className="mt-3 max-w-4xl text-sm text-white/80 leading-relaxed">{f.intent}</p>}
                </div>
              ))}
            </div>
          </Section>

          {/* Screens */}
          <Section eyebrow="05 — Interface" title={w.title} id="bk-screens">
            <Block {...w.home} onZoom={setZoom} cols="md:grid-cols-2" />
            <Block {...w.auth} onZoom={setZoom} />
            <Block {...w.listing} onZoom={setZoom} />
            <Block {...w.detail} onZoom={setZoom} />
            <Block {...w.checkout} onZoom={setZoom} />
            <Block {...w.portal} onZoom={setZoom} />
          </Section>

          {/* Onboarding */}
          <Section eyebrow="06 — Vendors" title={w.onboarding.title} id="bk-onboarding">
            <p className="max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{w.onboarding.text}</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {w.onboarding.steps.map(([n, label]) => (
                <Browser key={n} src={img(n)} alt={label} onClick={() => setZoom(img(n))} />
              ))}
            </div>
            <h4 className="mt-14 text-lg font-bold text-white">Service-details variants by category</h4>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {w.onboarding.variants.map(([n, label]) => (
                <Browser key={n} src={img(n)} alt={label} onClick={() => setZoom(img(n))} />
              ))}
            </div>
          </Section>

          {/* Dashboards */}
          <Section eyebrow="07 — Operations" title={w.dashboard.title} id="bk-dashboard">
            <p className="max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{w.dashboard.text}</p>
            <Gallery images={dashImgs} onZoom={setZoom} cols="md:grid-cols-2" />
            <h4 className="mt-16 text-xl sm:text-2xl font-bold text-white">{w.admin.title}</h4>
            <p className="mt-3 max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{w.admin.text}</p>
            <Gallery images={adminImgs} onZoom={setZoom} cols="md:grid-cols-2" />
          </Section>

          {/* System + decisions */}
          <Section eyebrow="08 — System" title={cs.system.title} id="bk-system">
            <div className="flex flex-wrap gap-3 mb-8">
              {cs.system.swatches.map((c) => (
                <span key={c} className="w-12 h-12 rounded-xl border border-white/15" style={{ background: c }} title={c} />
              ))}
            </div>
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
              {cs.system.rows.map(([k, v], i) => (
                <div key={k} className={`grid md:grid-cols-[180px_1fr] gap-1 md:gap-6 px-5 py-4 ${i ? 'border-t border-white/[0.06]' : ''}`}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted">{k}</div>
                  <div className="text-sm text-subtext leading-relaxed">{v}</div>
                </div>
              ))}
            </div>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white">{cs.decisions.title}</h4>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {cs.decisions.items.map(([h, t], i) => (
                <Card key={h}>
                  <div className="text-[11px] font-bold tracking-widest text-rose-300">{String(i + 1).padStart(2, '0')}</div>
                  <h5 className="mt-1 text-white font-semibold">{h}</h5>
                  <p className="mt-2 text-sm text-subtext leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>

            <h4 className="mt-14 text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-5 h-5 text-white/60" />
              {cs.refinements.title}
            </h4>
            <ul className="mt-6 space-y-3 max-w-4xl">
              {cs.refinements.items.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-subtext leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-300 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </Section>

          {/* Learnings */}
          <Section eyebrow="09 — Wrap-up" title={cs.learnings.title} id="bk-learnings">
            <div className="grid md:grid-cols-2 gap-5">
              {cs.learnings.items.map((t) => (
                <Card key={t} className="flex gap-4">
                  <BookOpen className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed">{t}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 max-w-3xl text-sm sm:text-[15px] text-subtext leading-relaxed">{cs.summary}</p>
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
