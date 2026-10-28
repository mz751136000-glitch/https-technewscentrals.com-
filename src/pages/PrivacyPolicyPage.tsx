import React from 'react';
import { ArrowLeft, Shield, Lock, EyeOff, FileText, CheckCircle, Phone, Mail } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBackToFeed: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBackToFeed }) => {
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
        <span className="text-xs font-mono text-slate-400">LAST REVISED: OCTOBER 27, 2026</span>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-md bg-[#103a31] border border-[#5fdee7]/30 px-2.5 py-1 text-[11px] font-mono font-bold text-[#5fdee7] uppercase tracking-wider">
          <Shield className="h-3.5 w-3.5" />
          <span>LEGAL POLICY & COMPLIANCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          At <strong>technewscentrals</strong>, we consider user privacy and digital sovereignty fundamental engineering principles, not bureaucratic checkboxes. This Privacy Policy details our operational data handling procedures.
        </p>
      </header>

      {/* Main Legal Clauses */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        
        {/* Clause 1 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <EyeOff className="h-4 w-4 text-[#00ffaa]" />
            <span>1. Zero Behavioral Tracking & Telemetry Sale Guarantee</span>
          </h2>
          <p>
            technewscentrals does not sell, rent, monetize, or distribute personal reading profiles, IP geolocation histories, or user identifiers to third-party data brokers, advertising aggregators, or surveillance firms.
          </p>
          <p>
            We do not inject invasive browser fingerprinting scripts, keystroke logging tools, or third-party pixel beacons into our articles.
          </p>
        </section>

        {/* Clause 2 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Lock className="h-4 w-4 text-[#5fdee7]" />
            <span>2. On-Device Local Storage & Bookmarking</span>
          </h2>
          <p>
            When you bookmark technical papers or adjust reading preferences (e.g., zoom mode, category filters), this state is stored exclusively in your browser’s local client storage (<code className="text-[#5fdee7] font-mono">localStorage</code>).
          </p>
          <p>
            This data never leaves your device and is not transmitted to our backend servers. Clearing your browser cache or site data completely purges these records.
          </p>
        </section>

        {/* Clause 3 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#00ffaa]" />
            <span>3. Google AdSense & Crawler Disclosures (ads.txt)</span>
          </h2>
          <p>
            technewscentrals complies with IAB Tech Lab standards for Authorized Digital Sellers. Our server hosts root <code className="text-[#5fdee7] font-mono">/ads.txt</code> and <code className="text-[#5fdee7] font-mono">/app-ads.txt</code> files for automated crawler verification by Google AdSense (<code className="text-white font-mono">pub-7892341052189342</code>).
          </p>
          <p>
            Per strict platform guidelines, crawler verification files are served as plain text endpoints and contain zero tracking identifiers linked to individual reader sessions.
          </p>
        </section>

        {/* Clause 4 */}
        <section className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/20 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#5fdee7]" />
            <span>4. GDPR & CCPA Compliance Rights</span>
          </h2>
          <p>
            Under the European General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), users possess the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Request confirmation regarding whether any personal data is held.</li>
            <li>Demand immediate, unrecoverable deletion of any email correspondence submitted through our contact desk.</li>
            <li>Object to any automated processing of correspondence.</li>
          </ul>
        </section>

        {/* Clause 5: Official Contact */}
        <section className="rounded-xl bg-[#071915] border border-[#5fdee7]/30 p-6 space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-white font-mono">
            5. Contact The Data Protection Officer
          </h2>
          <p>
            For privacy inquiries, audit requests, or data deletion petitions, contact our legal desk directly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-3 bg-[#0b2721] rounded-lg border border-[#5fdee7]/20">
              <span className="text-slate-400 block mb-1">Phone / WhatsApp Desk:</span>
              <a href="tel:+923020409739" className="text-[#00ffaa] font-bold hover:underline">
                +923020409739
              </a>
            </div>
            <div className="p-3 bg-[#0b2721] rounded-lg border border-[#5fdee7]/20">
              <span className="text-slate-400 block mb-1">Official Privacy Email:</span>
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
