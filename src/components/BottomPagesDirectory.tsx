import React from 'react';
import { ViewType } from './Header';
import { 
  FileText, ShieldCheck, Mail, Info, AlertTriangle, 
  Users, ArrowRight, Phone, MapPin 
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
      accent: '#38bdf8'
    },
    {
      id: 'contact' as const,
      title: 'Contact Us',
      tag: 'DIRECT EDITORIAL DESK',
      desc: 'Official WhatsApp (+923020409739) & direct manuscript submission email (hostinger992@gmail.com).',
      icon: Mail,
      accent: '#10b981'
    },
    {
      id: 'privacy' as const,
      title: 'Privacy Policy',
      tag: 'GDPR & DATA RIGHTS',
      desc: 'Zero user tracking, strict ad-free privacy disclosures, and transparent data protection commitments.',
      icon: ShieldCheck,
      accent: '#38bdf8'
    },
    {
      id: 'terms' as const,
      title: 'Terms & Conditions',
      tag: 'OPEN CODE & IP',
      desc: 'Apache 2.0 / MIT code snippet redistribution rights, copyright, and research citation guidelines.',
      icon: FileText,
      accent: '#10b981'
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
      id: 'sitemap' as const,
      title: 'Sitemap Directory',
      tag: '31 INDEXED URIS',
      desc: 'Full hierarchical catalog of all 20 technical papers, 4 categories, and official crawler index.',
      icon: MapPin,
      accent: '#38bdf8'
    },
  ];

  return (
    <section className="border-t border-slate-800 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-slate-800/80 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OFFICIAL JOURNAL PAGES & DIRECTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              technewscentrals Information & Governance
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
              Complete peer-reviewed journal documentation, verified contact channels, AdSense/RevBid compliance, and transparent legal disclosures.
            </p>
          </div>

          <div className="text-xs font-mono text-sky-400 bg-slate-900 border border-sky-500/30 px-3.5 py-2 rounded-lg flex items-center gap-2 shrink-0">
            <Phone className="h-3.5 w-3.5 text-emerald-400" />
            <a href="tel:+923020409739" className="cursor-pointer hover:underline font-bold">
              Direct Line: +923020409739
            </a>
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
                className={`cursor-pointer group rounded-xl bg-slate-900/60 border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10 ${
                  isActive 
                    ? 'border-sky-400 shadow-lg shadow-sky-500/20 bg-slate-900' 
                    : 'border-slate-800 hover:border-sky-400/60 hover:bg-slate-900/90'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-700 text-sky-400 group-hover:border-sky-400 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" style={{ color: p.accent }} />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-950 text-sky-400 border border-sky-400/20">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5 flex items-center justify-between">
                  <span>{p.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {p.desc}
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-sky-400">
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
