import React from 'react';
import { Phone, Mail, Terminal, Shield, ArrowUp, MapPin, FileText } from 'lucide-react';
import { PolicyType } from './EditorialModal';
import { CategoryKey } from '../types';
import { ViewType } from './Header';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
  onOpenInspector: () => void;
  onSelectCategory: (cat: CategoryKey) => void;
  onNavigateView: (view: Exclude<ViewType, 'reader'>) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onOpenInspector,
  onSelectCategory,
  onNavigateView
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 via-indigo-600 to-slate-900 border border-sky-400/40 text-white font-mono text-sm font-black shadow-lg shadow-sky-500/25">
                tnc
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">technewscentrals</span>
            </div>
            
            <p className="text-xs text-sky-400 font-mono uppercase tracking-widest font-bold">
              ENGINEERING JOURNAL - PUBLISHED DAILY
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An independent journal of digital technology, AI systems, modern gadgets, software, and gaming culture. Dedicated to reproducible benchmarks and hardware-software co-design.
            </p>

            {/* Official Contact Callout in Footer */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2 text-xs font-mono shadow-md">
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                OFFICIAL EDITORIAL CONTACT
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="h-3.5 w-3.5 text-sky-400" />
                <a href="tel:+923020409739" className="cursor-pointer hover:text-sky-300 transition-colors font-bold">
                  +923020409739 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="h-3.5 w-3.5 text-sky-400" />
                <a href="mailto:hostinger992@gmail.com" className="cursor-pointer hover:text-sky-300 transition-colors truncate">
                  hostinger992@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Research Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              RESEARCH CATEGORIES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('all'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  All Technical Papers (20)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('ai-emerging-tech'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  AI & Emerging Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('gadgets-mobile'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Gadgets & Mobile
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('software-apps'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Software & Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('gaming-entertainment'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Gaming & Entertainment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Publication & Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              THE PUBLICATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onNavigateView('about'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  About Us & Editorial Charter
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('contact'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Contact Us & Direct Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('editors'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Editorial Board & Council
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('standards')}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Peer Review & Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('sitemap'); scrollToTop(); }}
                  className="cursor-pointer hover:text-emerald-300 transition-colors text-left flex items-center gap-1.5 text-emerald-400 font-mono font-bold"
                >
                  <MapPin className="h-3 w-3" />
                  <span>Interactive Sitemap (31 URIs)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & AdSense / RevBid Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              LEGAL & AD AUDIT
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onNavigateView('privacy'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Privacy Policy (GDPR / CCPA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('terms'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('disclaimer'); scrollToTop(); }}
                  className="cursor-pointer hover:text-sky-300 transition-colors text-left"
                >
                  Disclaimer & Risk Notice
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer hover:text-white transition-colors flex items-center gap-1 font-mono text-slate-400"
                >
                  <FileText className="h-3 w-3 text-sky-400" />
                  <span>sitemap.xml (Crawler)</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenInspector}
                  className="cursor-pointer flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono pt-1 text-left"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>ads.txt & RevBid Validator</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-800 pt-6 text-xs font-mono text-slate-400 gap-4">
          <div>
            © 2026 technewscentrals. All rights reserved. Peer-reviewed journal published daily.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">ISSN 2981-4402 (Online)</span>
            <button
              onClick={scrollToTop}
              className="cursor-pointer flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-sky-400 hover:bg-slate-800 hover:border-sky-400 transition-all shadow-sm"
              aria-label="Scroll to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
