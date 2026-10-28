import React, { useEffect, useState } from 'react';
import { METRIC_STATS } from '../data/articles';
import { FileCode, ShieldCheck, Users, Cpu } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1200; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out

      setCounts(
        METRIC_STATS.map((stat) => Math.round(stat.numericTarget * easeOut))
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(METRIC_STATS.map((stat) => stat.numericTarget));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, []);

  const getMetricIcon = (idx: number) => {
    switch (idx) {
      case 0: return <FileCode className="h-4 w-4 text-[#5fdee7]" />;
      case 1: return <ShieldCheck className="h-4 w-4 text-[#00ffaa]" />;
      case 2: return <Users className="h-4 w-4 text-[#5fdee7]" />;
      case 3: return <Cpu className="h-4 w-4 text-[#00ffaa]" />;
      default: return null;
    }
  };

  const formatDisplay = (index: number) => {
    const target = METRIC_STATS[index].numericTarget;
    const current = counts[index];
    if (target >= 1000) {
      return current.toLocaleString() + METRIC_STATS[index].suffix;
    }
    return current + METRIC_STATS[index].suffix;
  };

  return (
    <div className="w-full border-b border-[#5fdee7]/20 bg-[#071915]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#5fdee7]/15">
          {METRIC_STATS.map((stat, idx) => (
            <div 
              key={stat.label}
              className={`flex flex-col justify-center ${idx > 0 ? 'pt-3 md:pt-0 md:pl-6' : ''}`}
            >
              <div className="flex items-center gap-2 mb-1">
                {getMetricIcon(idx)}
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {stat.label}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl lg:text-3xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                  {formatDisplay(idx)}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-400 truncate">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
