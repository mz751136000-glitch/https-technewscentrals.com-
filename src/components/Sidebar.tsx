import React, { useState } from 'react';
import { Article, CategoryKey } from '../types';
import { ARTICLES } from '../data/articles';
import { 
  Search, Mail, CheckCircle, Tag, TrendingUp, 
  FolderOpen, User, Phone, Send, ArrowRight, Clock 
} from 'lucide-react';

interface SidebarProps {
  currentCategory: CategoryKey;
  onSelectCategory: (cat: CategoryKey) => void;
  onSelectArticle: (articleId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigateView: (view: 'feed' | 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | 'editors') => void;
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
    <aside className="w-full space-y-6 lg:space-y-8">
      
      {/* 1. Search Widget */}
      <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-5 shadow-lg">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7] flex items-center gap-2 mb-3">
          <Search className="h-4 w-4" />
          <span>SEARCH THE JOURNAL</span>
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search papers, SOCs, code..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg bg-[#071915] border border-[#5fdee7]/30 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#5fdee7] focus:ring-1 focus:ring-[#5fdee7]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* 2. Author / About Blog Widget */}
      <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-5 shadow-lg text-center sm:text-left space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#124237] to-[#071915] border border-[#5fdee7]/40 text-[#5fdee7] font-mono font-bold text-sm shadow-[0_0_12px_rgba(95,222,231,0.25)]">
            TNC
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">technewscentrals</h3>
            <span className="text-[10px] font-mono text-[#00ffaa] uppercase tracking-wider block">
              ENGINEERING JOURNAL
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          An independent peer-reviewed publication covering modern AI orchestration, 3nm mobile silicon, Linux kernel eBPF, and real-time graphics pipelines.
        </p>
        <button
          onClick={() => onNavigateView('about')}
          className="text-xs font-mono text-[#5fdee7] hover:underline flex items-center gap-1 font-semibold"
        >
          <span>Read Editorial Charter</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      {/* 3. Categories Widget */}
      <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-5 shadow-lg">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7] flex items-center gap-2 mb-3">
          <FolderOpen className="h-4 w-4" />
          <span>RESEARCH CATEGORIES</span>
        </h3>
        <ul className="divide-y divide-[#5fdee7]/10 text-xs">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onSelectCategory(cat.id as CategoryKey)}
                className={`w-full flex items-center justify-between py-2 text-left transition-colors ${
                  currentCategory === cat.id
                    ? 'text-[#5fdee7] font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className="font-mono text-[10px] bg-[#071915] px-2 py-0.5 rounded text-[#00ffaa] border border-[#00ffaa]/20">
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Popular / Trending Posts Widget */}
      <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-5 shadow-lg">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7] flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-[#00ffaa]" />
          <span>TRENDING PAPERS</span>
        </h3>
        <div className="space-y-3.5">
          {popularPosts.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => onSelectArticle(post.id)}
              className="group cursor-pointer flex gap-3 items-start"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#071915] border border-[#5fdee7]/30 text-[10px] font-mono font-bold text-[#5fdee7]">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-slate-200 group-hover:text-[#5fdee7] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Clock className="h-2.5 w-2.5 text-slate-400" />
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span className="text-[#00ffaa]">{post.topic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Newsletter / Subscription Widget */}
      <div className="rounded-xl bg-gradient-to-br from-[#0c3127] to-[#071915] border border-[#00ffaa]/30 p-5 shadow-xl text-center sm:text-left space-y-3">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
          <Mail className="h-4 w-4 text-[#00ffaa]" />
          <span>DAILY ENGINEERING DISPATCH</span>
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Receive peer-reviewed technical blueprints, empirical hardware benchmarks, and architecture breakdowns directly in your inbox.
        </p>
        
        {subscribed ? (
          <div className="flex items-center gap-2 text-xs font-mono text-[#00ffaa] bg-[#071915] p-2.5 rounded-lg border border-[#00ffaa]/30">
            <CheckCircle className="h-4 w-4" />
            <span>Subscribed successfully!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              required
              placeholder="engineer@company.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full rounded-lg bg-[#071915] border border-[#5fdee7]/30 px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#5fdee7]"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[#5fdee7] py-2 text-xs font-mono font-bold text-slate-950 hover:bg-[#85eff5] transition-colors"
            >
              SUBSCRIBE TO DISPATCH
            </button>
          </form>
        )}
      </div>

      {/* 6. Tags Cloud Widget */}
      <div className="rounded-xl bg-[#0b2721] border border-[#5fdee7]/25 p-5 shadow-lg">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5fdee7] flex items-center gap-2 mb-3">
          <Tag className="h-4 w-4" />
          <span>TECHNICAL TAGS CLOUD</span>
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => onSearchChange(t)}
              className="px-2 py-1 rounded bg-[#071915] border border-[#5fdee7]/20 text-[10px] font-mono text-slate-300 hover:border-[#5fdee7] hover:text-[#5fdee7] transition-all"
            >
              #{t}
            </button>
          ))}
        </div>
      </div>

      {/* 7. Official Direct Contact Widget */}
      <div className="rounded-xl bg-[#071915] border border-[#5fdee7]/30 p-5 space-y-2.5 text-xs font-mono">
        <div className="text-[10px] text-[#00ffaa] font-bold uppercase tracking-wider">
          OFFICIAL EDITORIAL DESK
        </div>
        <div className="space-y-1 text-slate-300">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-[#5fdee7]" />
            <a href="tel:+923020409739" className="hover:text-white font-bold">
              +923020409739
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-[#5fdee7]" />
            <a href="mailto:hostinger992@gmail.com" className="hover:text-white truncate">
              hostinger992@gmail.com
            </a>
          </div>
        </div>
        <button
          onClick={() => onNavigateView('contact')}
          className="w-full text-center py-1.5 rounded bg-[#103a31] border border-[#5fdee7]/30 text-[10px] font-bold text-[#5fdee7] hover:bg-[#144b3e] block"
        >
          OPEN CONTACT DESK →
        </button>
      </div>

    </aside>
  );
};
