import React from 'react';

interface AdSenseBannerProps {
  slot: 'leaderboard' | 'sidebar' | 'in-feed';
  className?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ slot, className = '' }) => {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 text-center transition-all ${className}`}>
      {/* Required Compliance Label */}
      <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-slate-500 mb-2 px-1">
        <span>SPONSORED TECH ANALYSIS</span>
        <span className="text-sky-400/80">REVBID · ADSENSE AUTHORIZED</span>
      </div>

      {slot === 'leaderboard' ? (
        <div className="flex flex-col items-center justify-center min-h-[90px] rounded-lg bg-gradient-to-r from-slate-900/90 via-slate-800/40 to-slate-900/90 border border-slate-800 p-4">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold mb-1">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CLOUD HYPERSCALER BENCHMARK SUITE</span>
          </div>
          <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
            Enterprise Kubernetes bare-metal orchestration with sub-millisecond edge failover and dedicated L4/L7 DDoS mitigation.
          </p>
          <div className="mt-2 text-[10px] font-mono text-slate-500">
            AdSense Slot ID: ca-pub-7892341052189342 · Unit: responsive_leaderboard_728x90
          </div>
        </div>
      ) : slot === 'sidebar' ? (
        <div className="flex flex-col items-center justify-center min-h-[220px] rounded-lg bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-4 space-y-3">
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
            SILICON SPONSOR
          </span>
          <h4 className="text-xs font-bold text-white leading-snug">
            3nm FinFET RISC-V Custom Core Accelerators
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Direct foundry IP blocks designed for low-latency transformer inference at under 1.2W TDP.
          </p>
          <div className="w-full text-center py-1.5 rounded bg-sky-500/10 border border-sky-400/30 text-sky-400 text-[10px] font-mono font-semibold">
            EXPLORE SPEC SHEET
          </div>
          <span className="text-[9px] font-mono text-slate-600 block">
            RevBid Slot: tnc_sidebar_halfpage_300x250
          </span>
        </div>
      ) : (
        /* In-feed Native Unit */
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg bg-slate-900/70 border border-slate-800 p-4">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 rounded">
                SPONSORED
              </span>
              <span className="text-xs font-bold text-white">Next-Gen Observability & Distributed OpenTelemetry</span>
            </div>
            <p className="text-xs text-slate-400">
              Correlate eBPF kernel traces with user-space span metrics in real-time across 50,000+ edge nodes.
            </p>
          </div>
          <span className="cursor-pointer shrink-0 text-xs font-mono font-bold text-sky-400 bg-sky-950 border border-sky-400/30 px-3 py-1.5 rounded hover:bg-sky-500 hover:text-slate-950 transition-colors">
            READ WHITEPAPER →
          </span>
        </div>
      )}
    </div>
  );
};
