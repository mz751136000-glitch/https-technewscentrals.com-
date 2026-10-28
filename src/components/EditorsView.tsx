import React from 'react';
import { ShieldCheck, BookOpen, ExternalLink, Award } from 'lucide-react';

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
      
      {/* Editorial Header */}
      <div className="space-y-4 border-b border-[#5fdee7]/20 pb-8 text-center sm:text-left">
        <div className="text-xs font-mono font-bold tracking-widest text-[#5fdee7] uppercase">
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
            className="flex flex-col justify-between rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-6 shadow-xl transition-all hover:border-[#5fdee7]/60 hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#124237] to-[#081c18] border border-[#5fdee7]/40 font-mono text-lg font-bold text-[#5fdee7] shadow-[0_0_15px_rgba(95,222,231,0.2)]">
                  {editor.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{editor.name}</h3>
                  <p className="text-xs font-mono text-[#5fdee7]">{editor.role}</p>
                  <p className="text-xs text-slate-400">{editor.affiliation}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {editor.bio}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#5fdee7]/15 pt-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-[#00ffaa]">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Peer Reviewer</span>
              </span>
              <span className="text-slate-500">ORCID: {editor.orcid}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Standards Statement */}
      <div className="rounded-xl bg-[#071915] border border-[#5fdee7]/30 p-6 space-y-3 text-center sm:text-left">
        <h3 className="text-base font-bold font-mono text-white uppercase">
          CONFLICT OF INTEREST POLICY
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Editors and reviewers recuse themselves from evaluating silicon architectures or software frameworks developed by organizations with which they have had commercial or consulting ties within the preceding 24 months.
        </p>
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={onBackToFeed}
          className="rounded-lg bg-[#5fdee7] px-6 py-2.5 text-xs font-mono font-bold text-slate-950 hover:bg-[#85eff5] transition-all"
        >
          RETURN TO HOME FEED
        </button>
      </div>

    </div>
  );
};
