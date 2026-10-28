import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';

interface ConsentBannerProps {
  onOpenPrivacy: () => void;
}

export const ConsentBanner: React.FC<ConsentBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consented = localStorage.getItem('tnc_consent_agreed');
      if (!consented) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('tnc_consent_agreed', 'true');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem('tnc_consent_agreed', 'essential_only');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Privacy and Advertising Consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-lg rounded-xl border border-sky-500/30 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-md transition-all text-xs text-slate-300 space-y-3"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-white font-bold font-mono">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>PRIVACY & AD INTEGRITY (ADSENSE & REVBID)</span>
        </div>
        <button
          onClick={handleEssentialOnly}
          className="cursor-pointer text-slate-400 hover:text-white p-0.5"
          aria-label="Dismiss consent dialog"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        technewscentrals and our advertising partners (Google AdSense, RevBid) utilize transparent metrics to fund independent hardware benchmarks and technical journals without paywalls.
      </p>

      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
        <button
          onClick={handleAccept}
          className="cursor-pointer flex-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-1.5 px-3 transition-colors text-center"
        >
          Accept All Cookies
        </button>
        <button
          onClick={handleEssentialOnly}
          className="cursor-pointer rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 py-1.5 px-3 transition-colors"
        >
          Essential Only
        </button>
        <button
          onClick={onOpenPrivacy}
          className="cursor-pointer text-[11px] text-sky-400 hover:underline px-2"
        >
          Privacy Details →
        </button>
      </div>
    </aside>
  );
};
