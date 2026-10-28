import React from 'react';
import { Article } from '../types';
import { InfographicRenderer } from './Infographics';
import { ArrowRight, Clock, Bookmark, Check } from 'lucide-react';

interface HeroFeaturedProps {
  article: Article;
  onReadArticle: (articleId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  onReadArticle,
  isBookmarked,
  onToggleBookmark
}) => {
  return (
    <section className="relative w-full overflow-hidden border-b border-sky-500/20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Salience Tier 1 - Lead Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative Deck & Metadata */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Unboxed Metadata with Typographic Separator */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="font-bold text-sky-400 uppercase tracking-wider">
                LEAD RESEARCH PAPER
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{article.categoryLabel}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-slate-400" />
                {article.readTime}
              </span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 
              onClick={() => onReadArticle(article.id)}
              className="cursor-pointer text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white hover:text-sky-400 transition-colors leading-tight" 
              style={{ textWrap: 'balance' }}
            >
              {article.title}
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {article.subTitle}
            </p>

            {/* Executive Deck Excerpt */}
            <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed border-l-2 border-sky-500/50 pl-3">
              {article.executiveSummary}
            </p>

            {/* Key Findings Bullet Preview */}
            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                KEY ARCHITECTURAL FINDINGS
              </div>
              <ul className="text-xs text-slate-300 space-y-1">
                {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-400 font-mono mt-0.5">▸</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onReadArticle(article.id)}
                className="cursor-pointer flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-xs font-bold font-mono text-slate-950 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30 transition-all transform active:scale-95"
              >
                <span>READ FULL TECHNICAL PAPER</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onToggleBookmark(article.id)}
                className={`cursor-pointer flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-mono transition-all ${
                  isBookmarked
                    ? 'border-emerald-500 bg-emerald-950/80 text-emerald-400'
                    : 'border-slate-700 bg-slate-900/80 text-slate-300 hover:border-sky-400 hover:text-white'
                }`}
                title="Bookmark for offline reading"
              >
                {isBookmarked ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>SAVED</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="h-3.5 w-3.5 text-sky-400" />
                    <span>SAVE PAPER</span>
                  </>
                )}
              </button>
            </div>

            {/* Author Credit */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 border border-sky-400/40 text-[10px] font-mono font-bold text-sky-400">
                {article.author.avatar}
              </div>
              <div>
                <span className="font-medium text-slate-200">{article.author.name}</span>
                <span className="text-slate-500"> — {article.author.role}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Keyword-Specific 3D Embossed Architectural Visual */}
          <div className="lg:col-span-6 space-y-2">
            <div 
              onClick={() => onReadArticle(article.id)}
              className="cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              title="Click to read technical paper and view full zoomable schematic"
            >
              <InfographicRenderer 
                id={article.infographicId} 
                seoAlt={article.seoAlt} 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
