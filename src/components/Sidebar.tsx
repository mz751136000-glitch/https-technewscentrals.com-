import React, { useState } from 'react';
import { Article, CategoryKey } from '../types';
import { ARTICLES } from '../data/articles';
import { AdSenseBanner } from './AdSenseBanner';
import { 
  Search, Mail, CheckCircle, Tag, TrendingUp, 
  FolderOpen, User, Phone, Send, ArrowRight, Clock, MapPin 
} from 'lucide-react';

interface SidebarProps {
  currentCategory: CategoryKey;
  onSelectCategory: (cat: CategoryKey) => void;
  onSelectArticle: (articleId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigateView: (view: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentCategory,
  onSelectCategory,
  onSelectArticle,
  searchQuery,
  onSearchChange,
  onNavigateView
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { id: 'all', label: 'All Technical Papers', count: 20 },
    { id: 'ai-emerging-tech', label: 'AI & Emerging Tech', count: 5 },
    { id: 'gadgets-mobile', label: 'Gadgets & Mobile', count: 5 },
    { id: 'software-apps', label: 'Software & Apps', count: 5 },
    { id: 'gaming-entertainment', label: 'Gaming & Entertainment', count: 5 }
  ];

  const popularPosts = ARTICLES.slice(0, 4);

  const tags = [
    'LLM Agents', 'AWQ Int4', 'FlashAttention', 'Flow Matching', 'ROS2 SLAM', 
    '3nm SOC', 'Vapor Chamber', 'Tandem OLED', 'PAM3 TB5', 'Serverless V8', 
    'Linux eBPF', 'Zero-Trust', 'CRDTs', 'WASM SIMD', 'DirectStorage', '540Hz Panel', 'Foveated VR'
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <aside className="w-full space-y-6">
      
      {/* 1. Search Widget */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl hover:border-slate-700 transition-all">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2 mb-3">
          <Search className="h-4 w-4" />
          <span>SEARCH THE JOURNAL</span>
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search papers, SOCs, code..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg bg-slate-950 border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="cursor-pointer absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* 2. Author / About Blog Widget */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 via-indigo-600 to-slate-900 border border-sky-400/40 text-white font-mono font-black text-sm shadow-lg shadow-sky-500/20">
            TNC
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">technewscentrals</h3>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
              ENGINEERING JOURNAL
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          An independent peer-reviewed publication covering modern AI orchestration, 3nm mobile silicon, Linux kernel eBPF, and real-time graphics pipelines.
        </p>
        <button
          onClick={() => onNavigateView('about')}
          className="cursor-pointer text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition-colors"
        >
          <span>Read Editorial Charter</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      {/* 3. Research Categories Widget */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2 mb-3">
          <FolderOpen className="h-4 w-4" />
          <span>RESEARCH CATEGORIES</span>
        </h3>
        <ul className="divide-y divide-slate-800 text-xs">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onSelectCategory(cat.id as CategoryKey)}
                className={`cursor-pointer w-full flex items-center justify-between py-2 text-left transition-colors ${
                  currentCategory === cat.id
                    ? 'text-sky-400 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className="font-mono text-[10px] bg-slate-950 px-2 py-0.5 rounded text-emerald-400 border border-emerald-500/20">
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Google AdSense & RevBid Half-Page Ad Slot (Compliant Placement) */}
      <AdSenseBanner slot="sidebar" />

      {/* 5. Popular / Trending Posts Widget */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          <span>TRENDING PAPERS</span>
        </h3>
        <div className="space-y-3.5">
          {popularPosts.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => onSelectArticle(post.id)}
              className="cursor-pointer group flex gap-3 items-start"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-950 border border-sky-400/30 text-[10px] font-mono font-bold text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Clock className="h-2.5 w-2.5 text-slate-400" />
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span className="text-emerald-400">{post.topic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Newsletter / Subscription Widget */}
      <div className="rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-sky-500/30 p-5 shadow-xl space-y-3">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
          <Mail className="h-4 w-4 text-emerald-400" />
          <span>DAILY ENGINEERING DISPATCH</span>
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Receive peer-reviewed technical blueprints, empirical hardware benchmarks, and architecture breakdowns directly in your inbox.
        </p>
        
        {subscribed ? (
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-slate-950 p-2.5 rounded-lg border border-emerald-500/30">
            <CheckCircle className="h-4 w-4" />
            <span>Subscribed successfully to Dispatch!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              required
              placeholder="engineer@company.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
            />
            <button
              type="submit"
              className="cursor-pointer w-full rounded-lg bg-sky-500 hover:bg-sky-400 py-2 text-xs font-mono font-bold text-slate-950 transition-colors shadow-md shadow-sky-500/20"
            >
              SUBSCRIBE TO DISPATCH
            </button>
          </form>
        )}
      </div>

      {/* 7. Tags Cloud Widget */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2 mb-3">
          <Tag className="h-4 w-4" />
          <span>TECHNICAL TAGS CLOUD</span>
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => onSearchChange(t)}
              className="cursor-pointer px-2 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300 hover:border-sky-400 hover:text-sky-400 hover:bg-slate-900 transition-all"
            >
              #{t}
            </button>
          ))}
        </div>
      </div>

      {/* 8. Official Direct Contact Widget */}
      <div className="rounded-xl bg-slate-950 border border-slate-800 p-5 space-y-2.5 text-xs font-mono">
        <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
          OFFICIAL EDITORIAL DESK
        </div>
        <div className="space-y-1 text-slate-300">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-sky-400" />
            <a href="tel:+923020409739" className="cursor-pointer hover:text-white font-bold">
              +923020409739
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-sky-400" />
            <a href="mailto:hostinger992@gmail.com" className="cursor-pointer hover:text-white truncate">
              hostinger992@gmail.com
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onNavigateView('contact')}
            className="cursor-pointer text-center py-1.5 rounded-lg bg-sky-500/10 border border-sky-400/30 text-[10px] font-bold text-sky-400 hover:bg-sky-500 hover:text-slate-950 transition-all"
          >
            CONTACT DESK →
          </button>
          <button
            onClick={() => onNavigateView('sitemap')}
            className="cursor-pointer text-center py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-[10px] font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all flex items-center justify-center gap-1"
          >
            <MapPin className="h-3 w-3" />
            <span>SITEMAP</span>
          </button>
        </div>
      </div>

    </aside>
  );
};
