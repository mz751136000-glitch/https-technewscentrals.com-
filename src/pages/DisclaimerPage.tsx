import React from 'react';
import { ArrowLeft, AlertTriangle, Cpu, TrendingUp, Link2, ShieldAlert, Phone, Mail } from 'lucide-react';

interface DisclaimerPageProps {
  onBackToFeed: () => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onBackToFeed }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#5fdee7]/20 pb-4">
        <button
          onClick={onBackToFeed}
          className="flex items-center gap-2 rounded-lg border border-[#5fdee7]/30 bg-[#0d2f26] px-3 py-1.5 text-xs font-mono text-[#5fdee7] hover:bg-[#124237] transition-all"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>BACK TO JOURNAL FEED</span>
        </button>
        <span className="text-xs font-mono text-[#f87171]">LEGAL DISCLAIMER</span>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-md bg-[#2d1515] border border-[#f87171]/40 px-2.5 py-1 text-[11px] font-mono font-bold text-[#fca5a5] uppercase tracking-wider">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span>DISCLAIMER OF LIABILITY & ENGINEERING NOTICE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Disclaimer
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Please review this disclaimer carefully prior to referencing benchmarks, applying hardware thermal configurations, or deploying experimental kernel drivers published by <strong>technewscentrals</strong>.
        </p>
      </header>

      {/* Disclaimer Sections */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        
        {/* Section 1 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Cpu className="h-4 w-4 text-[#5fdee7]" />
            <span>1. Technical & Engineering Educational Notice</span>
          </h2>
          <p>
            The papers, architectural blueprints, and benchmark figures published on <em>technewscentrals</em> represent empirical observations recorded under specific laboratory test conditions (ambient 23.0°C, direct Monsoon voltage logging, specialized silicon stepping).
          </p>
          <p>
            Hardware performance varies across silicon fabrication lot tolerances (silicon lottery), ambient room temperatures, and firmware revisions. We do not warrant that our experimental figures will be identical on retail consumer configurations without proper calibration.
          </p>
        </section>

        {/* Section 2 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[#00ffaa]" />
            <span>2. No Financial or Investment Advice</span>
          </h2>
          <p>
            Discussions of semiconductor yields, fab node economics (e.g. TSMC N3/N4, GAA nanosheets), cloud serverless compute costs, or hardware market adoption represent engineering analysis only.
          </p>
          <p>
            Nothing published on <em>technewscentrals</em> constitutes financial, securities, or investment advice. Readers must not base capital allocation or stock purchasing decisions on our technological reports.
          </p>
        </section>

        {/* Section 3 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-[#f87171]" />
            <span>3. Hardware Modification & Overclocking Risks</span>
          </h2>
          <p>
            Certain papers detail dynamic power sharing (SmartShift/Dynamic Boost) modifications, liquid metal thermal interface applications, and low-level Linux eBPF kernel injections.
          </p>
          <p className="text-slate-200">
            <strong>Warning:</strong> Flashing custom firmware, increasing digital VRM voltage rails, or bypassing thermal throttles may void hardware warranties, cause permanent thermal damage, or trigger kernel panics. Any implementation of these experimental methods is undertaken at the user’s sole risk.
          </p>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Link2 className="h-4 w-4 text-[#5fdee7]" />
            <span>4. Non-Affiliation & Trademarks</span>
          </h2>
          <p>
            All product names, brand logos, and registered trademarks cited throughout our technical papers (e.g., NVIDIA®, AMD®, Apple®, Qualcomm®, Intel®, Google®, Linux®) remain the property of their respective trademark holders.
          </p>
          <p>
            Their inclusion in technical analysis implies zero sponsorship, commercial endorsement, or corporate affiliation with <em>technewscentrals</em>.
          </p>
        </section>

        {/* Section 5: Official Contact Info */}
        <section className="rounded-xl bg-[#071915] border border-[#5fdee7]/30 p-6 space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono">
            5. Inquiries Regarding This Disclaimer
          </h2>
          <p>
            To submit corrections, cite academic discrepancies, or discuss licensing:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-3 bg-[#0b2721] rounded-lg border border-[#5fdee7]/20">
              <span className="text-slate-400 block mb-1">Official Desk Phone / WhatsApp:</span>
              <a href="tel:+923020409739" className="text-[#00ffaa] font-bold hover:underline">
                +923020409739
              </a>
            </div>
            <div className="p-3 bg-[#0b2721] rounded-lg border border-[#5fdee7]/20">
              <span className="text-slate-400 block mb-1">Official Legal Email:</span>
              <a href="mailto:hostinger992@gmail.com" className="text-[#5fdee7] font-bold hover:underline">
                hostinger992@gmail.com
              </a>
            </div>
          </div>
        </section>

      </div>

      <div className="border-t border-[#5fdee7]/20 pt-6 flex justify-between items-center text-xs font-mono text-slate-500">
        <span>© 2026 technewscentrals. All rights reserved.</span>
        <button onClick={onBackToFeed} className="text-[#5fdee7] hover:underline">
          Return to Feed →
        </button>
      </div>

    </div>
  );
};
