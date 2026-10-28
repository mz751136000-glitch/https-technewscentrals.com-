import React from 'react';
import { ArrowLeft, MapPin, ExternalLink, FileText, CheckCircle, FolderOpen, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CategoryKey } from '../types';

interface SitemapPageProps {
  onBackToFeed: () => void;
  onSelectArticle: (articleId: string) => void;
  onNavigateView: (view: any) => void;
  onSelectCategory: (cat: CategoryKey) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({
  onBackToFeed,
  onSelectArticle,
  onNavigateView,
  onSelectCategory
}) => {
  const categories = [
    { id: 'ai-emerging-tech' as const, name: 'AI & Emerging Tech', desc: 'LLM orchestration, quantization, attention benchmarks, and robotics.' },
    { id: 'gadgets-mobile' as const, name: 'Gadgets & Mobile', desc: 'Mobile SOCs, biosensors, OLED burn-in prevention, and Thunderbolt 5.' },
    { id: 'software-apps' as const, name: 'Software & Apps', desc: 'Serverless V8 edge runtimes, eBPF tracing, zero-trust, and WASM.' },
    { id: 'gaming-entertainment' as const, name: 'Gaming & Entertainment', desc: 'DirectStorage, 540Hz OLEDs, Unreal Engine 5 Nanite, and VR foveated rendering.' },
  ];

  const legalPages = [
    { id: 'about', title: 'About Us', desc: 'Editorial Charter, Review Standards & Methodology' },
    { id: 'contact', title: 'Contact Us', desc: 'Official WhatsApp +923020409739 & hostinger992@gmail.com' },
    { id: 'privacy', title: 'Privacy Policy', desc: 'GDPR, CCPA, and Cookie Compliance' },
    { id: 'terms', title: 'Terms & Conditions', desc: 'Apache 2.0 Open Source Code Licensing & IP Rights' },
    { id: 'disclaimer', title: 'Disclaimer', desc: 'Hardware Overclocking & Empirical Benchmark Disclaimers' },
    { id: 'editors', title: 'Editorial Board', desc: 'Council of Systems Architects & Peer Reviewers' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      
      {/* Navigation Header */}
      <div className="flex items-center justify-between border-b border-sky-500/20 pb-4">
        <button
          onClick={onBackToFeed}
          className="cursor-pointer flex items-center gap-2 rounded-lg border border-sky-500/30 bg-slate-900/80 px-3 py-1.5 text-xs font-mono text-sky-400 hover:bg-slate-800 hover:border-sky-400 hover:text-white transition-all"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>BACK TO JOURNAL FEED</span>
        </button>
        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>INDEX STATUS: 100% CRAWLER INDEXED</span>
        </span>
      </div>

      {/* Main Page Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-md bg-sky-950/60 border border-sky-400/30 px-3 py-1 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
          <MapPin className="h-3.5 w-3.5" />
          <span>OFFICIAL SITE DIRECTORY & CRAWLER SITEMAP</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          technewscentrals Architecture Index
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Comprehensive structured catalog of all 20 peer-reviewed research papers, 4 engineering categories, and institutional governance pages. Formatted for human navigation and search engine spiders (Googlebot, Bingbot, AdSense crawlers).
        </p>
        
        {/* Quick XML Sitemap Download / Raw View Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 px-4 py-2 text-xs font-mono font-bold shadow-lg shadow-sky-500/20 transition-all"
          >
            <FileText className="h-4 w-4" />
            <span>VIEW RAW SITEMAP.XML</span>
          </a>
          <a
            href="/robots.txt"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-2 text-xs font-mono font-bold transition-all"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>VIEW ROBOTS.TXT</span>
          </a>
          <a
            href="/ads.txt"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-2 text-xs font-mono font-bold transition-all"
          >
            <span>ADS.TXT SPECIFICATION</span>
          </a>
        </div>
      </header>

      {/* Structured Category Columns */}
      <section className="space-y-8">
        <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <FolderOpen className="h-5 w-5 text-sky-400" />
          <span>RESEARCH CATEGORIES & PUBLISHED PAPERS (20 PAPERS)</span>
        </h2>

        <div className="space-y-8">
          {categories.map((cat) => {
            const catArticles = ARTICLES.filter((a) => a.category === cat.id);
            return (
              <div key={cat.id} className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 space-y-4 hover:border-sky-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <button
                      onClick={() => {
                        onSelectCategory(cat.id);
                        onBackToFeed();
                      }}
                      className="cursor-pointer text-lg font-bold text-sky-400 hover:text-sky-300 flex items-center gap-2 text-left"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-slate-400 mt-0.5">{cat.desc}</p>
                  </div>
                  <span className="text-xs font-mono bg-sky-950 border border-sky-500/30 text-sky-300 px-2.5 py-1 rounded-md shrink-0">
                    {catArticles.length} Published Papers
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {catArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="cursor-pointer group flex items-start gap-3 rounded-lg bg-slate-950/70 border border-slate-800/80 p-3.5 hover:border-sky-500/50 hover:bg-slate-900/80 transition-all"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-sky-950 border border-sky-400/30 text-[10px] font-mono font-bold text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                        PDF
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-xs font-semibold text-slate-200 group-hover:text-sky-400 transition-colors line-clamp-2">
                          {art.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                          <span className="text-emerald-400">{art.topic}</span>
                          <span>·</span>
                          <span>{art.readTime}</span>
                          <span>·</span>
                          <span>{art.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Governance & Legal Pages Directory */}
      <section className="space-y-6 border-t border-slate-800 pt-8">
        <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
          <span>INSTITUTIONAL GOVERNANCE & LEGAL PAGES (6 PAGES)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {legalPages.map((lp) => (
            <div
              key={lp.id}
              onClick={() => {
                onNavigateView(lp.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer group rounded-xl bg-slate-900/60 border border-slate-800 p-5 hover:border-sky-500/40 hover:bg-slate-900 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  PAGE
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                {lp.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <div className="rounded-xl bg-slate-950 border border-slate-800 p-6 space-y-3 font-mono text-xs text-slate-400">
        <div className="text-sky-400 font-bold uppercase tracking-wider">
          SITEMAP METADATA & COMPLIANCE
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300">
          <div>XML Protocol: <span className="text-white">Sitemaps 0.9 / Schema.org</span></div>
          <div>Total URLs Indexed: <span className="text-emerald-400">31 URIs</span></div>
          <div>Verification: <span className="text-sky-400">AdSense & RevBid Compatible</span></div>
        </div>
      </div>

    </div>
  );
};
