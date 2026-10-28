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
    <div className="relative w-full overflow-hidden border-y border-[#5fdee7]/40 bg-[#061713] py-2.5 shadow-[0_0_15px_rgba(95,222,231,0.08)]">
      {/* Dynamic left and right fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#061713] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#061713] to-transparent" />

      {/* Static Label Indicator */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-1.5 rounded-md bg-[#0c2f26] border border-[#5fdee7]/50 px-2 py-0.5 text-[10px] font-mono font-bold text-[#5fdee7] shadow-[0_0_8px_rgba(95,222,231,0.3)]">
        <Zap className="h-3 w-3 text-[#00ffaa] fill-[#00ffaa]" />
        <span>WIRE</span>
      </div>

      <div className="animate-ticker pl-4 md:pl-24">
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onClick={() => item.articleId && onSelectArticle(item.articleId)}
            className="flex items-center gap-3 pr-8 cursor-pointer group"
          >
            {/* Glowing Tech Tag */}
            <span className="shrink-0 text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#0f3a30] text-[#5fdee7] border border-[#5fdee7]/30 shadow-[0_0_6px_rgba(95,222,231,0.2)] group-hover:border-[#5fdee7] group-hover:text-white transition-all">
              {item.tag}
            </span>

            {/* Headline */}
            <span className="text-xs font-medium text-slate-200 group-hover:text-[#5fdee7] transition-colors whitespace-nowrap">
              {item.headline}
            </span>

            {/* Timestamp */}
            <span className="text-[11px] font-mono text-slate-400">
              {item.timestamp}
            </span>

            <ArrowRight className="h-3 w-3 text-[#00ffaa] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />

            <span className="text-slate-700 select-none ml-2">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
