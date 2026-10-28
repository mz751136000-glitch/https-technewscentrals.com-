import React from 'react';
import { ArrowLeft, FileCheck, Scale, Code2, AlertCircle } from 'lucide-react';

interface TermsConditionsPageProps {
  onBackToFeed: () => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onBackToFeed }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button
          onClick={onBackToFeed}
          className="cursor-pointer flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-1.5 text-xs font-mono text-sky-400 hover:bg-slate-800 hover:border-sky-500/50 hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>BACK TO JOURNAL FEED</span>
        </button>
        <span className="text-xs font-mono text-slate-400">PUBLISHED: OCTOBER 2026</span>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-md bg-sky-500/10 border border-sky-500/30 px-2.5 py-1 text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
          <Scale className="h-3.5 w-3.5" />
          <span>LEGAL AGREEMENT & PUBLISHING TERMS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          These Terms and Conditions govern access to and use of <strong className="text-white">technewscentrals</strong>, its published architectural research papers, custom vector SVG infographics, and source code repositories.
        </p>
      </header>

      {/* Legal Clauses */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        
        {/* Section 1 */}
        <section className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 shadow-xl">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-sky-400" />
            <span>1. Intellectual Property & Ownership</span>
          </h2>
          <p>
            All written articles, technical papers, vector schematics, benchmark datasets, and visual brand assets published under <strong className="text-white">technewscentrals</strong> are protected under international copyright law.
          </p>
          <p className="font-mono text-xs text-emerald-400">
            © 2026 technewscentrals. All rights reserved.
          </p>
        </section>

        {/* Section 2 */}
        <section className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 shadow-xl">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Code2 className="h-4 w-4 text-emerald-400" />
            <span>2. Open Code Snippet License (Apache 2.0 / MIT)</span>
          </h2>
          <p>
            To advance global software and hardware research, all accompanying executable code snippets—including Python orchestrators, CUDA kernels, Rust SIMD routines, and Linux eBPF C programs—are dual-licensed under MIT and Apache 2.0 open-source terms.
          </p>
          <p>
            Engineers and organizations may incorporate, modify, and redistribute these snippets in academic projects or commercial production pipelines with standard attribution.
          </p>
        </section>

        {/* Section 3 */}
        <section className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 shadow-xl">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Scale className="h-4 w-4 text-sky-400" />
            <span>3. Academic Citation & Fair Use Policy</span>
          </h2>
          <p>
            Academic institutions, research bodies, and independent analysts may cite up to 500 words or excerpt vector schematics for non-commercial educational review, provided the publication is cited with author, paper title, and DOI reference.
          </p>
          <p>
            Automated scraping of entire article text for training proprietary commercial LLMs without license agreement is expressly prohibited.
          </p>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 shadow-xl">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-rose-400" />
            <span>4. Limitation of Engineering Liability</span>
          </h2>
          <p>
            All hardware voltage timings, thermal power shunting values, and kernel modifications are provided strictly for educational and peer review research. technewscentrals assumes zero liability for silicon degradation, motherboard shorts, or operating system panics resulting from executing unvalidated low-level code outside isolated staging environments.
          </p>
        </section>

        {/* Section 5: Official Contact Info */}
        <section className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 space-y-4 shadow-xl">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono">
            5. Legal & Editorial Contact Desk
          </h2>
          <p>
            For licensing inquiries, syndicate requests, or formal legal notices:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
              <span className="text-slate-400 block mb-1">Official Legal Phone / WhatsApp:</span>
              <a href="tel:+923020409739" className="cursor-pointer text-emerald-400 font-bold hover:underline">
                +923020409739
              </a>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
              <span className="text-slate-400 block mb-1">Legal Inbox:</span>
              <a href="mailto:hostinger992@gmail.com" className="cursor-pointer text-sky-400 font-bold hover:underline">
                hostinger992@gmail.com
              </a>
            </div>
          </div>
        </section>

      </div>

      <div className="border-t border-slate-800 pt-6 flex justify-between items-center text-xs font-mono text-slate-500">
        <span>© 2026 technewscentrals. All rights reserved.</span>
        <button onClick={onBackToFeed} className="cursor-pointer text-sky-400 hover:text-sky-300 hover:underline">
          Return to Feed →
        </button>
      </div>

    </div>
  );
};
