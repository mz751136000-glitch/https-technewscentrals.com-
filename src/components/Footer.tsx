import React from 'react';
import { Phone, Mail, Terminal, Shield, ArrowUp } from 'lucide-react';
import { PolicyType } from './EditorialModal';
import { CategoryKey } from '../types';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
  onOpenInspector: () => void;
  onSelectCategory: (cat: CategoryKey) => void;
  onNavigateView: (view: 'feed' | 'about' | 'contact' | 'editors') => void;
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
    <footer className="border-t border-[#5fdee7]/20 bg-[#051411] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#124237] border border-[#5fdee7]/50 font-mono text-sm font-bold text-[#5fdee7]">
                tnc
              </div>
              <span className="text-xl font-bold text-white tracking-tight">technewscentrals</span>
            </div>
            
            <p className="text-xs text-slate-400 font-mono uppercase tracking-widest text-[#5fdee7]">
              ENGINEERING JOURNAL - PUBLISHED DAILY
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              An independent journal of digital technology, AI systems, modern gadgets, software, and gaming culture. Dedicated to reproducible benchmarks and hardware-software co-design.
            </p>

            {/* Official Contact Callout in Footer */}
            <div className="rounded-lg bg-[#081c18] border border-[#5fdee7]/25 p-3.5 space-y-2 text-xs font-mono">
              <div className="text-[10px] text-[#00ffaa] font-bold uppercase tracking-wider">
                OFFICIAL EDITORIAL CONTACT
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="h-3.5 w-3.5 text-[#5fdee7]" />
                <a href="tel:+923020409739" className="hover:text-[#5fdee7] transition-colors">
                  +923020409739 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="h-3.5 w-3.5 text-[#5fdee7]" />
                <a href="mailto:hostinger992@gmail.com" className="hover:text-[#5fdee7] transition-colors truncate">
                  hostinger992@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Research Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7]">
              RESEARCH CATEGORIES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('ai-emerging-tech'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  AI & Emerging Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('gadgets-mobile'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Gadgets & Mobile
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('software-apps'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Software & Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('feed'); onSelectCategory('gaming-entertainment'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Gaming & Entertainment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Journal & Editorial Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7]">
              THE PUBLICATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onNavigateView('about'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  About The Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('editors'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Editorial Board & Council
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigateView('contact'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Contact Desk & Submissions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('standards')}
                  className="hover:text-white transition-colors"
                >
                  Editorial Standards & Peer Review
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & AdSense Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7]">
              LEGAL & AUDIT
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenInspector}
                  className="flex items-center gap-1.5 text-[#00ffaa] hover:underline font-mono"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>ads.txt Validator</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#5fdee7]/15 pt-6 text-xs font-mono text-slate-400 gap-4">
          <div>
            © 2026 technewscentrals. All rights reserved. Peer-reviewed journal published daily.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">ISSN 2981-4402 (Online)</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded bg-[#0b2721] border border-[#5fdee7]/30 px-2.5 py-1 text-[#5fdee7] hover:bg-[#124237] transition-all"
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
