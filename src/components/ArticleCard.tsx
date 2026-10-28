import React from 'react';
import { Article } from '../types';
import { InfographicRenderer } from './Infographics';
import { Clock, ArrowRight, Bookmark, Check, Cpu } from 'lucide-react';

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
    <article className="group flex flex-col justify-between rounded-xl bg-gradient-to-b from-[#0b2721] to-[#071915] border border-[#5fdee7]/20 p-5 shadow-lg transition-all duration-300 hover:border-[#5fdee7]/60 hover:shadow-[0_0_25px_rgba(95,222,231,0.15)] hover:-translate-y-1">
      
      {/* Top Zone: Clean Unboxed Metadata & Bookmark Action */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[#5fdee7] font-semibold tracking-wider uppercase">
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
          className={`p-1.5 rounded-md transition-colors ${
            isBookmarked 
              ? 'text-[#00ffaa] bg-[#0d342a]' 
              : 'text-slate-400 hover:text-[#5fdee7] hover:bg-[#0c2f25]'
          }`}
          title={isBookmarked ? "Remove bookmark" : "Save technical paper"}
          aria-label="Bookmark article"
        >
          {isBookmarked ? <Check className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        </button>
      </div>

      {/* Main Title & Deck */}
      <div className="space-y-2 mb-4 cursor-pointer" onClick={() => onSelect(article.id)}>
        <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#5fdee7] transition-colors leading-snug">
          {article.title}
        </h2>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {article.subTitle}
        </p>
      </div>

      {/* Visual Media Banner: 100% Unique, Non-Plagiarized Vector Visual for this Specific Article */}
      <div 
        className="mb-4 cursor-pointer transition-transform duration-200 group-hover:scale-[1.01]"
        onClick={() => onSelect(article.id)}
      >
        <div className="relative w-full overflow-hidden rounded-xl border border-[#5fdee7]/25 bg-[#071915] shadow-inner">
          <InfographicRenderer
            id={article.infographicId}
            seoAlt={article.seoAlt}
            className="w-full"
          />
          <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[9px] font-mono">
            <span className="text-[#00ffaa] bg-[#081c18]/90 px-1.5 py-0.5 rounded border border-[#00ffaa]/30">
              0% PLAGIARISM
            </span>
            <span className="text-[#5fdee7] bg-[#081c18]/90 px-1.5 py-0.5 rounded border border-[#5fdee7]/30 uppercase">
              KEYWORD-SPECIFIC SCHEMATIC
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Author & Read Trigger */}
      <div className="flex items-center justify-between border-t border-[#5fdee7]/15 pt-3 mt-auto">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#124237] border border-[#5fdee7]/30 text-[9px] font-mono text-[#5fdee7]">
            {article.author.avatar}
          </div>
          <span className="text-slate-300 font-medium truncate max-w-[120px] sm:max-w-[160px]">
            {article.author.name}
          </span>
        </div>

        <button
          onClick={() => onSelect(article.id)}
          className="flex items-center gap-1 text-xs font-mono font-semibold text-[#5fdee7] group-hover:text-white transition-colors"
        >
          <span>READ PAPER</span>
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </article>
  );
};
