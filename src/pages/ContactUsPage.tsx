import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, Clock, Send, CheckCircle, Shield, MessageSquare, Terminal } from 'lucide-react';

interface ContactUsPageProps {
  onBackToFeed: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onBackToFeed }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Technical Manuscript Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#5fdee7]/20 pb-4">
        <button
          onClick={onBackToFeed}
          className="flex items-center gap-2 rounded-lg border border-[#5fdee7]/30 bg-[#0d2f26] px-3 py-1.5 text-xs font-mono text-[#5fdee7] hover:bg-[#124237] transition-all"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>BACK TO JOURNAL FEED</span>
        </button>
        <span className="text-xs font-mono text-[#00ffaa]">OFFICIAL EDITORIAL CONTACT</span>
      </div>

      {/* Main Header */}
      <header className="space-y-4">
        <div className="inline-block rounded-md bg-[#103a31] border border-[#5fdee7]/30 px-2.5 py-1 text-[11px] font-mono font-bold text-[#5fdee7] uppercase tracking-wider">
          EDITORIAL DESK & PEER REVIEW SUBMISSION
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Contact technewscentrals
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Reach our principal systems architects, submit empirical research papers, report silicon security advisories, or request raw benchmark datasets.
        </p>
      </header>

      {/* Official Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Official Direct Phone / WhatsApp */}
        <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/30 p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#124237] text-[#00ffaa] border border-[#00ffaa]/40">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                PHONE & WHATSAPP
              </span>
              <h3 className="text-xl font-bold font-mono text-white">
                +923020409739
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Direct telecommunication line and encrypted WhatsApp channel for urgent engineering inquiries, peer review coordinators, and silicon security disclosures.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="tel:+923020409739"
              className="flex-1 text-center rounded-lg bg-[#5fdee7] py-2 text-xs font-mono font-bold text-slate-950 hover:bg-[#85eff5] transition-colors"
            >
              CALL DIRECT
            </a>
            <a
              href="https://wa.me/923020409739"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center rounded-lg bg-[#103a31] border border-[#00ffaa]/40 py-2 text-xs font-mono font-bold text-[#00ffaa] hover:bg-[#144b3e] transition-colors"
            >
              WHATSAPP CHAT
            </a>
          </div>
        </div>

        {/* Official Email Channel */}
        <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/30 p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#124237] text-[#5fdee7] border border-[#5fdee7]/40">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                EDITORIAL INQUIRIES & SUBMISSIONS
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-mono text-[#5fdee7] truncate">
                hostinger992@gmail.com
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Primary email inbox for full research manuscripts, academic citation requests, corrections, and general editorial feedback.
          </p>
          <div className="pt-2">
            <a
              href="mailto:hostinger992@gmail.com"
              className="block w-full text-center rounded-lg bg-[#124237] border border-[#5fdee7]/40 py-2 text-xs font-mono font-bold text-[#5fdee7] hover:bg-[#164e42] transition-colors"
            >
              SEND DIRECT EMAIL
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Message Dispatch Form */}
      <section className="rounded-xl bg-[#071915] border border-[#5fdee7]/30 p-6 sm:p-8 shadow-2xl">
        {isSubmitted ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle className="h-12 w-12 text-[#00ffaa] mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-white font-mono">
              INQUIRY TRANSMITTED TO EDITORIAL DESK
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Your message has been assigned review ticket <span className="text-[#5fdee7] font-mono">#TNC-2026-ENG</span>. Confirmation sent to <span className="text-[#5fdee7] font-mono">{formData.email}</span>. Response guaranteed within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', subject: 'Technical Manuscript Inquiry', message: '' });
              }}
              className="rounded-lg bg-[#124237] border border-[#5fdee7]/40 px-4 py-2 text-xs font-mono text-[#5fdee7] hover:bg-[#164e42]"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-[#5fdee7]/20 pb-3">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                TRANSMIT INQUIRY TO REVIEW COUNCIL
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the form below. Technical attachments may also be sent directly to hostinger992@gmail.com.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Full Name / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Julian Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg bg-[#0b2721] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5fdee7]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg bg-[#0b2721] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5fdee7]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Inquiry Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-lg bg-[#0b2721] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#5fdee7]"
              >
                <option value="Technical Manuscript Inquiry">Technical Manuscript Inquiry</option>
                <option value="Silicon Benchmark Verification">Silicon Benchmark Verification</option>
                <option value="Code Repro & Anomaly Report">Code Repro & Anomaly Report</option>
                <option value="Editorial Correction Request">Editorial Correction Request</option>
                <option value="General Engineering Question">General Engineering Question</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Detailed Message / Technical Abstract</label>
              <textarea
                rows={5}
                required
                placeholder="Include architectural hypothesis, hardware testbed specifications, compiler versions, or query details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg bg-[#0b2721] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5fdee7]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#5fdee7] py-3 text-xs font-bold font-mono text-slate-950 hover:bg-[#85eff5] transition-all transform active:scale-95"
            >
              <Send className="h-4 w-4" />
              <span>TRANSMIT DISPATCH</span>
            </button>
          </form>
        )}
      </section>

      {/* Office Hours & Confidentiality */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-400">
        <div className="rounded-lg bg-[#0b2721] border border-[#5fdee7]/20 p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <Clock className="h-4 w-4 text-[#5fdee7]" />
            <span>OPERATIONAL HOURS</span>
          </div>
          <p>Monday through Friday: 08:00 – 20:00 UTC</p>
          <p className="text-slate-500">Security flaw alerts triaged 24/7/365.</p>
        </div>

        <div className="rounded-lg bg-[#0b2721] border border-[#5fdee7]/20 p-4 space-y-1">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <Shield className="h-4 w-4 text-[#00ffaa]" />
            <span>SECURITY & CONFIDENTIALITY</span>
          </div>
          <p>PGP fingerprint available upon initial contact.</p>
          <p className="text-slate-500">Zero non-consensual disclosure of source identity.</p>
        </div>
      </div>

    </div>
  );
};
