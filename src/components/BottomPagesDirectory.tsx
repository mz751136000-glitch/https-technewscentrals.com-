import React from 'react';
import { ViewType } from './Header';
import { 
  FileText, ShieldCheck, Mail, Info, AlertTriangle, 
  Users, ArrowRight, Phone, ExternalLink 
} from 'lucide-react';

interface BottomPagesDirectoryProps {
  onNavigateView: (view: Exclude<ViewType, 'reader'>) => void;
  activeView: ViewType;
}

export const BottomPagesDirectory: React.FC<BottomPagesDirectoryProps> = ({
  onNavigateView,
  activeView
}) => {
  const pages = [
    {
      id: 'about' as const,
      title: 'About Us',
      tag: 'EDITORIAL CHARTER',
      desc: 'Our independent mission, peer-reviewed engineering standards, and silicon testing methodology.',
      icon: Info,
      accent: '#5fdee7'
    },
    {
      id: 'contact' as const,
      title: 'Contact Us',
      tag: 'DIRECT EDITORIAL DESK',
      desc: 'Official WhatsApp (+923020409739) & direct manuscript submission email (hostinger992@gmail.com).',
      icon: Mail,
      accent: '#00ffaa'
    },
    {
      id: 'privacy' as const,
      title: 'Privacy Policy',
      tag: 'GDPR & DATA RIGHTS',
      desc: 'Zero user tracking, strict ad-free privacy disclosures, and transparent data protection commitments.',
      icon: ShieldCheck,
      accent: '#5fdee7'
    },
    {
      id: 'terms' as const,
      title: 'Terms & Conditions',
      tag: 'OPEN CODE & IP',
      desc: 'Apache 2.0 / MIT code snippet redistribution rights, copyright, and research citation guidelines.',
      icon: FileText,
      accent: '#00ffaa'
    },
    {
      id: 'disclaimer' as const,
      title: 'Disclaimer',
      tag: 'HARDWARE & LAB RISK',
      desc: 'Empirical hardware overclocking safety warnings, thermal disclosures, and non-financial advice.',
      icon: AlertTriangle,
      accent: '#facc15'
    },
    {
      id: 'editors' as const,
      title: 'Editorial Board',
      tag: 'PEER REVIEW COUNCIL',
      desc: 'Meet our credentialed systems engineers, silicon architects, and academic research directors.',
      icon: Users,
      accent: '#5fdee7'
    }
  ];

  return (
    <section className="border-t border-[#5fdee7]/20 bg-[#061814] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-[#5fdee7]/15 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00ffaa] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00ffaa] animate-pulse" />
              <span>OFFICIAL JOURNAL PAGES & DIRECTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              technewscentrals Information & Governance
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Complete peer-reviewed journal documentation, verified contact channels, and transparent legal disclosures.
            </p>
          </div>

          <div className="text-xs font-mono text-[#5fdee7] bg-[#0b2721] border border-[#5fdee7]/30 px-3 py-1.5 rounded-lg flex items-center gap-2 shrink-0">
            <Phone className="h-3.5 w-3.5 text-[#00ffaa]" />
            <span>Direct Line: +923020409739</span>
          </div>
        </div>

        {/* 6 VIP Page Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pages.map((p) => {
            const Icon = p.icon;
            const isActive = activeView === p.id;
            return (
              <div
                key={p.id}
                onClick={() => {
                  onNavigateView(p.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group cursor-pointer rounded-xl bg-gradient-to-br from-[#0a231d] to-[#051310] border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(95,222,231,0.15)] ${
                  isActive 
                    ? 'border-[#5fdee7] shadow-[0_0_15px_rgba(95,222,231,0.25)]' 
                    : 'border-[#5fdee7]/20 hover:border-[#5fdee7]/60'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e352c] border border-[#5fdee7]/30 text-[#5fdee7] group-hover:border-[#5fdee7] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" style={{ color: p.accent }} />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#071915] text-[#5fdee7] border border-[#5fdee7]/20">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#5fdee7] transition-colors mb-1.5 flex items-center justify-between">
                  <span>{p.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-[#5fdee7] group-hover:translate-x-1 transition-all" />
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {p.desc}
                </p>

                <div className="pt-2 border-t border-[#5fdee7]/10 flex items-center justify-between text-[11px] font-mono text-[#5fdee7]">
                  <span className="font-semibold group-hover:underline">OPEN PAGE</span>
                  <span className="text-slate-500 text-[10px]">technewscentrals</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
