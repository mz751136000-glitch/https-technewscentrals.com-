import React from 'react';
import { X, Shield, FileText, CheckCircle } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'standards';

interface EditorialModalProps {
  isOpen: boolean;
  type: PolicyType;
  onClose: () => void;
}

export const EditorialModal: React.FC<EditorialModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  const getTitle = () => {
    switch (type) {
      case 'privacy': return 'Privacy Policy — 2026 technewscentrals';
      case 'terms': return 'Terms & Conditions of Publication';
      case 'standards': return 'Editorial & Scientific Standards';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-[#5fdee7]/40 bg-[#081c18] shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#5fdee7]/20 bg-[#0b2721] px-6 py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#5fdee7]" />
            <span className="font-mono text-sm font-bold text-white uppercase tracking-wider">
              {getTitle()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-[#124237] hover:text-white"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-xs sm:text-sm text-slate-300 space-y-4 max-h-[70vh] overflow-y-auto leading-relaxed">
          
          {type === 'privacy' && (
            <>
              <p className="font-mono text-xs text-[#5fdee7]">
                Effective Date: October 27, 2026 · technewscentrals Editorial Office
              </p>
              <h4 className="font-bold text-white text-base">1. Zero Non-Consensual Telemetry Commitment</h4>
              <p>
                technewscentrals does not deploy invasive fingerprinting scripts, behavioral telemetry brokers, or third-party identity scrapers. Reading activity across technical papers remains entirely private to your device.
              </p>
              <h4 className="font-bold text-white text-base">2. Local Storage & Offline State</h4>
              <p>
                Bookmarks and reading preferences are saved strictly within your browser's local storage and IndexedDB. No personal data is transmitted to remote analytics servers without explicit user interaction.
              </p>
              <h4 className="font-bold text-white text-base">3. AdSense and Crawler Disclosure</h4>
              <p>
                Authorized advertising crawlers access standardized <code className="text-[#5fdee7]">ads.txt</code> and <code className="text-[#5fdee7]">app-ads.txt</code> endpoints strictly to confirm authorized digital sellers under IAB Tech Lab standards. Crawler tokens are never embedded into user session cookies.
              </p>
              <h4 className="font-bold text-white text-base">4. Direct Contact Information</h4>
              <p>
                For data access requests or privacy questions, reach our compliance team at <span className="text-[#5fdee7] font-mono">hostinger992@gmail.com</span> or via telephone at <span className="text-[#00ffaa] font-mono">+923020409739</span>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p className="font-mono text-xs text-[#5fdee7]">
                Copyright © 2026 technewscentrals. All rights reserved.
              </p>
              <h4 className="font-bold text-white text-base">1. Intellectual Property & Citation Standards</h4>
              <p>
                All 20 published research papers, custom vector SVG infographics, benchmark datasets, and architectural diagrams are original works of technewscentrals. Academic fair use and technical quotations are welcomed provided proper DOI attribution is maintained.
              </p>
              <h4 className="font-bold text-white text-base">2. Open Code Licenses</h4>
              <p>
                All accompanying code snippets (Rust, C++, Python, CUDA, TypeScript, and eBPF C) are licensed under the Apache 2.0 / MIT open-source licenses and may be reproduced in production systems with attribution.
              </p>
              <h4 className="font-bold text-white text-base">3. Limitation of Liability</h4>
              <p>
                Silicon clock profiles, power shunting algorithms, and kernel modifications should be evaluated within sandboxed staging environments. technewscentrals assumes no liability for hardware damage resulting from out-of-spec voltage manipulations.
              </p>
            </>
          )}

          {type === 'standards' && (
            <>
              <p className="font-mono text-xs text-[#00ffaa]">
                Editorial Integrity & Scientific Reproducibility Code
              </p>
              <h4 className="font-bold text-white text-base">1. Hardware Benchmark Reproducibility</h4>
              <p>
                Every hardware review requires standardized ambient temperatures (23.0°C ± 0.2°C), external power monitoring taps, and unedited 60-minute frame logs. We prohibit cherry-picked 3-minute synthetic benchmark runs.
              </p>
              <h4 className="font-bold text-white text-base">2. Corrections Policy</h4>
              <p>
                If an error in empirical data or architectural description is confirmed, an inline correction note with git-style revision diffs will be appended to the top of the technical paper within 24 hours of notification.
              </p>
            </>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex justify-end border-t border-[#5fdee7]/20 bg-[#0b2721] px-6 py-3">
          <button
            onClick={onClose}
            className="rounded bg-[#5fdee7] px-4 py-1.5 text-xs font-mono font-bold text-slate-950 hover:bg-[#85eff5] transition-colors"
          >
            ACKNOWLEDGE & CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
