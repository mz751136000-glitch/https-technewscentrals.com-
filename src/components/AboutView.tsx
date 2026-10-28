import React from 'react';
import { ShieldCheck, Cpu, Terminal, Award, Globe, Users } from 'lucide-react';

interface AboutViewProps {
  onBackToFeed: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToFeed }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      
      {/* Editorial Header */}
      <div className="space-y-4 border-b border-[#5fdee7]/20 pb-8 text-center sm:text-left">
        <div className="text-xs font-mono font-bold tracking-widest text-[#5fdee7] uppercase">
          ABOUT TECHNEWSCENTRALS
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          An Independent Journal of Digital Systems Engineering
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Founded as an uncompromising response to superficial tech reporting and marketing press releases, <strong className="text-white">technewscentrals</strong> is a peer-reviewed digital publication dedicated to deep technical inquiry, empirical hardware profiling, and reproducible software benchmarks.
        </p>
      </div>

      {/* Core Editorial Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#124237] text-[#5fdee7]">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white font-mono">1. Hardware Ground Truth</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We bypass vendor claims with direct oscilloscopes, Monsoon high-voltage battery taps, and thermal infrared cameras. Every performance claim is substantiated with 60-minute stress logs and 1% low frame time metrics.
          </p>
        </div>

        <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#124237] text-[#00ffaa]">
            <Terminal className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white font-mono">2. Code-Level Rigor</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our architectural blueprints include real, reproducible code in Rust, C++, eBPF, CUDA, and TypeScript. We test algorithms against edge cases, detailing root causes and mitigations for production failure modes.
          </p>
        </div>

        <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#124237] text-[#5fdee7]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white font-mono">3. Editorial Independence</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We accept zero paid editorial sponsorships, vendor preview embargo conditions, or PR agency review contracts. All hardware evaluated is purchased through open retail channels or independently verified testbeds.
          </p>
        </div>
      </div>

      {/* Editorial Standards & Peer Review Process */}
      <div className="rounded-xl bg-[#071915] border border-[#5fdee7]/30 p-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Our 4-Stage Peer Review Methodology
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0b2721] p-4 rounded-lg border border-[#5fdee7]/15 space-y-2">
            <span className="text-xs font-mono text-[#5fdee7] font-bold">STAGE 01</span>
            <h4 className="text-sm font-bold text-white">Hypothesis & Silicon Profiling</h4>
            <p className="text-xs text-slate-400">
              Formulating test matrices, deploying hardware probes, and capturing raw execution traces in calibrated thermal environments.
            </p>
          </div>

          <div className="bg-[#0b2721] p-4 rounded-lg border border-[#5fdee7]/15 space-y-2">
            <span className="text-xs font-mono text-[#5fdee7] font-bold">STAGE 02</span>
            <h4 className="text-sm font-bold text-white">Architectural Drafting</h4>
            <p className="text-xs text-slate-400">
              Drafting 1,500-word blueprints, compiling custom vector SVG schematics, and writing executable reference kernels.
            </p>
          </div>

          <div className="bg-[#0b2721] p-4 rounded-lg border border-[#5fdee7]/15 space-y-2">
            <span className="text-xs font-mono text-[#00ffaa] font-bold">STAGE 03</span>
            <h4 className="text-sm font-bold text-white">Blind Engineering Review</h4>
            <p className="text-xs text-slate-400">
              Two independent engineers replicate benchmark figures and audit code snippets for compiler safety and race conditions.
            </p>
          </div>

          <div className="bg-[#0b2721] p-4 rounded-lg border border-[#5fdee7]/15 space-y-2">
            <span className="text-xs font-mono text-[#00ffaa] font-bold">STAGE 04</span>
            <h4 className="text-sm font-bold text-white">Publication & DOI Registration</h4>
            <p className="text-xs text-slate-400">
              Final layout sign-off, schema metadata generation, open data log publication, and academic citation indexing.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={onBackToFeed}
          className="rounded-lg bg-[#5fdee7] px-6 py-2.5 text-xs font-mono font-bold text-slate-950 hover:bg-[#85eff5] transition-all"
        >
          EXPLORE THE RESEARCH PAPERS
        </button>
      </div>

    </div>
  );
};
