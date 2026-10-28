import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { InfographicRenderer } from './Infographics';
import { 
  ArrowLeft, Bookmark, Check, Copy, Share2, ZoomIn, ZoomOut, 
  Clock, Calendar, User, FileText, BarChart3, AlertTriangle, 
  Terminal, Quote, ArrowRight, ExternalLink
} from 'lucide-react';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (articleId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  relatedArticles: Article[];
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onBack,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
  relatedArticles
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'benchmarks' | 'code' | 'failures'>('blueprint');

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(article.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyCitation = (format: 'bibtex' | 'apa' | 'ieee') => {
    const citation = article.citations[0] || {
      title: article.title,
      authors: article.author.name,
      journal: "technewscentrals Engineering Journal",
      year: "2026",
      doi: "10.5555/tnc.2026." + article.id
    };

    let text = '';
    if (format === 'bibtex') {
      text = `@article{${article.id.replace(/-/g, '_')}_2026,
  author = {${citation.authors}},
  title = {${citation.title}},
  journal = {${citation.journal}},
  year = {${citation.year}},
  doi = {${citation.doi}}
}`;
    } else if (format === 'ieee') {
      text = `${citation.authors}, "${citation.title}," ${citation.journal}, ${citation.year}, doi: ${citation.doi}.`;
    } else {
      text = `${citation.authors} (${citation.year}). ${citation.title}. ${citation.journal}. https://doi.org/${citation.doi}`;
    }

    navigator.clipboard.writeText(text);
    setCopiedCitation(format);
    setTimeout(() => setCopiedCitation(null), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.subTitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#081c18] text-slate-200">
      
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-16 left-0 z-50 h-1 w-full bg-[#0b2721]">
        <div 
          className="h-full bg-gradient-to-r from-[#5fdee7] to-[#00ffaa] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Control Ribbon */}
      <div className="sticky top-[68px] z-30 border-b border-[#5fdee7]/20 bg-[#081c18]/90 backdrop-blur-md px-4 py-2.5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg border border-[#5fdee7]/30 bg-[#0d2f26] px-3 py-1.5 text-xs font-mono text-[#5fdee7] hover:bg-[#124237] hover:border-[#5fdee7] transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>BACK TO JOURNAL FEED</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-mono transition-all ${
                isBookmarked
                  ? 'border-[#00ffaa] bg-[#0c2f25] text-[#00ffaa]'
                  : 'border-[#5fdee7]/30 bg-[#0d2e26] text-slate-300 hover:text-white'
              }`}
              title="Bookmark paper"
            >
              {isBookmarked ? <Check className="h-3.5 w-3.5 text-[#00ffaa]" /> : <Bookmark className="h-3.5 w-3.5 text-[#5fdee7]" />}
              <span>{isBookmarked ? 'SAVED' : 'SAVE'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-lg border border-[#5fdee7]/30 bg-[#0d2e26] px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white hover:border-[#5fdee7] transition-all"
              title="Share technical paper"
            >
              <Share2 className="h-3.5 w-3.5 text-[#5fdee7]" />
              <span>{copiedShare ? 'LINK COPIED' : 'SHARE'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Paper Content Wrapper */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Paper Header & Metadata */}
        <header className="space-y-4 border-b border-[#5fdee7]/20 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-[#5fdee7] font-bold uppercase tracking-wider">
              {article.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span className="text-[#00ffaa]">{article.topic}</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>{article.date}</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>~{article.wordCount} words</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight" style={{ textWrap: 'balance' }}>
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {article.subTitle}
          </p>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#124237] border border-[#5fdee7]/50 font-mono text-xs font-bold text-[#5fdee7]">
              {article.author.avatar}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{article.author.name}</div>
              <div className="text-xs text-slate-400">{article.author.role} · {article.author.affiliation}</div>
            </div>
          </div>
        </header>

        {/* Custom Vector Infographic Visual Banner */}
        <section className="my-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#5fdee7] font-semibold tracking-wider">
              PRIMARY ARCHITECTURAL SCHEMATIC
            </span>
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-[#5fdee7] transition-colors"
            >
              {isZoomed ? <ZoomOut className="h-3.5 w-3.5" /> : <ZoomIn className="h-3.5 w-3.5" />}
              <span>{isZoomed ? 'RESET SCALE' : 'ZOOM VIEW'}</span>
            </button>
          </div>

          <div className={`transition-all duration-300 ${isZoomed ? 'scale-105 shadow-2xl z-20 relative' : ''}`}>
            <InfographicRenderer
              id={article.infographicId}
              seoAlt={article.seoAlt}
            />
          </div>
        </section>

        {/* Section: Executive Summary */}
        <section className="my-8 rounded-xl bg-[#0b2721]/60 border border-[#5fdee7]/25 p-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5fdee7] uppercase tracking-wider mb-2">
            <FileText className="h-4 w-4" />
            <span>EXECUTIVE SUMMARY</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            {article.executiveSummary}
          </p>
        </section>

        {/* Section: Key Takeaways */}
        <section className="my-8 rounded-xl bg-[#071915] border border-[#00ffaa]/25 p-6">
          <div className="text-xs font-mono text-[#00ffaa] uppercase tracking-wider mb-3">
            EMPIRICAL TAKEAWAYS & KEY FINDINGS
          </div>
          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#103a31] text-[10px] font-mono font-bold text-[#00ffaa]">
                  {idx + 1}
                </span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Architectural Blueprint & Theory */}
        <section className="my-10 space-y-6">
          <div className="border-b border-[#5fdee7]/20 pb-3">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {article.architecturalBlueprint.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {article.architecturalBlueprint.description}
            </p>
          </div>

          <div className="space-y-6">
            {article.architecturalBlueprint.subsections.map((sub, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-lg font-semibold text-[#5fdee7]">
                  {sub.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {sub.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Benchmarks & Comparative Analysis */}
        <section className="my-10 rounded-xl bg-[#0b2721] border border-[#5fdee7]/30 p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-4 w-4 text-[#5fdee7]" />
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
              {article.benchmarks.title}
            </h2>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            {article.benchmarks.description}
          </p>

          {/* Interactive Benchmark Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {article.benchmarks.metrics.map((metric, i) => (
              <div 
                key={i} 
                className="rounded-lg bg-[#071915] border border-[#5fdee7]/20 p-4 transition-all hover:border-[#5fdee7]/50"
              >
                <div className="text-xs font-medium text-slate-300 mb-2">{metric.label}</div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Baseline</div>
                    <div className="text-xs font-mono text-slate-400 line-through">{metric.baseline}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-[#00ffaa] uppercase">Optimized</div>
                    <div className="text-base font-bold font-mono text-white">{metric.optimized}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-[#5fdee7]/10 pt-2 text-[11px] font-mono">
                  <span className="text-slate-500">Delta Gain:</span>
                  <span className="font-bold text-[#5fdee7]">{metric.delta}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Implementation Code Snippet */}
        <section className="my-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-[#00ffaa]" />
              <h2 className="text-base font-bold font-mono text-white uppercase tracking-wider">
                IMPLEMENTATION CODE SPECIFICATION ({article.codeSnippet.filename})
              </h2>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 rounded-md bg-[#0d2e26] border border-[#5fdee7]/30 px-2.5 py-1 text-xs font-mono text-[#5fdee7] hover:bg-[#124237] transition-all"
            >
              {copiedCode ? (
                <>
                  <Check className="h-3 w-3 text-[#00ffaa]" />
                  <span className="text-[#00ffaa]">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>COPY CODE</span>
                </>
              )}
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#5fdee7]/30 bg-[#051411] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#5fdee7]/15 bg-[#081f1a] px-4 py-2 text-xs font-mono text-slate-400">
              <span>{article.codeSnippet.filename}</span>
              <span className="text-[10px] uppercase text-[#5fdee7]">{article.codeSnippet.language}</span>
            </div>
            <pre className="overflow-x-auto p-4 text-xs font-mono leading-relaxed text-[#a7f3d0]">
              <code>{article.codeSnippet.code}</code>
            </pre>
          </div>
          <p className="text-xs text-slate-400 italic">
            Note: {article.codeSnippet.explanation}
          </p>
        </section>

        {/* Section: Production Failure Modes & Mitigations */}
        <section className="my-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#f87171] uppercase tracking-wider">
            <AlertTriangle className="h-4 w-4" />
            <span>PRODUCTION FAILURE MODES & MITIGATIONS</span>
          </div>
          <div className="space-y-4">
            {article.failureModes.map((fm, i) => (
              <div key={i} className="rounded-lg bg-[#0a1e1a] border border-[#f87171]/25 p-4 space-y-2">
                <div className="text-sm font-bold text-white">
                  Failure Mode {i + 1}: <span className="text-[#fca5a5]">{fm.mode}</span>
                </div>
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-400">Root Cause:</span> {fm.rootCause}
                </div>
                <div className="text-xs text-[#00ffaa]">
                  <span className="font-semibold text-[#5fdee7]">Mitigation:</span> {fm.mitigation}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Final Verdict */}
        <section className="my-10 rounded-xl bg-gradient-to-r from-[#0d2f27] to-[#071915] border border-[#5fdee7]/30 p-6">
          <div className="text-xs font-mono text-[#5fdee7] uppercase tracking-wider mb-2">
            EDITORIAL VERDICT
          </div>
          <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
            {article.verdict}
          </p>
        </section>

        {/* Section: Academic Citations & Citation Tool */}
        <section className="my-10 border-t border-[#5fdee7]/20 pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono font-bold uppercase text-slate-300">
              ACADEMIC CITATIONS & DOI REFERENCES
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-slate-500">Export:</span>
              <button
                onClick={() => handleCopyCitation('bibtex')}
                className="px-2 py-0.5 rounded bg-[#0d2e26] text-[#5fdee7] hover:bg-[#124237]"
              >
                {copiedCitation === 'bibtex' ? 'COPIED' : 'BibTeX'}
              </button>
              <button
                onClick={() => handleCopyCitation('apa')}
                className="px-2 py-0.5 rounded bg-[#0d2e26] text-[#5fdee7] hover:bg-[#124237]"
              >
                {copiedCitation === 'apa' ? 'COPIED' : 'APA'}
              </button>
              <button
                onClick={() => handleCopyCitation('ieee')}
                className="px-2 py-0.5 rounded bg-[#0d2e26] text-[#5fdee7] hover:bg-[#124237]"
              >
                {copiedCitation === 'ieee' ? 'COPIED' : 'IEEE'}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {article.citations.map((c, i) => (
              <div key={i} className="text-xs font-mono text-slate-400 bg-[#071915] p-3 rounded-lg border border-[#5fdee7]/15">
                <span className="text-slate-300 font-semibold">{c.authors} ({c.year}).</span> "{c.title}." <span className="italic text-[#5fdee7]">{c.journal}</span>. DOI: {c.doi}
              </div>
            ))}
          </div>
        </section>

        {/* Related Technical Papers */}
        {relatedArticles.length > 0 && (
          <section className="my-12 border-t border-[#5fdee7]/20 pt-8">
            <h3 className="text-base font-bold font-mono uppercase text-white mb-4">
              RELATED TECHNICAL PAPERS IN {article.categoryLabel.toUpperCase()}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.slice(0, 2).map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.id)}
                  className="group cursor-pointer rounded-lg bg-[#0b2721] border border-[#5fdee7]/20 p-4 transition-all hover:border-[#5fdee7] hover:-translate-y-0.5"
                >
                  <div className="text-[10px] font-mono text-[#5fdee7] uppercase mb-1">
                    {rel.topic} · {rel.readTime}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#5fdee7] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1 text-xs font-mono text-[#00ffaa]">
                    <span>READ PAPER</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

    </div>
  );
};
