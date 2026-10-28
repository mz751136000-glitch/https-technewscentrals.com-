import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface EditorsViewProps {
  onBackToFeed: () => void;
  onSelectAuthorPapers?: (authorName: string) => void;
}

export const EditorsView: React.FC<EditorsViewProps> = ({ onBackToFeed }) => {
  const editors = [
    {
      name: "Dr. Elena Vance",
      role: "Editor-in-Chief & AI Systems Lead",
      affiliation: "Autonomous Systems Laboratory",
      avatar: "EV",
      bio: "Former Principal Systems Architect focusing on recursive agentic state machines, distributed Raft ledgers, and formal schema verification pipelines.",
      papersCount: 6,
      orcid: "0000-0002-8910-4491"
    },
    {
      name: "Victor Moreau",
      role: "Hardware Benchmark Director",
      avatar: "VM",
      affiliation: "Mobile Benchmark Testing Laboratory",
      bio: "Directs physical instrumentation, Monsoon power analyzers, and thermal chamber testing across mobile SOCs, laptops, and custom console APUs.",
      papersCount: 5,
      orcid: "0000-0003-1284-9022"
    },
    {
      name: "Marcus Thorne",
      role: "Compiler & HPC Architecture Director",
      avatar: "MT",
      affiliation: "High Performance Computing Foundry",
      bio: "Specializes in low-bitwidth tensor quantization (AWQ/GPTQ), Triton fused kernels, and Hopper/Blackwell Tensor Core optimization.",
      papersCount: 4,
      orcid: "0000-0001-7781-3301"
    },
    {
      name: "Sabrina Frost",
      role: "Chief Information Security Editor",
      avatar: "SF",
      affiliation: "Defense Cybersecurity Advisory Group",
      bio: "Pioneers identity-first Zero-Trust architectures, eBPF in-situ kernel telemetry, and Post-Quantum cryptographic handshakes.",
      papersCount: 5,
      orcid: "0000-0002-4419-8230"
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button
          onClick={onBackToFeed}
          className="cursor-pointer flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-1.5 text-xs font-mono text-sky-400 hover:bg-slate-800 hover:border-sky-500/50 hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>BACK TO JOURNAL FEED</span>
        </button>
        <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">VERIFIED PEER REVIEW COUNCIL</span>
      </div>

      {/* Editorial Header */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-block rounded-md bg-sky-500/10 border border-sky-500/30 px-3 py-1 text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
          EDITORIAL BOARD & SENIOR ARCHITECTS
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          The Engineering Review Council
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Every technical paper published on technewscentrals undergoes strict double-blind peer review and independent reproduction by active industry practitioners.
        </p>
      </div>

      {/* Editor Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editors.map((editor) => (
          <div
            key={editor.name}
            className="flex flex-col justify-between rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl transition-all hover:border-sky-500/50 hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-sky-500/40 font-mono text-lg font-bold text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  {editor.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{editor.name}</h3>
                  <p className="text-xs font-mono text-sky-400 font-medium">{editor.role}</p>
                  <p className="text-xs text-slate-400">{editor.affiliation}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {editor.bio}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Peer Reviewer</span>
              </span>
              <span className="text-slate-500">ORCID: {editor.orcid}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Standards Statement */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 space-y-3 text-center sm:text-left">
        <h3 className="text-base font-bold font-mono text-white uppercase tracking-wide">
          CONFLICT OF INTEREST POLICY
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Editors and reviewers recuse themselves from evaluating silicon architectures or software frameworks developed by organizations with which they have had commercial or consulting ties within the preceding 24 months.
        </p>
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={onBackToFeed}
          className="cursor-pointer rounded-lg bg-sky-500 px-6 py-2.5 text-xs font-mono font-bold text-slate-950 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20 active:scale-95"
        >
          RETURN TO HOME FEED
        </button>
      </div>

    </div>
  );
};
