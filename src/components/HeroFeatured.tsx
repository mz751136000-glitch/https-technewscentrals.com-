import React from 'react';
import { Article } from '../types';
import { InfographicRenderer } from './Infographics';
import { ArrowRight, BookOpen, Clock, Calendar, Bookmark, Check } from 'lucide-react';

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
    <section className="relative w-full overflow-hidden border-b border-[#5fdee7]/20 bg-gradient-to-b from-[#0b2721] to-[#081c18] py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Salience Tier 1 - Lead Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative Deck & Metadata */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Unboxed Metadata with Typographic Separator */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="font-semibold text-[#5fdee7] uppercase tracking-wider">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              {article.title}
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {article.subTitle}
            </p>

            {/* Executive Deck Excerpt */}
            <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed border-l-2 border-[#5fdee7]/40 pl-3">
              {article.executiveSummary}
            </p>

            {/* Key Findings Bullet Preview */}
            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#00ffaa]">
                KEY ARCHITECTURAL FINDINGS
              </div>
              <ul className="text-xs text-slate-300 space-y-1">
                {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#5fdee7] font-mono mt-0.5">▸</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onReadArticle(article.id)}
                className="flex items-center gap-2 rounded-lg bg-[#5fdee7] px-5 py-2.5 text-xs font-bold font-mono text-slate-950 hover:bg-[#82eef5] hover:shadow-[0_0_20px_rgba(95,222,231,0.4)] transition-all transform active:scale-95"
              >
                <span>READ FULL TECHNICAL PAPER</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onToggleBookmark(article.id)}
                className={`flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-mono transition-all ${
                  isBookmarked
                    ? 'border-[#00ffaa] bg-[#0c2f25] text-[#00ffaa]'
                    : 'border-[#5fdee7]/30 bg-[#0d2e26]/60 text-slate-300 hover:border-[#5fdee7] hover:text-white'
                }`}
                title="Bookmark for offline reading"
              >
                {isBookmarked ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#00ffaa]" />
                    <span>SAVED</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="h-3.5 w-3.5 text-[#5fdee7]" />
                    <span>SAVE PAPER</span>
                  </>
                )}
              </button>
            </div>

            {/* Author Credit */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#124237] border border-[#5fdee7]/40 text-[10px] font-mono font-bold text-[#5fdee7]">
                {article.author.avatar}
              </div>
              <div>
                <span className="font-medium text-slate-200">{article.author.name}</span>
                <span className="text-slate-500"> — {article.author.role}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Vector Infographic Visual */}
          <div className="lg:col-span-6">
            <div 
              onClick={() => onReadArticle(article.id)}
              className="cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              title="Click to view full paper with zoomable schematic"
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
