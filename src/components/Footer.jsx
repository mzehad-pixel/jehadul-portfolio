import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const YEAR = new Date().getFullYear();

const dhakaTime = () =>
  new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit', second: '2-digit' });

export default function Footer() {
  const { personal } = portfolioData;
  const [time, setTime] = useState(dhakaTime);
  const [emailUser, emailDomain] = personal.email.split('@');

  useEffect(() => {
    const id = setInterval(() => setTime(dhakaTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const columns = [
    {
      title: 'Quick Links',
      upper: true,
      links: [
        { label: 'About', href: '#about' },
        { label: 'Works', href: '#works' },
        { label: 'Process', href: '#process' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        { label: 'Behance', href: personal.behance, external: true },
        { label: 'Dribbble', href: personal.dribbble, external: true },
        { label: 'Portfolio', href: personal.portfolioShort, external: true },
        { label: 'Resume', href: personal.resumeUrl, external: true },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: personal.linkedin, external: true },
        { label: 'Email', href: `mailto:${personal.email}` },
        { label: 'Call', href: `tel:${personal.phone.replace(/\s/g, '')}` },
      ],
    },
  ];

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-8">

        {/* Top: photo, notes, email pill */}
        <div className="relative z-10 lg:-top-4 grid grid-cols-12 gap-x-4 gap-y-8 lg:gap-x-6">
          <div className="col-span-5 sm:col-span-4 lg:col-span-3 relative z-10">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="w-[85%] aspect-[5/6] object-cover object-top rounded-3xl"
            />
          </div>

          <div className="col-span-7 sm:col-span-8 lg:col-span-3 flex flex-col justify-between gap-6 text-[13px] leading-snug text-white">
            <p className="max-w-[12rem]">Let's create something meaningful together.</p>
            <p className="max-w-[15rem] lg:ml-auto lg:mb-auto lg:mt-28">
              Hit me up if you're looking for a {personal.role} who turns complex fintech flows into products that really work.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <a
              href={`mailto:${personal.email}`}
              className="group flex items-center justify-center w-full rounded-full bg-[#1a1a1a] hover:bg-[#222] transition-colors px-6 py-8 sm:py-12 lg:py-16"
            >
              <span className="font-bold tracking-tighter text-white leading-none whitespace-nowrap text-[clamp(1.75rem,8.5vw,3.75rem)] lg:text-[clamp(2rem,4.1vw,3.75rem)]">
                {emailUser}
                <span className="text-emerald-400 inline-block transition-transform duration-500 group-hover:rotate-[360deg]">@</span>
                {emailDomain}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom: big name and link columns */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mt-10 lg:mt-0">
          <h2
            aria-hidden="true"
            className="col-span-12 lg:col-span-6 lg:-mt-28 relative z-20 pointer-events-none select-none font-bold tracking-tighter leading-[0.82] text-[#1c1c1c] text-[clamp(4.5rem,24vw,10rem)] lg:text-[clamp(6rem,13vw,12rem)]"
          >
            Jehadul<br />Islam
          </h2>

          <nav className="col-span-12 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 lg:pt-12">
            {columns.map((col, i) => (
              <div key={col.title} className={i === columns.length - 1 ? 'sm:justify-self-end' : ''}>
                <h3 className="text-xs sm:text-sm uppercase text-white/35 mb-5">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`text-sm font-semibold text-white hover:text-emerald-400 transition-colors ${col.upper ? 'uppercase' : ''}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-12 lg:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/50">
          <p>Copyright © {YEAR} {personal.name} - {personal.role}</p>
          <p className="uppercase tabular-nums">Dhaka Time - {time}</p>
        </div>

      </div>
    </footer>
  );
}
