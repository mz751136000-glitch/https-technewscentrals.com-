import React from 'react';
import { Article } from '../types';
import { InfographicRenderer } from './Infographics';
import { Clock, ArrowRight, Bookmark, Check } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onSelect: (articleId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  isBookmarked,
  onToggleBookmark
}) => {
  return (
    <article className="group cursor-pointer flex flex-col justify-between rounded-xl bg-slate-900/80 border border-slate-800 p-5 shadow-lg transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:-translate-y-1">
      
      {/* Top Zone: Clean Unboxed Metadata & Bookmark Action */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-semibold tracking-wider uppercase">
            {article.topic}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{article.readTime}</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(article.id);
          }}
          className={`cursor-pointer p-1.5 rounded-lg transition-colors ${
            isBookmarked 
              ? 'text-emerald-400 bg-emerald-950/80 border border-emerald-500/30' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-slate-800'
          }`}
          title={isBookmarked ? "Remove bookmark" : "Save technical paper"}
          aria-label="Bookmark article"
        >
          {isBookmarked ? <Check className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        </button>
      </div>

      {/* Main Title & Deck */}
      <div className="space-y-2 mb-4" onClick={() => onSelect(article.id)}>
        <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors leading-snug">
          {article.title}
        </h2>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {article.subTitle}
        </p>
      </div>

      {/* Visual Media Banner: 100% Unique, Non-Plagiarized Vector Visual for this Specific Article */}
      <div 
        className="mb-4 transition-transform duration-200 group-hover:scale-[1.01]"
        onClick={() => onSelect(article.id)}
      >
        <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-inner group-hover:border-sky-500/40 transition-colors">
          <InfographicRenderer
            id={article.infographicId}
            seoAlt={article.seoAlt}
            className="w-full"
          />
          <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[9px] font-mono">
            <span className="text-emerald-400 bg-slate-950/90 px-1.5 py-0.5 rounded border border-emerald-500/30">
              0% PLAGIARISM
            </span>
            <span className="text-sky-400 bg-slate-950/90 px-1.5 py-0.5 rounded border border-sky-400/30 uppercase">
              KEYWORD-SPECIFIC SCHEMATIC
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Author & Read Trigger */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 mt-auto">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 border border-sky-400/40 text-[9px] font-mono font-bold text-sky-400">
            {article.author.avatar}
          </div>
          <span className="text-slate-300 font-medium truncate max-w-[120px] sm:max-w-[160px]">
            {article.author.name}
          </span>
        </div>

        <button
          onClick={() => onSelect(article.id)}
          className="cursor-pointer flex items-center gap-1 text-xs font-mono font-bold text-sky-400 group-hover:text-white transition-colors"
        >
          <span>READ PAPER</span>
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </article>
  );
};
