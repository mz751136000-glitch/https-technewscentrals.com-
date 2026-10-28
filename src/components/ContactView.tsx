import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle, Clock, MapPin, Shield } from 'lucide-react';

interface ContactViewProps {
  onBackToFeed: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBackToFeed }) => {
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
      
      {/* Page Header */}
      <div className="space-y-4 border-b border-[#5fdee7]/20 pb-8 text-center sm:text-left">
        <div className="text-xs font-mono font-bold tracking-widest text-[#5fdee7] uppercase">
          EDITORIAL OFFICE & DIRECT DESK
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Contact The Editorial Board
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Submit technical papers for peer review, report silicon anomalies, request benchmark verification logs, or contact our principal systems architects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Official Contact Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/30 p-6 space-y-6">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
              OFFICIAL CONTACT DETAILS
            </h3>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#124237] text-[#00ffaa] border border-[#00ffaa]/30">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp Desk</div>
                <a 
                  href="tel:+923020409739" 
                  className="text-sm font-mono font-bold text-white hover:text-[#5fdee7] transition-colors block"
                >
                  +923020409739
                </a>
                <a 
                  href="https://wa.me/923020409739" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-[#00ffaa] hover:underline block"
                >
                  Direct WhatsApp Chat →
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#124237] text-[#5fdee7] border border-[#5fdee7]/30">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">Editorial Inquiries & Submissions</div>
                <a 
                  href="mailto:hostinger992@gmail.com" 
                  className="text-sm font-mono font-bold text-[#5fdee7] hover:text-white transition-colors block"
                >
                  hostinger992@gmail.com
                </a>
                <p className="text-xs text-slate-400">
                  PGP Key Fingerprint available upon request for security whistleblowers.
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#124237] text-slate-300">
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">Operational Lab Hours</div>
                <div className="text-xs text-slate-300 font-mono">
                  Monday – Friday: 08:00 – 20:00 UTC
                </div>
                <div className="text-xs text-slate-500">
                  Critical hardware flaw disclosures dispatched 24/7/365
                </div>
              </div>
            </div>
          </div>

          {/* Submission Guidelines Note */}
          <div className="rounded-xl bg-[#071915] border border-[#5fdee7]/15 p-5 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 font-mono text-white font-semibold">
              <Shield className="h-4 w-4 text-[#5fdee7]" />
              <span>PAPER SUBMISSION CRITERIA</span>
            </div>
            <p>
              Manuscripts must include reproducible raw telemetry files (CSV, JSONL, or PCAP), hardware testbed specs, and uncompressed vector schematics.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Contact & Submission Form */}
        <div className="lg:col-span-7">
          <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/30 p-6 sm:p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="h-12 w-12 text-[#00ffaa] mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-white font-mono">
                  INQUIRY TRANSMITTED TO EDITORIAL DESK
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you. Your message has been routed to the reviewing editors. Direct confirmation sent to <span className="text-[#5fdee7] font-mono">{formData.email}</span>. Response SLA is within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Technical Manuscript Inquiry', message: '' });
                  }}
                  className="rounded-lg bg-[#124237] border border-[#5fdee7]/40 px-4 py-2 text-xs font-mono text-[#5fdee7] hover:bg-[#164e42]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider mb-2">
                  DISPATCH EDITORIAL TRANSMISSION
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Julian Brand"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg bg-[#071915] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5fdee7] focus:ring-1 focus:ring-[#5fdee7]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Institutional Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg bg-[#071915] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5fdee7] focus:ring-1 focus:ring-[#5fdee7]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Topic Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg bg-[#071915] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#5fdee7]"
                  >
                    <option value="Technical Manuscript Inquiry">Technical Manuscript Inquiry</option>
                    <option value="Silicon Benchmark Verification">Silicon Benchmark Verification</option>
                    <option value="Code Repro & Anomaly Report">Code Repro & Anomaly Report</option>
                    <option value="Editorial Feedback">Editorial Feedback & Corrections</option>
                    <option value="Hardware Review Pitch">Hardware Review Pitch (Retail Unit)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Technical Inquiry / Abstract</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide detailed architectural summary, testbed environment, or telemetry questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg bg-[#071915] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5fdee7] focus:ring-1 focus:ring-[#5fdee7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#5fdee7] py-3 text-xs font-bold font-mono text-slate-950 hover:bg-[#85eff5] transition-all transform active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  <span>TRANSMIT DISPATCH TO EDITORS</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
