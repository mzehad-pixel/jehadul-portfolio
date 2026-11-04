import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Mobile Banking & Fintech UX',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main CTA Heading matching Specter */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-subtext mb-4">
            <Mail className="w-3.5 h-3.5 text-white/70" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Have a Project In Mind? <br />
            <span className="font-serif italic font-normal text-white/90">Let's Create Together!</span>
          </h2>
          <p className="text-subtext text-sm sm:text-base max-w-xl mx-auto font-normal">
            Whether you need a banking app designed from concept to implementation, a conversion-focused e-commerce experience, or a Senior UX Designer for your product team.
          </p>
        </div>

        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: direct contact info */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-6 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-subtext leading-relaxed">
                Feel free to email me or call directly.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-muted block uppercase tracking-wider font-semibold">Email</span>
                  <a href={`mailto:${personal.email}`} className="text-xs sm:text-sm font-semibold text-white hover:underline">
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 transition"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-muted block uppercase tracking-wider font-semibold">Phone / Mobile</span>
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-white hover:underline">
                  {personal.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Right: inquiry form */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
            {isSubmitted ? (
              <div className="py-16 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-subtext text-sm max-w-md mx-auto mb-6">
                  Thank you, {formState.name}! I have received your message and will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', service: 'Mobile Banking & Fintech UX', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Clark"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-white/30 text-sm text-white placeholder-white/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-white/30 text-sm text-white placeholder-white/20 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                    Service / Area of Interest
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/[0.08] focus:border-white/30 text-sm text-white outline-none transition"
                  >
                    <option value="Mobile Banking & Fintech UX">Mobile Banking & Fintech UX</option>
                    <option value="Design System & Atomic Tokens">Design System & Atomic Tokens</option>
                    <option value="E-Commerce & Checkout Optimization">E-Commerce & Checkout Optimization</option>
                    <option value="SAAS & Enterprise Workflows">SAAS & Enterprise Workflows</option>
                    <option value="Full-time UX Designer Role">Full-time UX Designer Role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                    Project Details / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product requirements, team goals, and timeline..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-white/30 text-sm text-white placeholder-white/20 outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-xl shadow-white/5"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
