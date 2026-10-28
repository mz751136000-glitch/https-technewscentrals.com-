import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { TICKER_ITEMS } from '../data/articles';

interface TickerTapeProps {
  onSelectArticle: (articleId: string) => void;
}

export const TickerTape: React.FC<TickerTapeProps> = ({ onSelectArticle }) => {
  // Duplicate items for seamless continuous looping
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full overflow-hidden border-y border-sky-500/30 bg-slate-950 py-2.5 shadow-md shadow-sky-500/5">
      {/* Dynamic left and right fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-slate-950 to-transparent" />

      {/* Static Label Indicator */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-1.5 rounded-md bg-slate-900 border border-sky-400/50 px-2 py-0.5 text-[10px] font-mono font-bold text-sky-400 shadow-sm shadow-sky-400/20">
        <Zap className="h-3 w-3 text-emerald-400 fill-emerald-400" />
        <span>WIRE</span>
      </div>

      <div className="animate-ticker pl-4 md:pl-24">
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onClick={() => item.articleId && onSelectArticle(item.articleId)}
            className="cursor-pointer flex items-center gap-3 pr-8 group"
          >
            {/* Glowing Tech Tag */}
            <span className="shrink-0 text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-900 text-sky-400 border border-sky-500/30 group-hover:border-sky-400 group-hover:text-white transition-all">
              {item.tag}
            </span>

            {/* Headline */}
            <span className="text-xs font-medium text-slate-200 group-hover:text-sky-300 transition-colors whitespace-nowrap">
              {item.headline}
            </span>

            {/* Timestamp */}
            <span className="text-[11px] font-mono text-slate-400">
              {item.timestamp}
            </span>

            <ArrowRight className="h-3 w-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />

            <span className="text-slate-800 select-none ml-2">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
