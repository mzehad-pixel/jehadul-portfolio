import React, { useEffect, useRef, useState } from 'react';
import { X, ShoppingBag, ArrowRight, ArrowUpRight, Check, TrendingUp, Search, AlertCircle } from 'lucide-react';
import { mikeSportCaseStudy as cs } from '../data/mikeSportCaseStudy';

const ACCENT = 'text-orange-400';

const NAV = [
  ['overview', 'Overview'],
  ['challenge', 'Challenge'],
  ['research', 'Research'],
  ['strategy', 'Strategy'],
  ['showcase', 'Showcase'],
  ['impact', 'Impact'],
  ['learnings', 'Learnings'],
];

/* ---------- small building blocks ---------- */

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ num, children }) {
  return (
    <div className="flex items-center gap-3 mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
      <span className={ACCENT}>{num}</span>
      <span className="w-8 h-px bg-white/25" />
      <span>{children}</span>
    </div>
  );
}

function H2({ id, children }) {
  return (
    <h3
      id={id}
      className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05] scroll-mt-24"
    >
      {children}
    </h3>
  );
}

function Section({ num, eyebrow, title, id, tone = 'a', children }) {
  const bg = tone === 'b' ? 'bg-[#101010]' : tone === 'c' ? 'bg-[#141414]' : 'bg-[#0a0a0a]';
  return (
    <section className={`${bg} px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-t border-white/[0.06]`}>
      <Reveal>
        <Eyebrow num={num}>{eyebrow}</Eyebrow>
        <H2 id={id}>{title}</H2>
      </Reveal>
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  );
}

function Browser({ src, alt, url = 'mikesport.com', className = '' }) {
  return (
    <div className={`rounded-lg overflow-hidden border border-white/[0.12] bg-[#1b1b1e] shadow-2xl shadow-black/60 ${className}`}>
      <div className="flex items-center gap-2 px-4 h-9 bg-[#232327] border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 max-w-sm h-5 rounded bg-black/40 text-[10px] text-white/45 flex items-center justify-center">
          {url}
        </div>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full h-auto bg-white" />
    </div>
  );
}

function Phone({ src, alt, className = '' }) {
  return (
    <div className={`shrink-0 rounded-[1.7rem] p-[6px] bg-gradient-to-b from-neutral-600 to-neutral-900 border border-white/15 shadow-2xl shadow-black/60 ${className}`}>
      <div className="rounded-[1.4rem] overflow-hidden bg-white">
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
      </div>
    </div>
  );
}

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2 mt-5">
      {items.map((p) => (
        <li key={p} className="text-[11px] px-2.5 py-1 rounded border border-white/10 text-subtext bg-white/[0.03]">
          {p}
        </li>
      ))}
    </ul>
  );
}

function Shot({ src, alt, caption, className = '' }) {
  return (
    <figure className={className}>
      <div className="rounded-lg overflow-hidden border border-white/10 bg-white">
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
      </div>
      {caption && <figcaption className="mt-2.5 text-xs text-muted leading-relaxed">{caption}</figcaption>}
    </figure>
  );
}

/* ---------- main component ---------- */

export default function MikeSportCaseStudyModal({ onClose, onNext, nextTitle }) {
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

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  const jump = (id) => {
    const el = scrollRef.current && scrollRef.current.querySelector(`#ms-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const { showcase: sc } = cs;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mike Sport case study"
    >
      <div
        className="relative w-full max-w-[1320px] h-full sm:h-[94vh] sm:rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black bg-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 z-20 glass-nav flex items-center justify-between gap-4 px-4 sm:px-8 h-14">
          <div className="flex items-center gap-2.5 min-w-0">
            <ShoppingBag className="w-4 h-4 text-white/80 shrink-0" />
            <span className="text-sm font-semibold text-white truncate">Mike Sport Case Study</span>
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

        <div ref={scrollRef} className="h-full overflow-y-auto pt-14 scroll-smooth">
          {/* 01 Hero */}
          <section className="relative px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-14 sm:pb-20 overflow-hidden">
            <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
            <Reveal>
              <Eyebrow num="01">Case study · Sports E-commerce</Eyebrow>
              <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-[0.95]">
                Mike <span className={ACCENT}>Sport</span>
              </h2>
              <p className="mt-6 max-w-3xl font-display text-xl sm:text-3xl text-white/90 font-semibold leading-snug">
                {cs.hero.subtitle}
              </p>
              <p className="mt-5 max-w-2xl text-sm sm:text-base text-subtext leading-relaxed">{cs.hero.intro}</p>
            </Reveal>

            <Reveal delay={120} className="mt-12 sm:mt-16">
              <Browser src={cs.hero.image} alt="Redesigned Mike Sport homepage" />
            </Reveal>

            <Reveal delay={80}>
              <dl className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-6 border-t border-white/10 pt-8">
                {cs.hero.meta.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted mb-1.5">{k}</dt>
                    <dd className="text-sm text-white font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </section>

          {/* 02 Overview */}
          <Section num="02" eyebrow="Overview" title={cs.overview.title} id="ms-overview" tone="b">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
              <Reveal className="space-y-5 text-sm sm:text-base text-subtext leading-relaxed max-w-xl">
                <p>{cs.overview.text}</p>
                <p className="text-white/90 border-l-2 border-orange-400 pl-4">{cs.overview.objective}</p>
              </Reveal>
              <div className="grid grid-cols-3 gap-4">
                {cs.overview.stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 90}>
                    <div className="border-t-2 border-white/80 pt-4">
                      <div className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">{s.value}</div>
                      <div className="mt-2 text-xs text-muted leading-snug">{s.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Section>

          {/* 03 Challenge */}
          <Section num="03" eyebrow="Challenge" title={cs.challenge.title} id="ms-challenge">
            <p className="max-w-2xl text-sm sm:text-base text-subtext leading-relaxed mb-10">{cs.challenge.intro}</p>
            <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-12">
              <ol className="divide-y divide-white/[0.08] border-y border-white/[0.08] self-start">
                {cs.challenge.items.map((t, i) => (
                  <Reveal key={t} delay={i * 50}>
                    <li className="flex items-start gap-4 py-4">
                      <span className={`font-display font-bold text-sm ${ACCENT} w-6 shrink-0`}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-sm sm:text-[15px] text-white/90 leading-relaxed">{t}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <div className="grid sm:grid-cols-2 gap-5">
                {cs.challenge.shots.map((s, i) => (
                  <Reveal key={s.src} delay={i * 100}>
                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#1b1b1e]">
                      <div className="flex items-center gap-2 px-3 h-7 bg-[#232327] border-b border-white/10 text-[10px] text-white/50">
                        <AlertCircle className="w-3 h-3 text-rose-400" /> Original website
                      </div>
                      <div className="max-h-[560px] overflow-hidden relative">
                        <img src={s.src} alt={s.caption} loading="lazy" className="block w-full h-auto bg-white" />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1b1b1e] to-transparent" />
                      </div>
                    </div>
                    <p className="mt-2.5 text-xs text-muted leading-relaxed">{s.caption}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Section>

          {/* 04 Research */}
          <Section num="04" eyebrow="Audit & research" title={cs.research.title} id="ms-research" tone="c">
            <p className="max-w-2xl text-sm sm:text-base text-subtext leading-relaxed mb-10">{cs.research.intro}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-lg overflow-hidden">
              {cs.research.areas.map(([t, d], i) => (
                <div key={t} className="bg-[#141414] p-6">
                  <div className={`font-display font-bold text-sm ${ACCENT} mb-3`}>{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="text-white font-semibold mb-2">{t}</h4>
                  <p className="text-sm text-subtext leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
              <Reveal>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted mb-4">
                    <Search className="w-3.5 h-3.5" /> Research input
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white mb-3">{cs.research.hotjar.title}</h4>
                  <p className="text-sm text-subtext leading-relaxed">{cs.research.hotjar.text}</p>
                </div>
                <h4 className="font-display text-2xl font-bold text-white mt-10 mb-3">{cs.research.method.title}</h4>
                <p className="text-sm text-subtext leading-relaxed">{cs.research.method.text}</p>
              </Reveal>
              <Reveal delay={100}>
                <Shot src={cs.research.method.image} alt="E-commerce CRO checklist" caption="E-commerce CRO checklist used to review the store." />
              </Reveal>
            </div>
          </Section>

          {/* 05 Strategy */}
          <Section num="05" eyebrow="Design strategy" title={cs.strategy.title} id="ms-strategy">
            <p className="max-w-2xl text-sm sm:text-base text-subtext leading-relaxed mb-12">{cs.strategy.intro}</p>
            <div className="space-y-16 sm:space-y-24">
              {cs.strategy.items.map((it, i) => (
                <Reveal key={it.title}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center`}>
                    <div className={i % 2 ? 'lg:order-2' : ''}>
                      <div className={`font-display font-extrabold text-6xl ${ACCENT} opacity-80 leading-none`}>{String(i + 1).padStart(2, '0')}</div>
                      <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mt-4 mb-6 leading-tight">{it.title}</h4>
                      <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed">
                        <p className="text-subtext">
                          <span className="text-[11px] uppercase tracking-[0.18em] text-rose-300 block mb-1">Problem</span>
                          {it.problem}
                        </p>
                        <p className="text-white/90">
                          <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 block mb-1">Design response</span>
                          {it.response}
                        </p>
                      </div>
                    </div>
                    <div className={i % 2 ? 'lg:order-1' : ''}>
                      {it.images ? (
                        <div className="flex justify-center gap-5">
                          {it.images.map((s) => (
                            <Phone key={s} src={s} alt={it.title} className="w-[42%] max-w-[220px] self-start max-h-[420px] overflow-hidden" />
                          ))}
                        </div>
                      ) : it.wide ? (
                        <Browser src={it.image} alt={it.title} />
                      ) : (
                        <div className="rounded-lg overflow-hidden border border-white/10 bg-white max-w-md mx-auto lg:mx-0">
                          <img src={it.image} alt={it.title} loading="lazy" className="block w-full h-auto" />
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          {/* 06 Showcase */}
          <Section num="06" eyebrow="Design showcase" title={sc.title} id="ms-showcase" tone="b">
            <p className="max-w-2xl text-sm sm:text-base text-subtext leading-relaxed -mt-4 mb-14">{sc.intro}</p>

            {/* A. Homepage */}
            <div className="mb-24">
              <SubHead title={sc.home.title} points={sc.home.points} />
              <Reveal>
                <Browser src={sc.home.hero} alt="Homepage hero" />
              </Reveal>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {sc.home.full.map((s, i) => (
                  <Reveal key={s} delay={i * 100}>
                    <Browser src={s} alt={`Homepage, part ${i + 1}`} />
                  </Reveal>
                ))}
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {sc.home.details.map((d, i) => (
                  <Reveal key={d.label} delay={i * 80}>
                    <Shot src={d.src} alt={d.label} caption={d.label} />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* B. Navigation */}
            <div className="mb-24">
              <SubHead title={sc.nav.title} points={sc.nav.points} />
              <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8 items-start">
                <Reveal>
                  <Browser src={sc.nav.header} alt="Header navigation and search" />
                </Reveal>
                <Reveal delay={100}>
                  <div className="max-w-[260px] mx-auto lg:mx-0">
                    <Shot src={sc.nav.filter} alt="Filter panel" caption={sc.nav.filterCaption} />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* C. Brand */}
            <div className="mb-24">
              <SubHead title={sc.brand.title} points={sc.brand.points} />
              <div className="space-y-6">
                {sc.brand.images.map((s, i) => (
                  <Reveal key={s} delay={i * 100}>
                    <Browser src={s} alt={sc.brand.title} />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* D. Product discovery */}
            <div className="mb-24">
              <SubHead title={sc.product.title} points={sc.product.points} />
              <Reveal>
                <Browser src={sc.product.list} alt="Product list page" url="mikesport.com / products" />
              </Reveal>
              <div className="mt-10">
                <h5 className="font-display text-xl font-bold text-white mb-5">Product details &amp; cart</h5>
                <div className="grid lg:grid-cols-2 gap-6">
                  <Reveal>
                    <Browser src={sc.product.pdp} alt="Product details page" url="mikesport.com / product" />
                  </Reveal>
                  <Reveal delay={100}>
                    <Browser src={sc.product.cart} alt="Shopping cart" url="mikesport.com / cart" />
                  </Reveal>
                </div>
              </div>
            </div>

            {/* E. Mobile */}
            <div>
              <SubHead title={sc.mobile.title} points={sc.mobile.points} />
              <div className="-mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16 overflow-x-auto pb-6">
                <div className="flex gap-6 lg:gap-8 min-w-max lg:min-w-0 lg:justify-center">
                  {sc.mobile.phones.map((p, i) => (
                    <Reveal key={p.src} delay={i * 70} className="flex flex-col items-center gap-3">
                      <Phone src={p.src} alt={p.label} className="w-[190px] sm:w-[210px] max-h-[520px] overflow-hidden" />
                      <span className="text-[11px] uppercase tracking-[0.18em] text-muted">{p.label}</span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* 07 Impact */}
          <section className="bg-orange-500 text-black px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-t border-white/[0.06]">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">
                <span>07</span>
                <span className="w-8 h-px bg-black/30" />
                <span>Business impact &amp; results</span>
              </div>
              <h3 id="ms-impact" className="sr-only scroll-mt-24">{cs.impact.title}</h3>
              <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-end">
                <div className="font-display font-extrabold leading-[0.85] tracking-tighter text-[7rem] sm:text-[11rem] lg:text-[14rem]">
                  {cs.impact.value}
                </div>
                <div className="pb-2 sm:pb-6 max-w-xl">
                  <div className="font-display text-2xl sm:text-4xl font-bold leading-tight flex items-start gap-3">
                    <TrendingUp className="w-7 h-7 sm:w-9 sm:h-9 shrink-0 mt-1" />
                    {cs.impact.label}
                  </div>
                  <p className="mt-5 text-sm sm:text-base text-black/75 leading-relaxed">{cs.impact.note}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-black/20 pt-8">
                {cs.impact.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm sm:text-base font-semibold leading-snug">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* 08 Learnings */}
          <Section num="08" eyebrow="Key learnings" title={cs.learnings.title} id="ms-learnings">
            <ol className="grid md:grid-cols-2 gap-x-14 border-t border-white/10">
              {cs.learnings.items.map((t, i) => (
                <Reveal key={t} delay={(i % 2) * 80}>
                  <li className="flex items-start gap-5 py-6 border-b border-white/10">
                    <span className={`font-display font-extrabold text-3xl ${ACCENT} leading-none w-10 shrink-0`}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-white/90 text-base sm:text-lg leading-snug font-medium">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Section>

          {/* 09 Closing */}
          <section className="bg-[#101010] px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-t border-white/[0.06]">
            <Reveal>
              <div className="flex items-center gap-3 mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                <span className={ACCENT}>09</span>
                <span className="w-8 h-px bg-white/25" />
                <span>Closing</span>
              </div>
              <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-4xl">
                “{cs.closing.quote}”
              </blockquote>
              <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-5">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition"
                >
                  Back to portfolio
                </button>
                {onNext && (
                  <button onClick={onNext} className="group text-left">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted mb-1">Next project</div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-white inline-flex items-center gap-3 group-hover:text-orange-400 transition">
                      {nextTitle}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </div>
                  </button>
                )}
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition"
                >
                  <span>Inquire About Similar Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </div>
  );
}

function SubHead({ title, points }) {
  return (
    <Reveal className="mb-8">
      <h4 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h4>
      <Tags items={points} />
    </Reveal>
  );
}
