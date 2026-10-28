import React from 'react';
import { ArrowLeft, ShieldCheck, Cpu, Terminal, Users, Award, BookOpen, Compass } from 'lucide-react';

interface AboutUsPageProps {
  onBackToFeed: () => void;
  onNavigateToContact: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onBackToFeed, onNavigateToContact }) => {
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
        <span className="text-xs font-mono text-slate-400">ESTABLISHED 2026</span>
      </div>

      {/* Main Header */}
      <header className="space-y-4">
        <div className="inline-block rounded-md bg-[#103a31] border border-[#5fdee7]/30 px-2.5 py-1 text-[11px] font-mono font-bold text-[#5fdee7] uppercase tracking-wider">
          ENGINEERING CHARTER & MISSION
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          About technewscentrals
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          <strong>technewscentrals</strong> is an independent international journal of digital technology, AI systems, modern gadgets, software, and gaming culture. We provide hardware architects, software engineers, and technology leaders with peer-reviewed research papers, empirical benchmarks, and transparent failure-mode analysis.
        </p>
      </header>

      {/* Editorial Origin & Philosophy */}
      <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-mono uppercase tracking-wide">
          Our Founding Principles
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            In a digital media landscape dominated by ephemeral press releases, unverified vendor marketing claims, and shallow 3-minute synthetic benchmarks, <em>technewscentrals</em> was founded to restore empirical rigor to technology journalism.
          </p>
          <p>
            Every paper published on our platform represents weeks of physical lab profiling, source code audit, and peer verification. We believe that true technical understanding requires analyzing the entire vertical stack—from quantum and silicon physics at the transistor level up to user-space distributed runtimes.
          </p>
        </div>
      </section>

      {/* Core Operational Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-[#081c18] border border-[#5fdee7]/20 p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#124237] text-[#5fdee7]">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">Silicon Ground Truth</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Direct physical measurement using high-bandwidth digital oscilloscopes, calibrated thermal cameras, and hardware battery shunt monitors.
          </p>
        </div>

        <div className="rounded-xl bg-[#081c18] border border-[#5fdee7]/20 p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#124237] text-[#00ffaa]">
            <Terminal className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">Open Source Repro</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            All algorithms, eBPF probes, and shaders include working, copyable code snippets with MIT/Apache 2.0 licenses for immediate verification.
          </p>
        </div>

        <div className="rounded-xl bg-[#081c18] border border-[#5fdee7]/20 p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#124237] text-[#5fdee7]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">Zero Sponsor Bias</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Strict refusal of paid vendor editorial placement, embargo favors, or PR influence. All hardware tested is purchased through open retail channels.
          </p>
        </div>
      </section>

      {/* The 4 Core Coverage Beats */}
      <section className="rounded-xl bg-[#071915] border border-[#5fdee7]/30 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white font-mono uppercase tracking-wide">
          Our Four Research Divisions
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-[#0b2721] border border-[#5fdee7]/15 space-y-1.5">
            <span className="text-[#5fdee7] font-mono font-bold uppercase">1. AI & Emerging Tech</span>
            <p className="text-slate-300">
              LLM orchestration, tensor quantization (AWQ/GPTQ), transformer attention complexity, flow matching, and ROS2 edge robotics.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#0b2721] border border-[#5fdee7]/15 space-y-1.5">
            <span className="text-[#00ffaa] font-mono font-bold uppercase">2. Gadgets & Mobile</span>
            <p className="text-slate-300">
              3nm mobile SOC thermals, tandem OLED burn-in prevention, wearable biosensors, and high-frequency Thunderbolt 5 interconnects.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#0b2721] border border-[#5fdee7]/15 space-y-1.5">
            <span className="text-[#5fdee7] font-mono font-bold uppercase">3. Software & Apps</span>
            <p className="text-slate-300">
              Serverless edge V8 runtimes, Linux kernel eBPF tracing, zero-trust cryptographic architectures, local-first CRDTs, and WebAssembly.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#0b2721] border border-[#5fdee7]/15 space-y-1.5">
            <span className="text-[#00ffaa] font-mono font-bold uppercase">4. Gaming & Entertainment</span>
            <p className="text-slate-300">
              DirectStorage 1.2 GPU decompression, console custom APU topology, 540Hz esports latency pipelines, and dynamic foveated VR rendering.
            </p>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#5fdee7]/20 pt-6">
        <div className="text-xs text-slate-400">
          Interested in contributing an architectural paper or reporting a silicon flaw?
        </div>
        <div className="flex gap-3">
          <button
            onClick={onNavigateToContact}
            className="rounded-lg bg-[#5fdee7] px-4 py-2 text-xs font-mono font-bold text-slate-950 hover:bg-[#85eff5] transition-all"
          >
            CONTACT EDITORIAL DESK
          </button>
          <button
            onClick={onBackToFeed}
            className="rounded-lg bg-[#0d2f26] border border-[#5fdee7]/30 px-4 py-2 text-xs font-mono text-[#5fdee7] hover:bg-[#124237] transition-all"
          >
            VIEW ALL PAPERS
          </button>
        </div>
      </div>

    </div>
  );
};
